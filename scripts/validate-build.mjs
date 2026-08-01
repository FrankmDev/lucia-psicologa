import fs from 'node:fs';
import path from 'node:path';

const distDirectory = path.resolve('dist');

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

function resolveOutputPath(pathname) {
  const cleanPath = decodeURIComponent(pathname).split(/[?#]/)[0];
  if (cleanPath === '/') return path.join(distDirectory, 'index.html');

  const directPath = path.join(distDirectory, cleanPath.replace(/^\//, ''));
  return path.extname(directPath) ? directPath : path.join(directPath, 'index.html');
}

if (!fs.existsSync(distDirectory)) {
  console.error('No existe dist/. Ejecuta `bun run build` antes de validar.');
  process.exit(1);
}

const htmlFiles = walk(distDirectory).filter((file) => file.endsWith('.html'));
const homeHtml = fs.readFileSync(path.join(distDirectory, 'index.html'), 'utf8');
const issues = [];

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const relativeDirectory = path.relative(distDirectory, path.dirname(file)).split(path.sep).join('/');
  const route = relativeDirectory ? `/${relativeDirectory}` : '/';
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];

  if (duplicateIds.length > 0) {
    issues.push(`${route}: IDs duplicados: ${duplicateIds.join(', ')}`);
  }

  for (const match of html.matchAll(/<(?:a|link|script|img|source|video)\b[^>]*?\s(?:href|src|poster)="([^"]+)"/g)) {
    const value = match[1];
    if (!value || /^(?:https?:|mailto:|tel:|data:|blob:|#)/.test(value)) continue;

    const resolvedPath = value.startsWith('/') ? value : path.posix.resolve(route, value);
    if (!fs.existsSync(resolveOutputPath(resolvedPath))) {
      issues.push(`${route}: recurso o enlace no resuelto: ${value}`);
    }
  }

  for (const match of html.matchAll(/<[^>]+\ssrcset="([^"]+)"/g)) {
    for (const candidate of match[1].split(',')) {
      const value = candidate.trim().split(/\s+/)[0];
      if (!value || /^(?:https?:|data:)/.test(value)) continue;

      const resolvedPath = value.startsWith('/') ? value : path.posix.resolve(route, value);
      if (!fs.existsSync(resolveOutputPath(resolvedPath))) {
        issues.push(`${route}: recurso de srcset no resuelto: ${value}`);
      }
    }
  }

  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    const image = match[0];
    if (!/\salt(?:="[^"]*")?(?:\s|>)/.test(image)) {
      issues.push(`${route}: imagen sin atributo alt`);
    }
    if (!/\swidth="\d+"/.test(image) || !/\sheight="\d+"/.test(image)) {
      issues.push(`${route}: imagen sin dimensiones explícitas`);
    }
  }

  for (const match of html.matchAll(/<button\b[^>]*>/g)) {
    if (!/\stype="(?:button|submit|reset)"/.test(match[0])) {
      issues.push(`${route}: botón sin atributo type`);
    }
  }

  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    if (!ids.includes(match[1])) {
      issues.push(`${route}: ancla local inexistente: #${match[1]}`);
    }
  }

  for (const match of html.matchAll(/href="\/#([^"]+)"/g)) {
    if (!homeHtml.includes(`id="${match[1]}"`)) {
      issues.push(`${route}: ancla de portada inexistente: #${match[1]}`);
    }
  }
}

if (issues.length > 0) {
  console.error(`QA estática: ${htmlFiles.length} páginas, ${issues.length} incidencias.`);
  console.error(issues.join('\n'));
  process.exit(1);
}

console.log(`QA estática: ${htmlFiles.length} páginas, 0 incidencias.`);

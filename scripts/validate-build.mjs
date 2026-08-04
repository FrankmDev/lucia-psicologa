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
const canonicalRoutes = new Map();
const pageTitles = new Map();
const pageDescriptions = new Map();
const internalLinkTargets = new Set();
const expectedFavicon = '/favicon.png';
const expectedAppleTouchIcon = '/apple-touch-icon.png';

function decodeHtml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function collectMatches(html, expression) {
  return [...html.matchAll(expression)].map((match) => decodeHtml(match[1].trim()));
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const relativeDirectory = path.relative(distDirectory, path.dirname(file)).split(path.sep).join('/');
  const route = relativeDirectory ? `/${relativeDirectory}` : '/';
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  const titles = collectMatches(html, /<title>([^<]*)<\/title>/g);
  const descriptions = collectMatches(html, /<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/g);
  const canonicals = collectMatches(html, /<link\s+rel="canonical"\s+href="([^"]+)"\s*\/?>/g);
  const robots = collectMatches(html, /<meta\s+name="robots"\s+content="([^"]+)"\s*\/?>/g);
  const h1Count = (html.match(/<h1\b/g) || []).length;
  const isIndexable = robots.length === 1 && !robots[0].includes('noindex');
  const schemaTypes = new Set();

  if (duplicateIds.length > 0) {
    issues.push(`${route}: IDs duplicados: ${duplicateIds.join(', ')}`);
  }

  if (titles.length !== 1 || !titles[0]) {
    issues.push(`${route}: debe existir un único title no vacío`);
  } else {
    if (pageTitles.has(titles[0])) issues.push(`${route}: title duplicado con ${pageTitles.get(titles[0])}`);
    pageTitles.set(titles[0], route);
  }

  if (descriptions.length !== 1 || descriptions[0].length < 70 || descriptions[0].length > 170) {
    issues.push(`${route}: meta description ausente o fuera del rango editorial de 70-170 caracteres`);
  } else {
    if (pageDescriptions.has(descriptions[0])) issues.push(`${route}: meta description duplicada con ${pageDescriptions.get(descriptions[0])}`);
    pageDescriptions.set(descriptions[0], route);
  }

  if (canonicals.length !== 1 || !canonicals[0].startsWith('https://luciamillanpsicologia.es/')) {
    issues.push(`${route}: canonical único y absoluto no válido`);
  } else {
    const canonicalPath = new URL(canonicals[0]).pathname;
    if (canonicalPath !== '/' && canonicalPath.endsWith('/')) {
      issues.push(`${route}: canonical con barra final inconsistente: ${canonicals[0]}`);
    }
    if (canonicalRoutes.has(canonicals[0])) issues.push(`${route}: canonical duplicado con ${canonicalRoutes.get(canonicals[0])}`);
    canonicalRoutes.set(canonicals[0], { route, isIndexable });
  }

  if (robots.length !== 1 || (!robots[0].includes('index') && !robots[0].includes('noindex'))) {
    issues.push(`${route}: directiva robots ausente o no válida`);
  }

  if (h1Count !== 1) {
    issues.push(`${route}: se esperaba un H1 y se encontraron ${h1Count}`);
  }

  for (const property of ['og:title', 'og:description', 'og:url', 'og:image']) {
    if (!html.includes(`property="${property}"`)) issues.push(`${route}: falta ${property}`);
  }

  if (!html.includes(`rel="icon" type="image/png" href="${expectedFavicon}" sizes="512x512"`)) {
    issues.push(`${route}: falta el favicon de marca PNG de 512x512`);
  }
  if (!html.includes(`rel="apple-touch-icon" href="${expectedAppleTouchIcon}" sizes="180x180"`)) {
    issues.push(`${route}: falta el icono de marca para Apple`);
  }
  if (!html.includes('rel="sitemap" type="application/xml" href="https://luciamillanpsicologia.es/sitemap.xml"')) {
    issues.push(`${route}: falta el enlace de descubrimiento al sitemap canónico`);
  }

  for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(match[1]);
      if (data['@context'] !== 'https://schema.org' || !Array.isArray(data['@graph'])) {
        issues.push(`${route}: el JSON-LD no contiene un grafo schema.org válido`);
      } else {
        for (const node of data['@graph']) {
          const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
          types.filter(Boolean).forEach((type) => schemaTypes.add(type));
        }
      }
    } catch {
      issues.push(`${route}: JSON-LD no parseable`);
    }
  }

  if (!html.includes('type="application/ld+json"')) {
    issues.push(`${route}: falta JSON-LD`);
  }
  if (!schemaTypes.has('Person') || !schemaTypes.has('ProfessionalService') || !schemaTypes.has('WebSite')) {
    issues.push(`${route}: faltan entidades base Person, ProfessionalService o WebSite`);
  }
  if (route.startsWith('/blog/') && !schemaTypes.has('BlogPosting')) {
    issues.push(`${route}: falta schema BlogPosting`);
  }
  if (route === '/blog' && !schemaTypes.has('ItemList')) {
    issues.push(`${route}: falta schema ItemList`);
  }
  if ((route === '/blog' || route.startsWith('/blog/') || ['/aviso-legal', '/privacidad', '/cookies'].includes(route)) && !schemaTypes.has('BreadcrumbList')) {
    issues.push(`${route}: falta schema BreadcrumbList`);
  }

  for (const match of html.matchAll(/<(?:a|link|script|img|source|video)\b[^>]*?\s(?:href|src|poster)="([^"]+)"/g)) {
    const value = match[1];
    if (!value || /^(?:https?:|mailto:|tel:|data:|blob:|#)/.test(value)) continue;

    const resolvedPath = value.startsWith('/') ? value : path.posix.resolve(route, value);
    if (!fs.existsSync(resolveOutputPath(resolvedPath))) {
      issues.push(`${route}: recurso o enlace no resuelto: ${value}`);
    }
  }

  for (const match of html.matchAll(/<a\b[^>]*?\shref="([^"]+)"/g)) {
    const value = match[1];
    if (!value.startsWith('/')) continue;
    const targetPath = value.split(/[?#]/)[0] || '/';
    internalLinkTargets.add(targetPath !== '/' ? targetPath.replace(/\/$/, '') : '/');
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
    if (image.includes('images.unsplash.com') && (!/\ssrcset="[^"]+"/.test(image) || !/\ssizes="[^"]+"/.test(image))) {
      issues.push(`${route}: imagen remota de Unsplash sin srcset o sizes responsivos`);
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

for (const [canonical, page] of canonicalRoutes) {
  const canonicalPath = new URL(canonical).pathname;
  if (page.isIndexable && canonicalPath !== '/' && !internalLinkTargets.has(canonicalPath)) {
    issues.push(`${page.route}: página indexable huérfana, sin enlaces internos rastreables`);
  }
}

const sitemapPath = path.join(distDirectory, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  issues.push('No se ha generado sitemap.xml');
} else {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const sitemapUrls = new Set(collectMatches(sitemap, /<loc>([^<]+)<\/loc>/g));
  const sitemapEntries = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>\s*<\/url>/g)];
  const expectedUrls = new Set(
    [...canonicalRoutes.entries()]
      .filter(([, page]) => page.isIndexable)
      .map(([canonical]) => canonical),
  );

  for (const url of expectedUrls) {
    if (!sitemapUrls.has(url)) issues.push(`sitemap.xml: falta URL indexable ${url}`);
  }
  for (const url of sitemapUrls) {
    if (!expectedUrls.has(url)) issues.push(`sitemap.xml: URL sin página indexable equivalente ${url}`);
  }
  if (sitemapEntries.length !== sitemapUrls.size) {
    issues.push('sitemap.xml: cada URL debe tener una fecha lastmod válida');
  }
  for (const [, url, lastmod] of sitemapEntries) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod) || Number.isNaN(Date.parse(`${lastmod}T00:00:00Z`))) {
      issues.push(`sitemap.xml: lastmod no válida para ${url}: ${lastmod}`);
    }
    if (Date.parse(`${lastmod}T00:00:00Z`) > Date.now()) {
      issues.push(`sitemap.xml: lastmod futura para ${url}: ${lastmod}`);
    }
  }
}

const robotsPath = path.join(distDirectory, 'robots.txt');
const rssPath = path.join(distDirectory, 'rss.xml');
const llmsPath = path.join(distDirectory, 'llms.txt');
const faviconPath = path.join(distDirectory, expectedFavicon.slice(1));
const appleTouchIconPath = path.join(distDirectory, expectedAppleTouchIcon.slice(1));
const robotsText = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, 'utf8') : '';
if (!robotsText.includes('https://luciamillanpsicologia.es/sitemap.xml')) {
  issues.push('robots.txt no referencia el sitemap canónico');
}
if (!robotsText.includes('User-agent: *') || !robotsText.includes('Allow: /') || /(^|\n)Disallow:/i.test(robotsText)) {
  issues.push('robots.txt no permite explícitamente el rastreo completo');
}
if (!fs.existsSync(rssPath) || !fs.readFileSync(rssPath, 'utf8').includes('<rss version="2.0"')) {
  issues.push('No se ha generado un feed RSS válido');
}
if (!fs.existsSync(llmsPath)) {
  issues.push('No se ha generado llms.txt');
}
if (!fs.existsSync(faviconPath)) {
  issues.push('No se ha generado el favicon de marca');
}
if (!fs.existsSync(appleTouchIconPath)) {
  issues.push('No se ha generado el icono de marca para Apple');
}
function readPngDimensions(file) {
  const buffer = fs.readFileSync(file);
  if (buffer.toString('ascii', 1, 4) !== 'PNG') return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}
if (fs.existsSync(faviconPath)) {
  const dimensions = readPngDimensions(faviconPath);
  if (!dimensions || dimensions.width !== 512 || dimensions.height !== 512) {
    issues.push('El favicon debe ser PNG cuadrado de 512x512');
  }
}
if (fs.existsSync(appleTouchIconPath)) {
  const dimensions = readPngDimensions(appleTouchIconPath);
  if (!dimensions || dimensions.width !== 180 || dimensions.height !== 180) {
    issues.push('El icono para Apple debe ser PNG cuadrado de 180x180');
  }
}
for (const obsoleteAsset of ['favicon.ico', 'favicon.svg', 'favicon.jpg', 'logo-dark.webp', 'logo-white.webp']) {
  if (fs.existsSync(path.join(distDirectory, obsoleteAsset))) {
    issues.push(`Asset público obsoleto o duplicado: ${obsoleteAsset}`);
  }
}

if (issues.length > 0) {
  console.error(`QA estática: ${htmlFiles.length} páginas, ${issues.length} incidencias.`);
  console.error(issues.join('\n'));
  process.exit(1);
}

console.log(`QA estática: ${htmlFiles.length} páginas, 0 incidencias.`);

import type { APIRoute } from 'astro';
import { articles } from '../data/blog';
import { SITE, SITE_ROUTES } from '../data/site';

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function urlEntry(path: string, lastmod: string) {
  const loc = new URL(path, SITE.url).href;

  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
  </url>`;
}

export const GET: APIRoute = () => {
  const staticEntries = SITE_ROUTES.map((route) =>
    urlEntry(route.path, route.lastmod),
  );
  const articleEntries = articles.map((article) =>
    urlEntry(`/blog/${article.slug}`, article.modifiedISO),
  );

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...articleEntries].join('\n')}
</urlset>
`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      },
    },
  );
};

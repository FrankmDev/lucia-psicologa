import type { APIRoute } from 'astro';
import { articles } from '../data/blog';
import { SITE, SITE_ROUTES } from '../data/site';

const today = new Date().toISOString().split('T')[0];

function urlEntry(path: string, lastmod: string, changefreq: string, priority: string) {
  const loc = new URL(path, SITE.url).href;

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export const GET: APIRoute = () => {
  const staticEntries = SITE_ROUTES.map((route) =>
    urlEntry(route.path, today, route.changefreq, route.priority),
  );
  const articleEntries = articles.map((article) =>
    urlEntry(`/blog/${article.slug}/`, article.dateISO, 'monthly', '0.7'),
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
      },
    },
  );
};

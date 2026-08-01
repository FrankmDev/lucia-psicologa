import type { APIRoute } from 'astro';
import { getSortedArticles } from '../data/blog';
import { SITE } from '../data/site';

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = () => {
  const items = getSortedArticles().map((article) => {
    const url = `${SITE.url}/blog/${article.slug}`;

    return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(article.excerpt)}</description>
      <category>${escapeXml(article.categoryLabel)}</category>
      <dc:creator>${escapeXml(SITE.name)}</dc:creator>
      <pubDate>${new Date(`${article.dateISO}T09:00:00+02:00`).toUTCString()}</pubDate>
    </item>`;
  });

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(`Blog de ${SITE.businessName}`)}</title>
    <link>${SITE.url}/blog</link>
    <description>${escapeXml('Artículos de psicología sobre ansiedad, trauma, EMDR, duelo, autoestima y regulación emocional.')}</description>
    <language>es-ES</language>
    <lastBuildDate>${new Date('2026-08-01T09:00:00+02:00').toUTCString()}</lastBuildDate>
${items.join('\n')}
  </channel>
</rss>
`,
    {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      },
    },
  );
};

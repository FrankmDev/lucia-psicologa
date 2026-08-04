import { SITE } from '../data/site';

export type SchemaNode = Record<string, unknown>;

export const SCHEMA_IDS = {
  person: `${SITE.url}/#lucia-millan-jimenez`,
  practice: `${SITE.url}/#consulta-psicologia`,
  website: `${SITE.url}/#website`,
} as const;

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return `/${pathname.replace(/^\/+|\/+$/g, '')}`;
}

export function absoluteUrl(pathname: string): string {
  return new URL(normalizePath(pathname), `${SITE.url}/`).href;
}

export function buildBaseSchema(defaultImage: string): SchemaNode[] {
  const person: SchemaNode = {
    '@type': 'Person',
    '@id': SCHEMA_IDS.person,
    name: SITE.name,
    url: `${SITE.url}/#sobre-mi`,
    image: defaultImage,
    jobTitle: 'Psicóloga general sanitaria',
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'Número de colegiada',
      value: SITE.license,
    },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Universidad Nacional de Educación a Distancia', alternateName: 'UNED' },
      { '@type': 'CollegeOrUniversity', name: 'Universidad Internacional de La Rioja', alternateName: 'UNIR' },
    ],
    knowsAbout: SITE.specialties,
    sameAs: SITE.social,
    worksFor: { '@id': SCHEMA_IDS.practice },
  };

  const practice: SchemaNode = {
    '@type': 'ProfessionalService',
    '@id': SCHEMA_IDS.practice,
    name: SITE.businessName,
    alternateName: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/favicon.png`,
      width: 512,
      height: 512,
    },
    image: defaultImage,
    email: SITE.email,
    telephone: SITE.phone,
    priceRange: '€€',
    founder: { '@id': SCHEMA_IDS.person },
    employee: { '@id': SCHEMA_IDS.person },
    address: {
      '@type': 'PostalAddress',
      ...SITE.address,
      display: undefined,
    },
    areaServed: [
      { '@type': 'City', name: 'Ciudad Real' },
      { '@type': 'AdministrativeArea', name: 'Castilla-La Mancha' },
      { '@type': 'Country', name: 'España' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      email: SITE.email,
      contactType: 'Solicitud de primera sesión',
      areaServed: 'ES',
      availableLanguage: ['es', 'Spanish'],
    },
    sameAs: SITE.social,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de psicología',
      itemListElement: SITE.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          provider: { '@id': SCHEMA_IDS.practice },
          areaServed: service.areaServed,
        },
      })),
    },
  };

  const website: SchemaNode = {
    '@type': 'WebSite',
    '@id': SCHEMA_IDS.website,
    name: SITE.businessName,
    alternateName: SITE.name,
    description: SITE.description,
    url: SITE.url,
    inLanguage: SITE.locale,
    publisher: { '@id': SCHEMA_IDS.practice },
  };

  return [person, practice, website];
}

export function buildBreadcrumbSchema(
  canonical: string,
  items: Array<{ name: string; path: string }>,
): SchemaNode {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildSchemaGraph(nodes: SchemaNode[]): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.map((node) => {
      const { '@context': _context, ...cleanNode } = node;
      return cleanNode;
    }),
  };
}

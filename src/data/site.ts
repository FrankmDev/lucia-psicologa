export const SITE = {
  url: 'https://luciamillanpsicologia.es',
  name: 'Lucía Millán Jiménez',
  businessName: 'Lucía Millán Psicología',
  title: 'Psicóloga en Ciudad Real y online | Lucía Millán',
  description:
    'Psicóloga general sanitaria en Ciudad Real y online. Terapia individual para ansiedad, trauma, duelo y autoestima. Solicita una primera sesión.',
  locale: 'es-ES',
  email: 'luciamillanpsico@gmail.com',
  phone: '+34 722535914',
  phoneHref: '+34722535914',
  phoneDisplay: '722 53 59 14',
  whatsappHref: 'https://wa.me/34722535914',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Calle+Toledo+8+Ciudad+Real',
  license: 'CM03673',
  address: {
    streetAddress: 'c/ Toledo, 8, 2° Planta',
    postalCode: '13001',
    addressLocality: 'Ciudad Real',
    addressRegion: 'Castilla-La Mancha',
    addressCountry: 'ES',
    display: 'c/ Toledo, 8, 2° Planta, 13001 Ciudad Real',
  },
  social: [
    'https://www.instagram.com/luciamillanpsico/',
    'https://www.linkedin.com/in/luc%C3%ADa-mill%C3%A1n-jim%C3%A9nez-304258389/',
    'https://www.doctoralia.es/lucia-millan-jimenez/psicologo/ciudad-real',
  ],
  specialties: [
    'Psicología general sanitaria',
    'Terapia individual',
    'Terapia online',
    'Ansiedad',
    'Trauma',
    'Duelo',
    'Autoestima',
    'Regulación emocional',
    'EMDR Nivel I',
    'Terapia Cognitivo Conductual (TCC)',
    'Terapia de Aceptación y Compromiso (ACT)',
    'Terapia Focalizada en Emociones (TFE)',
    'Sistema de Familia Interna (IFS)',
  ],
  services: [
    {
      name: 'Terapia individual presencial en Ciudad Real',
      description: 'Acompañamiento psicológico individual adaptado al motivo de consulta y al momento del proceso.',
      areaServed: { '@type': 'City', name: 'Ciudad Real' },
    },
    {
      name: 'Terapia psicológica online',
      description: 'Sesiones individuales de psicología por videollamada para personas adultas en España.',
      areaServed: { '@type': 'Country', name: 'España' },
    },
    {
      name: 'Terapia para ansiedad, trauma, duelo y autoestima',
      description: 'Evaluación e intervención psicológica individual desde un enfoque integrador.',
      areaServed: { '@type': 'Country', name: 'España' },
    },
  ],
};

export const SITE_ROUTES = [
  { path: '/', lastmod: '2026-08-01' },
  { path: '/blog', lastmod: '2026-08-01' },
  { path: '/aviso-legal', lastmod: '2026-08-01' },
  { path: '/privacidad', lastmod: '2026-08-01' },
  { path: '/cookies', lastmod: '2026-08-01' },
];

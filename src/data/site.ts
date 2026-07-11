export const SITE = {
  url: 'https://luciamillanpsicologia.es',
  name: 'Lucía Millán Jiménez',
  title: 'Lucía Millán Jiménez | Psicóloga clínica',
  description:
    'Psicología clínica en Ciudad Real. Terapia individual presencial y online para ansiedad, trauma, duelo y malestar emocional, con enfoque integrador y formación en EMDR.',
  email: 'luciamillanpsico@gmail.com',
  phone: '+34 722535914',
  phoneHref: '+34722535914',
  license: 'CM03673',
  address: {
    streetAddress: 'c/ Toledo, 8, 2° Planta',
    postalCode: '13001',
    addressLocality: 'Ciudad Real',
    addressRegion: 'Castilla-La Mancha',
    addressCountry: 'ES',
  },
  social: [
    'https://www.instagram.com/luciamillanpsico/',
    'https://www.linkedin.com/in/luc%C3%ADa-mill%C3%A1n-jim%C3%A9nez-304258389/',
    'https://www.doctoralia.es/lucia-millan-jimenez/psicologo/ciudad-real',
  ],
};

export const SITE_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/blog/', priority: '0.8', changefreq: 'weekly' },
  { path: '/aviso-legal/', priority: '0.3', changefreq: 'yearly' },
  { path: '/privacidad/', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookies/', priority: '0.3', changefreq: 'yearly' },
];

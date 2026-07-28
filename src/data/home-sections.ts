export interface EditorialItem {
  number: string;
  label: string;
  title: string;
  description: string;
}

export interface SituationItem extends EditorialItem {
  color: string;
}

export const situations: SituationItem[] = [
  {
    number: '01',
    label: 'ALERTA',
    title: 'Vives en alerta constante.',
    description:
      'El ruido mental no se apaga, notas tensión en el cuerpo o tienes la sensación de que algo malo puede ocurrir en cualquier momento.',
    color: '122, 138, 138',
  },
  {
    number: '02',
    label: 'DESÁNIMO',
    title: 'Te cuesta encontrar la motivación.',
    description:
      'La apatía, el desinterés o la tristeza hacen que incluso aquello que antes disfrutabas requiera demasiado esfuerzo.',
    color: '184, 168, 138',
  },
  {
    number: '03',
    label: 'RELACIONES',
    title: 'Tus relaciones te agotan o te duelen.',
    description:
      'Te cuesta poner límites, temes el rechazo o vuelves a encontrarte en vínculos marcados por el conflicto, la dependencia o la culpa.',
    color: '138, 154, 137',
  },
  {
    number: '04',
    label: 'PASADO',
    title: 'El pasado sigue condicionando tu presente.',
    description:
      'Algunas experiencias regresan en forma de bloqueo, hipervigilancia, culpa o un vacío que no sabes explicar.',
    color: '168, 138, 122',
  },
];

export interface TherapyAspect extends EditorialItem {
  color: string;
}

export const therapyAspects: TherapyAspect[] = [
  {
    number: '01',
    label: 'SEGURIDAD',
    title: 'Un espacio libre de juicio.',
    description:
      'Hablar con libertad, sin miedo al juicio ni a tener que justificar lo que sientes. Un lugar donde puedes expresarte con calma y sentirte escuchada de verdad.',
    color: '111, 125, 103',
  },
  {
    number: '02',
    label: 'CLARIDAD',
    title: 'Comprender lo que te ocurre.',
    description:
      'Poner nombre a lo que pasa para entender tus reacciones y reducir la culpa que cargas. Dar sentido a lo vivido y ganar perspectiva sobre lo que te ocurre.',
    color: '184, 168, 138',
  },
  {
    number: '03',
    label: 'REGULACIÓN',
    title: 'Herramientas para tus emociones.',
    description:
      'Incorporar recursos prácticos para calmar la ansiedad y responder distinto a lo que sientes. Herramientas que puedas usar también fuera de sesión.',
    color: '138, 154, 137',
  },
  {
    number: '04',
    label: 'HISTORIA',
    title: 'Procesar lo que aún te pesa.',
    description:
      'Identificar y trabajar experiencias del pasado que siguen condicionando tu presente. Revisar lo vivido para que deje de mandar en tu día a día.',
    color: '122, 138, 138',
  },
  {
    number: '05',
    label: 'VÍNCULOS',
    title: 'Límites, autoestima y vínculos.',
    description:
      'Aprender a cuidarte, expresar lo que necesitas y construir relaciones más equilibradas. Poner límites con claridad y relacionarte sin perderte.',
    color: '168, 138, 122',
  },
  {
    number: '06',
    label: 'VALORES',
    title: 'Una vida más alineada contigo.',
    description:
      'Tomar decisiones conectadas con tus valores y con lo que de verdad importa para ti. Orientar tu vida hacia aquello que te resulta significativo y coherente.',
    color: '141, 151, 132',
  },
];

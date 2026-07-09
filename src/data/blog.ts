/**
 * Blog articles data — single source of truth.
 * All blog articles are defined here and consumed by
 *  - src/components/BlogSection.astro  (landing page cards)
 *  - src/pages/blog.astro              (blog listing)
 *  - src/pages/blog/[slug].astro       (individual article)
 */

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  categoryLabel: string;
  date: string;
  dateISO: string;
  readTime: string;
  excerpt: string;
  content: string;
  keywords: string[];
}

const articleImageUrls: Record<string, string> = {
  'emdr-ciudad-real':
    'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&auto=format&fit=crop&crop=entropy',
  'duelo-perdida-ciudad-real':
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&auto=format&fit=crop&crop=entropy',
  'mindfulness-regulacion-ciudad-real':
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&auto=format&fit=crop&crop=entropy',
  'ansiedad-ciudad-real':
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&auto=format&fit=crop&crop=entropy',
  'primera-consulta-ciudad-real':
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&auto=format&fit=crop&crop=entropy',
  'autoestima-ciudad-real':
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&auto=format&fit=crop&crop=entropy',
};

export function getArticleImage(slug: string, width = 1400, height = 980): string {
  const fallback =
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&auto=format&fit=crop&crop=entropy';

  return `${articleImageUrls[slug] ?? fallback}&w=${width}&h=${height}`;
}

export const articles: BlogArticle[] = [
  // ════════════════════════════════════════════════════
  // Article 1 — EMDR
  // ════════════════════════════════════════════════════
  {
    slug: 'emdr-ciudad-real',
    title: 'EMDR y trauma: cómo se trabaja en terapia',
    metaTitle: 'Terapia EMDR en Ciudad Real | Trauma y regulación emocional',
    metaDescription: 'Qué es la terapia EMDR, cuándo puede estar indicada y cómo se integra en un proceso psicológico para trauma y malestar asociado.',
    category: 'trauma',
    categoryLabel: 'Trauma',
    date: '11 de mayo de 2025',
    dateISO: '2025-05-11',
    readTime: '12 min',
    excerpt: 'Una explicación clínica y accesible sobre EMDR, trauma, regulación emocional y preparación antes de iniciar el procesamiento.',
    keywords: ['terapia EMDR Ciudad Real', 'psicóloga EMDR Ciudad Real', 'tratamiento trauma Ciudad Real', 'EMDR psicología'],
    content: `
<p class="lead">
  A veces una experiencia del pasado sigue activándose en el presente: una imagen, una sensación corporal, una reacción intensa o una evitación que limita la vida diaria. No siempre se vive como un recuerdo claro. A veces aparece como ansiedad, hipervigilancia, bloqueo o dificultad para confiar.
</p>

<p>
  El <strong>EMDR</strong> puede ser una herramienta útil cuando existe trauma o recuerdos con una carga emocional elevada. No borra lo vivido ni garantiza un cambio inmediato; ayuda a reprocesar información que quedó asociada a miedo, culpa, indefensión o alerta corporal.
</p>

<p>
  Si sospechas que algo de tu historia sigue condicionando tu presente, aquí encontrarás una explicación sobre qué es el EMDR, cuándo puede estar indicado, cómo se prepara una sesión y qué límites conviene tener en cuenta.
</p>

<h2>¿Qué es exactamente la terapia EMDR?</h2>

<p>
  EMDR son las siglas de <em>Eye Movement Desensitization and Reprocessing</em>, que en español se traduce como Desensibilización y Reprocesamiento por Movimientos Oculares. Fue desarrollada en 1987 por la psicóloga estadounidense Francine Shapiro, quien descubrió —casi por accidente— que ciertos movimientos oculares rápidos reducían la intensidad emocional de los recuerdos perturbadores.
</p>

<p>
  Desde entonces, el EMDR ha sido investigado en numerosos estudios y cuenta con respaldo en guías clínicas internacionales para el abordaje del trauma. La <strong>Organización Mundial de la Salud (OMS)</strong> lo contempla para el tratamiento de las secuelas psicológicas del trauma y del trastorno de estrés postraumático (TEPT) cuando lo aplica un profesional formado.
</p>

<blockquote>
  <p>El EMDR no busca borrar lo ocurrido. Busca que el recuerdo pueda integrarse con menos carga emocional y más sensación de presente.</p>
  <cite>— Enfoque clínico del reprocesamiento</cite>
</blockquote>

<h2>¿Cómo funciona el EMDR en el cerebro? Una explicación sin jerga</h2>

<p>
  Tu cerebro tiene un sistema natural para procesar experiencias. Cuando algo ocurre, normalmente lo digieres, aprendes lo que hay que aprender, y el recuerdo se almacena como un episodio más de tu vida. Pero cuando una experiencia es demasiado intensa, abrumadora o amenazante, ese sistema de procesamiento se bloquea. El recuerdo queda congelado en el tiempo, con toda la carga emocional, física y sensorial del momento en que ocurrió.
</p>

<p>
  Es como si tu cerebro guardara un archivo corrupto. Cada vez que algo lo activa —un olor, un sonido, una situación parecida— el archivo se abre y te devuelve al momento del trauma. No es que lo recuerdes. Es que <strong>lo revives</strong>. Tu cuerpo reacciona como si el peligro estuviera aquí y ahora, aunque han pasado años.
</p>

<h3>La clave: el movimiento bilateral</h3>

<p>
  La terapia EMDR se apoya en el modelo PISA, Procesamiento de la Información a Sistemas Adaptativos, y utiliza estimulación bilateral: movimientos oculares guiados, sonidos alternos o golpecitos técnicos conocidos como tapping. Esta estimulación se aplica de forma controlada para favorecer que el sistema de procesamiento pueda integrar la experiencia con menos carga emocional.
</p>

<p>
  Estudios de neuroimagen han demostrado que durante el EMDR se producen cambios mensurables en la actividad cerebral:
</p>

<ul>
  <li><strong>Disminución de la actividad en la amígdala</strong>, el centro de alarma del cerebro responsable del miedo y la ansiedad.</li>
  <li><strong>Aumento de la actividad en la corteza prefrontal</strong>, la zona que nos permite pensar con claridad, tomar decisiones y regular emociones.</li>
  <li><strong>Reorganización de las redes de memoria</strong>, de modo que el recuerdo pasa de ser una experiencia vivida a ser un episodio recordado.</li>
</ul>

<p>
  En términos prácticos: el recuerdo sigue existiendo, pero puede perder parte de su intensidad y dejar de activar el sistema de alarma con la misma fuerza.
</p>

<h2>¿Para qué problemas sirve el EMDR? Más de lo que imaginas</h2>

<p>
  Muchas personas asocian el EMDR exclusivamente con traumas graves: accidentes, agresiones, desastres naturales. También puede ser útil en otras experiencias estresantes o relacionales cuando la evaluación clínica indica que el recuerdo sigue activando malestar en el presente:
</p>

<ul>
  <li><strong>Traumas simples y complejos:</strong> accidentes de tráfico en la A-4, caídas, agresiones, experiencias médicas difíciles, situaciones de violencia.</li>
  <li><strong>Trastorno de estrés postraumático (TEPT):</strong> flashbacks, pesadillas, hipervigilancia, evitación de lugares o situaciones.</li>
  <li><strong>Ansiedad crónica y ataques de pánico:</strong> especialmente cuando hay un origen identificable o sospechado.</li>
  <li><strong>Fobias:</strong> miedo a conducir tras un accidente, fobia a espacios cerrados, fobias sociales con raíz traumática.</li>
  <li><strong>Duelo complicado:</strong> cuando la pérdida de un ser querido deja una herida que no cierra y bloquea la vida.</li>
  <li><strong>Recuerdos de infancia:</strong> experiencias de abandono, humillación, rechazo o negligencia que siguen condicionando la autoestima y las relaciones.</li>
  <li><strong>Síndrome del impostor y perfeccionismo:</strong> a menudo enraizados en experiencias tempranas de crítica o comparación.</li>
</ul>

<p>
  El estrés acumulado —exámenes, oposiciones, precariedad laboral, rupturas sentimentales— puede desencadenar o reactivar recuerdos que parecían superados. El EMDR ofrece una vía estructurada para abordar esas activaciones cuando la evaluación clínica indica que es adecuado.
</p>

<h2>¿Cómo es una sesión de EMDR en mi consulta?</h2>

<p>
  Una de las preguntas más frecuentes es: "¿Qué hacemos exactamente en la sesión?". Voy a explicártelo paso a paso, porque la transparencia elimina el miedo a lo desconocido.
</p>

<h3>Fase 1: Evaluación y preparación (1-2 sesiones)</h3>

<p>
  Antes de iniciar el procesamiento, dedico tiempo a conocerte, entender tu historia y evaluar si el EMDR es adecuado para ti. También te enseño técnicas de regulación emocional —respiración, anclaje, contención— para que puedas gestionar cualquier emoción intensa que surja durante el proceso. No empezamos hasta que te sientas seguro.
</p>

<h3>Fase 2: Procesamiento EMDR (3-8 sesiones, según el caso)</h3>

<p>
  En la sesión de procesamiento, identificamos juntos el recuerdo objetivo, la creencia negativa asociada ("soy inseguro", "no puedo confiar en nadie", "soy culpable") y la emoción corporal que acompaña al recuerdo. Luego iniciamos la estimulación bilateral mientras mantienes el recuerdo en tu mente.
</p>

<p>
  Durante la estimulación, tu cerebro comienza a asociar libremente. Pueden surgir imágenes, sensaciones, emociones, pensamientos. Mi trabajo es guiarte sin interferir en ese proceso natural. No interpreto. No analizo. Guío y estabilizo. Lo que ocurre es que tu propio sistema nervioso está reorganizando la información.
</p>

<p>
  Al final de la sesión, evaluamos juntos el cambio. En muchos procesos, el objetivo es que la intensidad emocional del recuerdo disminuya y que la persona pueda relacionarse con lo vivido con más distancia, menos activación corporal y mayor sensación de control.
</p>

<h3>Fase 3: Instalación y cierre (1-2 sesiones)</h3>

<p>
  Una vez que el recuerdo ha perdido su carga negativa, trabajamos en instalar una creencia positiva y adaptiva: "soy capaz", "puedo confiar en mi juicio", "no fue mi culpa". Esto no es autoengaño. Es la verdad que tu sistema nervioso puede ahora integrar porque el trauma ya no bloquea la visión clara.
</p>

<blockquote>
  <p>Un objetivo habitual del trabajo con EMDR es que la persona pueda recordar o exponerse a estímulos asociados al trauma con menos activación física y más sensación de control.</p>
  <cite>— Objetivo clínico frecuente en trauma</cite>
</blockquote>

<h2>¿Es seguro? ¿Duele? ¿Puedo empeorar?</h2>

<p>
  Estas preguntas son completamente válidas. El EMDR es seguro cuando es aplicado por un profesional formado y acreditado. No es una técnica que se aprende en un fin de semana. Requiere formación específica, supervisión clínica y compromiso ético.
</p>

<p>
  Durante el procesamiento pueden surgir emociones intensas. Es normal y es parte del proceso. Pero nunca te dejo solo con ellas. Cada sesión termina con una técnica de estabilización para que salgas con recursos concretos. Además, entre sesiones, te doy herramientas para gestionar lo que pueda aparecer.
</p>

<p>
  Respecto a empeorar: antes de iniciar EMDR valoramos estabilidad, recursos y momento vital. A veces, entre sesiones pueden surgir recuerdos o emociones relacionadas; por eso el proceso se prepara, se revisa y se acompaña con herramientas de regulación.
</p>

<h2>EMDR: por qué cada vez más personas lo eligen</h2>

<p>
  En los últimos años, el EMDR ha ganado visibilidad. Universidades y equipos clínicos han incluido formaciones en terapias basadas en la evidencia, y cada vez más profesionales de la salud mental se especializan en este enfoque. Los motivos de esta tendencia son claros:
</p>

<ul>
  <li><strong>Trabajo focalizado:</strong> permite abordar recuerdos o escenas concretas dentro de un plan terapéutico más amplio.</li>
  <li><strong>Evidencia clínica:</strong> cuenta con investigación y guías internacionales que respaldan su uso en trauma cuando lo aplica un profesional formado.</li>
  <li><strong>No requiere verbalización detallada:</strong> no es necesario contar cada detalle del trauma. El cerebro procesa la información sin necesidad de revivirla en voz alta.</li>
  <li><strong>Abordaje integral:</strong> trabaja simultáneamente con la mente, el cuerpo y las emociones.</li>
  <li><strong>Durabilidad:</strong> los cambios suelen mantenerse en el tiempo porque el recuerdo se ha reprocesado, no solo gestionado.</li>
</ul>

<p>
  En mi consulta, combino el EMDR con otras herramientas según las necesidades de cada persona. No es un protocolo rígido. Es un marco flexible que adapto a tu historia, tus síntomas y tus objetivos.
</p>

<h2>Cómo saber si el EMDR es para ti</h2>

<p>
  No todo el mundo necesita EMDR, y no todo el mundo está listo para recibirlo. Es adecuado para ti si reconoces alguna de estas situaciones:
</p>

<ul>
  <li>Tienes un recuerdo específico que sigue activando emociones intensas años después.</li>
  <li>Experimentas flashbacks, pesadillas o sensaciones de revivir el pasado.</li>
  <li>Evitas lugares, personas o situaciones por miedo a sentirte mal.</li>
  <li>Sientes que una parte de tu vida quedó "congelada" tras un acontecimiento.</li>
  <li>Has probado otras terapias y sientes que no avanzas en lo más profundo.</li>
  <li>Tu cuerpo reacciona de forma desproporcionada ante estímulos cotidianos.</li>
</ul>

<p>
  Si estás en duda, la primera sesión sirve para evaluar tu caso y explicar si el EMDR es adecuado para ti. Si no lo es, valoramos otro enfoque terapéutico.
</p>

<h2>El primer paso: una conversación honesta</h2>

<p>
  Cuando el trauma se mantiene en el tiempo, la persona suele organizar su vida alrededor de lo que evita, teme o no puede nombrar. El trabajo terapéutico busca reducir esa interferencia y ampliar recursos de regulación.
</p>

<p>
  Si sientes que algo del pasado sigue afectando a tu presente, puedes solicitar una primera sesión. No necesitas llevar un diagnóstico cerrado: basta con explicar qué ocurre y desde cuándo.
</p>

<p>
  <a href="/blog/duelo-perdida-ciudad-real">
    Si lo que estás viviendo es una pérdida reciente, en este artículo explico cómo se trabaja el duelo desde la terapia.
  </a>
</p>
    `
  },

  // ════════════════════════════════════════════════════
  // Article 2 — Duelo
  // ════════════════════════════════════════════════════
  {
    slug: 'duelo-perdida-ciudad-real',
    title: 'Afrontar el duelo cuando el dolor no pasa',
    metaTitle: 'Psicóloga especialista en duelo en Ciudad Real | Terapia individual',
    metaDescription: 'Señales de duelo complicado, cuándo pedir ayuda psicológica y cómo puede trabajarse una pérdida en terapia individual.',
    category: 'duelo',
    categoryLabel: 'Duelo',
    date: '11 de mayo de 2025',
    dateISO: '2025-05-11',
    readTime: '14 min',
    excerpt: 'No todo duelo sigue el mismo recorrido. Revisamos señales de bloqueo, duelo complicado y formas de trabajarlo en terapia.',
    keywords: ['psicóloga duelo Ciudad Real', 'ayuda duelo Ciudad Real', 'terapia pérdida Ciudad Real', 'duelo complicado tratamiento'],
    content: `
<p class="lead">
  Muchas personas llegan a terapia con una sensación difícil de explicar: ha pasado tiempo desde la pérdida, el entorno espera que estén mejor, pero por dentro el dolor sigue ocupando demasiado. Puede aparecer insomnio, irritabilidad, vacío, culpa o una sensación persistente de bloqueo.
</p>

<p>
  Si algo de esto resuena contigo, quiero que sepas algo antes de seguir leyendo: <strong>no hay una forma correcta de vivir el duelo</strong>. No hay un calendario. No hay etapas que cumplir en orden. Y lo que la sociedad espera de ti —"ya deberías superarlo", "tenías que ser fuerte", "piensa en lo que quedaría ella"— a menudo es más dañino que el propio duelo.
</p>

<p>
  Como <strong>psicóloga especialista en duelo</strong>, trabajo con personas que han perdido a un padre, una madre, un hijo, una pareja o un amigo. También con pérdidas no reconocidas socialmente: la muerte de una mascota, el aborto, la ruptura de una relación significativa, la pérdida de salud o el abandono forzoso de un país. Todas son pérdidas reales y pueden necesitar atención clínica.
</p>

<h2>El mito de las "fases del duelo": por qué Kübler-Ross no dijo lo que crees</h2>

<p>
  Es probable que hayas oído hablar de las "cinco fases del duelo": negación, ira, negociación, depresión y aceptación. Lo que pocos saben es que Elisabeth Kübler-Ross desarrolló este modelo a partir de su trabajo con personas <em>moribundas</em>, no con personas que estaban de luto. El modelo fue posteriormente adaptado al duelo, pero de forma simplificada y distorsionada.
</p>

<p>
  La realidad del duelo es mucho más compleja y mucho menos lineal. No es un ascensor que sube por plantas ordenadas. Es más bien un laberinto en el que das pasos hacia adelante, retrocedes, giras, te pierdes, encuentras salidas inesperadas y vuelves a entrar por otra puerta. Y eso es completamente normal.
</p>

<blockquote>
  <p>"El duelo no es una enfermedad que hay que curar. Es una respuesta natural al amor. Cuanto más has amado, más dolerá la pérdida. Y eso no está mal. Eso es humano."</p>
  <cite>— Dr. Colin Murray Parkes, psiquiatra y pionero en el estudio del duelo</cite>
</blockquote>

<h2>¿Qué es realmente el duelo? Más allá de las lágrimas</h2>

<p>
  El duelo no es solo tristeza. Es una reorganización completa de tu mundo interior y exterior. Cuando pierdes a alguien significativo, pierdes mucho más que una persona. Pierdes:
</p>

<ul>
  <li><strong>Una identidad:</strong> dejas de ser hija, pareja, padre, hermano. Tu lugar en el mundo cambia.</li>
  <li><strong>Un proyecto de futuro:</strong> los planes, los sueños compartidos, las expectativas de envejecer juntos se desvanecen.</li>
  <li><strong>Un sistema de apoyo:</strong> esa persona que siempre entendía, que te protegía, que era tu refugio.</li>
  <li><strong>Una rutina:</strong> las llamadas diarias, las comidas del domingo, los mensajes de buenas noches.</li>
  <li><strong>Un marco de sentido:</strong> la creencia de que el mundo es justo, predecible o seguro se resquebraja.</li>
</ul>

<p>
  Por eso el duelo se manifiesta de formas tan diversas. Algunas personas lloran sin parar. Otras no pueden llorar. Algunas se sienten iracundas. Otras, apáticas. Algunas se lanzan a la actividad frenética. Otras se paralizan. Todas estas respuestas son válidas. El duelo es tan individual como una huella dactilar.
</p>

<h2>Señales de que tu duelo puede necesitar ayuda psicológica</h2>

<p>
  No todo duelo requiere terapia. Muchas personas atraviesan la pérdida con el apoyo de su entorno y, con el tiempo, integran la ausencia en su vida de forma natural. Pero hay señales de alarma que indican que el duelo se ha complicado y que necesita intervención profesional:
</p>

<h3>1. Ha pasado más de un año y sientes que empeoras</h3>

<p>
  El tiempo por sí solo no cura. Si después de doce meses sigues sintiendo el mismo dolor intenso, o si has desarrollado síntomas nuevos —insomnio crónico, aislamiento, pensamientos de muerte— es momento de consultar.
</p>

<h3>2. Evitas todo lo que te recuerda a la persona</h3>

<p>
  Es normal sentir dolor al recordar. Pero si has llegado a eliminar fotos, evitar lugares, cambiar de ciudad o romper con amigos comunes para no sentir, estás evitando el duelo, no procesándolo. La evitación alivia temporalmente, pero perpetúa el sufrimiento.
</p>

<h3>3. Sientes culpa persistente o pensamientos obsesivos</h3>

<p>
  "Debería haber estado allí". "Si hubiera insistido en que fuera al médico...". "La última vez discutimos". Estos pensamientos son comunes, pero cuando se repiten en bucle durante meses, bloquean el proceso de duelo. La culpa no resuelta es uno de los principales factores que complican la adaptación a la pérdida.
</p>

<h3>4. Has desarrollado síntomas físicos sin explicación médica</h3>

<p>
  Dolores de cabeza crónicos, problemas digestivos, taquicardias, fatiga persistente. El duelo no procesado puede expresarse en el cuerpo. En estos casos conviene descartar causas médicas y valorar también el impacto emocional de la pérdida.
</p>

<h3>5. No puedes hablar de la persona sin sentir angustia extrema</h3>

<p>
  Es doloroso recordar a alguien querido. Pero si el solo hecho de escuchar su nombre, ver una foto o contar una anécdota te genera una angustia insoportable, significa que el recuerdo sigue cargado de dolor no procesado.
</p>

<h3>6. Te identificas con el "duelo prolongado"</h3>

<p>
  La OMS y la APA han reconocido recientemente el <strong>trastorno de duelo prolongado</strong> como una condición clínica. Se caracteriza por una intensa nostalgia y preocupación por la persona fallecida, junto con una dificultad severa para aceptar la muerte y reinvertirse en la vida, durante más de seis meses. No es debilidad. Es una condición tratable.
</p>

<h2>Cómo se trabaja el duelo desde la terapia</h2>

<p>
  Mi enfoque no busca que "olvides" a la persona ni que "superes" la pérdida como si nada hubiera pasado. El objetivo es que puedas construir una relación sana con la ausencia: recordar sin que destroce, sentir la pérdida sin que paralice, y seguir viviendo sin que sea una traición.
</p>

<h3>Un encuadre terapéutico para el dolor</h3>

<p>
  En consulta puedes hablar de tristeza, rabia, culpa, alivio o bloqueo sin tener que justificarlo. La terapia ayuda a nombrar lo que ocurre, regular la intensidad emocional y recuperar funcionamiento diario sin invalidar la pérdida.
</p>

<h3>Elaboración del significado de la pérdida</h3>

<p>
  Una de las tareas importantes del duelo es dar sentido a lo ocurrido de forma personal. ¿Qué significa esta pérdida para tu historia? ¿Cómo redefine tus prioridades? ¿Qué necesitas reconstruir ahora? Estas preguntas se trabajan de forma gradual.
</p>

<h3>Integración del recuerdo con técnicas especializadas</h3>

<p>
  Cuando el duelo está bloqueado por un trauma —una muerte repentina, un accidente, una enfermedad agresiva, una despedida abrupta— técnicas como el <strong>EMDR</strong> pueden ayudar a trabajar la imagen dolorosa para que el recuerdo se integre de forma más adaptativa. Esto no borra a la persona ni lo vivido; busca reducir la carga traumática asociada.
</p>

<h3>Reconstrucción de identidad y proyecto vital</h3>

<p>
  La pérdida deja un vacío, pero también una posibilidad: reconstruir quién eres ahora. Eso implica redefinir roles, descubrir nuevas fuentes de sentido, recuperar actividades abandonadas, y aprender a relacionarte con el mundo desde tu nueva realidad. Es un proceso lento, pero transformador.
</p>

<blockquote>
  <p>En duelo, el objetivo no es borrar la ausencia, sino poder recordar, sentir y reorganizar la vida sin que el dolor paralice todas las áreas importantes.</p>
  <cite>— Objetivo clínico frecuente en duelo</cite>
</blockquote>

<h2>Pérdidas no reconocidas: cuando el duelo es invisible</h2>

<p>
  Existen duelos que la sociedad no valida. Duelos silenciados que duelen tanto o más porque apenas encuentran reconocimiento social:
</p>

<ul>
  <li><strong>Aborto y pérdida gestacional:</strong> una de cada cuatro personas experimenta una pérdida de embarazo, pero raramente se habla del duelo que conlleva.</li>
  <li><strong>Muerte de una mascota:</strong> para muchas personas, su perro o su gato era su compañero principal. La pérdida es real y profunda.</li>
  <li><strong>Ruptura de pareja:</strong> especialmente cuando duró años o cuando hubo hijos de por medio. Es una pérdida de familia, de proyecto, de identidad.</li>
  <li><strong>Pérdida de salud:</strong> un diagnóstico crónico, una discapacidad, una enfermedad que cambia tu vida para siempre.</li>
  <li><strong>Emigración forzada:</strong> dejar tu país, tu idioma, tu cultura, tu red de apoyo. Es una pérdida múltiple que muchos subestiman.</li>
  <li><strong>Pérdida de empleo o proyecto vital:</strong> cuando tu carrera o vocación se desmorona, también duelen.</li>
</ul>

<p>
  Si estás atravesando alguna de estas pérdidas, no necesitas que otras personas la validen para pedir ayuda. Si interfiere en tu vida, merece atención.
</p>

<h2>Cómo pedir ayuda: el primer paso hacia la elaboración</h2>

<p>
  Pedir ayuda para el duelo no significa debilidad. Significa reconocer que una pérdida importante puede necesitar un encuadre profesional. Es como pedir ayuda médica tras una fractura: a veces el cuerpo sana solo, pero una buena intervención reduce complicaciones.
</p>

<p>
  Si has perdido a alguien —hace meses o hace años— y sientes que el dolor no cede, puedes solicitar una primera sesión para valorar qué está ocurriendo y qué tipo de apoyo psicológico necesitas.
</p>

<p>
  La terapia no promete borrar la ausencia. Busca que el recuerdo pueda integrarse con menos sufrimiento, que recuperes recursos y que la pérdida tenga un lugar dentro de una vida que sigue necesitando atención.
</p>

<p>
  <a href="/blog/mindfulness-regulacion-ciudad-real">
    Si necesitas herramientas para gestionar la intensidad emocional del duelo, en este artículo explico técnicas de mindfulness y regulación emocional que pueden ayudarte.
  </a>
</p>
    `
  },

  // ════════════════════════════════════════════════════
  // Article 3 — Mindfulness
  // ════════════════════════════════════════════════════
  {
    slug: 'mindfulness-regulacion-ciudad-real',
    title: 'Mindfulness y regulación emocional',
    metaTitle: 'Mindfulness y regulación emocional | Psicología en Ciudad Real',
    metaDescription: 'Qué aporta el mindfulness a la regulación emocional, cuándo puede ayudar y cuándo conviene integrarlo dentro de un proceso terapéutico.',
    category: 'bienestar',
    categoryLabel: 'Bienestar',
    date: '11 de mayo de 2025',
    dateISO: '2025-05-11',
    readTime: '11 min',
    excerpt: 'Una mirada clínica al mindfulness como herramienta de regulación emocional, con límites, usos y ejemplos prácticos.',
    keywords: ['mindfulness Ciudad Real', 'regulación emocional Ciudad Real', 'psicóloga mindfulness Ciudad Real', 'técnicas regulación emocional'],
    content: `
<p class="lead">
  Muchas personas buscan mindfulness cuando sienten que viven desbordadas: taquicardias antes de exámenes o reuniones, insomnio, irritabilidad o dificultad para desconectar. A veces han probado aplicaciones de meditación o ejercicios sueltos, pero necesitan una guía más ajustada a su situación clínica.
</p>

<p>
  Lo que le propuse no fue un curso rápido de relajación. Fue un entrenamiento sistemático en <strong>regulación emocional basada en mindfulness</strong>, adaptado a su contexto, su personalidad y sus objetivos específicos. Con práctica, desarrolló herramientas para gestionar la ansiedad académica y responder con más margen ante situaciones estresantes.
</p>

<p>
  Si sientes que tus emociones condicionan demasiado tu día a día, este artículo explica qué es el mindfulness, qué técnicas de regulación emocional pueden ayudar y cuándo conviene trabajarlas dentro de una terapia.
</p>

<h2>¿Qué es el mindfulness? Mucho más que sentarse a meditar</h2>

<p>
  El mindfulness —o atención plena— es la capacidad de prestar atención al momento presente de forma intencionada, sin juzgar. No es un estado místico. No requiere años de reclusión en un monasterio. Es una habilidad entrenable, como aprender a tocar un instrumento o a conducir.
</p>

<p>
  La confusión surge porque muchas personas identifican el mindfulness exclusivamente con la meditación formal: sentarse en silencio, cerrar los ojos, respirar. Pero la meditación es solo <strong>una</strong> de las formas de entrenar el mindfulness. Existen decenas de prácticas informales que puedes integrar en tu día a día: comer con atención, caminar conscientemente, escuchar activamente, observar tus pensamientos sin engancharte en ellos.
</p>

<blockquote>
  <p>"El mindfulness no es sobre vaciar la mente. Es sobre cambiar tu relación con lo que ocurre en ella. No se trata de no pensar. Se trata de no dejar que los pensamientos te arrastren."</p>
  <cite>— Jon Kabat-Zinn, creador del programa MBSR (Reducción del Estrés Basada en Mindfulness)</cite>
</blockquote>

<h2>La neurociencia del mindfulness: lo que ocurre en tu cerebro</h2>

<p>
  Durante décadas, el mindfulness fue considerado una práctica espiritual sin respaldo científico. Hoy, gracias a los avances en neuroimagen, sabemos que la práctica regular de mindfulness produce cambios estructurales y funcionales mensurables en el cerebro. Estudios realizados en la Universidad de Harvard, la Universidad de Oxford y el Max Planck Institute han documentado los siguientes efectos:
</p>

<h3>Cambios estructurales (neuroplasticidad)</h3>

<ul>
  <li><strong>Engrosamiento de la corteza prefrontal:</strong> la zona del cerebro responsable de la atención, la toma de decisiones y la regulación emocional aumenta de densidad gris tras ocho semanas de práctica regular.</li>
  <li><strong>Reducción del volumen de la amígdala:</strong> el centro de alarma del cerebro, responsable del miedo y la ansiedad, disminuye de tamaño con la práctica sostenida de mindfulness.</li>
  <li><strong>Fortalecimiento del hipocampo:</strong> estructura clave para la memoria y el aprendizaje, que se ve potenciada por la práctica meditativa.</li>
  <li><strong>Aumento de la conectividad en la ínsula:</strong> región cerebral implicada en la conciencia interoceptiva, es decir, la capacidad de percibir las señales de tu cuerpo.</li>
</ul>

<h3>Cambios funcionales (cómo opera el cerebro)</h3>

<ul>
  <li><strong>Disminución de la actividad en la red por defecto:</strong> el sistema cerebral responsable del "monólogo interior" incesante, del viaje mental al pasado y al futuro, se modera durante y después de la práctica.</li>
  <li><strong>Mayor flexibilidad atencional:</strong> capacidad para desenganchar la atención de un estímulo perturbador y dirigirla voluntariamente hacia otro.</li>
  <li><strong>Mejor regulación del sistema nervioso autónomo:</strong> equilibrio entre la activación simpática (estrés) y la parasimpática (relajación).</li>
</ul>

<p>
  En términos prácticos: entrenar la atención puede ayudar a reconocer antes las señales de estrés, responder con menos impulsividad y recuperar margen para decidir. No es una solución aislada, pero puede ser una herramienta útil.
</p>

<h2>Regulación emocional: la habilidad que nadie nos enseñó</h2>

<p>
  Durante toda nuestra educación formal aprendemos matemáticas, historia, biología, lengua. Pero nadie nos enseña a gestionar nuestras emociones. Llegamos a la edad adulta con un sistema nervioso evolutivamente diseñado para sobrevivir en la sabana africana, intentando navegar reuniones de trabajo, exámenes de oposición, rupturas sentimentales y notificaciones constantes en el móvil.
</p>

<p>
  La regulación emocional no significa suprimir lo que sientes. Significa <strong>modular la intensidad, la duración y la expresión de tus emociones</strong> de forma que te sirvan en lugar de paralizarte. Es la diferencia entre sentir ira y actuar desde ella, o entre sentir ansiedad y dejar que determine tus decisiones.
</p>

<h2>Las cinco técnicas de regulación emocional que enseño en mi consulta</h2>

<p>
  Cada persona necesita un repertorio personalizado. No existe una técnica universal. En mi práctica clínica, evalúo tu perfil emocional, tu historia y tu contexto vital para diseñar un plan de entrenamiento a medida. Estas son las cinco técnicas centrales:
</p>

<h3>1. Respiración diafragmática consciente (la base de todo)</h3>

<p>
  La respiración es el único sistema autónomo del cuerpo que puedes controlar voluntariamente. Y es la puerta de entrada a la regulación del sistema nervioso. La respiración diafragmática —lenta, profunda, con exhalación prolongada— activa el nervio vago, el principal componente del sistema parasimpático, y envía señales de seguridad a tu cerebro.
</p>

<p>
  En la consulta te enseño la técnica paso a paso: postura, ritmo (4-7-8 o 5-5-5), focalización de la atención en las sensaciones corporales, y manejo de la resistencia inicial. Muchas personas descubren que han estado respirando de forma invertida durante años —torácica, rápida, superficial— lo que mantiene su sistema de alarma permanentemente activado.
</p>

<h3>2. Observación de pensamientos como tráfico (defusión cognitiva)</h3>

<p>
  Una de las causas principales del sufrimiento emocional no son los pensamientos en sí, sino nuestra relación con ellos. Cuando te identificas con cada pensamiento —"soy un fracaso", "no puedo con esto", "todo va mal"— sufres. La defusión cognitiva te enseña a ver los pensamientos como <strong>eventos mentales</strong>, no como verdades absolutas.
</p>

<p>
  Utilizo metáforas y ejercicios prácticos: observar los pensamientos como coches que pasan por una autopista, como hojas que fluyen en un río, como palabras escritas en una pantalla. El objetivo no es eliminar el pensamiento negativo. Es reducir su impacto para que deje de dictar tu comportamiento.
</p>

<h3>3. Escaneo corporal (conciencia interoceptiva)</h3>

<p>
  Las emociones no son solo mentales. Son experiencias corporales. La ansiedad se siente como nudo en el estómago. La tristeza, como peso en el pecho. La ira, como calor en la cara. El escaneo corporal es una técnica sistemática para recorrer el cuerpo con la atención, identificar dónde se aloja cada emoción, y aprender a "habitar" esas sensaciones sin huir de ellas.
</p>

<p>
  En nuestra ciudad, donde el ritmo de vida universitario y laboral es intenso, muchas personas viven desconectadas de su cuerpo. Han aprendido a ignorar las señales de hambre, fatiga, tensión y malestar. El escaneo corporal reconstruye ese puente mente-cuerpo que es fundamental para la salud emocional.
</p>

<h3>4. Técnica STOP (interrupción de reacciones automáticas)</h3>

<p>
  Es una técnica de emergencia emocional, útil cuando sientes que vas a reaccionar de forma impulsiva: gritar, mandar un mensaje de texto que luego lamentarás, evitar una situación importante, o caer en un ataque de pánico. La sigla representa:
</p>

<ul>
  <li><strong>S — Stop (Detente):</strong> interrumpe la reacción automática.</li>
  <li><strong>T — Take a breath (Respira):</strong> tres respiraciones conscientes.</li>
  <li><strong>O — Observe (Observa):</strong> ¿qué siento? ¿qué pienso? ¿qué necesito?</li>
  <li><strong>P — Proceed (Procede):</strong> actúa desde la elección consciente, no desde el impulso.</li>
</ul>

<p>
  Parece simple, pero requiere entrenamiento. En la consulta practicamos con situaciones reales de tu vida para que la técnica se convierta en un reflejo disponible cuando más lo necesitas.
</p>

<h3>5. Meditación de autocompasión (cuidado hacia uno mismo)</h3>

<p>
  Muchas personas —estudiantes, opositores, profesionales de la sanidad, cuidadores— son excepcionalmente exigentes consigo mismos. Se hablan con una crueldad que nunca emplearían con un amigo. La meditación de autocompasión, basada en el trabajo de Kristin Neff, entrena tres componentes:
</p>

<ul>
  <li><strong>Bondad hacia uno mismo:</strong> tratarte con la misma amabilidad con la que tratarías a alguien a quien quieres.</li>
  <li><strong>Humanidad común:</strong> reconocer que el sufrimiento es parte de la experiencia humana, no una falla personal.</li>
  <li><strong>Atención plena:</strong> observar el dolor sin exagerarlo ni suprimirlo.</li>
</ul>

<p>
  La investigación sobre autocompasión la relaciona con menor ansiedad, menor autocrítica y más resiliencia emocional. No es autoindulgencia: es una forma de responder al dolor sin añadir más juicio.
</p>

<blockquote>
  <p>Un objetivo habitual del entrenamiento no es eliminar la ansiedad, sino reconocer sus señales, aplicar una técnica concreta y poder actuar sin quedar bloqueado por la intensidad del síntoma.</p>
  <cite>— Objetivo clínico frecuente en regulación emocional</cite>
</blockquote>

<h2>Mindfulness adaptado a la vida real</h2>

<p>
  Uno de los errores más frecuentes es intentar aplicar el mindfulness como si fuéramos monjes en una cueva. Pero tienes una vida ocupada. Tienes clases, trabajos, familias, compromisos, tráfico, colas en el supermercado, notificaciones de trabajo a las diez de la noche. Por eso, en mi consulta, adapto cada técnica a tu contexto real:
</p>

<ul>
  <li><strong>Mindfulness en el transporte:</strong> prácticas de atención plena para hacer en el autobús, el tren o mientras caminas por el centro histórico.</li>
  <li><strong>Micro-prácticas de 3 minutos:</strong> para usar entre clase y clase, antes de una reunión, o en un descanso del trabajo.</li>
  <li><strong>Mindfulness en la alimentación:</strong> especialmente útil para personas con relación conflictiva con la comida o estrés alimentario.</li>
  <li><strong>Prácticas para el insomnio:</strong> técnicas de relajación progresiva y atención al cuerpo para usar antes de dormir.</li>
  <li><strong>Mindfulness en relaciones:</strong> escucha activa, gestión de conflictos, comunicación consciente.</li>
</ul>

<h2>¿Cuánto tiempo hace falta para notar cambios?</h2>

<p>
  Los estudios clínicos indican que los primeros cambios significativos aparecen tras <strong>ocho semanas</strong> de práctica regular (20-30 minutos diarios). Pero en mi experiencia clínica, muchas personas notan mejorías antes: mejor sueño desde la primera semana, menor reactividad emocional desde la tercera, mayor claridad mental desde la quinta.
</p>

<p>
  La clave no es la duración de cada sesión, sino la <strong>regularidad</strong>. Es mejor practicar diez minutos todos los días que una hora una vez por semana. El cerebro se moldea por la repetición, no por la intensidad esporádica.
</p>

<h2>Cuándo el mindfulness no es suficiente (y qué hacer entonces)</h2>

<p>
  El mindfulness puede ser una herramienta útil, pero no es una panacea. No suele ser suficiente como única intervención cuando existe un trastorno activo severo, un trauma no procesado o un duelo complicado. En esos casos, se integra dentro de un tratamiento más amplio que puede incluir Terapia Cognitivo Conductual, EMDR u otros enfoques clínicos.
</p>

<p>
  También existen contraindicaciones temporales. Durante una crisis aguda de ansiedad o depresión, la meditación puede intensificar el malestar. Por eso es fundamental que el entrenamiento en mindfulness sea guiado por un profesional que pueda adaptar la intensidad, identificar contraindicaciones y ofrecer alternativas cuando sea necesario.
</p>

<h2>Empieza hoy: un minuto de atención plena</h2>

<p>
  Si has llegado hasta aquí, probablemente algo dentro de ti está buscando una forma diferente de relacionarte con tus emociones. No necesitas un retiro de siete días. No necesitas una esterilla especial. Solo necesitas un minuto. Ahora mismo.
</p>

<p>
  Siéntate erguido pero relajado. Cierra los ojos o baja la mirada. Respira tres veces, un poco más lento de lo habitual. Y presta atención a la sensación del aire entrando y saliendo de tus fosas nasales. No intentes cambiar la respiración. Solo obsérvala. Cuando tu mente se vaya —y se irá—, simplemente nota hacia dónde fue, y vuelve suavemente a la respiración. Eso es todo. Eso es mindfulness.
</p>

<p>
  Si quieres aprender a regular tus emociones con herramientas basadas en evidencia, puedes solicitar una primera sesión. Valoraremos qué necesitas, qué has probado hasta ahora y qué técnicas pueden encajar con tu vida diaria.
</p>

<p>
  <a href="/blog/emdr-ciudad-real">
    Si sospechas que tu dificultad emocional tiene raíces en un trauma o experiencia del pasado, en este artículo explico cómo la terapia EMDR puede ayudarte a reprocesar esos recuerdos.
  </a>
</p>
    `
  },

  // ════════════════════════════════════════════════════
  // Article 4 — Ansiedad
  // ════════════════════════════════════════════════════
  {
    slug: 'ansiedad-ciudad-real',
    title: 'Ansiedad: reconocerla y pedir ayuda',
    metaTitle: 'Ansiedad y terapia individual | Psicóloga en Ciudad Real',
    metaDescription: 'Señales frecuentes de ansiedad, cuándo pedir ayuda psicológica y cómo se trabaja en terapia individual presencial u online.',
    category: 'ansiedad',
    categoryLabel: 'Ansiedad',
    date: '24 de abril de 2025',
    dateISO: '2025-04-24',
    readTime: '10 min',
    excerpt: 'Señales frecuentes de ansiedad, criterios para pedir ayuda y cómo puede abordarse en un proceso de terapia individual.',
    keywords: ['psicóloga en Ciudad Real', 'ansiedad Ciudad Real', 'ayuda psicológica Ciudad Real'],
    content: `
<p class="lead">
  Una duda frecuente en consulta es distinguir entre ansiedad, agotamiento y una etapa exigente. La persona puede llevar meses durmiendo mal, con el estómago revuelto antes de compromisos importantes y una sensación permanente de urgencia. Desde fuera, todo parece normal; por dentro, el malestar empieza a ocupar demasiado.
</p>

<p>
  Si algo de esto resuena contigo, conviene saber que la ansiedad no siempre aparece como una crisis evidente. A veces se instala poco a poco, como un ruido de fondo que al principio apenas notas y que termina por agotarte. Pedir ayuda psicológica puede ser una forma de entender qué la mantiene y qué necesitas cambiar.
</p>

<h2>¿Qué es la ansiedad y por qué cuesta tanto reconocerla?</h2>

<p>
  La ansiedad es una respuesta biológica diseñada para protegerte. Cuando tu cerebro detecta una amenaza, activa una alarma que prepara tu cuerpo para huir o enfrentarte. Ese mecanismo te ha mantenido vivo. El problema empieza cuando esa alarma se queda encendida sin motivo real, como un detector de humo que suena cada vez que enciendes la tostadora.
</p>

<p>
  En consulta veo cómo esta confusión retrasa la búsqueda de ayuda durante meses, a veces años. Muchas personas atribuyen su malestar al trabajo, al cansancio, a dormir poco o a una etapa exigente. A veces es cierto; otras, el sistema de alarma se ha quedado activado y necesita intervención.
</p>

<h2>Señales concretas de que la ansiedad gobierna tu día a día</h2>

<p>
  No hace falta tener un ataque de pánico para estar ansioso. De hecho, la mayoría de las personas que trato no han tenido uno. Su ansiedad es más silenciosa, más traicionera. Estas son las señales que suelo escuchar en mi consulta y que quizás te resulten demasiado familiares.
</p>

<h3>Tu cuerpo está enviando mensajes que ignoras</h3>

<p>
  La tensión en mandíbula y hombros que llevas notando desde hace meses. El dolor de estómago que aparece antes de cualquier compromiso importante. Las palpitaciones que atribuyes al café, aunque ya solo bebas una taza al día. El insomnio que empieza a las tres de la mañana con una lista mental de tareas pendientes. Estos síntomas no son normales, aunque los hayas normalizado. Son señales de que tu sistema nervioso está sobrecargado.
</p>

<h3>Tu mente no descansa</h3>

<p>
  Te cuesta concentrarte en una sola tarea. Saltas de una pestaña a otra sin terminar nada. Anticipas problemas que aún no existen. Te despiertas con una sensación de urgencia que no sabes de dónde viene. Te cuesta decidir algo tan sencillo como qué cenar o qué camisa ponerte. Y cuando por fin consigues relajarte, aparece una preocupación nueva que te devuelve al punto de partida.
</p>

<h2>¿Cuándo es el momento de buscar ayuda psicológica?</h2>

<p>
  Esta pregunta tiene una respuesta más sencilla de lo que parece: cuando el malestar interfiere en tu calidad de vida. No hace falta que estés en crisis ni que todo se haya derrumbado. Pedir ayuda a tiempo puede evitar que el problema se cronifique.
</p>

<h3>La regla de los seis meses</h3>

<p>
  Un criterio práctico que suelo compartir es el siguiente: si los síntomas llevan más de seis meses sin mejorar, es momento de consultar. Seis meses de insomnio. Seis meses de irritabilidad constante. Seis meses de evitar situaciones sociales por miedo a sentirte mal. Seis meses son mucho tiempo para vivir por debajo de tu potencial.
</p>

<h2>Cómo trabajamos la ansiedad desde la terapia</h2>

<p>
  El tratamiento de la ansiedad no consiste en eliminarla. Eso sería imposible e incluso contraproducente, porque la ansiedad tiene una función: protegerte del peligro. Lo que buscamos en terapia es que deje de activarse cuando no hay amenaza real. Que el detector de humo vuelva a funcionar correctamente.
</p>

<p>
  El proceso suele empezar por identificar tus detonantes específicos. No todos tenemos los mismos. Para una persona, la ansiedad aparece en situaciones sociales. Para otra, ante la incertidumbre laboral. Para otra, con cualquier cambio en su rutina. Una vez identificamos qué activa tu alarma, trabajamos en dos frentes: por un lado, técnicas de regulación emocional que te permitan bajar la intensidad cuando aparece; por otro, exploración de los patrones de pensamiento que mantienen el ciclo activo.
</p>

<p>
  El objetivo no es que nunca más sientas ansiedad. El objetivo es que, cuando aparezca, puedas reconocerla, regularla y actuar con más margen de elección.
</p>

<p>
  Si sientes que la ansiedad está interfiriendo en tu vida diaria, puedes solicitar una primera sesión para evaluar qué ocurre y qué tipo de trabajo terapéutico encaja contigo.
</p>
    `
  },

  // ════════════════════════════════════════════════════
  // Article 5 — Primera consulta
  // ════════════════════════════════════════════════════
  {
    slug: 'primera-consulta-ciudad-real',
    title: 'Tu primera consulta de terapia',
    metaTitle: 'Terapia psicológica Ciudad Real | Primera consulta',
    metaDescription: 'Qué ocurre en una primera sesión de terapia, qué puedes contar y cómo se define un primer objetivo terapéutico.',
    category: 'terapia',
    categoryLabel: 'Terapia',
    date: '24 de abril de 2025',
    dateISO: '2025-04-24',
    readTime: '9 min',
    excerpt: 'Qué puedes esperar en una primera sesión: motivo de consulta, dudas frecuentes, objetivos iniciales y siguientes pasos.',
    keywords: ['terapia psicológica Ciudad Real', 'primera consulta psicólogo Ciudad Real', 'cómo es ir al psicólogo'],
    content: `
<p class="lead">
  La puerta de mi consulta se abre casi siempre con la misma mezcla de emociones. Algunas personas llegan con los ojos enrojecidos de haber llorado en el coche. Otras con una sonrisa nerviosa que intenta disimular el temblor de las manos. Hay quien entra hablando sin parar para no dejar lugar al silencio, y quien apenas puede articular palabra. Todas estas formas de llegar son válidas. Todas son bienvenidas. Y todas comparten algo: alguien ha decidido que ya no quiere seguir así.
</p>

<p>
  Si estás leyendo esto, probablemente estés dándole vueltas a la idea de empezar una <strong>terapia psicológica</strong>. Tal vez tengas miedo a lo desconocido, te cueste pedir ayuda o no sepas qué ocurre en una primera consulta. Aquí tienes una explicación sencilla del proceso.
</p>

<h2>Desmontando los miedos más comunes antes de la primera sesión</h2>

<p>
  "Me van a juzgar". "Voy a tener que contar mi vida entera en una hora". "Me dirán que estoy loco". "No voy a saber qué decir". "Es demasiado caro y no servirá de nada". Estas frases las he escuchado cientos de veces. Son el eco de una cultura que aún estigmatiza cuidar la mente, como si hablar de lo que nos duele fuera un lujo o una debilidad.
</p>

<p>
  En consulta no hay juicios ni diagnósticos precipitados. La terapia que practico es conversacional, activa y colaborativa: trabajamos con información clínica, objetivos compartidos y revisiones periódicas.
</p>

<h2>¿Cómo es ir al psicólogo? Tu primera consulta paso a paso</h2>

<p>
  La primera sesión dura aproximadamente entre cincuenta minutos y una hora. No es un interrogatorio. Es una conversación. Y como toda conversación que merece la pena, empieza por lo básico: quién eres, qué te ha traído aquí y qué esperas del proceso.
</p>

<h3>Antes de entrar: qué llevar y qué dejar</h3>

<p>
  No necesitas traer nada material, salvo ganas de ser honesto contigo mismo. Sí te pido que dejes fuera de la consulta la presión de tener que "hacerlo bien". No existe una forma correcta de hacer terapia. No tienes que ser el paciente perfecto. Puedes llorar, puedes enfadarte, puedes quedarte en silencio, puedes decir "no lo sé" veinte veces. Todo eso es información valiosa. Todo eso es parte del proceso.
</p>

<h3>Durante la sesión: qué vamos a hacer juntos</h3>

<p>
  La primera consulta suele dividirse en tres partes. En la primera, me cuentas qué te ha traído aquí. No busco que me des todos los detalles de tu infancia en sesenta minutos. Solo necesito entender el panorama general: qué te molesta, desde cuándo, cómo afecta a tu vida y qué has probado hasta ahora.
</p>

<p>
  En la segunda parte, te explico cómo trabajo y respondemos a tus dudas. Muchas personas llegan con ideas distorsionadas sobre la terapia, fruto de películas o comentarios de terceros. Aclarar desde el principio qué puedes esperar y qué no, elimina una buena parte de la tensión.
</p>

<p>
  En la tercera parte, empezamos a esbozar juntos un plan. No es un contrato rígido. Es una brújula que nos orienta. Definimos objetivos realistas y alcanzables, y acordamos por dónde queremos empezar a caminar.
</p>

<h3>Después de la primera consulta: qué ocurre en los días siguientes</h3>

<p>
  Es normal sentirse algo agotado después de la primera sesión. Hablar de lo que duele requiere energía, incluso en un contexto terapéutico. También es normal sentir alivio, confusión o una mezcla de ambas cosas. Algunas personas escriben al día siguiente con preguntas que se les han ocurrido. Otras necesitan unos días para digerir lo conversado. Todo está bien.
</p>

<h2>¿Qué terapia psicológica se adapta a ti?</h2>

<p>
  No todas las terapias son iguales, ni todos los psicólogos trabajamos de la misma manera. En mi caso, combino herramientas de la terapia cognitivo-conductual con enfoques humanistas y técnicas de regulación del sistema nervioso. Esto significa que trabajamos tanto en lo que piensas como en lo que sientes, y también en cómo tu cuerpo almacena el estrés. Es un enfoque integral porque los seres humanos somos integrales.
</p>

<p>
  La duración del proceso varía según cada persona. Algunos problemas específicos, como un episodio de ansiedad aguda o una fobia concreta, pueden mejorar significativamente en pocas semanas. Otras cuestiones, como los patrones relacionales repetitivos o la autoestima dañada desde la infancia, requieren más tiempo. Mi compromiso es ser honesta contigo sobre qué esperar, para que no inviertas tu tiempo ni tu dinero en promesas irreales.
</p>

<h2>La decisión de cuidarte empieza con un solo paso</h2>

<p>
  He perdido la cuenta de las veces que alguien me ha dicho: "Ojalá hubiera venido antes". No porque mi trabajo sea milagroso, sino porque sufrimos innecesariamente durante años creyendo que debemos resolverlo todo solos. Pedir ayuda no es admitir derrota. Es reconocer que tu bienestar merece inversión, tiempo y atención.
</p>

<p>
  Si llevas tiempo pensando en buscar una <strong>terapia psicológica</strong>, puedes empezar por una primera sesión de evaluación. No hace falta tenerlo todo claro: basta con explicar qué te preocupa, desde cuándo y cómo afecta a tu vida.
</p>
    `
  },

  // ════════════════════════════════════════════════════
  // Article 6 — Autoestima
  // ════════════════════════════════════════════════════
  {
    slug: 'autoestima-ciudad-real',
    title: 'Autoestima: reconstruir tu relación contigo mismo',
    metaTitle: 'Autoestima y terapia individual | Psicóloga en Ciudad Real',
    metaDescription: 'Cómo se forma la autoestima, qué señales indican que está dañada y cómo puede trabajarse en terapia individual.',
    category: 'autoestima',
    categoryLabel: 'Autoestima',
    date: '24 de abril de 2025',
    dateISO: '2025-04-24',
    readTime: '11 min',
    excerpt: 'Qué es la autoestima, cómo se manifiesta cuando está dañada y qué se trabaja en terapia para construir una relación más justa contigo.',
    keywords: ['psicóloga Ciudad Real autoestima', 'bienestar emocional Ciudad Real', 'terapia autoestima Ciudad Real'],
    content: `
<p class="lead">
  Hace unos meses, una persona de veintiocho años se sentó frente a mí en mi consulta y dijo algo que resume lo que escucho con demasiada frecuencia: "Sé que debería quererme más, pero no sé cómo". Llevaba años repitiéndose frases que había leído en libros de autoayuda y publicaciones motivacionales. Se esforzaba por pensar positivo. Se obligaba a mirarse al espejo y decirse que era válida. Pero por las mañanas, cuando sonaba el despertador, seguía sintiendo el mismo vacío. El mismo peso. La misma sensación de no ser suficiente.
</p>

<p>
  Si esto te resulta familiar, conviene saber algo importante: la autoestima no se construye con frases bonitas. No se recupera solo con fuerza de voluntad ni con positivismo tóxico. En terapia trabajamos las creencias, experiencias y patrones que sostienen una relación dañina contigo mismo.
</p>

<h2>Qué es la autoestima real, más allá del positivismo tóxico</h2>

<p>
  Durante años hemos asociado la autoestima con la confianza extrovertida, con la seguridad deslumbrante de quienes parecen no dudar nunca. Pero la autoestima real no es eso. No es gritar tus logros en redes sociales. No es forzarte a sonreír cuando por dentro todo se derrumba. No es ignorar tus defectos para enfocarte solo en lo positivo.
</p>

<p>
  La autoestima real es la capacidad de reconocerte como una persona completa, con luces y sombras, con aciertos y errores, con fortalezas y vulnerabilidades. Es poder mirarte y decir: "No soy perfecta, pero merezco respeto". Es poder fallar sin que eso signifique que eres un fracaso. Es poder decir que no sin sentirte culpable el resto del día.
</p>

<h2>Cómo afecta la autoestima a tu vida cotidiana</h2>

<p>
  La baja autoestima no es un problema abstracto. Tiene consecuencias muy concretas en tu día a día, aunque a veces cueste conectar los puntos. Te explico cómo se manifiesta en las tres áreas donde más duele.
</p>

<h3>En tus relaciones personales</h3>

<p>
  Cuando no te sientes valioso, toleras trato que no mereces. Aceptas desplantes. Justificas comportamientos hirientes. Te quedas en relaciones que te hacen pequeño porque en el fondo crees que no encontrarás nada mejor. O, al contrario, te aíslas por miedo a que descubran quién eres realmente.
</p>

<h3>En tu trabajo o estudios</h3>

<p>
  La autoestima dañada se disfraza de perfeccionismo. Pasas horas revisando un correo simple. No pides ese ascenso porque "aún no estoy preparada". Aceptas proyectos que no te corresponden porque no sabes decir que no. Te comparas constantemente con compañeros y siempre sales perdiendo.
</p>

<h3>En tu cuerpo y tu bienestar físico</h3>

<p>
  Lo que pasa en tu mente no se queda en tu mente. La baja autoestima se manifiesta en dolores de cabeza crónicos, en trastornos del sueño, en alimentación desordenada, en agotamiento constante. Cuando no te sientes merecedor de cuidado, dejas de cuidarte.
</p>

<h2>Terapia para la autoestima: cómo reconstruyes lo que te hicieron creer</h2>

<p>
  La mayoría de las creencias negativas sobre uno mismo no las eliges tú. Las aprendiste. Las absorbiste de comentarios de padres, de maestros, de compañeros de clase, de ex parejas, de jefes, de publicidad. Mensajes repetidos durante años que se instalan en lo más profundo y empiezan a funcionar como verdades absolutas.
</p>

<p>
  En terapia, el primer paso es identificar esas creencias. Muchas veces están tan integradas en tu forma de pensar que ni siquiera las reconoces como opiniones. Las confundes con hechos. Mi trabajo consiste en ayudarte a separar lo que es real de lo que te han contado sobre ti mismo.
</p>

<p>
  El segundo paso es cuestionar esas creencias con evidencia. No con frases motivacionales vacías, sino con datos reales de tu propia vida. Cuando analizamos juntos tu historial, casi siempre descubrimos que las pruebas que sostienen esas creencias negativas son selectivas, distorsionadas o directamente inexistentes. Y que, en cambio, hay montones de evidencia de tu valía que has descartado sistemáticamente.
</p>

<p>
  El tercer paso es construir una narrativa más justa y completa sobre quién eres. No una narrativa inflada ni artificial. Una narrativa realista, basada en hechos, que te permita reconocer tus fortalezas sin arrogancia y tus debilidades sin autodesprecio. Eso es lo que hace una <strong>terapia para la autoestima</strong> de verdad: no convertirte en alguien que no eres, sino ayudarte a dejar de ser quien te obligaron a ser.
</p>

<p>
  Si sientes que la autocrítica está condicionando tu vida, puedes solicitar una primera sesión. Revisaremos qué ocurre, desde cuándo y qué objetivos tendría sentido trabajar.
</p>
    `
  },
];

const byNewest = (a: BlogArticle, b: BlogArticle) =>
  new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime();

export function getSortedArticles(): BlogArticle[] {
  return [...articles].sort(byNewest);
}

/**
 * Get all articles except one
 */
export function getRelatedArticles(excludeSlug: string, limit = 2): BlogArticle[] {
  return getSortedArticles()
    .filter(a => a.slug !== excludeSlug)
    .slice(0, limit);
}

/**
 * Get latest articles (for landing page)
 */
export function getLatestArticles(limit = 3): BlogArticle[] {
  return getSortedArticles().slice(0, limit);
}

export default articles;

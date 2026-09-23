import { img } from "./site";

export type Service = {
  slug: string;
  name: string; // nombre corto para menús
  group: "servicio" | "disciplina";
  icon: "blueprint" | "supply" | "project" | "structure" | "pipe" | "bolt";
  headline: string; // H1 de la landing
  summary: string; // una o dos frases, usada en tarjetas y meta
  intro: string[]; // párrafos de la landing
  image: string;
  imageAlt: string;
  scope: { title: string; text: string }[];
  process: { title: string; text: string }[];
  applications: string[];
  faqs: { q: string; a: string }[];
  seoTitle: string;
};

// Proceso común de trabajo (reutilizable por servicio si no se define otro)
const baseProcess = [
  { title: "Reunión de levantamiento", text: "Nos reunimos en Calama, Santiago, La Serena o directamente en faena para entender el alcance, las restricciones de operación y los plazos." },
  { title: "Propuesta técnica y económica", text: "Entregamos alcance, entregables, cronograma y valor. Sin estructuras administrativas que encarezcan el servicio." },
  { title: "Desarrollo con profesionales en terreno", text: "El equipo trabaja en contacto directo con su gente, con revisiones periódicas y comunicación vía plataformas colaborativas." },
  { title: "Entrega y soporte", text: "Documentación completa según los estándares del cliente, y acompañamiento en las etapas siguientes del proyecto." },
];

export const services: Service[] = [
  {
    slug: "ingenieria-conceptual-basica-detalle",
    name: "Ingeniería conceptual, básica y de detalle",
    group: "servicio",
    icon: "blueprint",
    headline: "Ingeniería conceptual, básica y de detalle para minería e industria",
    summary:
      "Diseñamos facilities y modificaciones o ampliaciones de procesos, entregando toda la documentación que su proyecto requiere, a precio competitivo y en el plazo acordado.",
    intro: [
      "Desarrollamos cada etapa de la ingeniería: desde evaluar alternativas en la fase conceptual hasta los planos y especificaciones listos para construir.",
      "Nuestro foco son dos tipos de proyecto: las instalaciones generales de una faena (facilities) y las modificaciones o ampliaciones de procesos productivos existentes.",
    ],
    image: img.foto1,
    imageAlt: "Profesionales de S&M Ingeniería revisando planos de un proyecto",
    scope: [
      { title: "Ingeniería conceptual", text: "Definición del problema, evaluación de alternativas técnicas y estimación de costos de orden de magnitud para decidir cómo avanzar." },
      { title: "Ingeniería básica", text: "Criterios de diseño, layouts, listados de equipos, especificaciones y estimación de costos para aprobar la inversión." },
      { title: "Ingeniería de detalle", text: "Planos de construcción, memorias de cálculo, especificaciones técnicas y cubicaciones para ejecutar la obra." },
      { title: "Facilities", text: "Garitas de control y acceso, salas de cambio, baños, casinos, oficinas, patios de almacenamiento, bodegas, caminos y accesos." },
      { title: "Modificación y ampliación de procesos", text: "Instalación de equipos de proceso, transporte de pulpas de mineral y transporte y almacenamiento de sólidos a granel." },
    ],
    process: baseProcess,
    applications: [
      "Faenas mineras en operación que requieren nuevas instalaciones de apoyo",
      "Plantas de proceso que incorporan o reemplazan equipos",
      "Proyectos industriales que necesitan ingeniería para licitar la construcción",
    ],
    faqs: [
      { q: "¿Pueden tomar un proyecto en una etapa ya iniciada?", a: "Sí. Podemos partir desde la ingeniería básica o de detalle si usted ya cuenta con estudios previos; revisamos la información existente antes de proponer el alcance." },
      { q: "¿En qué formato entregan la documentación?", a: "Nos ajustamos a los estándares documentales, formatos y codificación de cada cliente, incluidos los de las compañías mineras." },
      { q: "¿Qué disciplinas cubren?", a: "Civil y estructural, mecánica y piping, y electricidad e instrumentación, coordinadas por un mismo equipo." },
    ],
    seoTitle: "Ingeniería conceptual, básica y de detalle | S&M Ingeniería",
  },
  {
    slug: "gestion-de-abastecimiento",
    name: "Gestión de abastecimiento",
    group: "servicio",
    icon: "supply",
    headline: "Gestión y logística de abastecimiento para sus proyectos",
    summary:
      "Usted compra los equipos principales; nosotros gestionamos el programa de abastecimiento de equipos menores y materiales, con la documentación, cotizaciones y análisis de proveedores.",
    intro: [
      "Trabajamos con un modelo de abastecimiento compartido: el owner mantiene el control de la compra de los equipos principales del proceso, y nosotros nos encargamos del resto.",
      "Así su equipo se concentra en las decisiones de mayor impacto, mientras los materiales y equipos menores llegan a tiempo para no detener la obra.",
    ],
    image: img.foto2,
    imageAlt: "Equipo coordinando la logística de materiales de un proyecto",
    scope: [
      { title: "Documentación de compra", text: "Especificaciones técnicas, hojas de datos y requisiciones para equipos menores y materiales." },
      { title: "Cotización a proveedores", text: "Solicitud y seguimiento de ofertas a proveedores calificados." },
      { title: "Análisis de ofertas", text: "Comparación técnica y económica para recomendar la mejor alternativa de compra." },
      { title: "Programa de abastecimiento", text: "Planificación de compras y plazos de entrega alineada con el cronograma de construcción." },
    ],
    process: [
      { title: "Definición de responsabilidades", text: "Acordamos qué equipos compra el owner y qué partidas gestiona S&M Ingeniería." },
      { title: "Requisiciones y cotizaciones", text: "Preparamos la documentación técnica y cotizamos con proveedores." },
      { title: "Evaluación y recomendación", text: "Presentamos el análisis técnico-económico para su aprobación." },
      { title: "Seguimiento hasta la entrega", text: "Controlamos plazos y avances para que los materiales lleguen cuando la obra los necesita." },
    ],
    applications: [
      "Proyectos EPC y EPCM con compras distribuidas",
      "Owners que prefieren controlar la compra de equipos críticos",
      "Obras con plazos ajustados que no pueden esperar materiales",
    ],
    faqs: [
      { q: "¿Compran ustedes los equipos principales?", a: "No. En nuestro modelo el owner compra los equipos principales del proceso; nosotros gestionamos los equipos menores y materiales." },
      { q: "¿Pueden trabajar con los proveedores que ya tenemos?", a: "Sí. Incorporamos a sus proveedores habituales al proceso de cotización y evaluación." },
    ],
    seoTitle: "Gestión de abastecimiento para proyectos mineros | S&M Ingeniería",
  },
  {
    slug: "gestion-de-proyectos-epcm",
    name: "Gestión de proyectos EP, EPC y EPCM",
    group: "servicio",
    icon: "project",
    headline: "Gestión integral de proyectos EP, EPC y EPCM",
    summary:
      "Ingeniería, abastecimiento, construcción y gestión de proyectos bajo un mismo equipo, con profesionales directamente en terreno.",
    intro: [
      "Según lo que su proyecto necesite, asumimos la ingeniería y el abastecimiento (EP), sumamos la construcción (EPC) o gestionamos el proyecto completo en su representación (EPCM).",
      "Nuestros profesionales tienen amplia experiencia en ingeniería, procesos constructivos y gestión integral de proyectos mineros e industriales, lo que nos califica para desarrollar proyectos en estas tres modalidades.",
    ],
    image: img.foto3,
    imageAlt: "Supervisión de terreno en un proyecto industrial",
    scope: [
      { title: "EP: ingeniería y abastecimiento", text: "Diseño completo del proyecto y gestión de compras de equipos menores y materiales." },
      { title: "EPC: ingeniería, abastecimiento y construcción", text: "Además de la ingeniería y las compras, ejecutamos la construcción del proyecto." },
      { title: "EPCM: gestión de construcción", text: "Gestionamos y supervisamos la construcción en representación del owner, coordinando a los contratistas." },
      { title: "Planificación y control", text: "Cronogramas, control de avance y costos, y reportabilidad periódica al cliente." },
    ],
    process: baseProcess,
    applications: [
      "Proyectos de ampliación en plantas concentradoras",
      "Obras de control ambiental, como pantallas para control de polvo",
      "Instalaciones industriales y portuarias",
    ],
    faqs: [
      { q: "¿Cuál es la diferencia entre EPC y EPCM?", a: "En EPC nos hacemos responsables de ejecutar la construcción. En EPCM gestionamos y supervisamos la construcción en nombre del owner, que contrata directamente a los constructores." },
      { q: "¿En qué zonas trabajan?", a: "Principalmente en la zona centro-norte de Chile. Podemos reunirnos con usted en Calama, Santiago o La Serena." },
    ],
    seoTitle: "Gestión de proyectos EP, EPC y EPCM | S&M Ingeniería",
  },
  {
    slug: "ingenieria-civil-estructural",
    name: "Civil y estructural",
    group: "disciplina",
    icon: "structure",
    headline: "Ingeniería civil y estructural para instalaciones mineras e industriales",
    summary:
      "Estructuras de acero, calderería, galpones industriales, obras hidráulicas, movimientos de tierra, caminos y trazados.",
    intro: [
      "Diseñamos las estructuras y obras civiles que soportan la operación: desde un galpón o un edificio de proceso hasta caminos de acceso y obras hidráulicas.",
      "Calculamos y detallamos pensando en cómo se va a construir en faena, para reducir consultas e interferencias en la obra.",
    ],
    image: img.eolicas,
    imageAlt: "Pantallas eólicas para control de polvo en el chancador primario N.º 5 de Minera Escondida",
    scope: [
      { title: "Estructuras de acero de edificios", text: "Edificios de proceso, soportes de equipos y plataformas." },
      { title: "Estructuras de calderería", text: "Chutes, tolvas, estanques y piezas especiales." },
      { title: "Galpones industriales", text: "Bodegas, talleres y naves de almacenamiento." },
      { title: "Obras hidráulicas", text: "Canales, obras de conducción y manejo de aguas." },
      { title: "Movimientos de tierra", text: "Plataformas, rellenos y excavaciones." },
      { title: "Caminos y trazados", text: "Caminos de acceso y trazados generales de faena." },
    ],
    process: baseProcess,
    applications: [
      "Pantallas eólicas y cierres para control de polvo",
      "Edificios para equipos de proceso",
      "Embarcaderos y obras en borde costero",
    ],
    faqs: [
      { q: "¿Realizan memorias de cálculo?", a: "Sí. Cada diseño estructural se entrega con su memoria de cálculo, planos y especificaciones." },
      { q: "¿Diseñan fundaciones para equipos?", a: "Sí, como parte de la ingeniería civil de los proyectos de instalación de equipos de proceso." },
    ],
    seoTitle: "Ingeniería civil y estructural | S&M Ingeniería",
  },
  {
    slug: "ingenieria-mecanica-piping",
    name: "Mecánica y piping",
    group: "disciplina",
    icon: "pipe",
    headline: "Ingeniería mecánica y piping para transporte de sólidos y pulpas",
    summary:
      "Transporte y almacenamiento de sólidos a granel, transporte de pulpas de relaves y concentrados, y trazados de pipelines.",
    intro: [
      "Resolvemos cómo se mueve el mineral dentro de su operación: correas y sistemas para sólidos a granel, y tuberías para pulpas de relaves y concentrados.",
      "Integramos el diseño mecánico con las disciplinas civil y eléctrica para que la instalación funcione como un solo sistema.",
    ],
    image: img.desaguadores,
    imageAlt: "Edificio de filtros cerámicos desaguadores en CAP Minería",
    scope: [
      { title: "Sólidos a granel", text: "Transporte y almacenamiento de mineral y otros sólidos: correas, chutes y acopios." },
      { title: "Pulpas de relaves y concentrados", text: "Sistemas de transporte de pulpas, bombeo y tuberías." },
      { title: "Trazados de pipeline", text: "Definición de rutas, soportes y detalles de tuberías de larga distancia." },
      { title: "Instalación de equipos", text: "Montaje y disposición de equipos de proceso en plantas existentes." },
    ],
    process: baseProcess,
    applications: [
      "Instalación de filtros cerámicos desaguadores",
      "Concentración magnética en seco",
      "Ampliaciones de capacidad de transporte de mineral",
    ],
    faqs: [
      { q: "¿Trabajan con relaves y concentrados?", a: "Sí, diseñamos sistemas de transporte de pulpas de relaves y de concentrados." },
      { q: "¿Pueden intervenir una planta en operación?", a: "Sí. Diseñamos considerando las restricciones de operación y las ventanas de detención de la planta." },
    ],
    seoTitle: "Ingeniería mecánica y piping | S&M Ingeniería",
  },
  {
    slug: "ingenieria-electrica-instrumentacion",
    name: "Electricidad e instrumentación",
    group: "disciplina",
    icon: "bolt",
    headline: "Ingeniería eléctrica e instrumentación para plantas y faenas",
    summary: "Sistemas de fuerza, control, iluminación y comunicaciones para instalaciones mineras e industriales.",
    intro: [
      "Diseñamos la alimentación eléctrica, el control y las comunicaciones que necesitan los equipos y las instalaciones que proyectamos.",
      "Coordinamos la disciplina eléctrica con la mecánica y la civil desde el inicio, evitando interferencias en terreno.",
    ],
    image: img.hsd,
    imageAlt: "Planta de concentración magnética seca en HSD, planta CNN de CAP",
    scope: [
      { title: "Fuerza", text: "Distribución eléctrica, alimentación de equipos y canalizaciones." },
      { title: "Control", text: "Instrumentación y lógica de control de equipos y procesos." },
      { title: "Iluminación", text: "Iluminación de áreas de proceso, caminos e instalaciones generales." },
      { title: "Comunicaciones", text: "Redes y sistemas de comunicación de la instalación." },
    ],
    process: baseProcess,
    applications: [
      "Incorporación de nuevos equipos de proceso",
      "Facilities: oficinas, casinos, garitas y bodegas",
      "Iluminación de patios y caminos de faena",
    ],
    faqs: [
      { q: "¿Incluyen la instrumentación de los equipos nuevos?", a: "Sí, la instrumentación y el control forman parte del alcance eléctrico de los proyectos de proceso." },
    ],
    seoTitle: "Ingeniería eléctrica e instrumentación | S&M Ingeniería",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

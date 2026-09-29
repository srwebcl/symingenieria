// Datos corporativos centralizados. Editar aquí actualiza todo el sitio.

export const site = {
  name: "S&M Ingeniería y Construcción SpA",
  shortName: "S&M Ingeniería",
  url: "https://www.sym-ingenieria.cl",
  description:
    "Ingeniería, suministro, construcción y montaje para plantas mineras e industriales. Proyectos Greenfield y Brownfield desde La Serena.",
  phone: "+56 9 9752 3194 / +56 9 8251 4295",
  phoneHref: "tel:+56997523194",
  whatsapp: "https://wa.me/56997523194",
  email: "contacto@sym-ingenieria.cl",
  address: "Balmaceda 1625, Oficina 32, La Serena, Región de Coquimbo",
  offices: ["La Serena", "Calama", "Santiago"],
  formEndpoint:
    import.meta.env.PUBLIC_FORM_ENDPOINT ?? "https://formspree.io/f/REEMPLAZAR",
};

const wp = "https://www.sym-ingenieria.cl/wp-content/uploads";
export const img = {
  hero: `${wp}/2019/05/pexels-photo-416405-1024x640.jpeg`,
  foto1: `${wp}/2019/06/Foto-1-Resized.png`,
  foto2: `${wp}/2019/06/Foto-2-Resized.png`,
  foto3: `${wp}/2019/06/Foto-3-Resized.png`,
  foto4: `${wp}/2019/06/cropped-Foto-4-Resized.png`,
  oficina: `${wp}/2019/06/Balmaceda-1625-Of-32-1024x768.jpg`,
  embarcadero: `${wp}/2019/06/PA-01.jpg`,
  eolicas: `${wp}/2019/06/EOLICAS-CHANCADOR-5-ESCONDIDA.jpg`,
  desaguadores: `${wp}/2019/06/EDIFICIO-DESGAUADORES-MAGNETITA.png`,
  hsd: `${wp}/2019/06/PLANTA-DE-HSD-CNN.png`,
};

export type Project = {
  title: string;
  client: string;
  image: string;
  video?: string;
  slug: string;
  services: string[]; // slugs de servicios (especialidades) relacionados
};

export const projects: Project[] = [
  {
    "title": "Servicios de ingeniería, obras hidráulicas y obras civiles menores",
    "client": "Cía. Minera San Gerónimo",
    "slug": "servicios-de-ingenieria-obras-hidraulicas-y-obras-civiles-menores",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "obras-civiles",
      "piping"
    ]
  },
  {
    "title": "Mejoramiento de alimentación a correas transportadoras del molino 3",
    "client": "Planta Talcuna – Cía. Minera San Gerónimo",
    "slug": "mejoramiento-de-alimentacion-a-correas-transportadoras-del-molino-3",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "estructuras",
      "montaje-mecanico"
    ]
  },
  {
    "title": "Ingeniería de líneas de emergencia del sistema de filtrado",
    "client": "Planta Talcuna – Cía. Minera San Gerónimo",
    "slug": "ingenieria-de-lineas-de-emergencia-del-sistema-de-filtrado",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "piping"
    ]
  },
  {
    "title": "Nuevo diseño del pipeline de agua de sello",
    "client": "Planta Talcuna – Cía. Minera San Gerónimo",
    "slug": "nuevo-diseno-del-pipeline-de-agua-de-sello",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "piping"
    ]
  },
  {
    "title": "Sostenimiento de muro de contención y cierre estructural",
    "client": "Poder de Compra Guayacán – ENAMI",
    "slug": "sostenimiento-de-muro-de-contencion-y-cierre-estructural",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "obras-civiles"
    ]
  },
  {
    "title": "Ingeniería básica avanzada de filtrado de relaves",
    "client": "Minera Los Pelambres (Antofagasta Minerals)",
    "slug": "ingenieria-basica-avanzada-de-filtrado-de-relaves",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "obras-civiles",
      "estructuras",
      "montaje-mecanico",
      "piping"
    ]
  },
  {
    "title": "Nuevo diseño del pipeline de aguas de proceso del sector molienda",
    "client": "Planta Talcuna – Cía. Minera San Gerónimo",
    "slug": "nuevo-diseno-del-pipeline-de-aguas-de-proceso-del-sector-molienda",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "piping"
    ]
  },
  {
    "title": "Instalaciones modulares tipo baño doble con rampa de acceso",
    "client": "ENAMI",
    "slug": "instalaciones-modulares-tipo-bano-doble-con-rampa-de-acceso",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "estructuras"
    ]
  },
  {
    "title": "Ingeniería y suministro de estructura para planta de filtrado",
    "client": "Minera Los Pelambres (Spin Technologies)",
    "slug": "ingenieria-y-suministro-de-estructura-para-planta-de-filtrado",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "estructuras",
      "piping"
    ]
  },
  {
    "title": "Reemplazo de filtro prensa por filtro cerámico BMP de 21 m²",
    "client": "Planta Talcuna – Cía. Minera San Gerónimo",
    "slug": "reemplazo-de-filtro-prensa-por-filtro-ceramico-bmp-de-21-m",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "montaje-mecanico"
    ]
  },
  {
    "title": "Obras de arte N°4 y N°5 del camino de acceso a la dársena",
    "client": "Puerto Cruz Grande – CMP",
    "slug": "obras-de-arte-n-4-y-n-5-del-camino-de-acceso-a-la-darsena",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "obras-civiles"
    ]
  },
  {
    "title": "Laboratorio metalúrgico",
    "client": "Planta Delta – ENAMI",
    "slug": "laboratorio-metalurgico",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "obras-civiles",
      "montaje-mecanico"
    ]
  },
  {
    "title": "Galpón para sala de reactivos de flotación",
    "client": "Planta Delta – ENAMI",
    "slug": "galpon-para-sala-de-reactivos-de-flotacion",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "obras-civiles",
      "estructuras"
    ]
  },
  {
    "title": "Inspección técnica del estado estructural de plantas",
    "client": "Minera Caserones (SCM Minera Lumina Copper Chile)",
    "slug": "inspeccion-tecnica-del-estado-estructural-de-plantas",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "administracion-e-inspeccion"
    ]
  },
  {
    "title": "Elaboración y tramitación de expedientes de permisos sanitarios e IFC",
    "client": "Compañía Minera Arqueros S.A.",
    "slug": "elaboracion-y-tramitacion-de-expedientes-de-permisos-sanitarios-e-ifc",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "administracion-e-inspeccion"
    ]
  },
  {
    "title": "Losa de acopio de minerales (Cancha 0)",
    "client": "Planta Delta – ENAMI",
    "slug": "losa-de-acopio-de-minerales-cancha-0",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "obras-civiles"
    ]
  },
  {
    "title": "Piscina de emergencia de hormigón armado",
    "client": "Planta Delta – ENAMI",
    "slug": "piscina-de-emergencia-de-hormigon-armado",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "obras-civiles"
    ]
  },
  {
    "title": "Pilón de agua fresca",
    "client": "Planta Delta – ENAMI",
    "slug": "pilon-de-agua-fresca",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "montaje-mecanico",
      "piping"
    ]
  },
  {
    "title": "Reposición de carpeta HDPE en talud de tranque de relaves",
    "client": "Planta Delta – ENAMI",
    "slug": "reposicion-de-carpeta-hdpe-en-talud-de-tranque-de-relaves",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "obras-civiles"
    ]
  },
  {
    "title": "Mantención de piscinas",
    "client": "Planta Delta – ENAMI",
    "slug": "mantencion-de-piscinas",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "obras-civiles"
    ]
  },
  {
    "title": "Ingeniería para mejorar operación del molino 9' × 12'",
    "client": "Cía. Minera San Gerónimo",
    "slug": "ingenieria-para-mejorar-operacion-del-molino-9-12",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "montaje-mecanico"
    ]
  },
  {
    "title": "Inspección e informe de estado de cubiertas y reparación",
    "client": "Planta Delta – ENAMI",
    "slug": "inspeccion-e-informe-de-estado-de-cubiertas-y-reparacion",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "administracion-e-inspeccion"
    ]
  },
  {
    "title": "Ingeniería de modificación estructural para cambio de harnero",
    "client": "Cía. Minera San Gerónimo",
    "slug": "ingenieria-de-modificacion-estructural-para-cambio-de-harnero",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "estructuras"
    ]
  },
  {
    "title": "Red de agua potable para barrio de contratistas",
    "client": "Planta Delta – ENAMI",
    "slug": "red-de-agua-potable-para-barrio-de-contratistas",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "piping"
    ]
  },
  {
    "title": "Recuperación de espesador 18' × 12'",
    "client": "Cía. Minera San Gerónimo",
    "slug": "recuperacion-de-espesador-18-12",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "estructuras",
      "montaje-mecanico"
    ]
  },
  {
    "title": "Administración directa de construcción de planta de hierro",
    "client": "Planta Talcuna – Cía. Minera San Gerónimo",
    "slug": "administracion-directa-de-construccion-de-planta-de-hierro",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "administracion-e-inspeccion"
    ]
  },
  {
    "title": "Ingeniería de filtros desaguadores",
    "client": "Planta Magnetita – CAP Minería",
    "slug": "ingenieria-de-filtros-desaguadores",
    "image": "/img/proyectos/galpon.png",
    "services": [
      "montaje-mecanico"
    ]
  }
];

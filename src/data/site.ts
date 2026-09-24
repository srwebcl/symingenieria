// Datos corporativos centralizados. Editar aquí actualiza todo el sitio.

export const site = {
  name: "S&M Ingeniería SpA",
  shortName: "S&M Ingeniería",
  url: "https://www.sym-ingenieria.cl",
  description:
    "Ingeniería conceptual, básica y de detalle, gestión de abastecimiento y gestión de proyectos EP, EPC y EPCM para la minería e industria de la zona centro-norte de Chile.",
  phone: "+56 9 9542 0676",
  phoneHref: "tel:+56995420676",
  whatsapp: "https://wa.me/56995420676",
  email: "contacto@sym-ingenieria.cl",
  address: "Balmaceda 1625, Oficina 32, La Serena, Región de Coquimbo",
  offices: ["La Serena", "Calama", "Santiago"],
  // Endpoint del formulario. Crear uno gratis en formspree.io o web3forms.com
  // y definir PUBLIC_FORM_ENDPOINT en Vercel (Settings → Environment Variables).
  formEndpoint:
    import.meta.env.PUBLIC_FORM_ENDPOINT ?? "https://formspree.io/f/REEMPLAZAR",
};

// Imágenes del sitio actual. Recomendado: descargarlas a /public/img/
// y reemplazar estas URLs por rutas locales ("/img/pa-01.jpg").
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
  services: string[]; // slugs de servicios relacionados
};

export const projects: Project[] = [
  {
    title: "Concentración magnética seca en HSD, planta CNN",
    client: "CAP Minería",
    image: "/img/proyectos/galpon.png",
    video: "/videos/separacion-magnetica.mp4",
    services: ["ingenieria-mecanica-piping", "ingenieria-electrica-instrumentacion", "ingenieria-conceptual-basica-detalle"],
  },
  {
    title: "Filtros cerámicos de concentrado",
    client: "Lux Mining",
    image: "/img/proyectos/filtro.png",
    video: "/videos/filtro-concentrado.mp4",
    services: ["ingenieria-mecanica-piping", "ingenieria-civil-estructural", "gestion-de-abastecimiento"],
  },
  {
    title: "Mejoras en molino y alimentación mediante bandas",
    client: "Minera Privada",
    image: "/img/proyectos/molino.png",
    services: ["ingenieria-civil-estructural", "ingenieria-conceptual-basica-detalle"],
  },
  {
    title: "Estructura isométrica para pilón",
    client: "Industria Minera",
    image: "/img/proyectos/pilon.png",
    services: ["ingenieria-civil-estructural", "gestion-de-proyectos-epcm"],
  },
];

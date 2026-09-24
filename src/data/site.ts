// Datos corporativos centralizados. Editar aquí actualiza todo el sitio.

export const site = {
  name: "S&M Ingeniería y Construcción SpA",
  shortName: "S&M Ingeniería",
  url: "https://www.sym-ingenieria.cl",
  description:
    "Ingeniería, suministro, construcción y montaje para plantas mineras e industriales. Proyectos Greenfield y Brownfield desde La Serena.",
  phone: "+56 9 9542 0676",
  phoneHref: "tel:+56995420676",
  whatsapp: "https://wa.me/56995420676",
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
  services: string[]; // slugs de servicios (especialidades) relacionados
};

export const projects: Project[] = [
  {
    title: "Recuperación de agua y minerales de hierro",
    client: "Cía. Minera San Gerónimo (Planta Talcuna)",
    image: "/img/proyectos/galpon.png",
    services: [
      "obras-civiles-y-arquitectura",
      "estructuras-y-caldereria",
      "montaje-mecanico-y-procesos",
      "piping",
    ],
  },
  {
    title: "Ingeniería básica avanzada de filtrado de relaves",
    client: "Minera Los Pelambres (Antofagasta Minerals)",
    image: "/img/proyectos/filtro.png",
    services: [
      "obras-civiles-y-arquitectura",
      "estructuras-y-caldereria",
      "montaje-mecanico-y-procesos",
      "piping",
    ],
  },
  {
    title: "Obras de arte N°4 y N°5 del camino de acceso a la dársena",
    client: "Puerto Cruz Grande (CMP)",
    image: "/img/proyectos/molino.png",
    services: ["obras-civiles-y-arquitectura"],
  },
  {
    title: "Sostenimiento de muro de contención y cierre estructural",
    client: "Poder de Compra Guayacán (ENAMI)",
    image: "/img/proyectos/pilon.png",
    services: ["obras-civiles-y-arquitectura"],
  },
];

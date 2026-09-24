export type Service = {
  slug: string;
  name: string; // nombre corto para menús
  headline: string; // H1 de la landing
  summary: string; // una o dos frases, usada en tarjetas y meta
  icon: "blueprint" | "structure" | "project" | "pipe" | "supply";
};

export const services: Service[] = [
  {
    slug: "obras-civiles-y-arquitectura",
    name: "Obras Civiles y Arquitectura",
    headline: "Ingeniería y Construcción de Obras Civiles y Arquitectura",
    summary: "Planimetría, fundaciones, losas, muros de contención, galpones y geomembranas.",
    icon: "blueprint",
  },
  {
    slug: "estructuras-y-caldereria",
    name: "Estructuras y Calderería",
    headline: "Ingeniería, Fabricación y Montaje de Estructuras de Edificios y Calderería",
    summary: "Estructuras pesadas, medianas y livianas; silos, tolvas, estanques y chutes.",
    icon: "structure",
  },
  {
    slug: "montaje-mecanico-y-procesos",
    name: "Montaje Mecánico y de Procesos",
    headline: "Montaje de Equipos Mecánicos y de Procesos",
    summary: "Chancado, molienda, concentración, filtrado, espesamiento y transporte de minerales.",
    icon: "project",
  },
  {
    slug: "piping",
    name: "Piping",
    headline: "Ingeniería, Fabricación y Montaje de Piping",
    summary: "Cañerías de acero, acero inoxidable, spools engomados, HDPE y canales engomados.",
    icon: "pipe",
  },
  {
    slug: "inspeccion-administracion-y-permisos",
    name: "Inspección, Administración y Permisos",
    headline: "Inspección, Administración de Construcción y Permisos",
    summary: "Inspección en terreno, administración de construcción y permisos sectoriales, sanitarios e IFC.",
    icon: "supply",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

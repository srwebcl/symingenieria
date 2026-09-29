const fs = require('fs');

const original4 = [
  {
    title: "Recuperación de agua y minerales de hierro",
    client: "Cía. Minera San Gerónimo (Planta Talcuna)",
    slug: "recuperacion-agua-minerales-hierro",
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
    slug: "ingenieria-filtrado-relaves",
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
    slug: "obras-de-arte-camino-acceso",
    image: "/img/proyectos/molino.png",
    services: ["obras-civiles-y-arquitectura"],
  },
  {
    title: "Sostenimiento de muro de contención y cierre estructural",
    client: "Poder de Compra Guayacán (ENAMI)",
    slug: "sostenimiento-muro-contencion",
    image: "/img/proyectos/pilon.png",
    services: ["obras-civiles-y-arquitectura"],
  },
];

let siteTs = fs.readFileSync('src/data/site.ts', 'utf8');
const match = siteTs.match(/export const projects: Project\[\] = (\[[\s\S]*?\]);/);
if (match) {
  let allProjects = eval(match[1]);
  
  // Filter out the ones that overlap with the original 4 to avoid duplicates
  allProjects = allProjects.filter(p => 
    !p.title.includes("filtrado de relaves") &&
    !p.title.includes("camino de acceso a la dársena") &&
    !p.title.includes("muro de contención")
  );
  
  // Add original 4 at the beginning
  const finalProjects = [...original4, ...allProjects];
  
  siteTs = siteTs.replace(/export const projects: Project\[\] = \[[\s\S]*?\];/, `export const projects: Project[] = ${JSON.stringify(finalProjects, null, 2)};`);
  fs.writeFileSync('src/data/site.ts', siteTs);
  console.log("Restored original 4 and kept the rest. Total:", finalProjects.length);
}

const fs = require('fs');
const file = fs.readFileSync('src/pages/proyectos.astro', 'utf8');
const match = file.match(/const allProjects = (\[[\s\S]*?\]);/);
if (match) {
  const allProjects = eval(match[1]);
  const formatted = allProjects.map(p => ({
    title: p.title,
    client: p.client,
    slug: p.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    image: "/img/proyectos/galpon.png",
    services: p.tags.map(t => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-'))
  }));
  
  let siteTs = fs.readFileSync('src/data/site.ts', 'utf8');
  siteTs = siteTs.replace(/export const projects: Project\[\] = \[[\s\S]*?\];/, `export const projects: Project[] = ${JSON.stringify(formatted, null, 2)};`);
  fs.writeFileSync('src/data/site.ts', siteTs);
  console.log("Updated site.ts with " + formatted.length + " projects.");
} else {
  console.log("Could not find allProjects");
}

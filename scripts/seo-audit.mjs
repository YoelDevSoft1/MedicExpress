import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';

const root = process.cwd();
const distDir = resolve(root, 'dist');
const reportPath = resolve(root, '.seo-audit', 'report.json');
const baselinePath = resolve(root, 'seo-baseline.json');
const writeBaseline = process.argv.includes('--write-baseline');
const enforceBaseline = process.argv.includes('--enforce-baseline');

if (!existsSync(distDir)) {
  console.error('No existe dist/. Ejecuta npm run build antes de la auditoría SEO.');
  process.exit(1);
}

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : path.endsWith('.html') ? [path] : [];
  });
}
function decode(value = '') {
  return value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<').replaceAll('&gt;', '>').trim();
}
function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return decode(match?.[1] ?? match?.[2] ?? match?.[3] ?? '');
}
function meta(html, key, value) {
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    if (attribute(tag, key).toLowerCase() === value.toLowerCase()) return attribute(tag, 'content');
  }
  return '';
}
function canonicalTags(html) {
  return (html.match(/<link\b[^>]*>/gi) ?? [])
    .filter((tag) => attribute(tag, 'rel').toLowerCase().split(/\s+/).includes('canonical'))
    .map((tag) => attribute(tag, 'href')).filter(Boolean);
}
function routeFor(file) {
  const path = relative(distDir, file).split(sep).join('/');
  if (path === 'index.html') return '/';
  return `/${path.replace(/\/?index\.html$/, '').replace(/\.html$/, '')}`.replace(/\/+$/, '') || '/';
}

const pages = walk(distDir).sort().map((file) => {
  const html = readFileSync(file, 'utf8');
  const canonicals = canonicalTags(html);
  const invalidJsonLd = [];
  let jsonLdCount = 0;
  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    jsonLdCount += 1;
    try { JSON.parse(match[1].trim()); } catch (error) { invalidJsonLd.push(error.message); }
  }
  return {
    route: routeFor(file),
    title: decode(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? ''),
    description: meta(html, 'name', 'description'),
    canonical: canonicals[0] ?? '',
    canonicalCount: canonicals.length,
    robots: meta(html, 'name', 'robots'),
    ogImage: meta(html, 'property', 'og:image'),
    jsonLdCount,
    invalidJsonLd,
    templateMarkers: ['astrowind', 'astro.build/themes', '/img/screens/doctors.png', 'lorem ipsum']
      .filter((marker) => html.toLowerCase().includes(marker)),
  };
});

const errors = [];
const warnings = [];
for (const page of pages) {
  if (!page.title) errors.push({ route: page.route, code: 'missing-title' });
  if (page.canonicalCount > 1) errors.push({ route: page.route, code: 'multiple-canonicals' });
  if (page.invalidJsonLd.length) errors.push({ route: page.route, code: 'invalid-json-ld', detail: page.invalidJsonLd });
  if (!page.description) warnings.push({ route: page.route, code: 'missing-description' });
  if (!page.canonical) warnings.push({ route: page.route, code: 'missing-canonical' });
  if (page.templateMarkers.length) errors.push({ route: page.route, code: 'template-marker', detail: page.templateMarkers });
}
const canonicalOwners = new Map();
for (const page of pages.filter((item) => item.canonical)) {
  canonicalOwners.set(page.canonical, [...(canonicalOwners.get(page.canonical) ?? []), page.route]);
}
for (const [canonical, routes] of canonicalOwners) {
  if (routes.length > 1) errors.push({ code: 'duplicate-canonical', canonical, routes });
}
if (enforceBaseline && existsSync(baselinePath)) {
  const baseline = JSON.parse(readFileSync(baselinePath, 'utf8'));
  const currentByRoute = new Map(pages.map((page) => [page.route, page]));
  for (const expected of baseline.pages) {
    const current = currentByRoute.get(expected.route);
    if (!current) {
      errors.push({ route: expected.route, code: 'baseline-route-removed' });
      continue;
    }
    for (const field of ['title', 'canonical', 'robots']) {
      if (current[field] !== expected[field]) {
        errors.push({ route: expected.route, code: 'baseline-changed', field, expected: expected[field], actual: current[field] });
      }
    }
  }
}
const snapshot = {
  generatedFrom: 'dist',
  pages: pages.map(({ route, title, description, canonical, robots, ogImage }) =>
    ({ route, title, description, canonical, robots, ogImage })),
};
const report = { summary: { pages: pages.length, errors: errors.length, warnings: warnings.length }, errors, warnings, pages };
mkdirSync(dirname(reportPath), { recursive: true });
writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
if (writeBaseline) writeFileSync(baselinePath, `${JSON.stringify(snapshot, null, 2)}\n`);
console.log(`SEO audit: ${pages.length} páginas, ${errors.length} errores, ${warnings.length} advertencias.`);
console.log(`Reporte: ${reportPath}`);
if (writeBaseline) console.log(`Línea base: ${baselinePath}`);
if (errors.length) {
  console.error(JSON.stringify(errors.slice(0, 20), null, 2));
  process.exit(1);
}

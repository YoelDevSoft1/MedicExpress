import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const read = file => readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
const origin = 'https://medicexpress.com.co';
const sitemap = new Set([...read('dist/sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]));
const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
  const file = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(file) : entry.name === 'index.html' ? [file] : [];
});
const pages = walk(fileURLToPath(new URL('../dist/', import.meta.url))).map(file => {
  const html = readFileSync(file, 'utf8');
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap(m => { const data = JSON.parse(m[1]); return data['@graph'] ?? (Array.isArray(data) ? data : [data]); });
  return { html, schemas, canonical: html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1] };
});

test('all published routes keep a single H1, canonical and a consistent organizational identity', () => {
  assert.equal(pages.length, 30);
  assert.equal(sitemap.size, 30);
  for (const page of pages) {
    assert.ok(sitemap.has(page.canonical), page.canonical);
    assert.equal((page.html.match(/<h1\b/g) ?? []).length, 1, page.canonical);
    const organization = page.schemas.filter(x => x['@type'] === 'Organization');
    assert.equal(organization.length, 1);
    assert.equal(organization[0]['@id'], `${origin}/#organization`);
    assert.equal(organization[0].contactPoint.telephone, '+57 320 225 2996');
    assert.equal(organization[0].address, undefined);
    assert.equal(organization[0].sameAs, undefined);
  }
});

test('visible breadcrumbs identify existing canonical pages and end on the current page', () => {
  for (const page of pages.filter(p => p.canonical !== `${origin}/`)) {
    assert.ok(page.html.includes('aria-current="page"'), page.canonical);
    const breadcrumbs = page.schemas.filter(x => x['@type'] === 'BreadcrumbList');
    assert.equal(breadcrumbs.length, 1, page.canonical);
    const items = breadcrumbs[0].itemListElement;
    assert.equal(items[0].item, `${origin}/`);
    assert.equal(items.at(-1).item, page.canonical);
    items.forEach((item, index) => {
      assert.equal(item.position, index + 1);
      assert.ok(sitemap.has(item.item), item.item);
      assert.ok(item.name.trim());
    });
  }
});

test('the local coverage schemas name Bogotá and approved fixed prices are not advertised as starting prices', () => {
  for (const slug of ['colombia', 'medico-a-domicilio-colombia', 'enfermeria-a-domicilio-colombia']) {
    const page = pages.find(p => p.canonical === `${origin}/${slug}/`);
    const schema = page.schemas.find(x => x['@type'] === 'MedicalWebPage');
    assert.deepEqual(schema.areaServed, { '@type': 'City', name: 'Bogotá' });
  }
  for (const [route, price] of [
    ['servicios-medicos/lavado-de-oido', '140.000'],
    ['servicios-de-enfermeria/inyectologia-a-domicilio', '95.000'],
    ['servicios-de-enfermeria/toma-de-signos-vitales', '100.000'],
    ['servicios-medicos/terapias-respiratorias', '115.000'],
  ]) {
    const html = read(`dist/${route}/index.html`);
    assert.ok(html.includes(`$${price} COP`));
    assert.ok(!html.includes(`Desde $${price}`), route);
    assert.ok(!html.includes(`desde $${price}`), route);
  }
  const changes = JSON.parse(read('seo-changes-2026-11-11.json')).changes;
  for (const change of changes) assert.ok(!/[?\uFFFD]/.test(change.after), change.slug);
});

test('the original coordination resource is linked from both home and nursing, and preserves the relay rule', () => {
  const route = '/guias/coordinar-cuidado-domiciliario/';
  assert.ok(sitemap.has(origin + route));
  for (const file of ['dist/index.html', 'dist/servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario/index.html']) {
    assert.ok(read(file).includes(`href="${route}"`), file);
  }
  const guide = read('dist/guias/coordinar-cuidado-domiciliario/index.html');
  assert.ok(guide.includes('dos relevos de 12 horas'));
  assert.ok(guide.includes('Información administrativa'));
});

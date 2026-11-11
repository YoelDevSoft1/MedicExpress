import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const data = JSON.parse(readFileSync(new URL('../src/data/nursing-prices.json', import.meta.url), 'utf8'));
const html = readFileSync(new URL('../dist/servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario/index.html', import.meta.url), 'utf8');

test('all approved nursing shifts and complementary prices remain exact', () => {
  const expected = {
    turno_enfermeria_4h: 110000, turno_enfermeria_6h: 120000,
    turno_enfermeria_8h_diurno: 125000, turno_enfermeria_8h_nocturno: 150000,
    turno_enfermeria_12h_diurno: 145000, turno_enfermeria_12h_nocturno: 180000,
    turno_enfermeria_24h: 280000, turno_festivo_8h: 150000,
    turno_festivo_12h: 175000, turno_festivo_nocturno_12h: 205000,
    turno_festivo_24h: 330000,
  };
  assert.deepEqual(Object.fromEntries(data.shifts.map(({ code, priceCOP }) => [code, priceCOP])), expected);
  assert.equal(data.additionalHourCOP, 20000);
  assert.equal(data.appointmentSupportCOP, 110000);
  for (const shift of data.shifts) {
    assert(html.includes(shift.label), shift.code);
    assert(html.includes(`${new Intl.NumberFormat('es-CO').format(shift.priceCOP)} COP`), shift.code);
  }
  assert(!/professionalCOP|relays|honorarios|participación empresarial/.test(JSON.stringify(data)));
});

test('price links request the selected shift through the current WhatsApp', () => {
  const links = [...html.matchAll(/<a\b[^>]*class="[^"]*price-link[^>]*>/g)];
  assert.equal(links.length, data.shifts.length);
  for (let index = 0; index < links.length; index++) {
    const href = links[index][0].match(/href="([^"]+)"/)[1].replaceAll('&amp;', '&');
    const url = new URL(href);
    assert.equal(url.hostname, 'wa.me');
    assert.equal(url.pathname, '/573202252996');
    assert(url.searchParams.get('text').includes(data.shifts[index].label));
    assert(url.searchParams.get('text').includes('auxiliar de enfermería'));
  }
});

test('SEO identity and essential care conditions remain visible', () => {
  assert(html.includes('<title>Enfermería a domicilio | MedicExpress</title>'));
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert(/<h1\b[^>]*>\s*Enfermería domiciliaria y apoyo hospitalario\s*<\/h1>/.test(html));
  assert(html.includes('https://medicexpress.com.co/servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario/'));
  assert(html.indexOf('id="precios-enfermeria"') < html.indexOf('id="detalles"'));
  assert(html.includes('dos relevos de 12 horas'));
  assert(html.includes('No se vende como visita independiente'));
  assert(html.includes('El traslado del paciente se acuerda aparte'));
  assert(html.includes('Cotización por plan'));
  assert(!html.includes('573042912564'));
});

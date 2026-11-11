import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const routes = [
  'laboratorio-a-domicilio-colombia',
  'servicios-medicos/electrocardiografia-basica',
  'servicios-medicos/extraccion-y-cuidado-para-unas-encarnadas',
  'laboratorio-clinico/laboratorio-a-domicilio',
  'laboratorio-clinico/toma-de-muestra-a-domicilio',
  'laboratorio-clinico/toma-de-muestra-pcr-covid-19-a-domicilio',
  'laboratorio-clinico/prueba-de-antigeno-a-domicilio'
];
for (const route of routes) {
  const html = readFileSync(`dist/${route}/index.html`, 'utf8');
  assert.ok(html.includes('No se aceptan reservas para este servicio.'), route);
  assert.ok(!html.includes('Referencia comercial'), route);
  assert.ok(!html.includes('"@type":"MedicalProcedure"'), route);
  assert.ok(html.includes(`https://medicexpress.com.co/${route}/`), route);
}
const active = readFileSync('dist/servicios-medicos/lavado-de-oido/index.html', 'utf8');
const laboratoryCategory = readFileSync('dist/laboratorio-clinico/index.html', 'utf8');
assert.ok(laboratoryCategory.includes('No se aceptan reservas.'));
assert.ok(!laboratoryCategory.includes('Consulta laboratorio clínico por WhatsApp'));
assert.ok(active.includes('Referencia comercial'));
assert.ok(active.includes('140.000'));
console.log('7 rutas no disponibles conservadas; sin oferta ni procedimiento estructurado. Servicio activo preservado.');

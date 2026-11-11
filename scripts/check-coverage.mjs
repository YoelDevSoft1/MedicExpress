import assert from 'node:assert/strict';import fs from 'node:fs';
for(const route of ['colombia','medico-a-domicilio-colombia','enfermeria-a-domicilio-colombia','teleconsulta-medica-colombia']){
const h=fs.readFileSync(`dist/${route}/index.html`,'utf8');assert.ok(h.includes('No tenemos cobertura domiciliaria confirmada en otras ciudades.'));assert.ok(!h.includes('Medell\u00edn'));
const data=[...h.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(m=>{const x=JSON.parse(m[1]);return Array.isArray(x)?x:[x]});
const service=data.find(x=>x['@type']==='MedicalWebPage');if(route==='laboratorio-a-domicilio-colombia'){assert.ok(data.some(x=>x['@type']==='WebPage'));assert.ok(!service);}else{assert.ok(service);assert.equal(service.areaServed['@type'],route==='teleconsulta-medica-colombia'?'Country':'City');}}
console.log('Coverage: four national routes retain URLs and distinguish home visits from remote consultation.');

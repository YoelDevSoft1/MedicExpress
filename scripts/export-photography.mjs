import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = new URL('../', import.meta.url);
const batch = JSON.parse(await fs.readFile(new URL('assets/photography/batch-2026-11-11.json', root), 'utf8'));
const report = [];
for (const asset of batch.assets) {
  const source = fileURLToPath(new URL(`assets/photography/${asset.original}`, root));
  const metadata = await sharp(source).metadata();
  assert.ok(Math.abs(metadata.width / metadata.height - 4 / 3) < 0.01, `${asset.name}: proporción`);
  for (const width of batch.exports.widths) {
    const path = `public/img/photos/${asset.name}-${width}.webp`;
    const output = fileURLToPath(new URL(path, root));
    await sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: batch.exports.quality }).toFile(output);
    const exported = await sharp(output).metadata();
    const { size } = await fs.stat(output);
    assert.equal(exported.width, width, path);
    assert.equal(exported.height, width * 3 / 4, path);
    assert.ok(size < (width === 480 ? 70_000 : 260_000), `${path}: presupuesto de peso`);
    report.push({ path, width, height: exported.height, bytes: size });
  }
}

const existing = [
  { name: 'visita-medica', title: 'Visita médica', alt: 'Conversación de un médico con una mujer mayor en casa' },
  { name: 'auxiliar-cuidado', title: 'Auxiliar y adulto mayor', alt: 'Auxiliar conversando con una mujer mayor en casa' },
];
const cards = [...existing, ...batch.assets].map(asset => `<article><a href="${asset.name}-original.png"><img src="../../public/img/photos/${asset.name}-768.webp" alt="${asset.alt}" width="768" height="576" loading="lazy"></a><h2>${asset.title}</h2><p>${asset.use ?? 'Recurso existente'}</p><p><a href="${asset.name}-original.png">Original PNG</a> · ${[480,768,1200].map(w=>`<a href="../../public/img/photos/${asset.name}-${w}.webp">${w}px</a>`).join(' · ')}</p></article>`).join('\n');
await fs.writeFile(new URL('assets/photography/gallery.html', root), `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Banco fotográfico — MedicExpress y SMD Vital</title><style>body{font:16px/1.6 system-ui,sans-serif;background:#f5f5fa;color:#172033;margin:0}main{max-width:1200px;margin:auto;padding:32px 20px}h1{font-size:clamp(26px,4vw,40px)}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:24px}article{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 8px 30px #1720330b}img{display:block;width:100%;height:auto}h2,p{margin:12px 20px}h2{font-size:20px}p{font-size:14px}a{color:#3730a3}.notice{margin:0 0 28px;color:#475569}footer{margin-top:28px;color:#475569}</style></head>
<body><main><h1>Banco fotográfico</h1><p class="notice">${existing.length + batch.assets.length} escenas para MedicExpress y SMD Vital. Imágenes ilustrativas creadas con IA; no representan al equipo ni a pacientes reales. Los materiales mostrados no acreditan insumos incluidos. Sin texto incrustado.</p><div class="grid">${cards}</div><footer>Generación: ImageGen integrado · Originales PNG y versiones WebP de 480, 768 y 1200 px · Prompts completos en brief.json y batch-2026-11-11.json.</footer></main></body></html>`);
await fs.writeFile(new URL('assets/photography/export-report-2026-11-11.json', root), JSON.stringify({ generatedAssets: batch.assets.length, exports: report }, null, 2) + '\n');
console.log(`${batch.assets.length} fotografías nuevas; ${report.length} WebP verificados; galería con ${existing.length + batch.assets.length} escenas.`);

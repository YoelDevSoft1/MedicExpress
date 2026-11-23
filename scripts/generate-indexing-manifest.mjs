import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * MedicExpress — Fast Indexing, GSC Priority Queue & IndexNow / Ping Automation CLI
 *
 * Usage:
 *   node scripts/generate-indexing-manifest.mjs [--write] [--submit-indexnow] [--ping] [--key=<INDEXNOW_KEY>]
 *
 * Features:
 *   1. Validates all 30 sitemap URLs against compiled dist/ HTML files (canonical match, no noindex, trailing slash consistency).
 *   2. Outputs the Exact 8-URL Google Search Console Priority Re-Indexing Queue + full tiered URL inspection queue (P0, P1, P2).
 *   3. Generates `.seo-audit/indexing-manifest.json` with ready-to-submit IndexNow payload & GSC batch checklist.
 *   4. Supports live IndexNow submission (`--submit-indexnow`) and sitemap ping verification (`--ping`).
 */

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');
const manifestPath = resolve(root, '.seo-audit', 'indexing-manifest.json');
const SITE_HOST = 'medicexpress.com.co';
const SITE_ORIGIN = `https://${SITE_HOST}`;
const SITEMAP_URLS = [`${SITE_ORIGIN}/sitemap.xml`];
const DEFAULT_INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'medicexpress2026indexnowkey4d7e9a';

const args = process.argv.slice(2);
const shouldWrite = args.includes('--write') || !args.includes('--no-write');
const shouldSubmitIndexNow = args.includes('--submit-indexnow');
const shouldPing = args.includes('--ping');
const shouldJsonOnly = args.includes('--json');
const keyArg = args.find((a) => a.startsWith('--key='))?.split('=')[1] || DEFAULT_INDEXNOW_KEY;
const writeKeyFile = args.includes('--write-key-file');

// Exact 8-URL Priority Re-Indexing Queue for Google Search Console (GSC) - MedicExpress
export const GSC_8_PRIORITY_QUEUE = [
  {
    rank: 1,
    url: `${SITE_ORIGIN}/`,
    route: '/',
    serviceCluster: 'Homepage / Puerta de Entrada Nacional & Atención Hoy Mismo en Bogotá',
    officialPriceCOP: 'Teleconsulta $90.000 COP | Domicilio Bogotá desde $95.000 COP',
    priorityTier: 'P0',
    rationale: '16.219 impresiones en GSC; nuevo JSON-LD Organization/MedicalBusiness + enlaces directos a los 4 hubs de categoría + caja de precios transparentes en COP.',
  },
  {
    rank: 2,
    url: `${SITE_ORIGIN}/servicios-de-enfermeria/inyectologia-a-domicilio/`,
    route: '/servicios-de-enfermeria/inyectologia-a-domicilio/',
    serviceCluster: 'Inyectología a domicilio en Bogotá (IM / SC / IV)',
    officialPriceCOP: '$95.000 COP',
    priorityTier: 'P0',
    rationale: '48.012 impresiones con CTR 1,75% (Posición 6,94); mayor oportunidad inmediata de CTR en MedicExpress destacando tarifa oficial $95.000 COP y validación clínica.',
  },
  {
    rank: 3,
    url: `${SITE_ORIGIN}/servicios-medicos/lavado-de-oido/`,
    route: '/servicios-medicos/lavado-de-oido/',
    serviceCluster: 'Lavado de oídos a domicilio en Bogotá (1 o ambos oídos + otoscopia)',
    officialPriceCOP: '$140.000 COP',
    priorityTier: 'P0',
    rationale: '23.270 impresiones con CTR 2,58% (Posición 9,38); optimizada para saltar al Top 3 con tarifa única $140.000 COP (uno o ambos oídos + revisión otoscópica).',
  },
  {
    rank: 4,
    url: `${SITE_ORIGIN}/servicios-medicos/sutura-y-retiro-de-puntos/`,
    route: '/servicios-medicos/sutura-y-retiro-de-puntos/',
    serviceCluster: 'Sutura menor con anestesia local y Retiro de puntos a domicilio',
    officialPriceCOP: 'Retiro $120.000 COP | Sutura desde $150.000 COP',
    priorityTier: 'P0',
    rationale: 'Página #1 en clics de MedicExpress (1.510 clics, 21.798 impresiones, Posición 5,72); anclas y precios actualizados ($120.000 retiro / desde $150.000 sutura).',
  },
  {
    rank: 5,
    url: `${SITE_ORIGIN}/servicios-medicos/retiro-y-colocacion-de-sonda-vesical/`,
    route: '/servicios-medicos/retiro-y-colocacion-de-sonda-vesical/',
    serviceCluster: 'Cambio, colocación y retiro de sonda vesical (Foley / Nelaton)',
    officialPriceCOP: 'Cambio/Colocación $170.000 COP | Retiro $110.000 COP',
    priorityTier: 'P0',
    rationale: '6.684 impresiones con CTR 8,42% (Posición 5,89); actualización de tarifas oficiales ($170.000 cambio / $110.000 retiro) y schema MedicalProcedure.',
  },
  {
    rank: 6,
    url: `${SITE_ORIGIN}/servicios-de-enfermeria/acompanamiento-a-citas-medicas/`,
    route: '/servicios-de-enfermeria/acompanamiento-a-citas-medicas/',
    serviceCluster: 'Acompañamiento de enfermería a citas médicas y procedimientos (4h)',
    officialPriceCOP: '$110.000 COP (bloque hasta 4 horas)',
    priorityTier: 'P0',
    rationale: '8.246 impresiones con CTR 8,84% (Posición 7,18); sincronización de tarifa oficial $110.000 COP por bloque de 4 horas coordinado con SMD Vital Bogotá.',
  },
  {
    rank: 7,
    url: `${SITE_ORIGIN}/servicios-medicos/terapias-respiratorias/`,
    route: '/servicios-medicos/terapias-respiratorias/',
    serviceCluster: 'Terapia respiratoria y micronebulizaciones a domicilio en Bogotá',
    officialPriceCOP: 'Según valoración clínica (base ref. $115.000 COP)',
    priorityTier: 'P0',
    rationale: '10.499 impresiones en Posición 11,87 (CTR 0,97%); optimizada para entrar a Página 1 (Top 5) con snippet de alta conversión y protocolo de valoración clínica.',
  },
  {
    rank: 8,
    url: `${SITE_ORIGIN}/servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario/`,
    route: '/servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario/',
    serviceCluster: 'Turnos de enfermería a domicilio y hospitalaria (8h, 12h, 24h)',
    officialPriceCOP: '8h $140.000 | 12h día $160.000 | 12h noche $170.000 | 24h $310.000 COP',
    priorityTier: 'P0',
    rationale: 'Pilar de turnos de enfermería con tarifas 2026 actualizadas, tarjetas complementarias y enlaces Golden Rule hacia WhatsApp de SMD Vital Bogotá.',
  },
];

export const P1_COMMERCIAL_ROUTES = [
  '/servicios-medicos/suero-multivitaminico/',
  '/servicios-medicos/cura-de-heridas-simples-y-complejas/',
  '/servicios-medicos/valoracion-medica-a-domicilio/',
  '/servicios-medicos/servicio-medico-a-domicilio/',
  '/servicios-medicos/teleconsulta-medica/',
  '/servicios-de-enfermeria/toma-de-signos-vitales/',
  '/servicios-medicos/',
  '/servicios-de-enfermeria/',
  '/colombia/',
  '/teleconsulta-medica-colombia/',
  '/medico-a-domicilio-colombia/',
  '/enfermeria-a-domicilio-colombia/',
];

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const fullPath = join(directory, name);
    return statSync(fullPath).isDirectory() ? walk(fullPath) : fullPath.endsWith('.html') ? [fullPath] : [];
  });
}

function decode(value = '') {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .trim();
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
    .map((tag) => attribute(tag, 'href'))
    .filter(Boolean);
}

function normalizeRoute(route) {
  if (!route || route === '/') return '/';
  const decoded = decodeURIComponent(route);
  const withLead = decoded.startsWith('/') ? decoded : `/${decoded}`;
  return withLead.endsWith('/') ? withLead : `${withLead}/`;
}

function routeFor(file) {
  const rel = relative(distDir, file).split(sep).join('/');
  if (rel === 'index.html') return '/';
  const cleaned = `/${rel.replace(/\/?index\.html$/, '').replace(/\.html$/, '')}`;
  return normalizeRoute(cleaned);
}

export function buildIndexingManifest() {
  if (!existsSync(distDir)) {
    throw new Error(`No existe ${distDir}. Ejecuta "npm run build" antes de generar el manifiesto de indexación.`);
  }

  const htmlFiles = walk(distDir).sort();
  const pages = htmlFiles.map((file) => {
    const html = readFileSync(file, 'utf8');
    const canonicals = canonicalTags(html);
    const robots = meta(html, 'name', 'robots');
    const title = decode(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '');
    const description = meta(html, 'name', 'description');
    let jsonLdCount = 0;
    for (const _ of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
      jsonLdCount += 1;
    }
    return {
      route: routeFor(file),
      title,
      description,
      canonical: canonicals[0] ?? '',
      robots,
      isIndexable: !robots.toLowerCase().includes('noindex'),
      jsonLdCount,
    };
  });

  const sitemapPath = join(distDir, 'sitemap.xml');
  const rawSitemapUrls = existsSync(sitemapPath)
    ? [...new Set([...readFileSync(sitemapPath, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/gi)].map((m) => decode(m[1])))]
    : [];

  const pageByCanonical = new Map();
  const pageByRoute = new Map();
  for (const page of pages) {
    if (page.canonical) {
      pageByCanonical.set(page.canonical, page);
    }
    pageByRoute.set(page.route, page);
  }

  const validationErrors = [];
  const validatedSitemapEntries = [];

  for (const loc of rawSitemapUrls) {
    const matchedPage = pageByCanonical.get(loc);
    if (!matchedPage) {
      validationErrors.push({ code: 'sitemap-url-not-canonical', url: loc });
      continue;
    }
    if (!matchedPage.isIndexable) {
      validationErrors.push({ code: 'noindex-in-sitemap', url: loc, route: matchedPage.route });
      continue;
    }
    if (!loc.endsWith('/')) {
      validationErrors.push({ code: 'missing-trailing-slash', url: loc });
    }
    validatedSitemapEntries.push({
      url: loc,
      route: matchedPage.route,
      title: matchedPage.title,
      jsonLdCount: matchedPage.jsonLdCount,
    });
  }

  const p0Routes = new Set(GSC_8_PRIORITY_QUEUE.map((item) => normalizeRoute(item.route)));
  const p1Routes = new Set(P1_COMMERCIAL_ROUTES.map((r) => normalizeRoute(r)));

  const tieredQueue = {
    P0_gsc_top8_immediate: GSC_8_PRIORITY_QUEUE.map((item) => {
      const page = pageByRoute.get(normalizeRoute(item.route));
      return {
        ...item,
        inSitemap: rawSitemapUrls.includes(item.url),
        verifiedCanonical: page?.canonical ?? item.url,
        title: page?.title ?? '',
        jsonLdCount: page?.jsonLdCount ?? 0,
      };
    }),
    P1_commercial_services_and_hubs: validatedSitemapEntries.filter((e) => p1Routes.has(normalizeRoute(e.route))),
    P2_remaining_indexable_pages: validatedSitemapEntries.filter(
      (e) => !p0Routes.has(normalizeRoute(e.route)) && !p1Routes.has(normalizeRoute(e.route))
    ),
  };

  const orderedUrlList = [
    ...tieredQueue.P0_gsc_top8_immediate.map((i) => i.verifiedCanonical || i.url),
    ...tieredQueue.P1_commercial_services_and_hubs.map((i) => i.url),
    ...tieredQueue.P2_remaining_indexable_pages.map((i) => i.url),
  ];
  const deduplicatedUrlList = [...new Set(orderedUrlList)];

  const indexNowPayload = {
    host: SITE_HOST,
    key: keyArg,
    keyLocation: `${SITE_ORIGIN}/${keyArg}.txt`,
    urlList: deduplicatedUrlList,
  };

  return {
    generatedAt: new Date().toISOString(),
    site: SITE_ORIGIN,
    host: SITE_HOST,
    sitemaps: SITEMAP_URLS,
    summary: {
      totalHtmlPages: pages.length,
      indexableHtmlPages: pages.filter((p) => p.isIndexable).length,
      totalSitemapUrls: rawSitemapUrls.length,
      validatedSitemapUrls: validatedSitemapEntries.length,
      validationErrorCount: validationErrors.length,
      p0Count: tieredQueue.P0_gsc_top8_immediate.length,
      p1Count: tieredQueue.P1_commercial_services_and_hubs.length,
      p2Count: tieredQueue.P2_remaining_indexable_pages.length,
    },
    validationErrors,
    gscPriority8Queue: tieredQueue.P0_gsc_top8_immediate,
    tieredQueue,
    indexNow: {
      endpoint: 'https://api.indexnow.org/indexnow',
      payload: indexNowPayload,
      curlCommand: `curl -s -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json; charset=utf-8" -d '${JSON.stringify(indexNowPayload)}'`,
    },
  };
}

async function submitIndexNow(payload) {
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  return {
    status: response.status,
    ok: response.status === 200 || response.status === 202,
    statusText: response.statusText,
  };
}

async function pingSitemaps(sitemaps) {
  const results = [];
  for (const sitemapUrl of sitemaps) {
    try {
      const res = await fetch(sitemapUrl, { method: 'HEAD' });
      results.push({ sitemapUrl, reachable: res.ok, status: res.status });
    } catch (error) {
      results.push({ sitemapUrl, reachable: false, error: error.message });
    }
  }
  return results;
}

async function main() {
  const manifest = buildIndexingManifest();

  if (writeKeyFile) {
    const keyFilePath = resolve(root, 'public', `${keyArg}.txt`);
    writeFileSync(keyFilePath, keyArg, 'utf8');
  }

  if (shouldWrite) {
    mkdirSync(dirname(manifestPath), { recursive: true });
    writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  }

  if (shouldSubmitIndexNow) {
    try {
      manifest.indexNowSubmission = await submitIndexNow(manifest.indexNow.payload);
    } catch (error) {
      manifest.indexNowSubmission = { ok: false, error: error.message };
    }
  }

  if (shouldPing) {
    manifest.sitemapPing = await pingSitemaps(manifest.sitemaps);
  }

  if (shouldJsonOnly) {
    console.log(JSON.stringify(manifest, null, 2));
  } else {
    console.log(`=== MEDICEXPRESS — FAST INDEXING & GSC PRIORITY MANIFEST ===`);
    console.log(`Sitio: ${manifest.site}`);
    console.log(`Sitemaps: ${manifest.sitemaps.join(' | ')}`);
    console.log(
      `Resumen: ${manifest.summary.validatedSitemapUrls}/${manifest.summary.totalSitemapUrls} URLs de sitemap validadas (${manifest.summary.validationErrorCount} errores).`
    );
    console.log(
      `Colas: P0=${manifest.summary.p0Count} | P1=${manifest.summary.p1Count} | P2=${manifest.summary.p2Count}`
    );
    console.log(`\n--- COLA PRIORITARIA TOP 8 GOOGLE SEARCH CONSOLE (INSPECCIÓN DE URL) ---`);
    for (const item of manifest.gscPriority8Queue) {
      console.log(
        `  [${item.rank}] ${item.url} (${item.officialPriceCOP}) -> Sitemap: ${item.inSitemap ? 'OK' : 'MISSING'} | JSON-LD: ${item.jsonLdCount}`
      );
    }
    if (shouldWrite) {
      console.log(`\nManifiesto guardado en: ${manifestPath}`);
    }
    if (manifest.indexNowSubmission) {
      console.log(`IndexNow submission:`, JSON.stringify(manifest.indexNowSubmission));
    }
    if (manifest.sitemapPing) {
      console.log(`Sitemap check:`, JSON.stringify(manifest.sitemapPing));
    }
  }

  if (manifest.validationErrors.length > 0) {
    console.error('Errores de validación de sitemap:', JSON.stringify(manifest.validationErrors, null, 2));
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1].replace(/\\/g, '/')}` || process.argv[1]?.endsWith('generate-indexing-manifest.mjs')) {
  main();
}

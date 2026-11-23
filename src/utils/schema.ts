/**
 * Centralized JSON-LD Structured Data (@graph) for MedicExpress.
 * Covers MedicalBusiness / MedicalOrganization, MedicalProcedure, Service, Offer / AggregateOffer
 * with official COP pricing and Bogotá D.C. & Sabana coverage.
 */

export const BOGOTA_LOCALITIES_AREA_SERVED = [
  { '@type': 'City', name: 'Bogotá D.C.', sameAs: 'https://es.wikipedia.org/wiki/Bogot%C3%A1' },
  { '@type': 'AdministrativeArea', name: 'Usaquén, Bogotá' },
  { '@type': 'AdministrativeArea', name: 'Chapinero, Bogotá' },
  { '@type': 'AdministrativeArea', name: 'Suba, Bogotá' },
  { '@type': 'AdministrativeArea', name: 'Teusaquillo, Bogotá' },
  { '@type': 'AdministrativeArea', name: 'Fontibón, Bogotá' },
  { '@type': 'AdministrativeArea', name: 'Engativá, Bogotá' },
  { '@type': 'AdministrativeArea', name: 'Kennedy, Bogotá' },
  { '@type': 'AdministrativeArea', name: 'Barrios Unidos, Bogotá' },
  { '@type': 'AdministrativeArea', name: 'Puente Aranda, Bogotá' },
  { '@type': 'AdministrativeArea', name: 'Cedritos, Bogotá' },
  { '@type': 'AdministrativeArea', name: 'Salitre, Bogotá' },
  { '@type': 'AdministrativeArea', name: 'Modelia, Bogotá' },
  { '@type': 'AdministrativeArea', name: 'Colina Campestre, Bogotá' },
  { '@type': 'City', name: 'Chía' },
  { '@type': 'City', name: 'Cajicá' },
  { '@type': 'City', name: 'Cota' },
  { '@type': 'City', name: 'Mosquera' },
  { '@type': 'City', name: 'Funza' },
  { '@type': 'City', name: 'Soacha' },
];

export interface MedicExpressOfferItem {
  name: string;
  description: string;
  price?: number;
  lowPrice?: number;
  highPrice?: number;
  priceCurrency: 'COP';
}

export const MEDICEXPRESS_OFFERS_BY_SLUG: Record<string, MedicExpressOfferItem[]> = {
  'teleconsulta-medica-colombia': [
    {
      name: 'Teleconsulta de medicina general (Colombia)',
      description: 'Consulta médica virtual por videollamada con médico general. No emite incapacidades médicas.',
      price: 90000,
      priceCurrency: 'COP',
    },
  ],
  'medico-a-domicilio-colombia': [
    {
      name: 'Consulta médica domiciliaria en Bogotá',
      description: 'Valoración médica presencial en casa en Bogotá coordinada con SMD Vital.',
      price: 170000,
      priceCurrency: 'COP',
    },
  ],
  'enfermeria-a-domicilio-colombia': [
    {
      name: 'Inyectología a domicilio en Bogotá',
      description: 'Aplicación intramuscular, subcutánea o endovenosa en Bogotá.',
      price: 95000,
      priceCurrency: 'COP',
    },
    {
      name: 'Turno de enfermería a domicilio 8 horas en Bogotá',
      description: 'Cuidado integral de enfermería por turno de 8 horas en Bogotá.',
      price: 140000,
      priceCurrency: 'COP',
    },
  ],
  'servicios-medicos/servicio-medico-a-domicilio': [
    {
      name: 'Consulta médica convencional a domicilio en Bogotá',
      description: 'Valoración médica convencional en casa en Bogotá con examen físico completo y formulación.',
      price: 140000,
      priceCurrency: 'COP',
    },
    {
      name: 'Valoración médica prioritaria a domicilio en Bogotá',
      description: 'Valoración médica prioritaria el mismo día en Bogotá con examen físico completo.',
      price: 170000,
      priceCurrency: 'COP',
    },
  ],
  'servicios-medicos/valoracion-medica-a-domicilio': [
    {
      name: 'Consulta médica convencional a domicilio en Bogotá',
      description: 'Valoración médica convencional en casa en Bogotá con examen físico completo.',
      price: 140000,
      priceCurrency: 'COP',
    },
    {
      name: 'Valoración médica prioritaria a domicilio en Bogotá',
      description: 'Valoración médica prioritaria el mismo día en Bogotá con examen físico completo.',
      price: 170000,
      priceCurrency: 'COP',
    },
  ],
  'servicios-medicos/teleconsulta-medica': [
    {
      name: 'Teleconsulta de medicina general',
      description: 'Consulta médica virtual por videollamada con médico general (no emite incapacidades médicas).',
      price: 90000,
      priceCurrency: 'COP',
    },
  ],
  'servicios-medicos/suero-multivitaminico': [
    {
      name: 'Suero de hidratación intravenosa a domicilio',
      description: 'Incluye canalización, catéter, venoclisis y solución salina o Lactato de Ringer.',
      price: 150000,
      priceCurrency: 'COP',
    },
    {
      name: 'Sueroterapia formulada a domicilio',
      description: 'Sueroterapia multivitamínica o formulada según valoración clínica.',
      lowPrice: 150000,
      highPrice: 220000,
      priceCurrency: 'COP',
    },
  ],
  'servicios-medicos/cura-de-heridas-simples-y-complejas': [
    {
      name: 'Curación de heridas a domicilio (simples, complejas y postquirúrgicas)',
      description: 'Curación profesional a domicilio en Bogotá desde $150.000 COP previa valoración con foto clínica.',
      price: 150000,
      lowPrice: 150000,
      priceCurrency: 'COP',
    },
  ],
  'servicios-medicos/sutura-y-retiro-de-puntos': [
    {
      name: 'Retiro de puntos a domicilio',
      description: 'Retiro aséptico de puntos quirúrgicos o grapas a domicilio en Bogotá.',
      price: 120000,
      priceCurrency: 'COP',
    },
    {
      name: 'Sutura de heridas a domicilio',
      description: 'Sutura menor con anestesia local e insumos estériles (desde $150.000 COP previa valoración con foto clínica).',
      price: 150000,
      lowPrice: 150000,
      priceCurrency: 'COP',
    },
  ],
  'servicios-medicos/retiro-y-colocacion-de-sonda-vesical': [
    {
      name: 'Cambio y colocación de sonda vesical (Foley / Nelaton)',
      description: 'Cateterismo vesical a domicilio con técnica aséptica e insumos estériles.',
      price: 170000,
      priceCurrency: 'COP',
    },
    {
      name: 'Retiro de sonda vesical a domicilio',
      description: 'Retiro seguro de sonda vesical en casa con vigilancia post-procedimiento.',
      price: 110000,
      priceCurrency: 'COP',
    },
  ],
  'servicios-medicos/lavado-de-oido': [
    {
      name: 'Lavado de oídos a domicilio (uno o ambos oídos + revisión otoscópica)',
      description: 'Tarifa única por visita en Bogotá: cubre uno o ambos oídos e incluye valoración otoscópica.',
      price: 140000,
      priceCurrency: 'COP',
    },
  ],
  'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario': [
    {
      name: 'Turno de enfermería a domicilio 8 horas',
      description: 'Cuidado de enfermería domiciliaria o acompañamiento hospitalario por 8 horas en Bogotá.',
      price: 140000,
      priceCurrency: 'COP',
    },
    {
      name: 'Turno de enfermería a domicilio 12 horas día',
      description: 'Cuidado de enfermería diurno por 12 horas en Bogotá.',
      price: 160000,
      priceCurrency: 'COP',
    },
    {
      name: 'Turno de enfermería a domicilio 12 horas noche',
      description: 'Cuidado y vigilancia nocturna de enfermería por 12 horas en Bogotá.',
      price: 170000,
      priceCurrency: 'COP',
    },
    {
      name: 'Turno de enfermería a domicilio 24 horas (con dos relevos de 12 horas)',
      description: 'Cobertura continua de 24 horas en Bogotá con dos relevos de 12 horas.',
      price: 310000,
      priceCurrency: 'COP',
    },
  ],
  'servicios-de-enfermeria/inyectologia-a-domicilio': [
    {
      name: 'Inyectología a domicilio (IM / SC / IV)',
      description: 'Tarifa base de aplicación con insumos estériles. Opción de provisión del medicamento previa validación clínica.',
      price: 95000,
      priceCurrency: 'COP',
    },
  ],
  'servicios-de-enfermeria/toma-de-signos-vitales': [
    {
      name: 'Toma de signos vitales a domicilio',
      description: 'Monitoreo de presión arterial, frecuencia cardíaca, temperatura y oximetría en Bogotá.',
      price: 100000,
      priceCurrency: 'COP',
    },
  ],
  'servicios-de-enfermeria/acompanamiento-a-citas-medicas': [
    {
      name: 'Acompañamiento a citas médicas y procedimientos (bloque 4 horas)',
      description: 'Acompañamiento por profesional de enfermería en Bogotá por bloque de hasta 4 horas.',
      price: 110000,
      priceCurrency: 'COP',
    },
  ],
};

export function buildMedicExpressOffersSchema(slug: string, pageUrl: string) {
  const items = MEDICEXPRESS_OFFERS_BY_SLUG[slug];
  if (!items || items.length === 0) return undefined;

  const offerNodes = items.map((offer) => {
    if (offer.lowPrice && offer.highPrice && !offer.price) {
      return {
        '@type': 'AggregateOffer',
        name: offer.name,
        description: offer.description,
        lowPrice: offer.lowPrice,
        highPrice: offer.highPrice,
        priceCurrency: offer.priceCurrency,
        url: pageUrl,
      };
    }
    return {
      '@type': 'Offer',
      name: offer.name,
      description: offer.description,
      price: offer.price ?? offer.lowPrice,
      priceCurrency: offer.priceCurrency,
      availability: 'https://schema.org/InStock',
      url: pageUrl,
    };
  });

  if (offerNodes.length === 1) {
    return offerNodes[0];
  }

  const prices = items.flatMap((o) => [o.price, o.lowPrice, o.highPrice]).filter((v): v is number => typeof v === 'number');
  return {
    '@type': 'AggregateOffer',
    lowPrice: Math.min(...prices),
    highPrice: Math.max(...prices),
    priceCurrency: 'COP',
    offerCount: offerNodes.length,
    offers: offerNodes,
  };
}

export function buildMedicExpressCatalogOffers(siteUrl: string) {
  const clean = siteUrl.replace(/\/$/, '');
  return [
    { name: 'Lavado de oídos a domicilio', price: 140000, path: '/servicios-medicos/lavado-de-oido/' },
    { name: 'Inyectología a domicilio', price: 95000, path: '/servicios-de-enfermeria/inyectologia-a-domicilio/' },
    { name: 'Suero de hidratación / Sueroterapia a domicilio', price: 150000, path: '/servicios-medicos/suero-multivitaminico/' },
    { name: 'Curación de heridas a domicilio', price: 150000, path: '/servicios-medicos/cura-de-heridas-simples-y-complejas/' },
    { name: 'Sutura de heridas a domicilio', price: 150000, path: '/servicios-medicos/sutura-y-retiro-de-puntos/' },
    { name: 'Retiro de puntos a domicilio', price: 120000, path: '/servicios-medicos/sutura-y-retiro-de-puntos/' },
    { name: 'Cambio y colocación de sonda vesical', price: 170000, path: '/servicios-medicos/retiro-y-colocacion-de-sonda-vesical/' },
    { name: 'Retiro de sonda vesical a domicilio', price: 110000, path: '/servicios-medicos/retiro-y-colocacion-de-sonda-vesical/' },
    { name: 'Acompañamiento a citas médicas (4h)', price: 110000, path: '/servicios-de-enfermeria/acompanamiento-a-citas-medicas/' },
    { name: 'Turno de enfermería 8 horas', price: 140000, path: '/servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario/' },
    { name: 'Turno de enfermería 12 horas día', price: 160000, path: '/servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario/' },
    { name: 'Turno de enfermería 12 horas noche', price: 170000, path: '/servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario/' },
    { name: 'Turno de enfermería 24 horas', price: 310000, path: '/servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario/' },
    { name: 'Consulta médica domiciliaria / Valoración prioritaria', price: 170000, path: '/servicios-medicos/valoracion-medica-a-domicilio/' },
    { name: 'Teleconsulta de medicina general', price: 90000, path: '/servicios-medicos/teleconsulta-medica/' },
  ].map((item) => ({
    '@type': 'Offer',
    name: item.name,
    price: item.price,
    priceCurrency: 'COP',
    availability: 'https://schema.org/InStock',
    url: `${clean}${item.path}`,
  }));
}

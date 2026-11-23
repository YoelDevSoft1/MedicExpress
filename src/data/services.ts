import nursingPrices from './nursing-prices.json';

export const siteConfig = {
  name: 'MedicExpress',
  url: 'https://medicexpress.com.co',
  phone: '+57 320 225 2996',
  whatsappNumber: '573202252996',
  mainBrand: 'SMD Vital Bogotá',
  mainBrandUrl: 'https://smdvitalbogota.com',
  logoPath: '/img/logo/logo-square.svg',
  referralMessage: 'La atención será coordinada por SMD Vital Bogotá.',
  defaultDescription:
    'Enfermería y médicos a domicilio en Bogotá hoy mismo: inyectología $95.000 COP, lavado de oídos $140.000 COP, consulta médica $170.000 COP y teleconsulta $90.000 COP.'
};

export type ServiceCategory = 'Cobertura nacional' | 'Servicios médicos' | 'Enfermería' | 'Laboratorio clínico';

export const categoryPaths: Record<ServiceCategory, string> = {
  'Cobertura nacional': '/colombia/',
  'Servicios médicos': '/servicios-medicos/',
  Enfermería: '/servicios-de-enfermeria/',
  'Laboratorio clínico': '/laboratorio-clinico/'
};

export type Service = {
  slug: string;
  category: ServiceCategory;
  title: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  intent: string;
  price?: string;
  highlights: string[];
  suitableFor: string[];
  includes: string[];
  preparation: string[];
  redFlags: string[];
  process: string[];
  faqs: Array<{ question: string; answer: string }>;
  related: string[];
};

const commonProcess = [
  'Escribes por WhatsApp y cuentas brevemente qué necesitas, síntomas principales o procedimiento formulado.',
  'Validamos localidad o barrio en Bogotá, horario deseado, requisitos clínicos y datos básicos del paciente.',
  'Te orientamos con transparencia sobre disponibilidad hoy mismo, insumos incluidos, tarifa exacta en COP y alcance del servicio.',
  'Si el caso es clínicamente apto para atención domiciliaria o teleconsulta, coordinamos el agendamiento con SMD Vital Bogotá.'
];

const nationalProcess = [
  'Escribes por WhatsApp e indicas ciudad, localidad, servicio requerido y motivo de consulta.',
  'Clasificamos si la solicitud puede orientarse por teleconsulta ($90.000 COP), atención presencial en Bogotá o ruta local responsable.',
  'En Bogotá, la atención operativa será coordinada hoy mismo por SMD Vital Bogotá según disponibilidad y alcance clínico del servicio.',
  'En otras ciudades, MedicExpress registra la solicitud, orienta el siguiente paso y prioriza opciones remotas cuando aplique.'
];

export const services: Service[] = [
  {
    slug: 'colombia',
    category: 'Cobertura nacional',
    title: 'Servicios médicos en casa Colombia',
    shortTitle: 'MedicExpress Colombia',
    h1: 'Servicios médicos en casa y orientación de salud para Colombia',
    metaTitle: 'Enfermería y Médicos a Domicilio desde $95.000 COP | Atención Hoy Mismo en Bogotá | MedicExpress',
    metaDescription:
      'Enfermería y médicos a domicilio desde $95.000 COP y teleconsulta por $90.000 COP. Atención hoy mismo en Bogotá coordinada por SMD Vital. Agenda por WhatsApp.',
    summary:
      'MedicExpress funciona como puerta de entrada nacional para pacientes y familias que buscan servicios médicos en casa, enfermería a domicilio, teleconsulta ($90.000 COP) u orientación clínica inicial. En Bogotá, la atención presencial se coordina hoy mismo con SMD Vital Bogotá.',
    intent: 'Usuarios en Colombia y Bogotá que buscan atención médica domiciliaria, enfermería en casa o teleconsulta con tarifas transparentes en COP.',
    price: 'Desde $90.000 COP (Teleconsulta) / Domicilio en Bogotá desde $95.000 COP',
    highlights: ['Atención hoy mismo en Bogotá con SMD Vital', 'Precios transparentes desde $90.000 COP', 'Profesionales verificados en ReTHUS'],
    suitableFor: [
      'Pacientes en Bogotá que requieren enfermería o médico a domicilio hoy mismo',
      'Familias que necesitan orientación clínica rápida antes de desplazarse',
      'Personas en Colombia que buscan teleconsulta de medicina general ($90.000 COP)'
    ],
    includes: [
      'Triage y orientación inicial por WhatsApp para clasificar el nivel de atención requerido.',
      'Validación de cobertura por localidad en Bogotá y Sabana con tarifas oficiales en pesos colombianos (COP).',
      'Asignación de profesionales de medicina general o enfermería verificados en ReTHUS a través de SMD Vital Bogotá.',
      'Derivación responsable hacia teleconsulta o ruta de urgencias cuando el cuadro clínico lo exija.'
    ],
    preparation: [
      'Tener a mano documento de identidad, edad del paciente y dirección exacta con barrio o localidad.',
      'Describir síntomas principales, tiempo de evolución y antecedentes médicos o alergias conocidas.',
      'Contar con fórmula médica vigente cuando se solicite aplicación de medicamentos inyectables o procedimientos específicos.'
    ],
    redFlags: [
      'Dificultad respiratoria severa, sensación de ahogo o coloración azulada en labios.',
      'Dolor opresivo en el pecho, pérdida de conciencia, convulsiones o confusión súbita.',
      'Sangrado abundante que no cede con presión directa o trauma grave: acuda de inmediato a urgencias o llame al 123.'
    ],
    process: nationalProcess,
    faqs: [
      {
        question: '¿Cuánto cuestan los servicios médicos y de enfermería a domicilio en Bogotá?',
        answer:
          'Nuestras tarifas oficiales en Bogotá son: Inyectología $95.000 COP, Retiro de sonda vesical $110.000 COP, Acompañamiento a citas (4h) $110.000 COP, Retiro de puntos $120.000 COP, Lavado de oídos $140.000 COP, Turnos de enfermería desde $140.000 COP (8h), Sueroterapia, Curación de heridas y Sutura desde $150.000 COP, Cambio de sonda vesical $170.000 COP, Consulta médica domiciliaria $170.000 COP y Teleconsulta $90.000 COP.'
      },
      {
        question: '¿MedicExpress atiende presencialmente en toda Colombia?',
        answer:
          'MedicExpress recibe y orienta solicitudes a nivel nacional. La atención domiciliaria presencial está operativa en Bogotá y es coordinada por SMD Vital Bogotá. Para otras ciudades ofrecemos teleconsulta médica ($90.000 COP) cuando el caso es apto; no tenemos cobertura domiciliaria confirmada en otras ciudades.'
      },
      {
        question: '¿MedicExpress reemplaza un servicio de urgencias?',
        answer:
          'No. Si hay dificultad respiratoria severa, dolor fuerte en el pecho, pérdida de conciencia, sangrado abundante o deterioro neurológico, se debe acudir de inmediato a urgencias hospitalarias o llamar a la línea 123.'
      }
    ],
    related: [
      'teleconsulta-medica-colombia',
      'medico-a-domicilio-colombia',
      'enfermeria-a-domicilio-colombia',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-de-enfermeria/inyectologia-a-domicilio'
    ]
  },
  {
    slug: 'teleconsulta-medica-colombia',
    category: 'Cobertura nacional',
    title: 'Teleconsulta médica Colombia',
    shortTitle: 'Teleconsulta Colombia',
    h1: 'Teleconsulta médica en Colombia para orientación inicial',
    metaTitle: 'Teleconsulta Médica Colombia $90.000 COP | Atención Hoy Mismo | MedicExpress',
    metaDescription:
      'Teleconsulta de medicina general en Colombia y Bogotá por $90.000 COP (no emite incapacidades médicas). Atención hoy mismo por videollamada con SMD Vital.',
    summary:
      'Consulta médica virtual de medicina general por $90.000 COP para pacientes en Bogotá y Colombia que necesitan orientación clínica profesional, revisión de síntomas no urgentes o lectura de exámenes sin salir de casa. Nota: la teleconsulta no emite incapacidades médicas.',
    intent: 'Personas en Colombia que buscan teleconsulta de medicina general por $90.000 COP, médico online u orientación clínica rápida.',
    price: '$90.000 COP',
    highlights: ['Tarifa oficial $90.000 COP', 'Sin desplazamiento desde casa', 'No emite incapacidades médicas'],
    suitableFor: [
      'Síntomas leves o moderados sin signos de alarma',
      'Orientación sobre resultados de exámenes o control de condiciones crónicas estables',
      'Familias que necesitan definir si requieren consulta médica domiciliaria ($170.000 COP) o urgencias'
    ],
    includes: [
      'Sesión de teleconsulta de medicina general por videollamada segura con médico registrado en ReTHUS.',
      'Anamnesis clínica completa, evaluación de síntomas, antecedentes y revisión de resultados diagnósticos previos.',
      'Plan de manejo médico, recomendaciones terapéuticas y fórmula u órdenes médicas digitales cuando el criterio clínico lo indique.',
      'Aclaración importante: por política clínica, la teleconsulta no emite incapacidades médicas.'
    ],
    preparation: [
      'Disponer de teléfono celular, tableta o computador con cámara, micrófono y conexión estable a internet.',
      'Tener a mano el documento de identidad del paciente, lista de medicamentos actuales y exámenes recientes.',
      'Tomar signos vitales previos (temperatura, tensión arterial o oximetría) si cuenta con equipos en casa.'
    ],
    redFlags: [
      'Dolor torácico, falta de aire en reposo, fiebre alta refractaria o alteración del estado de conciencia.',
      'Dolor abdominal agudo e intenso, vómito persistente que impide la hidratación oral o sangrado activo.',
      'Déficit neurológico súbito (parálisis facial, debilidad en un brazo o dificultad para hablar): acuda a urgencias inmediatamente.'
    ],
    process: nationalProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta la teleconsulta de medicina general y qué incluye?',
        answer:
          'La teleconsulta de medicina general tiene un valor oficial de $90.000 COP. Incluye entrevista clínica por videollamada, orientación diagnóstica, plan de cuidado y formulación médica digital cuando corresponda según criterio profesional.'
      },
      {
        question: '¿La teleconsulta médica emite incapacidades médicas?',
        answer:
          'No. La teleconsulta de medicina general por $90.000 COP no emite incapacidades médicas ni certificados de incapacidad laboral. Si requiere valoración física presencial en Bogotá, puede solicitar la consulta médica domiciliaria por $170.000 COP.'
      },
      {
        question: '¿La teleconsulta sirve para cualquier síntoma?',
        answer:
          'No. Cuadros que requieren auscultación, palpación física, procedimientos en casa o atención de emergencia no deben manejarse de forma virtual. Ante signos de alarma, se debe acudir a urgencias.'
      }
    ],
    related: [
      'colombia',
      'servicios-medicos/teleconsulta-medica',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-medicos/servicio-medico-a-domicilio',
      'medico-a-domicilio-colombia'
    ]
  },
  {
    slug: 'medico-a-domicilio-colombia',
    category: 'Cobertura nacional',
    title: 'Médico a domicilio Colombia',
    shortTitle: 'Médico Colombia',
    h1: 'Médico a domicilio en Colombia: orientación y disponibilidad por ciudad',
    metaTitle: 'Médico a Domicilio Bogotá $170.000 COP | Atención Hoy Mismo | MedicExpress',
    metaDescription:
      'Consulta médica domiciliaria y valoración prioritaria en Bogotá por $170.000 COP. Atención hoy mismo con médicos a domicilio de SMD Vital. Agenda por WhatsApp.',
    summary:
      'MedicExpress orienta solicitudes de médico a domicilio. En Bogotá coordinamos hoy mismo consulta médica domiciliaria y valoración médica prioritaria por $170.000 COP a través de SMD Vital Bogotá. Para otras ciudades ofrecemos teleconsulta médica por $90.000 COP.',
    intent: 'Usuarios que buscan médico a domicilio en Bogotá ($170.000 COP), doctor en casa o consulta médica domiciliaria hoy mismo.',
    price: '$170.000 COP en Bogotá',
    highlights: ['Consulta domiciliaria Bogotá $170.000 COP', 'Atención hoy mismo con SMD Vital', 'Teleconsulta nacional $90.000 COP'],
    suitableFor: [
      'Pacientes en Bogotá que necesitan examen físico completo en casa ($170.000 COP)',
      'Adultos mayores o personas con movilidad reducida que buscan evitar salas de espera',
      'Pacientes fuera de Bogotá que pueden beneficiarse de teleconsulta inicial ($90.000 COP)'
    ],
    includes: [
      'En Bogotá ($170.000 COP): visita médica presencial en casa con anamnesis, toma de signos vitales y examen físico completo.',
      'Impresión diagnóstica, plan terapéutico, formulación médica cuando aplique y educación sobre signos de alarma.',
      'Fuera de Bogotá: validación del motivo de consulta para orientar teleconsulta ($90.000 COP, sin emisión de incapacidad) o ruta presencial local.'
    ],
    preparation: [
      'Informar localidad o barrio exacto en Bogotá, edad del paciente y síntomas principales.',
      'Alistar documento de identidad, resumen de historia clínica y listado de medicamentos de uso diario.',
      'Garantizar un espacio iluminado y tranquilo para el examen físico y estar acompañado por un adulto responsable si es adulto mayor.'
    ],
    redFlags: [
      'Dolor de pecho opresivo, dificultad severa para respirar o saturación de oxígeno baja.',
      'Pérdida del conocimiento, convulsiones, sangrado incontrolable o trauma craneoencefálico.',
      'Fiebre con rigidez de nuca, petequias o deterioro rápido del estado general: acuda de inmediato a urgencias (123).'
    ],
    process: nationalProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta el médico a domicilio en Bogotá?',
        answer:
          'La consulta médica domiciliaria y valoración médica prioritaria en Bogotá tiene una tarifa oficial de $170.000 COP. Incluye valoración clínica integral en casa coordinada por SMD Vital Bogotá.'
      },
      {
        question: '¿En qué ciudades hay médico a domicilio presencial?',
        answer:
          'La cobertura presencial domiciliaria está centrada en Bogotá (y municipios cercanos de la Sabana sujetos a validación de cobertura) a través de SMD Vital Bogotá. No tenemos cobertura domiciliaria confirmada en otras ciudades.'
      },
      {
        question: '¿Qué datos debo enviar por WhatsApp para agendar hoy mismo?',
        answer:
          'Envía localidad o barrio en Bogotá, nombre y edad del paciente, síntomas principales, tiempo de evolución y horario deseado para confirmar disponibilidad del médico.'
      }
    ],
    related: [
      'colombia',
      'servicios-medicos/servicio-medico-a-domicilio',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'teleconsulta-medica-colombia',
      'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario'
    ]
  },
  {
    slug: 'enfermeria-a-domicilio-colombia',
    category: 'Cobertura nacional',
    title: 'Enfermería a domicilio Colombia',
    shortTitle: 'Enfermería Colombia',
    h1: 'Enfermería a domicilio en Colombia para cuidados y procedimientos programados',
    metaTitle: 'Enfermería a Domicilio Bogotá desde $95.000 COP | Atención Hoy Mismo | MedicExpress',
    metaDescription:
      'Enfermería a domicilio en Bogotá: inyectología $95.000 COP, turnos desde $140.000 COP (8h), curaciones desde $150.000 COP y sondas $170.000 COP. Agenda hoy mismo.',
    summary:
      'Orientación y coordinación de servicios de enfermería a domicilio en Bogotá con SMD Vital: inyectología ($95.000 COP), turnos de enfermería de 8h ($140.000 COP), 12h día ($160.000 COP), 12h noche ($170.000 COP) y 24h ($310.000 COP), curaciones (desde $150.000 COP) y manejo de sondas.',
    intent: 'Familias que buscan enfermera a domicilio en Bogotá hoy mismo, turnos de cuidado o procedimientos de enfermería en casa.',
    price: 'Procedimientos desde $95.000 COP / Turnos 8h desde $140.000 COP en Bogotá',
    highlights: ['Inyectología $95.000 COP y turnos desde $140.000 COP', 'Atención hoy mismo en Bogotá con SMD Vital', 'Insumos estériles y protocolo aséptico'],
    suitableFor: [
      'Adultos mayores y pacientes postquirúrgicos que necesitan turnos de enfermería en Bogotá',
      'Pacientes con fórmula médica para inyectología ($95.000 COP) o sueroterapia (desde $150.000 COP)',
      'Curación de heridas complejas, retiro de puntos ($120.000 COP) o cambio de sonda vesical ($170.000 COP)'
    ],
    includes: [
      'Validación clínica previa del procedimiento o perfil de turno de enfermería requerido en Bogotá.',
      'Asignación de personal de enfermería verificado en ReTHUS con protocolos de bioseguridad y técnica aséptica.',
      'Seguimiento familiar y educación en cuidados domiciliarios y detección temprana de signos de alarma.'
    ],
    preparation: [
      'Especificar si requiere un procedimiento puntual (inyectología, curación, sonda, puntos) o un turno por horas (8h, 12h, 24h).',
      'Enviar foto de la fórmula médica o foto clínica de la herida por WhatsApp para cotización y validación previa.',
      'Disponer de un área limpia, bien iluminada y con lavado de manos disponible en el domicilio.'
    ],
    redFlags: [
      'Fiebre alta con escalofríos, dificultad respiratoria aguda o deterioro súbito del estado de conciencia.',
      'Reacción alérgica severa (anafilaxia), sangrado activo abundante o dolor agudo incontrolable.',
      'Obstrucción de sonda con dolor suprapúbico severo y fiebre: requiere valoración de urgencias inmediata.'
    ],
    process: nationalProcess,
    faqs: [
      {
        question: '¿Cuáles son los precios de enfermería a domicilio en Bogotá?',
        answer:
          'En Bogotá manejamos tarifas oficiales: Inyectología $95.000 COP, Toma de signos vitales $100.000 COP, Retiro de sonda vesical $110.000 COP, Acompañamiento a citas médicas (hasta 4h) $110.000 COP, Retiro de puntos $120.000 COP, Lavado de oídos $140.000 COP, Curación de heridas y Sutura desde $150.000 COP, Cambio/colocación de sonda vesical $170.000 COP. Turnos de enfermería: 8h ($140.000 COP), 12h día ($160.000 COP), 12h noche ($170.000 COP) y 24h ($310.000 COP).'
      },
      {
        question: '¿Aplican medicamentos inyectables sin fórmula médica?',
        answer:
          'La tarifa base de inyectología es $95.000 COP (IM/SC/IV) con fórmula médica. Si el paciente requiere que el equipo clínico valide síntomas y provea o lleve el medicamento, se cotiza aplicación + medicamento previa validación clínica.'
      },
      {
        question: '¿Cómo se coordina el servicio en Bogotá?',
        answer:
          'Escribes por WhatsApp indicando barrio o localidad, servicio requerido y horario. SMD Vital Bogotá confirma disponibilidad hoy mismo y coordina la visita.'
      }
    ],
    related: [
      'colombia',
      'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario',
      'servicios-de-enfermeria/inyectologia-a-domicilio',
      'servicios-de-enfermeria/acompanamiento-a-citas-medicas',
      'servicios-medicos/cura-de-heridas-simples-y-complejas'
    ]
  },
  {
    slug: 'laboratorio-a-domicilio-colombia',
    category: 'Cobertura nacional',
    title: 'Laboratorio a domicilio Colombia',
    shortTitle: 'Laboratorio Colombia',
    h1: 'Laboratorio a domicilio en Colombia y toma de muestras en casa',
    metaTitle: 'Laboratorio a domicilio Colombia | Orientación por WhatsApp | MedicExpress',
    metaDescription:
      'Consulta toma de muestras y laboratorio a domicilio en Colombia. MedicExpress orienta requisitos, disponibilidad y coordinación por WhatsApp.',
    summary:
      'MedicExpress recibe consultas informativas sobre toma de muestras y preparación de exámenes. La disponibilidad depende de ciudad, tipo de prueba, horario y requisitos técnicos.',
    intent: 'Usuarios que consultan por laboratorio clínico a domicilio, toma de muestras en casa o preparación de exámenes.',
    highlights: ['Orientación sobre preparación de exámenes', 'Validación del tipo de muestra', 'Consulta por WhatsApp en Bogotá'],
    suitableFor: ['Consultas sobre exámenes programados', 'Pacientes con movilidad reducida', 'Orientación sobre requisitos de ayuno y preparación'],
    includes: [
      'Revisión de la solicitud por WhatsApp para informar si existe disponibilidad operativa o ruta alternativa.',
      'Orientación general sobre condiciones de ayuno y preparación según la orden médica.',
      'Alternativa de consulta médica domiciliaria ($170.000 COP) o teleconsulta ($90.000 COP) cuando se requiere valoración clínica.'
    ],
    preparation: [
      'Contar con la orden médica o listado exacto de exámenes solicitados por el profesional tratante.',
      'Verificar si el examen exige ayuno de 8 a 12 horas o recolección de primera orina de la mañana.',
      'Informar medicamentos anticoagulantes o condiciones especiales antes de cualquier toma.'
    ],
    redFlags: [
      'Mareo intenso, desmayo, dolor en el pecho o dificultad respiratoria: no espere una toma de muestras, acuda a urgencias.',
      'Fiebre alta persistente, sangrado activo o deshidratación severa requieren valoración médica inmediata.'
    ],
    process: nationalProcess,
    faqs: [
      {
        question: '¿Todos los exámenes se pueden tomar en casa?',
        answer:
          'No. Depende del tipo de muestra, estabilidad preanalítica, preparación requerida y disponibilidad operativa confirmada antes de reservar.'
      },
      {
        question: '¿Debo enviar la orden médica por WhatsApp?',
        answer:
          'Sí. Enviar la orden o listado de exámenes por WhatsApp permite validar requisitos, preparación y disponibilidad.'
      },
      {
        question: '¿Si necesito que un médico evalúe mis síntomas hoy mismo en Bogotá, qué servicio solicito?',
        answer:
          'Puedes agendar una consulta médica domiciliaria en Bogotá por $170.000 COP o una teleconsulta de medicina general por $90.000 COP con SMD Vital Bogotá.'
      }
    ],
    related: [
      'colombia',
      'laboratorio-clinico/laboratorio-a-domicilio',
      'laboratorio-clinico/toma-de-muestra-a-domicilio',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-medicos/teleconsulta-medica'
    ]
  },
  {
    slug: 'servicios-medicos/servicio-medico-a-domicilio',
    price: '$140.000 COP (Convencional) | $170.000 COP (Prioritaria)',
    category: 'Servicios médicos',
    title: 'Servicio médico a domicilio',
    shortTitle: 'Médico a domicilio',
    h1: 'Servicio médico a domicilio con orientación rápida',
    metaTitle: 'Médico a Domicilio en Bogotá desde $140.000 COP | Prioritaria $170.000 | MedicExpress',
    metaDescription:
      'Consulta médica convencional a domicilio en Bogotá por $140.000 COP y valoración médica prioritaria por $170.000 COP. Atención hoy mismo con médicos de SMD Vital.',
    summary:
      'Recibe consulta médica convencional a domicilio en Bogotá por $140.000 COP o valoración médica prioritaria por $170.000 COP sin salir de casa. Un médico certificado realiza valoración clínica integral, control de signos vitales, examen físico completo y plan de tratamiento en tu hogar, coordinado hoy mismo por SMD Vital Bogotá.',
    intent: 'Personas que buscan médico a domicilio en Bogotá hoy mismo con tarifa transparente ($140.000 COP convencional / $170.000 COP prioritaria).',
    highlights: ['Consulta convencional $140.000 COP | Prioritaria $170.000 COP', 'Atención hoy mismo coordinada por SMD Vital', 'Médicos verificados en ReTHUS'],
    suitableFor: [
      'Cuadros agudos no vitales (infecciones respiratorias, gastrointestinales, urinarias, dolor lumbar o migraña)',
      'Adultos mayores, pacientes crónicos o personas con movilidad reducida en Bogotá',
      'Familias que prefieren valoración médica presencial en casa sin esperas en sala'
    ],
    includes: [
      'Visita presencial de médico general titulado y registrado en ReTHUS en el domicilio del paciente en Bogotá.',
      'Historia clínica completa, entrevista médica (anamnesis) y revisión de antecedentes y medicamentos actuales.',
      'Toma de signos vitales completos (presión arterial, frecuencia cardíaca, saturación de oxígeno, temperatura y frecuencia respiratoria).',
      'Examen físico por sistemas, impresión diagnóstica, formulación médica y plan de cuidado con signos de alarma.'
    ],
    preparation: [
      'Tener documento de identidad del paciente, lista de medicamentos actuales y alergias conocidas.',
      'Disponer de fórmulas, historias clínicas o resultados de exámenes recientes para revisión del médico.',
      'Asegurar un espacio iluminado y ventilado donde el médico pueda realizar el examen físico con comodidad.'
    ],
    redFlags: [
      'Dificultad respiratoria severa, dolor torácico opresivo o pérdida súbita de la conciencia.',
      'Signos de accidente cerebrovascular (desviación de la boca, pérdida de fuerza en medio cuerpo, dificultad para hablar).',
      'Hemorragia abundante, convulsiones o trauma severo: llame al 123 o acuda de inmediato a urgencias hospitalarias.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta el servicio de médico a domicilio en Bogotá?',
        answer:
          'En Bogotá, la consulta médica convencional a domicilio tiene un valor de $140.000 COP y la valoración médica prioritaria es de $170.000 COP. Incluye valoración clínica presencial completa, toma de signos vitales, diagnóstico y formulación médica cuando aplique.'
      },
      {
        question: '¿El médico a domicilio reemplaza una urgencia hospitalaria?',
        answer:
          'No. El servicio atiende patologías agudas y crónicas no vitales en casa. Ante dificultad respiratoria severa, dolor intenso en el pecho, pérdida de conciencia o sangrado abundante, se debe acudir inmediatamente a urgencias.'
      },
      {
        question: '¿Si requiere aplicar un medicamento inyectable o suero en la visita, cómo se maneja?',
        answer:
          'Los procedimientos adicionales como inyectología ($95.000 COP) o suero de hidratación / sueroterapia (desde $150.000 COP) se cotizan y confirman de forma transparente antes de su realización.'
      },
      {
        question: '¿En cuánto tiempo llega el médico a mi domicilio en Bogotá?',
        answer:
          'Coordinamos atención hoy mismo en Bogotá (Usaquén, Chapinero, Suba, Cedritos, Teusaquillo, Salitre, Fontibón, Modelia, Kennedy, Engativá y demás localidades) confirmando la franja horaria exacta por WhatsApp antes de agendar.'
      }
    ],
    related: [
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-medicos/teleconsulta-medica',
      'servicios-medicos/suero-multivitaminico',
      'servicios-de-enfermeria/inyectologia-a-domicilio',
      'servicios-de-enfermeria/toma-de-signos-vitales'
    ]
  },
  {
    slug: 'servicios-medicos/valoracion-medica-a-domicilio',
    price: '$140.000 COP (Convencional) | $170.000 COP (Prioritaria)',
    category: 'Servicios médicos',
    title: 'Valoración médica a domicilio',
    shortTitle: 'Valoración médica',
    h1: 'Valoración médica a domicilio para orientar el cuidado',
    metaTitle: 'Valoración Médica Domiciliaria Bogotá $140.000 COP | Prioritaria $170.000 | MedicExpress',
    metaDescription:
      'Consulta médica convencional a domicilio en Bogotá por $140.000 COP y valoración médica prioritaria por $170.000 COP. Atención hoy mismo con médicos de SMD Vital.',
    summary:
      'Consulta médica convencional a domicilio ($140.000 COP) y valoración médica prioritaria ($170.000 COP) en Bogotá para evaluar de forma integral al paciente en su hogar, establecer diagnóstico clínico, formular tratamiento y definir si requiere manejo en casa, procedimientos de enfermería o remisión.',
    intent: 'Familias que buscan consulta médica convencional ($140.000 COP) o valoración médica prioritaria ($170.000 COP) en Bogotá hoy mismo.',
    highlights: ['Convencional $140.000 COP | Prioritaria $170.000 COP', 'Atención hoy mismo en Bogotá', 'Examen físico completo y plan médico'],
    suitableFor: [
      'Adultos mayores con descompensación leve a moderada o múltiples comorbilidades',
      'Valoración médica prioritaria en casa para síntomas agudos no vitales ($170.000 COP)',
      'Seguimiento posthospitalario, control de enfermedades crónicas y ajuste terapéutico'
    ],
    includes: [
      'Evaluación clínica presencial en Bogotá por médico general certificado en ReTHUS ($170.000 COP).',
      'Toma e interpretación de signos vitales (tensión arterial, oximetría de pulso, frecuencia cardíaca y temperatura).',
      'Examen físico cefalocaudal completo, revisión de conciliación medicamentosa y antecedentes clínicos.',
      'Entrega de diagnóstico clínico, fórmula médica, órdenes de apoyo diagnóstico si aplican y recomendaciones de alarma.'
    ],
    preparation: [
      'Tener disponible el documento de identidad, historial clínico reciente o epicrisis si estuvo hospitalizado.',
      'Reunir las cajas o fórmulas de todos los medicamentos que toma actualmente el paciente.',
      'Anotar desde cuándo iniciaron los síntomas, si ha tenido fiebre y qué medicamentos ha tomado en las últimas 24 horas.'
    ],
    redFlags: [
      'Dolor torácico opresivo que irradia al brazo o mandíbula, o dificultad respiratoria en reposo.',
      'Alteración súbita del habla, asimetría facial, pérdida de fuerza o somnolencia extrema.',
      'Hemorragia activa, cianosis (labios morados) o inestabilidad hemodinámica: acuda a urgencias o llame al 123.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta la consulta médica domiciliaria y la valoración médica prioritaria en Bogotá?',
        answer:
          'En Bogotá, la consulta médica convencional a domicilio tiene una tarifa de $140.000 COP y la valoración médica prioritaria a domicilio tiene una tarifa de $170.000 COP. El equipo de SMD Vital Bogotá confirma disponibilidad horaria y zona por WhatsApp antes de agendar.'
      },
      {
        question: '¿Qué diferencia hay entre la valoración médica a domicilio ($170.000 COP) y la teleconsulta ($90.000 COP)?',
        answer:
          'En la valoración médica a domicilio ($170.000 COP) el médico acude presencialmente a tu casa en Bogotá para realizar auscultación, palpación, toma de signos vitales y examen físico completo. La teleconsulta ($90.000 COP) es virtual por videollamada para orientación de síntomas leves y no emite incapacidades médicas.'
      },
      {
        question: '¿La valoración médica incluye la aplicación de medicamentos o sueros?',
        answer:
          'La consulta ($170.000 COP) incluye la evaluación médica completa y la formulación. Si el paciente requiere inyectología ($95.000 COP), suero de hidratación (desde $150.000 COP) o curación de heridas (desde $150.000 COP), estos procedimientos se cotizan de forma adicional.'
      },
      {
        question: '¿Qué datos debo enviar por WhatsApp para solicitar la valoración hoy mismo?',
        answer:
          'Nombre y edad del paciente, barrio o localidad en Bogotá, motivo principal de consulta, tiempo de evolución de los síntomas y horario requerido.'
      }
    ],
    related: [
      'servicios-medicos/servicio-medico-a-domicilio',
      'servicios-medicos/teleconsulta-medica',
      'servicios-medicos/suero-multivitaminico',
      'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario',
      'servicios-de-enfermeria/toma-de-signos-vitales'
    ]
  },
  {
    slug: 'servicios-medicos/teleconsulta-medica',
    category: 'Servicios médicos',
    title: 'Teleconsulta médica',
    shortTitle: 'Teleconsulta',
    h1: 'Teleconsulta médica para orientación sin desplazarte',
    metaTitle: 'Teleconsulta de Medicina General $90.000 COP | Atención Hoy Mismo | MedicExpress',
    metaDescription:
      'Teleconsulta de medicina general en Bogotá y Colombia por $90.000 COP (no emite incapacidades médicas). Atención hoy mismo con médicos de SMD Vital.',
    summary:
      'Teleconsulta de medicina general por $90.000 COP para recibir orientación médica profesional hoy mismo desde casa, resolver dudas clínicas, revisar exámenes y definir tratamiento cuando no se requiere examen físico presencial. No emite incapacidades médicas.',
    intent: 'Usuarios que buscan teleconsulta de medicina general hoy mismo por $90.000 COP sin salir de casa.',
    price: '$90.000 COP',
    highlights: ['Tarifa oficial $90.000 COP', 'Atención hoy mismo por videollamada', 'No emite incapacidades médicas'],
    suitableFor: [
      'Síntomas leves o consultas de orientación médica general sin signos de alarma',
      'Lectura e interpretación clínica de resultados de laboratorio o imágenes diagnósticas',
      'Seguimiento de enfermedades crónicas estables y renovación de fórmulas según criterio médico'
    ],
    includes: [
      'Consulta virtual por videollamada con médico general titulado y verificado en ReTHUS ($90.000 COP).',
      'Evaluación clínica de síntomas, historia médica, antecedentes farmacológicos y revisión de paraclínicos.',
      'Recomendaciones terapéuticas, plan de cuidado en casa y envío digital de fórmula médica u órdenes de exámenes cuando aplique.',
      'Condición normativa y clínica: la teleconsulta de medicina general no emite incapacidades médicas.'
    ],
    preparation: [
      'Contar con celular o computador con cámara, audio funcional y buena conexión a internet.',
      'Tener a la mano documento de identidad, resultados de laboratorio previos y lista de medicamentos actuales.',
      'Ubicarse en un espacio privado, silencioso e iluminado unos minutos antes de la hora agendada.'
    ],
    redFlags: [
      'Dificultad para respirar, dolor en el pecho, fiebre muy alta que no cede o deshidratación severa.',
      'Dolor abdominal intenso, sangrado abundante, pérdida de conciencia o alteraciones neurológicas agudas.',
      'Si requiere examen físico inmediato o presenta urgencia vital, acuda a urgencias hospitalarias o solicite valoración presencial si no es vital.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta la teleconsulta de medicina general?',
        answer:
          'La teleconsulta de medicina general tiene una tarifa oficial de $90.000 COP. Incluye la atención por videollamada con un médico de SMD Vital Bogotá, orientación diagnóstica y fórmula médica digital cuando el criterio clínico lo determine.'
      },
      {
        question: '¿Se emiten incapacidades médicas por teleconsulta?',
        answer:
          'No. La teleconsulta de medicina general ($90.000 COP) no emite incapacidades médicas ni certificados de incapacidad. Para evaluación física presencial en Bogotá puedes solicitar la consulta médica domiciliaria por $170.000 COP.'
      },
      {
        question: '¿En qué casos conviene pedir consulta médica domiciliaria en lugar de teleconsulta?',
        answer:
          'Cuando el paciente requiere auscultación pulmonar o cardíaca, palpación abdominal, otoscopia o evaluación física presencial (por ejemplo, adultos mayores decaídos, dolor agudo o fiebre persistente), se recomienda la consulta médica domiciliaria en Bogotá ($170.000 COP).'
      },
      {
        question: '¿Cómo agendo mi teleconsulta hoy mismo por WhatsApp?',
        answer:
          'Escríbenos por WhatsApp indicando nombre, edad, motivo de consulta y horario deseado. Confirmamos disponibilidad médica hoy mismo y enviamos el enlace de conexión.'
      }
    ],
    related: [
      'servicios-medicos/servicio-medico-a-domicilio',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'teleconsulta-medica-colombia',
      'servicios-de-enfermeria/inyectologia-a-domicilio',
      'servicios-medicos/suero-multivitaminico'
    ]
  },
  {
    slug: 'servicios-medicos/terapias-respiratorias',
    category: 'Servicios médicos',
    title: 'Terapias respiratorias',
    shortTitle: 'Terapia respiratoria',
    h1: 'Terapias respiratorias a domicilio con coordinación profesional',
    metaTitle: 'Terapia Respiratoria y Nebulizaciones a Domicilio Bogotá | Atención Hoy Mismo | MedicExpress',
    metaDescription:
      'Terapia respiratoria y nebulizaciones a domicilio en Bogotá desde $115.000 COP según valoración clínica. Atención hoy mismo con SMD Vital. Agenda por WhatsApp.',
    summary:
      'Servicio de terapia respiratoria, micronebulizaciones e higiene bronquial a domicilio en Bogotá, coordinado según valoración clínica del paciente para apoyar cuadros respiratorios no urgentes sin salir de casa.',
    intent: 'Pacientes en Bogotá que buscan terapia respiratoria o nebulizaciones a domicilio hoy mismo con validación clínica previa.',
    price: '$115.000 COP (según valoración clínica)',
    highlights: ['Terapia respiratoria y nebulizaciones en casa', 'Cotización y alcance según valoración clínica', 'Atención hoy mismo en Bogotá con SMD Vital'],
    suitableFor: [
      'Pacientes con bronquitis, EPOC estable, asma leve a moderada o hipersecreción bronquial con indicación de terapia',
      'Adultos mayores y niños que requieren micronebulizaciones o ejercicios de higiene bronquial en domicilio',
      'Rehabilitación respiratoria domiciliaria y control de oximetría bajo supervisión profesional'
    ],
    includes: [
      'Valoración respiratoria inicial en domicilio: auscultación pulmonar, frecuencia respiratoria y oximetría de pulso (SpO2).',
      'Realización de micronebulización o técnicas de higiene bronquial y fisioterapia respiratoria según indicación médica y valoración clínica.',
      'Monitoreo de respuesta clínica posterior a la sesión y educación a la familia sobre uso de inhaladores y signos de alarma.'
    ],
    preparation: [
      'Enviar por WhatsApp la orden o fórmula médica (si cuenta con medicamentos para nebulizar como broncodilatadores o solución salina).',
      'Informar edad del paciente, diagnóstico respiratorio, si utiliza oxígeno suplementario y si presenta fiebre.',
      'Mantener al paciente en posición semisentada y evitar comidas copiosas al menos 1 hora antes de la sesión.'
    ],
    redFlags: [
      'Dificultad respiratoria severa (tirajes intercostales, aleteo nasal, incapacidad para hablar en frases completas).',
      'Coloración morada o azulada en labios o uñas (cianosis) o saturación de oxígeno críticamente baja.',
      'Somnolencia excesiva, confusión o dolor torácico agudo: acuda de inmediato a urgencias hospitalarias (123).'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta una terapia respiratoria o nebulización a domicilio en Bogotá?',
        answer:
          'La terapia respiratoria a domicilio en Bogotá se coordina con tarifa base de referencia de $115.000 COP y se confirma según valoración clínica del caso, número de sesiones, insumos o medicamentos requeridos y localidad.'
      },
      {
        question: '¿Qué incluye la sesión de terapia respiratoria a domicilio?',
        answer:
          'Incluye control de signos vitales y saturación de oxígeno, evaluación respiratoria, realización de nebulización o maniobras de higiene bronquial según indicación clínica y recomendaciones de cuidado en casa.'
      },
      {
        question: '¿Atienden crisis respiratorias severas o urgencias de asma?',
        answer:
          'No. Una crisis asmática severa, dificultad respiratoria aguda o desaturación marcada es una urgencia vital que requiere traslado inmediato a un servicio de urgencias hospitalarias.'
      },
      {
        question: '¿Qué debo informar por WhatsApp para solicitar terapia respiratoria hoy mismo?',
        answer:
          'Indica edad del paciente, síntomas actuales, si tienes fórmula médica o medicamentos para nebulizar, barrio en Bogotá y horario deseado.'
      }
    ],
    related: [
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-medicos/servicio-medico-a-domicilio',
      'servicios-de-enfermeria/toma-de-signos-vitales',
      'servicios-medicos/teleconsulta-medica',
      'servicios-medicos/atencion-a-pacientes-con-covid-19'
    ]
  },
  {
    slug: 'servicios-medicos/electrocardiografia-basica',
    category: 'Servicios médicos',
    title: 'Electrocardiografía básica',
    shortTitle: 'Electrocardiograma',
    h1: 'Electrocardiograma a domicilio con orientación responsable',
    metaTitle: 'Electrocardiograma (EKG) a Domicilio Bogotá | Enfermería y Médicos | MedicExpress',
    metaDescription:
      'Consulta disponibilidad de electrocardiograma (EKG) y toma de signos vitales a domicilio en Bogotá con SMD Vital. Orientación clínica rápida por WhatsApp.',
    summary:
      'Información y orientación para solicitudes de electrocardiograma (EKG) y monitoreo de signos vitales a domicilio en Bogotá. Confirmamos disponibilidad operativa, requisitos y alternativas de valoración médica domiciliaria ($170.000 COP) antes de reservar.',
    intent: 'Usuarios que consultan por electrocardiograma (EKG) a domicilio en Bogotá o control cardiovascular no urgente en casa.',
    highlights: ['Validación previa de disponibilidad', 'Alternativa de signos vitales ($100.000 COP) y consulta médica ($170.000 COP)', 'Derivación inmediata si hay signos de alarma'],
    suitableFor: [
      'Controles cardiovasculares ambulatorios no urgentes solicitados por médico tratante',
      'Adultos mayores con movilidad reducida que requieren orientación diagnóstica en casa',
      'Pacientes que necesitan combinar toma de signos vitales ($100.000 COP) o valoración médica domiciliaria ($170.000 COP)'
    ],
    includes: [
      'Verificación previa por WhatsApp de la disponibilidad del equipo portátil de electrocardiografía y profesional en tu zona de Bogotá.',
      'Cuando se agenda control cardiovascular o toma de signos vitales: registro de tensión arterial, frecuencia cardíaca y saturación de oxígeno.',
      'Orientación inmediata hacia consulta médica domiciliaria ($170.000 COP) o ruta de urgencias si se detectan síntomas de alarma.'
    ],
    preparation: [
      'Contar con la orden médica del estudio y antecedentes cardiovasculares del paciente (hipertensión, arritmias, marcapasos).',
      'Evitar aplicar cremas, aceites o lociones en el pecho, muñecas y tobillos antes del registro.',
      'Permanecer en reposo físico al menos 10 a 15 minutos antes de la toma.'
    ],
    redFlags: [
      'Dolor opresivo en el centro del pecho que se irradia al brazo izquierdo, cuello, espalda o mandíbula.',
      'Falta de aire súbita, sudoración fría, mareo intenso, palpitaciones rápidas con sensación de desmayo o síncope.',
      'Ante cualquiera de estos síntomas, NO espere un EKG a domicilio: llame al 123 o acuda de inmediato a urgencias.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cómo confirmo si hay disponibilidad de electrocardiograma (EKG) a domicilio hoy en Bogotá?',
        answer:
          'Escríbenos por WhatsApp indicando localidad en Bogotá, edad del paciente y si cuentas con orden médica. El equipo de SMD Vital Bogotá valida disponibilidad técnica o te orienta hacia toma de signos vitales ($100.000 COP) o consulta médica domiciliaria ($170.000 COP).'
      },
      {
        question: '¿Puedo pedir un electrocardiograma a domicilio si el paciente tiene dolor de pecho fuerte?',
        answer:
          'No. El dolor torácico agudo, la dificultad para respirar o el desmayo son signos de posible evento coronario agudo y requieren atención hospitalaria de urgencias inmediata.'
      },
      {
        question: '¿Qué otros controles cardiovasculares ofrecen a domicilio en Bogotá?',
        answer:
          'Ofrecemos toma de signos vitales a domicilio por $100.000 COP (presión arterial, frecuencia cardíaca, oximetría y temperatura) y consulta médica domiciliaria integral por $170.000 COP.'
      }
    ],
    related: [
      'servicios-de-enfermeria/toma-de-signos-vitales',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-medicos/servicio-medico-a-domicilio',
      'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario'
    ]
  },
  {
    slug: 'servicios-medicos/suero-multivitaminico',
    category: 'Servicios médicos',
    title: 'Suero multivitamínico',
    shortTitle: 'Sueroterapia',
    h1: 'Suero multivitamínico a domicilio con valoración responsable',
    metaTitle: 'Suero de Hidratación y Sueroterapia a Domicilio Bogotá desde $150.000 COP | Hoy Mismo | MedicExpress',
    metaDescription:
      'Suero de hidratación y sueroterapia a domicilio en Bogotá desde $150.000 COP (incluye canalización, catéter, venoclisis y SSN o Lactato). Atención hoy mismo.',
    summary:
      'Suero de hidratación y sueroterapia intravenosa a domicilio en Bogotá desde $150.000 COP. Incluye canalización venosa periférica, catéter, equipo de venoclisis y solución salina normal o Lactato de Ringer; la sueroterapia multivitamínica o formulada se administra según valoración clínica previa con SMD Vital Bogotá.',
    intent: 'Usuarios en Bogotá que buscan suero de hidratación o sueroterapia a domicilio hoy mismo desde $150.000 COP con insumos estériles incluidos.',
    price: 'Desde $150.000 COP (Hidratación IV $150.000 COP / Sueroterapia según valoración clínica)',
    highlights: ['Desde $150.000 COP todo incluido en canalización', 'Incluye catéter, venoclisis y solución salina o Lactato', 'Atención hoy mismo en Bogotá con SMD Vital'],
    suitableFor: [
      'Deshidratación leve a moderada por cuadro gastrointestinal, fiebre, agotamiento físico o baja ingesta oral',
      'Pacientes con fórmula médica para hidratación parenteral o sueroterapia multivitamínica en casa',
      'Adultos y adultos mayores que requieren reposición hídrica intravenosa supervisada sin ir a clínica'
    ],
    includes: [
      'Tarifa base desde $150.000 COP: incluye canalización venosa periférica con técnica aséptica, catéter estéril, equipo de venoclisis y bolsa de Solución Salina Normal (SSN 0.9%) o Lactato de Ringer.',
      'Toma de signos vitales antes, durante y al finalizar la infusión intravenosa por profesional de enfermería.',
      'Sueroterapia formulada o multivitamínica: se cotiza y administra según valoración clínica previa, fórmula médica y componentes requeridos.',
      'Retiro seguro del acceso venoso al finalizar la sesión y desecho biosanitario de cortopunzantes.'
    ],
    preparation: [
      'Informar por WhatsApp edad del paciente, peso aproximado, motivo de la hidratación y si cuenta con fórmula médica.',
      'Notificar obligatoriamente antecedentes de insuficiencia cardíaca, enfermedad renal crónica, hipertensión no controlada o alergias a medicamentos.',
      'Disponer de un sillón reclinable o cama cómoda con soporte cercano para colgar o ubicar el equipo de venoclisis.'
    ],
    redFlags: [
      'Deshidratación severa con somnolencia extrema, confusión, ausencia de orina por más de 12 horas o hipotensión marcada.',
      'Vómito incoercible con sangre, dolor abdominal quirúrgico, fiebre muy alta con rigidez o dificultad para respirar (edema pulmonar).',
      'Pacientes con falla cardíaca o renal descompensada y piernas hinchadas: requieren manejo hospitalario de urgencias.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta el suero de hidratación y la sueroterapia a domicilio en Bogotá?',
        answer:
          'El suero de hidratación a domicilio en Bogotá cuesta desde $150.000 COP e incluye canalización, catéter, equipo de venoclisis y solución salina o Lactato de Ringer. La sueroterapia formulada o con medicamentos/oligoelementos específicos se cotiza según valoración clínica.'
      },
      {
        question: '¿Qué incluye exactamente el servicio de suero a domicilio desde $150.000 COP?',
        answer:
          'Incluye la visita del profesional de enfermería en Bogotá, valoración de signos vitales, insumos estériles de canalización (catéter, venoclisis, antisépticos), solución cristaloide (Solución Salina o Lactato de Ringer), supervisión de la infusión y retiro del catéter.'
      },
      {
        question: '¿Cualquier persona puede recibir suero intravenoso en casa?',
        answer:
          'No. Antes de agendar validamos antecedentes cardíacos, renales y alergias. Si el paciente presenta signos de deshidratación grave o inestabilidad hemodinámica, debe acudir a urgencias hospitalarias.'
      },
      {
        question: '¿Cuánto dura la aplicación del suero a domicilio?',
        answer:
          'El procedimiento suele tomar entre 45 y 60 minutos en el domicilio para garantizar una velocidad de infusión segura y controlada.'
      }
    ],
    related: [
      'servicios-de-enfermeria/inyectologia-a-domicilio',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-medicos/servicio-medico-a-domicilio',
      'servicios-de-enfermeria/toma-de-signos-vitales',
      'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario'
    ]
  },
  {
    slug: 'servicios-medicos/cura-de-heridas-simples-y-complejas',
    category: 'Servicios médicos',
    title: 'Cura de heridas simples y complejas',
    shortTitle: 'Cura de heridas',
    h1: 'Cura de heridas a domicilio con atención cuidadosa',
    metaTitle: 'Curación de Heridas a Domicilio Bogotá desde $150.000 COP | Atención Hoy Mismo | MedicExpress',
    metaDescription:
      'Curación de heridas complejas, postquirúrgicas, úlceras y pie diabético a domicilio en Bogotá desde $150.000 COP (valoración previa con foto clínica).',
    summary:
      'Curación de heridas a domicilio en Bogotá desde $150.000 COP (heridas complejas, postquirúrgicas, úlceras por presión, úlceras vasculares y pie diabético). Realizamos valoración previa con foto clínica por WhatsApp para definir técnica aséptica, apósitos e insumos necesarios.',
    intent: 'Pacientes y familias que buscan curación de heridas postquirúrgicas, complejas, úlceras o pie diabético a domicilio en Bogotá desde $150.000 COP.',
    price: 'Desde $150.000 COP (valoración previa con foto clínica)',
    highlights: ['Desde $150.000 COP en Bogotá', 'Valoración previa con foto clínica', 'Heridas postquirúrgicas, úlceras y pie diabético'],
    suitableFor: [
      'Heridas postquirúrgicas (cesáreas, cirugías abdominales, ortopédicas o plásticas) que requieren curación estéril',
      'Úlceras por presión (escaras), úlceras venosas/arteriales y lesiones de pie diabético aptas para manejo ambulatorio',
      'Heridas traumáticas o quemaduras superficiales a moderadas que necesitan limpieza y apósitos especializados'
    ],
    includes: [
      'Valoración previa del caso mediante foto clínica enviada por WhatsApp para confirmar viabilidad domiciliaria y cotización exacta.',
      'Lavado y desinfección de la herida con técnica estéril, solución salina e insumos básicos de curación por profesional de enfermería.',
      'Desbridamiento mecánico o autolítico superficial cuando esté indicado y colocación de apósitos según la fase de cicatrización.',
      'Educación al paciente y cuidadores sobre descarga de presión, cuidado del vendaje y signos de infección.'
    ],
    preparation: [
      'Enviar por WhatsApp una foto clínica clara y bien iluminada de la herida junto con la indicación del médico tratante.',
      'Informar si el paciente tiene diabetes, problemas de circulación, alergias o toma anticoagulantes.',
      'Confirmar si ya cuenta en casa con apósitos especiales formulados (hidrocoloides, alginatos, plata) o si desea que los incluyamos en la cotización.'
    ],
    redFlags: [
      'Hemorragia activa abundante o pulsátil que no se detiene tras 10 minutos de compresión directa.',
      'Fiebre alta, escalofríos, celulitis que avanza rápidamente, secreción purulenta fétida o tejido necrótico extenso con compromiso sistémico.',
      'Exposición de hueso, tendón profundo o signos de isquemia aguda (extremidad fría, pálida y sin pulso): acuda a urgencias de inmediato.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta la curación de heridas a domicilio en Bogotá?',
        answer:
          'La curación de heridas a domicilio en Bogotá tiene una tarifa base desde $150.000 COP. El valor final se confirma tras una valoración previa con foto clínica por WhatsApp, según la extensión de la herida (postquirúrgica, úlcera, pie diabético) y los apósitos especializados requeridos.'
      },
      {
        question: '¿Por qué solicitan una foto clínica de la herida antes de agendar?',
        answer:
          'La foto clínica permite a nuestro equipo de enfermería evaluar tamaño, profundidad, exudado y estado del tejido para llevar los insumos estériles exactos, darte un precio cerrado antes de la visita y verificar que no requiera manejo quirúrgico hospitalario.'
      },
      {
        question: '¿Realizan curaciones de úlceras por presión (escaras) y pie diabético en casa?',
        answer:
          'Sí. Atendemos curaciones de úlceras por presión, heridas vasculares, pie diabético y heridas postquirúrgicas en Bogotá, aplicando protocolos de técnica aséptica y seguimiento programado.'
      },
      {
        question: '¿Si la herida también tiene puntos para retirar, cuánto cuesta?',
        answer:
          'El servicio de retiro de puntos a domicilio en Bogotá cuesta $120.000 COP. Si requieres sutura de una herida aguda apta para domicilio, la tarifa es desde $150.000 COP con anestesia local y valoración previa por foto clínica.'
      }
    ],
    related: [
      'servicios-medicos/sutura-y-retiro-de-puntos',
      'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario',
      'servicios-de-enfermeria/inyectologia-a-domicilio',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-medicos/retiro-y-colocacion-de-sonda-vesical'
    ]
  },
  {
    slug: 'servicios-medicos/sutura-y-retiro-de-puntos',
    category: 'Servicios médicos',
    title: 'Sutura y retiro de puntos',
    shortTitle: 'Sutura y puntos',
    h1: 'Sutura y retiro de puntos a domicilio con revisión previa',
    metaTitle: 'Sutura desde $150.000 y Retiro de Puntos $120.000 COP Bogotá | Hoy Mismo | MedicExpress',
    metaDescription:
      'Retiro de puntos a domicilio en Bogotá por $120.000 COP y sutura de heridas desde $150.000 COP con anestesia local (valoración previa por foto clínica).',
    summary:
      'Atención a domicilio en Bogotá para sutura de heridas desde $150.000 COP (con anestesia local y valoración previa por foto clínica) y retiro de puntos quirúrgicos por $120.000 COP. Procedimientos realizados con instrumental estéril y protocolo aséptico por SMD Vital Bogotá.',
    intent: 'Pacientes en Bogotá que necesitan sutura de herida en casa (desde $150.000 COP) o retiro de puntos a domicilio ($120.000 COP) hoy mismo.',
    price: 'Retiro de puntos $120.000 COP / Sutura desde $150.000 COP',
    highlights: ['Retiro de puntos $120.000 COP en Bogotá', 'Sutura con anestesia local desde $150.000 COP', 'Valoración previa por foto clínica'],
    suitableFor: [
      'Retiro de puntos de sutura ($120.000 COP) tras cirugías o cierres cutáneos ya cicatrizados',
      'Sutura de heridas limpias y superficiales (desde $150.000 COP) dentro de la ventana clínica segura, previa foto clínica',
      'Adultos mayores o pacientes postoperados que desean evitar traslados a clínica para quitar puntos'
    ],
    includes: [
      'Retiro de puntos ($120.000 COP): inspección clínica de la cicatriz, antisepsia, corte y extracción estéril de los hilos de sutura y curación protectora final.',
      'Sutura de heridas (desde $150.000 COP): valoración previa por foto clínica, lavado exhaustivo, infiltración de anestesia local, cierre por planos cutáneos con hilo estéril y vendaje.',
      'Instrucciones detalladas de cuidado en casa, signos de alarma y fecha estimada de control o retiro de puntos.'
    ],
    preparation: [
      'Para sutura: enviar de inmediato foto clínica clara de la herida por WhatsApp indicando hace cuántas horas ocurrió y cómo se produjo.',
      'Para retiro de puntos: informar cuántos días lleva con la sutura, zona anatómica, número aproximado de puntos y enviar foto del estado actual.',
      'Notificar alergias a anestésicos locales (lidocaína), uso de anticoagulantes o antecedente de diabetes.'
    ],
    redFlags: [
      'Heridas con sangrado arterial pulsátil o hemorragia que no cede con presión directa firme.',
      'Heridas profundas con compromiso de tendones, nervios, fractura expuesta, mordeduras graves o ubicadas en párpados/zonas estéticas complejas.',
      'Signos de infección severa en puntos (dehiscencia total, pus abundante, fiebre alta): requieren atención en urgencias.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta el retiro de puntos y la sutura de heridas a domicilio en Bogotá?',
        answer:
          'El retiro de puntos a domicilio en Bogotá tiene una tarifa oficial de $120.000 COP. La sutura de heridas a domicilio cuesta desde $150.000 COP (incluye anestesia local e insumos estériles) y requiere valoración previa mediante foto clínica por WhatsApp.'
      },
      {
        question: '¿Todas las heridas se pueden suturar a domicilio?',
        answer:
          'No. Solo se suturan en casa heridas cutáneas limpias, sin compromiso de tendones, nervios ni vasos mayores, y dentro del tiempo clínico seguro (idealmente primeras horas). Por eso siempre validamos una foto clínica antes de confirmar el servicio.'
      },
      {
        question: '¿A los cuántos días se retiran los puntos de una herida o cirugía?',
        answer:
          'Depende de la zona del cuerpo y la indicación del cirujano: en rostro suele ser entre 5 y 7 días, en cuero cabelludo o tronco entre 7 y 10 días, y en extremidades o zonas de tensión entre 10 y 14 días. Validamos la orden o estado de cicatrización antes del retiro ($120.000 COP).'
      },
      {
        question: '¿La sutura a domicilio incluye anestesia local?',
        answer:
          'Sí. El procedimiento de sutura a domicilio (desde $150.000 COP) incluye infiltración con anestesia local previa verificación de alergias, limpieza quirúrgica, material de sutura estéril y apósito protector.'
      }
    ],
    related: [
      'servicios-medicos/cura-de-heridas-simples-y-complejas',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-de-enfermeria/inyectologia-a-domicilio',
      'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario',
      'servicios-medicos/servicio-medico-a-domicilio'
    ]
  },
  {
    slug: 'servicios-medicos/retiro-y-colocacion-de-sonda-vesical',
    category: 'Servicios médicos',
    title: 'Retiro y colocación de sonda vesical',
    shortTitle: 'Sonda vesical',
    h1: 'Retiro y colocación de sonda vesical a domicilio',
    metaTitle: 'Cambio de Sonda Vesical $170.000 y Retiro $110.000 COP Bogotá | Hoy Mismo | MedicExpress',
    metaDescription:
      'Cambio y colocación de sonda vesical (Foley / Nelaton) a domicilio en Bogotá por $170.000 COP y retiro de sonda por $110.000 COP. Atención hoy mismo.',
    summary:
      'Procedimiento especializado a domicilio en Bogotá para cambio y colocación de sonda vesical (Foley o Nelaton) por $170.000 COP y retiro de sonda vesical por $110.000 COP. Atención realizada con técnica estrictamente estéril hoy mismo por SMD Vital Bogotá.',
    intent: 'Pacientes y familias en Bogotá que buscan cambio o colocación de sonda vesical ($170.000 COP) o retiro de sonda vesical ($110.000 COP) a domicilio.',
    price: 'Cambio y colocación $170.000 COP / Retiro $110.000 COP',
    highlights: ['Cambio y colocación (Foley/Nelaton) $170.000 COP', 'Retiro de sonda vesical $110.000 COP', 'Técnica estéril y atención hoy mismo en Bogotá'],
    suitableFor: [
      'Cambio periódico programado o colocación de sonda vesical permanente (Foley) o intermitente (Nelaton) por $170.000 COP',
      'Retiro seguro de sonda vesical ($110.000 COP) bajo indicación médica con vigilancia de micción espontánea',
      'Adultos mayores o pacientes con movilidad reducida en Bogotá que requieren manejo urológico en casa'
    ],
    includes: [
      'Cambio y colocación de sonda vesical ($170.000 COP): higiene perineal antiséptica, técnica estéril con guantes estériles, lubricación anestésica, paso de sonda Foley o Nelaton del calibre indicado, fijación y conexión a bolsa recolectora (Cystoflo).',
      'Retiro de sonda vesical ($110.000 COP): asepsia, desinflado completo del balón de retención de la sonda Foley, extracción suave sin trauma uretral e instrucciones para vigilar la primera micción.',
      'Verificación de permeabilidad y drenaje de orina, además de educación a cuidadores sobre manejo de la bolsa recolectora.'
    ],
    preparation: [
      'Informar por WhatsApp sexo y edad del paciente, diagnóstico urológico (ej. hiperplasia prostática, vejiga neurogénica) y si requiere cambio/colocación ($170.000 COP) o retiro ($110.000 COP).',
      'Indicar el tipo de sonda (Foley de 2 vías, silicona o látex, o Nelaton) y el calibre en French (ej. 14 Fr, 16 Fr, 18 Fr) que usa actualmente el paciente.',
      'Tener disponible la orden médica y un espacio privado, limpio y bien iluminado en la cama del paciente.'
    ],
    redFlags: [
      'Sangrado uretral abundante (hematuria franca con coágulos que obstruyen la vía) o trauma uretral reciente.',
      'Estenosis uretral severa conocida o antecedente de cateterismo difícil que requirió guía urológica especializada en clínica.',
      'Fiebre alta con escalofríos, dolor lumbar intenso, confusión en el adulto mayor (sospecha de urosepsis) o globo vesical doloroso refractario: acuda a urgencias.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta el cambio, colocación o retiro de sonda vesical a domicilio en Bogotá?',
        answer:
          'En Bogotá manejamos tarifas oficiales cerradas: el cambio o colocación de sonda vesical (Foley o Nelaton) cuesta $170.000 COP, y el retiro de sonda vesical cuesta $110.000 COP.'
      },
      {
        question: '¿El servicio de cambio y colocación de sonda ($170.000 COP) cubre sonda Foley y sonda Nelaton?',
        answer:
          'Sí. Cubre procedimientos con sonda Foley (permanente con balón y bolsa recolectora) o sonda Nelaton (vaciado vesical), confirmando previamente el calibre en French y los insumos requeridos por WhatsApp.'
      },
      {
        question: '¿Cada cuánto tiempo se debe cambiar una sonda vesical Foley?',
        answer:
          'Según la indicación médica y el material del catéter: las sondas de látex siliconado suelen cambiarse cada 15 a 21 días, mientras que las sondas 100% de silicona pueden durar hasta 30 días o según criterio del médico tratante.'
      },
      {
        question: '¿Qué cuidados se deben tener después del retiro de sonda vesical ($110.000 COP)?',
        answer:
          'Tras retirar la sonda vesical se debe mantener hidratación oral adecuada y vigilar que el paciente orine espontáneamente en las siguientes 4 a 6 horas. Si presenta dolor en la parte baja del abdomen y no logra orinar, debe avisar de inmediato.'
      }
    ],
    related: [
      'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-medicos/cura-de-heridas-simples-y-complejas',
      'servicios-de-enfermeria/inyectologia-a-domicilio',
      'servicios-de-enfermeria/toma-de-signos-vitales'
    ]
  },
  {
    slug: 'servicios-medicos/lavado-de-oido',
    category: 'Servicios médicos',
    title: 'Lavado de oído',
    shortTitle: 'Lavado de oído',
    h1: 'Lavado de oído a domicilio con valoración previa',
    metaTitle: 'Lavado de Oídos a Domicilio Bogotá $140.000 COP | Atención Hoy Mismo | MedicExpress',
    metaDescription:
      'Lavado de oídos a domicilio en Bogotá por $140.000 COP (tarifa única por visita: cubre uno o ambos oídos + revisión otoscópica). Atención hoy mismo.',
    summary:
      'Lavado de oídos a domicilio en Bogotá por $140.000 COP. Es una tarifa única por visita que cubre uno o ambos oídos e incluye revisión otoscópica inicial y posterior, extracción segura de tapón de cerumen e insumos estériles, coordinado hoy mismo con SMD Vital Bogotá.',
    intent: 'Personas con sensación de oído tapado por cerumen que buscan lavado de oídos a domicilio en Bogotá hoy mismo por $140.000 COP.',
    price: '$140.000 COP',
    highlights: ['Tarifa única $140.000 COP (uno o ambos oídos)', 'Incluye revisión otoscópica previa y final', 'Atención hoy mismo en Bogotá con SMD Vital'],
    suitableFor: [
      'Sensación de oído tapado, disminución auditiva o zumbido (tinnitus) por tapón de cerumen',
      'Adultos mayores, usuarios de audífonos o pacientes que producen cerumen compacto',
      'Personas que buscan extracción profesional en casa sin riesgos de usar copitos o maniobras caseras'
    ],
    includes: [
      'Tarifa única de $140.000 COP por visita en Bogotá: cubre el lavado de uno o ambos oídos sin cobro adicional por el segundo oído.',
      'Revisión otoscópica bilateral antes del procedimiento para confirmar el tapón de cerumen y verificar la integridad del conducto y tímpano.',
      'Irrigación ótica controlada con solución estéril tibia e instrumental médico seguro para extraer el cerumen impactado.',
      'Segunda revisión otoscópica de control al finalizar y recomendaciones de higiene auditiva.'
    ],
    preparation: [
      'No introducir copitos (hisopos), ganchos, llaves ni aplicar remedios caseros antes de la visita.',
      'Si el cerumen lleva muchas semanas endurecido, informar por WhatsApp para recibir orientación sobre si conviene reblandecerlo previamente.',
      'Informar obligatoriamente si ha tenido cirugías de oído, perforación timpánica, dolor agudo o salida de líquido/pus.'
    ],
    redFlags: [
      'Salida de pus, secreción fétida o sangrado activo por el conducto auditivo (otorrea u otorragia).',
      'Antecedente confirmado de perforación timpánica, tubos de ventilación o cirugía reciente de oído.',
      'Dolor de oído severo acompañado de fiebre alta, inflamación detrás de la oreja (mastoiditis) o vértigo incapacitante: requiere valoración médica prioritaria o urgencias.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta el lavado de oídos a domicilio en Bogotá y el precio es por cada oído?',
        answer:
          'El lavado de oídos a domicilio en Bogotá cuesta $140.000 COP. Es una tarifa única por visita que cubre uno o ambos oídos (no se cobra doble si necesitas limpieza en los dos oídos) e incluye la revisión otoscópica.'
      },
      {
        question: '¿Qué incluye exactamente la visita de lavado de oídos por $140.000 COP?',
        answer:
          'Incluye revisión otoscópica de ambos oídos para descartar contraindicaciones, lavado de oído con solución estéril a temperatura corporal en uno o ambos oídos según hallazgo, otoscopia de verificación final e insumos.'
      },
      {
        question: '¿En qué casos NO se debe realizar un lavado de oídos?',
        answer:
          'Está contraindicado si existe perforación del tímpano, infección aguda activa con salida de pus (otitis supurativa), sangrado, cirugía reciente de oído o cuerpo extraño vegetal. Por eso siempre iniciamos con revisión otoscópica.'
      },
      {
        question: '¿Duele el procedimiento de lavado de oídos a domicilio?',
        answer:
          'No es un procedimiento doloroso cuando se realiza con técnica profesional y agua estéril tibia. El paciente siente el paso suave del líquido y un alivio inmediato de la sensación de oído tapado al salir el tapón de cerumen.'
      }
    ],
    related: [
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-medicos/servicio-medico-a-domicilio',
      'servicios-de-enfermeria/inyectologia-a-domicilio',
      'servicios-de-enfermeria/toma-de-signos-vitales',
      'servicios-medicos/teleconsulta-medica'
    ]
  },
  {
    slug: 'servicios-medicos/extraccion-y-cuidado-para-unas-encarnadas',
    category: 'Servicios médicos',
    title: 'Extracción y cuidado para uñas encarnadas',
    shortTitle: 'Uñas encarnadas',
    h1: 'Cuidado de uñas encarnadas a domicilio',
    metaTitle: 'Cuidado de Uñas Encarnadas a Domicilio Bogotá | Valoración Clínica | MedicExpress',
    metaDescription:
      'Solicita orientación y valoración para extracción y cuidado de uñas encarnadas a domicilio en Bogotá con SMD Vital. Consulta disponibilidad por WhatsApp.',
    summary:
      'Orientación y valoración por WhatsApp para casos seleccionados de uña encarnada (onicocriptosis) a domicilio en Bogotá, validando previamente estado local, presencia de infección y antecedentes del paciente.',
    intent: 'Pacientes con molestia por uña encarnada que buscan validar atención en casa en Bogotá.',
    highlights: ['Revisión previa por foto clínica', 'Técnica aséptica y anestesia local cuando aplica', 'Orientación de cuidado posterior'],
    suitableFor: [
      'Dolor e inflamación localizada en el borde ungueal sin compromiso sistémico',
      'Dificultad para caminar o calzarse por espícula de uña encarnada',
      'Pacientes que desean validar por WhatsApp si su caso es apto para manejo domiciliario'
    ],
    includes: [
      'Revisión previa del caso por WhatsApp para confirmar disponibilidad del profesional, viabilidad domiciliaria y cotización.',
      'Antisepsia local, manejo cuidadoso del borde ungueal cuando el caso es apto y curación protectora estéril.',
      'Recomendaciones de calzado, higiene y signos de alarma.'
    ],
    preparation: [
      'Enviar foto clara del dedo afectado por WhatsApp para evaluar inflamación o granuloma.',
      'Informar obligatoriamente si el paciente padece diabetes, neuropatía o enfermedad arterial periférica.',
      'Mantener el pie limpio y seco antes de la valoración.'
    ],
    redFlags: [
      'Paciente diabético con úlcera, necrosis, cambio de coloración oscura en el dedo o pérdida de sensibilidad (riesgo de pie diabético complicado).',
      'Infección severa con celulitis que sube por el pie, pus abundante, fiebre o dolor isquémico en reposo: acuda a urgencias.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuándo NO conviene manejar una uña encarnada en casa?',
        answer:
          'Si hay infección profunda avanzada, fiebre, diabetes no controlada o insuficiencia vascular periférica, el paciente debe recibir valoración médica u hospitalaria especializada.'
      },
      {
        question: '¿Debo enviar foto antes de solicitar el servicio?',
        answer:
          'Sí. Enviar una foto clara del dedo por WhatsApp ayuda al equipo clínico de SMD Vital Bogotá a confirmar si el caso es apto, la disponibilidad y la cotización exacta.'
      }
    ],
    related: [
      'servicios-medicos/cura-de-heridas-simples-y-complejas',
      'servicios-medicos/sutura-y-retiro-de-puntos',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-de-enfermeria/inyectologia-a-domicilio'
    ]
  },
  {
    slug: 'servicios-medicos/atencion-a-pacientes-con-covid-19',
    category: 'Servicios médicos',
    title: 'Atención a pacientes con COVID-19',
    shortTitle: 'COVID-19',
    h1: 'Orientación para pacientes con síntomas respiratorios',
    metaTitle: 'Valoración Médica Respiratoria y COVID-19 a Domicilio Bogotá $170.000 COP | MedicExpress',
    metaDescription:
      'Atención a pacientes con síntomas respiratorios o COVID-19 en Bogotá: consulta médica domiciliaria $170.000 COP, teleconsulta $90.000 COP y terapia respiratoria.',
    summary:
      'Orientación clínica en Bogotá para pacientes con cuadros gripales, síntomas respiratorios o COVID-19: coordinamos consulta médica domiciliaria ($170.000 COP), teleconsulta ($90.000 COP), toma de signos vitales con oximetría ($100.000 COP) o terapia respiratoria según valoración clínica.',
    intent: 'Pacientes con síntomas respiratorios en Bogotá que buscan valoración médica en casa ($170.000 COP) o teleconsulta ($90.000 COP).',
    price: 'Consulta domiciliaria $170.000 COP / Teleconsulta $90.000 COP',
    highlights: ['Consulta médica domiciliaria $170.000 COP', 'Teleconsulta médica $90.000 COP', 'Terapia respiratoria según valoración clínica'],
    suitableFor: [
      'Síntomas respiratorios leves o moderados que requieren evaluación médica en casa ($170.000 COP)',
      'Seguimiento de oximetría de pulso y signos vitales en adultos mayores ($100.000 COP)',
      'Orientación virtual por teleconsulta ($90.000 COP, no emite incapacidades) para dudas de aislamiento y manejo sintomático'
    ],
    includes: [
      'Clasificación inicial de síntomas por WhatsApp para definir si requiere teleconsulta ($90.000 COP) o visita médica en casa ($170.000 COP).',
      'En visita médica domiciliaria: auscultación pulmonar, oximetría de pulso, control de signos vitales y plan de tratamiento.',
      'Orientación sobre terapia respiratoria / nebulizaciones según valoración clínica cuando esté indicada.'
    ],
    preparation: [
      'Informar edad del paciente, días de evolución de los síntomas, temperatura y saturación de oxígeno si tiene oxímetro en casa.',
      'Usar tapabocas quirúrgico o N95 durante la visita presencial del profesional y ventilar la habitación.',
      'Tener listado de enfermedades de base (EPOC, asma, hipertensión, diabetes) y medicamentos actuales.'
    ],
    redFlags: [
      'Dificultad para respirar en reposo, sensación de falta de aire al hablar o saturación de oxígeno menor a 90% en Bogotá.',
      'Dolor o presión persistente en el pecho, confusión, incapacidad para despertarse o labios/uñas azulados: acuda de inmediato a urgencias (123).'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta la valoración médica a domicilio para síntomas respiratorios en Bogotá?',
        answer:
          'La consulta médica domiciliaria en Bogotá tiene una tarifa oficial de $170.000 COP. Si los síntomas son leves y prefieres orientación por videollamada, la teleconsulta de medicina general cuesta $90.000 COP (no emite incapacidades médicas).'
      },
      {
        question: '¿Atienden emergencias respiratorias o pacientes con falta de aire severa?',
        answer:
          'No. La dificultad respiratoria severa, labios morados, dolor torácico o desaturación crítica son signos de alarma que requieren traslado inmediato a un servicio de urgencias hospitalarias.'
      },
      {
        question: '¿Ofrecen terapia respiratoria o nebulizaciones a domicilio?',
        answer:
          'Sí. Coordinamos terapia respiratoria y nebulizaciones a domicilio en Bogotá según valoración clínica del paciente.'
      }
    ],
    related: [
      'servicios-medicos/terapias-respiratorias',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-medicos/teleconsulta-medica',
      'servicios-de-enfermeria/toma-de-signos-vitales',
      'laboratorio-clinico/prueba-de-antigeno-a-domicilio'
    ]
  },
  {
    slug: 'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario',
    category: 'Enfermería',
    title: 'Enfermería a nivel domiciliario y hospitalario',
    shortTitle: 'Enfermería',
    h1: 'Enfermería domiciliaria y apoyo hospitalario',
    metaTitle: 'Auxiliar de enfermería a domicilio Bogotá | MedicExpress',
    metaDescription:
      'Turnos de enfermería a domicilio en Bogotá: 8h ($140.000 COP), 12h día ($160.000 COP), 12h noche ($170.000 COP) y 24h ($310.000 COP). Atención hoy mismo con SMD Vital.',
    summary:
      '¿Necesitas un turno de enfermería a domicilio o acompañamiento hospitalario en Bogotá? Coordinamos turnos de 8h ($140.000 COP), 12h día ($160.000 COP), 12h noche ($170.000 COP) y 24h ($310.000 COP con dos relevos de 12 horas), además de turnos cortos desde 4h ($110.000 COP) con SMD Vital Bogotá.',
    intent: 'Familias que buscan turnos de enfermería a domicilio en Bogotá (8h $140.000, 12h día $160.000, 12h noche $170.000, 24h $310.000 COP).',
    price: `8h $140.000 COP | 12h día $160.000 COP | 12h noche $170.000 COP | 24h $310.000 COP (4h desde ${new Intl.NumberFormat('es-CO').format(nursingPrices.shifts[0].priceCOP)} COP)`,
    highlights: ['Turnos 8h ($140k), 12h día ($160k), 12h noche ($170k), 24h ($310k)', 'Atención domiciliaria y apoyo hospitalario en Bogotá', 'Personal de enfermería verificado en ReTHUS'],
    suitableFor: [
      'Adultos mayores con dependencia funcional, deterioro cognitivo o riesgo de caídas',
      'Pacientes en recuperación postquirúrgica o posthospitalaria que requieren cuidado por turnos',
      'Familias cuidadoras que necesitan relevos diurnos, nocturnos o cobertura de 24 horas en Bogotá'
    ],
    includes: [
      'Asistencia en actividades básicas de la vida diaria: higiene y baño en cama o ducha asistida, cambio de pañal, vestido y alimentación asistida.',
      'Control y registro periódico de signos vitales, cambios posturales para prevención de úlceras por presión y apoyo en movilización segura.',
      'Supervisión de toma de medicamentos por vía oral según fórmula médica vigente y reporte de evolución a la familia.',
      'Organización clara por jornadas: 8h ($140.000 COP), 12h día ($160.000 COP), 12h noche ($170.000 COP) y 24h ($310.000 COP estructurado en dos relevos de 12 horas).'
    ],
    preparation: [
      'Definir fecha, jornada requerida (8h, 12h día, 12h noche, 24h o bloque de 4h/6h), dirección en Bogotá y nivel de dependencia del paciente.',
      'Contar en casa con los insumos de aseo personal del paciente (pañales, guantes de manejo, sabanillas) y fórmulas médicas vigentes.',
      'Si el turno es para acompañamiento en clínica u hospital, verificar previamente las normas de ingreso de la institución.'
    ],
    redFlags: [
      'Dificultad respiratoria aguda, dolor torácico, pérdida de conciencia, convulsiones o caída con trauma craneal.',
      'Fiebre alta súbita, sangrado activo o descompensación aguda: un turno de cuidado no reemplaza una atención médica de urgencias (123).'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta un turno de enfermería a domicilio en Bogotá?',
        answer: `Las tarifas oficiales de turnos de enfermería a domicilio en Bogotá son: turno de 8 horas ${new Intl.NumberFormat('es-CO').format(nursingPrices.shifts[2].priceCOP)} COP, turno de 12 horas día ${new Intl.NumberFormat('es-CO').format(nursingPrices.shifts[4].priceCOP)} COP, turno de 12 horas noche ${new Intl.NumberFormat('es-CO').format(nursingPrices.shifts[5].priceCOP)} COP y cobertura de 24 horas ${new Intl.NumberFormat('es-CO').format(nursingPrices.shifts[6].priceCOP)} COP (organizada con dos relevos de 12 horas). También contamos con turno diurno de 4 horas por ${new Intl.NumberFormat('es-CO').format(nursingPrices.shifts[0].priceCOP)} COP y de 6 horas por ${new Intl.NumberFormat('es-CO').format(nursingPrices.shifts[1].priceCOP)} COP.`
      },
      {
        question: '¿Cómo funciona la cobertura de 24 horas de enfermería ($310.000 COP)?',
        answer: `El servicio ordinario de 24 horas tiene un valor de ${new Intl.NumberFormat('es-CO').format(nursingPrices.shifts[6].priceCOP)} COP y se presta siempre mediante dos relevos de 12 horas para garantizar un cuidado alerta, seguro y continuo del paciente.`
      },
      {
        question: '¿La hora adicional se puede solicitar como una visita independiente?',
        answer: `No. La hora adicional cuesta ${new Intl.NumberFormat('es-CO').format(nursingPrices.additionalHourCOP)} COP únicamente como extensión de un turno en curso, previa confirmación con coordinación; no se vende como visita independiente.`
      },
      {
        question: '¿Los procedimientos invasivos (sondas, curaciones complejas, sueros) están incluidos dentro del turno básico?',
        answer:
          'No se presupone que procedimientos especializados o insumos estén incluidos en el turno de cuidado básico. Procedimientos como inyectología ($95.000 COP), curación de heridas (desde $150.000 COP), sueroterapia (desde $150.000 COP) o cambio de sonda vesical ($170.000 COP) tienen tarifa y requisitos propios.'
      },
      {
        question: '¿Cómo solicito acompañamiento hospitalario o a citas médicas?',
        answer:
          'Para acompañamiento en hospital indica la clínica, horario y tareas de apoyo. Si solo necesitas acompañamiento a citas médicas y procedimientos ambulatorios, contamos con el bloque de hasta 4 horas con profesional de enfermería por $110.000 COP.'
      },
      {
        question: '¿Estas tarifas aplican fuera de Bogotá?',
        answer:
          'La tabla oficial corresponde a los turnos coordinados por SMD Vital en Bogotá. No se garantiza cobertura presencial nacional.'
      }
    ],
    related: [
      'servicios-de-enfermeria/acompanamiento-a-citas-medicas',
      'servicios-de-enfermeria/inyectologia-a-domicilio',
      'servicios-de-enfermeria/toma-de-signos-vitales',
      'servicios-medicos/cura-de-heridas-simples-y-complejas',
      'servicios-medicos/retiro-y-colocacion-de-sonda-vesical'
    ]
  },
  {
    slug: 'servicios-de-enfermeria/inyectologia-a-domicilio',
    category: 'Enfermería',
    title: 'Inyectología a domicilio',
    shortTitle: 'Inyectología',
    h1: 'Inyectología a domicilio con fórmula médica',
    metaTitle: 'Inyectología a Domicilio Bogotá $95.000 COP | Atención Hoy Mismo | MedicExpress',
    metaDescription:
      'Inyectología a domicilio en Bogotá por $95.000 COP (tarifa base IM/SC/IV). Podemos validar síntomas y llevar el medicamento cotizando aplicación + medicamento.',
    summary:
      'Inyectología a domicilio en Bogotá por $95.000 COP (tarifa base para aplicación intramuscular, subcutánea o intravenosa con insumos estériles incluidos). Además, nuestro equipo clínico puede validar síntomas y proveer/llevar el medicamento cotizando aplicación + medicamento antes de la visita.',
    intent: 'Pacientes en Bogotá que necesitan inyectología a domicilio hoy mismo ($95.000 COP tarifa base IM/SC/IV) o aplicación + medicamento.',
    price: '$95.000 COP',
    highlights: ['Tarifa base $95.000 COP (IM / SC / IV)', 'Opción de proveer medicamento (aplicación + medicamento)', 'Atención hoy mismo en Bogotá con SMD Vital'],
    suitableFor: [
      'Aplicación de medicamentos formulados por vía intramuscular (IM), subcutánea (SC) o intravenosa (IV)',
      'Pacientes con dolor agudo, infección o tratamiento programado que necesitan que llevemos el medicamento previa validación de síntomas',
      'Adultos mayores y personas que desean evitar desplazamientos a droguerías o salas de urgencias'
    ],
    includes: [
      'Tarifa base de $95.000 COP: visita a domicilio en Bogotá por profesional de enfermería certificado en ReTHUS para aplicación IM, SC o IV.',
      'Insumos estériles de aplicación incluidos (jeringa desechable, aguja, torundas con alcohol antiséptico, guantes y guardián de biosanitarios).',
      'Verificación de los 10 correctos en administración de medicamentos y vigilancia post-aplicación inmediata.',
      'Modalidad con provisión de medicamento: el equipo clínico puede validar síntomas y proveer/llevar el medicamento cotizando aplicación + medicamento de forma transparente.'
    ],
    preparation: [
      'Enviar foto clara de la fórmula médica por WhatsApp o describir síntomas si solicita validación clínica y cotización con medicamento incluido.',
      'Si ya compró el medicamento, conservarlo según las indicaciones del fabricante (verificar cadena de frío si la requiere).',
      'Informar obligatoriamente antecedentes de alergias a medicamentos (penicilinas, AINES, dipirona, etc.) y enfermedades de base.'
    ],
    redFlags: [
      'Antecedente de alergia severa o shock anafiláctico previo al medicamento solicitado.',
      'Dificultad para respirar, hinchazón de labios/lengua, urticaria generalizada o mareo intenso tras una medicación.',
      'Medicamentos de uso exclusivamente intrahospitalario que requieren monitoreo en UCI o prueba de sensibilidad intradérmica hospitalaria.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta la inyectología a domicilio en Bogotá?',
        answer:
          'La tarifa base de inyectología a domicilio en Bogotá es de $95.000 COP (cubre aplicación intramuscular IM, subcutánea SC o intravenosa IV e insumos estériles de punción). Si necesitas que el equipo clínico valide síntomas y lleve el medicamento, cotizamos aplicación + medicamento antes de agendar.'
      },
      {
        question: '¿Ustedes pueden llevar el medicamento a domicilio si no lo tengo en casa?',
        answer:
          'Sí. Nuestro equipo clínico puede validar tus síntomas o tu fórmula por WhatsApp y proveer/llevar el medicamento al domicilio en Bogotá, entregándote previamente la cotización total de aplicación ($95.000 COP) + valor del medicamento.'
      },
      {
        question: '¿Qué vías de administración cubre la tarifa base de $95.000 COP?',
        answer:
          'Cubre la aplicación técnica por vía intramuscular (glútea o deltoidea), subcutánea o bolo intravenoso directo. Si el tratamiento requiere canalización e infusión en bolsa de suero (Solución Salina o Lactato de Ringer), aplica el servicio de suero de hidratación / sueroterapia desde $150.000 COP.'
      },
      {
        question: '¿Es obligatorio presentar fórmula médica para antibióticos o medicamentos controlados?',
        answer:
          'Sí. Por seguridad del paciente, antibióticos, corticoides de depósito y medicamentos de prescripción requieren validación de fórmula médica o valoración clínica previa.'
      }
    ],
    related: [
      'servicios-medicos/suero-multivitaminico',
      'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-medicos/cura-de-heridas-simples-y-complejas',
      'servicios-de-enfermeria/toma-de-signos-vitales'
    ]
  },
  {
    slug: 'servicios-de-enfermeria/toma-de-signos-vitales',
    category: 'Enfermería',
    title: 'Toma de signos vitales',
    shortTitle: 'Signos vitales',
    h1: 'Toma de signos vitales a domicilio',
    metaTitle: 'Toma de Signos Vitales a Domicilio Bogotá $100.000 COP | Atención Hoy Mismo | MedicExpress',
    metaDescription:
      'Toma de signos vitales a domicilio en Bogotá por $100.000 COP (presión arterial, oximetría, frecuencia cardíaca y temperatura). Atención hoy mismo con SMD Vital.',
    summary:
      'Visita de enfermería a domicilio en Bogotá por $100.000 COP para toma, registro e interpretación preventiva de signos vitales completos: presión arterial, frecuencia cardíaca, saturación de oxígeno (oximetría), frecuencia respiratoria y temperatura.',
    intent: 'Pacientes y familias en Bogotá que buscan control profesional de signos vitales a domicilio hoy mismo por $100.000 COP.',
    price: '$100.000 COP',
    highlights: ['Tarifa oficial $100.000 COP en Bogotá', 'Monitoreo completo con equipos calibrados', 'Atención hoy mismo coordinada por SMD Vital'],
    suitableFor: [
      'Control de hipertensión arterial, frecuencia cardíaca y saturación de oxígeno en adultos mayores',
      'Pacientes crónicos o posthospitalarios que requieren bitácora de signos vitales para su médico tratante',
      'Familias que desean verificar parámetros vitales en casa con equipos calibrados y criterio de enfermería'
    ],
    includes: [
      'Visita de profesional de enfermería a domicilio en Bogotá ($100.000 COP) con equipos biomédicos portátiles calibrados.',
      'Medición en reposo de presión arterial sistólica/diastólica, frecuencia cardíaca, oximetría de pulso (SpO2), temperatura corporal y frecuencia respiratoria.',
      'Entrega de reporte escrito o digital de las constantes vitales registradas para seguimiento médico.',
      'Identificación de valores fuera de rango y orientación inmediata hacia consulta médica ($170.000 COP) o urgencias si hay signos de alarma.'
    ],
    preparation: [
      'El paciente debe permanecer en reposo tranquilo al menos 10 minutos antes de la medición.',
      'Evitar consumo de café, tabaco o ejercicio físico en los 30 minutos previos a la toma de presión arterial.',
      'Tener a mano el cuaderno de controles previos y la lista de medicamentos antihipertensivos o cardiovasculares.'
    ],
    redFlags: [
      'Crisis hipertensiva (presión arterial mayor o igual a 180/120 mmHg) acompañada de dolor de pecho, dolor de cabeza severo, visión borrosa o falta de aire.',
      'Saturación de oxígeno muy baja con dificultad respiratoria, cianosis o alteración del estado de conciencia: acuda a urgencias (123).'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta la toma de signos vitales a domicilio en Bogotá?',
        answer:
          'La toma de signos vitales a domicilio en Bogotá tiene una tarifa oficial de $100.000 COP. Incluye la visita de enfermería, medición completa de parámetros vitales con equipos calibrados y entrega del registro.'
      },
      {
        question: '¿Qué parámetros se miden durante la visita de signos vitales?',
        answer:
          'Se miden y registran cinco parámetros fundamentales: presión arterial (tensión), frecuencia cardíaca (pulso), saturación de oxígeno en sangre (oximetría), frecuencia respiratoria y temperatura corporal.'
      },
      {
        question: '¿La toma de signos vitales reemplaza una consulta médica?',
        answer:
          'No. La toma de signos vitales ($100.000 COP) ofrece un registro objetivo de constantes vitales por enfermería. Si el paciente requiere diagnóstico médico, auscultación completa y fórmula médica, debe solicitar la consulta médica domiciliaria ($170.000 COP).'
      }
    ],
    related: [
      'servicios-medicos/electrocardiografia-basica',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario',
      'servicios-de-enfermeria/inyectologia-a-domicilio',
      'servicios-medicos/terapias-respiratorias'
    ]
  },
  {
    slug: 'servicios-de-enfermeria/acompanamiento-a-citas-medicas',
    price: '$110.000 COP / bloque de hasta 4 horas',
    category: 'Enfermería',
    title: 'Acompañamiento a citas médicas',
    shortTitle: 'Acompañamiento',
    h1: 'Acompañamiento a citas médicas para pacientes y familias',
    metaTitle: 'Acompañamiento a Citas Médicas Bogotá $110.000 COP (4h) | Enfermería | MedicExpress',
    metaDescription:
      'Acompañamiento a citas médicas y procedimientos en Bogotá por $110.000 COP (bloque de hasta 4 horas con profesional de enfermería). Agenda hoy por WhatsApp.',
    summary:
      'Acompañamiento a citas médicas, exámenes diagnósticos y procedimientos ambulatorios en Bogotá por $110.000 COP (bloque de hasta 4 horas con profesional de enfermería). Brindamos asistencia en movilidad, registro de indicaciones médicas y acompañamiento seguro de principio a fin.',
    intent: 'Familias en Bogotá que buscan acompañamiento a citas médicas y procedimientos por $110.000 COP (bloque de hasta 4 horas con profesional de enfermería).',
    highlights: ['$110.000 COP bloque de hasta 4 horas', 'Con profesional de enfermería en Bogotá', 'Apoyo en citas, exámenes y procedimientos'],
    suitableFor: [
      'Adultos mayores que asisten a consultas de especialista, controles o exámenes diagnósticos en Bogotá',
      'Pacientes que salen de procedimientos ambulatorios (endoscopias, cirugía ocular, imágenes con sedación) y requieren acompañante',
      'Familias cuyos hijos o cuidadores trabajan y necesitan un profesional de enfermería de confianza por un bloque de hasta 4 horas'
    ],
    includes: [
      'Tarifa oficial de $110.000 COP por un bloque de hasta 4 horas con personal de enfermería en Bogotá.',
      'Acompañamiento desde el domicilio o punto de encuentro en la clínica, asistencia en desplazamiento interno (silla de ruedas, caminador) y trámites de admisión.',
      'Presencia durante la consulta cuando sea permitido para tomar nota clara de diagnósticos, fórmulas, órdenes y recomendaciones del especialista.',
      'Retorno seguro del paciente a su hogar y entrega de reporte completo a la familia (el transporte o vehículo del paciente se acuerda aparte).'
    ],
    preparation: [
      'Reservar por WhatsApp indicando fecha y hora de la cita, clínica o centro médico en Bogotá, dirección de recogida y condición de movilidad del paciente.',
      'Dejar listos el documento de identidad original del paciente, orden médica, autorización de EPS/prepagada, historia clínica y cuota moderadora si aplica.',
      'Acordar previamente el medio de transporte en el que se desplazará el paciente junto con el profesional de enfermería.'
    ],
    redFlags: [
      'Paciente con inestabilidad clínica aguda, fiebre alta, dificultad respiratoria o dolor torácico antes de salir a una cita ambulatoria: debe priorizarse atención de urgencias.',
      'Pacientes que requieren traslado en ambulancia medicalizada con soporte de oxígeno continuo de alto flujo.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuánto cuesta el acompañamiento a citas médicas y procedimientos en Bogotá?',
        answer:
          'El servicio de acompañamiento a citas médicas y procedimientos en Bogotá tiene una tarifa oficial de $110.000 COP por un bloque de hasta 4 horas con profesional de enfermería.'
      },
      {
        question: '¿El valor de $110.000 COP incluye el costo del taxi o transporte?',
        answer:
          'El traslado del paciente se acuerda aparte. La tarifa de $110.000 COP cubre el bloque de hasta 4 horas del profesional de enfermería acompañando al paciente desde su salida, durante la cita o procedimiento y en su regreso.'
      },
      {
        question: '¿Qué pasa si la cita médica o el procedimiento demora más de las 4 horas?',
        answer:
          'Si la atención en la clínica se extiende más allá del bloque de 4 horas ($110.000 COP), la hora adicional de enfermería tiene un valor oficial de $20.000 COP previa coordinación.'
      },
      {
        question: '¿Pueden acompañar a un adulto mayor a procedimientos con sedación como endoscopia o colonoscopia?',
        answer:
          'Sí. Las clínicas exigen un acompañante adulto responsable para dar el alta tras procedimientos ambulatorios. Nuestro personal de enfermería acompaña al paciente, recibe las indicaciones postprocedimiento y lo asiste hasta dejarlo instalado en casa.'
      }
    ],
    related: [
      'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-de-enfermeria/toma-de-signos-vitales',
      'servicios-de-enfermeria/inyectologia-a-domicilio'
    ]
  },
  {
    slug: 'laboratorio-clinico/laboratorio-a-domicilio',
    category: 'Laboratorio clínico',
    title: 'Laboratorio a domicilio',
    shortTitle: 'Laboratorio',
    h1: 'Laboratorio clínico a domicilio con toma de muestras en casa',
    metaTitle: 'Consulta de laboratorio a domicilio Bogotá | Orientación por WhatsApp | MedicExpress',
    metaDescription:
      'Consulta disponibilidad de laboratorio clínico a domicilio en Bogotá y preparación de muestras por WhatsApp con SMD Vital.',
    summary:
      'Canal informativo para consultar solicitudes de toma de muestras y requisitos de preparación en Bogotá antes de cualquier agendamiento.',
    intent: 'Usuarios que consultan disponibilidad para exámenes o muestras sin ir al laboratorio.',
    highlights: ['Validación previa por WhatsApp', 'Orientación sobre requisitos de preparación', 'Alternativa de valoración médica ($170.000 COP)'],
    suitableFor: ['Adultos mayores', 'Pacientes con movilidad reducida', 'Consultas de preparación de exámenes'],
    includes: [
      'Revisión de tu solicitud por WhatsApp para confirmar posibilidad de atención, requisitos preanalíticos y alcance.',
      'Orientación hacia consulta médica domiciliaria ($170.000 COP) o teleconsulta ($90.000 COP) si necesitas orden o lectura médica de exámenes.'
    ],
    preparation: [
      'Tener orden médica vigente con el nombre exacto de las pruebas solicitadas.',
      'Confirmar horas de ayuno requeridas según el tipo de examen.'
    ],
    redFlags: [
      'Síntomas agudos graves como dolor torácico, dificultad respiratoria, fiebre alta o desmayo requieren atención de urgencias, no toma de laboratorio ambulatoria.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Qué exámenes se pueden consultar por WhatsApp?',
        answer:
          'Envía la orden médica por WhatsApp para que el equipo valide posibilidad de atención, preparación requerida y condiciones antes de reservar.'
      },
      {
        question: '¿Debo estar en ayunas?',
        answer:
          'Pruebas como perfil lipídico o glicemia basal suelen requerir ayuno de 8 a 12 horas. Se confirma según cada examen específico.'
      }
    ],
    related: [
      'laboratorio-clinico/toma-de-muestra-a-domicilio',
      'laboratorio-clinico/prueba-de-antigeno-a-domicilio',
      'servicios-medicos/valoracion-medica-a-domicilio',
      'servicios-medicos/teleconsulta-medica'
    ]
  },
  {
    slug: 'laboratorio-clinico/toma-de-muestra-a-domicilio',
    category: 'Laboratorio clínico',
    title: 'Toma de muestra a domicilio',
    shortTitle: 'Toma de muestra',
    h1: 'Toma de muestras a domicilio',
    metaTitle: 'Toma de muestras a domicilio Bogotá | Orientación por WhatsApp | MedicExpress',
    metaDescription:
      'Consulta tu solicitud de toma de muestras a domicilio en Bogotá por WhatsApp. Confirmamos posibilidad de atención y requisitos antes de reservar.',
    summary:
      'Canal para consultar posibilidad de toma de muestras en casa según disponibilidad, preparación requerida y tipo de examen.',
    intent: 'Pacientes que consultan por toma de muestras sin desplazarse.',
    highlights: ['Consulta por WhatsApp', 'Orientación de preparación', 'Validación previa a cualquier reserva'],
    suitableFor: ['Exámenes programados', 'Pacientes con movilidad limitada', 'Seguimiento médico'],
    includes: [
      'Verificación de la orden médica, zona y disponibilidad operativa antes de confirmar.',
      'Orientación sobre preparación del paciente y alternativa de valoración médica si se requiere.'
    ],
    preparation: [
      'Compartir foto legible de la orden médica por WhatsApp.',
      'Mantener hidratación con agua pura si el examen exige ayuno y no hay restricción hídrica.'
    ],
    redFlags: [
      'Deshidratación severa, fiebre alta, sangrado activo o lipotimia requieren valoración médica prioritaria o urgencias.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cómo se confirma el tipo de muestra y la disponibilidad?',
        answer:
          'Envías el examen solicitado por WhatsApp y el equipo valida posibilidad de atención, preparación y condiciones antes de reservar.'
      },
      {
        question: '¿Si ya tengo resultados y necesito que un médico los revise hoy mismo, qué servicio pido?',
        answer:
          'Puedes agendar una teleconsulta de medicina general por $90.000 COP (no emite incapacidades) o una consulta médica domiciliaria en Bogotá por $170.000 COP.'
      }
    ],
    related: [
      'laboratorio-clinico/laboratorio-a-domicilio',
      'laboratorio-clinico/toma-de-muestra-pcr-covid-19-a-domicilio',
      'servicios-medicos/teleconsulta-medica',
      'servicios-medicos/valoracion-medica-a-domicilio'
    ]
  },
  {
    slug: 'laboratorio-clinico/toma-de-muestra-pcr-covid-19-a-domicilio',
    category: 'Laboratorio clínico',
    title: 'Toma de muestra PCR COVID-19 a domicilio',
    shortTitle: 'PCR COVID-19',
    h1: 'Toma de muestra PCR COVID-19 a domicilio',
    metaTitle: 'PCR COVID-19 a domicilio Bogotá | Consulta Disponibilidad | MedicExpress',
    metaDescription:
      'Consulta disponibilidad para toma de muestra PCR COVID-19 a domicilio en Bogotá o valoración médica respiratoria ($170.000 COP) por WhatsApp.',
    summary:
      'Página informativa para validar disponibilidad de prueba PCR, requisitos o alternativa de valoración médica domiciliaria ($170.000 COP) y teleconsulta ($90.000 COP).',
    intent: 'Usuarios que consultan por prueba PCR COVID-19 o atención respiratoria en casa.',
    highlights: ['Validación de disponibilidad', 'Orientación de requisitos', 'Alternativa de valoración médica $170.000 COP'],
    suitableFor: ['Consultas de disponibilidad de pruebas', 'Pacientes con síntomas respiratorios leves', 'Orientación familiar en Bogotá'],
    includes: [
      'Confirmación por WhatsApp de disponibilidad actual o derivación a valoración médica domiciliaria ($170.000 COP) / teleconsulta ($90.000 COP).',
      'Orientación sobre signos de alarma respiratorios.'
    ],
    preparation: [
      'Informar síntomas actuales, fecha de inicio de síntomas y localidad en Bogotá.',
      'Utilizar tapabocas en caso de requerir visita médica presencial.'
    ],
    redFlags: [
      'Dificultad respiratoria, saturación de oxígeno baja (<90% en Bogotá), dolor en el pecho o confusión requieren acudir de inmediato a urgencias.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿La prueba PCR siempre está disponible a domicilio?',
        answer:
          'La disponibilidad debe confirmarse previamente por WhatsApp. Si presentas síntomas respiratorios y necesitas evaluación clínica hoy mismo, podemos coordinar consulta médica domiciliaria ($170.000 COP) o teleconsulta ($90.000 COP).'
      },
      {
        question: '¿Qué hago si tengo dificultad respiratoria?',
        answer:
          'La dificultad respiratoria es un signo de alarma vital y requiere acudir de inmediato a urgencias hospitalarias, no esperar una prueba domiciliaria.'
      }
    ],
    related: [
      'laboratorio-clinico/prueba-de-antigeno-a-domicilio',
      'servicios-medicos/atencion-a-pacientes-con-covid-19',
      'servicios-medicos/terapias-respiratorias',
      'servicios-medicos/valoracion-medica-a-domicilio'
    ]
  },
  {
    slug: 'laboratorio-clinico/prueba-de-antigeno-a-domicilio',
    category: 'Laboratorio clínico',
    title: 'Prueba de antígeno a domicilio',
    shortTitle: 'Antígeno',
    h1: 'Prueba de antígeno a domicilio',
    metaTitle: 'Prueba de antígeno a domicilio Bogotá | Consulta Disponibilidad | MedicExpress',
    metaDescription:
      'Consulta disponibilidad para prueba de antígeno a domicilio en Bogotá o agenda valoración médica domiciliaria ($170.000 COP) por WhatsApp.',
    summary:
      'Canal informativo para consultar disponibilidad de prueba de antígeno o coordinar valoración médica respiratoria en casa ($170.000 COP) con SMD Vital Bogotá.',
    intent: 'Usuarios que consultan por prueba rápida o evaluación de síntomas respiratorios en casa.',
    highlights: ['Consulta de disponibilidad', 'Orientación médica responsable', 'Conexión con SMD Vital Bogotá'],
    suitableFor: ['Síntomas respiratorios leves', 'Seguimiento familiar', 'Consultas de disponibilidad en Bogotá'],
    includes: [
      'Revisión de disponibilidad por WhatsApp antes de reservar.',
      'Orientación hacia consulta médica domiciliaria ($170.000 COP), teleconsulta ($90.000 COP) o terapia respiratoria según valoración clínica.'
    ],
    preparation: [
      'Indicar días de evolución de los síntomas respiratorios y localidad en Bogotá.',
      'Contar con documento de identidad del paciente.'
    ],
    redFlags: [
      'Dificultad respiratoria, dolor torácico, cianosis o deterioro general requieren atención inmediata en urgencias.'
    ],
    process: commonProcess,
    faqs: [
      {
        question: '¿La prueba confirma todos los casos respiratorios?',
        answer:
          'Cada prueba tiene ventana diagnóstica y limitaciones. La evaluación clínica por un médico (a domicilio por $170.000 COP o por teleconsulta a $90.000 COP) permite definir el manejo adecuado según los síntomas.'
      },
      {
        question: '¿Qué signos respiratorios requieren urgencias?',
        answer:
          'Dificultad para respirar, dolor torácico opresivo, confusión, somnolencia extrema o labios azulados requieren acudir de inmediato a urgencias.'
      }
    ],
    related: [
      'laboratorio-clinico/toma-de-muestra-pcr-covid-19-a-domicilio',
      'servicios-medicos/atencion-a-pacientes-con-covid-19',
      'servicios-medicos/terapias-respiratorias',
      'servicios-medicos/valoracion-medica-a-domicilio'
    ]
  }
];

export const categories = Array.from(new Set(services.map((service) => service.category)));

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

// Catálogo operativo confirmado; conservar las URL informativas.
export function requiresAvailabilityReview(service: Service) {
  return service.category === 'Laboratorio clínico' || [
    'laboratorio-a-domicilio-colombia',
    'servicios-medicos/electrocardiografia-basica',
    'servicios-medicos/extraccion-y-cuidado-para-unas-encarnadas'
  ].includes(service.slug);
}

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter((service) => service.category === category);
}

export function getRelatedServices(service: Service) {
  return service.related
    .map((slug) => getServiceBySlug(slug))
    .filter((related): related is Service => Boolean(related));
}

export function normalizeOriginPath(source = '/'): string {
  const raw = (source ?? '/').trim() || '/';
  let pathname = raw;
  try {
    pathname = new URL(raw, siteConfig.url).pathname;
  } catch {
    // Keep raw path
  }
  const collapsed = pathname.replace(/\/{2,}/g, '/');
  if (!collapsed.startsWith('/')) return `/${collapsed.replace(/\/+$/, '')}/`;
  if (collapsed === '/') return '/';
  return collapsed.endsWith('/') ? collapsed : `${collapsed}/`;
}

export function getWhatsappUrl(_serviceName?: string, source = '/') {
  const normalizedPath = normalizeOriginPath(source);
  const origin = `[Origen: MedicExpress | ${normalizedPath}]`;
  const text = `Hola, vengo de MedicExpress y quiero recibir orientación para un servicio médico. Entiendo que la atención será coordinada por SMD Vital Bogotá. ${origin}`;

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

export function getSmdReferralUrl(path = '/', source?: string) {
  const url = new URL(path, siteConfig.mainBrandUrl);
  if (source) {
    url.searchParams.set('ref', `medicexpress_${source}`);
  }
  return url.toString();
}

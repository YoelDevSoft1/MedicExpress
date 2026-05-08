export const siteConfig = {
  name: 'MedicExpress',
  url: 'https://medicexpress.com.co',
  phone: '+57 304 291 2564',
  whatsappNumber: '573042912564',
  mainBrand: 'SMD Vital Bogotá',
  mainBrandUrl: 'https://smdvitalbogota.com',
  logoPath: '/img/logo/logo-square.svg',
  referralMessage: 'La atención será coordinada por SMD Vital Bogotá.',
  defaultDescription:
    'Servicios médicos a domicilio, teleconsulta, enfermería y laboratorio en casa con orientación humana y agendamiento por WhatsApp.'
};

export type ServiceCategory = 'Cobertura nacional' | 'Servicios médicos' | 'Enfermería' | 'Laboratorio clínico';

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
  process: string[];
  faqs: Array<{ question: string; answer: string }>;
  related: string[];
};

const commonProcess = [
  'Escribes por WhatsApp y cuentas brevemente qué necesitas.',
  'Validamos zona, horario, tipo de servicio y datos básicos del paciente.',
  'Te orientamos sobre disponibilidad, alcance del servicio y siguiente paso responsable.',
  'Si el caso es apto para atención domiciliaria o teleconsulta, coordinamos el agendamiento.'
];

const nationalProcess = [
  'Escribes por WhatsApp e indicas ciudad, servicio requerido y motivo de consulta.',
  'Clasificamos si la solicitud puede orientarse por teleconsulta, atención presencial o ruta local responsable.',
  'En Bogotá, la atención operativa será coordinada por SMD Vital Bogotá según disponibilidad y alcance del servicio.',
  'En otras ciudades, MedicExpress registra la solicitud, orienta el siguiente paso y prioriza opciones remotas cuando aplique.'
];

export const services: Service[] = [
  {
    slug: 'colombia',
    category: 'Cobertura nacional',
    title: 'Servicios médicos en casa Colombia',
    shortTitle: 'MedicExpress Colombia',
    h1: 'Servicios médicos en casa y orientación de salud para Colombia',
    metaTitle: 'Servicios médicos en casa Colombia | MedicExpress y SMD Vital',
    metaDescription:
      'MedicExpress orienta solicitudes de médico a domicilio, teleconsulta, enfermería y laboratorio en Colombia. En Bogotá, la atención se coordina con SMD Vital.',
    summary:
      'MedicExpress funciona como puerta de entrada nacional para pacientes y familias que buscan servicios médicos en casa, teleconsulta u orientación inicial. La cobertura presencial depende de ciudad, servicio y disponibilidad; en Bogotá la coordinación operativa se realiza con SMD Vital Bogotá.',
    intent: 'Usuarios en Colombia que buscan una ruta clara para atención médica domiciliaria, teleconsulta o servicios de salud en casa.',
    highlights: ['Entrada nacional de solicitudes', 'Bogotá coordinado por SMD Vital', 'Teleconsulta y orientación inicial'],
    suitableFor: [
      'Personas que buscan servicios médicos en casa en Colombia',
      'Familias que necesitan orientación rápida antes de desplazarse',
      'Pacientes en Bogotá que quieren coordinar atención con SMD Vital'
    ],
    process: nationalProcess,
    faqs: [
      {
        question: '¿MedicExpress atiende presencialmente en toda Colombia?',
        answer:
          'MedicExpress recibe y orienta solicitudes a nivel nacional. La atención presencial depende de ciudad, servicio, disponibilidad y validación del caso. En Bogotá, la coordinación será realizada por SMD Vital Bogotá.'
      },
      {
        question: '¿Qué pasa si estoy fuera de Bogotá?',
        answer:
          'Podemos orientar el siguiente paso, evaluar si aplica teleconsulta y registrar la solicitud para priorizar cobertura futura. No prometemos atención presencial donde no exista disponibilidad confirmada.'
      },
      {
        question: '¿MedicExpress reemplaza urgencias?',
        answer:
          'No. Si hay dificultad respiratoria severa, dolor fuerte en el pecho, pérdida de conciencia, sangrado abundante o deterioro importante, se debe acudir a urgencias o llamar a la línea local de emergencias.'
      }
    ],
    related: ['teleconsulta-medica-colombia', 'medico-a-domicilio-colombia', 'enfermeria-a-domicilio-colombia']
  },
  {
    slug: 'teleconsulta-medica-colombia',
    category: 'Cobertura nacional',
    title: 'Teleconsulta médica Colombia',
    shortTitle: 'Teleconsulta Colombia',
    h1: 'Teleconsulta médica en Colombia para orientación inicial',
    metaTitle: 'Teleconsulta médica Colombia | Orientación por WhatsApp',
    metaDescription:
      'Consulta orientación por teleconsulta médica en Colombia. MedicExpress conecta solicitudes con el canal de atención de SMD Vital cuando aplica.',
    summary:
      'Una página nacional para captar pacientes que necesitan hablar con un profesional, resolver dudas no urgentes o definir si conviene atención domiciliaria, consulta presencial o una ruta de urgencias.',
    intent: 'Personas en Colombia que buscan consulta médica virtual, médico online u orientación médica por WhatsApp.',
    highlights: ['Orientación sin desplazamiento', 'Útil para dudas no urgentes', 'Derivación responsable si hay alarma'],
    suitableFor: ['Dudas médicas no urgentes', 'Seguimiento de síntomas leves o moderados', 'Familias que necesitan saber qué paso tomar'],
    process: nationalProcess,
    faqs: [
      {
        question: '¿La teleconsulta sirve para cualquier caso?',
        answer:
          'No. Algunos casos requieren examen físico, pruebas o atención presencial. Si existen signos de alarma, se debe acudir a urgencias.'
      },
      {
        question: '¿Puedo iniciar por WhatsApp?',
        answer:
          'Sí. Por WhatsApp se solicita ciudad, edad, motivo de consulta, tiempo de evolución y datos básicos para orientar el canal adecuado.'
      },
      {
        question: '¿Puede terminar en atención domiciliaria?',
        answer:
          'Cuando el caso es apto y existe disponibilidad en la ciudad, puede orientarse hacia atención presencial. En Bogotá, la coordinación se realiza con SMD Vital Bogotá.'
      }
    ],
    related: ['colombia', 'servicios-medicos/teleconsulta-medica', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'medico-a-domicilio-colombia',
    category: 'Cobertura nacional',
    title: 'Médico a domicilio Colombia',
    shortTitle: 'Médico Colombia',
    h1: 'Médico a domicilio en Colombia: orientación y disponibilidad por ciudad',
    metaTitle: 'Médico a domicilio Colombia | MedicExpress',
    metaDescription:
      'Busca médico a domicilio en Colombia con orientación por WhatsApp. En Bogotá, la atención será coordinada por SMD Vital Bogotá.',
    summary:
      'MedicExpress capta solicitudes nacionales de médico a domicilio y ayuda a clasificar ciudad, necesidad, urgencia relativa y disponibilidad. La prioridad es orientar con claridad y convertir los casos aptos hacia atención real.',
    intent: 'Usuarios que buscan médico a domicilio Colombia, doctor en casa o consulta médica domiciliaria.',
    highlights: ['Clasificación por ciudad', 'Bogotá con SMD Vital', 'Orientación antes de agendar'],
    suitableFor: ['Pacientes que necesitan valoración médica en casa', 'Adultos mayores o personas con movilidad limitada', 'Familias que quieren evitar desplazamientos innecesarios'],
    process: nationalProcess,
    faqs: [
      {
        question: '¿En qué ciudades hay médico a domicilio?',
        answer:
          'La disponibilidad debe confirmarse por WhatsApp. Bogotá es el centro operativo principal con coordinación de SMD Vital. Otras ciudades se validan según capacidad, servicio y oportunidad de cobertura.'
      },
      {
        question: '¿Qué datos debo enviar?',
        answer:
          'Ciudad, localidad o barrio, nombre y edad del paciente, motivo de consulta, tiempo de evolución, horario deseado y número de contacto.'
      },
      {
        question: '¿Puedo pedir atención urgente por esta vía?',
        answer:
          'MedicExpress no reemplaza una ruta de urgencias. Ante signos graves, se debe acudir a emergencias. Para casos no vitales, WhatsApp ayuda a orientar el siguiente paso.'
      }
    ],
    related: ['colombia', 'teleconsulta-medica-colombia', 'servicios-medicos/servicio-medico-a-domicilio']
  },
  {
    slug: 'enfermeria-a-domicilio-colombia',
    category: 'Cobertura nacional',
    title: 'Enfermería a domicilio Colombia',
    shortTitle: 'Enfermería Colombia',
    h1: 'Enfermería a domicilio en Colombia para cuidados y procedimientos programados',
    metaTitle: 'Enfermería a domicilio Colombia | MedicExpress',
    metaDescription:
      'Consulta enfermería a domicilio en Colombia para adultos mayores, inyectología, signos vitales y cuidados programados. Bogotá coordinado por SMD Vital.',
    summary:
      'Página nacional para solicitudes de enfermería en casa: adultos mayores, procedimientos programados, aplicación de medicamentos formulados, signos vitales y apoyo familiar. La disponibilidad presencial se valida por ciudad.',
    intent: 'Familias en Colombia que buscan enfermera a domicilio, cuidados en casa o apoyo para adulto mayor.',
    highlights: ['Adulto mayor y cuidadores', 'Procedimientos programados', 'Validación de ciudad y servicio'],
    suitableFor: ['Adultos mayores que necesitan apoyo en casa', 'Aplicación de medicamentos con fórmula', 'Seguimiento básico y toma de signos vitales'],
    process: nationalProcess,
    faqs: [
      {
        question: '¿La enfermería puede ser recurrente?',
        answer:
          'Puede consultarse disponibilidad para visitas programadas o seguimiento. El alcance depende de ciudad, horario, tipo de cuidado y condiciones del paciente.'
      },
      {
        question: '¿Aplican medicamentos sin fórmula?',
        answer:
          'No se debe aplicar medicación sin indicación profesional. Para inyectología se valida fórmula o soporte médico cuando corresponda.'
      },
      {
        question: '¿Cómo se coordina en Bogotá?',
        answer:
          'En Bogotá, la solicitud será orientada hacia el canal operativo de SMD Vital Bogotá para validar disponibilidad, precio y alcance.'
      }
    ],
    related: ['colombia', 'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario', 'servicios-de-enfermeria/inyectologia-a-domicilio']
  },
  {
    slug: 'laboratorio-a-domicilio-colombia',
    category: 'Cobertura nacional',
    title: 'Laboratorio a domicilio Colombia',
    shortTitle: 'Laboratorio Colombia',
    h1: 'Laboratorio a domicilio en Colombia y toma de muestras en casa',
    metaTitle: 'Laboratorio a domicilio Colombia | MedicExpress',
    metaDescription:
      'Consulta toma de muestras y laboratorio a domicilio en Colombia. MedicExpress orienta requisitos, disponibilidad y coordinación por WhatsApp.',
    summary:
      'MedicExpress capta solicitudes nacionales de laboratorio a domicilio, toma de muestras y preparación de exámenes. La disponibilidad depende de ciudad, tipo de prueba, horario y requisitos técnicos.',
    intent: 'Usuarios que buscan laboratorio clínico a domicilio, toma de muestras en casa o exámenes sin desplazarse.',
    highlights: ['Preparación de exámenes', 'Validación del tipo de muestra', 'Bogotá coordinado por SMD Vital'],
    suitableFor: ['Exámenes programados', 'Pacientes con movilidad reducida', 'Familias que necesitan toma de muestras en casa'],
    process: nationalProcess,
    faqs: [
      {
        question: '¿Todos los exámenes se pueden tomar en casa?',
        answer:
          'No necesariamente. Depende del tipo de muestra, preparación, estabilidad de la prueba, ciudad y disponibilidad del servicio.'
      },
      {
        question: '¿Debo enviar la orden médica?',
        answer:
          'Cuando exista orden o listado de exámenes, enviarlo por WhatsApp ayuda a validar requisitos, preparación y disponibilidad.'
      },
      {
        question: '¿Cómo funciona en Bogotá?',
        answer:
          'En Bogotá, la orientación y coordinación operativa se deriva hacia SMD Vital Bogotá según disponibilidad y alcance confirmado.'
      }
    ],
    related: ['colombia', 'laboratorio-clinico/laboratorio-a-domicilio', 'laboratorio-clinico/toma-de-muestra-a-domicilio']
  },
  {
    slug: 'servicios-medicos/servicio-medico-a-domicilio',
    category: 'Servicios médicos',
    title: 'Servicio médico a domicilio',
    shortTitle: 'Médico a domicilio',
    h1: 'Servicio médico a domicilio con orientación rápida',
    metaTitle: 'Servicio médico a domicilio | MedicExpress',
    metaDescription:
      'Solicita orientación para servicio médico a domicilio. Atención humana, agendamiento por WhatsApp y conexión con SMD Vital.',
    summary:
      'Una entrada clara para pacientes y familias que necesitan orientación médica en casa sin desplazamientos innecesarios.',
    intent: 'Personas que buscan atención médica domiciliaria con respuesta rápida y confiable.',
    highlights: ['Orientación inicial por WhatsApp', 'Coordinación de disponibilidad', 'Atención conectada con SMD Vital'],
    suitableFor: ['Dolencias generales no vitales', 'Seguimiento de síntomas', 'Adultos mayores y familias'],
    process: commonProcess,
    faqs: [
      {
        question: '¿El servicio reemplaza una urgencia hospitalaria?',
        answer:
          'No. Si hay dificultad respiratoria severa, dolor intenso en el pecho, pérdida de conciencia, sangrado abundante u otro signo de alarma, se debe acudir a una ruta de urgencias.'
      },
      {
        question: '¿Puedo pedir disponibilidad por WhatsApp?',
        answer:
          'Sí. El canal de WhatsApp permite confirmar zona, horario y tipo de servicio antes de avanzar con el agendamiento.'
      }
    ],
    related: ['servicios-medicos/valoracion-medica-a-domicilio', 'servicios-medicos/teleconsulta-medica']
  },
  {
    slug: 'servicios-medicos/valoracion-medica-a-domicilio',
    category: 'Servicios médicos',
    title: 'Valoración médica a domicilio',
    shortTitle: 'Valoración médica',
    h1: 'Valoración médica a domicilio para orientar el cuidado',
    metaTitle: 'Valoración médica a domicilio | MedicExpress',
    metaDescription:
      'Solicita valoración médica a domicilio con orientación profesional y agendamiento por WhatsApp.',
    summary:
      'Servicio pensado para evaluar el motivo de consulta, orientar el cuidado y definir si el paciente requiere seguimiento, remision o manejo domiciliario.',
    intent: 'Familias que necesitan una evaluación médica en casa con lenguaje claro.',
    highlights: ['Evaluación del motivo de consulta', 'Orientación de siguiente paso', 'Ideal para pacientes con movilidad limitada'],
    suitableFor: ['Adultos mayores', 'Síntomas generales', 'Seguimientos y controles no urgentes'],
    process: commonProcess,
    faqs: [
      {
        question: '¿La valoración incluye medicamentos?',
        answer:
          'La indicación de medicamentos depende exclusivamente del criterio del profesional de salud y de la valoración del caso.'
      },
      {
        question: '¿Qué datos debo envíar?',
        answer:
          'Nombre, edad, ubicación, motivo de consulta, tiempo de evolución y horario deseado suelen ser suficientes para iniciar.'
      }
    ],
    related: ['servicios-medicos/servicio-medico-a-domicilio', 'servicios-medicos/teleconsulta-medica']
  },
  {
    slug: 'servicios-medicos/teleconsulta-medica',
    category: 'Servicios médicos',
    title: 'Teleconsulta médica',
    shortTitle: 'Teleconsulta',
    h1: 'Teleconsulta médica para orientación sin desplazarte',
    metaTitle: 'Teleconsulta médica | MedicExpress',
    metaDescription:
      'Agenda orientación por teleconsulta médica. Ideal para dudas, seguimiento y casos que no requieren visita inmediata.',
    summary:
      'Alternativa práctica para recibir orientación médica inicial, resolver dudas y definir si conviene atención presencial.',
    intent: 'Usuarios que quieren hablar con un profesional sin salir de casa.',
    highlights: ['Respuesta sin desplazamiento', 'Orientación de siguiente paso', 'Canal útil para seguimiento'],
    suitableFor: ['Dudas médicas no urgentes', 'Seguimiento de síntomas', 'Orientación familiar'],
    process: commonProcess,
    faqs: [
      {
        question: '¿La teleconsulta sirve para cualquier caso?',
        answer:
          'No. Algunos casos requieren examen fisico o atención presencial. En signos de alarma se debe acudir a urgencias.'
      },
      {
        question: '¿Cómo se agenda?',
        answer:
          'Por WhatsApp se valida motivo de consulta, datos básicos y disponibilidad para coordinar el canal de atención.'
      }
    ],
    related: ['servicios-medicos/servicio-medico-a-domicilio', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'servicios-medicos/terapias-respiratorias',
    category: 'Servicios médicos',
    title: 'Terapias respiratorias',
    shortTitle: 'Terapia respiratoria',
    h1: 'Terapias respiratorias a domicilio con coordinación profesional',
    metaTitle: 'Terapias respiratorias a domicilio | MedicExpress',
    metaDescription:
      'Solicita orientación para terapia respiratoria a domicilio. Coordinación por WhatsApp y atención responsable.',
    summary:
      'Servicio orientado a pacientes que requieren apoyo respiratorio domiciliario, bajo indicaciónes y criterio profesional.',
    intent: 'Pacientes con necesidad de apoyo respiratorio no hospitalario.',
    price: 'Desde $115.000',
    highlights: ['Atención en casa', 'Validación del caso', 'Coordinación según disponibilidad'],
    suitableFor: ['Apoyo respiratorio indicado', 'Seguimientos', 'Pacientes con movilidad limitada'],
    process: commonProcess,
    faqs: [
      {
        question: '¿Puedo solicitarla sin orden médica?',
        answer:
          'Se revisa el caso por WhatsApp. Cuándo aplica, se puede solicitar información clinica adicional para orientar el servicio responsablemente.'
      },
      {
        question: '¿Atienden síntomas respiratorios severos?',
        answer:
          'Los síntomas severos requieren valoración urgente. MedicExpress no reemplaza una ruta de urgencias.'
      }
    ],
    related: ['servicios-medicos/teleconsulta-medica', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'servicios-medicos/electrocardiografia-basica',
    category: 'Servicios médicos',
    title: 'Electrocardiografía básica',
    shortTitle: 'Electrocardiograma',
    h1: 'Electrocardiograma a domicilio con orientación responsable',
    metaTitle: 'Electrocardiograma a domicilio Bogotá | MedicExpress',
    metaDescription:
      'Solicita electrocardiograma a domicilio en Bogotá. Coordinación por WhatsApp y atención realizada por SMD Vital.',
    summary:
      'Apoyo diagnóstico domiciliario para pacientes que requieren un electrocardiograma básico según indicación o necesidad de seguimiento.',
    intent: 'Usuarios que necesitan electrocardiograma en casa sin desplazarse.',
    highlights: ['Toma en domicilio', 'Coordinación de horario', 'Orientación del proceso'],
    suitableFor: ['Controles solicitados', 'Adultos mayores', 'Seguimiento cardiovascular no urgente'],
    process: commonProcess,
    faqs: [
      {
        question: 'Entregan interpretación médica?',
        answer:
          'La interpretación depende del profesional correspondiente y del alcance confirmado al agendar.'
      },
      {
        question: '¿Qué pasa si hay dolor de pecho fuerte?',
        answer:
          'Dolor de pecho intenso, dificultad respiratoria o desmayo son signos de alarma y requieren ruta de urgencias.'
      }
    ],
    related: ['servicios-medicos/valoracion-medica-a-domicilio', 'servicios-de-enfermeria/toma-de-signos-vitales']
  },
  {
    slug: 'servicios-medicos/suero-multivitaminico',
    category: 'Servicios médicos',
    title: 'Suero multivitamínico',
    shortTitle: 'Sueroterapia',
    h1: 'Suero multivitamínico a domicilio con valoración responsable',
    metaTitle: 'Suero multivitamínico a domicilio Bogotá | MedicExpress',
    metaDescription:
      'Consulta suero multivitamínico a domicilio en Bogotá desde $185.000. Atención coordinada por SMD Vital.',
    summary:
      'Servicio que debe realizarse con criterio responsable, validando antecedentes, motivo de solicitud y condiciones del paciente.',
    intent: 'Usuarios que buscan hidratación o sueroterapia en casa con supervisión adecuada.',
    price: 'Desde $185.000',
    highlights: ['Validación previa', 'Atención domiciliaria', 'Proceso claro por WhatsApp'],
    suitableFor: ['Solicitudes de hidratación', 'Pacientes que requieren evaluación previa', 'Servicios programados'],
    process: commonProcess,
    faqs: [
      {
        question: '¿Todos pueden recibir sueroterapia?',
        answer:
          'No necesariamente. Se deben validar antecedentes, síntomas y criterio profesional antes de realizar el servicio.'
      },
      {
        question: 'Promete recuperacion inmediata?',
        answer:
          'No. La respuesta depende de cada paciente y debe ser orientada por un profesional cuando corresponda.'
      }
    ],
    related: ['servicios-medicos/valoracion-medica-a-domicilio', 'servicios-de-enfermeria/inyectologia-a-domicilio']
  },
  {
    slug: 'servicios-medicos/cura-de-heridas-simples-y-complejas',
    category: 'Servicios médicos',
    title: 'Cura de heridas simples y complejas',
    shortTitle: 'Cura de heridas',
    h1: 'Cura de heridas a domicilio con atención cuidadosa',
    metaTitle: 'Cura de heridas a domicilio | MedicExpress',
    metaDescription:
      'Solicita cura de heridas simples y complejas a domicilio. Orientación por WhatsApp y manejo responsable.',
    summary:
      'Atención domiciliaria para curaciones que requieren higiene, tecnica, seguimiento y claridad sobre signos de alarma.',
    intent: 'Pacientes que necesitan curacion en casa despues de heridas, procedimientos o lesiones.',
    price: 'Desde $150.000',
    highlights: ['Curacion en casa', 'Validación del tipo de herida', 'Orientación sobre seguimiento'],
    suitableFor: ['Heridas simples', 'Heridas postprocedimiento', 'Pacientes con dificultad para desplazarse'],
    process: commonProcess,
    faqs: [
      {
        question: '¿Atienden heridas infectadas?',
        answer:
          'Se debe revisar el caso. Si hay signos de alarma como fiebre, dolor intenso, secreción abundante o mal estado general, puede requerirse atención prioritaria.'
      },
      {
        question: '¿Debo envíar foto?',
        answer:
          'Puede ayudar para orientar el servicio, siempre cuidando la privacidad del paciente y envíando solo lo necesario.'
      }
    ],
    related: ['servicios-medicos/sutura-y-retiro-de-puntos', 'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario']
  },
  {
    slug: 'servicios-medicos/sutura-y-retiro-de-puntos',
    category: 'Servicios médicos',
    title: 'Sutura y retiro de puntos',
    shortTitle: 'Sutura y puntos',
    h1: 'Sutura y retiro de puntos a domicilio con revisión previa',
    metaTitle: 'Sutura y retiro de puntos a domicilio Bogotá | MedicExpress',
    metaDescription:
      'Solicita orientación para sutura o retiro de puntos a domicilio en Bogotá. Revisión previa y atención coordinada por SMD Vital.',
    summary:
      'Servicio para heridas y controles de puntos que requieren revisión del caso, tecnica adecuada y orientación clara.',
    intent: 'Usuarios que necesitan sutura, revisión o retiro de puntos sin desplazarse.',
    price: 'Retiro desde $100.000 / sutura desde $150.000',
    highlights: ['Revisión previa', 'Atención programada', 'Orientación de signos de alarma'],
    suitableFor: ['Retiro de puntos', 'Heridas aptas para manejo domiciliario', 'Seguimiento postprocedimiento'],
    process: commonProcess,
    faqs: [
      {
        question: '¿Todas las heridas se pueden suturar en casa?',
        answer:
          'No. Depende de profundidad, ubicación, tiempo de evolución, sangrado y signos de alarma. Algunos casos deben ir a urgencias.'
      },
      {
        question: '¿Cuándo se retiran los puntos?',
        answer:
          'El tiempo depende de la zona y del criterio profesional. Por WhatsApp se valida la información antes de agendar.'
      }
    ],
    related: ['servicios-medicos/cura-de-heridas-simples-y-complejas', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'servicios-medicos/retiro-y-colocacion-de-sonda-vesical',
    category: 'Servicios médicos',
    title: 'Retiro y colocación de sonda vesical',
    shortTitle: 'Sonda vesical',
    h1: 'Retiro y colocación de sonda vesical a domicilio',
    metaTitle: 'Sonda vesical a domicilio | MedicExpress',
    metaDescription:
      'Coordina retiro o colocación de sonda vesical a domicilio con orientación por WhatsApp y manejo profesional.',
    summary:
      'Servicio delicado que requiere tecnica, higiene, validación del caso y seguimiento responsable.',
    intent: 'Pacientes que requieren cambio, retiro o colocación de sonda en casa.',
    price: 'Cambio desde $135.000 / retiro desde $120.000',
    highlights: ['Validación del caso', 'Procedimiento en domicilio', 'Orientación postservicio'],
    suitableFor: ['Pacientes con sonda', 'Cuidadores familiares', 'Seguimiento domiciliario'],
    process: commonProcess,
    faqs: [
      {
        question: '¿Qué datos debo informar?',
        answer:
          'Edad del paciente, motivo, tipo de sonda si lo conoce, tiempo de uso, síntomas y ubicación.'
      },
      {
        question: '¿Qué signos requieren urgencias?',
        answer:
          'Dolor intenso, fiebre, sangrado importante, ausencia de drenaje o deterioro general deben valorarse con prioridad.'
      }
    ],
    related: ['servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'servicios-medicos/lavado-de-oido',
    category: 'Servicios médicos',
    title: 'Lavado de oído',
    shortTitle: 'Lavado de oído',
    h1: 'Lavado de oído a domicilio con valoración previa',
    metaTitle: 'Lavado de oído a domicilio Bogotá | MedicExpress',
    metaDescription:
      'Solicita lavado de oído a domicilio en Bogotá desde $140.000. Validación previa y atención coordinada por SMD Vital.',
    summary:
      'Atención para molestias asociadas a cerumen o taponamiento, evitando automédicación o maniobras inseguras en casa.',
    intent: 'Personas con sensación de oído tapado que buscan atención domiciliaria.',
    price: 'Desde $140.000',
    highlights: ['Consulta de disponibilidad', 'Valoración previa', 'Atención en domicilio'],
    suitableFor: ['Sensación de oído tapado', 'Molestia por cerumen', 'Pacientes con dificultad para desplazarse'],
    process: commonProcess,
    faqs: [
      {
        question: 'Siempre se puede hacer lavado de oído?',
        answer:
          'No. Dolor intenso, secreción, fiebre, antecedente de perforación o cirugía requieren valoración cuidadosa antes de cualquier procedimiento.'
      },
      {
        question: '¿Puedo usar gotas antes?',
        answer:
          'No se recomienda iniciar productos sin orientación profesional, especialmente si hay dolor, secreción o antecedentes auditivos.'
      }
    ],
    related: ['servicios-medicos/valoracion-medica-a-domicilio', 'servicios-medicos/servicio-medico-a-domicilio']
  },
  {
    slug: 'servicios-medicos/extraccion-y-cuidado-para-unas-encarnadas',
    category: 'Servicios médicos',
    title: 'Extracción y cuidado para uñas encarnadas',
    shortTitle: 'Uñas encarnadas',
    h1: 'Cuidado de uñas encarnadas a domicilio',
    metaTitle: 'Uñas encarnadas a domicilio | MedicExpress',
    metaDescription:
      'Solicita orientación para extraccion y cuidado de uñas encarnadas a domicilio. Coordinación por WhatsApp.',
    summary:
      'Servicio para casos seleccionados de uña encarnada, con validación del estado local y signos de alarma.',
    intent: 'Pacientes con molestia por uña encarnada que buscan atención en casa.',
    highlights: ['Revisión del caso', 'Atención domiciliaria', 'Orientación de cuidado posterior'],
    suitableFor: ['Dolor localizado', 'Dificultad para caminar', 'Pacientes que no pueden desplazarse facilmente'],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cuándo no conviene atender en casa?',
        answer:
          'Si hay infección avanzada, fiebre, dolor severo, diabetes no controlada o mala circulación, se debe valorar cuidadosamente la ruta de atención.'
      },
      {
        question: '¿Debo envíar foto?',
        answer:
          'Puede ayudar a orientar el servicio, cuidando la privacidad y envíando solo información necesaria.'
      }
    ],
    related: ['servicios-medicos/cura-de-heridas-simples-y-complejas', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'servicios-medicos/atencion-a-pacientes-con-covid-19',
    category: 'Servicios médicos',
    title: 'Atención a pacientes con COVID-19',
    shortTitle: 'COVID-19',
    h1: 'Orientación para pacientes con síntomas respiratorios',
    metaTitle: 'Atención COVID-19 a domicilio | MedicExpress',
    metaDescription:
      'Orientación para pacientes con síntomas respiratorios o sospecha de COVID-19. Consulta por WhatsApp el servicio adecuado.',
    summary:
      'Página orientada a clasificar síntomas, orientar el canal de atención y evitar desplazamientos innecesarios cuando el caso es apto.',
    intent: 'Pacientes con síntomas respiratorios que necesitan orientación inicial.',
    highlights: ['Orientación inicial', 'Teleconsulta o domicilio según caso', 'Ruta responsable ante signos de alarma'],
    suitableFor: ['Síntomas leves o moderados', 'Seguimiento familiar', 'Dudas sobre pruebas o aislamiento'],
    process: commonProcess,
    faqs: [
      {
        question: '¿Atienden emergencias respiratorias?',
        answer:
          'No se debe manejar por esta vía una emergencia respiratoria. Dificultad para respirar, labios morados, confusión o dolor torácico requieren urgencias.'
      },
      {
        question: 'Pueden orientar sobre pruebas?',
        answer:
          'Sí. Por WhatsApp se puede orientar sobre disponibilidad de pruebas y el servicio más adecuado según el caso.'
      }
    ],
    related: ['laboratorio-clinico/prueba-de-antigeno-a-domicilio', 'laboratorio-clinico/toma-de-muestra-pcr-covid-19-a-domicilio']
  },
  {
    slug: 'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario',
    category: 'Enfermería',
    title: 'Enfermería a nivel domiciliario y hospitalario',
    shortTitle: 'Enfermería',
    h1: 'Enfermería domiciliaria y apoyo hospitalario',
    metaTitle: 'Enfermería a domicilio | MedicExpress',
    metaDescription:
      'Solicita enfermería domiciliaria y apoyo hospitalario. Coordinación por WhatsApp y atención conectada con SMD Vital.',
    summary:
      'Apoyo de enfermería para procedimientos, cuidados, seguimiento y acompañamiento según necesidad del paciente.',
    intent: 'Familias que necesitan apoyo de enfermería en casa o entorno hospitalario.',
    highlights: ['Apoyo a cuidadores', 'Procedimientos programados', 'Seguimiento humano'],
    suitableFor: ['Adultos mayores', 'Pacientes en recuperacion', 'Familias cuidadoras'],
    process: commonProcess,
    faqs: [
      {
        question: 'El servicio puede ser recurrente?',
        answer:
          'Sí. Se puede consultar disponibilidad para visitas programadas o seguimiento según el caso.'
      },
      {
        question: '¿Qué tipo de procedimientos cubre?',
        answer:
          'Depende del alcance confirmado al agendar. Se valida el servicio requerido, insumos y condiciones del paciente.'
      }
    ],
    related: ['servicios-de-enfermeria/inyectologia-a-domicilio', 'servicios-de-enfermeria/toma-de-signos-vitales']
  },
  {
    slug: 'servicios-de-enfermeria/inyectologia-a-domicilio',
    category: 'Enfermería',
    title: 'Inyectología a domicilio',
    shortTitle: 'Inyectología',
    h1: 'Inyectología a domicilio con fórmula médica',
    metaTitle: 'Inyectología a domicilio Bogotá | MedicExpress',
    metaDescription:
      'Agenda inyectología a domicilio en Bogotá desde $95.000. Validación de fórmula médica y atención coordinada por SMD Vital.',
    summary:
      'Aplicación de medicamentos inyectables en casa, bajo fórmula médica y validación responsable antes del servicio.',
    intent: 'Pacientes que necesitan aplicación de médicamento formulado en casa.',
    price: 'Desde $95.000',
    highlights: ['Se valida fórmula médica', 'Atención en casa', 'Proceso rápido por WhatsApp'],
    suitableFor: ['Medicamentos formulados', 'Pacientes con movilidad limitada', 'Servicios programados'],
    process: commonProcess,
    faqs: [
      {
        question: '¿Necesito fórmula médica?',
        answer:
          'Sí. Para aplicación de medicamentos se debe validar fórmula o indicación profesional según el caso.'
      },
      {
        question: 'Ustedes formulan el médicamento?',
        answer:
          'La formulación corresponde al profesional tratante. El servicio se enfoca en la aplicación segura cuando aplica.'
      }
    ],
    related: ['servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'servicios-de-enfermeria/toma-de-signos-vitales',
    category: 'Enfermería',
    title: 'Toma de signos vitales',
    shortTitle: 'Signos vitales',
    h1: 'Toma de signos vitales a domicilio',
    metaTitle: 'Toma de signos vitales a domicilio | MedicExpress',
    metaDescription:
      'Solicita toma de signos vitales a domicilio. Orientación por WhatsApp para pacientes, adultos mayores y seguimiento.',
    summary:
      'Servicio útil para seguimiento de presión arterial, frecuencia cardiaca, temperatura, saturación y otros datos básicos.',
    intent: 'Usuarios que necesitan seguimiento básico en casa.',
    price: 'Desde $100.000',
    highlights: ['Registro de signos', 'Apoyo a cuidadores', 'Ideal para seguimiento'],
    suitableFor: ['Adultos mayores', 'Pacientes cronicos', 'Controles domiciliarios'],
    process: commonProcess,
    faqs: [
      {
        question: 'La toma de signos diagnostica enfermedades?',
        answer:
          'No por sí sola. Los signos vitales son datos de seguimiento y deben interpretarse en contexto clínico.'
      },
      {
        question: '¿Qué signos se toman?',
        answer:
          'Se confirma al agendar, pero puede incluir presión arterial, frecuencia cardiaca, temperatura y saturación.'
      }
    ],
    related: ['servicios-medicos/electrocardiografia-basica', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'servicios-de-enfermeria/acompanamiento-a-citas-medicas',
    category: 'Enfermería',
    title: 'Acompañamiento a citas médicas',
    shortTitle: 'Acompañamiento',
    h1: 'Acompañamiento a citas médicas para pacientes y familias',
    metaTitle: 'Acompañamiento a citas médicas | MedicExpress',
    metaDescription:
      'Coordina acompañamiento a citas médicas para adultos mayores, pacientes con movilidad reducida o familias que necesitan apoyo.',
    summary:
      'Apoyo humano y organizado para pacientes que necesitan acompañamiento durante desplazamientos, citas o gestiones de salud.',
    intent: 'Familias que necesitan apoyo confiable para llevar o acompañar pacientes.',
    highlights: ['Apoyo logístico', 'Trato humano', 'Ideal para adultos mayores'],
    suitableFor: ['Adultos mayores', 'Pacientes con movilidad reducida', 'Familias con agenda limitada'],
    process: commonProcess,
    faqs: [
      {
        question: '¿Incluye transporte?',
        answer:
          'Se debe confirmar al agendar. El alcance puede variar según zona, horario y necesidad del paciente.'
      },
      {
        question: 'Pueden acompañar adultos mayores?',
        answer:
          'Si, es uno de los casos principales. Se solicita información basica para coordinar de forma responsable.'
      }
    ],
    related: ['servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'laboratorio-clinico/laboratorio-a-domicilio',
    category: 'Laboratorio clínico',
    title: 'Laboratorio a domicilio',
    shortTitle: 'Laboratorio',
    h1: 'Laboratorio clínico a domicilio con toma de muestras en casa',
    metaTitle: 'Laboratorio clínico a domicilio Bogotá 24 horas | MedicExpress',
    metaDescription:
      'Solicita laboratorio clínico a domicilio en Bogotá y toma de muestras en casa. Coordinación por WhatsApp con SMD Vital.',
    summary:
      'Canal de orientación para toma de muestras y servicios de laboratorio en casa, evitando desplazamientos innecesarios.',
    intent: 'Usuarios que necesitan exámenes o muestras sin ir al laboratorio.',
    highlights: ['Toma en casa', 'Coordinación de horario', 'Orientación del proceso'],
    suitableFor: ['Adultos mayores', 'Pacientes con movilidad reducida', 'Exámenes programados'],
    process: commonProcess,
    faqs: [
      {
        question: '¿Qué exámenes se pueden tomar en casa?',
        answer:
          'Depende de disponibilidad, requisitos de la muestra y preparación. Por WhatsApp se valida el examen solicitado.'
      },
      {
        question: '¿Debo estar en ayunas?',
        answer:
          'Algunos exámenes lo requieren. Se confirma según el tipo de prueba y la indicación del laboratorio.'
      }
    ],
    related: ['laboratorio-clinico/toma-de-muestra-a-domicilio', 'laboratorio-clinico/prueba-de-antigeno-a-domicilio']
  },
  {
    slug: 'laboratorio-clinico/toma-de-muestra-a-domicilio',
    category: 'Laboratorio clínico',
    title: 'Toma de muestra a domicilio',
    shortTitle: 'Toma de muestra',
    h1: 'Toma de muestras a domicilio',
    metaTitle: 'Toma de muestras a domicilio | MedicExpress',
    metaDescription:
      'Coordina toma de muestras a domicilio con orientación por WhatsApp. Servicio practico para pacientes y familias.',
    summary:
      'Servicio para coordinar muestras en casa según disponibilidad, preparación requerida y tipo de examen.',
    intent: 'Pacientes que necesitan toma de muestras sin desplazarse.',
    highlights: ['Coordinación por WhatsApp', 'Preparacion clara', 'Atención en domicilio'],
    suitableFor: ['Exámenes programados', 'Pacientes con movilidad limitada', 'Seguimiento médico'],
    process: commonProcess,
    faqs: [
      {
        question: '¿Cómo se confirma el tipo de muestra?',
        answer:
          'Envías el examen solicitado y el equipo valida disponibilidad, preparación y condiciones.'
      },
      {
        question: '¿Se entregan resultados por WhatsApp?',
        answer:
          'El canal de entrega depende del laboratorio y del proceso confirmado al agendar.'
      }
    ],
    related: ['laboratorio-clinico/laboratorio-a-domicilio', 'laboratorio-clinico/toma-de-muestra-pcr-covid-19-a-domicilio']
  },
  {
    slug: 'laboratorio-clinico/toma-de-muestra-pcr-covid-19-a-domicilio',
    category: 'Laboratorio clínico',
    title: 'Toma de muestra PCR COVID-19 a domicilio',
    shortTitle: 'PCR COVID-19',
    h1: 'Toma de muestra PCR COVID-19 a domicilio',
    metaTitle: 'PCR COVID-19 a domicilio | MedicExpress',
    metaDescription:
      'Consulta disponibilidad para toma de muestra PCR COVID-19 a domicilio. Coordinación por WhatsApp.',
    summary:
      'Servicio orientado a validar disponibilidad de prueba PCR, requisitos, horario y proceso de toma domiciliaria.',
    intent: 'Usuarios que requieren prueba PCR COVID-19 en casa.',
    highlights: ['Validación de disponibilidad', 'Toma en casa', 'Orientación de requisitos'],
    suitableFor: ['Pruebas solicitadas', 'Pacientes con síntomas leves', 'Necesidades de víaje o trámite según disponibilidad'],
    process: commonProcess,
    faqs: [
      {
        question: '¿La PCR siempre esta disponible?',
        answer:
          'La disponibilidad puede variar. Por WhatsApp se confirma el servicio, requisitos y tiempos estimados.'
      },
      {
        question: '¿Qué hago si tengo dificultad respiratoria?',
        answer:
          'La dificultad respiratoria es un signo de alarma y requiere ruta de urgencias, no solo una prueba domiciliaria.'
      }
    ],
    related: ['laboratorio-clinico/prueba-de-antigeno-a-domicilio', 'servicios-medicos/atencion-a-pacientes-con-covid-19']
  },
  {
    slug: 'laboratorio-clinico/prueba-de-antigeno-a-domicilio',
    category: 'Laboratorio clínico',
    title: 'Prueba de antígeno a domicilio',
    shortTitle: 'Antígeno',
    h1: 'Prueba de antígeno a domicilio',
    metaTitle: 'Prueba de antígeno a domicilio | MedicExpress',
    metaDescription:
      'Consulta disponibilidad para prueba de antígeno a domicilio. Coordinación por WhatsApp y proceso claro.',
    summary:
      'Canal para coordinar prueba de antígeno cuando aplica, con información clara sobre disponibilidad y proceso.',
    intent: 'Usuarios que buscan prueba rápida en casa.',
    highlights: ['Consulta de disponibilidad', 'Toma domiciliaria', 'Orientación responsable'],
    suitableFor: ['Síntomas leves', 'Seguimiento familiar', 'Requerimientos puntuales según disponibilidad'],
    process: commonProcess,
    faqs: [
      {
        question: '¿La prueba confirma todos los casos?',
        answer:
          'Cada prueba tiene alcance y limitaciones. La interpretación debe hacerse en contexto clínico y según indicación profesional.'
      },
      {
        question: '¿Qué signos requieren urgencias?',
        answer:
          'Dificultad respiratoria, dolor torácico, confusión o deterioro general requieren atención urgente.'
      }
    ],
    related: ['laboratorio-clinico/toma-de-muestra-pcr-covid-19-a-domicilio', 'servicios-medicos/atencion-a-pacientes-con-covid-19']
  }
];

export const categories = Array.from(new Set(services.map((service) => service.category)));

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter((service) => service.category === category);
}

export function getRelatedServices(service: Service) {
  return service.related
    .map((slug) => getServiceBySlug(slug))
    .filter((related): related is Service => Boolean(related));
}

export function getWhatsappUrl(serviceName?: string) {
  const text = serviceName
    ? `Hola, vengo de MedicExpress y quiero consultar disponibilidad para ${serviceName}. Entiendo que la atención será coordinada por SMD Vital Bogotá.`
    : 'Hola, vengo de MedicExpress y quiero recibir orientación para un servicio médico. Entiendo que la atención será coordinada por SMD Vital Bogotá.';

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

export function getSmdReferralUrl(path = '/') {
  const url = new URL(path, siteConfig.mainBrandUrl);
  return url.toString();
}



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

export type ServiceCategory = 'Servicios médicos' | 'Enfermería' | 'Laboratorio clínico';

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

export const services: Service[] = [
  {
    slug: 'servicios-medicos/servicio-medico-a-domicilio',
    category: 'Servicios médicos',
    title: 'Servicio medico a domicilio',
    shortTitle: 'Medico a domicilio',
    h1: 'Servicio medico a domicilio con orientacion rapida',
    metaTitle: 'Servicio medico a domicilio | MedicExpress',
    metaDescription:
      'Solicita orientacion para servicio medico a domicilio. Atencion humana, agendamiento por WhatsApp y conexion con SMD Vital.',
    summary:
      'Una entrada clara para pacientes y familias que necesitan orientacion medica en casa sin desplazamientos innecesarios.',
    intent: 'Personas que buscan atencion medica domiciliaria con respuesta rapida y confiable.',
    highlights: ['Orientacion inicial por WhatsApp', 'Coordinacion de disponibilidad', 'Atencion conectada con SMD Vital'],
    suitableFor: ['Dolencias generales no vitales', 'Seguimiento de sintomas', 'Adultos mayores y familias'],
    process: commonProcess,
    faqs: [
      {
        question: 'El servicio reemplaza una urgencia hospitalaria?',
        answer:
          'No. Si hay dificultad respiratoria severa, dolor intenso en el pecho, perdida de conciencia, sangrado abundante u otro signo de alarma, se debe acudir a una ruta de urgencias.'
      },
      {
        question: 'Puedo pedir disponibilidad por WhatsApp?',
        answer:
          'Si. El canal de WhatsApp permite confirmar zona, horario y tipo de servicio antes de avanzar con el agendamiento.'
      }
    ],
    related: ['servicios-medicos/valoracion-medica-a-domicilio', 'servicios-medicos/teleconsulta-medica']
  },
  {
    slug: 'servicios-medicos/valoracion-medica-a-domicilio',
    category: 'Servicios médicos',
    title: 'Valoracion medica a domicilio',
    shortTitle: 'Valoracion medica',
    h1: 'Valoracion medica a domicilio para orientar el cuidado',
    metaTitle: 'Valoracion medica a domicilio | MedicExpress',
    metaDescription:
      'Solicita valoracion medica a domicilio con orientacion profesional y agendamiento por WhatsApp.',
    summary:
      'Servicio pensado para evaluar el motivo de consulta, orientar el cuidado y definir si el paciente requiere seguimiento, remision o manejo domiciliario.',
    intent: 'Familias que necesitan una evaluacion medica en casa con lenguaje claro.',
    highlights: ['Evaluacion del motivo de consulta', 'Orientacion de siguiente paso', 'Ideal para pacientes con movilidad limitada'],
    suitableFor: ['Adultos mayores', 'Sintomas generales', 'Seguimientos y controles no urgentes'],
    process: commonProcess,
    faqs: [
      {
        question: 'La valoracion incluye medicamentos?',
        answer:
          'La indicacion de medicamentos depende exclusivamente del criterio del profesional de salud y de la valoracion del caso.'
      },
      {
        question: 'Que datos debo enviar?',
        answer:
          'Nombre, edad, ubicacion, motivo de consulta, tiempo de evolucion y horario deseado suelen ser suficientes para iniciar.'
      }
    ],
    related: ['servicios-medicos/servicio-medico-a-domicilio', 'servicios-medicos/teleconsulta-medica']
  },
  {
    slug: 'servicios-medicos/teleconsulta-medica',
    category: 'Servicios médicos',
    title: 'Teleconsulta medica',
    shortTitle: 'Teleconsulta',
    h1: 'Teleconsulta medica para orientacion sin desplazarte',
    metaTitle: 'Teleconsulta medica | MedicExpress',
    metaDescription:
      'Agenda orientacion por teleconsulta medica. Ideal para dudas, seguimiento y casos que no requieren visita inmediata.',
    summary:
      'Alternativa practica para recibir orientacion medica inicial, resolver dudas y definir si conviene atencion presencial.',
    intent: 'Usuarios que quieren hablar con un profesional sin salir de casa.',
    highlights: ['Respuesta sin desplazamiento', 'Orientacion de siguiente paso', 'Canal util para seguimiento'],
    suitableFor: ['Dudas medicas no urgentes', 'Seguimiento de sintomas', 'Orientacion familiar'],
    process: commonProcess,
    faqs: [
      {
        question: 'La teleconsulta sirve para cualquier caso?',
        answer:
          'No. Algunos casos requieren examen fisico o atencion presencial. En signos de alarma se debe acudir a urgencias.'
      },
      {
        question: 'Como se agenda?',
        answer:
          'Por WhatsApp se valida motivo de consulta, datos basicos y disponibilidad para coordinar el canal de atencion.'
      }
    ],
    related: ['servicios-medicos/servicio-medico-a-domicilio', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'servicios-medicos/terapias-respiratorias',
    category: 'Servicios médicos',
    title: 'Terapias respiratorias',
    shortTitle: 'Terapia respiratoria',
    h1: 'Terapias respiratorias a domicilio con coordinacion profesional',
    metaTitle: 'Terapias respiratorias a domicilio | MedicExpress',
    metaDescription:
      'Solicita orientacion para terapia respiratoria a domicilio. Coordinacion por WhatsApp y atencion responsable.',
    summary:
      'Servicio orientado a pacientes que requieren apoyo respiratorio domiciliario, bajo indicaciones y criterio profesional.',
    intent: 'Pacientes con necesidad de apoyo respiratorio no hospitalario.',
    price: 'Desde $115.000',
    highlights: ['Atencion en casa', 'Validacion del caso', 'Coordinacion segun disponibilidad'],
    suitableFor: ['Apoyo respiratorio indicado', 'Seguimientos', 'Pacientes con movilidad limitada'],
    process: commonProcess,
    faqs: [
      {
        question: 'Puedo solicitarla sin orden medica?',
        answer:
          'Se revisa el caso por WhatsApp. Cuando aplica, se puede solicitar informacion clinica adicional para orientar el servicio responsablemente.'
      },
      {
        question: 'Atienden sintomas respiratorios severos?',
        answer:
          'Los sintomas severos requieren valoracion urgente. MedicExpress no reemplaza una ruta de urgencias.'
      }
    ],
    related: ['servicios-medicos/teleconsulta-medica', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'servicios-medicos/electrocardiografia-basica',
    category: 'Servicios médicos',
    title: 'Electrocardiografia basica',
    shortTitle: 'Electrocardiograma',
    h1: 'Electrocardiografia basica a domicilio',
    metaTitle: 'Electrocardiograma a domicilio | MedicExpress',
    metaDescription:
      'Solicita electrocardiografia basica a domicilio con coordinacion por WhatsApp y atencion profesional.',
    summary:
      'Apoyo diagnostico domiciliario para pacientes que requieren un electrocardiograma basico segun indicacion o necesidad de seguimiento.',
    intent: 'Usuarios que necesitan electrocardiograma en casa sin desplazarse.',
    highlights: ['Toma en domicilio', 'Coordinacion de horario', 'Orientacion del proceso'],
    suitableFor: ['Controles solicitados', 'Adultos mayores', 'Seguimiento cardiovascular no urgente'],
    process: commonProcess,
    faqs: [
      {
        question: 'Entregan interpretacion medica?',
        answer:
          'La interpretacion depende del profesional correspondiente y del alcance confirmado al agendar.'
      },
      {
        question: 'Que pasa si hay dolor de pecho fuerte?',
        answer:
          'Dolor de pecho intenso, dificultad respiratoria o desmayo son signos de alarma y requieren ruta de urgencias.'
      }
    ],
    related: ['servicios-medicos/valoracion-medica-a-domicilio', 'servicios-de-enfermeria/toma-de-signos-vitales']
  },
  {
    slug: 'servicios-medicos/suero-multivitaminico',
    category: 'Servicios médicos',
    title: 'Suero multivitaminico',
    shortTitle: 'Sueroterapia',
    h1: 'Suero multivitaminico a domicilio con valoracion responsable',
    metaTitle: 'Suero multivitaminico a domicilio | MedicExpress',
    metaDescription:
      'Consulta disponibilidad de suero multivitaminico a domicilio. Servicio coordinado por WhatsApp y sujeto a criterio profesional.',
    summary:
      'Servicio que debe realizarse con criterio responsable, validando antecedentes, motivo de solicitud y condiciones del paciente.',
    intent: 'Usuarios que buscan hidratacion o sueroterapia en casa con supervision adecuada.',
    price: 'Desde $185.000',
    highlights: ['Validacion previa', 'Atencion domiciliaria', 'Proceso claro por WhatsApp'],
    suitableFor: ['Solicitudes de hidratacion', 'Pacientes que requieren evaluacion previa', 'Servicios programados'],
    process: commonProcess,
    faqs: [
      {
        question: 'Todos pueden recibir sueroterapia?',
        answer:
          'No necesariamente. Se deben validar antecedentes, sintomas y criterio profesional antes de realizar el servicio.'
      },
      {
        question: 'Promete recuperacion inmediata?',
        answer:
          'No. La respuesta depende de cada paciente y no se deben prometer resultados clinicos garantizados.'
      }
    ],
    related: ['servicios-medicos/valoracion-medica-a-domicilio', 'servicios-de-enfermeria/inyectologia-a-domicilio']
  },
  {
    slug: 'servicios-medicos/cura-de-heridas-simples-y-complejas',
    category: 'Servicios médicos',
    title: 'Cura de heridas simples y complejas',
    shortTitle: 'Cura de heridas',
    h1: 'Cura de heridas a domicilio con atencion cuidadosa',
    metaTitle: 'Cura de heridas a domicilio | MedicExpress',
    metaDescription:
      'Solicita cura de heridas simples y complejas a domicilio. Orientacion por WhatsApp y manejo responsable.',
    summary:
      'Atencion domiciliaria para curaciones que requieren higiene, tecnica, seguimiento y claridad sobre signos de alarma.',
    intent: 'Pacientes que necesitan curacion en casa despues de heridas, procedimientos o lesiones.',
    price: 'Desde $150.000',
    highlights: ['Curacion en casa', 'Validacion del tipo de herida', 'Orientacion sobre seguimiento'],
    suitableFor: ['Heridas simples', 'Heridas postprocedimiento', 'Pacientes con dificultad para desplazarse'],
    process: commonProcess,
    faqs: [
      {
        question: 'Atienden heridas infectadas?',
        answer:
          'Se debe revisar el caso. Si hay signos de alarma como fiebre, dolor intenso, secrecion abundante o mal estado general, puede requerirse atencion prioritaria.'
      },
      {
        question: 'Debo enviar foto?',
        answer:
          'Puede ayudar para orientar el servicio, siempre cuidando la privacidad del paciente y enviando solo lo necesario.'
      }
    ],
    related: ['servicios-medicos/sutura-y-retiro-de-puntos', 'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario']
  },
  {
    slug: 'servicios-medicos/sutura-y-retiro-de-puntos',
    category: 'Servicios médicos',
    title: 'Sutura y retiro de puntos',
    shortTitle: 'Sutura y puntos',
    h1: 'Sutura y retiro de puntos a domicilio',
    metaTitle: 'Sutura y retiro de puntos a domicilio | MedicExpress',
    metaDescription:
      'Solicita orientacion para sutura o retiro de puntos a domicilio. Coordinacion por WhatsApp y atencion responsable.',
    summary:
      'Servicio para heridas y controles de puntos que requieren revision del caso, tecnica adecuada y orientacion clara.',
    intent: 'Usuarios que necesitan sutura, revision o retiro de puntos sin desplazarse.',
    price: 'Retiro desde $100.000 / sutura desde $150.000',
    highlights: ['Revision previa', 'Atencion programada', 'Orientacion de signos de alarma'],
    suitableFor: ['Retiro de puntos', 'Heridas aptas para manejo domiciliario', 'Seguimiento postprocedimiento'],
    process: commonProcess,
    faqs: [
      {
        question: 'Todas las heridas se pueden suturar en casa?',
        answer:
          'No. Depende de profundidad, ubicacion, tiempo de evolucion, sangrado y signos de alarma. Algunos casos deben ir a urgencias.'
      },
      {
        question: 'Cuando se retiran los puntos?',
        answer:
          'El tiempo depende de la zona y del criterio profesional. Por WhatsApp se valida la informacion antes de agendar.'
      }
    ],
    related: ['servicios-medicos/cura-de-heridas-simples-y-complejas', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'servicios-medicos/retiro-y-colocacion-de-sonda-vesical',
    category: 'Servicios médicos',
    title: 'Retiro y colocacion de sonda vesical',
    shortTitle: 'Sonda vesical',
    h1: 'Retiro y colocacion de sonda vesical a domicilio',
    metaTitle: 'Sonda vesical a domicilio | MedicExpress',
    metaDescription:
      'Coordina retiro o colocacion de sonda vesical a domicilio con orientacion por WhatsApp y manejo profesional.',
    summary:
      'Servicio delicado que requiere tecnica, higiene, validacion del caso y seguimiento responsable.',
    intent: 'Pacientes que requieren cambio, retiro o colocacion de sonda en casa.',
    price: 'Cambio desde $135.000 / retiro desde $120.000',
    highlights: ['Validacion del caso', 'Procedimiento en domicilio', 'Orientacion postservicio'],
    suitableFor: ['Pacientes con sonda', 'Cuidadores familiares', 'Seguimiento domiciliario'],
    process: commonProcess,
    faqs: [
      {
        question: 'Que datos debo informar?',
        answer:
          'Edad del paciente, motivo, tipo de sonda si lo conoce, tiempo de uso, sintomas y ubicacion.'
      },
      {
        question: 'Que signos requieren urgencias?',
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
    metaTitle: 'Lavado de oído a domicilio | MedicExpress',
    metaDescription:
      'Solicita lavado de oído a domicilio. Se valida el caso por WhatsApp para orientar un servicio responsable.',
    summary:
      'Atención para molestias asociadas a cerumen o taponamiento, evitando automedicación o maniobras inseguras en casa.',
    intent: 'Personas con sensación de oído tapado que buscan atencion domiciliaria.',
    price: 'Desde $140.000',
    highlights: ['Consulta de disponibilidad', 'Valoración previa', 'Atención en domicilio'],
    suitableFor: ['Sensación de oído tapado', 'Molestia por cerumen', 'Pacientes con dificultad para desplazarse'],
    process: commonProcess,
    faqs: [
      {
        question: 'Siempre se puede hacer lavado de oído?',
        answer:
          'No. Dolor intenso, secrecion, fiebre, antecedente de perforacion o cirugia requieren valoracion cuidadosa antes de cualquier procedimiento.'
      },
      {
        question: 'Puedo usar gotas antes?',
        answer:
          'No se recomienda iniciar productos sin orientacion profesional, especialmente si hay dolor, secrecion o antecedentes auditivos.'
      }
    ],
    related: ['servicios-medicos/valoracion-medica-a-domicilio', 'servicios-medicos/servicio-medico-a-domicilio']
  },
  {
    slug: 'servicios-medicos/extraccion-y-cuidado-para-unas-encarnadas',
    category: 'Servicios médicos',
    title: 'Extraccion y cuidado para unas encarnadas',
    shortTitle: 'Unas encarnadas',
    h1: 'Cuidado de unas encarnadas a domicilio',
    metaTitle: 'Unas encarnadas a domicilio | MedicExpress',
    metaDescription:
      'Solicita orientacion para extraccion y cuidado de unas encarnadas a domicilio. Coordinacion por WhatsApp.',
    summary:
      'Servicio para casos seleccionados de uña encarnada, con validacion del estado local y signos de alarma.',
    intent: 'Pacientes con molestia por uña encarnada que buscan atencion en casa.',
    highlights: ['Revision del caso', 'Atencion domiciliaria', 'Orientacion de cuidado posterior'],
    suitableFor: ['Dolor localizado', 'Dificultad para caminar', 'Pacientes que no pueden desplazarse facilmente'],
    process: commonProcess,
    faqs: [
      {
        question: 'Cuando no conviene atender en casa?',
        answer:
          'Si hay infeccion avanzada, fiebre, dolor severo, diabetes no controlada o mala circulacion, se debe valorar cuidadosamente la ruta de atencion.'
      },
      {
        question: 'Debo enviar foto?',
        answer:
          'Puede ayudar a orientar el servicio, cuidando la privacidad y enviando solo informacion necesaria.'
      }
    ],
    related: ['servicios-medicos/cura-de-heridas-simples-y-complejas', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'servicios-medicos/atencion-a-pacientes-con-covid-19',
    category: 'Servicios médicos',
    title: 'Atencion a pacientes con COVID-19',
    shortTitle: 'COVID-19',
    h1: 'Orientacion para pacientes con sintomas respiratorios',
    metaTitle: 'Atencion COVID-19 a domicilio | MedicExpress',
    metaDescription:
      'Orientacion para pacientes con sintomas respiratorios o sospecha de COVID-19. Consulta por WhatsApp el servicio adecuado.',
    summary:
      'Pagina orientada a clasificar sintomas, orientar el canal de atencion y evitar desplazamientos innecesarios cuando el caso es apto.',
    intent: 'Pacientes con sintomas respiratorios que necesitan orientacion inicial.',
    highlights: ['Orientacion inicial', 'Teleconsulta o domicilio segun caso', 'Ruta responsable ante signos de alarma'],
    suitableFor: ['Sintomas leves o moderados', 'Seguimiento familiar', 'Dudas sobre pruebas o aislamiento'],
    process: commonProcess,
    faqs: [
      {
        question: 'Atienden emergencias respiratorias?',
        answer:
          'No se debe manejar por esta via una emergencia respiratoria. Dificultad para respirar, labios morados, confusion o dolor toracico requieren urgencias.'
      },
      {
        question: 'Pueden orientar sobre pruebas?',
        answer:
          'Si. Por WhatsApp se puede orientar sobre disponibilidad de pruebas y el servicio mas adecuado segun el caso.'
      }
    ],
    related: ['laboratorio-clinico/prueba-de-antigeno-a-domicilio', 'laboratorio-clinico/toma-de-muestra-pcr-covid-19-a-domicilio']
  },
  {
    slug: 'servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario',
    category: 'Enfermería',
    title: 'Enfermeria a nivel domiciliario y hospitalario',
    shortTitle: 'Enfermería',
    h1: 'Enfermeria domiciliaria y apoyo hospitalario',
    metaTitle: 'Enfermeria a domicilio | MedicExpress',
    metaDescription:
      'Solicita enfermeria domiciliaria y apoyo hospitalario. Coordinacion por WhatsApp y atencion conectada con SMD Vital.',
    summary:
      'Apoyo de enfermeria para procedimientos, cuidados, seguimiento y acompañamiento segun necesidad del paciente.',
    intent: 'Familias que necesitan apoyo de enfermeria en casa o entorno hospitalario.',
    highlights: ['Apoyo a cuidadores', 'Procedimientos programados', 'Seguimiento humano'],
    suitableFor: ['Adultos mayores', 'Pacientes en recuperacion', 'Familias cuidadoras'],
    process: commonProcess,
    faqs: [
      {
        question: 'El servicio puede ser recurrente?',
        answer:
          'Si. Se puede consultar disponibilidad para visitas programadas o seguimiento segun el caso.'
      },
      {
        question: 'Que tipo de procedimientos cubre?',
        answer:
          'Depende del alcance confirmado al agendar. Se valida el servicio requerido, insumos y condiciones del paciente.'
      }
    ],
    related: ['servicios-de-enfermeria/inyectologia-a-domicilio', 'servicios-de-enfermeria/toma-de-signos-vitales']
  },
  {
    slug: 'servicios-de-enfermeria/inyectologia-a-domicilio',
    category: 'Enfermería',
    title: 'Inyectologia a domicilio',
    shortTitle: 'Inyectologia',
    h1: 'Inyectologia a domicilio con formula medica',
    metaTitle: 'Inyectologia a domicilio | MedicExpress',
    metaDescription:
      'Agenda inyectologia a domicilio. Servicio con validacion de formula medica, datos del paciente y disponibilidad.',
    summary:
      'Aplicacion de medicamentos inyectables en casa, bajo formula medica y validacion responsable antes del servicio.',
    intent: 'Pacientes que necesitan aplicacion de medicamento formulado en casa.',
    price: 'Desde $95.000',
    highlights: ['Se valida formula medica', 'Atencion en casa', 'Proceso rapido por WhatsApp'],
    suitableFor: ['Medicamentos formulados', 'Pacientes con movilidad limitada', 'Servicios programados'],
    process: commonProcess,
    faqs: [
      {
        question: 'Necesito formula medica?',
        answer:
          'Si. Para aplicacion de medicamentos se debe validar formula o indicacion profesional segun el caso.'
      },
      {
        question: 'Ustedes formulan el medicamento?',
        answer:
          'La formulacion corresponde al profesional tratante. El servicio se enfoca en la aplicacion segura cuando aplica.'
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
      'Solicita toma de signos vitales a domicilio. Orientacion por WhatsApp para pacientes, adultos mayores y seguimiento.',
    summary:
      'Servicio util para seguimiento de presion arterial, frecuencia cardiaca, temperatura, saturacion y otros datos basicos.',
    intent: 'Usuarios que necesitan seguimiento basico en casa.',
    price: 'Desde $100.000',
    highlights: ['Registro de signos', 'Apoyo a cuidadores', 'Ideal para seguimiento'],
    suitableFor: ['Adultos mayores', 'Pacientes cronicos', 'Controles domiciliarios'],
    process: commonProcess,
    faqs: [
      {
        question: 'La toma de signos diagnostica enfermedades?',
        answer:
          'No por si sola. Los signos vitales son datos de seguimiento y deben interpretarse en contexto clinico.'
      },
      {
        question: 'Que signos se toman?',
        answer:
          'Se confirma al agendar, pero puede incluir presion arterial, frecuencia cardiaca, temperatura y saturacion.'
      }
    ],
    related: ['servicios-medicos/electrocardiografia-basica', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'servicios-de-enfermeria/acompanamiento-a-citas-medicas',
    category: 'Enfermería',
    title: 'Acompanamiento a citas medicas',
    shortTitle: 'Acompanamiento',
    h1: 'Acompanamiento a citas medicas para pacientes y familias',
    metaTitle: 'Acompanamiento a citas medicas | MedicExpress',
    metaDescription:
      'Coordina acompanamiento a citas medicas para adultos mayores, pacientes con movilidad reducida o familias que necesitan apoyo.',
    summary:
      'Apoyo humano y organizado para pacientes que necesitan acompañamiento durante desplazamientos, citas o gestiones de salud.',
    intent: 'Familias que necesitan apoyo confiable para llevar o acompañar pacientes.',
    highlights: ['Apoyo logistico', 'Trato humano', 'Ideal para adultos mayores'],
    suitableFor: ['Adultos mayores', 'Pacientes con movilidad reducida', 'Familias con agenda limitada'],
    process: commonProcess,
    faqs: [
      {
        question: 'Incluye transporte?',
        answer:
          'Se debe confirmar al agendar. El alcance puede variar segun zona, horario y necesidad del paciente.'
      },
      {
        question: 'Pueden acompañar adultos mayores?',
        answer:
          'Si, es uno de los casos principales. Se solicita informacion basica para coordinar de forma responsable.'
      }
    ],
    related: ['servicios-de-enfermeria/enfermeria-a-nivel-domiciliario-y-hospitalario', 'servicios-medicos/valoracion-medica-a-domicilio']
  },
  {
    slug: 'laboratorio-clinico/laboratorio-a-domicilio',
    category: 'Laboratorio clínico',
    title: 'Laboratorio a domicilio',
    shortTitle: 'Laboratorio',
    h1: 'Laboratorio clinico a domicilio',
    metaTitle: 'Laboratorio a domicilio | MedicExpress',
    metaDescription:
      'Solicita laboratorio a domicilio y toma de muestras en casa. Coordinacion por WhatsApp y proceso claro.',
    summary:
      'Canal de orientacion para toma de muestras y servicios de laboratorio en casa, evitando desplazamientos innecesarios.',
    intent: 'Usuarios que necesitan examenes o muestras sin ir al laboratorio.',
    highlights: ['Toma en casa', 'Coordinacion de horario', 'Orientacion del proceso'],
    suitableFor: ['Adultos mayores', 'Pacientes con movilidad reducida', 'Examenes programados'],
    process: commonProcess,
    faqs: [
      {
        question: 'Que examenes se pueden tomar en casa?',
        answer:
          'Depende de disponibilidad, requisitos de la muestra y preparacion. Por WhatsApp se valida el examen solicitado.'
      },
      {
        question: 'Debo estar en ayunas?',
        answer:
          'Algunos examenes lo requieren. Se confirma segun el tipo de prueba y la indicacion del laboratorio.'
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
      'Coordina toma de muestras a domicilio con orientacion por WhatsApp. Servicio practico para pacientes y familias.',
    summary:
      'Servicio para coordinar muestras en casa segun disponibilidad, preparacion requerida y tipo de examen.',
    intent: 'Pacientes que necesitan toma de muestras sin desplazarse.',
    highlights: ['Coordinacion por WhatsApp', 'Preparacion clara', 'Atención en domicilio'],
    suitableFor: ['Examenes programados', 'Pacientes con movilidad limitada', 'Seguimiento medico'],
    process: commonProcess,
    faqs: [
      {
        question: 'Como se confirma el tipo de muestra?',
        answer:
          'Envias el examen solicitado y el equipo valida disponibilidad, preparacion y condiciones.'
      },
      {
        question: 'Se entregan resultados por WhatsApp?',
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
      'Consulta disponibilidad para toma de muestra PCR COVID-19 a domicilio. Coordinacion por WhatsApp.',
    summary:
      'Servicio orientado a validar disponibilidad de prueba PCR, requisitos, horario y proceso de toma domiciliaria.',
    intent: 'Usuarios que requieren prueba PCR COVID-19 en casa.',
    highlights: ['Validacion de disponibilidad', 'Toma en casa', 'Orientacion de requisitos'],
    suitableFor: ['Pruebas solicitadas', 'Pacientes con sintomas leves', 'Necesidades de viaje o tramite segun disponibilidad'],
    process: commonProcess,
    faqs: [
      {
        question: 'La PCR siempre esta disponible?',
        answer:
          'La disponibilidad puede variar. Por WhatsApp se confirma el servicio, requisitos y tiempos estimados.'
      },
      {
        question: 'Que hago si tengo dificultad respiratoria?',
        answer:
          'La dificultad respiratoria es un signo de alarma y requiere ruta de urgencias, no solo una prueba domiciliaria.'
      }
    ],
    related: ['laboratorio-clinico/prueba-de-antigeno-a-domicilio', 'servicios-medicos/atencion-a-pacientes-con-covid-19']
  },
  {
    slug: 'laboratorio-clinico/prueba-de-antigeno-a-domicilio',
    category: 'Laboratorio clínico',
    title: 'Prueba de antigeno a domicilio',
    shortTitle: 'Antigeno',
    h1: 'Prueba de antigeno a domicilio',
    metaTitle: 'Prueba de antigeno a domicilio | MedicExpress',
    metaDescription:
      'Consulta disponibilidad para prueba de antigeno a domicilio. Coordinacion por WhatsApp y proceso claro.',
    summary:
      'Canal para coordinar prueba de antigeno cuando aplica, con informacion clara sobre disponibilidad y proceso.',
    intent: 'Usuarios que buscan prueba rapida en casa.',
    highlights: ['Consulta de disponibilidad', 'Toma domiciliaria', 'Orientacion responsable'],
    suitableFor: ['Sintomas leves', 'Seguimiento familiar', 'Requerimientos puntuales segun disponibilidad'],
    process: commonProcess,
    faqs: [
      {
        question: 'La prueba confirma todos los casos?',
        answer:
          'Cada prueba tiene alcance y limitaciones. La interpretacion debe hacerse en contexto clinico y segun indicacion profesional.'
      },
      {
        question: 'Que signos requieren urgencias?',
        answer:
          'Dificultad respiratoria, dolor toracico, confusion o deterioro general requieren atencion urgente.'
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

export function getSmdReferralUrl(path = '/', campaign = 'medicexpress_referral') {
  const url = new URL(path, siteConfig.mainBrandUrl);
  url.searchParams.set('utm_source', 'medicexpress');
  url.searchParams.set('utm_medium', 'organic_referral');
  url.searchParams.set('utm_campaign', campaign);
  return url.toString();
}



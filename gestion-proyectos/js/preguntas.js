/**
 * BASE DE DATOS DE PREGUNTAS - SIMULACRO ISPC
 * Estructura: 240 preguntas totales
 * Niveles: 1 (Junior), 2 (Mid), 3 (Senior)
 * Temas:
 */

export const bancoPreguntas = [
  // ==========================================
  // NIVEL 1: Conceptos Base (Gestión de Proyectos)
  // ==========================================
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Qué es un proyecto según la definición general de los apuntes?",
    opciones: [
      "Una actividad rutinaria y repetitiva de la empresa",
      "Una iniciativa para generar un producto, servicio o resultado concreto",
      "Un proceso administrativo sin fecha de finalización",
      "Un conjunto de reglas para contratar personal",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Cuál es la definición exacta de proyecto según el PMBOK?",
    opciones: [
      "Un conjunto de actividades con un coste determinado",
      "Un desafío temporal para enfrentar la competencia",
      "Un esfuerzo temporal que se lleva a cabo para crear un resultado único",
      "Una hoja de ruta aprobada por los directivos",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "¿Qué elementos enfatiza Pablo Lledó en su definición de proyecto?",
    opciones: [
      "La calidad del código y las pruebas unitarias",
      "Resultado deseado, fecha límite y presupuesto limitado",
      "Liderazgo, negociación y toma de decisiones",
      "La documentación exhaustiva y los informes de avance",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "Según el autor Martín, ¿a qué están dirigidas las actividades de un proyecto?",
    opciones: [
      "A corregir errores de sistemas informáticos anteriores",
      "A contratar proveedores externos para la organización",
      "A crear un futuro deseado con un coste y plazo determinado",
      "A organizar las vacaciones del personal administrativo",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Qué significa que un proyecto tenga naturaleza temporal?",
    opciones: [
      "Que no tiene un final claro",
      "Que se puede realizar en cualquier momento del año",
      "Que tiene un principio y un final definidos",
      "Que los resultados desaparecen después de un tiempo",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Cómo se define un proyecto interno según su origen?",
    opciones: [
      "Aquel cuyo objetivo se orienta al mercado externo",
      "Aquel que se desarrolla a pedido de un cliente",
      "Aquel cuyo objetivo está orientado a la propia organización que lo promueve",
      "Aquel que se financia con inversores extranjeros",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "Es un ejemplo de un proyecto externo:",
    opciones: [
      "La implementación de un nuevo sistema de gestión interno",
      "La construcción de una carretera para un ente gubernamental",
      "La capacitación obligatoria para el personal de la empresa",
      "El rediseño de la oficina del Director del Proyecto",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "En la gestión de proyectos, ¿qué permite visualizar la Línea de Base?",
    opciones: [
      "La cantidad de empleados contratados",
      "El desempeño real frente al presupuesto planificado",
      "Los objetivos estratégicos de la empresa a largo plazo",
      "La lista completa de todos los interesados del proyecto",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿A qué tipo de resultado se refiere un Servicio?",
    opciones: [
      "Un componente que forma parte de otro producto",
      "La entrega de una conclusión o documento final",
      "La capacidad de realizar una tarea o mejorar líneas existentes",
      "Un software instalado y funcionando sin errores",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Cuándo se considera que un proyecto alcanza su final?",
    opciones: [
      "Cuando se gasta todo el presupuesto asignado",
      "Cuando se logran los objetivos o la necesidad ha desaparecido",
      "Cuando el director del proyecto decide renunciar",
      "Cuando pasa un año desde que se inició la planificación",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "La gestión de proyectos comparte las mismas bases que la administración general, que son:",
    opciones: [
      "Venta, compra, logística y marketing",
      "Programación, diseño, testeo y mantenimiento",
      "Planificación, organización, dirección, ejecución y control",
      "Inicio, desarrollo, cierre y evaluación",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "Dentro de los 5 elementos clave de la gestión, ¿qué abarca el Conocimiento?",
    opciones: [
      "Saber usar el software de gestión únicamente",
      "Dominio del área técnica y del marco teórico como el PMBOK",
      "Conocer el nombre de todos los accionistas de la empresa",
      "Saber negociar y resolver conflictos en el equipo",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "Dentro de los 5 elementos clave, ¿a qué se refieren las Habilidades?",
    opciones: [
      "Al manejo de diagramas de Gantt y hojas de cálculo",
      "A la recopilación de datos sobre eficiencia y desempeño",
      "Al liderazgo, comunicación, negociación y toma de decisiones",
      "A las metodologías de estimación y análisis de riesgos",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "Según la documentación, los proyectos son el vehículo a través del cual las organizaciones:",
    opciones: [
      "Ahorran dinero en impuestos y regulaciones",
      "Contratan nuevos gerentes de marketing",
      "Ejecutan su estrategia y generan valor",
      "Escriben manuales de usuario para sus productos",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "Un objetivo que persiguen los proyectos organizacionales es:",
    opciones: [
      "Mantener las mismas operaciones por tiempo indefinido",
      "Evitar los cambios tecnológicos para no gastar recursos",
      "Responder a oportunidades o amenazas del mercado",
      "Reducir la comunicación con el cliente externo",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Por qué se dice que los recursos de un proyecto son limitados?",
    opciones: [
      "Porque el director del proyecto no sabe cómo pedirlos",
      "Porque el tiempo, el dinero y las personas siempre tienen restricciones",
      "Porque solo se pueden usar recursos internos de la empresa",
      "Porque el PMBOK prohíbe el uso de demasiadas herramientas",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Cómo se mide hoy el éxito de un proyecto organizacional?",
    opciones: [
      "Solo por cumplir el cronograma original al pie de la letra",
      "Por el valor generado para la empresa",
      "Por la cantidad de documentos que se archivaron al final",
      "Por haber usado la metodología Scrum correctamente",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "¿A qué concepto pertenece la aplicación de conocimientos, habilidades y herramientas para satisfacer requisitos?",
    opciones: [
      "Planificación estratégica",
      "Producción industrial",
      "Gestión de proyectos",
      "Metodología ágil",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Qué significa que el resultado de un proyecto sea Único?",
    opciones: [
      "Que no hay dos proyectos idénticos",
      "Que solo lo puede ver una persona",
      "Que se hace una sola vez y no funciona nunca más",
      "Que no requiere mantenimiento futuro",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "La gestión del desempeño real vs. presupuesto es tarea fundamental de:",
    opciones: [
      "Los proveedores de hardware",
      "El Director del Proyecto",
      "El equipo técnico de desarrollo únicamente",
      "Los competidores externos del mercado",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 1: Las 4 Variables (Gestión de Proyectos)
  // ==========================================
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "¿Quién es el autor que define las 4 variables clave de la gestión permanente?",
    opciones: [
      "Winston Royce",
      "Pablo Lledó",
      "Ian Sommerville",
      "Barry Boehm",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "¿Cuáles son las 4 variables que el director de proyecto debe gestionar?",
    opciones: [
      "Ventas, Compras, Marketing y Recursos",
      "Planificación, Riesgo, Liderazgo y Cierre",
      "Tiempos, Costos, Alcance y Calidad",
      "Inicio, Desarrollo, Pruebas y Entrega",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta: "¿Qué abarca específicamente la variable de Tiempos?",
    opciones: [
      "La velocidad de internet de los servidores",
      "Los plazos y el cronograma del proyecto",
      "La cantidad de horas extras pagadas",
      "El tiempo que el cliente demora en pagar",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta: "¿A qué se refiere la variable de Costos?",
    opciones: [
      "Al precio de venta del producto final",
      "Al presupuesto y los recursos disponibles",
      "A las pérdidas por errores técnicos",
      "Al salario base de los programadores",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta: "La variable de Alcance define principalmente:",
    opciones: [
      "A cuántas personas llegará la publicidad",
      "Los entregables y los límites del proyecto",
      "El tiempo de garantía del software",
      "La cantidad de documentos impresos",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta: "La variable de Calidad se encarga de gestionar:",
    opciones: [
      "La estética y los colores del logotipo",
      "La satisfacción personal del director",
      "Los estándares y el resultado esperado",
      "Que no existan competidores en el mercado",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "Según Lledó, cuando una de las variables cambia, ¿qué sucede con las demás?",
    opciones: [
      "Se mantienen exactamente iguales",
      "Desaparecen automáticamente",
      "Las otras tres variables la restringen",
      "El proyecto debe cancelarse de inmediato",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "¿Cuál es la función principal del director respecto a estas variables?",
    opciones: [
      "Elegir solo una y olvidar las otras",
      "Gestionarlas equilibrándolas permanentemente",
      "Dejar que el cliente decida sobre todas ellas",
      "Eliminar los costos para ganar más tiempo",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "Si el cliente decide aumentar el Alcance de un proyecto, es probable que:",
    opciones: [
      "Los Costos o los Tiempos también deban aumentar",
      "La Calidad mejore mágicamente",
      "El proyecto termine más rápido",
      "No se requiera ninguna planificación extra",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "Si se reduce el presupuesto (Costo), para mantener el equilibrio se debería:",
    opciones: [
      "Aumentar el alcance del proyecto",
      "Acortar los plazos del cronograma",
      "Reducir el alcance o ajustar la calidad",
      "No hacer cambios y trabajar el doble",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "¿Cuál de estos elementos NO es una de las 4 variables clave de Lledó?",
    opciones: ["Calidad", "Ubicación geográfica", "Costos", "Alcance"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "¿Qué significa 'equilibrar las variables' en gestión de proyectos?",
    opciones: [
      "Darle la misma importancia al dinero que al diseño",
      "Ajustar los factores para cumplir los objetivos sin desbordarse",
      "Hacer que el equipo trabaje la misma cantidad de horas",
      "Que todos los stakeholders cobren lo mismo",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "La definición de los 'límites' de lo que se va a hacer pertenece a:",
    opciones: [
      "Variable de Costo",
      "Variable de Tiempo",
      "Variable de Alcance",
      "Variable de Calidad",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta: "Cuando hablamos de 'cronograma' nos referimos directamente a:",
    opciones: [
      "La variable de Costos",
      "La variable de Tiempos",
      "La variable de Calidad",
      "La gestión de interesados",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "¿Qué sucede si el director intenta manejar las 4 variables al mismo tiempo?",
    opciones: [
      "Es el objetivo, pero gestionar implica equilibrar restricciones",
      "Es imposible y no debe intentarse",
      "Las variables se anulan entre sí",
      "El proyecto se vuelve infinito",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "El cumplimiento de normativas legales dentro de un proyecto suele ser parte de:",
    opciones: [
      "La variable de Tiempos",
      "La variable de Costos",
      "La variable de Calidad",
      "La variable de Liderazgo",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "¿Qué recurso es parte fundamental de la variable Costos según el material?",
    opciones: [
      "Los servidores remotos únicamente",
      "Las personas y el dinero disponible",
      "Las oficinas de la organización",
      "La documentación de lecciones aprendidas",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta: "El 'resultado deseado' es una forma de medir:",
    opciones: [
      "La variable de Costo",
      "La variable de Tiempo",
      "La variable de Calidad",
      "La variable de RRHH",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "Una reducción agresiva del Tiempo (fecha de entrega) sin cambiar el Alcance suele afectar negativamente:",
    opciones: [
      "A la competencia",
      "A los Costos (requiere más gente) o a la Calidad",
      "Solamente a la variable de Ventas",
      "A la ubicación de los servidores",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta: "¿Por qué se llaman variables permanentes?",
    opciones: [
      "Porque no cambian nunca durante el proyecto",
      "Porque deben estar en la mente del director durante todo el ciclo de vida",
      "Porque se definen en el acta de cierre únicamente",
      "Porque el PMBOK obliga a memorizarlas",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 1: Equipo e Interesados (Gestión de Proyectos)
  // ==========================================
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿Quién es el máximo responsable de la gestión integral de un proyecto?",
    opciones: [
      "El cliente externo",
      "El Director del proyecto",
      "El representante del Gobierno",
      "Los vendedores y socios",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿Qué rol debe cumplir el director del proyecto en todo equipo, más allá de su autoridad formal?",
    opciones: [
      "Administrador de bases de datos",
      "Líder",
      "Proveedor de hardware",
      "Accionista mayoritario",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿De qué se encarga el 'Personal de dirección' dentro del equipo?",
    opciones: [
      "De realizar las pruebas de código",
      "De la planificación y el control del proyecto",
      "De la atención al público únicamente",
      "De la compra de insumos de oficina",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta: "¿Cuál es la función principal de los 'Expertos de apoyo'?",
    opciones: [
      "Financiar el proyecto con capital propio",
      "Brindar conocimiento técnico especializado",
      "Tomar decisiones sobre el presupuesto total",
      "Firmar los contratos legales con el estado",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta: "Los representantes del cliente o usuario tienen la tarea de:",
    opciones: [
      "Desarrollar el software de principio a fin",
      "Trasladar las necesidades del cliente al equipo",
      "Controlar el horario de ingreso de los empleados",
      "Buscar nuevos inversores para la empresa",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "Dentro del equipo de proyecto, ¿quiénes son considerados externos?",
    opciones: [
      "El Director de proyecto y su personal de dirección",
      "Vendedores, socios y organizaciones externas",
      "Los expertos de apoyo técnico",
      "Los analistas de riesgo internos",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿Qué significa el término 'Stakeholders' en gestión de proyectos?",
    opciones: [
      "Las herramientas de software utilizadas",
      "Los interesados o personas afectadas por el proyecto",
      "Las fases finales del cronograma",
      "Los tipos de servidores que usa el sistema",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿Cuál es una de las responsabilidades centrales del director frente a los interesados?",
    opciones: [
      "Pagarles un sueldo fijo mensual",
      "Gestionar sus expectativas",
      "Aceptarle todas las peticiones sin planificar",
      "Ignorarlos hasta que el proyecto termine",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta: "¿Cómo suelen ser los intereses de los distintos stakeholders?",
    opciones: [
      "Siempre idénticos y cooperativos",
      "Diferentes o incluso contradictorios",
      "Únicamente económicos y financieros",
      "Irrelevantes para el éxito del proyecto",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿Qué stakeholder se define como el beneficiario directo del producto o servicio?",
    opciones: ["Inversores", "Gobierno", "Clientes", "Comunidad"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta: "El 'Gobierno' como interesado se encarga principalmente de:",
    opciones: [
      "Elegir el nombre del producto final",
      "Regulaciones, normativas y marcos legales",
      "Trabajar en el equipo de desarrollo diariamente",
      "Promocionar el proyecto en redes sociales",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿A qué interesado le importa el impacto social y ambiental del proyecto?",
    opciones: [
      "Vendedores",
      "Expertos de apoyo",
      "Comunidad",
      "Personal de dirección",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta: "¿Cuál es el rol de los 'Inversores' como stakeholders?",
    opciones: [
      "Definir el diseño visual de la interfaz",
      "Financiar, patrocinar o aportar al proyecto",
      "Liderar técnicamente al equipo de programadores",
      "Firmar el manual de usuario del software",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "La entidad que promueve el proyecto se identifica como el stakeholder:",
    opciones: ["Inversores", "Organización", "Comunidad", "Gobierno"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta: "Es fundamental que el director sea participativo y consulte a:",
    opciones: [
      "Los competidores de la empresa",
      "Los expertos involucrados en el proyecto",
      "A personas ajenas al rubro de software",
      "Solamente a sus jefes directos",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "Un stakeholder cuya expectativa no sea gestionada correctamente puede:",
    opciones: [
      "Convertirse en un riesgo para el éxito del proyecto",
      "Hacer que el código funcione mejor automáticamente",
      "Eliminar el presupuesto del proyecto sin previo aviso",
      "Ocultar las facturas de gastos a la empresa",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿Qué grupo se asegura de trasladar los requerimientos de uso diario al equipo técnico?",
    opciones: [
      "Vendedores externos",
      "Los usuarios representados en el equipo",
      "La comunidad vecinal",
      "Los inversores de capital",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta: "Un equipo de proyecto se caracteriza por ser:",
    opciones: [
      "Un grupo de personas con los mismos títulos habilitantes",
      "Personas con roles y responsabilidades diferenciadas",
      "Solamente gente que vive en el mismo edificio",
      "Personas que no conocen los objetivos del plan",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "En los proyectos externos, los stakeholders principales suelen estar:",
    opciones: [
      "Fuere de la organización",
      "Solamente en la planta baja de la empresa",
      "En otros países obligatoriamente",
      "Dentro de los archivos de lecciones aprendidas",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "El liderazgo en la gestión de proyectos es necesario porque ayuda a:",
    opciones: [
      "Forzar al equipo a trabajar sin descanso",
      "Toma de decisiones y gestión efectiva del equipo",
      "Reducir los impuestos que paga la empresa",
      "Aumentar el precio de venta final",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 2: Ciclos de Vida (Gestión de Proyectos)
  // ==========================================
  {
    nivel: 2,
    tema: "ciclo",
    pregunta: "¿Qué representan las etapas clave en la gestión de un proyecto?",
    opciones: [
      "El organigrama de la empresa promotora",
      "El denominado 'ciclo de vida del proyecto'",
      "El manual de usuario del software",
      "La lista de precios de los proveedores",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "Sobre el ciclo de vida, ¿qué característica menciona el apunte respecto a la linealidad de las etapas?",
    opciones: [
      "Deben ser siempre lineales y sin saltos",
      "No siempre son lineales: pueden superponerse o ejecutarse de forma iterativa",
      "No existen etapas, solo existe la ejecución",
      "Solo son lineales en proyectos de desarrollo de software",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta: "¿Qué comprende específicamente la Etapa 1: Inicio?",
    opciones: [
      "El desarrollo del cronograma detallado",
      "La definición formal del proyecto y la autorización para comenzar",
      "La contratación del personal de limpieza",
      "La entrega formal del resultado al cliente",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta: "¿Cuáles son los documentos clave de la etapa de Inicio?",
    opciones: [
      "Facturas de compra y contratos de alquiler",
      "Acta de constitución y la identificación de stakeholders",
      "Diagramas de Gantt y presupuestos de riesgos",
      "Manuales técnicos y guías de estilos CSS",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "Según el material, ¿cuál es la etapa más extensa e importante del ciclo?",
    opciones: [
      "Etapa de Inicio",
      "Etapa de Cierre",
      "Etapa de Planificación",
      "Etapa de Comunicación",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "¿Qué debe incluir un 'Plan de Gestión del Proyecto' desarrollado en la etapa de planificación?",
    opciones: [
      "Solo el listado de nombres del equipo",
      "Plan de alcance, cronograma, presupuesto, riesgos, calidad y comunicaciones",
      "Únicamente los requerimientos de hardware",
      "La biografía de los fundadores de la organización",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta: "¿Qué ocurre fundamentalmente en la Etapa 3: Ejecución?",
    opciones: [
      "Se detiene el proyecto para analizar costos",
      "Se realiza el trabajo definido en el plan y se generan los entregables",
      "Se decide si el proyecto es viable o no",
      "Se archivan todos los documentos para el cierre",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "Durante la ejecución, el Director del Proyecto debe gestionar activamente:",
    opciones: [
      "La estrategia de marketing externa únicamente",
      "Al equipo, las comunicaciones y los recursos",
      "El servidor de bases de datos personal",
      "La competencia del mercado",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta: "¿En qué consiste la Etapa 4: Seguimiento y Control?",
    opciones: [
      "En esperar a que el proyecto termine para evaluar",
      "En monitorear el progreso real, compararlo con el plan e identificar desvíos",
      "En controlar que el cliente pague a tiempo todas las cuotas",
      "En crear un nuevo acta de constitución cada semana",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "¿Cómo se desarrolla temporalmente la etapa de Seguimiento y Control?",
    opciones: [
      "Antes de iniciar la planificación",
      "En paralelo con la ejecución",
      "Únicamente después del cierre",
      "Solo cuando hay problemas graves de presupuesto",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta: "¿Qué tareas comprende la Etapa 5: Cierre?",
    opciones: [
      "Reiniciar el ciclo de planificación",
      "Entrega formal al cliente, lecciones aprendidas y liberación del equipo",
      "Contratación de más personal para nuevos proyectos",
      "Modificar el alcance original del proyecto",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "Respecto a los proyectos que fallan, ¿cuál es la observación del apunte?",
    opciones: [
      "Suelen fallar por falta de esfuerzo físico en la ejecución",
      "Suelen hacerlo por una planificación insuficiente",
      "Fallan siempre por culpa exclusiva del cliente",
      "Nunca fallan si se usa Bootstrap en el desarrollo",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "¿Cuál es el rol estratégico de los proyectos en las organizaciones?",
    opciones: [
      "Sustituir a todos los empleados por software",
      "Ser el vehículo para ejecutar la estrategia y generar valor",
      "Evitar el contacto con stakeholders externos",
      "Reducir la calidad para ahorrar presupuesto",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "¿Qué significa el patrocinio directivo (Sponsor) en el ciclo de vida?",
    opciones: [
      "Alguien que compra el producto al final",
      "Apoyo institucional para asegurar recursos y respaldo",
      "Un software que automatiza tareas",
      "Un competidor que observa el proyecto",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "Al alinear un proyecto con la estrategia global de la organización, se busca:",
    opciones: [
      "Generar valor para la empresa",
      "Aumentar la burocracia interna",
      "Ignorar las necesidades del mercado",
      "Eliminar el acta de constitución",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "La identificación de las áreas de mejora y éxitos se registra en el cierre mediante:",
    opciones: [
      "El cronograma real",
      "La documentación de lecciones aprendidas",
      "El plan de riesgos",
      "El contrato con los vendedores",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "¿Qué se busca minimizar en la planificación mediante una inversión de tiempo adecuada?",
    opciones: [
      "La cantidad de entregables",
      "Los problemas durante la ejecución",
      "El número de reuniones con el equipo",
      "La cantidad de clientes externos",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta: "La fase de Operación y Mantenimiento suele caracterizarse por:",
    opciones: [
      "Ser la etapa más corta",
      "Ser generalmente la fase más larga del ciclo",
      "No requerir ningún tipo de gestión",
      "Ocurrir antes de la definición de requisitos",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "¿Qué implica tomar acciones correctivas en Seguimiento y Control?",
    opciones: [
      "Volver a la etapa de inicio obligatoriamente",
      "Realizar ajustes para corregir desviaciones respecto al plan",
      "Despedir a todo el personal involucrado",
      "Ocultar los errores a los directivos",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "El éxito de un proyecto organizacional se mide principalmente por:",
    opciones: [
      "Solo por el bajo costo final",
      "Por el valor generado para la organización",
      "Por no haber tenido ningún cambio durante un año",
      "Por la cantidad de expertos técnicos involucrados",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 2: Manifiesto Ágil (Gestión de Proyectos)
  // ==========================================
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "¿En qué fecha y por cuántos profesionales fue acuñado El Manifiesto Ágil?",
    opciones: [
      "Agosto de 2011, por Mark Otto y Jacob Thornton",
      "Febrero de 2001, por diecisiete profesionales",
      "Enero de 1995, por la W3C",
      "Mayo de 1986, por Barry Boehm",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "Según los 4 valores ágiles, ¿qué se valora más que los procesos y las herramientas?",
    opciones: [
      "La documentación técnica detallada",
      "A los individuos y las interacciones",
      "El seguimiento estricto del plan",
      "La negociación de contratos legales",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "Completar el valor: 'Software en funcionamiento por encima de...'",
    opciones: [
      "Cualquier tipo de reunión",
      "El presupuesto del cliente",
      "Una documentación completa",
      "La velocidad de los servidores",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "¿Qué es más vital que la negociación de un contrato según el manifiesto?",
    opciones: [
      "La colaboración con el cliente",
      "El diseño de la base de datos",
      "La firma del sponsor del proyecto",
      "El análisis de riesgos en cascada",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "Frente a seguir un plan preestablecido, el Manifiesto Ágil prioriza:",
    opciones: [
      "Ignorar las peticiones del usuario",
      "Responder a cualquier cambio que se produzca",
      "Documentar cada cambio en la arquitectura",
      "Finalizar el proyecto lo antes posible",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta: "¿Cuál es la medida principal de progreso en un desarrollo ágil?",
    opciones: [
      "La cantidad de horas de trabajo acumuladas",
      "Un software que funciona",
      "El número de líneas de código escritas",
      "La aprobación parcial del Scrum Master",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "El principio N° 10 de la agilidad dice que la simplicidad es el arte de:",
    opciones: [
      "Escribir código en pocas palabras",
      "Maximizar la cantidad de trabajo no realizado",
      "Diseñar interfaces con pocos colores",
      "Eliminar por completo la documentación",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "¿Cuál es el método más eficiente para transmitir información según los principios ágiles?",
    opciones: [
      "Correos electrónicos detallados",
      "Manuales de procedimiento impresos",
      "La conversación cara a cara",
      "Notificaciones a través del software de gestión",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "Según el Manifiesto, ¿cómo deben actuar los equipos ante los cambios en requisitos?",
    opciones: [
      "Rechazarlos si ocurren después de la planificación",
      "Acogerlos con beneplácito, incluso en etapas tardías",
      "Cobrarlos como extras por fuera del presupuesto",
      "Esperar a la fase de cierre para implementarlos",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "¿Qué promueven los procesos ágiles respecto al desarrollo sostenible?",
    opciones: [
      "Trabajar al máximo antes de cada entrega",
      "Mantener un ritmo constante de forma indefinida",
      "Gastar el presupuesto en servidores ecológicos",
      "Reducir las pruebas de resistencia del software",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "¿De dónde surgen las mejores arquitecturas, requisitos y diseños?",
    opciones: [
      "De un plan detallado del director del proyecto",
      "De equipos auto-organizados",
      "De los vendedores y socios externos únicamente",
      "De las herramientas CASE más avanzadas",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "El principio N° 12 indica que, a intervalos regulares, el equipo debe reflexionar sobre:",
    opciones: [
      "El presupuesto gastado hasta el momento",
      "Cómo ser más eficaz y sintonizar su comportamiento",
      "Quién cometió más errores en el código",
      "Los nuevos proyectos que lanzará la competencia",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "¿Cuál es el tamaño recomendado para grupos ágiles según la descripción?",
    opciones: [
      "Entre 20 y 30 integrantes",
      "Grupos grandes dispersos en varios edificios",
      "Grupos pequeños, menores a 10 integrantes",
      "Solamente 2 integrantes: cliente y desarrollador",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta: "En una metodología ágil, el cliente es considerado:",
    opciones: [
      "Alguien a quien se ve solo al inicio y al final",
      "Parte activa del equipo de desarrollo",
      "La persona encargada de redactar los manuales",
      "Un stakeholder que no puede proponer cambios",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta: "Una característica clave del desarrollo de software ágil es:",
    opciones: [
      "Fuerte énfasis en la arquitectura inicial",
      "Mucha documentación exhaustiva de procesos",
      "Entregas pequeñas con ciclos rápidos y etapas cortas",
      "Contratos tradicionales rígidos e inamovibles",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta: "El enfoque ágil es especialmente útil cuando hay:",
    opciones: [
      "Un presupuesto ilimitado y mucho tiempo disponible",
      "Un alto nivel de incertidumbre o requisitos cambiantes",
      "Requisitos fijos que no cambiarán por años",
      "Personal con poca experiencia técnica",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta: "Los procesos ágiles se basan en heurísticas provenientes de:",
    opciones: [
      "Prácticas de producción de código",
      "Teorías matemáticas del siglo XIX",
      "Regulaciones gubernamentales internacionales",
      "Sistemas de producción en serie pesados",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta: "¿Qué significa que el proceso sea 'cooperativo'?",
    opciones: [
      "Que los socios aportan el dinero a tiempo",
      "Que el equipo técnico trabaja sin intervención del usuario",
      "Que cliente y desarrolladores trabajan juntos constantemente",
      "Que todos los empleados deben ser expertos en gestión",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta: "¿Qué aumenta la agilidad del equipo según el principio N° 9?",
    opciones: [
      "La compra de nuevos equipos de hardware",
      "La atención continua a la excelencia técnica y el buen diseño",
      "El aumento del personal administrativo",
      "Reducir las reuniones semanales",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "¿Cuál de estas opciones define un proceso de desarrollo como Ágil?",
    opciones: [
      "Cualquier proceso que no use diagramas de Gantt",
      "Aquel que alinee su metodología con el Manifiesto Ágil",
      "Todo proyecto que dure menos de seis meses",
      "Solo proyectos desarrollados por startups tecnológicas",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 2: Modelos de Desarrollo (Gestión de Proyectos)
  // ==========================================
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Cómo se caracterizan los denominados 'Modelos Tradicionales' de desarrollo?",
    opciones: [
      "Por no requerir documentación en ninguna etapa",
      "Énfasis en la planificación completa al inicio y documentación exhaustiva",
      "Por ser extremadamente flexibles ante cualquier cambio repentino",
      "Por no tener fases predefinidas ni orden lógico",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta: "¿Quién propuso originalmente el Modelo en Cascada en 1970?",
    opciones: [
      "Barry Boehm",
      "Ian Sommerville",
      "Winston W. Royce",
      "Ken Schwaber",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "En el modelo en cascada, ¿cuándo se permite el inicio de una etapa?",
    opciones: [
      "Al mismo tiempo que la anterior para ganar velocidad",
      "Solo cuando el cliente lo solicita formalmente",
      "Al finalizar la anterior, tomando como insumo sus datos",
      "Únicamente después de haber entregado el software completo",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Cuál es una de las desventajas críticas del modelo en cascada según la Tabla 1?",
    opciones: [
      "Es demasiado simple para proyectos reales",
      "No genera ningún tipo de documentación",
      "El cliente no ve el producto hasta el final",
      "Requiere que el equipo sea menor a 10 personas",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Qué problema del modelo en cascada busca resolver el Modelo de Prototipado?",
    opciones: [
      "La falta de programadores expertos en la empresa",
      "La dificultad de definir requisitos completos al inicio",
      "El alto costo de las herramientas de bases de datos",
      "La comunicación constante con el Scrum Master",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta: "Según Pressman, el prototipado es básicamente un proceso de:",
    opciones: [
      "Documentación rigurosa paso a paso",
      "Prueba y error",
      "Instalación directa en el servidor del cliente",
      "Planificación sin cambios de último momento",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta: "¿Qué combina el Modelo Incremental en su enfoque de desarrollo?",
    opciones: [
      "Modelos externos con recursos limitados",
      "Elementos de la cascada con la filosofía iterativa del prototipado",
      "La agilidad de XP con los cuadrantes de riesgo",
      "Reuniones diarias con documentación exhaustiva",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta: "En el Modelo Incremental, el primer incremento se denomina:",
    opciones: [
      "Módulo de diseño",
      "Incremento N",
      "Núcleo funcional básico del sistema",
      "Manual de procedimiento inicial",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Cuál es el eje central de cada iteración en el Modelo en Espiral de Barry Boehm?",
    opciones: [
      "La velocidad de entrega del código",
      "El análisis y la gestión del riesgo",
      "La cantidad de hitos en el diagrama de Gantt",
      "La reducción de las variables de calidad",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "Los 4 cuadrantes de cada ciclo en espiral son: Planificación, Ingeniería, Evaluación y...",
    opciones: [
      "Desarrollo de Sprint",
      "Negociación de contrato",
      "Análisis de riesgos",
      "Documentación final",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿A qué rol de Scrum pertenece la responsabilidad de gerenciar los proyectos, demandas y plazos?",
    opciones: [
      "Scrum Master",
      "Product Owner",
      "Dev Team",
      "Stakeholder Externo",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta: "¿Cuál es la función principal del Scrum Master?",
    opciones: [
      "Desarrollar el núcleo básico del código",
      "Coordinar el equipo delegando papeles y acompañando en la ejecución",
      "Pagar el sueldo de los inversores",
      "Definir el color de fondo de las páginas con CSS",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta: "¿Para quién es óptimo el uso del método Kanban?",
    opciones: [
      "Para quienes prefieren la documentación técnica pesada",
      "Para los amantes de las checklists y sistemas visuales",
      "Solo para equipos que trabajan en remoto en distintos países",
      "Para proyectos con un solo incremento funcional",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta: "¿Cuáles son las 3 etapas clásicas de una columna Kanban?",
    opciones: [
      "Start, Mid, End",
      "Idea, Code, Publish",
      "To do, Doing, Done",
      "Plan, Execute, Close",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta: "¿Cuál es el foco principal de la metodología Lean?",
    opciones: [
      "Escribir la mayor cantidad de código posible",
      "Identificar y eliminar eficientemente los desperdicios",
      "Reunirse dos veces al día para chequear el progreso",
      "Fomentar la jerarquía rígida dentro del equipo",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta: "¿Qué significa MVP en el contexto de Lean?",
    opciones: [
      "Manager Variable Program",
      "Módulo Visual Predictivo",
      "Mínimo Producto Viable",
      "Manual de Verificación Principal",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Qué componente de la metodología SMART exige definir un plazo máximo para evitar la procrastinación?",
    opciones: [
      "S (Specific)",
      "M (Measurable)",
      "T (Time - related)",
      "A (Attainable)",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "La programación extrema (XP) trabaja principalmente para producir:",
    opciones: [
      "Documentación manual para cada usuario",
      "Software de alta calidad y bienestar del equipo",
      "Sistemas en serie altamente repetitivos",
      "Prototipos desechables cada semana",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta: "La sigla SMART se usa para:",
    opciones: [
      "Cerrar proyectos de forma segura",
      "Definir metas objetivas y realistas",
      "Calcular la ruta crítica de un diagrama",
      "Elegir al mejor Director de Proyecto",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Cuál es un requisito fundamental para que el método Kanban funcione correctamente?",
    opciones: [
      "Que no haya comunicación entre el equipo",
      "Un engagement muy intenso por parte del equipo",
      "Contratos legales firmados por triplicado",
      "No usar tarjetas visuales digitales",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 3: Redes AON/DFA (Gestión de Proyectos)
  // ==========================================
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Qué es un Diagrama de Red en el contexto de la gestión de tiempos?",
    opciones: [
      "Una lista de correos electrónicos de los stakeholders",
      "Una herramienta para secuenciar actividades y visualizar dependencias lógicas",
      "Un gráfico que muestra únicamente el presupuesto final",
      "Un software para el diseño de interfaces de usuario",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "Cuando una limitación física determina que una tarea debe empezar después de otra, hablamos de:",
    opciones: [
      "Dependencia discrecional",
      "Dependencia externa",
      "Dependencia obligatoria",
      "Dependencia de mercado",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Cómo se define la 'Dependencia Discrecional' según el material?",
    opciones: [
      "Aquella que depende de leyes gubernamentales ajenas al proyecto",
      "La secuencia definida por el director de proyecto basándose en mejores prácticas",
      "El retraso obligado por la falta de recursos económicos",
      "La relación entre el equipo de desarrollo y los vendedores",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿A qué tipo de dependencia pertenecen los factores ajenos al equipo, como aprobaciones municipales?",
    opciones: [
      "Dependencia obligatoria",
      "Dependencia externa",
      "Dependencia técnica",
      "Dependencia secuencial",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "En los diagramas de redes, ¿qué significa el método AON (Activity on Node)?",
    opciones: [
      "Actividad en la flecha",
      "Actividad sobre el nodo (representada por rectángulos)",
      "Análisis Organizacional de Nodos",
      "Acción Operativa de Navegación",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "Dentro del Módulo 2, el Método del Diagrama de Precedencia también se conoce como:",
    opciones: [
      "DFA",
      "DPR o Red de Nodos",
      "Cronograma Digital",
      "Línea de Base Temporal",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Cuál es la principal característica del método DFA (Diagrama de Flechas)?",
    opciones: [
      "Los nodos representan actividades y las flechas relaciones",
      "Las flechas representan actividades y los nodos eventos o hitos",
      "Solo se usa para proyectos con presupuestos muy pequeños",
      "Es el método más flexible para proyectos complejos de software",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "Para estimar la duración en PERT, se deben considerar tres tipos de fechas:",
    opciones: [
      "Fija, Variable y Estimada",
      "Pasada, Presente y Futura",
      "Más probable, optimista y pesimista",
      "Teórica, Real y Crítica",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Qué objetivo tiene el 'Forward Pass' o cálculos hacia adelante en una red?",
    opciones: [
      "Determinar la duración mínima del proyecto analizando las fechas tardías",
      "Determinar las fechas más tempranas de inicio (ES) y finalización (EF)",
      "Calcular cuántas personas se pueden despedir del equipo",
      "Modificar el alcance para reducir los costos",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "Según la fórmula técnica de Nivel 3, ¿cómo se obtiene el EF (Early Finish)?",
    opciones: [
      "EF = LS - Duración",
      "EF = ES + Duración",
      "EF = LF + Holgura",
      "EF = Fecha actual + Margen de riesgo",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Qué técnica permite determinar las fechas tardías (LS y LF) trabajando desde el final hacia el inicio?",
    opciones: [
      "Forward pass",
      "Backward pass (cálculos hacia atrás)",
      "Estimación de Delphi",
      "Ruta simplificada",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta: "El Early Start (ES) de una actividad sucesora es igual a:",
    opciones: [
      "El mayor Early Finish (EF) de sus actividades precedentes",
      "El presupuesto acumulado del nodo anterior",
      "Cero, siempre que empiece en lunes",
      "La suma de todas las holguras del proyecto",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Cuál de estas opciones describe correctamente el objetivo del Método PERT?",
    opciones: [
      "Eliminar el riesgo de accidentes laborales",
      "Estimar tiempos ante la incertidumbre en las actividades",
      "Automatizar la contratación de expertos de apoyo",
      "Garantizar que no existan dependencias obligatorias",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta: "En una red DPR, el nodo o rectángulo generalmente contiene:",
    opciones: [
      "El nombre del stakeholder responsable",
      "El número de actividad y el plazo de duración",
      "La lista de herramientas JS utilizadas",
      "El acta de constitución resumida",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Qué decisión crítica debe tomar el director de proyecto respecto al Diagrama de Red?",
    opciones: [
      "El orden exacto de la secuencia lógica de las actividades",
      "La elección del color de las flechas del diagrama",
      "A qué vendedores externos comprarles hardware",
      "Cuántas hojas impresas entregar al cliente",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "Si la disponibilidad de recursos es limitada, el diagrama de red puede obligar a:",
    opciones: [
      "Cancelar el proyecto inmediatamente",
      "Modificar la programación original de las tareas",
      "Reducir los sueldos del personal directivo",
      "Eliminar el proceso de planificación iterativa",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Para qué sirve el Gráfico de Empleo de Recursos en combinación con la red?",
    opciones: [
      "Para saber cuánto ganará cada socio al finalizar",
      "Para indicar cuántas personas se necesitan en cada semana",
      "Para medir el ancho de banda de los servidores",
      "Para reemplazar al diagrama de Gantt en la etapa de cierre",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "Al identificar relaciones de interactividad lógica entre actividades, buscamos:",
    opciones: [
      "Aumentar el caos organizativo",
      "Asegurar que el proyecto se cumpla en el horizonte temporal establecido",
      "Hacer que el código fuente sea más complejo",
      "Aislar al equipo del representante del cliente",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Qué herramienta es fundamental para visualizar la red según el apunte de Tiempos?",
    opciones: [
      "Buscador de Google",
      "Programas de computación específicos para administración",
      "Manuales de diseño gráfico básico",
      "Editores de código como VS Code únicamente",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "La principal diferencia entre el diagrama de PERT y de Red general es que PERT enfatiza:",
    opciones: [
      "La estética de los nodos",
      "La estimación detallada de tiempos bajo incertidumbre",
      "La eliminación total de los hitos",
      "La jerarquía del acta de constitución",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 3: Cálculo de Holguras y Ruta Crítica
  // ==========================================
  {
    nivel: 3,
    tema: "critica",
    pregunta: "¿Qué representa la Holgura de una actividad en un proyecto?",
    opciones: [
      "El costo extra que se le cobra al cliente por cambios",
      "El tiempo que una actividad puede retrasarse sin afectar la fecha final",
      "La cantidad de personas que sobran en un equipo de trabajo",
      "El margen de ganancia neta del director del proyecto",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta: "¿Cómo se define la Ruta Crítica en un diagrama de red?",
    opciones: [
      "La secuencia de actividades con menor importancia técnica",
      "La ruta de actividades de mayor duración total",
      "El conjunto de tareas que el cliente no revisa",
      "Cualquier ruta que no contenga hitos de verificación",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta: "¿Cuál es la característica primordial de una Variable Crítica?",
    opciones: [
      "Que no requiere recursos humanos para ejecutarse",
      "Que si cambia su duración, también cambiará la duración total del proyecto",
      "Que su costo es siempre el más bajo de toda la planificación",
      "Que se ejecuta siempre fuera de la jornada laboral",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "En una planificación avanzada, ¿qué valor de holgura tienen las actividades en la ruta crítica?",
    opciones: [
      "Holgura infinita",
      "Holgura variable según el mes",
      "Holgura igual a cero",
      "Holgura máxima de 10 días",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta: "¿Cuál es la fórmula técnica para calcular la Holgura Total?",
    opciones: [
      "Holgura = Costo total - Presupuesto real",
      "Holgura = LF - EF (o LS - ES)",
      "Holgura = Duración estimada / Recursos usados",
      "Holgura = Inicio temprano + Fin tardío",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "Si una actividad tiene un Fin Temprano (EF) de 10 y un Fin Tardío (LF) de 15, ¿cuál es su holgura?",
    opciones: ["10 días", "15 días", "5 días", "0 días"],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "¿Qué sucede si una tarea de la ruta crítica se termina con retraso?",
    opciones: [
      "No pasa nada si hay otras rutas alternativas",
      "Se debe reiniciar el acta de constitución",
      "Afectará directamente la duración de todo el proyecto",
      "Aumentará automáticamente la holgura de las demás tareas",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "El tiempo que se puede demorar una actividad sin retrasar el inicio temprano de su sucesora se llama:",
    opciones: [
      "Holgura Total",
      "Holgura Libre",
      "Margen Operativo",
      "Buffer Crítico",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta: "¿Qué técnica se utiliza para calcular el LS (Late Start)?",
    opciones: [
      "Sumar la duración al ES",
      "Restar la duración al LF",
      "Multiplicar el EF por los recursos",
      "Consultar al cliente el último día",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta: "¿Para qué sirve el método CPM (Ruta Crítica) principalmente?",
    opciones: [
      "Para estimar tiempos cuando no conocemos nada del proyecto",
      "Para identificar la secuencia más larga que determina el final",
      "Para reducir el costo de las licencias de software",
      "Para diseñar el logo de la organización promotora",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta: "El LF (Fin Tardío) de una actividad se determina según:",
    opciones: [
      "El mayor Fin Temprano del nodo inicial",
      "El menor de los Inicios Tardíos (LS) de todas sus sucesoras",
      "La suma de todos los tiempos optimistas de PERT",
      "El criterio arbitrario de los socios externos",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta: "Un proyecto puede tener más de una ruta crítica:",
    opciones: [
      "No, por definición solo existe una única ruta",
      "Sí, si existen múltiples secuencias con la misma duración máxima",
      "Solo si el presupuesto es compartido con otra empresa",
      "Únicamente en el Módulo 1 del programa",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "¿Qué busca el director de proyecto al realizar la Nivelación de Recursos?",
    opciones: [
      "Que todos los empleados cobren exactamente lo mismo",
      "Minimizar las fluctuaciones en el personal requerido y nivelarlos",
      "Eliminar todas las actividades no críticas de la planificación",
      "Aumentar la duración de la ruta crítica artificialmente",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta: "La planificación en redes surgió en la década de:",
    opciones: [
      "1990 junto con el CSS",
      "1950",
      "1910 con el Taylorismo",
      "2011 con Twitter",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "Si conocemos con exactitud los tiempos de cada actividad, el método recomendado es:",
    opciones: [
      "PERT",
      "CPM (Camino Crítico)",
      "Análisis de Pareto",
      "Diseño responsivo de redes",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "¿A qué fase pertenece el cálculo de las holguras en la gestión del tiempo?",
    opciones: [
      "Al inicio para definir el acta",
      "Al cierre para archivar documentos",
      "A la planificación de los métodos de redes",
      "Únicamente al soporte técnico post-entrega",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "¿Qué es indispensable considerar en una red además de la secuencia de actividades?",
    opciones: [
      "La disponibilidad de recursos",
      "La dirección de correo de los programadores",
      "La guía de estilos del Módulo 1",
      "Los frameworks de Frontend a utilizar",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta: "Una tarea NO crítica es aquella que:",
    opciones: [
      "No debe realizarse bajo ningún concepto",
      "Tiene una holgura mayor a cero",
      "No consume recursos económicos de la organización",
      "Es responsabilidad exclusiva de stakeholders gubernamentales",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "Para encontrar la ruta crítica, el último paso del proceso técnico es:",
    opciones: [
      "Identificar dependencias",
      "Estimar la duración de cada tarea",
      "Calcular la holgura total",
      "Listar a los interesados principales",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta: "Al gestionar equilibradamente las holguras, el director busca:",
    opciones: [
      "Maximizar los gastos hormiga",
      "Garantizar que los desvíos menores no retrasen el proyecto total",
      "Eliminar la necesidad de reportes de avance diarios",
      "Reducir la comunicación cara a cara",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 3: Control de Agenda (Gestión de Proyectos)
  // ==========================================
  {
    nivel: 3,
    tema: "agenda",
    pregunta: "¿Qué es fundamentalmente un Diagrama de Gantt?",
    opciones: [
      "Una lista de nombres de los programadores",
      "Un gráfico de barras que muestra la duración de actividades en el tiempo",
      "Un cálculo matemático para predecir costos de hardware",
      "Una reunión semanal entre el cliente y el equipo",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "En un gráfico de Gantt, ¿qué representa la longitud de cada barra?",
    opciones: [
      "La importancia política de la tarea",
      "La duración de la tarea o etapa del proceso",
      "La cantidad de dinero gastado",
      "El número de personas asignadas",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Para qué sirven los 'Hitos' dentro del cronograma de un proyecto?",
    opciones: [
      "Para pagarle a los proveedores externos",
      "Como puntos de verificación y momentos importantes",
      "Para castigar al personal que se atrasa",
      "Como carpetas donde se guarda el código fuente",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Cuál es la utilidad de comparar los plazos reales con los estimados en el Gantt?",
    opciones: [
      "No tiene ninguna utilidad práctica",
      "Permite alertar sobre problemas futuros y aplicar acciones correctivas",
      "Sirve únicamente para despedir al director de proyecto",
      "Eliminar por completo el presupuesto original",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Qué información proveen los 'reportes sobre el estado de avance'?",
    opciones: [
      "La vida personal de los empleados",
      "Información sobre fechas planificadas cumplidas y las que no",
      "Solo la lista de precios de la competencia",
      "El acta de constitución del proyecto vecino",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "Cuando un informe de avance detecta un problema futuro, el director debe:",
    opciones: [
      "Ocultarlo hasta el cierre del proyecto",
      "Determinar si ha cambiado la agenda y aplicar acciones",
      "Aumentar el alcance sin consultar los costos",
      "Finalizar la etapa de seguimiento inmediatamente",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Qué sucede si es necesario actualizar la agenda por cambios detectados?",
    opciones: [
      "Se debe notificar a los stakeholders sobre dichos cambios",
      "El proyecto se cancela por falta de planificación",
      "Se eliminan los hitos para que no haya registros",
      "Se debe contratar a un nuevo Scrum Master",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta: "El 'control de agenda' busca principalmente asegurar que:",
    opciones: [
      "Se gaste menos dinero del planeado inicialmente",
      "El proyecto se cumpla en el horizonte temporal establecido",
      "Todos los programadores usen la misma computadora",
      "No existan dependencias discrecionales entre tareas",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "Según el apunte, ¿qué softwares comunes cuentan con planillas para diseñar diagramas de Gantt?",
    opciones: [
      "Solamente software espacial del C.E.R.N.",
      "Excel y Google Docs",
      "WhatsApp y Telegram",
      "Programas de diseño gráfico para artistas",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Qué efecto puede tener aplicar acciones correctivas en los plazos de la agenda?",
    opciones: [
      "Ningún efecto sobre otras variables",
      "Impacto en el alcance, los costos o la calidad del proyecto",
      "Reducción automática de los impuestos de la empresa",
      "Mejora inmediata de la conexión de red externa",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "En la gestión de tiempos del PMBOK, el cronograma debe integrar:",
    opciones: [
      "Las fotos del equipo y el logo de la empresa",
      "La secuencia, duración, recursos y control de cambios",
      "Únicamente los salarios de los vendedores externos",
      "La lista de los próximos proyectos a realizar",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta: "¿Qué significa el concepto de 'Línea Base' de la agenda?",
    opciones: [
      "La última fila del diagrama de red",
      "El plan de tiempos aprobado y original para comparar el progreso",
      "El costo más bajo registrado en el proyecto",
      "La fecha de cumpleaños de los stakeholders principales",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta: "¿Por qué el Gantt facilita la trazabilidad del proyecto?",
    opciones: [
      "Porque asigna nombres al azar a cada barra",
      "Porque permite ver las dependencias entre las tareas cronológicamente",
      "Porque requiere internet para funcionar correctamente",
      "Porque se imprime en hojas de color verde",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta: "El control de agenda es un proceso que debe realizarse:",
    opciones: [
      "Una sola vez al principio del proyecto",
      "De forma periódica a lo largo de toda la ejecución",
      "Solamente si el cliente está enojado con el progreso",
      "Al día siguiente del cierre formal del proyecto",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Cuál de estos factores NO debería causar cambios en los plazos estimados?",
    opciones: [
      "Retraso en la entrega de materiales de proveedores",
      "Cambios en el color de las tazas de café de la oficina",
      "Enfermedad imprevista de un experto clave",
      "Aprobación gubernamental demorada más de lo planeado",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "Si una tarea que NO es de la ruta crítica se demora 2 días más de su EF:",
    opciones: [
      "El proyecto total se atrasa obligatoriamente 2 días",
      "No afecta el final siempre que el retraso sea menor a su holgura",
      "El director del proyecto debe ser reemplazado",
      "Se debe actualizar el acta de constitución de inmediato",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Cuál es el principal resultado del proceso de control de agenda?",
    opciones: [
      "La entrega final del producto",
      "La actualización de los cronogramas según la realidad",
      "El pago de los honorarios a los vendedores",
      "La elección del lenguaje de programación",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta: "La gestión del tiempo garantiza el éxito del proyecto solo si:",
    opciones: [
      "Es comunicada constantemente al equipo y stakeholders",
      "Se guarda bajo llave por el personal directivo",
      "Nadie del equipo la conoce para no generar estrés",
      "Solo el experto de apoyo técnico la supervisa",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta: "El Diagrama de Gantt se considera más apropiado para proyectos:",
    opciones: [
      "En etapa de pura incertidumbre inicial",
      "En curso y ejecución donde se requieren fechas límites precisas",
      "Que no tienen presupuesto ni personal asignado",
      "De una sola tarea con duración infinita",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta: "Un cronograma bien administrado permite:",
    opciones: [
      "Evitar cualquier tipo de reunión futura",
      "Apreciar de un solo vistazo todas las fechas clave",
      "Eliminar el uso de la variable de Calidad",
      "Garantizar que no existan stakeholders interesados",
    ],
    correcta: 1,
  },
];

/**
 * BASE DE DATOS DE PREGUNTAS - SIMULACRO ISPC
 * Estructura: 240 preguntas totales
 * Niveles: 1 (Junior), 2 (Mid), 3 (Senior)
 * Temas: 'html', 'css', 'bootstrap', 'mix'
 */

export const bancoPreguntas = [
  // ==========================================
  // NIVEL 1 - HTML (Junior)
  // ==========================================
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Quién creó y puso a prueba el lenguaje HTML originalmente?",
    opciones: [
      "Håkon Wium Lie",
      "Tim Berners-Lee",
      "Bert Bos",
      "Ivana Soledad Rojas",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Qué significa HTML según la documentación?",
    opciones: [
      "Hypertext Manual Language",
      "High Text Markup Language",
      "HyperText Markup Language",
      "Hyperlinks and Text Management",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "Según el apunte, ¿en qué año comenzó a utilizarse el HTML como lenguaje de marcado?",
    opciones: ["1989", "1996", "1991", "2011"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "Según las reglas gramaticales, ¿cuál es la extensión que debe tener un archivo web?",
    opciones: [".web", ".xml", ".txt", ".html"],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Qué etiqueta indica al navegador que el archivo es efectivamente una página HTML5?",
    opciones: ["<html>", "<!DOCTYPE html>", "<body>", "<head>"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Cuál es la función principal de la etiqueta <head>?",
    opciones: [
      "Mostrar el contenido visual en pantalla",
      "Contener la información lógica de la página (título, codificación)",
      "Crear encabezados de nivel 1",
      "Insertar imágenes",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Qué etiqueta de meta-información define los caracteres especiales (acentos, tildes)?",
    opciones: [
      "<meta charset='utf-8'>",
      "<meta name='viewport'>",
      "<meta keywords>",
      "<title>",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Cuál es la forma correcta de insertar un comentario en HTML según el material?",
    opciones: [
      "/* Comentario */",
      "// Comentario",
      "<!-- Comentario -->",
      "# Comentario",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Cuántos niveles de títulos (headers) ofrece HTML?",
    opciones: ["3 niveles", "12 niveles", "10 niveles", "6 niveles"],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Cuál es la etiqueta recomendada para un 'título muy importante'?",
    opciones: ["<important>", "<h1>", "<h6>", "<header>"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Cómo se definen los elementos en una lista NO ordenada?",
    opciones: ["<ul> y <li>", "<ol> y <li>", "<list> y <item>", "<u> y <l>"],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Qué etiqueta permite resaltar visualmente una parte del texto sin considerar necesariamente su importancia?",
    opciones: ["<strong>", "<em>", "<mark>", "<b>"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Qué atributo obligatorio de <img> describe la imagen para personas con discapacidad visual?",
    opciones: ["src", "title", "alt", "link"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Qué etiqueta define el comienzo de una fila en una tabla?",
    opciones: ["<td>", "<th>", "<tr>", "<table>"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Qué atributo de formulario especifica a qué página se envían los datos para ser procesados?",
    opciones: ["method", "name", "action", "submit"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "En un formulario, ¿qué valor de 'method' envía los datos de forma oculta y permite mucha información?",
    opciones: ["get", "post", "send", "hidden"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Qué elemento HTML5 semántico define contenido autónomo e independiente (como un post de blog)?",
    opciones: ["<section>", "<article>", "<aside>", "<header>"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Cuál es la etiqueta correcta para insertar un pie de página?",
    opciones: ["<bottom>", "<end>", "<footer>", "<nav>"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Qué etiqueta agrupa un gráfico/imagen y su leyenda?",
    opciones: ["<image-box>", "<figcaption>", "<aside>", "<figure>"],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Cuál es la principal ventaja del HTML semántico según el material?",
    opciones: [
      "Poner colores",
      "Ayuda a que motores de búsqueda identifiquen contenido",
      "Hacer la página más rápida",
      "Aceptar comandos de JavaScript",
    ],
    correcta: 1,
  },

  // ==========================================
  // NIVEL 1 - CSS (Junior)
  // ==========================================
  {
    nivel: 1,
    tema: "css",
    pregunta: "¿Qué propuso el W3C a mediados de los 90 para HTML?",
    opciones: [
      "Un nuevo navegador",
      "Lenguaje de hojas de estilo específico",
      "Un buscador web",
      "Servidores Apache",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Cuáles fueron las dos propuestas que se unieron para formar el CSS actual?",
    opciones: ["HTML y XML", "CHSS y SSP", "Bootstrap y SASS", "JS y CSS"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿En qué año se publicó la primera recomendación oficial 'CSS Nivel 1'?",
    opciones: ["1991", "1995", "1996", "2012"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Qué nombre recibe el elemento de la sintaxis CSS que indica el componente HTML a modificar?",
    opciones: ["Propiedad", "Valor", "Selector", "Declaración"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "En la regla 'h1 { color: black; }', ¿qué representa la palabra 'color'?",
    opciones: ["Selector", "Valor", "Propiedad", "Unidad"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta: "¿Cómo se llama el selector representado por el asterisco (*)?",
    opciones: [
      "Selector de tipo",
      "Selector Universal",
      "Selector Global",
      "Selector Invisible",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Qué carácter se utiliza como prefijo para referenciar un selector de Clase (Class)?",
    opciones: ["# (almohadilla)", ": (dos puntos)", ". (punto)", "/ (barra)"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta: "¿Cuál es el prefijo obligatorio para un selector de ID?",
    opciones: ["# (almohadilla)", ". (punto)", "* (asterisco)", "@ (arroba)"],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Qué símbolo se utiliza para indicar un selector de hijo directo (Selectores avanzados)?",
    opciones: ["Espacio simple", "+ (más)", "> (signo mayor)", "~ (tilde)"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Cómo se llama el concepto donde los descendientes heredan valores de sus padres?",
    opciones: ["Copia", "Cascada", "Herencia", "Importación"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Cuál es el método de inserción de CSS 'menos recomendado' según el apunte?",
    opciones: [
      "Hojas externas",
      "Hojas internas",
      "Hojas en línea (inline)",
      "Mediante @import",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿En qué sección del documento HTML se declaran las hojas de estilo internas con <style>?",
    opciones: ["<body>", "<footer>", "<head>", "<div>"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Qué etiqueta se utiliza para enlazar una hoja de estilo EXTERNA?",
    opciones: ["<href>", "<css>", "<link>", "<style>"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Cuál de los siguientes es el atributo que indica la relación en <link>?",
    opciones: ["href", "type", "rel='stylesheet'", "media"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Cuál de estos métodos de inserción tiene la mayor prioridad según la cascada?",
    opciones: [
      "Defecto navegador",
      "Hojas externas",
      "Estilo en línea (inline)",
      "Hojas internas",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Cuál de estas unidades de medida es RELATIVA respecto de la pantalla del usuario?",
    opciones: ["px", "in", "cm", "mm"],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta: "La unidad de medida 'em' es relativa respecto a:",
    opciones: [
      "Ancho de pantalla",
      "La altura de la letra X",
      "El tamaño de letra empleado",
      "La resolución de pantalla",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿De cuántas columnas se compone la vista de cuadrícula (grid-view) estándar?",
    opciones: ["4 columnas", "8 columnas", "12 columnas", "24 columnas"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Qué técnica permite aplicar estilos según condiciones como el ancho de ventana?",
    opciones: [
      "Cascada avanzada",
      "Responsive Script",
      "@media (Media Query)",
      "Bootstrap Rules",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Cómo se llama la zona visible para el usuario que varía según el dispositivo?",
    opciones: ["Window view", "Canvas", "Screen box", "Viewport"],
    correcta: 3,
  },

  // ==========================================
  // NIVEL 1 - BOOTSTRAP (Junior)
  // ==========================================
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Quiénes desarrollaron originalmente Bootstrap dentro de Twitter?",
    opciones: [
      "Tim Berners-Lee y Bert Bos",
      "Mark Otto y Jacob Thornton",
      "Ivana Rojas y Jeremías Lopez",
      "Håkon Wium Lie",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Qué nombre de versión sigue el esquema 'Principal.Menor.Parche'?",
    opciones: [
      "Versionado Lógico",
      "Estructura Web",
      "Versionado Semántico",
      "Evolución de Software",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta: "En la versión v5.0.1, ¿qué representa el número final (1)?",
    opciones: [
      "Un cambio mayor incompatible",
      "Nueva funcionalidad compatible",
      "Corrección de errores (Parche)",
      "El nivel de diseño",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿En qué etiqueta HTML debe incluirse preferentemente el archivo CSS de Bootstrap?",
    opciones: [
      "Al final del <body>",
      "Dentro de <head>",
      "Dentro de <nav>",
      "Al final de la página",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "Según el apunte, ¿dónde deben incluirse preferentemente los archivos JS de Bootstrap?",
    opciones: [
      "En el <head>",
      "Al inicio del <body>",
      "Al final del <body>",
      "Dentro de un <footer>",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta: "¿Qué significa CDN en el contexto de instalación de Bootstrap?",
    opciones: [
      "Content Development Node",
      "Code Delivery Net",
      "Red de Distribución de Contenido (Content Delivery Network)",
      "Common Data Network",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es el contenedor que ocupa el 100% de la anchura en todos los puntos de interrupción?",
    opciones: [
      ".container-all",
      ".container",
      ".container-fluid",
      ".full-width",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿En cuántas columnas se divide el sistema de grilla (Grid) de Bootstrap?",
    opciones: ["6 columnas", "10 columnas", "12 columnas", "24 columnas"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "Para crear columnas de ancho automático en una fila, ¿qué clase se debe utilizar?",
    opciones: [".column", ".col", ".row-auto", ".grid-item"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es el prefijo de clase para el punto de interrupción 'Grande' (≥992px)?",
    opciones: [".col-sm-", ".col-md-", ".col-lg-", ".col-xl-"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Qué clase hace que una imagen sea responsiva, limitando su ancho al 100%?",
    opciones: [".img-responsive", ".responsive-img", ".img-fluid", ".img-fit"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Qué etiqueta HTML5 es recomendada al usar imágenes con texto relacionado en Bootstrap?",
    opciones: ["<div>", "<figure>", "<image-text>", "<box>"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "Para que una tabla tenga el estilo base de Bootstrap, ¿qué clase es imprescindible añadir?",
    opciones: [
      ".table-styled",
      ".table-bootstrap",
      ".table",
      ".tab-responsive",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "En los controles de formulario, ¿cuál es la clase base para etiquetas <label>?",
    opciones: [".label-form", ".form-label", ".text-label", ".input-label"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Qué clase se usa para crear el botón principal (color azul por defecto) en Bootstrap?",
    opciones: [".btn-blue", ".btn-primary", ".btn-first", ".btn-main"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es el nombre de la clase para mostrar mensajes de retroalimentación de tipo 'Peligro' (Rojo)?",
    opciones: [".alert-red", ".alert-error", ".alert-danger", ".alert-warning"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "La clase base obligatoria para comenzar una barra de navegación es:",
    opciones: [".nav", ".menu", ".navbar", ".navigation"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Qué clase de utilidad se utiliza para agregar un margen inferior en el eje Y?",
    opciones: [".margen-b-", ".mb-", ".p-bottom-", ".m-bottom-"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "En las utilidades de color, ¿cuál corresponde al color semántico del éxito (verde)?",
    opciones: [".text-green", ".text-positive", ".text-success", ".text-ok"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "Para ocultar un elemento en todos los tamaños de pantalla, ¿qué clase se usa?",
    opciones: [".invisible", ".d-none", ".hide-all", ".display-none"],
    correcta: 1,
  },

  // ==========================================
  // NIVEL 1 - MIX (HTML + CSS + Bootstrap Junior)
  // ==========================================
  {
    nivel: 1,
    tema: "mix",
    pregunta:
      "¿Qué combinación permite un mejor SEO y accesibilidad en un sitio con Bootstrap?",
    opciones: [
      "Usar solo divs con clases",
      "Usar etiquetas semánticas HTML5 con clases de Bootstrap",
      "Ignorar las etiquetas HTML y usar IDs CSS",
      "No usar contenedores",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "mix",
    pregunta:
      "Si en HTML defino <nav> y en CSS aplico color rojo al elemento, pero luego aplico la clase .bg-primary de Bootstrap, ¿qué domina?",
    opciones: [
      "El color rojo del CSS",
      "El azul de la clase .bg-primary (Bootstrap)",
      "Se mezclan y dan púrpura",
      "La etiqueta <nav>",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "mix",
    pregunta:
      "¿Cuál es el flujo de trabajo estándar propuesto por los apuntes?",
    opciones: [
      "Escribir lógica JS y luego CSS",
      "Maquetar con HTML5, dar estilo con CSS base y usar Bootstrap para componentes y respuesta",
      "Empezar por el Bootstrap y al final el HTML",
      "CSS interno domina siempre al externo",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "mix",
    pregunta:
      "¿Qué sucede si no incluimos el meta tag 'viewport' al usar Bootstrap?",
    opciones: [
      "La página no carga",
      "Bootstrap se bloquea",
      "El diseño responsivo no funcionará correctamente en dispositivos móviles",
      "El texto desaparece",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "mix",
    pregunta:
      "¿Cuál de estas opciones representa la herencia en un formulario Bootstrap?",
    opciones: [
      "El <input> hereda el ancho de su contenedor .row o .col",
      "El <button> hereda el título de la página",
      "Las clases heredan de las etiquetas ID",
      "El label se copia solo",
    ],
    correcta: 0,
  },

  // ==========================================
  // NIVEL 2 - HTML (Semi-Senior)
  // ==========================================
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "En una tabla compleja, si queremos que una celda ocupe 3 columnas de ancho, ¿qué atributo aplicamos a <td>?",
    opciones: ["rowspan='3'", "cols='3'", "colspan='3'", "grid-column='3'"],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "Según el orden recomendado para tablas estructuradas, ¿cuál es la secuencia correcta de etiquetas?",
    opciones: [
      "thead, tbody, tfoot",
      "thead, tfoot, tbody",
      "caption, head, body, foot",
      "header, main, footer",
    ],
    correcta: 1, // Nota: El PDF menciona que es recomendable thead, tfoot y al final tbody (Pág 26, PDF 01)
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "¿Qué sucede si aplicamos el atributo 'required' a un input de un formulario?",
    opciones: [
      "El campo se rellena solo",
      "El navegador impide enviar el formulario si el campo está vacío",
      "El campo solo acepta números",
      "El campo cambia de color a rojo automáticamente",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "¿Cuál es el objetivo del atributo 'autofocus' en un campo de entrada?",
    opciones: [
      "Hacer que el texto se vea más grande",
      "Poner el cursor automáticamente en ese campo al cargar la página",
      "Verificar que el email sea válido",
      "Zoom automático en móviles",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "Si usamos <input type='number' min='0' max='10' step='2'>, ¿cuál de estos valores sería INVÁLIDO según el step?",
    opciones: ["0", "2", "3", "4"],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "Para agrupar varias etiquetas <option> dentro de una lista desplegable y organizarlas por categorías, ¿qué etiqueta usamos?",
    opciones: ["<group>", "<optgroup>", "<selection>", "<category>"],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "¿Qué etiqueta de HTML5 representa una sección que solo está indirectamente relacionada con el contenido principal (ej. barras laterales)?",
    opciones: ["<section>", "<article>", "<aside>", "<nav>"],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "¿Qué diferencia existe entre <article> y <section> según el material?",
    opciones: [
      "No hay diferencia",
      "Article es para contenido autónomo/independiente, Section es una agrupación temática",
      "Section siempre va dentro de Article",
      "Article solo sirve para periódicos",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "Dentro de una etiqueta <footer>, ¿qué elementos se recomienda incluir según la documentación?",
    opciones: [
      "Videos y Audios",
      "Información de autoría, contacto y mapas del sitio",
      "Solo el logo de la empresa",
      "Menús desplegables principales",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "¿Es válido tener más de un elemento <header> en un mismo documento HTML5?",
    opciones: [
      "No, solo uno por página",
      "Sí, pero no pueden estar anidados dentro de otro footer o address",
      "Sí, uno para cada etiqueta <div>",
      "No, HTML5 solo permite uno en el body",
    ],
    correcta: 1,
  },

  // ==========================================
  // NIVEL 2 - CSS (Semi-Senior)
  // ==========================================
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "En el Modelo de Cajas, ¿cuál es el orden correcto de capas de afuera hacia adentro?",
    opciones: [
      "Padding, Border, Margin, Content",
      "Margin, Border, Padding, Content",
      "Content, Padding, Border, Margin",
      "Border, Margin, Padding, Content",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "Si una caja tiene width: 300px, padding: 20px y border: 5px, ¿cuál es su ancho TOTAL real en el navegador?",
    opciones: ["300px", "325px", "350px", "345px"],
    correcta: 2, // 300 + 20(izq) + 20(der) + 5(izq) + 5(der) = 350px
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "¿Cuál es la diferencia entre el selector 'p span' y el selector 'p > span'?",
    opciones: [
      "No hay diferencia",
      "El primero selecciona todos los span dentro de p, el segundo solo hijos directos",
      "El segundo selecciona span que estén antes que p",
      "El primero es solo para CSS3",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "¿Qué prioridad (especificidad) tiene el selector '#id .clase' frente a 'header p'?",
    opciones: [
      "El ID con Clase siempre tiene más prioridad",
      "Tienen la misma prioridad",
      "Gana header p por ser etiquetas semánticas",
      "Depende del orden de escritura",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "¿Qué propiedad se usa para resetear el comportamiento de márgenes dobles en tablas?",
    opciones: [
      "margin-collapse",
      "border-collapse",
      "table-reset",
      "padding: 0",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "Las medidas 'pt', 'pc' y 'in' se consideran según la documentación como:",
    opciones: [
      "Unidades relativas",
      "Unidades absolutas",
      "Unidades responsivas",
      "Unidades de pantalla",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "Según el 'Orden de prioridad', ¿qué selector es el que tiene el valor más bajo de la lista?",
    opciones: [
      "Estilo en línea",
      "Selector de ID",
      "Selector Universal (*)",
      "Selector de clase",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta: "¿Para qué sirve el atributo 'initial-scale=1.0' en el Viewport?",
    opciones: [
      "Para que la página cargue más rápido",
      "Establece el nivel de zoom inicial al cargar por primera vez",
      "Fija el ancho a 1000px",
      "No tiene utilidad real",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "Si usamos la propiedad 'margin: 10px 20px 30px 40px;', ¿cuál es el margen izquierdo?",
    opciones: ["10px", "20px", "30px", "40px"],
    correcta: 3, // Top Right Bottom Left (40px es Left)
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "¿Cuál de estos componentes NO admite márgenes verticales (top/bottom) si se trata de elementos en línea?",
    opciones: ["Div", "Imágenes", "H1", "Span (sin display block)"],
    correcta: 3,
  },

  // ==========================================
  // NIVEL 2 - BOOTSTRAP (Semi-Senior)
  // ==========================================
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿Qué ancho máximo (max-width) tiene un contenedor '.container' en un punto de interrupción 'Medio' (md)?",
    opciones: ["100%", "540px", "720px", "960px"],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿Es correcto anidar una fila (.row) directamente dentro de otra fila sin una columna intermedia?",
    opciones: [
      "Sí, es lo habitual",
      "No, las filas solo deben ser hijos de contenedores o columnas",
      "Sí, pero solo en nivel Senior",
      "Solo si usamos Grid externo",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "Si usamos la clase '.col-md-6', ¿cuántas columnas ocupará el elemento en una pantalla Extra Pequeña (xs)?",
    opciones: ["6 columnas", "3 columnas", "12 columnas (100%)", "Se oculta"],
    correcta: 2, // Por herencia hacia arriba, pero hacia abajo es 100%
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "Para que un formulario muestre validación de Bootstrap después del envío, ¿qué clase de JS se debe aplicar al padre <form>?",
    opciones: [
      ".is-validated",
      ".validate-now",
      ".was-validated",
      ".check-form",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es la sintaxis correcta para ocultar un elemento solo en pantallas de escritorio (lg en adelante)?",
    opciones: [".d-none .d-lg-block", ".d-lg-none", ".d-hidden-lg", ".hide-lg"],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "En una grilla con clases mixtas, si tenemos '.col-sm-4 .col-8', ¿qué sucede en pantallas Medianas (md)?",
    opciones: [
      "Ocupa 4 columnas",
      "Ocupa 8 columnas",
      "Ocupa 12 columnas",
      "Error de renderizado",
    ],
    correcta: 0, // sm se mantiene hacia arriba (md, lg, etc) a menos que md se defina
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿Qué clase se usa para añadir bordes redondeados a una imagen de Bootstrap?",
    opciones: [".img-round", ".rounded", ".border-circle", ".circle"],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "Para centrar un elemento de texto dentro de un div contenedor, ¿qué clase usamos?",
    opciones: [".center", ".text-center", ".align-middle", ".mx-auto"],
    correcta: 1,
  },

  // ==========================================
  // NIVEL 2 - MIX (Análisis de Código Integrado)
  // ==========================================
  {
    nivel: 2,
    tema: "mix",
    pregunta:
      "Analiza: Tenemos una tabla HTML5 con clase '.table-dark'. Si aplicamos un CSS externo 'td { color: red; }', ¿de qué color será el texto?",
    opciones: [
      "Negro por Bootstrap",
      "Blanco por defecto dark",
      "Rojo",
      "Bootstrap lo anula automáticamente",
    ],
    correcta: 2, // CSS externo con etiqueta tiene alta prioridad sobre utilidades generales
  },
  {
    nivel: 2,
    tema: "mix",
    pregunta:
      "Se define: <header class='d-flex mb-3'>. ¿Cuál es el comportamiento de este elemento?",
    opciones: [
      "Es un encabezado con margen abajo y comportamiento Flexbox",
      "Es un header oculto en móviles",
      "Es un error porque header no admite d-flex",
      "Bootstrap 5 no permite mb-3 en tags semánticos",
    ],
    correcta: 0,
  },

  // ==========================================
  // NIVEL 3 - HTML (Senior/Arquitectura)
  // ==========================================
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "Según las 'Reglas Gramaticales' (pág. 3), ¿cuál es el orden correcto de cierre para documentos anidados?",
    opciones: [
      "El primero en abrir es el primero en cerrar",
      "No importa el orden siempre que se cierren todos",
      "El último en abrir debe ser el primero en cerrar",
      "Solo se cierran etiquetas de texto",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "En una tabla estructurada (thead/tfoot/tbody), ¿qué ventaja técnica ofrece tfoot antes que tbody en el código?",
    opciones: [
      "Mejora la velocidad de carga en navegadores modernos",
      "Permite que el navegador renderice el pie antes que los miles de datos del cuerpo (optimización de render)",
      "Solo sirve para que se vea más bonito",
      "Evita el uso de CSS",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "¿Cuál es el valor predeterminado del atributo 'type' en una etiqueta <button> dentro de un formulario?",
    opciones: [
      "type='button'",
      "type='reset'",
      "type='submit'",
      "No tiene valor predeterminado",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "Si queremos limitar la cantidad de caracteres que un usuario escribe en un <input> de contraseña a exactamente 10, ¿qué atributo usamos?",
    opciones: ["size='10'", "maxlength='10'", "length='10'", "min='10'"],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "En el contexto de la 'Web Semántica', ¿cuál es el propósito real según la W3C?",
    opciones: [
      "Hacer que las páginas sean coloridas",
      "Permitir que los datos sean compartidos y reutilizados en todas las aplicaciones, empresas y comunidades",
      "Sustituir al JavaScript",
      "Crear bases de datos en HTML",
    ],
    correcta: 1,
  },

  // ==========================================
  // NIVEL 3 - CSS (Senior/Lógica)
  // ==========================================
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "¿Por qué se desaconseja el uso de anchos fijos (ej: px) en elementos grandes para móviles según el apunte?",
    opciones: [
      "Porque consumen más batería",
      "Porque obligan al usuario a desplazarse horizontalmente, lo que daña la experiencia (pág 29)",
      "Porque Google los penaliza con multas",
      "Porque los píxeles no existen en celulares",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "En la lista de 'Orden de Prioridad' de selectores, ¿cuál de estos tiene el peso MÁS ALTO antes de llegar al estilo en línea?",
    opciones: [
      "Selector de Atributos",
      "Pseudo-clase",
      "Selector de ID",
      "Selector de Elemento (tipo)",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "¿Qué significa la regla '@media only screen and (max-width: 600px)'?",
    opciones: [
      "Aplica estilos a todas las pantallas de más de 600px",
      "Aplica estilos solo si la ventana mide 600px o MENOS",
      "Indica que la pantalla se romperá a los 600px",
      "Aplica estilos solo a impresoras de 600px",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "Al calcular el espacio de una caja, si aplicamos 'box-sizing: border-box', ¿qué sucede?",
    opciones: [
      "El padding y el border se restan del ancho total definido",
      "La caja explota si tiene mucho contenido",
      "El margen se vuelve invisible",
      "El padding se suma por fuera",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "Según el diagrama de la pág 25 del PDF 02, ¿cuál es el margen que separa una caja de su vecina superior?",
    opciones: ["padding-top", "border-top", "margin-top", "spacing-top"],
    correcta: 2,
  },

  // ==========================================
  // NIVEL 3 - BOOTSTRAP (Senior/Ingeniería)
  // ==========================================
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Qué librería externa es requerida obligatoriamente por Bootstrap 5 para el funcionamiento de Menús Desplegables y Modales?",
    opciones: ["jQuery", "Popper JS", "React JS", "Modernizr"],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es el comando de Node.js para instalar Bootstrap en un proyecto profesional?",
    opciones: [
      "get bootstrap",
      "install-bootstrap",
      "npm install bootstrap",
      "php composer bootstrap",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es el rango de píxeles para el punto de interrupción Extra-Extra Grande (xxl)?",
    opciones: ["≥992px", "≥1200px", "≥1400px", "≥2000px"],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Qué sucede con un modal si el usuario hace clic fuera de la ventana emergente (en el fondo)?",
    opciones: [
      "El modal se queda fijo",
      "El modal se cierra automáticamente (pág 29)",
      "Se recarga la página",
      "Aparece un mensaje de error",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Qué técnica recomienda el apunte para mostrar un elemento solo en pantallas medianas (md) y grandes, pero ocultarlo en pequeñas y extra-grandes?",
    opciones: [
      ".d-md-only",
      ".d-none .d-md-block .d-xl-none",
      ".d-visible",
      ".hidden-xs-xl",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Cómo se llama la propiedad de CSS que la grilla de Bootstrap utiliza internamente para su diseño de cuadrícula?",
    opciones: ["Float layout", "Table layout", "Flexbox", "Frame-grid"],
    correcta: 2,
  },

  // ==========================================
  // NIVEL 3 - MIX (Experto / Integración Total)
  // ==========================================
  {
    nivel: 3,
    tema: "mix",
    pregunta:
      "Escenario: Un desarrollador usa la clase '.col-12' y además un ID '#miCaja { width: 50% !important; }'. ¿Qué ancho tendrá el elemento?",
    opciones: [
      "100% por ser Bootstrap",
      "50% por la jerarquía del ID e !important",
      "75% (promedio)",
      "Bootstrap desactiva el uso de !important",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mix",
    pregunta:
      "Escenario: Tenemos una <label class='form-label' for='nombre'>. ¿Dónde debería estar situado el ID 'nombre' para cumplir con la accesibilidad de formularios?",
    opciones: [
      "En el botón de envío",
      "En la etiqueta <form>",
      "En la etiqueta <input> correspondiente",
      "Dentro de la hoja de estilo CSS",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "mix",
    pregunta: "¿Qué ocurre si enlazamos el script 'bootstrap.bundle.min.js'?",
    opciones: [
      "Solo se cargan las clases CSS",
      "Se incluye Bootstrap JS y también Popper JS integrados en el mismo archivo",
      "La página solo funcionará en Internet Explorer",
      "El archivo pesa demasiado y no debe usarse",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mix",
    pregunta:
      "¿Cuál es la recomendación final sobre las Media Queries en relación al diseño 'Mobile First' de Bootstrap?",
    opciones: [
      "Hacer el diseño primero para Desktop y achicar",
      "Hacer que el contenido se adapte progresivamente, no omitir información y priorizar que se vea bien en todos los dispositivos",
      "Usar solo JavaScript para detectar el tamaño del celular",
      "No usar imágenes en móviles",
    ],
    correcta: 1,
  },
];

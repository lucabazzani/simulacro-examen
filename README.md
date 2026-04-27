# Simulatrón

Simulatrón es una plataforma educativa modular diseñada para que estudiantes puedan practicar sus conocimientos mediante simulacros de examen técnicos, bibliografía de consulta y desafíos prácticos integrados.

## Descripción

El proyecto ha sido estructurado para ser una herramienta escalable, permitiendo la incorporación de diversas materias del ámbito del desarrollo de software y la gestión profesional. Actualmente, cuenta con módulos completos de Desarrollo Frontend y Gestión de Proyectos, ofreciendo un entorno de evaluación que se adapta al nivel de conocimiento del estudiante.

## Características principales

- **Arquitectura modular:** Estructura de carpetas preparada para añadir nuevas materias de estudio sin afectar el funcionamiento global.
- **Simulacros de examen:** Motor dinámico que genera evaluaciones de 20 preguntas basadas en tres niveles de dificultad: inicial, intermedio y avanzado.
- **Bibliografía integrada:** Cada materia incluye guías de estudio técnicas basadas en la documentación oficial de la cátedra para consulta inmediata.
- **Modo Estrella (Interactividad):** Sistemas de aprendizaje práctico, como misiones espaciales para el diseño con Flexbox y análisis de casos reales para gestión.
- **Interfaz unificada:** Diseño profesional inspirado en guías de estilo técnicas, optimizado para ser utilizado tanto en computadoras como en dispositivos móviles.

## Materias integradas

1. **Desarrollo Frontend:** Evaluación técnica sobre HTML5, CSS3 y el framework Bootstrap 5.
2. **Gestión de Proyectos:** Conocimientos basados en el PMBOK, ciclos de vida de software, metodologías ágiles (Scrum, Kanban, Lean) y planificación de tiempos (PERT/CPM).

## Tecnologías utilizadas

- **HTML5:** Estructura semántica para una mejor accesibilidad.
- **CSS3:** Diseño responsivo y variables de estilo para identidades visuales por materia.
- **JavaScript (ES6+):** Motor de examen centralizado, lógica de importación dinámica de módulos y simuladores interactivos.
- **Bootstrap 5:** Sistema de grilla y componentes de interfaz de usuario.
- **Animate.css:** Biblioteca de animaciones para transiciones y feedback visual.

## Estructura del proyecto

- `index.html`: Portal principal (Hub) de selección de materias.
- `examen.html`: Interfaz única de evaluación con carga dinámica de contenido.
- `notas.html`: Registro histórico de actualizaciones y versiones.
- `common/`: Carpeta de recursos compartidos (estilo global y motor lógico centralizado).
- `frontend/`: Archivos específicos, preguntas y bibliografía de la materia de desarrollo web.
- `gestion-proyectos/`: Archivos específicos, preguntas y desafíos de la materia de gestión.

## Uso local

Para utilizar Simulatrón de forma local:

1. Clone este repositorio o descargue el archivo comprimido.
2. Debido a que el sistema utiliza módulos de JavaScript para la carga de preguntas, es necesario abrir el proyecto utilizando un servidor local. Se recomienda la extensión **Live Server** de Visual Studio Code o herramientas similares para evitar errores de ruteo en el navegador.

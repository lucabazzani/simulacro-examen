// Lógica para Misión 1 (Secuencia lógica del TP Clase 2)
const tareasOriginales = [
  "Relevamiento",
  "Validación",
  "Desarrollo",
  "Pruebas QA",
  "Capacitación",
  "Migración/Marcha",
];

let tareasUsuario = [];
const gridTareas = document.getElementById("opciones-secuencia");

function initSecuencia() {
  // Mezclamos tareas para que el usuario ordene
  const mezcladas = [...tareasOriginales].sort(() => Math.random() - 0.5);
  mezcladas.forEach((t) => {
    const div = document.createElement("div");
    div.className = "col-md-4";
    div.innerHTML = `<div class="slot-tarea" onclick="elegirTarea(this, '${t}')">${t}</div>`;
    gridTareas.appendChild(div);
  });
}

function elegirTarea(element, tarea) {
  if (element.classList.contains("tarea-completada")) return;

  // Verificamos si la tarea es la siguiente correcta según tareasOriginales
  const indexSiguiente = tareasUsuario.length;
  if (tarea === tareasOriginales[indexSiguiente]) {
    tareasUsuario.push(tarea);
    element.classList.add("tarea-completada");
    element.innerHTML += " [✓]";

    if (tareasUsuario.length === tareasOriginales.length) {
      triggerExito(() => {
        document.getElementById("mision-1").classList.add("d-none");
        document.getElementById("mision-2").classList.remove("d-none");
      });
    }
  } else {
    element.classList.add(
      "animate__animated",
      "animate__shakeX",
      "bg-danger",
      "text-white",
    );
    setTimeout(
      () =>
        element.classList.remove("animate__shakeX", "bg-danger", "text-white"),
      500,
    );
  }
}

// Lógica para Misión 2
function checkMision2(tipo) {
  if (tipo === "Hibrido") {
    triggerExito(() => {
      document.getElementById("mision-2").classList.add("d-none");
      document.getElementById("mision-3").classList.remove("d-none");
    });
  } else {
    alert(
      "Incorrecto. Dada la rigidez del presupuesto ($4.8M) pero la necesidad de software interactivo, se recomienda enfoque Híbrido.",
    );
  }
}

// Lógica para Misión 3 (Final)
function checkFinal() {
  const budget = document.getElementById("acta-budget").value;
  const time = document.getElementById("acta-time").value;

  if (budget === "$4.8M" && time === "8 Meses") {
    document.getElementById("modal-logro").classList.remove("d-none");
    document.getElementById("modal-logro").classList.add("d-flex");
  } else {
    const panel = document.getElementById("feedback-panel");
    panel.innerText = "Los datos del acta no coinciden con el caso.";
    panel.className = "alert alert-error-tech p-3 mt-3";
    panel.classList.remove("d-none");
  }
}

// Herramienta de transición
function triggerExito(nextFunc) {
  const panel = document.getElementById("feedback-panel");
  panel.classList.remove("d-none");
  setTimeout(() => {
    panel.classList.add("d-none");
    nextFunc();
  }, 1500);
}

// Iniciar aplicación
initSecuencia();

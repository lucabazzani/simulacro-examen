import { bancoPreguntas } from "./preguntas.js";

// --- CONFIGURACIÓN Y ESTADO DEL EXAMEN ---
let preguntasSeleccionadas = [];

const urlParams = new URLSearchParams(window.location.search);
const nivelActual = parseInt(urlParams.get("nivel")) || 1;
const temaActual = urlParams.get("tema") || "mix";

const contenedor = document.getElementById("quiz-engine");
const headerTitulo = document.getElementById("exam-title");
const btnFinalizar = document.getElementById("btn-finalizar");
const resultadoDiv = document.getElementById("resultado-final");

/**
 * Evita que el navegador interprete etiquetas como <ul> o <li>
 * permitiendo que se vean como texto dentro de las preguntas.
 */
function escaparHtml(texto) {
  if (!texto) return "";
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function inicializarExamen() {
  let bancoFiltrado = bancoPreguntas.filter((p) => p.nivel === nivelActual);
  if (temaActual !== "mix") {
    bancoFiltrado = bancoFiltrado.filter((p) => p.tema === temaActual);
  }

  preguntasSeleccionadas = barajar(bancoFiltrado).slice(0, 20);

  const temasNombres = {
    html: "HTML5",
    css: "CSS3",
    bootstrap: "Bootstrap",
    mix: "Temas mixtos",
  };
  headerTitulo.innerText = `Nivel ${nivelActual}: ${temasNombres[temaActual]}`;

  if (preguntasSeleccionadas.length === 0) {
    contenedor.innerHTML = `<div class="col-12 p-5 text-center alert-error-tech">No se encontraron preguntas.</div>`;
    btnFinalizar.classList.add("d-none");
    return;
  }

  renderizarPreguntas();
}

function barajar(array) {
  return array.sort(() => Math.random() - 0.5);
}

function renderizarPreguntas() {
  contenedor.innerHTML = "";

  preguntasSeleccionadas.forEach((p, index) => {
    if (!p.opciones || p.opciones.length === 0) return;

    const cardCol = document.createElement("div");
    cardCol.className = "col-12 animate__animated animate__fadeInUp";
    cardCol.style.animationDelay = `${index * 0.05}s`;

    cardCol.innerHTML = `
      <div class="custom-card question-node">
          <div class="custom-card-header">
              <span>Pregunta ${index + 1}</span>
              <span class="badge bg-secondary">${p.tema}</span>
          </div>
          <div class="card-body">
              <h5 class="mb-4 text-dark fw-bold">${index + 1}. ${escaparHtml(p.pregunta)}</h5>
              <div class="options-container">
                  ${p.opciones
                    .map(
                      (opc, i) => `
                      <div class="form-check custom-option mb-3">
                          <input class="form-check-input" type="radio" 
                              name="q${index}" id="q${index}o${i}" value="${i}">
                          <label class="form-check-label px-3 py-2 w-100" for="q${index}o${i}" 
                                 style="border: 1px solid #ccc; border-radius: 4px; cursor: pointer;">
                              ${escaparHtml(opc) || "Sin opción"}
                          </label>
                      </div>
                  `,
                    )
                    .join("")}
              </div>
          </div>
      </div>
    `;
    contenedor.appendChild(cardCol);
  });
}

btnFinalizar.addEventListener("click", () => {
  let aciertos = 0;
  const cards = document.querySelectorAll(".question-node");

  preguntasSeleccionadas.forEach((p, index) => {
    const radioSelected = document.querySelector(
      `input[name="q${index}"]:checked`,
    );
    const valorElegido = radioSelected ? parseInt(radioSelected.value) : null;
    const currentCard = cards[index];
    const labels = currentCard.querySelectorAll(".form-check-label");

    // Limpieza previa
    currentCard.classList.remove("border-success-tech", "border-danger-tech");

    // Lógica de calificación
    if (valorElegido === p.correcta) {
      aciertos++;
      currentCard.classList.add("border-success-tech");
      labels[p.correcta].style.backgroundColor = "var(--primary-green)";
      labels[p.correcta].style.color = "black";
    } else {
      currentCard.classList.add("border-danger-tech");
      // Marcamos la incorrecta elegida por el usuario
      if (valorElegido !== null && labels[valorElegido]) {
        labels[valorElegido].style.borderColor = "#ff5f5f";
        labels[valorElegido].style.color = "#ff5f5f";
      }
      // Indicamos discretamente la correcta
      if (labels[p.correcta]) {
        labels[p.correcta].style.border = "2px solid var(--text-main)";
        labels[p.correcta].innerHTML +=
          ` <small class="fw-bold ms-2">(Correcta)</small>`;
      }
    }

    const inputs = currentCard.querySelectorAll("input");
    inputs.forEach((i) => (i.disabled = true));
  });

  mostrarResultadoFinal(aciertos);
});

function mostrarResultadoFinal(aciertos) {
  const total = preguntasSeleccionadas.length;
  const porcentaje = (aciertos / total) * 100;

  resultadoDiv.classList.remove("d-none");
  document.getElementById("puntaje-score").innerText = `${aciertos} / ${total}`;

  const msgLabel = document.getElementById("msg-final");
  if (porcentaje >= 60) {
    msgLabel.innerText = "Resultado satisfactorio";
    msgLabel.className = "h5 mb-5 py-2 px-4 d-inline-block alert-success-tech";
  } else {
    msgLabel.innerText = "Resultado insuficiente";
    msgLabel.className =
      "h5 mb-5 py-2 px-4 d-inline-block alert-error-tech text-white";
  }

  btnFinalizar.style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

inicializarExamen();

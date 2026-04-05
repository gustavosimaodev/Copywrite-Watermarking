/**
 * main.js — Ponto de entrada da aplicação.
 * Inicializa os módulos após o carregamento do DOM.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Registra listeners dos inputs de texto
  UI.syncTextInputs();

  // Renderiza a pré-visualização inicial
  UI.render();
});

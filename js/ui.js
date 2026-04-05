/**
 * ui.js — Interações da interface (sliders, botões, swatches).
 * Atualiza o State e dispara a re-renderização.
 */

const UI = (() => {

  const CANVAS = document.getElementById('wCanvas');

  function render() {
    Renderer.renderPreview(CANVAS);
  }

  // ── Sliders ─────────────────────────────────────────────

  const SLIDER_SUFFIX = {
    opacity:  '%',
    angle:    '°',
    fontSize: 'px',
    spacing:  '',
  };

  function updateSlider(inputId, labelId) {
    const val = parseInt(document.getElementById(inputId).value);
    State.set(inputId, val);
    document.getElementById(labelId).textContent = val + (SLIDER_SUFFIX[inputId] || '');
    render();
  }

  // ── Modo ─────────────────────────────────────────────────

  function setMode(btn, mode) {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    State.set('mode', mode);
    render();
  }

  // ── Cor do texto ─────────────────────────────────────────

  function setColor(el, color) {
    document.querySelectorAll('[data-color]').forEach(e => e.classList.remove('active'));
    el.classList.add('active');
    State.set('color', color);
    render();
  }

  // ── Cor do fundo ─────────────────────────────────────────

  function setBg(el, bg) {
    document.querySelectorAll('[data-bg]').forEach(e => e.classList.remove('active'));
    el.classList.add('active');
    State.set('bg', bg);
    render();
  }

  // ── Sincroniza inputs de texto com o State ───────────────

  function syncTextInputs() {
    const authorEl  = document.getElementById('authorName');
    const contactEl = document.getElementById('contact');

    authorEl.addEventListener('input', () => {
      State.set('author', authorEl.value.trim() || 'Fotógrafo');
      render();
    });

    contactEl.addEventListener('input', () => {
      State.set('contact', contactEl.value.trim());
      render();
    });
  }

  return { updateSlider, setMode, setColor, setBg, syncTextInputs, render };
})();

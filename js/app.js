/**
 * app.js — Marca D'água Pro
 * Módulo único consolidado: estado, renderização, UI e ações.
 * Elimina dependências de ordem de carregamento entre arquivos.
 */

const app = (() => {

  // ─── ESTADO ────────────────────────────────────────────────

  const state = {
    author:   'João Silva Fotografia',
    contact:  '@joaosilva.foto',
    color:    '#ffffff',
    opacity:  35,
    fontSize: 26,
    angle:    -30,
    spacing:  180,
    mode:     'distributed',
    bg:       '#888888',
  };

  // ─── CANVAS ────────────────────────────────────────────────

  let canvas, ctx;

  function initCanvas() {
    canvas = document.getElementById('wCanvas');
    ctx    = canvas.getContext('2d');
  }

  // ─── HELPERS ───────────────────────────────────────────────

  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha / 100})`;
  }

  function getLegalLines() {
    const year = new Date().getFullYear();
    return {
      main:    `\u00A9 ${state.author} ${year}`,
      legal:   `Lei 9.610/98 \u00B7 Uso n\u00E3o autorizado \u00E9 crime`,
      contact: state.contact || '',
    };
  }

  // ─── DESENHO ───────────────────────────────────────────────

  function drawBlock(c, x, y, lines, rgba, scale) {
    scale = scale || 1;
    const fs      = state.fontSize * scale;
    const smallFs = fs * 0.52;

    c.save();
    c.translate(x, y);
    c.rotate((state.angle * Math.PI) / 180);

    c.fillStyle     = rgba;
    c.shadowColor   = state.color === '#ffffff' ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.4)';
    c.shadowBlur    = 5;
    c.shadowOffsetX = 1;
    c.shadowOffsetY = 1;
    c.textAlign     = 'center';
    c.textBaseline  = 'middle';

    c.font = `600 ${fs}px DM Sans, Arial, sans-serif`;
    c.fillText(lines.main, 0, 0);

    c.font = `${smallFs}px DM Mono, Courier New, monospace`;
    c.fillText(lines.legal, 0, fs * 0.9);

    if (lines.contact) {
      c.font = `${smallFs}px DM Sans, Arial, sans-serif`;
      c.fillText(lines.contact, 0, fs * 0.9 + smallFs * 1.4);
    }

    c.restore();
  }

  function applyDistributed(c, W, H, lines, rgba) {
    const sp = state.spacing;
    for (let x = -sp; x < W + sp; x += sp)
      for (let y = -sp; y < H + sp; y += sp)
        drawBlock(c, x, y, lines, rgba, 1);
  }

  function applyDiagonal(c, W, H, lines, rgba) {
    const sp   = state.spacing;
    const diag = Math.sqrt(W * W + H * H);
    c.save();
    c.translate(W / 2, H / 2);
    for (let d = -diag; d < diag; d += sp) {
      drawBlock(c, d, 0,       lines, rgba, 1);
      drawBlock(c, d, sp * 0.5, lines, rgba, 1);
    }
    c.restore();
  }

  function applyCenter(c, W, H, lines, rgba) {
    const cornerRgba = hexToRgba(state.color, Math.round(state.opacity * 0.45));
    drawBlock(c, W / 2,    H / 2,    lines, rgba,       2.0);
    drawBlock(c, W * 0.22, H * 0.22, lines, cornerRgba, 0.75);
    drawBlock(c, W * 0.78, H * 0.22, lines, cornerRgba, 0.75);
    drawBlock(c, W * 0.22, H * 0.78, lines, cornerRgba, 0.75);
    drawBlock(c, W * 0.78, H * 0.78, lines, cornerRgba, 0.75);
  }

  function applyBorderCenter(c, W, H, lines, rgba) {
    const sp       = state.spacing * 0.9;
    const edgeRgba = hexToRgba(state.color, Math.round(state.opacity * 0.65));
    drawBlock(c, W / 2, H / 2, lines, rgba, 1.6);
    for (let x = sp / 2; x < W; x += sp) {
      drawBlock(c, x, 40,      lines, edgeRgba, 0.6);
      drawBlock(c, x, H - 40,  lines, edgeRgba, 0.6);
    }
    for (let y = sp / 2; y < H; y += sp) {
      drawBlock(c, 40,     y,  lines, edgeRgba, 0.6);
      drawBlock(c, W - 40, y,  lines, edgeRgba, 0.6);
    }
  }

  function applyWatermark(c, W, H, lines, rgba) {
    if      (state.mode === 'distributed') applyDistributed(c, W, H, lines, rgba);
    else if (state.mode === 'diagonal')    applyDiagonal(c, W, H, lines, rgba);
    else if (state.mode === 'center')      applyCenter(c, W, H, lines, rgba);
    else if (state.mode === 'border')      applyBorderCenter(c, W, H, lines, rgba);
  }

  // ─── RENDER PREVIEW ────────────────────────────────────────

  function render() {
    if (!canvas) return;
    const W     = canvas.width;
    const H     = canvas.height;
    const rgba  = hexToRgba(state.color, state.opacity);
    const lines = getLegalLines();

    ctx.clearRect(0, 0, W, H);

    // Fundo simulando foto
    ctx.fillStyle = state.bg;
    ctx.fillRect(0, 0, W, H);

    // Gradiente de iluminação
    const grad = ctx.createRadialGradient(W * 0.4, H * 0.4, 0, W * 0.5, H * 0.5, W * 0.75);
    grad.addColorStop(0, 'rgba(255,255,255,0.12)');
    grad.addColorStop(1, 'rgba(0,0,0,0.28)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    applyWatermark(ctx, W, H, lines, rgba);
  }

  // ─── UI HANDLERS ───────────────────────────────────────────

  function updateSlider(input, labelId, suffix) {
    const val = parseInt(input.value);
    const key = input.id;
    state[key] = val;
    document.getElementById(labelId).textContent = val + suffix;
    render();
  }

  function setMode(btn, mode) {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.mode = mode;
    render();
  }

  function setColor(el, color) {
    document.querySelectorAll('#colorSwatches .color-swatch').forEach(e => e.classList.remove('active'));
    el.classList.add('active');
    state.color = color;
    render();
  }

  function setBg(el, bg) {
    document.querySelectorAll('#bgSwatches .color-swatch').forEach(e => e.classList.remove('active'));
    el.classList.add('active');
    state.bg = bg;
    render();
  }

  function syncInputs() {
    document.getElementById('authorName').addEventListener('input', function () {
      state.author = this.value.trim() || 'Fotógrafo';
      render();
    });
    document.getElementById('contact').addEventListener('input', function () {
      state.contact = this.value.trim();
      render();
    });
  }

  // ─── DOWNLOAD PNG ──────────────────────────────────────────

  function downloadWatermark() {
    const W = 1200, H = 800;
    const off    = document.createElement('canvas');
    off.width    = W;
    off.height   = H;
    const offCtx = off.getContext('2d');
    const rgba   = hexToRgba(state.color, state.opacity);
    const lines  = getLegalLines();

    applyWatermark(offCtx, W, H, lines, rgba);

    const filename = `marca-dagua-${state.author.replace(/\s+/g, '-').toLowerCase()}.png`;
    triggerDownload(off.toDataURL('image/png'), filename);
  }

  // ─── DOWNLOAD INSTRUÇÕES ───────────────────────────────────

  function downloadInstructions() {
    const year = new Date().getFullYear();
    const date = new Date().toLocaleDateString('pt-BR');

    const text = [
      'INSTRUÇÕES DE USO — MARCA D\'ÁGUA PROFISSIONAL',
      '==============================================',
      `Fotógrafo : ${state.author}`,
      `Contato   : ${state.contact || '—'}`,
      `Gerado em : ${date}`,
      '',
      'TEXTO DA MARCA D\'ÁGUA',
      '─────────────────────',
      `© ${state.author} ${year} | Lei 9.610/98 · Uso não autorizado é crime`,
      '',
      'COMO APLICAR NAS PLATAFORMAS',
      '─────────────────────────────',
      'Aplique o PNG sobre seus JPGs ANTES do upload.',
      'O arquivo limpo é entregue automaticamente ao comprador pela plataforma.',
      '',
      '  • Fotto        — Upload do JPG watermarkado. Entrega limpa após pagamento.',
      '  • Alboom       — Use o Alboom Proof ou aplique externamente.',
      '  • Banlek       — Upload do JPG watermarkado. Entrega limpa após confirmação.',
      '  • Fotop        — Aplique antes de criar a galeria do evento.',
      '  • Foco Radical — Preview com marca, entrega sem.',
      '',
      'FERRAMENTAS PARA APLICAR EM LOTE',
      '──────────────────────────────────',
      '  1. Adobe Lightroom  → Exportar → Marca d\'água personalizada (use o PNG)',
      '  2. Photoshop        → File > Automate > Batch Action',
      '  3. Watermarkly.com  → Gratuito, 100 fotos/vez, sem cadastro',
      '  4. IrfanView        → Gratuito, Batch Conversion com overlay',
      '',
      'FUNDAMENTO LEGAL',
      '────────────────',
      'Lei 9.610/98 — Direitos Autorais do Brasil',
      '  Art. 7º  — A obra é protegida desde a criação, sem registro prévio.',
      '  Art. 102 — Violação sujeita a reparação de danos materiais e morais.',
      '',
      'DMCA — Digital Millennium Copyright Act (EUA)',
      '  Permite DMCA Takedown em plataformas com servidores nos EUA.',
      '',
      'FLUXO EM CASO DE USO INDEVIDO',
      '  1. Notificação extrajudicial ao infrator',
      '  2. DMCA Takedown na plataforma',
      '  3. Ação judicial — Lei 9.610/98, arts. 102 e 108',
      '',
      'PROTEÇÃO ADICIONAL',
      '──────────────────',
      '  • Grave metadados EXIF antes de qualquer upload',
      '  • Mantenha os arquivos RAW originais como prova de autoria',
      '  • Registro na Biblioteca Nacional: www.bn.gov.br',
      '  • Content Credentials (C2PA) da Adobe para assinatura digital',
      '',
      `© ${state.author} — Todos os direitos reservados.`,
    ].join('\n');

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    triggerDownload(URL.createObjectURL(blob), 'instrucoes-marca-dagua.txt');
  }

  // ─── HELPER DOWNLOAD ───────────────────────────────────────

  function triggerDownload(href, filename) {
    const a      = document.createElement('a');
    a.href       = href;
    a.download   = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  // ─── INIT ──────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', function () {
    initCanvas();
    syncInputs();
    render();
  });

  // Expõe apenas o necessário para os onclick do HTML
  return { updateSlider, setMode, setColor, setBg, downloadWatermark, downloadInstructions };

})();

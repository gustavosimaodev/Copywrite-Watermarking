/**
 * renderer.js — Toda a lógica de desenho no canvas.
 * Responsável por renderizar a pré-visualização e gerar
 * o PNG transparente para download.
 */

const Renderer = (() => {

  // ── Helpers ────────────────────────────────────────────

  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha / 100})`;
  }

  function getLegalText() {
    const year   = new Date().getFullYear();
    const author = State.get('author') || 'Fotógrafo';
    return {
      mainLine:    `© ${author} ${year}`,
      legalLine:   `Lei 9.610/98 · Uso não autorizado é crime`,
      contactLine: State.get('contact') || '',
    };
  }

  // ── Desenha um bloco de texto (nome + legal + contato) ──

  function drawBlock(ctx, x, y, lines, rgba, scale = 1) {
    const fs      = State.get('fontSize') * scale;
    const smallFs = fs * 0.52;
    const color   = State.get('color');
    const angle   = State.get('angle');

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((angle * Math.PI) / 180);

    ctx.fillStyle    = rgba;
    ctx.shadowColor  = color === '#ffffff' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.4)';
    ctx.shadowBlur   = 4;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';

    ctx.font = `600 ${fs}px 'DM Sans', sans-serif`;
    ctx.fillText(lines.mainLine, 0, 0);

    ctx.font = `${smallFs}px 'DM Mono', monospace`;
    ctx.fillText(lines.legalLine, 0, fs * 0.85);

    if (lines.contactLine) {
      ctx.font = `${smallFs}px 'DM Sans', sans-serif`;
      ctx.fillText(lines.contactLine, 0, fs * 0.85 + smallFs * 1.3);
    }

    ctx.restore();
  }

  // ── Modos de distribuição ───────────────────────────────

  function modeDistributed(ctx, W, H, lines, rgba) {
    const sp = State.get('spacing');
    for (let x = -sp; x < W + sp; x += sp)
      for (let y = -sp; y < H + sp; y += sp)
        drawBlock(ctx, x, y, lines, rgba, 1);
  }

  function modeDiagonal(ctx, W, H, lines, rgba) {
    const sp   = State.get('spacing');
    const diag = Math.sqrt(W * W + H * H);
    ctx.save();
    ctx.translate(W / 2, H / 2);
    for (let d = -diag; d < diag; d += sp) {
      drawBlock(ctx, d, 0,      lines, rgba, 1);
      drawBlock(ctx, d, sp / 2, lines, rgba, 1);
    }
    ctx.restore();
  }

  function modeCenter(ctx, W, H, lines, rgba) {
    const op      = State.get('opacity');
    const color   = State.get('color');
    const cornerRgba = hexToRgba(color, Math.round(op * 0.5));

    drawBlock(ctx, W / 2,    H / 2,    lines, rgba,       2.0);
    drawBlock(ctx, W * 0.25, H * 0.25, lines, cornerRgba, 0.8);
    drawBlock(ctx, W * 0.75, H * 0.25, lines, cornerRgba, 0.8);
    drawBlock(ctx, W * 0.25, H * 0.75, lines, cornerRgba, 0.8);
    drawBlock(ctx, W * 0.75, H * 0.75, lines, cornerRgba, 0.8);
  }

  function modeBorderCenter(ctx, W, H, lines, rgba) {
    const sp      = State.get('spacing') * 0.9;
    const op      = State.get('opacity');
    const color   = State.get('color');
    const edgeRgba = hexToRgba(color, Math.round(op * 0.7));

    drawBlock(ctx, W / 2, H / 2, lines, rgba, 1.6);

    for (let x = sp / 2; x < W; x += sp) {
      drawBlock(ctx, x, 40,     lines, edgeRgba, 0.6);
      drawBlock(ctx, x, H - 40, lines, edgeRgba, 0.6);
    }
    for (let y = sp / 2; y < H; y += sp) {
      drawBlock(ctx, 40,     y, lines, edgeRgba, 0.6);
      drawBlock(ctx, W - 40, y, lines, edgeRgba, 0.6);
    }
  }

  // ── Despacha para o modo correto ────────────────────────

  function applyMode(ctx, W, H, lines, rgba) {
    const mode = State.get('mode');
    if      (mode === 'distributed') modeDistributed(ctx, W, H, lines, rgba);
    else if (mode === 'diagonal')    modeDiagonal(ctx, W, H, lines, rgba);
    else if (mode === 'center')      modeCenter(ctx, W, H, lines, rgba);
    else if (mode === 'border')      modeBorderCenter(ctx, W, H, lines, rgba);
  }

  // ── API pública ─────────────────────────────────────────

  /**
   * Renderiza a pré-visualização no canvas principal
   * (com fundo simulado de foto).
   */
  function renderPreview(canvas) {
    const ctx   = canvas.getContext('2d');
    const W     = canvas.width;
    const H     = canvas.height;
    const bg    = State.get('bg');
    const color = State.get('color');
    const op    = State.get('opacity');
    const rgba  = hexToRgba(color, op);
    const lines = getLegalText();

    // Fundo simulando foto
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Gradiente para simular iluminação fotográfica
    const grad = ctx.createRadialGradient(W * 0.4, H * 0.4, 0, W * 0.5, H * 0.5, W * 0.7);
    grad.addColorStop(0, 'rgba(255,255,255,0.15)');
    grad.addColorStop(1, 'rgba(0,0,0,0.3)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Marca d'água
    applyMode(ctx, W, H, lines, rgba);
  }

  /**
   * Gera um canvas transparente (sem fundo) com a marca d'água
   * e retorna o data URL para download.
   */
  function renderTransparentPNG(W = 1200, H = 800) {
    const offCanvas = document.createElement('canvas');
    offCanvas.width  = W;
    offCanvas.height = H;
    const ctx   = offCanvas.getContext('2d');
    const color = State.get('color');
    const op    = State.get('opacity');
    const rgba  = hexToRgba(color, op);
    const lines = getLegalText();

    applyMode(ctx, W, H, lines, rgba);
    return offCanvas.toDataURL('image/png');
  }

  return { renderPreview, renderTransparentPNG };
})();

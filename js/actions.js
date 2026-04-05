/**
 * actions.js — Ações de exportação.
 * Download do PNG transparente e do arquivo de instruções.
 */

const Actions = (() => {

  // ── Download da marca d'água em PNG transparente ─────────

  function downloadWatermark() {
    const author   = State.get('author') || 'fotografo';
    const dataURL  = Renderer.renderTransparentPNG(1200, 800);
    const filename = `marca-dagua-${author.replace(/\s+/g, '-').toLowerCase()}.png`;

    _triggerDownload(dataURL, filename);
  }

  // ── Download do arquivo de instruções em .txt ────────────

  function downloadInstructions() {
    const author  = State.get('author') || 'Fotógrafo';
    const contact = State.get('contact') || '—';
    const year    = new Date().getFullYear();
    const date    = new Date().toLocaleDateString('pt-BR');

    const content = `
INSTRUÇÕES DE USO — MARCA D'ÁGUA PROFISSIONAL
==============================================
Fotógrafo : ${author}
Contato   : ${contact}
Gerado em : ${date}

TEXTO DA MARCA D'ÁGUA
─────────────────────
© ${author} ${year} | Lei 9.610/98 · Uso não autorizado é crime


COMO APLICAR NAS PLATAFORMAS
─────────────────────────────
Aplique o PNG da marca d'água sobre seus JPGs ANTES do upload.
O arquivo com marca fica no preview público; o arquivo limpo é
entregue ao comprador automaticamente pela plataforma.

  • Fotto        — Upload do JPG watermarkado. Entrega limpa após pagamento.
  • Alboom       — Use o módulo Alboom Proof ou aplique externamente.
  • Banlek       — Upload do JPG watermarkado. Entrega limpa após confirmação.
  • Fotop        — Aceita JPG com marca. Aplique antes de criar a galeria.
  • Foco Radical — Mesma dinâmica: preview com marca, entrega sem.


FERRAMENTAS PARA APLICAR EM LOTE
──────────────────────────────────
  1. Adobe Lightroom  → Exportar → Marca d'água (use o PNG gerado)
  2. Photoshop        → File > Automate > Batch Action
  3. Watermarkly.com  → Gratuito, 100 fotos/vez, sem cadastro
  4. IrfanView        → Gratuito, Batch Conversion com overlay


FUNDAMENTO LEGAL
────────────────
Lei 9.610/98 — Lei de Direitos Autorais do Brasil
  Art. 7º  — Toda obra do espírito é protegida desde a criação,
              independente de registro prévio.
  Art. 102 — Violação sujeita a reparação de danos materiais e morais.

DMCA (Digital Millennium Copyright Act)
  Aplicável em plataformas com servidores nos EUA (Instagram, Google, etc.).
  Use o formulário de DMCA Takedown em caso de uso indevido online.


PROTEÇÃO ADICIONAL RECOMENDADA
───────────────────────────────
  • Grave metadados EXIF (nome, copyright, contato) antes do upload
  • Mantenha os arquivos RAW originais como prova de autoria
  • Considere registro na Biblioteca Nacional: www.bn.gov.br
  • Fluxo em caso de uso indevido:
      1. Notificação extrajudicial ao infrator
      2. DMCA Takedown na plataforma onde a foto foi publicada
      3. Ação judicial com base na Lei 9.610/98


© ${author} — Todos os direitos reservados.
`.trimStart();

    const blob     = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const dataURL  = URL.createObjectURL(blob);
    const filename = `instrucoes-marca-dagua.txt`;

    _triggerDownload(dataURL, filename);
    URL.revokeObjectURL(dataURL);
  }

  // ── Helper interno ────────────────────────────────────────

  function _triggerDownload(href, filename) {
    const link      = document.createElement('a');
    link.href       = href;
    link.download   = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return { downloadWatermark, downloadInstructions };
})();

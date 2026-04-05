================================================================================
  MARCA D'ÁGUA PRO
  Gerador de marca d'água profissional para fotógrafos
================================================================================

  Versao PT-BR abaixo | English version further below

================================================================================
  SECAO 1 — PORTUGUES (PT-BR)
================================================================================

SOBRE
-----
Gerador de marca d'agua profissional para fotografos brasileiros.
Compativel com Fotto, Alboom, Banlek, Fotop e Foco Radical.
Protecao amparada pela Lei 9.610/98 (Direitos Autorais) e DMCA.


FUNCIONALIDADES
---------------
- 4 modos de distribuicao:
    1. Grade distribuida    — repete a marca em grade por toda a foto
    2. Diagonal continua    — faixas diagonais cobrindo a imagem
    3. Centro destrutivo    — marca grande no centro + marcas menores nos cantos
    4. Bordas + centro      — proteçao nas bordas e no centro simultaneamente

- Ajuste em tempo real de:
    Opacidade | Tamanho do texto | Angulo de rotacao | Espacamento

- Texto legal gerado automaticamente:
    "© Nome Ano | Lei 9.610/98 · Uso nao autorizado e crime"

- Download do PNG transparente (para uso em Lightroom / Photoshop / Watermarkly)
- Exportacao de instrucoes de uso completas em .txt
- Interface responsiva — funciona em desktop e mobile
- 100% estatico — sem servidor, sem banco de dados, sem cadastro


ESTRUTURA DO PROJETO
--------------------
  marca-dagua/
  |
  +-- index.html          Estrutura HTML principal
  +-- vercel.json         Configuracao de deploy para o Vercel
  +-- .gitignore          Arquivos ignorados pelo Git
  +-- README.md           Documentacao formatada (PT-BR + EN)
  +-- README.txt          Este arquivo — texto puro (PT-BR + EN)
  |
  +-- css/
  |   +-- style.css       Estilos, variaveis CSS, layout, responsividade
  |
  +-- js/
      +-- state.js        Estado global da aplicacao
      +-- renderer.js     Logica de desenho no Canvas 2D
      +-- ui.js           Interacoes da interface
      +-- actions.js      Download do PNG e das instrucoes .txt
      +-- main.js         Ponto de entrada (DOMContentLoaded)


COMO HOSPEDAR
-------------

  GITHUB PAGES:
  1. Crie um repositorio no GitHub (ex: marca-dagua)
  2. git clone https://github.com/SEU_USUARIO/marca-dagua.git
  3. Copie os arquivos para a pasta clonada
  4. git add . && git commit -m "feat: marca d'agua" && git push origin main
  5. GitHub → Settings → Pages → Source: main / (root) → Save
     URL: https://SEU_USUARIO.github.io/marca-dagua/

  VERCEL (recomendado — deploy em menos de 1 minuto):
  Opcao A — CLI:
    npm install -g vercel
    cd marca-dagua && vercel
  Opcao B — Web:
    vercel.com → New Project → Import Git Repository
    → Framework: "Other" → Deploy
    URL: https://marca-dagua.vercel.app

  NETLIFY (alternativa gratuita):
  Opcao A — Arrastar a pasta para: app.netlify.com/drop
  Opcao B — app.netlify.com → New site → Import from GitHub


COMO USAR A MARCA D'AGUA GERADA
---------------------------------
  1. Abra a ferramenta no navegador
  2. Preencha seu nome / marca e contato
  3. Escolha o estilo e ajuste os parametros
  4. Clique em "Baixar Marca D'agua (PNG)"
  5. Aplique o PNG sobre seus JPGs ANTES do upload:
       Lightroom    → Exportar → Marca d'agua personalizada → PNG
       Photoshop    → File > Automate > Batch Action com Place Linked
       Watermarkly  → watermarkly.com (gratuito, 100 fotos/vez)
       IrfanView    → gratuito, Batch Conversion com overlay
  6. Faca o upload do JPG com marca na plataforma
  7. A entrega ao comprador (sem marca) e feita automaticamente


COMPATIBILIDADE COM PLATAFORMAS
---------------------------------
  Plataforma     Upload c/ marca   Entrega limpa automatica
  ---------------------------------------------------------
  Fotto               SIM                   SIM
  Alboom              SIM                   SIM
  Banlek              SIM                   SIM
  Fotop               SIM                   SIM
  Foco Radical        SIM                   SIM


BASE LEGAL
----------
  Lei 9.610/98 (Brasil)
    Protege a obra desde a criacao, sem necessidade de registro previo.
    Arts. 102 e 108 preveem reparacao de danos materiais e morais.

  DMCA — Digital Millennium Copyright Act (EUA)
    Permite solicitar remocao (Takedown) em plataformas com servidores
    nos Estados Unidos (Instagram, Google, Facebook, etc.).

  Metadados EXIF
    Prova tecnica de autoria embutida no proprio arquivo de imagem.
    Grave antes de qualquer upload.

  Arquivo RAW original
    Prova documental definitiva em caso de disputa judicial.
    Mantenha sempre em backup seguro.

  FLUXO EM CASO DE USO INDEVIDO:
    1. Notificacao extrajudicial ao infrator
    2. DMCA Takedown na plataforma onde a imagem foi publicada
    3. Acao judicial com base nos arts. 102 e 108 da Lei 9.610/98


PROTECAO ADICIONAL RECOMENDADA
--------------------------------
  - Grave metadados EXIF (nome, copyright, contato) antes de qualquer upload
  - Mantenha os arquivos RAW originais como prova de autoria
  - Registro na Biblioteca Nacional: www.bn.gov.br
  - Use Content Credentials (C2PA) da Adobe para assinatura digital rastreavel


LICENCA
-------
  Projeto de uso livre para fotografos.
  Modifique, redistribua e adapte a vontade.


================================================================================
  SECTION 2 — ENGLISH
================================================================================

ABOUT
-----
Professional watermark generator for photographers.
Compatible with Fotto, Alboom, Banlek, Fotop and Foco Radical.
Protection backed by Brazilian Law 9.610/98 (Copyright) and the DMCA.


FEATURES
--------
- 4 distribution modes:
    1. Distributed grid     — repeats the watermark in a grid across the photo
    2. Continuous diagonal  — diagonal stripes covering the entire image
    3. Destructive center   — large mark at center + smaller marks at corners
    4. Borders + center     — simultaneous protection on edges and center

- Real-time adjustment of:
    Opacity | Text size | Rotation angle | Spacing

- Legal text generated automatically:
    "(c) Name Year | Lei 9.610/98 · Unauthorized use is a crime"

- Transparent PNG download (for use in Lightroom / Photoshop / Watermarkly)
- Full usage instructions exported as .txt
- Responsive interface — works on desktop and mobile
- 100% static — no server, no database, no sign-up required


PROJECT STRUCTURE
-----------------
  marca-dagua/
  |
  +-- index.html          Main HTML structure
  +-- vercel.json         Vercel deployment configuration
  +-- .gitignore          Git ignored files
  +-- README.md           Formatted documentation (PT-BR + EN)
  +-- README.txt          This file — plain text (PT-BR + EN)
  |
  +-- css/
  |   +-- style.css       Styles, CSS variables, layout, responsiveness
  |
  +-- js/
      +-- state.js        Global application state
      +-- renderer.js     Canvas 2D drawing logic
      +-- ui.js           UI interactions
      +-- actions.js      PNG and .txt instructions download
      +-- main.js         Entry point (DOMContentLoaded)


HOW TO HOST
-----------

  GITHUB PAGES:
  1. Create a repository on GitHub (e.g. watermark-pro)
  2. git clone https://github.com/YOUR_USERNAME/watermark-pro.git
  3. Copy the project files into the cloned folder
  4. git add . && git commit -m "feat: watermark generator" && git push origin main
  5. GitHub → Settings → Pages → Source: main / (root) → Save
     URL: https://YOUR_USERNAME.github.io/watermark-pro/

  VERCEL (recommended — deploys in under 1 minute):
  Option A — CLI:
    npm install -g vercel
    cd watermark-pro && vercel
  Option B — Web:
    vercel.com → New Project → Import Git Repository
    → Framework Preset: "Other" → Deploy
    URL: https://watermark-pro.vercel.app

  NETLIFY (free alternative):
  Option A — Drag project folder to: app.netlify.com/drop
  Option B — app.netlify.com → New site → Import from GitHub


HOW TO USE THE GENERATED WATERMARK
------------------------------------
  1. Open the tool in your browser
  2. Fill in your name / brand and contact info
  3. Choose a style and adjust the parameters
  4. Click "Download Watermark (PNG)"
  5. Apply the PNG over your JPGs BEFORE uploading to any platform:
       Lightroom    → Export → Custom watermark → select the PNG
       Photoshop    → File > Automate > Batch Action with Place Linked
       Watermarkly  → watermarkly.com (free, 100 photos/batch)
       IrfanView    → free, Batch Conversion with overlay
  6. Upload the watermarked JPG to the platform
  7. The clean file is delivered automatically to the buyer by the platform


PLATFORM COMPATIBILITY
-----------------------
  Platform       Upload w/ watermark   Automatic clean delivery
  ---------------------------------------------------------------
  Fotto               YES                      YES
  Alboom              YES                      YES
  Banlek              YES                      YES
  Fotop               YES                      YES
  Foco Radical        YES                      YES


LEGAL BASIS
-----------
  Lei 9.610/98 (Brazil)
    Protects the work from the moment of creation, with no prior
    registration required. Articles 102 and 108 provide for material
    and moral damages in cases of infringement.

  DMCA — Digital Millennium Copyright Act (USA)
    Enables Takedown requests on platforms with US-based servers
    (Instagram, Google, Facebook, etc.).

  EXIF Metadata
    Technical proof of authorship embedded in the image file itself.
    Write it before any upload.

  Original RAW file
    Definitive documentary proof in the event of a legal dispute.
    Always keep a secure backup.

  RECOMMENDED COURSE OF ACTION IN CASE OF UNAUTHORIZED USE:
    1. Extrajudicial notice to the infringer
    2. DMCA Takedown on the platform where the image was published
    3. Legal action based on Articles 102 and 108 of Lei 9.610/98


ADDITIONAL PROTECTION RECOMMENDATIONS
--------------------------------------
  - Write EXIF metadata (name, copyright, contact) before any upload
  - Always keep original RAW files as proof of authorship
  - Register at the Brazilian National Library: www.bn.gov.br
  - Use Adobe's Content Credentials (C2PA) for traceable digital signing


LICENSE
-------
  Free to use for photographers.
  Feel free to modify, redistribute and adapt as needed.


================================================================================
  (c) Marca D'agua Pro — todos os direitos reservados / all rights reserved
================================================================================

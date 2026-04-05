# ⬡ Marca D'água Pro

> 🇧🇷 Português | [🇺🇸 English below](#-watermark-pro--english)

---

## 🇧🇷 Marca D'água Pro — Português

Gerador de marca d'água profissional para fotógrafos brasileiros.
Compatível com **Fotto, Alboom, Banlek, Fotop e Foco Radical**.
Proteção amparada pela **Lei 9.610/98** (Direitos Autorais) e **DMCA**.

---

### Funcionalidades

- 4 modos de distribuição: grade distribuída, diagonal contínua, centro destrutivo, bordas + centro
- Ajuste em tempo real de opacidade, tamanho, ângulo e espaçamento
- Texto legal gerado automaticamente: `© Nome Ano | Lei 9.610/98 · Uso não autorizado é crime`
- Download do PNG transparente pronto para uso em Lightroom, Photoshop ou Watermarkly
- Exportação de instruções de uso completas em `.txt`
- Interface responsiva — funciona em desktop e mobile
- 100% estático — sem servidor, sem banco de dados, sem cadastro

---

### Estrutura do projeto

```
marca-dagua/
├── index.html          # Estrutura HTML principal
├── vercel.json         # Configuração de deploy para o Vercel
├── .gitignore          # Arquivos ignorados pelo Git
├── README.md           # Esta documentação (PT-BR + EN)
├── README.txt          # Versão em texto puro (PT-BR + EN)
├── css/
│   └── style.css       # Estilos, variáveis CSS, layout, responsividade
└── js/
    ├── state.js        # Estado global da aplicação
    ├── renderer.js     # Lógica de desenho no Canvas 2D
    ├── ui.js           # Interações da interface (sliders, swatches, botões)
    ├── actions.js      # Download do PNG e das instruções .txt
    └── main.js         # Ponto de entrada (DOMContentLoaded)
```

---

### Como hospedar

#### GitHub Pages

```bash
# 1. Crie um repositório no GitHub (ex: marca-dagua)
git clone https://github.com/SEU_USUARIO/marca-dagua.git
cd marca-dagua

# 2. Copie os arquivos do projeto para a pasta clonada e faça o commit
git add .
git commit -m "feat: gerador de marca d'água"
git push origin main

# 3. Ative o GitHub Pages
# GitHub → Settings → Pages → Source: "Deploy from a branch"
# Branch: main / (root) → Save
# URL gerada: https://SEU_USUARIO.github.io/marca-dagua/
```

#### Vercel (recomendado — deploy em menos de 1 minuto)

```bash
# Opção A — via CLI
npm install -g vercel
cd marca-dagua
vercel
# Siga as instruções no terminal. O vercel.json já está configurado.

# Opção B — via interface web (sem instalar nada)
# 1. Acesse vercel.com → New Project → Import Git Repository
# 2. Selecione o repositório
# 3. Framework Preset: "Other" (projeto HTML estático)
# 4. Clique em Deploy
# URL gerada: https://marca-dagua.vercel.app (ou domínio personalizado)
```

#### Netlify (alternativa gratuita)

```bash
# Opção A — arrastar e soltar
# Acesse app.netlify.com/drop e arraste a pasta do projeto

# Opção B — via repositório
# app.netlify.com → New site → Import an existing project → GitHub
```

---

### Como usar a marca d'água gerada

1. Abra a ferramenta no navegador
2. Preencha seu nome / marca e contato
3. Escolha o estilo, ajuste opacidade, tamanho e ângulo
4. Clique em **"Baixar Marca D'água (PNG)"** — arquivo transparente
5. Aplique o PNG sobre seus JPGs **antes** do upload nas plataformas:
   - **Lightroom** → Exportar → Marca d'água personalizada → selecione o PNG
   - **Photoshop** → File > Automate > Batch Action com Place Linked
   - **Watermarkly.com** → gratuito, 100 fotos/vez, sem cadastro
   - **IrfanView** → gratuito, Batch Conversion com overlay
6. Faça upload do JPG com marca na plataforma desejada
7. A entrega ao comprador (sem marca) é feita automaticamente pela plataforma

---

### Compatibilidade com plataformas

| Plataforma    | Upload com marca | Entrega limpa automática |
|---------------|:----------------:|:------------------------:|
| Fotto         | ✅               | ✅                       |
| Alboom        | ✅               | ✅                       |
| Banlek        | ✅               | ✅                       |
| Fotop         | ✅               | ✅                       |
| Foco Radical  | ✅               | ✅                       |

---

### Base legal

| Lei / Norma            | Aplicação                                                          |
|------------------------|--------------------------------------------------------------------|
| Lei 9.610/98 (Brasil)  | Protege a obra desde a criação, sem necessidade de registro prévio |
| DMCA (EUA)             | Permite Takedown em plataformas com servidores americanos          |
| Metadados EXIF         | Prova técnica de autoria embutida no arquivo de imagem             |
| Arquivo RAW original   | Prova documental definitiva em caso de disputa judicial            |

Em caso de uso indevido, o fluxo recomendado é:
1. **Notificação extrajudicial** ao infrator
2. **DMCA Takedown** na plataforma onde a imagem foi publicada
3. **Ação judicial** com base nos artigos 102 e 108 da Lei 9.610/98

---

### Proteção adicional recomendada

- Grave metadados EXIF (nome, copyright, contato) **antes** de qualquer upload
- Mantenha sempre os arquivos RAW originais como prova de autoria
- Considere o registro na **Biblioteca Nacional**: [www.bn.gov.br](https://www.bn.gov.br)
- Use o recurso **Content Credentials (C2PA)** da Adobe para assinatura digital rastreável

---

### Licença

Projeto de uso livre para fotógrafos. Modifique, redistribua e adapte à vontade.

---
---

# ⬡ Watermark Pro — English

> [🇧🇷 Português acima](#-marca-dágua-pro--português) | 🇺🇸 English

Professional watermark generator for photographers.
Compatible with **Fotto, Alboom, Banlek, Fotop and Foco Radical**.
Protection backed by **Brazilian Law 9.610/98** (Copyright) and the **DMCA**.

---

### Features

- 4 distribution modes: distributed grid, continuous diagonal, destructive center, borders + center
- Real-time adjustment of opacity, size, angle and spacing
- Legal text generated automatically: `© Name Year | Lei 9.610/98 · Unauthorized use is a crime`
- Transparent PNG download ready for use in Lightroom, Photoshop or Watermarkly
- Full usage instructions exported as a `.txt` file
- Responsive interface — works on desktop and mobile
- 100% static — no server, no database, no sign-up required

---

### Project structure

```
marca-dagua/
├── index.html          # Main HTML structure
├── vercel.json         # Vercel deployment configuration
├── .gitignore          # Git ignored files
├── README.md           # This documentation (PT-BR + EN)
├── README.txt          # Plain text version (PT-BR + EN)
├── css/
│   └── style.css       # Styles, CSS variables, layout, responsiveness
└── js/
    ├── state.js        # Global application state
    ├── renderer.js     # Canvas 2D drawing logic
    ├── ui.js           # UI interactions (sliders, swatches, buttons)
    ├── actions.js      # PNG and .txt instructions download
    └── main.js         # Entry point (DOMContentLoaded)
```

---

### How to host

#### GitHub Pages

```bash
# 1. Create a repository on GitHub (e.g. watermark-pro)
git clone https://github.com/YOUR_USERNAME/watermark-pro.git
cd watermark-pro

# 2. Copy the project files into the cloned folder and commit
git add .
git commit -m "feat: watermark generator"
git push origin main

# 3. Enable GitHub Pages
# GitHub → Settings → Pages → Source: "Deploy from a branch"
# Branch: main / (root) → Save
# Your URL: https://YOUR_USERNAME.github.io/watermark-pro/
```

#### Vercel (recommended — deploys in under 1 minute)

```bash
# Option A — via CLI
npm install -g vercel
cd watermark-pro
vercel
# Follow the terminal prompts. vercel.json is already configured.

# Option B — via web interface (no install needed)
# 1. Go to vercel.com → New Project → Import Git Repository
# 2. Select your repository
# 3. Framework Preset: "Other" (static HTML project)
# 4. Click Deploy
# Your URL: https://watermark-pro.vercel.app (or custom domain)
```

#### Netlify (free alternative)

```bash
# Option A — drag and drop
# Go to app.netlify.com/drop and drag the project folder

# Option B — via repository
# app.netlify.com → New site → Import an existing project → GitHub
```

---

### How to use the generated watermark

1. Open the tool in your browser
2. Fill in your name / brand and contact info
3. Choose a style, adjust opacity, size and angle
4. Click **"Download Watermark (PNG)"** — transparent file
5. Apply the PNG over your JPGs **before** uploading to any platform:
   - **Lightroom** → Export → Custom watermark → select the PNG
   - **Photoshop** → File > Automate > Batch Action with Place Linked
   - **Watermarkly.com** → free, 100 photos/batch, no sign-up
   - **IrfanView** → free, Batch Conversion with overlay
6. Upload the watermarked JPG to your chosen platform
7. The clean file (without watermark) is delivered automatically to the buyer by the platform

---

### Platform compatibility

| Platform      | Upload with watermark | Automatic clean delivery |
|---------------|:---------------------:|:------------------------:|
| Fotto         | ✅                    | ✅                       |
| Alboom        | ✅                    | ✅                       |
| Banlek        | ✅                    | ✅                       |
| Fotop         | ✅                    | ✅                       |
| Foco Radical  | ✅                    | ✅                       |

---

### Legal basis

| Law / Standard         | Application                                                            |
|------------------------|------------------------------------------------------------------------|
| Lei 9.610/98 (Brazil)  | Protects the work from creation, no prior registration required         |
| DMCA (USA)             | Enables Takedown on platforms with US-based servers                     |
| EXIF Metadata          | Technical proof of authorship embedded in the image file                |
| Original RAW file      | Definitive documentary proof in the event of a legal dispute            |

In the event of unauthorized use, the recommended course of action is:
1. **Extrajudicial notice** to the infringer
2. **DMCA Takedown** on the platform where the image was published
3. **Legal action** based on Articles 102 and 108 of Lei 9.610/98

---

### Additional protection recommendations

- Write EXIF metadata (name, copyright, contact) **before** any upload
- Always keep original RAW files as proof of authorship
- Consider registering at the **Brazilian National Library**: [www.bn.gov.br](https://www.bn.gov.br)
- Use Adobe's **Content Credentials (C2PA)** feature for traceable digital signing

---

### License

Free to use for photographers. Feel free to modify, redistribute and adapt as needed.

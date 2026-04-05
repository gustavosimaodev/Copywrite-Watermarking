# Copywrite-Watermarking
custom watermark creator
# ⬡ Marca D'água Pro

Gerador de marca d'água profissional para fotógrafos brasileiros.  
Compatível com **Fotto, Alboom, Banlek, Fotop e Foco Radical**.  
Proteção amparada pela **Lei 9.610/98** (Direitos Autorais) e **DMCA**.

---

## Funcionalidades

- 4 modos de distribuição: grade, diagonal, centro destrutivo, bordas + centro
- Ajuste de opacidade, tamanho, ângulo e espaçamento em tempo real
- Texto legal gerado automaticamente (`© Nome Ano | Lei 9.610/98`)
- Download do PNG transparente para uso em Lightroom / Photoshop / Watermarkly
- Exportação de instruções de uso em `.txt`
- Responsivo (desktop e mobile)

---

## Estrutura do projeto

```
marca-dagua/
├── index.html          # Estrutura HTML principal
├── css/
│   └── style.css       # Estilos (variáveis CSS, layout, componentes)
├── js/
│   ├── state.js        # Estado global da aplicação
│   ├── renderer.js     # Lógica de desenho no Canvas 2D
│   ├── ui.js           # Interações da interface
│   ├── actions.js      # Download do PNG e das instruções
│   └── main.js         # Ponto de entrada (DOMContentLoaded)
└── README.md
```

---

## Como hospedar

### GitHub Pages

```bash
# 1. Crie um repositório no GitHub (ex: marca-dagua)
# 2. Clone e copie os arquivos
git clone https://github.com/SEU_USUARIO/marca-dagua.git
cp -r * marca-dagua/
cd marca-dagua

# 3. Commit e push
git add .
git commit -m "feat: gerador de marca d'água"
git push origin main

# 4. Ative o GitHub Pages
# Settings → Pages → Source: "Deploy from a branch" → Branch: main / (root)
# Acesse: https://SEU_USUARIO.github.io/marca-dagua/
```

### Vercel (recomendado — deploy instantâneo)

```bash
# Opção A — via CLI
npm install -g vercel
cd marca-dagua
vercel

# Opção B — via interface web
# 1. Acesse vercel.com → New Project → Import Git Repository
# 2. Selecione o repositório
# 3. Framework Preset: "Other" (projeto HTML estático)
# 4. Clique em Deploy
# Acesse: https://marca-dagua.vercel.app (ou domínio personalizado)
```

### Netlify (alternativa gratuita)

```bash
# Arraste a pasta do projeto para app.netlify.com/drop
# Ou conecte o repositório GitHub em app.netlify.com
```

---

## Como usar a marca d'água gerada

1. Configure seu nome, contato e estilo no gerador
2. Baixe o PNG transparente
3. Aplique sobre seus JPGs **antes** do upload:
   - **Lightroom** → Exportar → Marca d'água personalizada → selecione o PNG
   - **Photoshop** → Batch Action com Place Linked
   - **Watermarkly.com** → gratuito, 100 fotos/vez, sem cadastro
4. Faça upload do JPG com marca nas plataformas
5. A entrega ao comprador (sem marca) é feita automaticamente pela plataforma

---

## Base legal

| Lei / Norma | Aplicação |
|---|---|
| Lei 9.610/98 (Brasil) | Protege a obra desde a criação, sem necessidade de registro |
| DMCA (EUA) | Permite Takedown em plataformas com servidores americanos |
| Metadados EXIF | Prova técnica de autoria |
| Arquivo RAW original | Prova documental em caso de disputa judicial |

---

## Licença

Este projeto é de uso livre para fotógrafos. Modifique à vontade.

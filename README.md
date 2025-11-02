# apae_website

Bem-vindo(a)! 👋

Este repositório contém o site estático da APAE de São José dos Campos (HTML/CSS/JS). Aqui estão instruções simples para rodar, testar e preparar para envio no GitHub. 🚀

Principais pontos ✅
- Acessibilidade básica implementada (skip-link, landmarks, foco visível, navegação por teclado e announcer para slideshow). ♿
- Modo escuro e alto contraste — botões no cabeçalho para alternar (preferência salva). 🌙⚡
- Scripts de build disponíveis (minificação + compressão) via `npm` (opcional). 🛠️

Como testar localmente 🧭
1. Abra `index.html` diretamente no navegador ou rode um servidor simples:

```powershell
python -m http.server 8000
# depois acesse http://localhost:8000
```

2. Testes rápidos:
- Pressione Tab para ver o link “Pular para o conteúdo” e navegar pela barra. ⌨️
- Use as setas ← e → para navegar o slideshow. ▶️◀️
- Clique nos botões de modo escuro / alto contraste e recarregue para confirmar que a preferência foi salva. 💾

Build (opcional) 📦
Se quiser gerar arquivos minificados (recomendado antes do deploy):

```powershell
npm install
npm run build
```

Isso executa minificação de CSS/JS/HTML e compressão de imagens (gera `dist/`).

Git / Entrega no GitHub 🔁
- Use um repositório público (exigido pela disciplina). 🌐
- Recomendo GitFlow: `main` (produção), `develop`, `feature/*`, `release/*`, `hotfix/*`.
- Mensagens de commit semânticas ajudam na leitura do histórico (ex.: `feat(a11y): add skip link`). ✍️
- Crie uma Release com tag semântica (ex.: `v1.0.0`) e inclua um breve changelog.

Checklist rápido de acessibilidade 📝
- Skip link presente ✅
- Landmarks (header/nav/main/footer) ✅
- Teclado: navegação e slideshow por setas ✅
- Foco visível (focus-visible) ✅
- Announcer para leitores de tela (aria-live) ✅
- Contraste: validar com Lighthouse/axe (recomendado) 🔍

Próximos passos (posso ajudar) 🤝
- Atualizar `contact.html`, `doar.html` e `files.html` com as mesmas melhorias. ✨
- Criar workflow no GitHub Actions para build automático em releases. 🔧
- Rodar auditoria automática (axe/Lighthouse) e ajustar contraste. 🧪

Contato / ajuda
- Se quiser que eu atualize as outras páginas ou rode o build e adicione `dist/`, me avise — eu faço pra você. 👍


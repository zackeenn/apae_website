# APAE — Entrega Final (Acessibilidade, Versionamento e Otimização)

Este repositório contém a versão do site preparada para a entrega final — com melhorias em acessibilidade (WCAG 2.1 AA), preparação para produção e instruções de versionamento (Git/GitHub).

## O que foi implementado nesta entrega

- Controle e documentação (leia a seção Git/GitHub abaixo).  
- Acessibilidade (WCAG 2.1 AA): skip-link para usuários de teclado, estrutura semântica (landmarks), roles ARIA, foco visível e suporte básico para leitores de tela (announcer para slideshow).  
- Navegação por teclado: navegação do slideshow com as setas esquerda/direita; todos os controles principais são focalizáveis.  
- Modo escuro e Alto Contraste com persistência (localStorage) e botões no cabeçalho.  
- Melhoria nas cores e foco para aumentar contraste e usabilidade.  
- Otimização para produção: scripts descritos no `package.json` para minificação de HTML/CSS/JS e compressão de imagens (necessário `npm install`).  

## Como revisar e testar localmente

1. Abra o arquivo `index.html` no navegador.  
2. Teste navegação por teclado: pressione Tab para ver o link "Pular para o conteúdo" e TAB na navegação; use as setas ← e → para avançar/voltar o slideshow.  
3. Ative modo escuro e alto contraste com os botões no cabeçalho — a preferência é salva localmente.  
4. Para testar com leitor de tela, ative o leitor (NVDA/VoiceOver) e verifique as mudanças anunciadas no slideshow.

## Scripts de build (produção)

Os scripts abaixo usam ferramentas Node.js (devDependencies). Para executar:

```powershell
# no Windows PowerShell
npm install
npm run build
```

- `npm run build:css` — minifica `style.css` (gerará `dist/style.min.css`).
- `npm run build:js` — minifica `main.js` (gerará `dist/main.min.js`).
- `npm run build:html` — minifica os HTMLs (gera em `dist/`).
- `npm run build:images` — comprime imagens em `assets/` para `dist/assets/`.
- `npm run build` — executa tudo e prepara `dist/` para deploy.

OBS: os comandos usam pacotes CLI bem conhecidos (ex.: `terser`, `csso`, `html-minifier-terser`, `imagemin-cli`). Se você preferir outra ferramenta (gulp/webpack/parcel), adapte os scripts.

## Controle de versão e GitFlow (instruções)

Recomenda-se seguir GitFlow básico:

1. `main` — ramo de produção (sempre limpo, com tags de release semânticas: v1.0.0).  
2. `develop` — ramo de desenvolvimento integrador.  
3. `feature/*` — ramos para cada funcionalidade (ex.: `feature/accessibility-sr`).  
4. `release/*` — ao preparar um deploy, crie um `release/1.0.0` e finalize para `main`.  
5. `hotfix/*` — correções diretas em produção.

Commits: use mensagens semânticas (tipo escopo):

```
feat(nav): accessible keyboard navigation for slideshow
fix(a11y): add skip-link and roles
docs(readme): add build and gitflow instructions
```

Releases: use `vMAJOR.MINOR.PATCH` e crie uma Release no GitHub com changelog resumido.

## Checklist de conformidade WCAG (o que foi coberto)

- Navegável por teclado: Tab/Shift+Tab, controles do slideshow com setas.  
- Foco visível e consistente.  
- Landmarks: `header[role=banner]`, `nav[role=navigation]`, `main[id=main-content][tabindex=-1]`, `footer[role=contentinfo]`.  
- Imagens com `alt` e slideshow com anunciante ARIA.  
- Modo de alto contraste e modo escuro.

Notas finais

Se quiser, eu posso:

- Gerar os arquivos minificados automaticamente aqui (preciso rodar npm).  
- Atualizar as demais páginas (`contact.html`, `doar.html`, `files.html`) com as mesmas melhorias (skip-link, landmarks, nav atual).  
- Criar um workflow GitHub Actions para deploy automático ao fazer um release.

— Entrega pronta para revisão.

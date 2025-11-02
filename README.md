# 📌 apae_website

## Sobre o projeto
Este repositório contém um site estático (HTML/CSS/JS) usado para apresentar informações e serviços da APAE de São José dos Campos. O projeto mostra páginas institucionais, serviços, notícias, formulário de contato e uma página para doações.

## Funcionalidades
- Navegação responsiva (desktop e mobile).
- Slideshow com controles e suporte a teclado (setas ←/→).
- Acessibilidade: skip-link, landmarks semânticos (`header`, `nav`, `main`, `footer`), foco visível e announcer para leitores de tela.
- Tema escuro e modo de alto contraste com persistência via localStorage.
- Imagens com `loading="lazy"` e preparação para minificação/otimização.

## Estrutura do repositório
- `index.html` — página inicial.
- `about.html` — página institucional.
- `contact.html`, `doar.html`, `files.html` — páginas auxiliares.
- `style.css` — estilos principais.
- `main.js` — scripts do site.
- `assets/` — imagens e recursos.
- `package.json` — scripts de build (opcional).

## Como executar (local)
1. Abra `index.html` direto no navegador ou rode um servidor simples no diretório do projeto:

```powershell
python -m http.server 8000
# depois acesse http://localhost:8000
```

2. Testes rápidos:
- Verifique o link "Pular para o conteúdo" usando Tab.
- Navegue o slideshow com as setas ← e →.
- Alterne tema/alto contraste e recarregue para confirmar persistência.

## Build (opcional)
Se quiser gerar versões otimizadas para deploy (requer Node.js):

```powershell
npm install
npm run build
```

Os scripts em `package.json` tentam minificar CSS/JS/HTML e comprimir imagens para `dist/`.

## Como contribuir
- Abra uma branch `feature/*`, faça alterações e envie um pull request.
- Use mensagens de commit claras (ex.: `feat(a11y): add skip link`).



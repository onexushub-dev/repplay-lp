# Revi LP

Landing page do Revi (https://userevi.app), em Astro 7 + Tailwind v4 + TypeScript. Português (BR) na raiz, inglês em `/en` e espanhol em `/es`.

## Requisitos

- Node 22.23.4 ou superior
- pnpm 12 (`packageManager` em `package.json`)

## Comandos

```bash
pnpm install
pnpm dev       # servidor local em http://localhost:4321
pnpm build     # gera a pasta dist
pnpm preview   # serve a pasta dist
```

## Estrutura

| Pasta | O que tem |
|---|---|
| `src/pages` | Rotas. A raiz é pt-BR, `src/pages/en` é o inglês e `src/pages/es` é o espanhol. |
| `src/components` | `HomePage`, `LegalPage` e peças de layout. |
| `src/content/legal` | Textos de Privacidade e Termos em markdown, por idioma (`pt-br`, `en`, `es`). |
| `src/i18n/ui.ts` | Textos da interface nos dois idiomas. |
| `src/styles/global.css` | Tokens da marca (Ink, Paper, Amber, Dark amber) e estilo dos textos legais. |
| `public` | Favicons, manifest, logos e imagem OG copiados do kit de marca. |

## Marca

Os arquivos vêm do kit de marca do Revi (Placar), no mesmo desenho do app. O Âmbar é `#FFB000` e nunca vai sobre fundo claro; nele entra o Âmbar escuro (`#946200`). Paleta em Ink `#0A0A0A`, Branco `#FFFFFF`, Âmbar e Âmbar escuro.

## Links das lojas

Copie `.env.example` para `.env` e preencha `PUBLIC_APP_STORE_URL` e `PUBLIC_PLAY_STORE_URL`. Enquanto estiverem vazias, os botões aparecem como "Em breve".

## Rotas legais

As lojas apontam para `userevi.app/privacy` e `userevi.app/terms`. Por isso as URLs não têm barra final (`trailingSlash: 'never'`).

## Prints do app

Os mockups de tela da home são HTML/CSS e podem ser trocados por prints reais. O plano para gerar os prints automaticamente está em [`docs/screenshots-plan.md`](docs/screenshots-plan.md), e o registro das telas em `src/data/screens.ts`.

## Convenções

Nomes de arquivos e pastas em kebab-case (por exemplo `home-page.astro` e `how-it-works.astro`). As exceções são `README.md` e `AGENTS.md`. Dentro do código, os componentes continuam em PascalCase (`<HomePage />`), como o Astro exige.

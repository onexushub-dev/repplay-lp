# Repplay LP

Landing page do Repplay (https://repplay.app), em Astro 7 + Tailwind v4 + TypeScript. Português (BR) na raiz e inglês em `/en`.

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
| `src/pages` | Rotas. A raiz é pt-BR e `src/pages/en` é o inglês. |
| `src/components` | `HomePage`, `LegalPage` e peças de layout. |
| `src/content/legal` | Textos de Privacidade e Termos em markdown, por idioma (`pt-br`, `en`). |
| `src/i18n/ui.ts` | Textos da interface nos dois idiomas. |
| `src/styles/global.css` | Tokens da marca (Ink, Paper, Lima, Oliva) e estilo dos textos legais. |
| `public` | Favicons, manifest, logos e imagem OG copiados do kit de marca. |

## Marca

Os arquivos vêm de `docs/brand/repplay` no repositório `repplay`. O Lima é `#D6F23F` e nunca vai sobre fundo claro.

## Links das lojas

Copie `.env.example` para `.env` e preencha `PUBLIC_APP_STORE_URL` e `PUBLIC_PLAY_STORE_URL`. Enquanto estiverem vazias, os botões aparecem como "Em breve".

## Rotas legais

As lojas apontam para `repplay.app/privacy` e `repplay.app/terms`. Por isso as URLs não têm barra final (`trailingSlash: 'never'`).

## Prints do app

Os mockups de tela da home são HTML/CSS e podem ser trocados por prints reais. O plano para gerar os prints automaticamente está em [`docs/screenshots-plan.md`](docs/screenshots-plan.md), e o registro das telas em `src/data/screens.ts`.

## Convenções

Nomes de arquivos e pastas em kebab-case (por exemplo `home-page.astro` e `how-it-works.astro`). As exceções são `README.md` e `AGENTS.md`. Dentro do código, os componentes continuam em PascalCase (`<HomePage />`), como o Astro exige.

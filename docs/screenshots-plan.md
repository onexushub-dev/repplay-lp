# Plano: prints automáticos do app para a LP

Objetivo: rodar o app `repplay` localmente e gerar, sem intervenção manual, os prints mais importantes em pt-BR e en, prontos para trocar os mockups HTML da LP.

## O que a LP já espera

- Arquivos em `public/screens/<nome>.<idioma>.png`, em 1170x2532 (390x844 @3x).
- Registro em `src/data/screens.ts`. Enquanto uma tela não está registrada, a LP mostra o mockup em HTML/CSS. Ao registrar, o `phone.astro` passa a usar a imagem, sem mexer em mais nada.

## Telas prioritárias

| Prioridade | Nome | Tela do app | Onde entra na LP |
|---|---|---|---|
| P0 | `recording` | Gravando, com o contador e o aviso "Clipe #N salvo" | Hero |
| P0 | `editor` | Clipe em modo de edição (barra de ferramentas, corte, Modo Foco) | Seção Edição |
| P1 | `setup` | Preparar a gravação (guia da quadra, gatilhos, lente) | Como funciona |
| P1 | `summary` | Fim da gravação (grade de lances) | Como funciona |
| P1 | `onboarding` | "Grave tudo. Guarde só o melhor." | Final / redes |
| P2 | `games` | Minhas gravações | Edição |
| P2 | `devices` | Gatilhos e celular controle | Gatilhos |
| Manual | `paywall` | Paywall do RevenueCat | Planos |

O paywall é tela nativa do RevenueCat e não aparece em build web, então entra por captura manual no iPhone.

## O que testei (viabilidade, em um clone descartável)

| Passo | Resultado |
|---|---|
| `npm ci` em `app/` | **Falha**: o `package-lock.json` está fora de sincronia com o `package.json` (falta `typescript@5.9.3`). Rodar `npm install` resolve (1360 pacotes, cerca de 4 minutos). |
| `npx expo export --platform web` | **Funciona**: o app inteiro compila para web (todas as rotas). |
| Abrir no navegador, modo servidor (`web.output: server`) | **Falha** na primeira tela: `Image.resolveAssetSource is not a function` (usado no onboarding; não existe no react-native-web). |
| Abrir no navegador, modo página única | **Falha** no carregamento: `ReplayCamera.watchSync is not a function` (o stub web do módulo de câmera está incompleto). |

Conclusão: o caminho web é viável, mas exige uma camada de demonstração. Os erros achados são mecânicos (stubs incompletos), mas **não sei quantos outros aparecem depois destes dois**. A primeira etapa existe para medir isso.

## Restrições da sua máquina

- Windows: sem Xcode, então **não há iOS Simulator**.
- Sem Android SDK, Java e Maestro instalados. Um emulador Android pede cerca de 10 a 15 GB e, com 16 GB de RAM, fica apertado.
- Node 22 e pnpm já resolvidos.

## Comparação das abordagens

| | A. Harness web + Playwright | B. Emulador Android + Maestro | C. iPhone real, semi-manual |
|---|---|---|---|
| Fidelidade | Boa: mesmo código, fontes e tokens. Sem efeitos nativos (blur, glass), safe areas e folhas do sistema. | Alta para Android (UI nativa real). | Máxima, é o app real. |
| Automação | Total e repetível (`pnpm screens`). | Alta, depois do setup pesado. | Baixa. |
| Câmera | Vídeo de exemplo no lugar da câmera (a LP pede imagem real de quadra). | Cena virtual do emulador (não é jogo). | Câmera real. |
| Custo inicial | Médio: camada demo no app. | Alto: SDK, JDK, build nativo (20 a 40 min). | Baixo. |
| Cobre iOS? | Aparência de iOS aproximada. | Não. | Sim. |
| Recomendação | **Principal, para a LP.** | Opcional, para prints de loja do Android. | Só para o paywall e prints de loja do iOS. |

## Plano passo a passo (abordagem A)

Tudo no repo `repplay`, em uma branch própria (por exemplo `feat/demo-harness`), fora do caminho de produção: o modo demo só liga com `EXPO_PUBLIC_DEMO=1`.

1. **Preparar**: corrigir o `package-lock.json` (`npm install`) e conferir que lint e testes continuam passando.
2. **Fazer o app abrir na web**:
   - Completar o stub `ReplayCameraModule.web.ts` (`watchSync` e o que mais aparecer) com funções vazias.
   - Trocar `Image.resolveAssetSource` por um helper que funcione na web.
   - Usar `web.output: single` quando em modo demo.
   - Critério de saída: as telas `onboarding`, `setup`, `games`, `session/[id]` e `clip/[id]` abrem sem erro no console.
3. **Dados de demonstração** em `src/demo/`:
   - Repositório em memória no lugar do MMKV, com um jogo em andamento e 3 encerrados com 5 a 8 lances cada, nomes e horários realistas.
   - Cliente de pagamentos falso (já existe `createFakeClient`) em dois estados: grátis e Pro.
   - Miniaturas e vídeos curtos de exemplo.
   - `ReplayCameraView.web.tsx` mostrando um vídeo em loop no lugar da câmera, para as telas de posicionar e gravar.
4. **Cenas capturáveis**: uma rota por cena, por exemplo `/__demo/recording-saved`, que monta o estado certo e marca `data-ready="true"` quando termina de renderizar.
5. **Captura com Playwright** (`tools/screens`, rodando com `pnpm screens`):
   - Viewport 390x844, escala 3, `reducedMotion`, aguardar `document.fonts.ready` e `data-ready`.
   - Idioma por parâmetro (pt-BR e en), 2 execuções.
   - Saída direto em `repplay-lp/public/screens/<nome>.<idioma>.png`.
6. **Integrar na LP**: registrar as telas em `src/data/screens.ts`, converter para WebP/AVIF com `sharp` e conferir o peso.
7. **Revisão visual**: comparar lado a lado com o app num aparelho real e listar o que o web não reproduz.

Estimativa: 1 a 2 dias de trabalho, com incerteza grande na etapa 2.

## O que preciso de você

- **Imagem real do jogo**: um vídeo vertical de 10 a 20 segundos de beach tennis, futevôlei ou vôlei de praia, com o celular preso atrás da linha de fundo, para a câmera de demonstração. Sem isso, os prints saem com um fundo provisório.
- **Autorização para uma branch no repo `repplay`**: o repositório é da organização, e sua conta tem só leitura, então o fluxo seria um fork.
- **Decisão**: se vale investir também na abordagem B para prints de loja do Android.

## Riscos

- O web pode revelar mais stubs incompletos além dos dois achados.
- Os prints do web não são prints de loja: servem para a LP, não substituem as capturas oficiais da App Store e do Google Play.
- Cada mudança de interface no app exige rodar `pnpm screens` de novo.

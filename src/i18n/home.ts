import type { Locale } from './ui';
import { PLAN_PRICES as P } from '../data/plans';

export type TestimonialKey = 'marcus' | 'lorenzo' | 'victor';
export type TriggerKey = 'tap' | 'gesture' | 'voice' | 'watch' | 'bluetooth' | 'phone';
export type SportKey =
  | 'beachTennis'
  | 'footvolley'
  | 'beachVolley'
  | 'tennis'
  | 'padel'
  | 'tableTennis'
  | 'volleyball'
  | 'basketball'
  | 'handball'
  | 'futsal'
  | 'societyFootball'
  | 'peteca'
  | 'snooker'
  | 'any';

export interface HomeCopy {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    screen: {
      rec: string;
      plays: string;
      buffer: string;
      hint: string;
      savedTitle: string;
      savedVia: string;
    };
  };
  facts: string[];
  how: {
    title: string;
    subtitle: string;
    steps: { title: string; body: string }[];
  };
  triggers: {
    title: string;
    subtitle: string;
    items: Record<TriggerKey, { title: string; body: string; tag: string; pro: boolean }>;
  };
  editor: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; body: string }[];
    screen: { cut: string; speed: string; focus: string; zoom: string; save: string; share: string };
  };
  privacy: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
    link: string;
    ring: { center: string; label: string; kept: string };
  };
  sports: {
    title: string;
    subtitle: string;
    credit: string;
    nav: { region: string; prev: string; next: string; slide: string };
    items: Record<SportKey, { title: string; body: string; alt: string }>;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Record<TestimonialKey, { tag: string; quote: string }>;
  };
  plans: {
    title: string;
    subtitle: string;
    free: { name: string; price: string; period: string; items: string[] };
    pass: { name: string; price: string; period: string; items: string[] };
    proMonthly: { name: string; price: string; period: string; alt: string; badge: string; items: string[] };
    proYearly: { name: string; price: string; period: string; alt: string; badge: string; items: string[] };
    note: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  cta: { title: string; subtitle: string; legal: string };
  stickyLabel: string;
}

const ptBR: HomeCopy = {
  hero: {
    eyebrow: 'Replay para quem joga',
    title: 'Seu lance. De novo.',
    subtitle:
      'Prenda o celular na grade, jogue à vontade e guarde só a jogada que valeu. Sem cadastro, sem nuvem.',
    note: 'Grátis para começar · iPhone e Android',
    screen: {
      rec: 'Gravando',
      plays: 'Lances',
      buffer: 'Últimos 15s prontos',
      hint: 'Acene com os braços para salvar',
      savedTitle: 'Clipe #3 salvo',
      savedVia: 'via gesto · 15s',
    },
  },
  facts: ['Sem cadastro', 'Tudo fica no seu celular', 'Grátis para começar'],
  how: {
    title: 'Grave tudo. Guarde só o melhor.',
    subtitle: 'Três passos entre o ponto e o story.',
    steps: [
      {
        title: 'Posicione',
        body: 'Na grade ou na areia, atrás da linha de fundo. O Repplay mostra o guia da quadra e o nível do horizonte.',
      },
      {
        title: 'Jogue',
        body: 'A câmera grava o tempo todo, mas só guarda os instantes mais recentes. O que fica para trás some sozinho.',
      },
      {
        title: 'Salve',
        body: 'Mandou bem? Acene, fale, toque ou use o relógio. O lance vai para o seu celular, pronto para postar.',
      },
    ],
  },
  triggers: {
    title: 'Salve sem tirar o olho do jogo.',
    subtitle: 'Seis jeitos de acionar o lance. Use o que cabe no seu jogo.',
    items: {
      tap: { title: 'Toque na tela', body: 'O básico: um toque em qualquer lugar salva o lance.', tag: 'Grátis', pro: false },
      gesture: {
        title: 'Braços no alto',
        body: 'Levante os dois braços e o app salva. Funciona com quem estiver no quadro.',
        tag: 'Grátis',
        pro: false,
      },
      voice: {
        title: 'Diga “salvar”',
        body: 'Comando de voz processado no próprio aparelho. Nenhum áudio vai para a nuvem.',
        tag: 'Grátis · iPhone',
        pro: false,
      },
      watch: {
        title: 'Apple Watch',
        body: 'Um botão grande no pulso. O relógio vibra quando o lance é salvo.',
        tag: 'Pro · iPhone',
        pro: true,
      },
      bluetooth: {
        title: 'Controle Bluetooth',
        body: 'Use o botão de um controle Bluetooth de câmera ou selfie.',
        tag: 'Grátis',
        pro: false,
      },
      phone: {
        title: 'Segundo celular',
        body: 'Transforme outro iPhone num botão de salvar, a poucos metros da quadra.',
        tag: 'Grátis · iPhone',
        pro: false,
      },
    },
  },
  editor: {
    eyebrow: 'Edição',
    title: 'Do lance ao story em dois toques.',
    subtitle: 'Corte no ponto certo, ajuste a velocidade e mande para onde quiser.',
    items: [
      { title: 'Corte preciso', body: 'Ajuste onde o lance começa e termina, dentro do trecho que o Repplay guardou.' },
      { title: 'Velocidade, zoom e giro', body: 'Acelere, desacelere e enquadre o lance do jeito que ele merece.' },
      {
        title: 'Modo Foco',
        body: 'No iPhone, o enquadramento acompanha a jogada como numa transmissão de TV. Desliga com um toque.',
      },
      { title: 'Galeria ou compartilhar', body: 'Salve na galeria ou envie para qualquer app com um toque.' },
    ],
    screen: { cut: 'Corte', speed: 'Velocidade', focus: 'Foco', zoom: 'Zoom', save: 'Salvar', share: 'Enviar' },
  },
  privacy: {
    eyebrow: 'Privacidade',
    title: 'Grava tudo. Guarda só o lance.',
    body: 'Enquanto você joga, o Repplay mantém só os instantes mais recentes numa memória temporária do celular. O que fica para trás é apagado na hora. Só os lances que você salva permanecem.',
    bullets: [
      'Sem conta e sem login',
      'Nenhum vídeo vai para os nossos servidores',
      'Gesto e voz reconhecidos no próprio aparelho',
    ],
    link: 'Ler a Política de Privacidade',
    ring: { center: 'Agora', label: 'memória temporária', kept: 'lance salvo' },
  },
  sports: {
    title: 'Qualquer esporte. Qualquer quadra.',
    subtitle: 'Prenda o celular, comece a gravar e jogue. O Repplay não liga para a modalidade.',
    credit: 'Fotos e vídeos: Pexels.',
    nav: { region: 'Esportes', prev: 'Esporte anterior', next: 'Próximo esporte', slide: 'Esporte {n} de {total}' },
    items: {
      beachTennis: {
        title: 'Beach tennis',
        body: 'Rali curto, bola rápida, ponto que some em dois segundos.',
        alt: 'Duas jogadoras de beach tennis rindo na areia, com as raquetes nas mãos',
      },
      footvolley: {
        title: 'Futevôlei',
        body: 'Peito, pé e cabeça: a jogada que ninguém viu direito.',
        alt: 'Jogador de futevôlei executando uma bicicleta ao lado da rede',
      },
      beachVolley: {
        title: 'Vôlei de praia',
        body: 'Ataque, bloqueio e defesa na raça, sempre de novo.',
        alt: 'Jogo de vôlei de praia em Lloret de Mar, com um jogador saltando para atacar perto da rede',
      },
      tennis: {
        title: 'Tênis',
        body: 'Saque, devolução e passada: o ponto que decide o game.',
        alt: 'Tenista sacando em uma quadra de saibro',
      },
      padel: {
        title: 'Padel',
        body: 'Rali com parede, bandeja e smash. O ponto que parecia perdido.',
        alt: 'Jogadora de padel avançando com a raquete em uma quadra coberta',
      },
      tableTennis: {
        title: 'Tênis de mesa',
        body: 'Efeito, reflexo e uma bola que some em um segundo.',
        alt: 'Mesatenista concentrado em plena jogada, com a bola à frente do rosto',
      },
      volleyball: {
        title: 'Vôlei',
        body: 'Levantamento, cortada e bloqueio na quadra fechada.',
        alt: 'Jogadoras de vôlei em quadra fechada, em pleno salto de ataque',
      },
      basketball: {
        title: 'Basquete',
        body: 'Enterrada, bandeja e bola de três: o lance que vira replay.',
        alt: 'Jogador de basquete no ar durante uma enterrada em ginásio',
      },
      handball: {
        title: 'Handebol',
        body: 'Salto, arremesso e defesa em uma fração de segundo.',
        alt: 'Jogadora de handebol no ar durante um arremesso',
      },
      futsal: {
        title: 'Futsal',
        body: 'Drible curto, chute forte e gol em espaço apertado.',
        alt: 'Jogador de futsal correndo com a bola em quadra coberta',
      },
      societyFootball: {
        title: 'Futebol society',
        body: 'Golaço no sintético e jogada de craque entre amigos.',
        alt: 'Dois jogadores disputando a bola em um jogo de futebol society',
      },
      peteca: {
        title: 'Peteca',
        body: 'Mão certeira, peteca no ar e um rali que não pode cair.',
        alt: 'Jogadora de top rosa se abaixando para pegar a peteca em uma quadra coberta',
      },
      snooker: {
        title: 'Sinuca',
        body: 'A tacada perfeita também merece um replay.',
        alt: 'Um jogador mira a tacada em uma mesa de sinuca enquanto uma mulher observa',
      },
      any: {
        title: 'Qualquer esporte',
        body: 'Se tem esporte, tem lance. É só prender o celular e jogar.',
        alt: '',
      },
    },
  },
  testimonials: {
    title: 'Quem já testou conta.',
    subtitle: 'O que quem jogou com o Repplay mais gostou.',
    items: {
      marcus: {
        tag: 'Apple Watch',
        quote: 'Que app bom, mudou o meu jeito de jogar. E salvar o lance pelo Apple Watch é demais.',
      },
      lorenzo: {
        tag: 'Editar e postar',
        quote: 'Que ideia genial, uso em todo jogo. Editar e postar é fácil demais.',
      },
      victor: {
        tag: 'Memória livre',
        quote: 'Esse app é show, grava tudo e eu não perco lance nenhum. E a memória do celular nunca enche.',
      },
    },
  },
  plans: {
    title: 'Comece grátis. Pague só se precisar de mais.',
    subtitle: 'Sem cadastro para testar. Você só passa pelo pagamento quando quiser liberar tudo.',
    free: {
      name: 'Grátis',
      price: 'R$ 0',
      period: 'para sempre',
      items: [
        `${P.freeRecordingsPerMonth} gravações por mês`,
        `Full HD, clipes de até ${P.freeClipSeconds} s`,
        'Todos os gatilhos, menos o relógio',
        'Editor e compartilhamento',
        'Marca d’água; som, velocidade e Foco só dentro do app',
      ],
    },
    pass: {
      name: 'Passe Avulso',
      price: P.singlePass,
      period: 'uma gravação',
      items: ['Uma gravação com tudo liberado', 'Sem marca d’água', 'Som, velocidade e Foco no vídeo', 'Sem assinatura'],
    },
    proMonthly: {
      name: 'Pro Mensal',
      price: P.proMonthly,
      period: 'por mês',
      alt: 'Renova todo mês, cancele quando quiser',
      badge: `${P.trialDays} dias grátis`,
      items: [
        `${P.trialDays} dias grátis para testar`,
        'Gravações ilimitadas',
        'Sem marca d’água; som, velocidade e Foco no vídeo',
        'Clipes acima de 15 s, compilação e Apple Watch',
      ],
    },
    proYearly: {
      name: 'Pro Anual',
      price: P.proYearly,
      period: 'por ano',
      alt: `Cerca de ${P.proYearlyPerMonth} por mês · economia de ${P.yearlySavingsPercent}%`,
      badge: 'Melhor valor',
      items: [
        `${P.trialDays} dias grátis para testar`,
        'Gravações ilimitadas',
        'Sem marca d’água; som, velocidade e Foco no vídeo',
        'Clipes acima de 15 s, compilação e Apple Watch',
      ],
    },
    note: 'Valores em reais na loja do Brasil; em outros países a loja mostra o preço local. Cancele quando quiser nas configurações da App Store ou do Google Play. O vídeo exportado no plano Grátis leva a marca d’água do Repplay.',
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        q: 'Meus vídeos vão para a nuvem?',
        a: 'Não. Tudo fica no seu celular: o Repplay não tem cadastro nem servidor de vídeos. Só as compras passam por serviços de terceiros (Apple, Google e RevenueCat). Os detalhes estão na Política de Privacidade.',
      },
      {
        q: 'O app grava o jogo inteiro?',
        a: 'Ele grava o tempo todo, mas só guarda os instantes mais recentes numa memória temporária do celular. O que fica para trás é apagado. Só os lances que você salva permanecem.',
      },
      {
        q: 'O celular esquenta? E a bateria?',
        a: 'Gravar vídeo continuamente exige do aparelho. O Repplay apaga a tela depois de alguns segundos sem toque para poupar bateria e, se o celular esquentar, reduz a qualidade aos poucos (primeiro Full HD a 30 quadros, depois 720p) e avisa na tela. Se esquentar demais, a gravação para para proteger o aparelho. Em dia de sol forte, deixe o celular na sombra.',
      },
      {
        q: 'Funciona no iPhone e no Android?',
        a: 'Funciona nos dois. Alguns recursos hoje são só do iPhone: comando de voz, Apple Watch, segundo celular como controle e Modo Foco.',
      },
      {
        q: 'Preciso de internet?',
        a: 'Para gravar e editar, não. A internet só entra nas compras e quando você compartilha o vídeo.',
      },
      {
        q: 'Qual a diferença entre Grátis, Passe e Pro?',
        a: 'O Grátis traz 3 gravações por mês, em Full HD, com clipes de até 15 segundos e marca d’água. Som, velocidade e Modo Foco funcionam no editor, mas não vão no vídeo salvo ou enviado, e o app avisa isso antes de exportar. O Passe Avulso libera uma gravação com tudo, sem marca d’água, e não conta nas gravações grátis. O Pro libera gravações ilimitadas, clipes acima de 15 segundos, compilação de clipes, som, velocidade e Foco no vídeo, sem marca d’água, e o gatilho do Apple Watch.',
      },
      {
        q: 'Como cancelo o Pro?',
        a: 'Pelas configurações da sua conta Apple ou Google Play. Quem cancela até 24 horas antes do fim do teste de 7 dias não é cobrado.',
      },
      {
        q: 'Posso gravar outras pessoas?',
        a: 'Pode, com cuidado: avise e, antes de publicar, peça autorização de quem aparece no vídeo, principalmente se forem crianças. Não grave em vestiários ou outros locais íntimos.',
      },
    ],
  },
  cta: {
    title: 'Nenhum lance perdido.',
    subtitle: 'Baixe o Repplay e deixe o celular ligado na quadra. O resto é jogo.',
    legal: 'Disponível para iPhone e Android.',
  },
  stickyLabel: 'Baixar o Repplay',
};

const en: HomeCopy = {
  hero: {
    eyebrow: 'Replay for players',
    title: 'Your play. Again.',
    subtitle:
      'Clip the phone to the fence, play on, and keep only the point that mattered. No sign-up, no cloud.',
    note: 'Free to start · iPhone and Android',
    screen: {
      rec: 'Recording',
      plays: 'Plays',
      buffer: 'Last 15s ready',
      hint: 'Wave your arms to save',
      savedTitle: 'Clip #3 saved',
      savedVia: 'via gesture · 15s',
    },
  },
  facts: ['No sign-up', 'Everything stays on your phone', 'Free to start'],
  how: {
    title: 'Record everything. Keep the best.',
    subtitle: 'Three steps from the point to the story.',
    steps: [
      {
        title: 'Position',
        body: 'On the fence or in the sand, behind the baseline. Repplay shows a court guide and the horizon level.',
      },
      {
        title: 'Play',
        body: 'The camera records nonstop but only holds on to the most recent moments. What falls behind disappears on its own.',
      },
      {
        title: 'Save',
        body: 'Nailed it? Wave, speak, tap or use your watch. The play lands on your phone, ready to post.',
      },
    ],
  },
  triggers: {
    title: 'Save it without taking your eyes off the game.',
    subtitle: 'Six ways to trigger a play. Use whatever fits your game.',
    items: {
      tap: { title: 'Tap the screen', body: 'The basic one: a tap anywhere saves the play.', tag: 'Free', pro: false },
      gesture: {
        title: 'Arms up',
        body: 'Raise both arms and the app saves it. Works for anyone in the frame.',
        tag: 'Free',
        pro: false,
      },
      voice: {
        title: 'Say “save”',
        body: 'Voice command processed on the device itself. No audio goes to the cloud.',
        tag: 'Free · iPhone',
        pro: false,
      },
      watch: {
        title: 'Apple Watch',
        body: 'A big button on your wrist. The watch buzzes when the play is saved.',
        tag: 'Pro · iPhone',
        pro: true,
      },
      bluetooth: {
        title: 'Bluetooth remote',
        body: 'Use the button on a Bluetooth camera or selfie remote.',
        tag: 'Pro',
        pro: true,
      },
      phone: {
        title: 'Second phone',
        body: 'Turn another iPhone into a save button, a few meters from the court.',
        tag: 'Pro · iPhone',
        pro: true,
      },
    },
  },
  editor: {
    eyebrow: 'Editing',
    title: 'From play to story in two taps.',
    subtitle: 'Trim at the right spot, adjust the speed and send it anywhere.',
    items: [
      { title: 'Precise trim', body: 'Set where the play starts and ends, within the stretch Repplay kept.' },
      { title: 'Speed, zoom and rotate', body: 'Speed it up, slow it down and frame the play the way it deserves.' },
      {
        title: 'Focus Mode',
        body: 'On iPhone, the framing follows the play like a TV broadcast. Turn it off with one tap.',
      },
      { title: 'Gallery or share', body: 'Save to your gallery or send it to any app with one tap.' },
    ],
    screen: { cut: 'Trim', speed: 'Speed', focus: 'Focus', zoom: 'Zoom', save: 'Save', share: 'Share' },
  },
  privacy: {
    eyebrow: 'Privacy',
    title: 'Records everything. Keeps only the play.',
    body: 'While you play, Repplay keeps only the most recent moments in your phone’s temporary memory. What falls behind is deleted on the spot. Only the plays you save stay.',
    bullets: [
      'No account, no login',
      'No video ever reaches our servers',
      'Gesture and voice recognized on the device',
    ],
    link: 'Read the Privacy Policy',
    ring: { center: 'Now', label: 'temporary memory', kept: 'saved play' },
  },
  sports: {
    title: 'Any sport. Any court.',
    subtitle: 'Mount the phone, start recording and play. Repplay does not care which sport it is.',
    credit: 'Photos and videos: Pexels.',
    nav: { region: 'Sports', prev: 'Previous sport', next: 'Next sport', slide: 'Sport {n} of {total}' },
    items: {
      beachTennis: {
        title: 'Beach tennis',
        body: 'Short rally, fast ball, a point gone in two seconds.',
        alt: 'Two beach tennis players laughing on the sand, rackets in hand',
      },
      footvolley: {
        title: 'Footvolley',
        body: 'Chest, foot and head: the play nobody quite saw.',
        alt: 'Footvolley player performing a bicycle kick next to the net',
      },
      beachVolley: {
        title: 'Beach volleyball',
        body: 'Spike, block and dig with grit, again and again.',
        alt: 'Beach volleyball game in Lloret de Mar, with a player leaping to spike near the net',
      },
      tennis: {
        title: 'Tennis',
        body: 'Serve, return and passing shot: the point that decides the game.',
        alt: 'Tennis player serving on a clay court',
      },
      padel: {
        title: 'Padel',
        body: 'Wall rallies, bandejas and smashes. The point that looked lost.',
        alt: 'Padel player stepping forward with the racket on an indoor court',
      },
      tableTennis: {
        title: 'Table tennis',
        body: 'Spin, reflexes and a ball gone in one second.',
        alt: 'Table tennis player mid-play with the ball in front of the face',
      },
      volleyball: {
        title: 'Volleyball',
        body: 'Set, spike and block on the indoor court.',
        alt: 'Volleyball players on an indoor court, mid-air on an attack',
      },
      basketball: {
        title: 'Basketball',
        body: 'Dunks, layups and threes: the play that becomes a replay.',
        alt: 'Basketball player in the air during a dunk in a gym',
      },
      handball: {
        title: 'Handball',
        body: 'Jump, shot and save in a split second.',
        alt: 'Handball player in the air during a shot',
      },
      futsal: {
        title: 'Futsal',
        body: 'Quick dribble, hard shot and a goal in a tight space.',
        alt: 'Futsal player running with the ball on an indoor court',
      },
      societyFootball: {
        title: 'Five-a-side football',
        body: 'A screamer on turf and a star move among friends.',
        alt: 'Two players contesting the ball in a five-a-side football match',
      },
      peteca: {
        title: 'Peteca',
        body: 'A hand-struck shuttle and a rally that cannot hit the ground.',
        alt: 'Player in a pink top bending down to pick up the shuttle on an indoor court',
      },
      snooker: {
        title: 'Snooker',
        body: 'The perfect shot deserves a replay too.',
        alt: 'A player lines up a shot on a pool table while a woman watches',
      },
      any: {
        title: 'Any sport',
        body: 'If there is a sport, there is a play. Just mount the phone and play.',
        alt: '',
      },
    },
  },
  testimonials: {
    title: 'Hear it from people who tested it.',
    subtitle: 'What players liked most about Repplay.',
    items: {
      marcus: {
        tag: 'Apple Watch',
        quote: 'Such a great app, it changed how I play. And saving the play from my Apple Watch is amazing.',
      },
      lorenzo: {
        tag: 'Edit and post',
        quote: 'Genius idea, I use it every game. Editing and posting is ridiculously easy.',
      },
      victor: {
        tag: 'Free storage',
        quote: 'This app is awesome, it records everything and I never miss a play. And my phone storage never fills up.',
      },
    },
  },
  plans: {
    title: 'Start free. Pay only if you need more.',
    subtitle: 'No sign-up to try it. You only meet a payment screen when you want to unlock everything.',
    free: {
      name: 'Free',
      price: 'R$ 0',
      period: 'forever',
      items: [
        `${P.freeRecordingsPerMonth} recordings per month`,
        `Full HD, clips up to ${P.freeClipSeconds} s`,
        'Every trigger except the watch',
        'Editor and sharing',
        'Watermark; sound, speed and Focus stay in the app',
      ],
    },
    pass: {
      name: 'Single Pass',
      price: P.singlePass,
      period: 'one recording',
      items: ['One recording with everything unlocked', 'No watermark', 'Sound, speed and Focus in the video', 'No subscription'],
    },
    proMonthly: {
      name: 'Pro Monthly',
      price: P.proMonthly,
      period: 'per month',
      alt: 'Renews monthly, cancel anytime',
      badge: `${P.trialDays}-day free trial`,
      items: [
        `${P.trialDays}-day free trial`,
        'Unlimited recordings',
        'No watermark; sound, speed and Focus in the video',
        'Clips over 15 s, compilations and Apple Watch',
      ],
    },
    proYearly: {
      name: 'Pro Yearly',
      price: P.proYearly,
      period: 'per year',
      alt: `About ${P.proYearlyPerMonth} per month · save ${P.yearlySavingsPercent}%`,
      badge: 'Best value',
      items: [
        `${P.trialDays}-day free trial`,
        'Unlimited recordings',
        'No watermark; sound, speed and Focus in the video',
        'Clips over 15 s, compilations and Apple Watch',
      ],
    },
    note: 'Prices in Brazilian reais from the Brazilian store; elsewhere your store shows local pricing. Cancel anytime in your App Store or Google Play settings. Videos exported on the Free plan carry the Repplay watermark.',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'Do my videos go to the cloud?',
        a: 'No. Everything stays on your phone: Repplay has no sign-up and no video servers. Only purchases go through third-party services (Apple, Google and RevenueCat). Details are in the Privacy Policy.',
      },
      {
        q: 'Does the app record the whole game?',
        a: 'It records nonstop but only keeps the most recent moments in your phone’s temporary memory. What falls behind is deleted. Only the plays you save stay.',
      },
      {
        q: 'Does the phone overheat? What about battery?',
        a: 'Recording video continuously is demanding. Repplay turns the screen off after a few seconds without a touch to save battery and, if the phone warms up, lowers the quality step by step (Full HD at 30 fps first, then 720p) and tells you on screen. If it gets too hot, the recording stops to protect the device. On a sunny day, keep the phone in the shade.',
      },
      {
        q: 'Does it work on iPhone and Android?',
        a: 'Both. A few features are iPhone-only for now: voice command, Apple Watch, a second phone as a remote and Focus Mode.',
      },
      {
        q: 'Do I need internet?',
        a: 'Not to record or edit. The internet is only used for purchases and when you share a video.',
      },
      {
        q: 'What is the difference between Free, Pass and Pro?',
        a: 'Free gives 3 recordings a month, in Full HD, with clips up to 15 seconds and a watermark. Sound, speed and Focus Mode work in the editor but do not make it into the saved or sent video, and the app tells you so before exporting. The Single Pass unlocks one recording with everything, no watermark, and does not count against the free recordings. Pro unlocks unlimited recordings, clips over 15 seconds, compiling clips, sound, speed and Focus in the video, no watermark, and the Apple Watch trigger.',
      },
      {
        q: 'How do I cancel Pro?',
        a: 'In your Apple or Google Play account settings. If you cancel at least 24 hours before the 7-day trial ends, you are not charged.',
      },
      {
        q: 'Can I record other people?',
        a: 'Yes, with care: tell them and, before publishing, get permission from whoever appears in the video, especially children. Do not record in locker rooms or other private places.',
      },
    ],
  },
  cta: {
    title: 'No play missed.',
    subtitle: 'Download Repplay and leave the phone running on the court. The rest is just playing.',
    legal: 'Available for iPhone and Android.',
  },
  stickyLabel: 'Get Repplay',
};

export const homeCopy: Record<Locale, HomeCopy> = { 'pt-BR': ptBR, en };

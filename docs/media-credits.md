# Créditos e preparo das mídias

Todas as mídias de esportes vêm do [Pexels](https://www.pexels.com/license/), de licença gratuita para uso comercial. A licença não permite sugerir que as pessoas retratadas endossam o produto. Se as imagens forem trocadas por filmagem própria, remova esta lista e o crédito "Fotos e vídeos: Pexels" da seção de esportes.

## Fotos (carrossel "Feito para a areia")

Cada foto foi baixada em alta resolução e cortada uma vez em 4:5 (1080x1350) em volta do atleta. Cortar depois de reduzir a foto inteira, como era antes, deixava as fotos largas borradas.

| Arquivo em `src/assets/sports` | Pexels | Cena |
|---|---|---|
| `beach-tennis.jpg` | foto 20655636 | Beach tennis, duas jogadoras na areia |
| `footvolley.jpg` | foto 38179542 | Chute de bicicleta junto à rede |
| `beach-volleyball.jpg` | foto 37962307 | Vôlei de praia em Lloret de Mar |
| `volleyball.jpg` | foto 34544419 | Vôlei de quadra fechada |
| `tennis.jpg` | foto 18016912 | Tênis, saque em quadra de saibro |
| `padel.jpg` | foto 35248400 | Padel, jogadora avançando |
| `table-tennis.jpg` | foto 38233887 | Tênis de mesa |
| `basketball.jpg` | foto 30053813 | Basquete, enterrada |
| `handball.jpg` | foto 25048041 | Handebol, jogadora no ar em partida |
| `futsal.jpg` | foto 37097046 | Futsal |
| `society-football.jpg` | foto 39095099 | Futebol society, disputa de bola |
| `snooker.jpg` | foto 5055799 | Sinuca, casal na mesa |

## Vídeos dos celulares

| Arquivos em `public/media` | Pexels | Onde aparece |
|---|---|---|
| `beach-tennis-hero.mp4` e `.webp` | vídeo 17098049 | Celular do hero (tela de gravação) |
| `footvolley-editor.mp4` e `.webp` | vídeo 6179719 | Celular da seção de edição |

Como foram gerados (ffmpeg, partindo dos arquivos Full HD):

- **Hero** (proporção da tela do celular, cerca de 0,458): trecho de 8 s a partir de 11,8 s, corte de 494x1080 que acompanha o jogador com um movimento suave, escala para 540x1180, 30 fps, sem áudio.
- **Editor** (palco quase quadrado, cerca de 0,95): trecho de 7,5 s a partir de 0,9 s, corte de 1030x1080 acompanhando o mergulho, escala para 540x566.
- Os dois entram e saem do preto em 0,3 s para o loop não "pular". Codificação H.264 (crf 27, `+faststart`), cerca de 820 KB e 310 KB, mais um pôster WebP de cada.

Se mudar o tamanho dos celulares no CSS, refaça os cortes para manter a proporção da tela, senão o vídeo é recortado pelo `object-fit: cover`.

## Fotos das avaliações (provisórias)

Retratos genéricos do Pexels de pessoas praticando esporte, só para ocupar o lugar até chegarem as fotos reais de cada pessoa. Em `src/assets/people/`, recortados em quadrado ao redor do rosto. Devem ser trocados antes de divulgar a página: foto de desconhecido ao lado de um nome sugere que aquela pessoa aprova o app.

| Arquivo | Pexels | Cena |
|---|---|---|
| `marcus.jpg` | foto 4719828 | Basquete, homem quicando a bola |
| `sara.jpg` | foto 38136059 | Beach tênis, jogadora de óculos esportivos |
| `lorenzo.jpg` | foto 12169306 | Vôlei de praia, homem sorrindo |
| `lyandra.jpg` | foto 5836907 | Tênis, mulher de rabo de cavalo |
| `victor.jpg` | foto 8084773 | Basquete, homem sorrindo junto à tabela |
| `yasmin.jpg` | foto 20823437 | Padel, jogadora na rede |

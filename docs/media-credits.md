# Créditos e preparo das mídias

Todas as mídias de esportes vêm do [Pexels](https://www.pexels.com/license/), de licença gratuita para uso comercial. A licença não permite sugerir que as pessoas retratadas endossam o produto. Se as imagens forem trocadas por filmagem própria, remova esta lista e o crédito "Fotos e vídeos: Pexels" da seção de esportes.

## Fotos (seção "Feito para a areia")

| Arquivo em `src/assets/sports` | Pexels | Cena |
|---|---|---|
| `beach-tennis.jpg` | foto 38136058 | Beach tennis, jogador em salto |
| `footvolley.jpg` | foto 38179542 | Chute de bicicleta junto à rede |
| `beach-volleyball.jpg` | foto 10578357 | Vôlei de praia |
| `any-sport.jpg` | foto 34544419 | Vôlei de quadra fechada |

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

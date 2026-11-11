# Perfil: primeira parte visual

Referência acessada pelo plugin Figma em 08/11/2026:
https://www.figma.com/design/AM65cNyd3YRrl7UyVwfmrX/DevLinks?node-id=58-418

## Implementação
- App passa foto, texto alternativo, usuário e largura por props ao Profile.
- Profile reúne foto e nome; Profile.css organiza essa parte visual.
- Usuário personalizado: Isabelle M.
- Avatar: camada 90:227, imagem de 112 x 111 px dentro de espaço de 112 x 112 px.
- Perfil: padding de 24 px, intervalo de 8 px, texto Inter Regular 16 px / 24 px.
- Container: largura máxima de 588 px, centralizado e com margem superior de 56 px.
- Foto fornecida pela estudante em src/assets/isabelle.jpg.
- Fundo desktop original da camada 1439:3066 em src/assets/background-dark.png.
- Inter Regular obtida pelo Google Fonts, armazenada localmente em src/assets/inter-regular.ttf.
- Imagens são assets individuais do design, não capturas da tela inteira.

## Verificação
- npm run lint: passou.
- npm run build: passou.

## Como conferir
Na pasta devlinks, execute npm run dev e abra o endereço exibido no terminal.
A tela deve mostrar o fundo escuro, a foto e Isabelle M centralizados.

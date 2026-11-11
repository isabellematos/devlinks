# DevLinks — Isabelle M

Página pessoal de links feita com React, JavaScript, Vite e CSS, baseada no exercício DevLinks e personalizada com foto, nome e links de Isabelle.

## Executar

Use uma versão de Node.js compatível com Vite 8 (ambiente de desenvolvimento: Node 24).

```sh
npm install
npm run dev
```

No PowerShell, se necessário, use `npm.cmd` no lugar de `npm`. Abra o endereço mostrado no terminal.

## Comandos

- `npm run lint`: verifica o código com Oxlint.
- `npm run build`: gera a versão de produção na pasta dist.
- `npm run preview`: abre uma prévia da versão gerada.

## Funcionalidades

- Perfil com foto e nome.
- Tema claro/escuro, salvo no localStorage; no tema claro, óculos escuros caem sobre a foto.
- Quatro links pessoais e ícones de GitHub, Instagram e LinkedIn.
- Fundos próprios para computador e celular; layout flexível.
- Botões acessíveis por teclado, foco visível e nomes para leitores de tela.

## Organização e conceitos

- `src/components`: partes reutilizáveis da interface (Profile, ThemeToggle, LinkButton, SocialLinks e Footer).
- `src/data/links.js`: textos e endereços dos links, exibidos com map e chaves estáveis.
- `src/App.jsx`: organiza os componentes e controla o tema.
- Props são informações passadas a um componente, como a foto do Profile.
- useState guarda o tema atual; useEffect aplica as cores e salva a preferência.
- `src/assets`: imagens, ícones e fonte locais.

## Referências e créditos

- [Figma do exercício](https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks?node-id=0-1).
- [Cópia usada no desenvolvimento](https://www.figma.com/design/AM65cNyd3YRrl7UyVwfmrX/DevLinks?node-id=0-1).
- Ícones e fundos exportados do Figma. Fonte Inter: Google Fonts, licença OFL em src/assets/Inter-LICENSE.txt.
- Foto fornecida por Isabelle.
- Desenvolvimento assistido por IA, com consultas reais ao Figma MCP e Context7 MCP.

## Evidências e entrega

Os registros de cada etapa ficam em [docs/evidencias](docs/evidencias). Eles representam o estado daquela etapa, não uma lista atualizada de funcionalidades.

- [Capturas desktop e celular](docs/evidencias/capturas.md)
- [Evidência Context7 MCP](docs/evidencias/context7.md)
- [Evidência Playwright MCP](docs/evidencias/playwright-mcp.md)


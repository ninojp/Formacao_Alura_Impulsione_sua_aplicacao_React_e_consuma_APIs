# Curso Alura React: desenvolvendo uma biblioteca de componentes

## Aula 01 - Preparando o terreno

### Aula 01 - Apresentação - Vídeo 01

Nesta aula introdutória do curso sobre como criar uma biblioteca de componentes utilizando React, o instrutor faz um disclaimer para aqueles que ainda não conhecem o React ou não sabem como utilizar TypeScript no React. Ele recomenda que os alunos façam uma formação na Alura sobre React com TypeScript para terem uma base sólida antes de prosseguir com o curso. O foco do curso será criar uma biblioteca de componentes customizada para um projeto chamado AluraBooks, que é um e-commerce de livros. O instrutor explica que o projeto já possui um layout específico e uma identidade visual pronta, então a biblioteca de componentes será desenvolvida do zero para prover os componentes visuais necessários. Serão desenvolvidos alguns componentes juntos durante o curso, enquanto outros serão propostos como desafios para os alunos. O instrutor menciona que será utilizado o Figma, uma ferramenta de design, para disponibilizar o projeto e os componentes para os alunos, além do Storybook, uma ferramenta para criar e documentar a coleção de componentes.

### Aula 01 - O primeiro componente - Vídeo 02

Nesta aula, o instrutor começa explicando como configurar o ambiente de desenvolvimento para o projeto "Alura Books" utilizando o Storybook. Ele cria um componente simples chamado "AbBotao" que retorna um botão HTML com o texto "Clique aqui". Em seguida, ele cria uma história para o componente no Storybook, que será utilizada para documentá-lo. O instrutor mostra como o Storybook exibe a documentação e permite visualizar o código do componente. No próximo vídeo, será abordado como adicionar estilos aos componentes.

### Aula 01 - Estilos com Styled - Vídeo 03

Nesta aula, o instrutor ensina como adicionar estilo a um botão utilizando a biblioteca Styled Components. Ele explica que é possível estilizar componentes utilizando CSS diretamente no código JavaScript. O instrutor mostra como instalar o Styled Components com o Yarn e como adicionar os tipos para projetos TypeScript. Em seguida, ele cria um botão estilizado, definindo propriedades como cor de fundo, padding, borda e cor da fonte. Também é mostrado como utilizar o recurso de hover para alterar o estilo do botão quando o mouse está sobre ele. O instrutor menciona que o Styled Components será utilizado ao longo do curso e sugere um curso na Alura para quem deseja se aprofundar na biblioteca. Por fim, ele menciona que o próximo passo será testar o componente localmente antes de publicá-lo.

### Aula 01 - Para saber mais: Styled Components

Durante o curso nós vamos utilizar a biblioteca [styled components](https://styled-components.com/docs). Como não é o foco do curso, nós não vamos falar sobre os conceitos e técnicas relacionadas a ela.

Porém, se você é tão curiosa ou curioso quanto eu, e quiser saber mais sobre isso, vou deixar aqui especialmente pra ti dois contúdos:

Esse [artigo do Dev Soutinho](alura.com.br/artigos/react-componentes-com-styled-components), se você quiser só dar uma olhada mais rápida e prática.

Esse [curso da Elaine Mattos](https://cursos.alura.com.br/course/react-styled-components), se você quiser mesmo dar um mergulho mais fundo e aprender várias coisas bacanas que conseguimos fazer com essa biblioteca.

### Aula 01 - Testando localmente - Vídeo 04

Nesta aula, o instrutor ensina como testar um componente localmente. Ele explica o processo passo a passo, desde parar o comando yarn storybook até executar o comando yarn start para iniciar o projeto. O instrutor mostra como verificar a versão do parcel no arquivo "package.json" e como instalar as dependências. Ele também destaca a importância de verificar se o componente está funcionando corretamente. No final, ele conclui que é possível testar localmente a biblioteca de componentes em um projeto React.

### Aula 01 - O que aprendemos nessa aula, você aprendeu como`:`

- Criar um projeto base com o TSDX, React e Storybook;
- Escrever uma story para apresentar o componente criado no Storybook;
- Construir a biblioteca localmente, para testar o código desenvolvido;
- Importar o componente criado no ambiente de teste local.

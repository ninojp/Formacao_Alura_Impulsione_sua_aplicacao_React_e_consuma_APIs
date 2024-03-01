# Curso Alura React: autenticando usuários

## Aula 01 - Novos Usuários

### Aula 01 - Apresentação - Vídeo 1

Nesta aula do curso de React: autenticando usuários, ministrado pelo instrutor Vinícios Neves na Plataforma Alura, foi apresentado o objetivo do curso, que é ensinar como criar uma aplicação utilizando React com foco na autenticação de usuários. O projeto utilizado como exemplo é o Alura Books. A aula começou com a preparação do ambiente, onde os alunos tiveram acesso à página inicial do projeto, que já estava pronta. Em seguida, o foco foi nas páginas de cadastro e login de usuários, onde foi necessário obter um token e fazer requisições autenticadas na API. Foi destacada a importância da área de "Meus Pedidos", que só é acessível para usuários logados. Para implementar todas essas funcionalidades, foram utilizadas ferramentas como React, React Router, Axios e Session Storage. O curso promete ser desafiador desde o início, com um grande desafio a ser enfrentado logo na primeira atividade.

### Aula 01 - Preparando o projeto - Vídeo 2

Nesta aula, foi discutida a preparação do ambiente para o desenvolvimento da autenticação do Alura Books. O objetivo é cadastrar, fazer login e logout do usuário utilizando tokens, além de outras ações relacionadas à autenticação. O projeto do Alura Books está disponível no Figma, onde é possível visualizar o layout da página inicial. O desafio proposto é desenvolver esses elementos da página inicial por conta própria, utilizando o gabarito do projeto e as atividades do curso. Também foi mencionada a disponibilidade dos arquivos do projeto no GitHub para iniciar o desenvolvimento da autenticação.

### Aula 01 - Criando a modal - Vídeo 3

Nesta aula, o instrutor ensina como construir a Modal de cadastro em um projeto React. Ele explica como utilizar os projetos Alura Books e Storybook para aproveitar componentes já desenvolvidos. O instrutor mostra como criar o componente ModalCadastroUsuario, utilizando o componente abModal do Storybook. Também é mostrado como chamar esse componente no arquivo BarraNavegacao. Ao recarregar o Alura Books, a caixa de diálogo da Modal será exibida sobreposta à página inicial. Na próxima etapa, será criado o formulário e adicionados os campos dentro dele.

### Aula 01 - Montando o formulário - Vídeo 4

Nesta aula, o instrutor ensina como transformar uma modal com um placeholder de "Olá mundo" em uma modal de cadastro de novos usuários. Ele adiciona uma imagem à modal, cria um formulário utilizando o componente `<abCampoTexto>` do Design System e utiliza o hook useState para criar estados locais para cada campo do formulário. No final, o código fica com todos os campos e o botão de "Cadastrar" na modal. É uma aula útil para aprender a desenvolver formulários em React e utilizar componentes de um Design System.

### Aula 01 - Finalizando a modal - Vídeo 5

Nesta aula, o autor discute a implementação de uma modal de cadastro de usuário em um projeto React. O código apresenta a criação de uma div com a classe "corpoModalCadastro" que contém uma figura e um formulário. São aplicadas propriedades de estilo à div para definir sua disposição e espaçamento, assim como ao formulário e ao rodapé da modal. O autor destaca que a modal está mais próxima do visual do projeto no Figma. O próximo passo será configurar as ações da modal e enviar os dados para a API.

### Aula 01 - O que aprendemos nessa aula`:`

- Preparamos o projeto base do Alura Books
- Criamos a modal de cadastro do usuário
- Transformamos um layout do Figma numa aplicação funcional
- Deixamos o formulário pronto para se comunicar com a API

## Aula 02 - Autenticando o Usuário

### Aula 02 - Preparando o ambiente

partir de agora, vamos precisar da API rodando em nosso computador para que as nossas requisições sejam devidamente respondidas.

Você pode [baixar](https://github.com/viniciosneves/api-alurabooks) ou clonar esse projeto.

Na sequência, instale as dependências e execute o script para iniciar a API:

> npm install
> npm run start-auth

### Aula 02 - Registrando um novo usuário - Vídeo 1

Há formas diferentes de fazermos este POST, mas em nossas aulas usaremos uma biblioteca chamada Axios que nos ajudará a cuidar das requisições para o back-end. Abriremos o Terminal do VSCode, digitaremos:
> npm i axios

Nesta aula, o instrutor aborda o processo de registro de um novo usuário em uma API utilizando o React. Ele explica como configurar o ambiente para rodar a API, utilizando comandos como npm install e npm run start-auth. Em seguida, o instrutor utiliza a biblioteca Axios para fazer uma requisição POST para a API, enviando os dados do usuário. Ele mostra como tratar o retorno da requisição, exibindo mensagens de sucesso ou erro. O instrutor também utiliza a ferramenta de inspeção do navegador para verificar o comportamento do código. No próximo trecho do vídeo, será abordada a gestão do estado da modal.

### Aula 02 - Gerenciando a modal - Vídeo 2

Nesta aula, foi abordado o tema da gestão de estados da Modal de cadastro de usuário. Foi implementada a funcionalidade de abrir e fechar a Modal ao clicar no botão "Cadastrar" e ao cancelar ou fechar a caixa do formulário. A gestão dos estados foi realizada dentro do componente BarraNavegacao, utilizando o useState. Foram adicionadas as constantes ModalCadastroAberta e setModalCadastroAberta para controlar o estado da Modal. Foi necessário criar uma interface chamada PropsModalCadastroUsuario para resolver um erro indicado pelo VSCode. No retorno do componente ModalCadastroUsuario, foi substituído o valor true por aberta para vincular a propriedade recebida. Ao testar a aplicação, foi possível verificar que a Modal abre e fecha corretamente. No final da aula, foi proposto o desafio de criar uma nova Modal para o login do usuário.

### Aula 02 - Autenticando o usuário - Vídeo 3

Nesta aula, o instrutor aborda o processo de autenticação de usuários em um sistema utilizando React. O código apresentado mostra como exibir um modal de login na página inicial do Alura Books, com campos para inserir o email e senha do usuário. Ao clicar no botão "Fazer login", é feita uma requisição POST para a API, enviando as informações de login. O instrutor destaca a importância de tratar erros de forma adequada e exibir mensagens claras para o usuário. Além disso, é necessário persistir o token de acesso para utilizá-lo em requisições futuras. O sessionStorage é utilizado para armazenar o token. Por fim, o instrutor menciona a necessidade de lidar com a autenticação do usuário e enviar o token nas próximas requisições.

### Aula 02 - Para saber mais: Local Storage x Session Storage

A localStorage e a sessionStorage são APIs quase idênticas (em APIs e recursos), com a única exceção de persistência dos dados:

A sessionStorage (como o nome sugere) está disponível apenas durante a sessão do navegador (e é excluída quando a guia ou janela é fechada) - mas sobrevive, no entanto, a atualização das páginas.

Atenção!
Os dados armazenados na localStorage ou na sessionStorage podem ser facilmente lidos ou alterados pelo cliente/navegador, portanto, muito cuidado sobre o que persistir aqui!

Quer mergulhar ainda mais fundo?

Dá uma olhada aqui na [documentação](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API).

Aqui na alura você encontra o curso [JavaScript na Web: armazenando dados no navegador](https://cursos.alura.com.br/course/javascript-web-armazenando-dados-navegador), focado no funcionamento da localStorage.

### Aula 02 - De olho nos fundamentos: estilos

Você está sendo entrevistado pela Lorena, que é a líder técnica da AluraBooks. É uma conversa mais técnica, e ela te pergunta: Você consegue nomear 5 formas diferentes de se estilizar componentes React?

Sua resposta é:
Inline CSS, CSS in JS, styled components, CSS modules, stylable.

Cinco de cinco, muito bom! Todas essas maneiras são realmente válidas para estilizar componentes React. Mas, só para garantir, vale lembrar também formas como CSS Normal, Sass & SCSS e Less.

### Aula 02 - O que aprendemos nessa aula`:`

- Obter um token de autenticação, dada a combinação de usuário e senha
- Persistir o token obtido na session storage
- A diferença entre local e session storage
- Refatorar e encapsular código usando hooks customizados

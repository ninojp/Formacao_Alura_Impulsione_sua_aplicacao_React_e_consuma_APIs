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

## Aula 03 - Autenticando Requisições

### Aula 03 - Gerindo o status do login - Vídeo 1

Nesta aula, o instrutor aborda como controlar o status de login do usuário em uma aplicação web utilizando React. É criado um estado chamado "usuarioEstaLogado" que indica se o usuário está logado ou não. O token de autenticação é validado utilizando o sessionStorage. Dependendo do estado de login do usuário, a barra de navegação exibe elementos diferentes. Também é adicionada a funcionalidade de fechar o modal de login quando o usuário efetua o login com sucesso. O instrutor menciona que, por enquanto, o estado de login está sendo gerenciado localmente na barra de navegação, mas existem ferramentas como Redux e Recoil para gerenciamento global, se necessário.

### Aula 03 - Página de pedidos - Vídeo 2

Nesta aula, o instrutor explica como configurar a página de pedidos em um projeto React. Ele mostra como adicionar a rota para a página de pedidos no arquivo de rotas e cria o componente "Pedidos" que será renderizado nessa rota. O componente possui um título "Meus pedidos" e alguns atributos de exemplo, como número do pedido, data, valor total e data de entrega. Além disso, é adicionado um botão para exibir mais detalhes do pedido. O instrutor menciona a necessidade de estilizar a página de pedidos com CSS e sugere consultar o design do projeto no Figma para obter referências visuais.

### Aula 03 - Estilizando o pedido - Vídeo 3

Nesta aula, o instrutor adicionou estilo à página de pedidos de um sistema. Ele mostrou como adicionar espaçamento interno e formatar o título. Além disso, ele mostrou como adicionar estilos para cada pedido e como inspecionar os elementos no navegador para verificar os estilos aplicados. O próximo passo será solicitar a lista de pedidos ao back-end e exibir a resposta utilizando o Axios.

### Aula 03 - Requisições autenticadas - Vídeo 4

Nesta aula, o instrutor aborda a autenticação de requisições em React. Ele explica a necessidade de enviar um token válido para obter os dados corretos da API. Utilizando a biblioteca Axios, ele mostra como instalar e importar o Axios no código. Em seguida, utiliza o hook useEffect para fazer a requisição apenas na primeira renderização do componente. O instrutor também mostra como adicionar o token de autenticação no header da requisição e como tratar os possíveis erros utilizando os métodos then e catch do Axios. Por fim, destaca a importância de utilizar o estado local do React para armazenar e manipular os dados retornados pela API.

### Aula 03 - Exibindo os pedidos - Vídeo 5

>Dentro de "Data do pedido:" incluiremos um novo objeto de data *new Date().toLocaleDateString* que possui o formato de data pedido.data (AAAA/MM/DD) aceito pelo construtor.  
>Dentro de "Valor total" poderíamos utilizar várias abordagens diferentes para inserção, deletaremos o "R$" e adicionaremos a função NumberFormat() presente na *biblioteca Intl do React*, informando nela o idioma e um objeto de configuração, que por sua vez possuirá um style de moeda e o tipo de moeda a ser utilizado. Em seguida adicionaremos o formatador .format que possuirá em seu interior pedido.total. Esse comando formatará o campo para utilizar a o Real brasileiro e seu respectivo formato: R$ + vírgula + duas casas decimais após a vírgula.  
>Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(pedido.total)

Nesta aula, o autor discute a implementação de autenticação em uma API e a exibição dos pedidos em um projeto chamado "Alura Books". O código utiliza o useState para armazenar os pedidos em um estado local. Em seguida, é feita uma requisição utilizando o axios.get para obter os pedidos da API, e o resultado é armazenado no estado local utilizando o setPedidos. Os pedidos são exibidos na interface utilizando o método map, e os valores monetários são formatados utilizando a função NumberFormat da biblioteca Intl. O autor também sugere melhorias no código para evitar repetições e facilitar a manutenção.

### Aula 03 - De olho nos fundamentos: hooks

Você sabe o que é um hook no React.JS e quais problemas ele resolve?

Hooks foram adicionados no React 16.8 e permitem que usemos state e outros recursos do React sem ter de escrever uma classe.

Bingo! Essa foi na mosca, e vem direto da documentação pra cá, se liga [aqui](https://pt-br.legacy.reactjs.org/docs/hooks-overview.html).

### Aula 03 - O que aprendemos nessa aula`:`

- Implementar rotas aninhadas para a área logada
- Realizar requisições autenticadas, passando o token no cabeçalho
- Excluir pedidos e sincronizar com o estado local

## Aula 04 - Encapsulamento

### Aula 04 - Encapsulando o axios - Vídeo 1

Nesta aula, o instrutor aborda o encapsulamento do Axios para melhorar a experiência do desenvolvedor. Ele cria uma instância única do Axios com configurações específicas, como a URL base e os headers necessários. Em seguida, ele substitui as chamadas do Axios por chamadas da instância criada. Além disso, o instrutor menciona a criação de interceptadores para lidar com a inclusão automática de headers em todas as requisições. O objetivo é melhorar a organização e a reutilização de código, evitando a repetição em cada requisição.

### Aula 04 - Interceptando requisições HTTP - Vídeo 2

Nesta aula, o instrutor ensina como realizar interceptações HTTP utilizando o axios. Ele mostra como adicionar interceptors de requisição ao axios, que são funções executadas antes de enviar uma requisição e permitem manipular o objeto de configuração da requisição. O instrutor demonstra como adicionar um interceptor de requisição que verifica se existe um token de autenticação na sessionStorage e, caso exista, adiciona esse token ao header de autorização da requisição. Caso não exista um token, o interceptor retorna um erro no console. O instrutor também mostra como remover o trecho de código que adicionava o header de autorização no arquivo "index.tsx" da pasta "Pedidos". Ao isolar o axios na camada de HTTP, o código fica mais conciso e limpo.

### Aula 04 - Autenticação x Autorização x Segurança - Vídeo 3

Nesta aula, o tema abordado foi autenticação, autorização e segurança. Foi explicado que a autenticação é o processo pelo qual uma pessoa prova ser quem ela diz ser, através de uma senha. Já a autorização está relacionada ao papel que a pessoa desempenha dentro da companhia, concedendo acessos e papéis específicos com base no perfil. Além disso, foi mencionada a importância da segurança na comunicação entre o computador e o servidor, através dos protocolos HTTP e HTTPS. Também foi abordado o controle de segurança através do CORS e o trabalho da OWASP na identificação e mitigação de vulnerabilidades de aplicação.

A autenticação torna possível que eu, pessoa usuária, prove que sou realmente quem eu digo que sou — o famoso "cara-crachá". Cada pessoa usuária possui uma senha, e se ela coincidir com o conteúdo previamente cadastrado na API, nos tornamos pessoas usuárias autenticadas. O sistema nos dará um token e entenderá que somos mesmo quem dizemos ser.

A autorização configura um passo além da autenticação. Dada uma pessoa usuária logada, é necessário saber qual o seu papel dentro da companhia: diretor, VIP, segurança, profissional de TI... Para cada papel, será configurada uma gama específica de privilégios. Na fase de autorização, o sistema sabe que somos pessoas autenticadas e nos concederá papéis e acessos específicos, ou seja, exercerá um controle de acesso com base no perfil da pessoa usuária.

Existe também o controle de segurança através do CORS que utiliza o cabeçalho "Access-Control-Allow-Origin" (em português, "compartilhamento de recursos de origens diferentes"). O seu trabalho é controlar as origens que podem ou não se conectar à nossa API. Quando falamos sobre um "erro de CORS" queremos dizer que um domínio não autorizado tentou realizar requisições para a API. O conteúdo sobre CORS pode ser acessado [neste link](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS).

OWASP que disponibiliza uma lista com as 10 vulnerabilidades de aplicação mais conhecidas e também os seus respectivos meios de mitigação. A lista da OWASP pode ser acessada por [este link](https://owasp.org/www-project-top-ten/).

Disponibilizaremos um [artigo que aborda detalhadamente](https://www.alura.com.br/artigos/autenticacao-autorizacao-seguranca-no-front-end) os tipos de autenticação e de autorização, ao mesmo tempo em que doa mais detalhes sobre a lista do OWASP e como lidar com as vulnerabilidades de aplicação.

### Aula 04 - Para saber mais: status HTTP

Quando consumimos uma API HTTP, temos vários códigos que identificam o status de cada requisição:

1xx para informação
2xx para sucesso
3xx para redirecionamento
4xx para erros de cliente
5xx para demais erros
Pensando no perfil Dev em T e em mergulhos mais profundos, fica aqui o link para o [curso sobre HTTP](https://cursos.alura.com.br/course/http-fundamentos).

Se você já conhece o protocolo e quer saber ainda mais, estou contigo porque eu também sou muito curioso!

Fica [aqui um link](https://www.alura.com.br/artigos/rest-principios-e-boas-praticas) para um artigo sobre o padrão REST, que é o utilizado na API atual.

### Aula 04 - O que aprendemos nessa aula`:`

- Criar uma instância do axios e definir alguns comportamentos padrão para ela
- Interceptar requisições
- Interceptar respostas
- Tratar erros específicos e direcionar o fluxo da aplicação

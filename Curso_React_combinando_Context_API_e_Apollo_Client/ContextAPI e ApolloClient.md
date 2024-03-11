# Curso Alura React combinando Context API e Apollo Client

## Aula 01 - Um Carrinho para todos governar

### Aula 01 - Apresentação - Vídeo 1

Nesta aula do curso "React: combinando Context API e Apollo Client", o instrutor Vinicius Neves apresenta o conteúdo do curso. Ele explica que o objetivo é aprender a enviar dados de forma organizada e escalável, utilizando a Context API e o Apollo Client. Durante o curso, os alunos irão desenvolver a funcionalidade de uma sacola de compras em uma aplicação, aprendendo a listar os itens do carrinho e permitir a manipulação dessa lista. Será abordado também o conceito de sistema de loading na sacola de compras. O instrutor destaca que o carrinho de compras está presente tanto no lado do cliente quanto no lado do servidor, e serão ensinados conceitos fundamentais para entender esse processo. O próximo vídeo promete trazer mais informações sobre as mutações.

### Aula 01 - Preparando o ambiente

Alurabooks, projeto desenvolvido na formação curso [React: consumindo APIs](https://github.com/alura-cursos/alurabooks-graphql-pt2).

Depois de baixar (ou clonar) o repositório, você precisa instalar as dependências do projeto:  
> npm i

API backend, você pode fazer isso diretamente do [GitHub](https://github.com/alura-cursos/alurabooks-gql).

Depois, ainda no terminal, precisamos iniciar a API. Desse jeito:  
> npm run start:api

Depois disso, num segundo terminal, precisamos do servidor GraphQL:  
> npm run start:dev

### Aula 01 - Obtendo o carrinho - Vídeo 2

Nesta aula, o instrutor explica como obter os itens do carrinho de compras do AluraBooks usando GraphQL. Ele mostra como construir uma query passo a passo, começando com a obtenção do total de itens no carrinho e adicionando os campos desejados, como quantidade, opção de compra, livro (com título, descrição, autor) e imagem da capa. O instrutor também mostra o retorno da query no Playground do GraphQL. Essa parte é fundamental para listar os itens, exibir o valor total da compra e outras informações relevantes para o usuário.

### Aula 01 - Iniciando a nova página - Vídeo 3

Nesta aula, o instrutor ensina como criar uma nova página no projeto AluraBooks utilizando React. Ele mostra como criar a estrutura básica da página do carrinho de compras, utilizando o React Router Dom para criar uma nova rota. Em seguida, ele cria arquivos para obter os dados do carrinho de compras através de uma query GraphQL e utiliza um hook para exibir esses dados no console. Por fim, o instrutor desafia o aluno a implementar o visual da página do carrinho utilizando CSS.

### Aula 01 - Analisando as funcionalidades - Vídeo 4

Nesta aula, o instrutor finaliza o desafio proposto e começa a falar sobre o gabarito. Ele mostra algumas modificações feitas no código, como alterar o display de um elemento CSS e criar arquivos com interfaces para representar o carrinho de compras. O instrutor explica cada uma das interfaces criadas, mostrando os atributos e tipos de dados que elas possuem. Em seguida, adiciona estilos CSS à página do carrinho, definindo limitações de tamanho e margens para centralizar a página. Ele destaca o arquivo "index.tsx" da pasta Carrinho como o mais importante para o resultado final da página. O instrutor menciona os componentes "TituloPrincipal" e "ItemCarrinho", que são responsáveis por exibir os itens do carrinho na tela, mostrando detalhes como imagem, descrição, título do livro, autor, preço e quantidade. Ele também menciona a existência de um ícone de lixeira para excluir itens do carrinho. O instrutor comenta que as alterações feitas até agora são provenientes do curso anterior e que a partir de agora serão apresentadas as novidades, começando pela manipulação do carrinho e envio de dados para o servidor. Ele menciona a existência de um carrinho flutuante no menu superior do AluraBooks e explica que será utilizada a Context API para gerenciar os itens do carrinho. A implementação da Context API será abordada na próxima aula.

### Aula 01 - Para saber mais: Context API

Talvez alguns de você já tenha ouvido falar dela, mas se não você ainda não conhece, de forma resumida, a Context API é uma forma de compartilhar dados entre componentes de um jeito mais fácil e eficiente, sem precisar ficar passando props manualmente(Prop Drilling) de componente para outro.

Se você ainda não conhece ela mais a fundo, recomendo dar uma olhada nesse [curso do Luís](https://cursos.alura.com.br/course/react-context-estados-globais-contextapi) e ver como ela pode te ajudar no seu projeto React.

### Aula 01 - De olho no useQuery

Qual é a forma correta de utilizar o hook useQuery do React Apollo Client para realizar uma consulta a uma API GraphQL?

Importar o hook useQuery e chamar a função passando os parâmetros de consulta e variáveis, mas precisando gerenciar manualmente o estado da resposta da consulta.

Exatamente! O hook useQuery permite realizar uma consulta a uma API GraphQL e retorna os dados da consulta em um objeto, mas é preciso gerenciar manualmente o estado da resposta da consulta para atualizar a interface de acordo com o resultado da consulta.

### Aula 01 - O que aprendemos?

- Nessa aula, você aprendeu como:
- Analisar o Figma para extrair funcionalidades.
- Tomar decisões de arquitetura antes de começar a implementação.
- Iniciar a implementação de um carrinho de compras sincronizado com o backend.

## Aula 02 - Trabalhando dentro do contexto

### Aula 02 - Implementando interfaces - Vídeo 1

Nesta aula, o instrutor abordou a implementação da funcionalidade de adição e remoção de itens no carrinho de compras, utilizando a Context API do React. Ele destacou a importância de planejar e tomar decisões de arquitetura antes de começar a implementar, visando garantir que o código seja mais reaproveitável.

O instrutor começou criando a interface ICarrinhoContext, que representa o contexto do carrinho de compras. Inicialmente, a interface não possuía nenhum elemento, mas depois foi adicionado o elemento carrinho, que pode ser opcional e é do tipo ICarrinho.

Em seguida, o instrutor criou o contexto CarrinhoContext utilizando a função createContext do React. Ele utilizou Generics para tipar o contexto como ICarrinhoContext e inicializou o contexto com um objeto vazio.

Depois, o instrutor criou o provedor CarrinhoProvider, que é um componente que envolve a lógica do carrinho de compras e renderiza os componentes filhos que estão dentro dele. Ele retornou o CarrinhoContext.Provider e passou o valor do carrinho como propriedade value.

O instrutor também criou a interface CarrinhoProviderProps, que recebe a propriedade children do tipo ReactElement. Ele utilizou essa interface para receber as props no componente CarrinhoProvider e exibir os componentes filhos dentro do CarrinhoContext.Provider.

Por fim, o instrutor mostrou como utilizar o CarrinhoProvider na hierarquia de componentes, inserindo-o dentro do componente App e explicou que todos os elementos que consomem o CarrinhoProvider precisam ser filhos dele.

Em resumo, nesta aula, o instrutor implementou o contexto do carrinho de compras utilizando a Context API do React, criando a interface ICarrinhoContext, o contexto CarrinhoContext e o provedor CarrinhoProvider, além de mostrar como utilizar o provedor na hierarquia de componentes.

### Aula 02 - Consumindo o CarrinhoProvider - Vídeo 2

Nesta aula, o instrutor abordou como ajustar a página de carrinho de compras de um projeto utilizando React. A ideia foi modificar a forma como o carrinho é obtido, deixando de fazer uma query e passando a utilizar o contexto.

Primeiramente, o instrutor mostrou o código onde é feita a chamada da query para obter o carrinho. Em seguida, ele explicou que a fonte de dados será o contexto e mostrou como declarar uma nova constante utilizando o useContext e o Generics para tipar o contexto.

Após isso, o instrutor mostrou como utilizar os dados do contexto no restante do código, substituindo a utilização da constante "data" pela constante "carrinho" nos elementos da listagem de itens do carrinho e no cálculo do total da compra.

Em seguida, o instrutor explicou como criar um custom hook para encapsular o contexto do carrinho, evitando a repetição do código de obtenção do contexto em diversos componentes. Ele mostrou como exportar o custom hook no arquivo do contexto e como importá-lo e utilizá-lo no componente de carrinho.

Por fim, o instrutor mostrou como remover as importações não utilizadas e como testar o funcionamento do carrinho vazio no navegador.

No geral, esse trecho do vídeo abordou a utilização do contexto em um projeto React para obter e utilizar dados do carrinho de compras, além de ensinar como criar um custom hook para encapsular o contexto e evitar repetição de código.

### Aula 02 - Da Query para o contexto - Vídeo 3

Nesta aula, o instrutor abordou a conexão entre o contexto e o GraphQL em um projeto React. Ele mostrou como obter os dados do carrinho através de uma query GraphQL e como adicionar uma função ao contexto para adicionar itens ao carrinho. Essas funcionalidades serão utilizadas posteriormente para implementar a lógica de adição de itens ao carrinho.

### Aula 02 - Para saber mais: Apollo Client e autenticação

Como o foco desse curso não é autenticação, acabamos por não implementar isso no Alura Books. Mas como é um tema bastante importante, reservei esse espacinho aqui pra dividir contigo algumas dicas e truques sobre como lidar com isso no nosso dia a dia. Bora dar uma olhada?

A autenticação é um processo importante em muitas aplicações, pois garante que apenas usuários autorizados tenham acesso a determinadas áreas ou funcionalidades.

No Apollo Client, existem algumas formas de lidar com a autenticação, dependendo do tipo de autenticação que a sua aplicação está utilizando. Vou explicar cada uma delas a seguir:

Autenticação com JWT (JSON Web Token): Se a sua aplicação está usando JWTs para autenticação, uma opção é armazenar o token em uma variável de estado ou em um cookie e adicioná-lo ao cabeçalho de autorização de cada requisição. Para isso, basta criar um interceptor com a função request do Apollo Client e adicionar o token no cabeçalho da requisição.
Exemplo:

```JSX
const authLink = new ApolloLink((operation, forward) => {
  // Obtém o token do estado ou do cookie
  const token = getTokenFromStateOrCookie();
  // Adiciona o token ao cabeçalho da requisição
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });
  // Executa a requisição
  return forward(operation);
});
```

Autenticação com cookies: Se a sua aplicação está usando cookies para autenticação, uma opção é enviar os cookies junto com cada requisição. Para isso, basta criar um interceptor com a função request do Apollo Client e adicionar os cookies no cabeçalho da requisição.  
Exemplo:

```JSX
const authLink = new ApolloLink((operation, forward) => {
  // Obtém os cookies da aplicação
  const cookies = getAppCookies();
  // Adiciona os cookies ao cabeçalho da requisição
  operation.setContext({
    headers: {
      cookie: cookies
    }
  });
  // Executa a requisição
  return forward(operation);
});
```

Autenticação com outros métodos: Se a sua aplicação está usando outro método de autenticação, como autenticação por API key ou autenticação com sessão, basta seguir o mesmo processo de criar um interceptor com a função request do Apollo Client e adicionar o método de autenticação específico no cabeçalho da requisição.
Exemplo:

```JSX
const authLink = new ApolloLink((operation, forward) => {
  // Obtém a API key da aplicação
  const apiKey = getApiKey();
  // Adiciona a API key ao cabeçalho da requisição
  operation.setContext({
    headers: {
      'x-api-key': apiKey
    }
  });
  // Executa a requisição
  return forward(operation);
});
```

Outra coisa importante a considerar é como lidar com erros de autenticação. Se o servidor retornar um erro de autenticação, é importante que a aplicação reaja de forma adequada, como redirecionar o usuário para a tela de login ou exibir uma mensagem de erro.

Para tratar erros de autenticação, basta criar um interceptor com a função response do Apollo Client e verificar se o erro é de autenticação. Em seguida, basta reagir de acordo com o que a sua aplicação precisar.  
Exemplo:

```JSX
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      if (message === 'Unauthorized') {
        // Redireciona o usuário para a tela de login
        redirectToLogin();
      } else {
        // Exibe a mensagem de erro
        showError(message);
      }
    });
  }
  if (networkError) {
    // Exibe a mensagem de erro de rede
    showError(networkError.message);
  }
});
```

E é isso! Espero que tenha gostado dessa explicação mais técnica sobre autenticação e o Apollo Client. Se você tiver dúvidas ou quiser mais informações, deixe um post no fórum que eu vou tentar te ajudar.

### Aula 02 - Importando o useQuery

Qual das seguintes opções é a correta para utilizar o hook useQuery do React Apollo Client em um componente React?

import { useQuery } from 'react-apollo';

BINGO! Esta opção importa o hook useQuery do pacote correto, o react-apollo. Este pacote fornece vários hooks para integrar o Apollo Client em aplicações React, incluindo o useQuery.

### Aula 02 - O que aprendemos nessa aula`:`

- Inicializar um Context da ContextAPI.
- Organizar os imports e exports para maximizar o reuso.
- Plugar o GraphQL no contexto, com baixo acoplamento (o nosso contexto nem sabe que o carrinho vem do GraphQL, ele só chama o hook ;).


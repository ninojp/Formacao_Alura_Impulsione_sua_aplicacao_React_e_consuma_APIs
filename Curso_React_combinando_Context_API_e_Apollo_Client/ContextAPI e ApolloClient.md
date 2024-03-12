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

## Aula 03 - Adicionando itens

### Aula 03 - Criando a primeira mutação - Vídeo 1

Nesta aula, o instrutor ensina como implementar a primeira mutation do AluraBooks, que é responsável por adicionar um item ao carrinho. Ele explica como escrever a mutation no GraphQL Playground e como passar os parâmetros necessários. Além disso, o instrutor demonstra como utilizar variáveis para passar o item a ser adicionado como parâmetro. Por fim, ele mostra como executar a mutation e verificar o resultado no Playground. O próximo passo será fazer a ligação entre a mutation e o botão "Comprar" no React App, o que será abordado em uma próxima aula.

### Aula 03 - Custom hooks e ContextAPI - Vídeo 2

Nesta aula, o instrutor explicou como conectar a mutation do AluraBooks com a parte do código responsável por adicionar itens ao carrinho. Ele mostrou como organizar o código para melhorar a legibilidade e utilizou o useMutation do Apollo Client para enviar os dados da mutation. Além disso, o instrutor ensinou como exportar a constante useAdicionarItem como um custom hook e como importá-la no arquivo principal. Ele também criou a mutation ADICIONAR_ITEM no arquivo queries.ts e explicou a diferença entre a função adicionaItem e o useQuery. Por fim, ele mostrou como utilizar a função adicionaItem dentro da função adicionarItemCarrinho, passando as opções da consulta GraphQL como parâmetro.

### Aula 03 - Adicionando o item - Vídeo 3

Nesta aula, o instrutor mostra como adicionar um item ao carrinho em uma página de detalhes de um livro, utilizando o contexto do carrinho e as funcionalidades do React. Ele começa explicando como conectar os elementos necessários para adicionar um item ao carrinho, destacando o componente AbGrupoOpcoes e o componente AbInputQuantidade. Em seguida, o instrutor cria um estado chamado quantidade utilizando o hook useState e atualiza o onChange e o value do AbInputQuantidade para refletir a quantidade selecionada na tela. Depois, ele adiciona um evento onClick ao botão "Comprar" da página, que chamará a função aoAdicionarItemAoCarrinho, que ainda não foi implementada. O instrutor implementa a função aoAdicionarItemAoCarrinho, que verifica se o livro está carregado e retorna caso não esteja. Ele utiliza o método find para buscar a opção de compra selecionada dentro das opções de compra do livro. Por fim, o instrutor testa o código no navegador, selecionando um livro, escolhendo a opção de compra e a quantidade desejada, e clicando no botão "Comprar". Ele verifica no console do navegador se a chamada GraphQL foi feita corretamente e se o livro foi adicionado ao carrinho.

### Aula 03 - Para saber mais: refetchQueries

Bora falar um pouquinho sobre o refetchQueries e como ele funciona junto com as mutações no Apollo Client?

Aprendemos que as mutações são operações que alteram os dados no backend, como criar, atualizar ou deletar um registro. No Apollo Client, nós usamos a função mutate para disparar uma mutação e atualizar os dados da aplicação.

Mas e se a mutação que você disparou afetar os dados de outras consultas que já foram realizadas na aplicação? É aí que entra o refetchQueries, que é uma opção que nos permite passar para a chamada da função mutate e dizer para o Apollo Client refazer as consultas especificadas após a mutação ser concluída. Dessa forma, os dados das outras consultas são atualizados automaticamente com os novos dados do backend.

### Aula 03 - Atualizando os dados de uma Query

Qual das opções abaixo é a forma mais indicada para atualizarmos manualmente os dados de uma consulta realizada com o useQuery do React Apollo Client?

Utilizando o método refetch passando os novos parâmetros de consulta como argumento.

Esse é o método mais indicado para atualizar manualmente os dados de uma consulta com o useQuery. O método refetch aceita os novos parâmetros de consulta como argumento e dispara a consulta novamente, atualizando os dados exibidos na tela.

### Aula 03 - O que aprendemos nessa aula`:`

- Utilizar o hook useMutation.
- Explorar o Playground do GraphQL para executar queries.
- Configurar a ContextAPI com baixo acoplamento ao APolloClient.

## Aula 04 - Removendo itens

### Aula 04 - Alterando quantidades - Vídeo 1

Nesta aula, o instrutor discutiu a implementação de funcionalidades adicionais em um carrinho de compras de uma aplicação web. Ele abordou a necessidade de tratar a quantidade de itens no carrinho, seja adicionando, removendo ou alterando a quantidade. Foi utilizado o GraphQL para enviar as informações atualizadas, e o instrutor mostrou como configurar as query variables no Playground do GraphQL para adicionar um item ao carrinho, especificando o livro, a opção de compra e a quantidade desejada. Além disso, ele explicou que ao adicionar um item, a quantidade é sobrescrita em vez de incrementada, e propôs a criação de uma função chamada "alterarQuantidadeDoItem" que chama a função "adicionarItemCarrinho" com a quantidade atualizada. O instrutor também mostrou como utilizar o hook customizado "useCarrinhoContext" para acessar o contexto do carrinho de compras e realizar a chamada da função. Ao final, ele mencionou a importância desse hook customizado para simplificar o código e evitar a necessidade de utilizar o useContext do React.

### Aula 04 - Depurando erros - Vídeo 2

Nesta aula, o instrutor analisou um erro que ocorreu no console, especificamente o erro 440. Ele explicou que o erro foi causado porque o sistema esperava um livro ID que não foi enviado. Para entender melhor o código e encontrar a origem do erro, o instrutor mostrou o trecho de código em index.tsx que está relacionado ao item do carrinho. Nesse trecho, foi utilizado o atalho "Ctrl + clique" para acessar a função adicionarItemCarrinho que vem do contexto.Em seguida, o instrutor mostrou o código em index.tsx do diretório src > contextApi > carrinho, onde a função adicionarItemCarrinho recebe o item como parâmetro. Ele destacou que o item contém o livro e a opção de compra.O instrutor continuou analisando a implementação da função adicionarItemCarrinho, que está localizada mais abaixo no código, a partir da linha 26. Nesse trecho, foi feita a adição do item no carrinho, passando as variáveis livroId, opcaoCompraId e quantidade. O instrutor mencionou que pode ter ocorrido a falta dos IDs nesse processo.Para verificar se os IDs estavam faltando, o instrutor mostrou o código em queries.ts do diretório src > graphql > carrinho. Ele destacou que na query OBTER_CARRINHO, a opção de compra não possuía o ID. Para corrigir isso, ele sugeriu incluir o ID da opção de compra após o abre chaves de "opcaoCompra". Além disso, ele também sugeriu pedir o ID do livro na mesma query.Após fazer essas alterações, o instrutor recarregou o navegador e verificou que não havia mais erros no console. Ele também limpou as requisições da aba "Rede" e o console. Em seguida, ele tentou alterar a quantidade do livro "Bootstrap 4" e verificou que não havia erros no console e o status da requisição era 200, indicando que algo deu certo.Para confirmar, o instrutor verificou a resposta da requisição na aba "Resposta" e encontrou o JSON com a propriedade "adicionaritem" como verdadeiro. Ele recarregou a página e verificou que a quantidade do livro foi atualizada para 4.No próximo vídeo, o instrutor irá explicar como preparar o refetch da query para atualizar a quantidade quando for alterada.

### Aula 04 - Atualizando os dados do carrinho - Vídeo 3

Nesta aula, o instrutor abordou a necessidade de atualizar a quantidade de um item no carrinho de compras sem recarregar a página. Ele explicou como usar o Apollo Client para informar a outros componentes que a quantidade foi atualizada, sem criar um acoplamento excessivo entre os arquivos. Para isso, foram apresentadas duas funções: "useCarrinho" e "useAdicionarItem". A primeira função utiliza a função "useQuery" do Apollo Client para obter os dados do carrinho, enquanto a segunda função utiliza a função "useMutation" para realizar a mutação de adicionar um item ao carrinho. Foi mostrado como adicionar um objeto de opções como segundo parâmetro da função "useMutation", com a opção "refetchQueries" que recebe um array de strings representando as queries que devem ser refetchadas após a execução da mutação. No exemplo apresentado, a query que deve ser refetchada é a "ObterCarrinho". Dessa forma, quando a mutação "adicionarItem" é executada, o Apollo Client automaticamente refetcha a query "ObterCarrinho" e atualiza o estado. O instrutor também observou que a solução ainda não trata o caso de quando a quantidade é diminuída para zero, prometendo abordar essa questão no próximo vídeo.

### Aula 04 - Tratando quantidade zerada - Vídeo 4

Nesta aula, aprendemos a lidar com a situação em que a quantidade de livros é igual a zero. Foi abordado como adicionar a verificação utilizando um if() para verificar se a quantidade é igual a zero e, caso seja verdadeiro, a função removerItemCarrinho() é chamada para remover o item do carrinho. No entanto, a função removerItemCarrinho() ainda não existia, então aprendemos a criá-la. Foi mostrado como duplicar a linha da função adicionarItemCarrinho e alterar o nome para removerItemCarrinho dentro da interface ICarrinhoContext e no contexto padrão. Em seguida, aprendemos a criar a função removerItemCarrinho no código do arquivo "index.tsx" do contexto do carrinho, utilizando um console.log() para exibir uma mensagem informando que o item está sendo removido. Por fim, aprendemos a passar a função removerItemCarrinho para o value do contexto do carrinho e a utilizá-la dentro do if() para remover o item quando a quantidade for igual a zero.

### Aula 04 - Para saber mais: Suspend, skip e fetchPolicy

No Apollo Client, existem algumas opções podem ser usadas para melhorar a performance da sua aplicação. Vou te explicar algumas delas a seguir:

- suspend: A opção suspend permite que a consulta seja suspensa até que uma determinada condição seja atendida. Isso é útil em casos em que a consulta só precisa ser executada quando um determinado dado estiver disponível, como por exemplo, quando o usuário estiver autenticado ou quando um filtro for aplicado.

- skip: A opção skip permite que a consulta seja pulada completamente se uma determinada condição for atendida. Isso é útil em casos em que a consulta só deve ser executada em determinadas condições, como por exemplo, quando o usuário estiver autenticado ou quando um filtro for aplicado.

- fetchPolicy: A opção fetchPolicy permite que você escolha como a consulta deve ser executada e quando os dados devem ser atualizados. As opções disponíveis são cache-first, cache-and-network, network-only e cache-only.

  - cache-first: A opção cache-first faz com que a consulta seja executada a partir dos dados em cache, e só então a partir da rede. Isso é útil em casos em que os dados em cache são suficientes e não há necessidade de atualizá-los frequentemente.

  - cache-and-network: A opção cache-and-network faz com que a consulta seja executada a partir dos dados em cache, mas também faz uma nova requisição para atualizar os dados em segundo plano. Isso é útil em casos em que os dados em cache são suficientes, mas é importante manter eles atualizados.

  - network-only: essa opção faz com que a consulta seja executada apenas a partir da rede e não utilize os dados em cache. Isso é útil em casos em que os dados precisam ser atualizados frequentemente ou quando os dados em cache são inválidos ou desatualizados.

  - cache-only: A opção cache-only faz com que a consulta seja executada apenas a partir dos dados em cache e não faça uma nova requisição. Isso é útil em casos em que os dados em cache são suficientes e não há necessidade de atualizá-los.

Essas são umas das principais opções disponíveis no Apollo Client. É importante lembrar que o uso dessas opções deve ser feito de forma consciente, para evitar problemas de performance ou de dados incorretos.

### Aula 04 - O que aprendemos nessa aula`:`

- Atualizar a interface do Contexto.
- Reaproveitar hooks.
- Encapsular chamadas ao useMutation.

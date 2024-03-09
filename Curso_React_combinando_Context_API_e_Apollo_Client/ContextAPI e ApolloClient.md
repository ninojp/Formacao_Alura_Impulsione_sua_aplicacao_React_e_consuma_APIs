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

# Curso Alura React: consumindo GraphQL com Apollo Client

## Aula 01 - Configurando o Apollo Client

### Aula 01 - Apresentação - Vídeo 1

Nesta aula do curso "React: consumindo GraphQL com Apollo Client", o instrutor Vinicios Neves apresenta o objetivo do curso, que é implementar uma funcionalidade de lista de tags em um projeto chamado AluraBooks. Ele explica que a API Rest utilizada retorna apenas IDs das tags, o que exigiria várias requisições HTTP para obter os nomes das tags. A solução proposta é migrar para o GraphQL, onde é possível obter todos os campos necessários em apenas uma consulta. O Apollo Client será utilizado para realizar as consultas GraphQL.

### Aula 01 - Bem começado, metade feito - Vídeo 2

Após clonar esse repositório em nossa máquina, acessaremos, pelo terminal, a pasta "alurabooks-gql" e executaremos o comando:  
> npm i

Terminadas as instalações, subiremos a API Rest que provê os dados para nossa aplicação. Faremos isso executando:  
> npm run start:api

vamos para o segundo passo. Em uma nova aba do terminal, ainda na pasta "alurabooks-gql", executaremos o comando responsável por subir servidor do GraphQL.  
> npm run start:dev

Nesta aula, o instrutor explica como preparar o ambiente para o desenvolvimento do projeto Alura Books com GraphQL. Ele menciona a clonagem do repositório da API para o AluraBooks, a instalação das dependências necessárias, a execução da API Rest e do servidor do GraphQL. Além disso, é mencionado que é necessário ter o repositório do Alura Books em nossa máquina e como instalar as dependências do projeto React. Com o ambiente preparado, podemos começar a desenvolver a integração do Alura Books com o GraphQL.

### Aula 01 - Criando o Provider - Vídeo 3

Na documentação do [Apolo Client](https://www.apollographql.com/docs/react/) encontraremos o botão "Get Started". No passo 2 dessa página, vemos que a instalação consiste em executar, no terminal, o comando:  
> npm install @apollo/client graphql

Nesta aula, o instrutor explica como configurar o Apollo Client em uma aplicação React chamada Alura Books. Ele mostra como instalar as dependências necessárias e criar um componente chamado "provider" do Apollo. Esse componente é responsável por disponibilizar o contexto do React para a aplicação. O instrutor também mostra como configurar o Apollo Client, passando as propriedades obrigatórias, como o cache e o endpoint do GraphQL. Por fim, ele mostra como importar o componente "provider" do Apollo na aplicação e utilizá-lo corretamente.

### Aula 01 - Primeira consulta - Vídeo 4

Nesta aula, o instrutor mostra como fazer consultas utilizando o GraphQL e como utilizar essas consultas no React para obter somente as informações necessárias. Ele destaca as vantagens do GraphQL em relação às APIs Rest, como a possibilidade de fazer consultas precisas e evitar o tráfego de dados desnecessários. O instrutor também mostra como nomear a query, escrever os campos desejados e utilizar os subcampos disponíveis. Ele exemplifica a construção de uma query para montar a tela de livros e como utilizar o useQuery do Apollo Client para fazer a consulta no React. Além disso, ele mostra como adicionar os campos necessários na query, como opções de compra e imagem de capa. No geral, essa aula aborda o processo de configuração do Apollo Client e a realização da primeira consulta utilizando o GraphQL.

### Aula 01 - Para saber mais: template literals - tagged templates

Uma forma mais avançada de trabalharmos template string são os templates strings com marcações ou tags, ou tagged template strings.

Com eles, você tem a possibilidade de modificar a saída dos template strings usando uma função. O primeiro argumento contém um array de literais ("Sheldon" e "Cooper" neste exemplo).

Do segundo em diante e cada argumento subsequente contém valores previamente processados (algumas vezes chamados cooked) pelas expressões de substituição ("42" e "73" no caso do exemplo).

No final, a função retorna a string já manipulada:

```JSX
var a = 42;
var b = 73;
function tag(strings, ...valores) {
  console.log(strings[0]); // "Sheldon "
  console.log(strings[1]); // " Cooper "
  console.log(valores[0]);  // 42
  console.log(valores[1]);  // 73
  return "Bazinga!";
}
tag`Hello ${ a + b } world ${ a * b}`;
// "Bazinga!"
```

E é isso que o Apollo Client usa por debaixo dos panos para implementar o gql que usamos para criar a nossa primeira query!

### Aula 01 - Para saber mais: REST - Partial Response

Apontamos como vantagem do uso do GraphQL o retorno exato dos campos solicitados. No nosso caso, a API Rest não nos permite fazer isso. A nível de curiosidade, para aqueles que buscam mais conhecimento aqui nas atividades extras, fica a menção de que também é possível obter algo parecido usando o conceito de Partial Response em APIs REST.

O pedido da nossa API de livros seria mais ou menos assim:  
> GET /livros?fields=resultado(id,slug)

E então o nosso backend deveria ser capaz de interpretar isso. Existem algumas limitações no uso desse recurso, mas agora você já sabe que ele existe e pode buscar mais sobre o assunto para aumentar a quantidade de ferramentas do seu cinto de utilidades.

### Aula 01 - Requisições HTTP do Apollo Client

Durante essa aula, fizemos nossa primeira query. Essa query nada mais é do que uma chamada HTTP que acontece debaixo dos panos. O Apollo Cliente cuida disso pra gente.

Use o Developer Tools (Ferramentas do Desenvolvedor, em tradução livre) para inspecionar a ba de Network (Rede). E descobrir qual dos verbos abaixo foi utilizado para obtermos os dados:

> POST

Isso aí! Na mosca! Todas as requisições realizadas pelo Apollo Cliente vão ser sempre utilizando esse verbo.

### Aula 01 - O que aprendemos nessa aula`:`

- Configurar o Apollo Client em aplicações React;
- Criar e executar queries utilizando o playground;
- Criar e executar queries a partir de uma aplicação React;
- Descrever o comportamento de Template literals: Tagged templates.

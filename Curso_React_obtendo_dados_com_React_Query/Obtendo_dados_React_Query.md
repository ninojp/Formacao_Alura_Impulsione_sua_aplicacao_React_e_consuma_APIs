# Curso Alura React: obtendo dados com React Query

## Aula 01 - Evoluindo o AluraBooks

### Aula 01 - Apresentação - Vídeo 01

Nesta aula, o instrutor apresenta uma visão geral do curso e dos cenários possíveis para os alunos. Ele menciona que a base necessária para o curso já está pronta, referindo-se à biblioteca de componentes desenvolvida anteriormente. O instrutor também fala sobre a área de autenticação, destacando que o ciclo de autenticação já foi executado. Em seguida, ele apresenta o desafio do dia, que é trabalhar com produtos e categorias. Serão utilizados dois projetos locais: o AluraBooks e uma API fake. O instrutor disponibiliza os links necessários para download e instruções para rodar os projetos.

### Aula 01 - Obtendo as categorias - Vídeo 02

Nesta aula, o instrutor ensina como obter dados em um projeto React utilizando a biblioteca Axios. Ele mostra como fazer uma requisição GET para a rota "/categorias" da API, que retorna um JSON com a lista de categorias. Em seguida, ele cria um estado no componente utilizando o useState do React para armazenar as categorias obtidas da API. O instrutor utiliza o Axios para fazer a requisição e o método then para tratar a resposta. Ele também utiliza o useEffect para garantir que a requisição seja feita apenas uma vez, quando o componente é montado. No final, ele mostra no console do navegador que os dados das categorias foram obtidos com sucesso.

### Aula 01 - Mapeando os dados - Vídeo 03

Nesta aula, o instrutor ensina como utilizar o método .map do React para renderizar uma lista de categorias. Ele mostra como cortar os itens da lista que não serão utilizados e utiliza o .map para percorrer o array de categorias e renderizar um item de lista para cada categoria. Ele também utiliza o componente Link do React Router para criar um link para a página de cada categoria, utilizando o slug da categoria. O instrutor explica a importância de utilizar a propriedade key ao renderizar uma lista no React e mostra como inserir o slug da categoria no link utilizando a interpolação de string. Por fim, ele testa a funcionalidade no navegador e verifica se o link está redirecionando corretamente para a página da categoria.

### Aula 01 - Padrões de data fetching - Vídeo 04

Nesta aula, o palestrante discute sobre os padrões de obtenção de dados, também conhecidos como "data fetching". Ele explica o padrão "standalone", onde os dados são obtidos diretamente no componente de navegação utilizando useEffect e useState. Em seguida, introduz o padrão "higher-order component", onde as responsabilidades são separadas entre um componente que obtém os dados e outro que apenas renderiza as propriedades. Também menciona o uso de "hooks" para reaproveitar código. Por fim, o palestrante destaca a necessidade de obter muitos dados para implementar a página de categorias e propõe um desafio aos espectadores.

### Aula 01 - O que aprendemos nessa aula`:`

- Buscar dados de uma API;
- Combinar os hooks useState e useEffect para obter dados e armazená-los no estado local;
- Uma nova funcionalidade do React Router, a useLoaderData;
- Padrões de obtenção de dados: standalone, higher order component e via hooks.

## Aula 02 - Paginas de Categorias

### Aula 02 - Página base - Vídeo 01

Nesta aula, o instrutor ensina como criar o componente "TituloPrincipal" e utilizá-lo na página de categoria. Ele mostra o código do componente e explica que ele retorna o título da página. Em seguida, o instrutor cria um novo componente chamado "Categoria" e explica que ele será exportado por padrão. Dentro desse componente, ele utiliza o elemento "section" e chama o componente "TituloPrincipal" passando a propriedade "texto" com o valor "Categoria". O instrutor também cria uma nova rota com o path "/categorias/:slug" e explica que o ":slug" será capturado e utilizado com o useParams do React Router. Ele verifica no navegador se a rota está funcionando corretamente e mostra que o componente "TituloPrincipal" está sendo renderizado na página. No próximo vídeo, ele irá mostrar como pegar o slug da URL, enviar para a API e obter as categorias correspondentes.

### Aula 02 - Página da categoria - Vídeo 02

Nesta aula, o instrutor explica como buscar uma categoria específica na API utilizando React Query. Ele mostra como passar o parâmetro slug na URL para pesquisar por uma categoria específica. Utilizando o hook useEffect, ele faz a requisição à API e utiliza o método then para obter a primeira categoria retornada. Em seguida, ele atualiza o estado com essa categoria e utiliza o componente TituloPrincipal para exibir o nome da categoria na página. O instrutor também menciona a importância de adicionar as dependências corretas no array de dependências do useEffect para evitar renderizações infinitas. Ele menciona que ainda há mais coisas a serem feitas, como indicar o estado de carregamento para o usuário.

### Aula 02 - Criando um loader - Vídeo 03

> loading.io/css

Nesta aula, o instrutor ensina como criar um componente de loader utilizando CSS puro. Ele utiliza o site "loading.io/css" para escolher um loader e mostra o código CSS e HTML correspondente. Em seguida, ele cria um novo componente chamado "Loader" no diretório "src > componentes" do projeto React. O código do loader escolhido é copiado para o componente, com algumas alterações, como a mudança da cor. O instrutor importa o arquivo CSS no componente e o adiciona em um local específico da página. Ele explica a necessidade de criar um novo estado chamado isLoading para controlar quando o loader deve ser exibido. O instrutor menciona o uso do useState para implementar essa lógica.

### Aula 02 - Exibindo o loader condicionalmente - Vídeo 04

Nesta aula, o instrutor aborda a exibição condicional de um componente de carregamento em uma aplicação React. Ele utiliza o hook useState para criar um estado chamado "estaCarregando" que controla a exibição do componente de carregamento. O hook useEffect é utilizado para atualizar o estado "estaCarregando" de acordo com o progresso da requisição. O instrutor também menciona a importância de cuidar manualmente do estado local e sugere o uso do React Query como uma alternativa para facilitar o data fetching e o gerenciamento de estados. No próximo vídeo, ele ensinará como utilizar o React Query para realizar o data fetching de forma mais eficiente.

### Aula 02 - Para saber mais: Async / Await

Durante o curso, nós utilizamos a sintaxe de async / await para aguardar que promessas sejam resolvidas.

Isso pode facilitar a escrita de código em alguns cenários, porque é uma forma diferente para lidarmos com promessas [(Promises)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Pensando que isso poderia gerar uma curiosidade sobre o tema, vou deixar aqui especialmente pra você um [artigo do Dev Soutinho](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar) sobre o tema.

### Aula 02 - Entrevista de emprego: JSX

Quais as vantagens de utilizarmos o JSX?

O JSX é somente um açúcar sintático (syntactic sugar) para a função React.createElement(component, props, ...children).

Na mosca. Quando usamos o React, trabalhamos com os componentes que utilizam código HTML diretamente do código TypeScript. O JSX nos ajuda justamente nisso, permitindo que escrevamos código "html" que na verdade vai ser convertido para TypeScript exigido pelo React. Por sinal, essa conversão só é possível porque já está habilitado o React JSX Transform, do [Babel](https://babeljs.io/docs/babel-plugin-transform-react-jsx/).

### Aula 02 - O que aprendemos nessa aula`:`

- Controlar manualmente um estado que indica que uma requisição está sendo feita;
- Criar um componente que indica o status de carregamento, que chamamos de Loader;
- Exibir, condicionalmente, o componente de Loader;
- Como lidar com promessas utilizando async e await.

## Aula 03 - React Query

### Aula 03 - Implementando o useQuery - Vídeo 01

> [TanStack Query](https://tanstack.com/query/latest)

Nesta aula, o instrutor ensina como instalar e usar a biblioteca React Query. Ele mostra como envolver os componentes que usarão o hook useQuery com o componente `<QueryClientProvider>`, além de criar uma instância do QueryClient. Também é explicada a necessidade de implementar o useQuery em um componente chamado Categoria, mostrando como importar e definir os parâmetros corretamente. A refatoração será abordada no próximo vídeo.

### Aula 03 - extraindo a chamada HTTP - Vídeo 02

Nesta aula, o instrutor realiza uma refatoração no código, concentrando a função obterCategoriaPorSlug na camada de http. Ele utiliza o Axios para fazer uma requisição GET para a rota 'categorias' e utiliza await para aguardar a execução da promessa. Em seguida, ele utiliza o useQuery para obter os dados da categoria e remove os imports desnecessários. No final, ele identifica um bug e menciona que irá resolvê-lo no próximo vídeo.

### Aula 03 - De olho nas dependências - Vídeo 03

Nesta aula, o instrutor analisa um problema nas requisições feitas na página. Ele percebe que o valor do parâmetro não está sendo atualizado corretamente. Para resolver isso, ele mostra como passar o valor do parâmetro como uma dependência da query. Após fazer essa alteração, ele testa a funcionalidade no navegador e verifica que a requisição é feita corretamente. O instrutor menciona que ainda há mais coisas a serem feitas, como construir os livros da categoria, e convida o aluno para o próximo desafio na próxima aula.

### Aula 03 - Nessa aula, você aprendeu como`:`

- Obter dados utilizando o React Query;
- Extrair e refatorar código já existente;
- Configurar as dependências de uma Query;
- Destructuring de objetos.

## Aula 04 - Listando os Livros

### Aula 04 - Livros da categoria - Vídeo 01

Nesta aula, o professor discute sobre a refatoração da interface de livros e a forma como ela obtém os livros das categorias "Últimos lançamentos" e "Mais vendidos" através de uma API. Ele mostra como criar o componente "ListaLivros" e como receber a categoria através das props. Além disso, ele menciona a necessidade de tratar o caso em que a categoria ainda não foi carregada, utilizando um loader. O professor também demonstra como testar a obtenção da categoria através de um console.log no navegador. No próximo vídeo, ele irá mostrar como exibir os livros na interface.

### Aula 04 - Exibindo os dados - Vídeo 02

Nesta aula, o instrutor aborda a obtenção de dados em um projeto React usando o pacote React Query. Ele explica como usar a função useQuery para obter os dados, passando um nome identificador da query. Em seguida, ele cria uma função que faz uma requisição para o endpoint de livros, passando uma categoria como parâmetro. Essa função é passada como callback para o useQuery, que irá chamá-la sempre que a categoria mudar. O resultado é armazenado em uma constante e o instrutor verifica se os dados estão sendo obtidos corretamente. Por fim, ele mapeia a lista de livros para renderizar os cards de cada livro na tela.

### Aula 04 - Estilos da lista - Vídeo 03

Nesta aula, o instrutor ensina como arrumar o layout de uma lista de livros em um componente chamado "ListaLivros". Ele importa um arquivo CSS inexistente e cria o arquivo "ListaLivros.css". Em seguida, define uma classe ".livros" no CSS e aplica propriedades para estilizar a lista de livros, como "display: flex", "justify-content: space-around", "gap: 24px", "flex-wrap: wrap" e "max-width: 80%". Ele também aplica uma margem de 24px para centralizar a lista. Ao visualizar a página no Firefox, verifica que o layout está correto. O próximo desafio será construir a página de livros.

### Aula 04 - Um desafio para a todos governar - Vídeo 04

Nesta aula, o instrutor apresenta um desafio especial para os alunos. Ele mostra a página do Figma no navegador Firefox, que exibe a capa de um livro, título, descrição, autor e uma guia de componentes para selecionar o formato do livro desejado. O instrutor explica que os componentes "ABGrupoOpcoes" e "ABInputQuantidade" foram desenvolvidos anteriormente e estão disponíveis para download. Esses componentes fazem parte do Design System e os alunos devem praticar a montagem de uma página complexa utilizando-os. O objetivo é exibir os dados dos livros na tela. O instrutor incentiva os alunos a fazerem o desafio no seu próprio ritmo e oferece um gabarito com o código necessário. Ele deseja boa sorte aos alunos e os encoraja a praticar.

### Aula 04 - Resenha do desafio - Vídeo 05

Nesta aula, o instrutor discute o desenvolvimento de uma página complexa que detalha um livro. Ele compartilha conceitos sobre sua abordagem na construção da página, mostrando a capa do livro, opções de compra e comportamento desejado. Utilizando o useState, o useQuery e o mapeamento dos dados da API, ele desenvolve o layout da página. O instrutor também menciona a programação defensiva ao lidar com casos em que um livro não possui opções de compra. Ele detalha os componentes utilizados e incentiva os espectadores a analisarem o código fornecido e compartilharem suas versões da página. Por fim, ele introduz o React Query como uma ferramenta para realizar o tratamento de erros ao lidar com APIs.

### Aula 04 - Para saber mais: rotas com estado

Nós trabalhamos com as rotas passando somente o slug na URL. Podemos passar estado também, utilizando o state:

// direto no link, pode passar objetos complexos

```JSX
<Link to="/categoria" state={{ categoria }}>
   Apple
</Link>
```

E, do lado do componente, consegue obter via hook:

```JSX
// o import:
import { useLocation } from "react-router-dom";
// e o uso, dentro do componente:
const location = useLocation();
const categoria = location.state?.categoria;
```

Para saber mais, você pode dar uma espiada na [documentação oficial](https://reactrouter.com/en/main/start/concepts#location).

Entrevista
PRÓXIMA ATIVIDADE

Quais são os dois principais tipos de componentes que podem ser declarados no React? E quando utilizamos cada um deles?

### Aula 04 - Entrevista

Quais são os dois principais tipos de componentes que podem ser declarados no React? E quando utilizamos cada um deles?

Componente Funcional e Componente de Classe. Você pode escolher qualquer um dos dois, ambas as opções ainda são mantidas pelo React, embora os componentes funcionais tenham sido criados buscando simplificar a forma de se escrever componentes React.

Na mosca. Componentes em React basicamente retornam um trecho de código JSX que diz o que deve ser renderizado na tela. E esses dois tipos de componentes são os que podemos utilizar hoje em dia.

### Aula 04 - O que aprendemos nessa aula`:`

- Aplicar os conceitos de Higher Order Component e Standalone;
- Consultar dados da API utilizando o React Query;
- Desenvolver componentes baseado em layouts do Figma.

## Aula 05 - Programação Defensiva

### Aula 05 - Nem sempre dá certo - Vídeo 01


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

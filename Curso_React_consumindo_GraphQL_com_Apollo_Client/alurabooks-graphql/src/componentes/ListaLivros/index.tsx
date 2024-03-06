import { gql, useQuery } from "@apollo/client"
import { ICategoria } from "../../interfaces/ICategoria"
// import { useQuery } from '@tanstack/react-query'
// import { obterProdutosDaCategoria } from "../../http"
import CardLivro from "../CardLivro"
import './ListaLivros.css'
import { ILivro } from "../../interfaces/ILivro"

interface ListaLivrosProps {
    categoria: ICategoria
};

const OBTER_LIVROS = gql`
    query ObterLivros {
        livros {
        id
        titulo
        slug
        imagemCapa
        opcoesCompra {
            id
            preco
            formatos
          }
        }
    }  
`;
const ListaLivros = ({ categoria }: ListaLivrosProps) => {
    // const { data: produtos } = useQuery(['buscaLivrosPorCategoria', categoria], () => obterProdutosDaCategoria(categoria))
    //IMPORTANTE, o useQuery() é do ApolloClient não o do React
   const {data}  = useQuery<{livros: ILivro[]}>(OBTER_LIVROS);
    return <section className="livros">
        {data?.livros.map(livro => <CardLivro livro={livro} key={livro.id} />)}
    </section>
}

export default ListaLivros

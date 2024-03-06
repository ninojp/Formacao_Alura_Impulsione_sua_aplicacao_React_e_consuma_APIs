import { gql, useQuery } from "@apollo/client"
import { ICategoria } from "../../interfaces/ICategoria"
// import { useQuery } from '@tanstack/react-query'
// import { obterProdutosDaCategoria } from "../../http"
import CardLivro from "../CardLivro"
import './ListaLivros.css'
import { ILivro } from "../../interfaces/ILivro"
import { AbBotao, AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"

interface ListaLivrosProps {
    categoria: ICategoria
};

const OBTER_LIVROS = gql`
    query ObterLivros($categoriaId: Int, $titulo: String) {
        livros(categoriaId: $categoriaId, titulo: $titulo) {
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
    const [textoBusca, setTextoBusca] = useState('');

    //IMPORTANTE, o useQuery() é do ApolloClient não o do React
    const { data, refetch } = useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
        variables: {
            categoriaId: categoria.id
        }
    });
    const buscarLivros = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if(textoBusca){
            refetch({
                categoriaId: categoria.id,
                titulo: textoBusca
            })
        }
    };

    return (
        <section>
            <form onSubmit={buscarLivros} className="formPesquisa">
                <AbCampoTexto value={textoBusca} onChange={setTextoBusca} label="Pesquise por Titulo" type="text" placeholder="Digite o titulo do Livro" />
                <div>
                    <AbBotao texto="Buscar" />
                </div>
            </form>
            <div className="livros">
                {data?.livros.map(livro => <CardLivro livro={livro} key={livro.id} />)}
            </div>
        </section>
    );
};
export default ListaLivros;

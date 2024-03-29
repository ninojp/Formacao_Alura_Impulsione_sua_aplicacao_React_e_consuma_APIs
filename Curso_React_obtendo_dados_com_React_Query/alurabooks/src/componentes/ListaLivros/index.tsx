import { useQuery } from "@tanstack/react-query";
import { ICategoria } from "../../interfaces/ICategoria";
import { obterProdutosDaCategoria } from "../../http";
import CardLivro from "../CardLivro";
import './ListaLivros.css';

interface IListaLivrosProps{
    categoria: ICategoria
};

const ListaLivros = ({categoria}: IListaLivrosProps) => {
    const {data: produtos} = useQuery(['buscaLivrosPorCategoria', categoria], () => obterProdutosDaCategoria(categoria));
    // console.log(produtos)
    return(
        <section className="livros">
            {produtos?.map(livro => <CardLivro livro={livro} key={livro.id} />)}
        </section>
    );
};
export default ListaLivros;

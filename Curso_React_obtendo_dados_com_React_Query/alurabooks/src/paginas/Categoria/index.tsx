// import { useEffect, useState } from "react";
import TituloPrincipal from "../../componentes/TituloPrincipal";
// import { ICategoria } from "../../interfaces/ICategoria";
import { obterCategoriaPorSlug } from "../../http";
import { useParams } from "react-router-dom";
import Loader from "../../componentes/Loader";
import { useQuery } from "@tanstack/react-query";
import ListaLivros from "../../componentes/ListaLivros";

const Categoria = () => {
    // const [categoria, setCategoria] = useState<ICategoria>();
    // const [estaCarregando, setEstaCarregando] = useState(true);
    const params = useParams();
    // const {data: categoria, isLoading} = useQuery({queryKey: ['categoriaPorSlug', params.slug], queryFn: () => obterCategoriaPorSlug(params.slug || '')})
    const { data: categoria, isLoading } = useQuery(['categoriaPorSlug', params.slug], () => obterCategoriaPorSlug(params.slug || ''))
    // useEffect(() => {
    //     setEstaCarregando(true);
    //     http.get<ICategoria[]>('categorias', {
    //         params: { slug: params.slug }
    //     }).then(resposta => {
    //         setCategoria(resposta.data[0])
    //         setEstaCarregando(false);
    //     }).catch(erro => {
    //         console.log(erro);
    //         setEstaCarregando(false);
    //     })
    // }, [params.slug]);
    if(isLoading){
        return <Loader />
    }
    return(
        <section>
           <TituloPrincipal texto={categoria?.nome ?? ''} />
           <ListaLivros categoria={categoria!} />
        </section>
    );
};
export default Categoria;

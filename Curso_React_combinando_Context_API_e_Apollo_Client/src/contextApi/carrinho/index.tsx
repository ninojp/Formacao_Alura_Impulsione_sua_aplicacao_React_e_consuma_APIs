import { ReactElement, createContext, useContext } from "react";
import { ICarrinho } from "../../interfaces/ICarrinho";
import { useAdicionarItem, useCarrinho, useRemoverItem } from "../../graphql/carrinho/hooks";
import { IItemCarrinho } from "../../interfaces/IItemCarrinho";

export interface ICarrinhoContext{
    carrinho?: ICarrinho
    adicionarItemCarrinho: (item: IItemCarrinho) => void
    removerItemCarrinho: (item: IItemCarrinho) => void
    carregando: boolean
};

export const CarrinhoContext = createContext<ICarrinhoContext>({
    adicionarItemCarrinho: () => null,
    removerItemCarrinho: () => null,
    carregando: false
});

interface CarrinhoProviderProps{
    children: ReactElement
};
const CarrinhoProvider = ({children}: CarrinhoProviderProps) => {
    const {data, loading: loadingCarrinho} = useCarrinho();

    //REGRA dos hooks customizados, só podem ser chamados no PRIMEIRO nivel da função
    const [adicionaItem, {loading: loadingAdiciona}] = useAdicionarItem();
    const [removeItem, {loading: loadingRemove}] = useRemoverItem();

    const adicionarItemCarrinho = (item: IItemCarrinho) => {
    //REGRA dos hooks customizados, eles não podem ser chamados no SEGUNDO nivel(função dentro de outra função)
        adicionaItem({
            variables: {
                item: {
                    livroId: item.livro.id,
                    opcaoCompraId: item.opcaoCompra.id,
                    quantidade: item.quantidade
                }
            }
        });
    };
    const removerItemCarrinho = (item: IItemCarrinho) => {
        // console.log('[CarrinhoProvider] - removerItemCarrinho', item)
        removeItem({
            variables: {
                item: {
                    livroId: item.livro.id,
                    opcaoCompraId: item.opcaoCompra.id,
                    quantidade: item.quantidade
                }
            }
        });
    }
    return(
        <CarrinhoContext.Provider 
            value={{ 
                carrinho: data?.carrinho,
                adicionarItemCarrinho,
                removerItemCarrinho,
                carregando: loadingCarrinho || loadingAdiciona || loadingRemove
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    );
}
export const useCarrinhoContext = () => {
    return useContext<ICarrinhoContext>(CarrinhoContext)
};
export default CarrinhoProvider;

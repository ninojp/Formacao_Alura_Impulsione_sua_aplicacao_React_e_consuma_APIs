import { ReactElement, createContext, useContext } from "react";
import { ICarrinho } from "../../interfaces/ICarrinho";
import { useAdicionarItem, useCarrinho } from "../../graphql/carrinho/hooks";
import { IItemCarrinho } from "../../interfaces/IItemCarrinho";

export interface ICarrinhoContext{
    carrinho?: ICarrinho
    adicionarItemCarrinho: (item: IItemCarrinho) => void
};

export const CarrinhoContext = createContext<ICarrinhoContext>({
    adicionarItemCarrinho: () => null
});

interface CarrinhoProviderProps{
    children: ReactElement
};
const CarrinhoProvider = ({children}: CarrinhoProviderProps) => {
    // const carrinho: ICarrinho = { itens: [], total: 0 }
    const {data} = useCarrinho();

    //REGRA dos hooks customizados, só podem ser chamados no PRIMEIRO nivel da função
    const [adicionaItem] = useAdicionarItem()
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
    return(
        <CarrinhoContext.Provider value={{carrinho: data?.carrinho, adicionarItemCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    );
}
export const useCarrinhoContext = () => {
    return useContext<ICarrinhoContext>(CarrinhoContext)
};
export default CarrinhoProvider;

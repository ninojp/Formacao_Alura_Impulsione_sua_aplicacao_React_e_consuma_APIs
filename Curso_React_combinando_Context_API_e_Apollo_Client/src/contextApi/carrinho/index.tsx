import { ReactElement, createContext, useContext } from "react";
import { ICarrinho } from "../../interfaces/ICarrinho";
import { useAdicionarItem, useCarrinho, useRemoverItem } from "../../graphql/carrinho/hooks";
import { IItemCarrinho } from "../../interfaces/IItemCarrinho";

export interface ICarrinhoContext{
    carrinho?: ICarrinho
    adicionarItemCarrinho: (item: IItemCarrinho) => void
    removerItemCarrinho: (item: IItemCarrinho) => void
};

export const CarrinhoContext = createContext<ICarrinhoContext>({
    adicionarItemCarrinho: () => null,
    removerItemCarrinho: () => null
});

interface CarrinhoProviderProps{
    children: ReactElement
};
const CarrinhoProvider = ({children}: CarrinhoProviderProps) => {
    const {data} = useCarrinho();

    //REGRA dos hooks customizados, só podem ser chamados no PRIMEIRO nivel da função
    const [adicionaItem] = useAdicionarItem();
    const [removeItem] = useRemoverItem();
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
                removerItemCarrinho
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

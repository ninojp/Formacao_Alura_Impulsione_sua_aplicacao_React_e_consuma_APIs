import { gql } from "@apollo/client";

export const OBTER_CARRINHO = gql`
    query obterCarrinho {
        carrinho{
        total
        itens{
            quantidade
            opcaoCompra{
            preco
            }
            livro{
            titulo
            descricao
            imagemCapa
            autor{
                nome
            }
            }
        }
        }
    }
`;

import { IItemCarrinho } from '../../../interfaces/IItemCarrinho'
import './MiniCarrinhoItem.css'

interface MiniCarrinhoItemProps {
    item: IItemCarrinho
}

const MiniCarrinhoItem = ({ item } : MiniCarrinhoItemProps) => {
    return (
    <div className="mini-carrinho-item">
        <figure className='mini-img-livro'>
            <img src={item.livro.imagemCapa} alt={item.livro.descricao} />
        </figure>
        <div>
            <h5>{item.livro.titulo}</h5>
            <h6>Autoria: {item.livro.autor.nome}</h6>
        </div>
    </div>)
}
export default MiniCarrinhoItem;

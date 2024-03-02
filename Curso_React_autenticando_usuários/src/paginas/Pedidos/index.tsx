import { AbBotao } from "ds-alurabooks";
import { useEffect, useState } from "react";
import { IPedido } from "../../interfaces/IPedido";
import http from "../../http";
import './Pedidos.css';

const Pedidos = () => {
    const [pedidos, setPedidos] = useState<IPedido[]>([]);
    const formatador = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'});
    useEffect(() => {
        http.get<IPedido[]>('pedidos')
        .then(resposta => setPedidos(resposta.data))
        .catch(erro => console.log(erro))
    }, []);
        
    const excluirPedido = (pedido: IPedido) => {
        http.delete<IPedido[]>(`pedidos/${pedido.id}`)
        .then(() => {
            setPedidos(pedidos.filter(p => p.id !== pedido.id))
        })
        .catch(erro => console.log(erro))
    }

    return (
        <section className="pedidos">
            <h1>Meus Pedidos</h1>
            {pedidos.map(pedido => (<div key={pedido.id} className="pedido">
                <ul>
                    <li>Pedido: <strong>{pedido.id}</strong></li>
                    <li>Data do Pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
                    <li>Valor Total: <strong>{formatador.format(pedido.total)}</strong></li>
                    <li>Entrega Realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
                </ul>
                <AbBotao texto="Detalhes" />
                <AbBotao onClick={() => excluirPedido(pedido)} texto="Excluir" />
            </div>))}
        </section>
    );
};
export default Pedidos;

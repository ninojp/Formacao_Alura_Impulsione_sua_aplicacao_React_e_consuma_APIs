import { Link, useNavigate } from "react-router-dom"
import BotaoNavegacao from "../BotaoNavegacao"
import ModalCadastroUsuario from "../ModalCadastroUsuario"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import { useEffect, useState } from "react"
import ModalLoginUsuario from "../ModalLoginUsuario"
import { ICategorias } from "../../interfaces/ICategorias"
import http from "../../http"

const BarraNavegacao = () => {
    const [modalCadastroAberta, setModalCadastroAberta] = useState(false);
    const [modalLoginAberta, setModalLoginAberta] = useState(false);
    const token = sessionStorage.getItem('tokenAtual');
    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token != null);

    const [categorias, setCategorias] = useState<ICategorias[]>([]);
    useEffect(() => {
        http.get<ICategorias[]>('categorias')
            .then(resposta => {
                console.log(resposta.data)
                setCategorias(resposta.data)
            })
    }, []);

    //Callback
    const aoEfetuarLogin = () => {
        setModalLoginAberta(false);
        setUsuarioEstaLogado(true);
    };

    let navegate = useNavigate();
    const aoEfetuarLogout = () => {
        setUsuarioEstaLogado(false);
        sessionStorage.removeItem('tokenAtual');
        navegate('/');
    }

    return (<nav className="ab-navbar">
        <h1 className="logo">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo da AluraBooks" />
            </Link>
        </h1>
        <ul className="navegacao">
            <li>
                <a href="#!">Categorias</a>
                <ul className="submenu">
                    {categorias.map(categoria => (
                        <li key={categoria.id}>
                            <Link to={`/categorias/${categoria.slug}`}>
                                {categoria.nome}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
        <ul className="acoes">
            {!usuarioEstaLogado && (<>
                <li>
                    <BotaoNavegacao
                        texto="Login"
                        textoAltSrc="Icone representando um usuário"
                        imagemSrc={usuario}
                        onClick={() => setModalLoginAberta(true)}
                    />
                    <ModalLoginUsuario
                        aberta={modalLoginAberta}
                        aoFechar={() => setModalLoginAberta(false)}
                        aoEfetuarLogin={aoEfetuarLogin}
                    />
                </li>
                <li>
                    <BotaoNavegacao
                        texto="Cadastrar-se"
                        textoAltSrc="Icone representando um usuário"
                        imagemSrc={usuario}
                        onClick={() => setModalCadastroAberta(true)}
                    />
                    <ModalCadastroUsuario
                        aberta={modalCadastroAberta}
                        aoFechar={() => setModalCadastroAberta(false)} />
                </li>
            </>)}
            {usuarioEstaLogado && (<>
                <li>
                    <Link to='minha-conta/pedidos'>Minha Conta</Link>
                </li>
                <li>
                    <BotaoNavegacao
                        texto="Logout"
                        textoAltSrc="Icone representando um usuário"
                        imagemSrc={usuario}
                        onClick={aoEfetuarLogout}
                    />
                </li>
            </>)}
        </ul>
    </nav>)
}
export default BarraNavegacao;

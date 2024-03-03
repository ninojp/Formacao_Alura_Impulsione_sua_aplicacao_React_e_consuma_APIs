import { Link, useNavigate } from "react-router-dom"
import BotaoNavegacao from "../BotaoNavegacao"
import ModalCadastroUsuario from "../ModalCadastroUsuario"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import { useState } from "react"
import ModalLoginUsuario from "../ModalLoginUsuario"

const BarraNavegacao = () => {
    const [modalCadastroAberta, setModalCadastroAberta] = useState(false);
    const [modalLoginAberta, setModalLoginAberta] = useState(false);

    let navegate = useNavigate();

    const token = sessionStorage.getItem('tokenAtual');
    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token != null);

    //Callback
    const aoEfetuarLogin = () => {
        setModalLoginAberta(false);
        setUsuarioEstaLogado(true);
    };

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
                    <li>
                        <Link to="/">
                            Frontend
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Programação
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Infraestrutura
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Design e UX
                        </Link>
                    </li>
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

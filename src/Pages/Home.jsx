// Fazer a importação do pacote de icons que foram usado no botão
import { FiArrowRight } from 'react-icons/fi';
import { CgGirl } from 'react-icons/cg';
import { ImLinkedin } from 'react-icons/im';
import { ImGithub } from 'react-icons/im';
import { SiNetlify } from "react-icons/si";
// Fazer a importação do pacote para gerar navegação entre as páginas
import { Link } from 'react-router-dom';
import '../Styles/Pages/home.css';

const Home = () => {
    return (
        <div id="lading-page">
            <main className="container-wrapper">
                <div className="container-title">
                    <h1>Conheça os livros do Harry Potter</h1>
                    <p>O mundo e seus personagens com os quais eu cresci</p>
                </div> 

                <div className="container-buttons">
                    <div className="info-buttons">
                        <Link  to="/listaHarry" className="enter-app-list">
                            <FiArrowRight size={26} color="rgb(69, 7, 85)"/>
                        </Link>
                        <p id="p_list">Livros Harry Potter</p>
                    </div>

                    <div className="info-buttons">
                        <Link  to="/sobre" className="enter-app-about">
                            <CgGirl size={26} color="rgb(69, 7, 85)"/>
                        </Link>
                        <p id="p_about">Saiba um pouco sobre mim</p>
                    </div>
            
                </div>
            </main>

            <footer className="container-social-midias">
                <a className="social" href="https://www.linkedin.com/in/ludmila-oliveira-3b79621b3/" target="blank">
                    <ImLinkedin size={26} color="rgb(69, 7, 85)"/>
                </a>

                <a className="social" href="https://github.com/Ludmila-Oliveira" target="blank">
                    <ImGithub size={26} color="rgb(69, 7, 85)"/>
                </a>

                <a className="social" href="https://app.netlify.com/teams/ludsh220/" target="blank">
                    <SiNetlify size={26} color="rgb(69, 7, 85)"/>
                </a>
            </footer>
        </div>
    )
}

export default Home
import '../Styles/Pages/sobre.css' 
// Importação da foto para que possa ser utilizada
import fotoPerfil from '../Assets/foto-perfil.jpeg'
import { FiArrowLeft } from "react-icons/fi"
import { useHistory } from "react-router-dom";

const Sobre = () => {
    const { goBack } = useHistory()

    return (
        <div className="container">
            <h1>Um pouco sobre mim...</h1>
            <main id="main">
                <img src={fotoPerfil} alt="foto de perfil"/>
                <div id="info">
                    <p>Sou Ludmila Oliveira, uma profissional em transição de carreira para desenvolvedora Front-end. Gosto de estudar sobre novos assuntos, exercitar minha criatividade e interagir com novas pessoas e culturas.
                    </p>
                    <p>Nasci em Pernambuco - Brasil e venho de uma família, por parte de mãe, muito criativa e cresci em meio aos desenhos dos meus tios, esculturas de madeira do meu avô e mosaicos da minha mãe. Ainda fiz muito jovem fiz um curso técnico em Comunicação Visual e amei fazer cada projeto, porém, fiquei tentada a fazer graduação em Nutrição pois julgava (equivocadamente) uma profissão mais estável naquela época e segui em frente.
                    </p>
                    <p>Terminei a faculdade e iniciei minha especialização em Controle de Qualidade dos Alimentos, que foi minha relação profissional de amor e ódio por 5 anos, até que durante a pandemia de covid-19 decidi voltar meus olhos para área de Front-end. Essa área da tecnologia me conquistou pois vi uma oportunidade de exercitar minha criatividade e de estudar assuntos que despertam minha curiosidade, além de ser um mercado amplo de atuação.
                    </p>
                    <p>Após esse breve resumo da minha trajetória, espero que curtam meu primeiro projeto em React com uso de rotas e estilo, pois fiz sobre uma saga pela qual tenho muito carinho e que cresci imersa em seu mundo.
                    </p>

                </div>

            </main>
            <button type="button" onClick={goBack}>
                <FiArrowLeft size={26} color="rgb(69, 7, 85)" />
            </button>

        </div>
    )
}

export default Sobre
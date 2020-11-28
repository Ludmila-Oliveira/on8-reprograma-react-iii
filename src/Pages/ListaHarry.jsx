import harryPotterBooks from '../Services/dados'
import '../Styles/Pages/lista-harry.css' 
import { FiArrowLeft } from "react-icons/fi"
// Fazer a importação do pacote para usar o hook abaixo
import { useHistory } from "react-router-dom";
import {useState, useEffect} from 'react'

const ListaHarry = () => {
    //A hook useHistory armazena o histótico de navegação
    const { goBack } = useHistory()

    const [dados, setDado] = useState("")
    const [livro, setLivro] = useState([])

    useEffect(() => {
        setLivro(
            harryPotterBooks.filter(livro => {
                return livro.nome.includes(dados)
            })
        )
   
    }, [dados])   

    return (

        <div className="main-container">
            
            <input id="search-book" type="text" placeholder="Digite o nome do livro" onChange={e => setDado(() => e.target.value.toLowerCase().replace(/[^a-z]/g, ''))}/>

            <div id="container-harry">

                {/* Fazer a interpolação dos elementos que vamos exibir, por isso estão dentro de chaves */}
                {
                    livro.map(livro => {
                        return (
                            <div key={livro.id} className="card-harry">
                            <section id="info-harry-book">
                            <h3>{livro.titulo}</h3>
                            <p>{livro.autor} - {livro.ano}</p>
                            </section>
                            <img id="img-harry-book" src={livro.capa} alt="capa do livro"/>
                            </div>
                        )
                    })  
                }

                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={26} color="rgb(69, 7, 85)" />
                </button>
            </div>
        </div>
    )
}

export default ListaHarry
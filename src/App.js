//A importação do CSS é a único que não precisa do from
import './Styles/global.css'
// A importação das rotas será feita aqui no App, nosso centralizador. O Routes é o único a ser importado aqui porque ele contém o agrupamento de todos os elementos que queremos trabalhar
import Routes from './Routes/Routes'


function App() {
  return (
    <>      
       <Routes/>  
    </>   
  )
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import ListaHarry from '../Pages/ListaHarry'
import Sobre from '../Pages/Sobre'

function Routes(){
    return(
// BrowserRouter envolve as rotas e faz com que funcionem
        <BrowserRouter>
{/* Switch permite a troca das rotas */}
            <Switch>
                <Route path="/" exact component={Home}/>  
{/*O Route contém o path que é o caminho e aponta o componente desejado, que nesse caso é o que está gerando os cards */}              
                <Route path="/listaHarry" component={ListaHarry}/>
                <Route path="/sobre" component={Sobre}/>       
            </Switch>   
        </BrowserRouter>
    )
}

export default Routes
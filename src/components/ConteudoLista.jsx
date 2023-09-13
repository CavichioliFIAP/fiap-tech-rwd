import { Link } from "react-router-dom";
import Header from './Header'


export default function ConteudoLista(){
    return(
        <>
        <Header>
            <li><Link to= '/'>Inicio</Link></li>
            <li><Link to= '/problema'>Problema</Link></li>
            <li><Link to= '/solucao'>Solucao</Link></li>
            <li><Link to= '/integrantes'>Integrantes</Link></li>
        </Header>
        </>
    )
}
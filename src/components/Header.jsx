import { createElement } from "react";

export default function Cabecalho(props){

    return(
        <>
            <header>
                <div className="logo"></div>
                <nav>
                    <ul>
                        <li><img src="./public/logo-porto2.png" alt=""  width={100} height={140}/></li>
                        <input type="text" placeholder="  Pesquisar"/>
                        <button type="submit">🔍</button>
                        <li><a href="#inicio">INICIO</a></li>
                        <li><a href="#problema">PROBLEMA</a></li>
                        <li><a href="#solucao">SOLUÇÃO</a></li>
                        <li><a href="#integrantes">INTEGRANTES</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

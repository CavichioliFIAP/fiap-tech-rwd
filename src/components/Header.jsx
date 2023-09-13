// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom"; // Importe o Link do React Router

export default function Cabecalho(props){

    return(
        <>
            <header>
                <div className="logo"></div>
                <nav>
                    <ul>
                        {/* {
                        props.children.map((item, index) =>{
                            createElement('li', {key: index}, item);
                            return item;
                        })
                        } */}
                        <li><img src="./public/logo-porto2.png" alt=""  width={100} height={140}/></li>
                        <input type="text" placeholder="  Pesquisar"/>
                        <button type="submit">🔍</button>
                        <li><a href="/inicio">INICIO</a></li>
                        <li><a href="/problema.jsx">PROBLEMA</a></li>
                        <li><a href="/solucao">SOLUÇÃO</a></li>
                        <li><a href="/integrantes">INTEGRANTES</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

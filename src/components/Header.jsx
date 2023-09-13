import React from "react";
import { Link } from "react-router-dom"; // Importe o Link do React Router

export default function Cabecalho(props) {
  return (
    <header>
      <div className="logo"></div>
      <nav>
        <ul>
          <li>
            <img src="./public/logo-porto2.png" alt="" width={100} height={140} />
          </li>
          <input type="text" placeholder="  Pesquisar" />
          <button type="submit">🔍</button>
          <li>
            <Link to="/">INICIO</Link> {/* Use Link para navegação interna */}
          </li>
          <li>
            <Link to="/problema">PROBLEMA</Link>
          </li>
          <li>
            <Link to="/solucao">SOLUÇÃO</Link>
          </li>
          <li>
            <Link to="/integrantes">INTEGRANTES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

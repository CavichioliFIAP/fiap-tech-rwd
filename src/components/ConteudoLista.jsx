// ConteudoLista.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ConteudoLista() {
  return (
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/problema">Problema</Link>
      </li>
      <li>
        <Link to="/solucao">Solucao</Link>
      </li>
      <li>
        <Link to="/integrantes">Integrantes</Link>
      </li>
    </ul>
  );
}

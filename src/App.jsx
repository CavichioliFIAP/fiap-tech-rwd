
import React from "react"
import Rodape from "./components/Rodape"
import Home from "./components/Home"
//import ConteudoLista from "./components/ConteudoLista"

function App() {
  return (
    <Router>
      <Cabecalho /> {/* Renderize o cabeçalho em todas as páginas */}
      {/* <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
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
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problema" element={<Problema />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
      <Rodape /> {/* Renderize o footer em todas as páginas */ }
    </Router>
  );
}

export default App;


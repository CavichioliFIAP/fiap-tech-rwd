import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Importe createRoot corretamente
import Cabecalho from './components/Header';
import Home from './components/Home';
import Problema from './routes/Problema';
import Solucao from './routes/Solucao';
import Integrantes from './routes/Integrantes';
import Erro404 from './routes/Erro404';

export default function App() {
  return (
    <Router>
      <Cabecalho /> {/* Renderize o cabeçalho em todas as páginas */}
      <div>
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
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problema" element={<Problema />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </Router>
  );
}

const root = createRoot(document.getElementById('root')); // Crie a raiz usando createRoot
root.render(<App />); // Renderize o aplicativo na raiz

export default App;

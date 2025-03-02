import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Link, Outlet, Route } from 'react-router-dom';
import './App.css';

import App from './App.jsx';
import Integrantes from './routes/Integrantes.jsx';
import Problema from './routes/Problema.jsx';
import Solucao from './routes/Solucao.jsx';
import Erro404 from './routes/Erro404.jsx';

const router = createBrowserRouter([
  {path: '/' , 
  element: <App/>,
  errorElement: <Erro404/>,

  children: [
  {path: '/', element: <Home/>},

  {path: '/problema', element: <Problema/>},

  {path: '/solucao', element: <Solucao/>},

  {path: '/integrantes', element: <Integrantes/>}
  ]
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Outlet /> {/* Renderiza o componente correspondente à rota atual */}
    </RouterProvider>
  </React.StrictMode>
);

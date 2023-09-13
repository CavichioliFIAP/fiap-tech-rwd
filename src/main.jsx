import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Integrantes from './routes/Integrantes.jsx'
import Problema from './routes/Problema.jsx'
import Solucao from './routes/Solucao.jsx'
import Home from './routes/Home.jsx'
import Erro404 from './routes/Erro404.jsx'


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
    <App />
  </React.StrictMode>
);

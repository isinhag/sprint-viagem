// DESENVOLVEDORAS
// NOME: Esther Ramos Boochini
// NOME: Isabela da Silva Gomes
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Pagina_Pacotes/Header/Header';
import Footer from './components/Pagina_Pacotes/Footer/Footer';
import Home from './components/Home/Home';
import Faixa from './components/Pagina_Pacotes/Main/Faixa';
import { FaHome, FaCog, FaUser } from 'react-icons/fa'; // Importando ícones do react-icons;
import './App.css'; // Importando o arquivo CSS;


// Componentes para as diferentes rotas
import PassagensComponent from './components/Paginas/PassagensComponent';
import PacotesComponent from './components/Pagina_Pacotes/Main/Main';
import AtracoesComponent from './components/Paginas/AtracoesComponent';
import CruzeirosComponent from './components/Paginas/CruzeirosComponent';
import HoteisComponent from './components/Paginas/HoteisComponent';
import PerfilComponent from './components/Paginas/PerfilComponent';

function ColorSchemesExample() {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/passagens" element={<PassagensComponent />} />
        <Route path="/pacotes" element={<PacotesComponent />} />
        <Route path="/atracoes" element={<AtracoesComponent />} />
        <Route path="/cruzeiros" element={<CruzeirosComponent />} />
        <Route path="/hoteis" element={<HoteisComponent />} />
        <Route path="/perfil" element={<PerfilComponent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default ColorSchemesExample;
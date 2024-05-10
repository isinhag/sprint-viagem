import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../Assets/logo.jpg';

const Header = () => {
  return (
    <header>
      <div className="line-1">
        <ul>
          <li>
            <Link to="/passagens" className="link-container">
              <i className="fas fa-plane icon" />
              <span>Passagens</span>
            </Link>
          </li>
          <li>
            <Link to="/pacotes" className="link-container">
              <i className="fas fa-suitcase icon" />
              <span>Pacotes</span>
            </Link>
          </li>
          <li>
            <Link to="/atracoes" className="link-container">
              <i className="fas fa-map-marker-alt icon" />
              <span>Atrações</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <input type="checkbox" id="nav_check" hidden />
      <nav>
        <div className="line-1">
          <ul>
            <li>
              <Link to="/cruzeiros" className="link-container">
                <i className="fas fa-ship icon" />
                <span>Cruzeiros</span>
              </Link>
            </li>
            <li>
              <Link to="/hoteis" className="link-container">
                <i className="fas fa-hotel icon" />
                <span>Hóteis</span>
              </Link>
            </li>
            <li>
              <Link to="/perfil" className="link-container">
                <i className="fas fa-user icon" />
                <span>Perfil</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <label htmlFor="nav_check" className="hamburger">
        <div />
        <div />
        <div />
      </label>
    </header>
  );
};

export default Header;
import React from 'react';
import '../Login/login.css';
import Loogin from '../Assets/logo-login.jpg'

const Login = () => {
  return (
    <div id="container-login">
      <div className="first-column">
        <div className="container-inner">
          <div className="login-image-centered">
            <div className="login-image logo-shadow">
              <img src={Loogin} alt="Travel Adventure Logo" />
            </div>
          </div>
          <div className="content">
            <h2 className="title" style={{fontSize: '40px'}}>Faça o seu login e</h2>
            <h2 className="title" style={{fontSize: '40px'}}>voe nessa aventura</h2>
            <h2 className="title" style={{fontSize: '40px'}}>divertida conosco!</h2>
          </div>
        </div>
      </div>
      <div className="second-column">
        <div className="container-inner">
          <div className="title-and-button">
            <h2 className="title">Não tem uma conta? <span className="create-account">Crie!</span></h2>
          </div>
          <div className="form">
            <form>
              <div className="form-header">
                <div className="title">
                  <h1 className="login-title">Login</h1>
                </div>
                <div className="input-group">
                  <div className="input-box">
                    <label htmlFor="email">Email :</label>
                    <input id="email" type="email" name="email" placeholder="Digite seu email" required />
                    <div className="underline"></div>
                  </div>
                  <div className="input-box">
                    <label htmlFor="cpf">CPF :</label>
                    <input id="cpf" type="text" name="cpf" placeholder="Digite seu CPF" required />
                    <div className="underline"></div>
                  </div>
                  <div className="input-box">
                    <label htmlFor="password">Senha :</label>
                    <input id="password" type="password" name="password" placeholder="Digite sua senha" required />
                    <div className="underline"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="form-footer">
            <button className="btn small-btn">Entrar <i className="fas fa-sign-in-alt"></i></button>
            <div className="forgot-password">
              <a href="#" className='no-login-link'>Esqueci minha senha <i className="fas fa-question-circle"></i></a>
            </div>
          </div>
          <div className="social-fields">
            <div className="social-field google">
              <a href="#">
                <i className="fab fa-google"  id='icones'></i>
              </a>
            </div>
            <div className="social-field facebook">
              <a href="#">
                <i className="fab fa-facebook"  id='icones'></i>
              </a>
            </div>
            <div className="social-field apple">
              <a href="#">
                <i className="fab fa-apple" id='icones'></i>
              </a>
            </div>
          </div>
          <a href="/" className='no-login-link'>Não quero fazer login agora</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
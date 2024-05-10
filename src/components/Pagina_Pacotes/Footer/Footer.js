// Footer.js
import React from 'react';
import './footer.css'; // Verifique se o nome do arquivo CSS está correto e se está na mesma pasta que o arquivo Footer.js
import logo from '../../Assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <nav id="container-footer">
        <section className="row-footer">
          <aside className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Quem somos</a></li>
              <li><a href="#">Nossos serviços</a></li>
              <li><a href="#">Política de privacidade</a></li>
              <li><a href="#">Programa de afiliados</a></li>
            </ul>
          </aside>

          <aside className="footer-col">
            <h4>Obter ajuda</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Transporte</a></li>
              <li><a href="#">Devoluções</a></li>
              <li><a href="#">Status De Pedido</a></li>
              <li><a href="#">Opções De Pagamento</a></li>
            </ul>
          </aside>

          <aside className="footer-col">
            <img src={logo} alt="logo" />
          </aside>

          <aside className="footer-col">
            <h4>Contato</h4>
            <ContactForm />
          </aside>
        </section>
      </nav>
    </footer>
  );
};

const ContactForm = () => {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(`Email: ${email}, Message: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="email"
        placeholder="Digite o seu e-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Digite sua mensagem"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Footer;

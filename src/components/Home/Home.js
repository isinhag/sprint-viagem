import React from 'react';
import '../Home/home.css'
import banner1 from "../Assets/banner1.jpg"
import pacote1 from "../Assets/pacote1.jpg"
import pacote2 from "../Assets/pacote2.jpg"
import hotel1 from "../Assets/hotel1.jpg"
import hotel2 from "../Assets/hotel2.jpg"
import banner2 from "../Assets/banner2.jpg"
import banner3 from "../Assets/banner3.jpg"

import Header from '../Pagina_Pacotes/Header/Header';

function Home() {

  <Header/>
  return (

    

  
    <div className="container1">
      <div className="banner-1">
        <img src={banner1} alt="img-principal" />
      </div>

      {/* _________________ */}
      {/* carde-1 */}
      <div className="text-box">
        <h1>Pacotes de viagem para 2024!</h1>
      </div>

      <div className="card1-container">
        <div className="card1">
          <div className="h12">
            <h1>
              <span>Foz do Iguaçu</span>
            </h1>
            <h2>
              <span>Pacote:</span> Voo + hotel + outros*<br />
              Uma das Sete Maravilhas Naturais do Mundo,
              faz<br />
              fronteira entre Brasil, Argentina e Paraguai.<br />
              A partir de R$2.100 8 diárias
            </h2>

            <button>Mais informações</button>
          </div>

          <div className="img1">
            <img src={pacote1} alt="img" />
          </div>
        </div>

        {/* _________________ */}
        {/* card-2 */}
        <div className="card1">
          <div className="img2">
            <img src={pacote2} alt="img" />
          </div>
          <div className="h12">
            <h1>
              <span>Natal</span>
            </h1>
            <h2>
              <span>Pacote:</span> Voo + hotel + beira mar + outros*<br />
              Dunas, praias lindas e sol garantido
              praticamente o ano todo. Um dos melhores<br />
              destinos de férias do Nordeste.<br />
              A partir de R$ 2.500,00 8 diárias
            </h2>

            <button>Mais informações</button>
          </div>
        </div>
      </div>

      {/* _________________ */}
      {/* Card-3 */}
      <div className="text-box">
        <h1>Os melhores hotéis para sua viagem!</h1>
      </div>

      <div className="card1-container">
        <div className="card1">
          <div className="h12">
            <h1>
              <span>Resort La Torre</span>
            </h1>
            <h2>
              O <span>La Torre</span> fica em Porto Seguro,
              na praia do Mutá.<br />
              Ele possui seis piscinas, terraço, banheira de
              hidromassagem, sauna e academia.<br />
              R$ 780,00 para duas pessoas.
            </h2>

            <button>Mais informações</button>
          </div>

          <div className="img1">
            <img src={hotel1} alt="img" />
          </div>
        </div>

        {/* _________________ */}
        {/* Card-4 */}
        <div className="card1">
          <div className="img2">
            <img src={hotel2} alt="img" />
          </div>
          <div className="h12">
            <h1>
              <span>Hotel Fazendo Vista Alegre</span>
            </h1>
            <h2>
              R$ 730,00 para duas pessoas.
            </h2>
            <button>Mais informações</button>

            
          </div>

        </div>
      </div>

      <div>
        <div className="cruzeiro"> <img src={banner2} alt="img" /></div>
        

        <div className="text-box">
        <h1>Confira as passagens disponíveis</h1>
        </div>

        <div className="disney"><img src={banner3} alt="img" /></div>
      </div>



      
    </div>

  );
}

export default Home;


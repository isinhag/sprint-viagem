import React from 'react';
import Aviao from '../Assets/aviao-manutencao.jpg'
import '../Login/login.css'

const AtracoesComponent = () => {
  return (
    <div>
     <br />
      <br />
      <br />
      <div className='centro'>
        <img src={Aviao} alt="" className='img-manutencao' />
      </div>
      <h1 className='manutencao'>Site em Manutenção...</h1>
      <br />
      <br />
      <br />
      <br />
      {/* Adicione o conteúdo da página aqui */}
    </div>
  );
};

export default AtracoesComponent;
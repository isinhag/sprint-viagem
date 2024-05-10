import React, {useEffect} from 'react';
import "./main.css";


import  Faixa from './Faixa'
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'

// import Aos from "aos"
// import 'aos/dist/aos.css'


 <Faixa/> 

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Las Vegas',
    location: 'Nevada - Estados Unidos',
    grade: 'PREÇO:',
    fees: 'R$ 7.500',
    description: "Las Vegas, localizada no deserto de Mojave, em Nevada, é uma cidade turística famosa pela vida noturna vibrante, com cassinos 24 horas e outras opções de entretenimento."
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Dubai',
    location: 'Dubai - Emirados Árabes Unidos',
    grade: 'PREÇO:',
    fees: 'R$ 9.600',
    description: "Dubai é uma cidade e um emirado dos Emirados Árabes Unidos conhecida pelos shoppings de luxo. Burj Khalifa, uma torre de 830 metros de altura."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Paris',
    location: 'Paris - França',
    grade: 'PREÇO:',
    fees: 'R$ 11.200',
    description: "Sua paisagem urbana do século XIX é cortada por avenidas largas e pelo rio Sena. Conhecida por monumentos como a Torre Eiffel e a Catedral de Notre-Dame."
  },
]

const Data2 = [
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Rio de Janeiro',
    location: 'Rio de Janeiro - Brasil',
    grade: 'PREÇO:',
    fees: 'R$ 2.350',
    description: 'Aproveite uma deliciosa viagem nessas férias e venha conhecer as praias do Rio De Janeiro. '
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Natal',
    location: 'Paraná - Brasil',
    grade: 'PREÇO:',
    fees: 'R$ 3.500',
    description: 'Dunas, praias lindas e sol garantido praticamente o ano todo. Um dos melhores destinos de férias do Nordeste.    '
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Foz do Iguaçu',
    location: 'Paraná - Brasil',
    grade: 'PREÇO:',
    fees: 'R$ 3.800',
    description: 'Uma das Sete Maravilhas Naturais do Mundo, faz fronteira entre Brasil, Argentina e Paraguai. '
  },
]

const Data3 = [
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Toronto',
    location: 'Toronto - Canadá',
    grade: 'PREÇO:',
    fees: 'R$ 6.400',
    description: 'Toronto, a capital da província de Ontário, é uma grande cidade canadense localizada ao longo da costa noroeste do Lago Ontário, conhecido pelo seu tamanho. '
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Grécia',
    location: 'Grécia - Balcãs',
    grade: 'PREÇO:',
    fees: 'R$ 6.800',
    description: 'A Grécia, com milhares de ilhas espalhadas pelos mares Egeu e Jônico e conhecida por suas praias, como Santorini, com suas areias escuras, suas festividades.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Escócia',
    location: 'Escócia - Reino Unido',
    grade: 'PREÇO:',
    fees: 'R$ 7.800',
    description: 'A Escócia é um país com uma cultura rica em detalhes e em costumes, além das suas belíssimas paisagens naturais e castelos medievais. '
  },
]

export const Main = () => {

    // use react hooks to add a scroll animation
    // useEffect(()=>{
    //   Aos.init({duration: 2000})
    // }, []) 

    <Faixa/>

  return (


    
   

    <section className='main container section'>


      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Lugares mais visitados</h3>
      </div>

      <div className="secContent grid">

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
            return ( 
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small><br></br>por pessoa</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETALHES <HiOutlineClipboardCheck className="icon" />
                  </button>


                </div>

              </div>
            )
          })
        }
        
      </div>

      <br />

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Nacionais</h3>
      </div>

      <div className="secContent grid">

        {
          Data2.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
            return ( 
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small><br></br>por pessoa</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETALHES <HiOutlineClipboardCheck className="icon" />
                  </button>


                </div>

              </div>
            )
          })
        }
        
      </div>

      <br />

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Internacionais</h3>
      </div>

      <div className="secContent grid">

        {
          Data3.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
            return ( 
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small><br></br>por pessoa</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETALHES <HiOutlineClipboardCheck className="icon" />
                  </button>


                </div>

              </div>
            )
          })
        }
        
      </div>

    



    </section>

    
    



  )
}






 


export default Main;


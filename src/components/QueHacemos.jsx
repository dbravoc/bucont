import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import bucont from '../assets/img/BUCONT1.png';

const RotatingText = () => {
  const texts = ['Websites', 'Ecommerce', 'Asistentes GPT', 'ERP'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <h1>
      {texts[currentTextIndex]}
    </h1>
  );
};

export default function Inicio() {
  return (
    <>
        <div className="flex flex-col justify-center items-center">

          <div className="tracking-tight font-bold text-cyan-900 text-3xl">
            ¿Qué hacemos?.
          </div>
          <div className=" tracking-tight  text-cyan-900 text-xl py-4 pb-10 text-center">
          Construimos productos digitales a medida, inspirados en la visión de negocio de nuestros clientes          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 gap-y-5 justify-center items-start">

          <div className='rounded-md rounded-bl-3xl px-3 py-2 text-center text-xl font-semibold shadow-sm bg-cyan-300 text-cyan-900'>
          Resolvemos la necesidad real del cliente
          </div>
          <div className='rounded-md rounded-bl-3xl px-3 py-2 text-center text-xl font-semibold shadow-sm bg-cyan-300 text-cyan-900'>
          Desarrollamos productos excepcionales          
          </div>
          <div className='rounded-md rounded-bl-3xl px-3 py-2 text-center text-xl font-semibold shadow-sm bg-cyan-300 text-cyan-900'>
          Nos comprometemos con la continuidad de nuestros productos
          </div>
          
        </div>
  </>

  );
}

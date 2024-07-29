import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import bucont from '../assets/img/BUCONT1.png';

const RotatingText = () => {
  const texts = 
  [
  'Eficiencia',
  'Velocidad', 
  'Continuidad',

  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1200);

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
        <div className="flex flex-col justify-center items-center">

          <div className="tracking-tight font-bold text-cyan-100 text-6xl">
            <span className='text-cyan-300'>bucont</span>.com
          </div>
          <div className=" tracking-tight  text-cyan-100 text-md py-4 text-center">
            Tu oficina <span className='text-yellow-400 font-semibold'>remota</span> de soluciones<span className='text-2xl font-bold'> tecnológicas</span> 
          </div>
          <div className='rounded-md rounded-bl-3xl px-3 py-2 text-center text-lg font-semibold shadow-sm bg-yellow-400 text-cyan-900'>
          <RotatingText />
          </div>
        </div>
  );
}

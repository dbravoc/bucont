import { useState, useEffect } from 'react';
import './css/Inicio.css';
import logo from '../assets/img/logos/logo bucont.png'
import GIFBucont from '../assets/img/GIF Bucont.gif';


const RotatingText = () => {
  const texts = 
  [
  'Software para negocios',
  'Marketing digital', 
  'Sitios web',
  'Soluciones a medida'

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
    <>
    <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between'>
    <div>
        <div className="flex flex-col justify-center items-center">
          <div className="tracking-tight font-bold text-cyan-100 text-6xl">
          <img src={logo} alt="Imagen Logo" className='logo-inicio' />
          </div>
          <div className=" tracking-tight  text-cyan-100 text-md py-4 text-center">
            Tu oficina <span className='text-yellow-400 font-semibold'>remota</span> de soluciones digitales
          </div>
          <div className='rounded-md rounded-bl-3xl px-3 py-2 text-center text-lg font-semibold shadow-sm bg-yellow-400 text-cyan-900'>
          <RotatingText />
          </div>  
        </div>
      </div>
      <div>
          <img className='w-52 h-auto' src={GIFBucont} alt="" />
      </div>
      </div>
    </>
  );
}

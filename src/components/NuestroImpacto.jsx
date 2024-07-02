import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardFast, faRotateRight, faSeedling } from '@fortawesome/free-solid-svg-icons';



export default function Inicio() {
  return (
    <>
        <div className="flex flex-col justify-center items-center">

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-20 gap-x-10 gap-y-10 justify-center items-center">
        
          
        <div className='rounded-md rounded-bl-3xl px-3 py-2 text-center shadow-md border-yellow-300 bg-gradient-to-b from-cyan-100 via-cyan-100 to-cyan-50 text-cyan-900'>
        <FontAwesomeIcon className='text-3xl' icon={faSeedling} />
        <br />Maximizamos la <strong className='text-xl'>eficiencia</strong> de tu inversión en proyectos tecnologicos.
        </div>
        <div className='rounded-md rounded-bl-3xl px-3 py-2 text-center shadow-md border-yellow-300 bg-gradient-to-b from-cyan-100 via-cyan-100 to-cyan-50 text-cyan-900'>
        <FontAwesomeIcon className='text-3xl' icon={faForwardFast} />  
        <br />Aumentamos la <strong className='text-xl'>velocidad</strong> de tus proyectos.
        </div>
        <div className='rounded-md rounded-bl-3xl px-3 py-2 text-center shadow-md border-yellow-300 bg-gradient-to-b from-cyan-100 via-cyan-100 to-cyan-50 text-cyan-900'>
        <FontAwesomeIcon className='text-3xl' icon={faRotateRight} />
        <br />Garantizamos <strong className='text-xl'>continuidad operacional</strong> en todas nuestras soluciones. 
        </div>

          
        </div>
        </div>

  </>

  );
}

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import bucont from '../assets/img/BUCONT1.png';


export default function Inicio() {
  return (
    <>
        <div className="flex flex-col justify-center items-center">

          <div className="tracking-tight font-bold text-cyan-900 text-3xl">
            ¿Qué hacemos?
          </div>
          <div className=" tracking-tight  text-cyan-900 text-md py-4 pb-10 text-center mx-10">
          <strong>Transformamos</strong> digitalmente medianas empresas, <strong>creando</strong> software a medida.
          </div>
        <div className="tracking-tight font-bold text-cyan-900 text-3xl my-5">
            Nuestro impacto
        </div>
        <div className="grid lg:grid-cols-2 lg:mx-20 grid-cols-1 gap-x-10 gap-y-10 justify-center items-start">
        
          
          <div className='rounded-md rounded-bl-3xl px-3 py-2 text-center shadow-md border-yellow-300  text-cyan-900'>
          <strong>Creamos nuevos canales de venta</strong> para ampliar las oportunidades de ingresos y alcance de tu negocio.         
          </div>
          <div className='rounded-md rounded-bl-3xl px-3 py-2 text-center shadow-md border-yellow-300  text-cyan-900'>
          <strong>Creamos soluciones que optimizan la eficiencia de tu negocio</strong> para maximizar la productividad y reducir costos
          </div>
          
        </div>
        </div>

  </>

  );
}

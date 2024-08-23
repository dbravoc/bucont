import React, { useState, useEffect, useRef } from 'react';
import demoVideoAsistente from '../assets/img/laboraljuridico/Demo laboraljuridico.mov';
import demoVideoLeTrip from '../assets/img/letriplab/Demo letrip.mov';
import demoVideoMisterios from '../assets/img/misteriosdelelqui/videomisterios.mov'
import { CheckIcon } from '@heroicons/react/20/solid';
import './css/Portafolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faEarlybirds } from '@fortawesome/free-brands-svg-icons';


const solutions = [
  {
    title: 'PLAN BASIC',
    description: 'Enfocado en negocios que están comenzando a digitalizarse ',
    features: [
        'Marketing digital básico',
        'E-Commerce Shopify',
        'Pasarelas de pago',
        'Sitios dinámicos'
      ],
      icon: <FontAwesomeIcon icon={faEarlybirds} />,

  },
  {
    title: 'PLAN CORE',
    description: 'Para negocios con mayor demanda y necesidades de digitalización',
    features: [
      'Marketing digital avanzado',
      'E-Commerce + Inventario personalizado',
      'Sistema de reservas hotelería PMS',
      'Micro-Apps'
    ],
    icon: <FontAwesomeIcon icon={faGlobe} />,

  },
];

export default function Portafolio() {
  const videoRefAsistente = useRef(null);
  const videoRefLeTrip = useRef(null);

  useEffect(() => {
    if (videoRefAsistente.current) {
      videoRefAsistente.current.playbackRate = 2.0; // Set video playback speed to double for Asistente
    }

    if (videoRefLeTrip.current) {
      videoRefLeTrip.current.playbackRate = 2.0; // Set video playback speed to double for Le Trip
    }
  }, []);

  return (
    <div className="py-16 px-6">
      <div className="mx-auto">
        <div className="mx-auto text-left">
          <div className="tracking-tight font-bold text-cyan-900 text-3xl text-center pb-10">Nuestros productos</div>
        </div>
        {solutions.map((solution, index) => (
          <div key={index} className="mx-auto max-w-2xl rounded-3xl lg:mx-0 lg:flex lg:max-w-none">
            <div className="px-10 lg:flex-auto">
              <div className='flex flex-col lg:grid lg:grid-cols-5 gap-x-10'>
                <div className='col-span-3 lg:p-10'>
                <div className='text-5xl flex justify-left items-center text-cyan-700'>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">{solution.title}</h3>
                  <p className="mt-6 text-left text-base leading-7 text-gray-900">{solution.description}</p>
                  <div className="mt-6 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-cyan-900">Acceso a:</h4>
                  </div>
                  <div className="h-px flex-auto bg-gray-100" />
                  <ul role="list" className="mt-8 grid grid-cols-1 gap-0 text-sm leading-6 text-gray-900 sm:grid-cols-1">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-cyan-900" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import demoVideoAsistente from '../assets/img/laboraljuridico/Demo laboraljuridico.mov';
import demoVideoLeTrip from '../assets/img/letriplab/Demo letrip.mov';

import { CheckIcon } from '@heroicons/react/20/solid';

const solutions = [
  {
    title: 'Asistente jurídico GPT',
    description: 'Resuelve automáticamente consultas jurídicas a usuarios finales que necesiten asistencia de un abogado ',
    features: [
      'Respuestas automáticas en base a prompts personalizados',
      'Calificación de Leads',
      'Bases de conocimiento personalizadas',
      'Interfaz amigable',
      'Confidencialidad y seguridad de los datos'
    ],
    videoUrl: demoVideoAsistente,
    visitLink: 'https://laboraljuridico.cl/'
  },
  {
    title: 'Ecosistema de turismo deportivo',
    description: 'Marketplace de experiencias deportivas que conecta operadores turísticos con aficionados de deportes outdoor',
    features: [
      'Integración con pasarelas de pago',
      'Reservas online',
      'Plataforma multilenguaje',
      'Sistemas de calificación de operadores y aficionados',
      'Interfaz personalizada según intereses deportivos'
    ],
    videoUrl: demoVideoLeTrip,
    visitLink: 'https://letriplab.com/'
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
          <div className="tracking-tight font-bold text-cyan-900 text-3xl text-center pb-10">Últimos productos desarrollados</div>
        </div>
        {solutions.map((solution, index) => (
          <div key={index} className="mx-auto max-w-2xl rounded-3xl lg:mx-0 lg:flex lg:max-w-none">
            <div className="px-10 lg:flex-auto">
              <div className='flex flex-col lg:grid lg:grid-cols-5 gap-x-10'>
                <div className='col-span-3 lg:p-10'>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">{solution.title}</h3>
                  <p className="mt-6 text-left text-base leading-7 text-gray-900">{solution.description}</p>
                  <div className="mt-6 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-cyan-900">Características</h4>
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
                <div className='py-0 col-span-2 flex justify-center items-center'>
                  <a href={solution.visitLink} target="_blank">
                  <div className="w-full max-w-md flex-shrink-0">
                    <div className="flex rounded-2xl text-center justify-center">
                      {solution.title.includes('Asistente') ? (
                        <video ref={videoRefAsistente} className='rounded-3xl w-auto h-80' src={solution.videoUrl} autoPlay loop muted />
                      ) : (
                        <video ref={videoRefLeTrip} className='rounded-3xl w-auto h-80' src={solution.videoUrl} autoPlay loop muted />
                      )}
                    </div>
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
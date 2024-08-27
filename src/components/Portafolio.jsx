import React, { useState, useEffect, useRef } from 'react';
import demoVideoAsistente from '../assets/img/laboraljuridico/Demo laboraljuridico.mov';
import demoVideoLeTrip from '../assets/img/letriplab/Demo letrip.mov';
import demoVideoMisterios from '../assets/img/misteriosdelelqui/videomisterios.mov'
import { CheckIcon } from '@heroicons/react/20/solid';
import './css/Portafolio.css';
const solutions = [
  {
    title: 'E-Commerce con inventario',
    description: 'Plataforma de E-Commerce con administración de inventario y pasarelas de pago',
    features: [
      'Sitio e-commerce',
      'Carrito de compra',
      'Pasarelas de pago',
      'Inventario',
      'Punto de venta en tienda'
    ],
    videoUrl: demoVideoLeTrip,
    visitLink: 'https://letriplab.com/'
  },
  {
    title: 'Sistema de reservas hotelero PMS',
    description: 'Ahorra dinero en comisiones y utiliza tu propio sistema de reservas para tu hotel ',
    features: [
      'Motor de reservas para huéspedes',
      'Panel de administración para anfitriones',
      'Conexión con pasarelas de pago',
      'Conexión con Channel Manager'
    ],
    videoUrl: demoVideoMisterios,
    visitLink: 'https://huesped.bucont.com/'
  },
  {
    title: 'Sitio dinámico con asistente Open AI',
    description: 'Aumenta el tráfico e interacción con tu sitio web con un asistente virtual potenciado con Chat GPT de Open AI',
    features: [
      'Respuestas automáticas en base a prompts personalizados',
      'Generador de Leads',
      'Bases de conocimiento personalizadas',
      'Interfaz amigable',
      'Confidencialidad y seguridad de los datos'
    ],
    videoUrl: demoVideoAsistente,
    visitLink: 'https://laboraljuridico.cl/'
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
                    <div className="my-4 rounded-full bg-black">

                      {solution.title.includes('Asistente') ? (
                        <video ref={videoRefAsistente} className='rounded-full w-auto h-80' src={solution.videoUrl} autoPlay loop muted />
                      ) : (
                        <video ref={videoRefLeTrip} className='rounded-full w-auto h-80' src={solution.videoUrl} autoPlay loop muted />
                      )}
                    </div>
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
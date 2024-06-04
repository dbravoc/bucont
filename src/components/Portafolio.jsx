import React, { useState, useEffect } from 'react';
import asistente1 from '../assets/img/laboraljuridico/Inicio.png';
import asistente2 from '../assets/img/laboraljuridico/Lead.png';
import asistente3 from '../assets/img/laboraljuridico/Chat.png';
import asistente4 from '../assets/img/laboraljuridico/Logo.png';
import letrip1 from '../assets/img/letriplab/Home.png';
import letrip2 from '../assets/img/letriplab/Experiencia.png';
import letrip3 from '../assets/img/letriplab/Multilenguaje.png';
import letrip4 from '../assets/img/letriplab/Logo.jpg';

import { CheckIcon } from '@heroicons/react/20/solid';

const asistenteImages = [asistente4, asistente1, asistente2, asistente3];
const letripImages = [letrip4, letrip1, letrip2, letrip3];

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
    imageUrl: '',
    visitLink: 'https://laboraljuridico.cl/'
  },
  {
    title: 'Ecosistema digital de turismo deportivo',
    description: 'Marketplace de experiencias deportivas que conecta operadores turísticos con aficionados de deportes outdoor',
    features: [
      'Integración con pasarelas de pago',
      'Reservas online',
      'Plataforma multilenguaje',
      'Sistemas de calificación de operadores y aficionados',
      'Interfaz personalizada según intereses deportivos'
    ],
    imageUrl: '',
    visitLink: 'https://letriplab.com/'
  },
];

export default function Portafolio() {
  const [currentAsistenteImage, setCurrentAsistenteImage] = useState(0);
  const [currentLetripImage, setCurrentLetripImage] = useState(0);
  const [asistenteOpacity, setAsistenteOpacity] = useState(1);
  const [letripOpacity, setLetripOpacity] = useState(1);

  useEffect(() => {
    const asistenteInterval = setInterval(() => {
      setAsistenteOpacity(0);
      setTimeout(() => {
        setCurrentAsistenteImage(prevImage => (prevImage + 1) % asistenteImages.length);
        setAsistenteOpacity(1);
      }, 300); // Tiempo de la transición
    }, 1200); // Cambia la imagen cada 3 segundos para asistente

    const letripInterval = setInterval(() => {
      setLetripOpacity(0);
      setTimeout(() => {
        setCurrentLetripImage(prevImage => (prevImage + 1) % letripImages.length);
        setLetripOpacity(1);
      }, 300); // Tiempo de la transición
    }, 1200); // Cambia la imagen cada 3 segundos para letrip

    return () => {
      clearInterval(asistenteInterval);
      clearInterval(letripInterval);
    };
  }, []);

  solutions[0].imageUrl = asistenteImages[currentAsistenteImage];
  solutions[1].imageUrl = letripImages[currentLetripImage];

  return (
    <div className="py-16 px-6">
      <div className="mx-auto">
        <div className="mx-auto text-left">
          <div className="tracking-tight font-bold text-cyan-900 text-3xl text-center">Últimos proyectos desarrollados</div>
        </div>
        {solutions.map((solution, index) => (
          <div key={index} className="mx-auto max-w-2xl rounded-3xl lg:mx-0 lg:flex lg:max-w-none">
            <div className="lg:p-10 lg:flex-auto">
              <div className='flex flex-col lg:grid lg:grid-cols-5 gap-x-10'>
                <div className='col-span-3 lg:p-10'>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">{solution.title}</h3>
                  <p className="mt-6 text-justify text-base leading-7 text-gray-900">{solution.description}</p>
                  <div className="mt-6 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-cyan-900">Características</h4>
                  </div>
                  <div className="h-px flex-auto bg-gray-100" />
                  <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-900 sm:grid-cols-1">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-cyan-900" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={solution.visitLink} className="mt-6 block w-full rounded-md bg-cyan-100 px-3 py-2 text-center text-sm font-semibold text-cyan-900 shadow-sm hover:bg-cyan-300 hover:text-cyan-900">
                    Visitar
                  </a>
                </div>
                <div className='py-10 col-span-2 flex justify-center items-center'>
                  <div className="w-full max-w-md flex-shrink-0">
                    <div className="flex rounded-2xl text-center justify-center">
                      <div className="mx-auto transition-opacity duration-300" style={{ opacity: solution.title.includes('Asistente') ? asistenteOpacity : letripOpacity }}>
                        <img className='rounded-3xl' src={solution.imageUrl} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

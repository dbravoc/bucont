import demoGifAsistente from '../assets/img/GIF Asistente IA.gif';
import demoGifLeTrip from '../assets/img/GIF Marketplace.gif';
import demoGifMisterios from '../assets/img/GIF Gestor de reservas.gif';
import { CheckIcon } from '@heroicons/react/20/solid';
import './css/Portafolio.css';

const solutions = [
  {
    title: 'Tienda online',
    description: 'Mejora el crecimiento de tu negocio con nuestro E-Commerce',
    features: [
      'Sitio E-Commerce',
      'Carrito de compra',
      'Pasarelas de pago',
      'Gestión de inventario',
      'Punto de venta en tienda'
    ],
    gifUrl: demoGifLeTrip,
    visitLink: 'https://comprador.bucont.com'
  },
  {
    title: 'Gestor de reservas',
    description: 'Ahorra dinero en comisiones y utiliza tu propio sistema de reservas para tu hotel',
    features: [
      'Motor de reservas para huéspedes',
      'Panel de administración para anfitriones',
      'Conexión con pasarelas de pago',
      'Conexión con PMS y Channel Manager'
    ],
    gifUrl: demoGifMisterios,
    visitLink: 'https://huesped.bucont.com/'
  },
  {
    title: 'Asistente IA',
    description: 'Aumenta el tráfico e interacción con tu sitio web con un asistente virtual potenciado con Chat GPT',
    features: [
      'Respuestas automáticas en base a prompts personalizados',
      'Generador de Leads',
      'Bases de conocimiento personalizadas',
      'Interfaz amigable',
      'Confidencialidad y seguridad de los datos'
    ],
    gifUrl: demoGifAsistente,
    visitLink: 'https://asistente.bucont.com/'
  },
];

export default function Portafolio() {
  return (
    <div className="py-16 px-6">
      <div className="mx-auto">
        <div className="mx-auto text-left">
          <div className="tracking-tight font-bold text-cyan-900 text-3xl text-center pb-10">Portafolio</div>
        </div>
        {solutions.map((solution, index) => (
          <div key={index} className="mx-auto max-w-2xl rounded-3xl lg:mx-0 lg:flex lg:max-w-none">
            <div className="px-10 lg:flex-auto">
              <div className='flex flex-col lg:grid lg:grid-cols-5 gap-x-10'>
                <div className='col-span-3 lg:p-10'>
                  <a href={solution.visitLink} target="_blank" className="text-xl font-bold tracking-tight text-gray-900">{solution.title}</a>
                  <p className="mt-6 text-left text-base leading-7 text-gray-900">{solution.description}</p>
                  <div className="mt-6 flex items-center gap-x-4"></div>
                  <div className="h-px flex-auto bg-gray-100" />
                  <ul role="list" className="grid grid-cols-1 gap-0 text-sm leading-6 text-gray-900 sm:grid-cols-1">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-cyan-900" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {/*<div className='py-0 col-span-2 flex justify-center items-center'>
                  <a href={solution.visitLink} target="_blank" rel="noopener noreferrer">
                    <div className="w-full max-w-md flex-shrink-0">
                      <div className="flex rounded-2xl text-center justify-center">
                        <div className="my-4 rounded-full bg-black">
                          <img className='w-full h-auto' src={solution.gifUrl} alt={solution.title} />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>*/}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
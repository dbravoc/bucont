import cotizador from '../assets/img/Lawitec - Frame 13.jpg'
import asistente from '../assets/img/Lawitec - Frame 14.jpg'
import letrip from '../assets/img/Lawitec - Frame 15.png'


import { CheckIcon } from '@heroicons/react/20/solid'

const solutions = [
  {
    title: 'Cotizador web de proyectos solares',
    description: 'Herramienta web que permite a los visitantes del sitio web oficial obtener estimaciones sobre los costos y beneficios de implementar energía solar en sus hogares.',
    features: [
      'Integrado al sitio web oficial',
      'Cotizador automático con parámetros personalizados',
      'Fuente de leads calificados',
      'Eficiencia en funnel de ventas',
      'Diseño a medida',
      'Táctica de marketing'    
    ],
    imageUrl: cotizador,
    visitLink: '#'
  },
  {
    title: 'Asistente jurídico GPT para estudio de abogados',
    description: 'Herramienta para la generación de Sales Qualified Lead. Por medio de un asistente GPT, se resuelven consultas jurídicas para luego ser redirigidas con los abogados del estudio. De esta manera, se entrega un prospecto de cliente con mayor probabilidad de cierre.   ',
    features: [
      'Respuesta Automatizada a Consultas',
      'Pre-Calificación de Leads',
      'Bases de conocimiento personalizadas',
      'Interfaz amigable',
      'Base de Sales Qualified Leads',
      'Confidencialidad y seguridad de los datos'
    ],
    imageUrl: asistente,
    visitLink: '#'
  },
  {
    title: 'Marketplace de experiencias deportivas y naturaleza',
    description: 'Aplicación enfocado en la compra-venta de servicios de turismos relacionados con experiencias deportivas y naturaleza',
    features: [
      'Integración con pasarelas de pago',
      'Reservas online',
      'Sistemas de calificación de compradores y vendedores',
      'Interfaz Personalizable según intereses Deportivos'
    ],
    imageUrl: letrip,
    visitLink: '#'
  }
];

export default function Portafolio() {
  return (
    <div className="bg-white py-24 px-6">
      <div className="mx-auto">
        <div className="mx-auto text-left">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Portafolio de soluciones construidas para nuestros clientes</h2>
        </div>
        {solutions.map((solution) => (
          <div key={solution.title} className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">{solution.title}</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {solution.description}
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-emerald-600">Características</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {solution.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-emerald-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full max-w-md flex-shrink-0">
              <div className="flex rounded-2xl py-10 text-center justify-center">
                <div className="mx-auto">
                  <img className='rounded-3xl' src={solution.imageUrl} alt="" />
                  <a
                    href={solution.visitLink}
                    className="mt-10 block w-full rounded-md bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
                  >
                    Visitar
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

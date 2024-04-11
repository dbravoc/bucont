import cotizador from '../assets/img/Bucont - Frame 13.jpg'
import asistente from '../assets/img/Bucont - Frame 14.jpg'
import letrip from '../assets/img/Bucont - Frame 15.png'


import { CheckIcon } from '@heroicons/react/20/solid'

const solutions = [

  {
    title: 'Asistente jurídico GPT para estudio de abogados',
    description: 'Herramienta para la generación de leads. Por medio de un asistente GPT, se resuelven consultas jurídicas para luego ser redirigidas con los abogados del estudio. De esta manera, se entrega un prospecto de cliente con mayor probabilidad de cierre.   ',
    features: [
      'Respuesta Automatizada a Consultas',
      'Pre-Calificación de Leads',
      'Bases de conocimiento personalizadas',
      'Interfaz amigable',
      'Base de Sales Qualified Leads',
      'Confidencialidad y seguridad de los datos'
    ],
    imageUrl: asistente,
    visitLink: 'https://laboraljuridico.cl/'
  },
  {
    title: 'Marketplace de experiencias deportivas outdoor',
    description: 'Aplicación enfocado en la compra-venta de servicios de turismos relacionados con experiencias deportivas y naturaleza',
    features: [
      'Integración con pasarelas de pago',
      'Reservas online',
      'Sistemas de calificación de compradores y vendedores',
      'Interfaz personalizada según intereses deportivos'
    ],
    imageUrl: letrip,
    visitLink: 'https://letriplab.com/'
  },

];

export default function Portafolio() {
  return (
    <div className="py-16 px-6">
      <div className="mx-auto">
        <div className="mx-auto text-left">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Últimos proyectos desarrollados</h2>
        </div>

        {solutions.map((solution) => (
          <div key={solution.title} className="mx-auto max-w-2xl rounded-3xl  lg:mx-0 lg:flex lg:max-w-none">
            
            <div className="lg:p-10 lg:flex-auto">
                            
              <div className='flex flex-col lg:grid lg:grid-cols-5 gap-x-10'>

              <div  className='col-span-3 lg:p-10'>
              <h3 className="text-xl font-bold tracking-tight text-gray-900">{solution.title}</h3>

              <p className="mt-6  text-justify text-base leading-7 text-gray-900 ">
                {solution.description}
              </p>
              <div className="mt-6 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-cyan-00">Características</h4>
              </div>
              <div className="h-px flex-auto bg-gray-100" />
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-900 sm:grid-cols-1"
              >
                {solution.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-cyan-900" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
               href={solution.visitLink}
               className="mt-6 block w-full rounded-md bg-cyan-100 px-3 py-2 text-center text-sm font-semibold text-cyan-900 shadow-sm hover:bg-cyan-300 hover:text-cyan-900"
              >
               Visitar
              </a>
              </div>

            <div className='py-10 col-span-2 flex justify-center items-center  '>
            <div className="w-full max-w-md flex-shrink-0">
              <div className="flex rounded-2xl text-center justify-center">
                <div className="mx-auto">
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
  )
}

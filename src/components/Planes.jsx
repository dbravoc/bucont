import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faEarlybirds } from '@fortawesome/free-brands-svg-icons';
import { CheckIcon } from '@heroicons/react/20/solid';

const features = [

  {
    name: 'PLAN BASIC',
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
    name: 'PLAN CORE',
    description: 'Para negocios con mayor demanda y necesidades de digitalización',
    features: [
      'Marketing digital avanzado',
      'E-Commerce + Inventario personalizado',
      'Sistema de reservas hotelería PMS',
      'Micro-Apps'
    ],
    icon: <FontAwesomeIcon icon={faGlobe} />,

  },
]
  
  export default function Servicios() {
    return (
      <div className="">
        <div className="mx-auto grid grid-cols-1 gap-x-8 px-6 py-1">
          <div>
          <div className="tracking-tight font-bold text-cyan-900 text-3xl text-center">
            Nuestros planes
          </div>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-4 p-10">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col justify-center items-center lg:grid lg:grid-cols-[1fr_9fr] border-t border-gray-200 pt-4">
                  <div className='text-5xl flex justify-left items-center text-cyan-700'>
                    {feature.icon}
                  </div>
                  <div>
                    <dt className="mt-2 text-xl lg:text-left text-center font-bold text-gray-700">{feature.name}</dt>
                    <dd className="mt-2 text-center lg:text-left text-sm text-gray-500">{feature.description}</dd>
                    <p className="mt-2 font-semibold text-center lg:text-left text-sm text-gray-900">Tendrás acceso a:</p>
                    <ul role="list" className="mt-2 grid grid-cols-1 gap-0 text-sm leading-6 text-gray-900 sm:grid-cols-1">
                    {feature.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-cyan-900" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  </div>
                  
                </div>
              ))}
            </dl>
          </div>

          
           </div>
      </div>
    )
  }
  
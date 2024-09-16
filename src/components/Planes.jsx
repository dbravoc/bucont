import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faGlobe, faLightbulb, faStore } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import { CheckIcon } from '@heroicons/react/20/solid';

const features = [

  {
    name: 'Software para negocios',
    description: 'Desde 8 UF mensual + IVA',
    features: [
      'Tiendas online personalizadas',
      'Carrito de compra',
      'Gestión de reservas online',
      'Pasarela de pago',
      'Asistentes con Inteligencia Artificial',
      'Actualizaciones y soporte continuo',
      'Contrato mínimo 6 meses',

    ],
    icon: <FontAwesomeIcon icon={faStore} />
  },
  {
    name: 'Marketing digital',
    description: 'Desde 6 UF mensual + IVA',
    features: [
      'Estrategias SEO/SEM optimizadas en Google',
      'Campañas publicitarias efectivas en Google Ads',
      'Reportes con Google Analytics',
      'Actualizaciones y soporte continuo',
      'Contrato mínimo 6 meses',

    ],
    icon: <FontAwesomeIcon icon={faBullhorn} />
  },
  {
    name: 'Sitio web',
    description: 'Desde 8 UF por única vez + IVA',
    features: [
      'El código es tuyo',
      'Diseño desktop y mobile',
      'Desarrollo (no usamos WordPress)',
      'Landing Page',
      'Conexión con WhatsApp',
      'Conexión con Hosting + Dominio',
      'Actualizaciones y soporte continuo',
    ],
    icon: <FontAwesomeIcon icon={faGlobe} />
  },
  {
    name: 'Consultoría estratégica personalizada',
    description: '13 UF por programa + IVA',
    features: [
      'Herramientas de inteligencia artificial para tu negocio',
      'Metodologías innovación de productos de software',
      'Transformación digital y metodologías ágiles',
      'Construye tu customer journey',
      'Modelo de negocios y estructura financiera',
      'Sesiones uno a uno',
      '8 horas cronológicas por programa',

    ],
    icon: <FontAwesomeIcon icon={faLightbulb} />
  }
]
  
  export default function Servicios() {
    return (
      <div className="">
        <div className="mx-auto grid grid-cols-1 gap-x-8 py-1">
          <div>
          <div className="tracking-tight font-bold text-cyan-50 text-3xl text-center">
            SERVICIOS
          </div>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-4 p-10">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col justify-center items-center lg:grid lg:grid-cols-[1fr_9fr] border-t border-gray-200 pt-4">
                  <div className='text-5xl flex justify-left items-center text-yellow-500'>
                    {feature.icon}
                  </div>
                  <div>
                    <dt className="mt-2 text-xl lg:text-left text-center font-bold text-yellow-500">{feature.name}</dt>
                    <dd className="mt-2 text-center lg:text-left text-sm text-cyan-500">{feature.description}</dd>
                    <ul role="list" className="mt-2 grid grid-cols-1 gap-0 text-sm leading-6 text-cyan-50 sm:grid-cols-1">
                    {feature.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-yellow-50" aria-hidden="true" />
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
  
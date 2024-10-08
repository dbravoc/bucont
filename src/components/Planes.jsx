import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faBullhorn, faCalendarAlt, faChalkboardUser, faGlobe, faLightbulb, faStore } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import { CheckIcon } from '@heroicons/react/20/solid';

const features = [

  {
    name: 'E-STORE',
    description: 'Desde 8 UF mensual + IVA',
    features: [
      'Tienda Virtual E-Commerce',
      'Carrito de compra',
      'Pasarela de pago ',
      'Recomendaciones crosselling',
      'Notificaciones por email automáticas',
      'Ingreso de ventas manuales',
      'Administración de stock',
      'Administración de productos',
      'Administración de ventas',
      'Actualizaciones y soporte continuo',
      'Contrato mínimo 6 meses',


    ],
    
    icon: <FontAwesomeIcon icon={faStore} />
  },
  {
    name: 'E-BOOKING',
    description: 'Desde 8 UF mensual + IVA',
    features: [
      'Sitio de Reservas',
      'Carrito de compra',
      'Pasarela de pago ',
      'Notificaciones por email automáticas',
      'Administración de reservas',
      'Administración de ventas',
      'Actualizaciones y soporte continuo',
      'Contrato mínimo 6 meses',


    ],
    
    icon: <FontAwesomeIcon icon={faCalendarAlt} />
  },
  {
    name: 'AI ASSISTANT',
    description: 'Desde 8 UF mensual + IVA',
    features: [
      'Diseño del asistente a medida',
      'Ingeniería de Prompt',
      'Integración con OpenAI',
      'Desarrollo Backend',
      'Integración con sistema cliente',
      'Actualizaciones y soporte continuo',
      'Contrato mínimo 6 meses',


    ],
    
    icon: <FontAwesomeIcon icon={faChalkboardUser} />
  },
  {
    name: 'MARKETING DIGITAL',
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
    name: 'SITIO WEB PERSONALIZADO',
    description: 'Desde 8 UF por única vez + IVA',
    features: [
      'One Page',
      'Diseño personalizado mobile y desktop',
      'Desarrollo propio',
      'Landing Page',
      'Conexión con WhatsApp',
      'Conexión con Hosting + Dominio 1 año',
      'Actualizaciones y soporte continuo',
      'Página extra 3 UF + IVA'
    ],
    icon: <FontAwesomeIcon icon={faGlobe} />
  },
  {
    name: 'SOLUCIONES A MEDIDA',
    description: 'Desde 55 UF por desarrollo + IVA',
    features: [
      'Software para negocios',
      'Software as a Service',
      'Automatización de procesos'

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
            PRODUCTOS Y SERVICIOS
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
  
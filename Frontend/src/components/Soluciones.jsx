import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer, faRobot,faMicrochip, faChalkboardUser, faCartShopping, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

const features = [
    { name: 'Funnel de ventas para la gestión comercial',
      icon:<FontAwesomeIcon icon={faMicrochip}/>,
      description: 'Herramienta de gestión comercial diseñada para incrementar significativamente el número de SQL (Sales Qualified Lead) y el porcentaje de conversión a ventas' 
    },
    { name: 'Cotizador de productos y servicios para clientes', 
      icon:<FontAwesomeIcon icon={faChalkboardUser} />, 
      description: 'Nuestros cotizadores web automatizan la estimación de precios para productos y servicios, ofreciendo a los clientes cálculos rápidos y precisos, mejorando así la experiencia del usuario y la eficiencia del servicio.' 
    },
    { name: 'E-Commerce para tu negocio',
      icon: <FontAwesomeIcon icon={faMoneyBillTransfer}/>,
      description: 
      'Desarrollamos sitios web de e-commerce personalizados que resaltan su marca, asegurando una experiencia de usuario sobresaliente y un proceso de compra eficiente, todo apoyado por estrategias de marketing digital efectivas para maximizar ventas.'
    },
    { name: 'Asistentes GPT para aumentar la interacción con tus clientes', 
      icon: <FontAwesomeIcon icon={faRobot}/>,
      description: 'Implementamos asistentes GPT en sitios web para mejorar la generación de leads y la interacción con los usuarios, proporcionando respuestas inmediatas y personalizadas, lo que resulta en un mejor engagement y conversión de ventas.' 
    },
    { name:'Sitios web a medida',
      icon: <FontAwesomeIcon icon={faWindowMaximize} />,
      description:'Desarrollamos sitios web a medida, enfocados en las necesidades específicas de su negocio. Combinamos diseño único, tecnología avanzada y estrategia digital para ofrecer soluciones web óptimas y personalizadas, asegurando una experiencia de usuario excepcional y alineación con sus objetivos comerciales.'

    }
 
]
  
  export default function Soluciones() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 px-6 py-1">
          <div>
          <h1 className="text-4xl text-left font-bold tracking-tight text-gray-900 ">
              Soluciones
            </h1>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-4">
              {features.map((feature) => (
                <div key={feature.name} className=" grid grid-cols-[3fr_7fr] sm:grid-cols-[1fr_9fr] border-t border-gray-200 pt-4">
                  <div className='text-5xl flex justify-left items-center'>
                    {feature.icon}
                  </div>
                  <div>
                    <dt className="text-xl font-bold text-emerald-700">{feature.name}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 text-9xl">
          </div>

          
           </div>
      </div>
    )
  }
  
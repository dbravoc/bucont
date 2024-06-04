import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer, faRobot,faMicrochip, faChalkboardUser, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

const features = [
    { name:'Sitios web a medida',
    icon: <FontAwesomeIcon icon={faWindowMaximize} />,
    description:'Combinamos diseño único, tecnología avanzada y estrategia digital para ofrecer soluciones web óptimas y personalizadas.'
    },

    { name: 'Integraciones con Chat GPT',
    icon:<FontAwesomeIcon icon={faMicrochip}/>,
    description: 'Integramos en tu plataforma tecnología de OpenAI para el aumento de ventas y optimización de procesos.' 
    },
    { name: 'E-commerce', 
      icon:<FontAwesomeIcon icon={faMoneyBillTransfer} />, 
      description: 'Aseguramos un alto rendimiento y experiencia de usuario óptima para optimizar tus resultados de negocio. '
    },
    { name: 'Software ERP modulares',
      icon: <FontAwesomeIcon icon={faChalkboardUser}/>,
      description: 'Construimos softwares modulares y personalziados que resuelven necesidades específicas relacionadas a la gestión del negocio.'
    },
]
  
  export default function Servicios() {
    return (
      <div className="">
        <div className="mx-auto grid grid-cols-1 gap-x-8 px-6 py-1">
          <div>
          <div className="tracking-tight font-bold text-cyan-900 text-3xl text-center">
            Nuestros productos
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
                  </div>
                </div>
              ))}
            </dl>
          </div>

          
           </div>
      </div>
    )
  }
  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer, faRobot,faMicrochip, faChalkboardUser, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

const features = [
    { name:'Consultoría estratégica tech',
    icon: <FontAwesomeIcon icon={faWindowMaximize} />,
    description:'Evaluamos tus necesidades tecnológicas y desarrollamos estrategias alineadas con tus objetivos de negocio, proporcionando un roadmap claro y personalizado para la evolución tecnológica.'
    },

    { name: 'Desarrollo y gestión de proyectos tech',
    icon:<FontAwesomeIcon icon={faChalkboardUser}/>,
    description: 'Implementamos y gestionamos proyectos tecnológicos a medida, utilizando metodologías ágiles y DevOps para asegurar una ejecución rápida y eficiente.' 
    },
    { name: 'Soporte técnico y mantenimiento', 
      icon:<FontAwesomeIcon icon={faRobot} />, 
      description: 'Ofrecemos soporte técnico continuo y especializado, junto con mantenimiento preventivo y correctivo para asegurar la operatividad de tus soluciones tecnológicas.'
    }
]
  
  export default function Servicios() {
    return (
      <div className="">
        <div className="mx-auto grid grid-cols-1 gap-x-8 px-6 py-1">
          <div>
          <div className="tracking-tight font-bold text-cyan-900 text-3xl text-center">
            Nuestros servicios
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
  
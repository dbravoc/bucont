import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';

const features = [
    { name:'Investigación y prototipo',
    icon: <FontAwesomeIcon icon={fa1} />,
    description:'Creamos un prototipo funcional, investigando y colaborando hasta su aprobación final.'
    },

    { name: 'Desarrollo y onboarding',
    icon:<FontAwesomeIcon icon={fa2}/>,
    description: 'Desarrollamos y desplegamos el software, proporcionando documentación, material audiovisual y sesiones de inducción.' 
    },
    { name: 'Mantenimiento', 
      icon:<FontAwesomeIcon icon={fa3} />, 
      description: 'Ofrecemos suscripción mensual, semestral o anual, permitiendo mantenimiento continuo y nuevas funcionalidades según necesidades del cliente.'
    }
]
  
  export default function Servicios() {
    return (
      <div className="">
        <div className="mx-auto grid grid-cols-1 gap-x-8 px-6 py-1">
          <div>
          <div className="tracking-tight font-bold text-cyan-900 text-2xl text-center">
            Creamos tu producto de software en <span className='rounded-md rounded-bl-3xl px-3 py-0 text-center font-semibold shadow-sm bg-yellow-400 text-cyan-900'>tres etapas</span> 
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
  
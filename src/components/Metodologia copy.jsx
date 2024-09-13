import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons';

const features = [
    { name:'Plan BASIC',
    icon: <FontAwesomeIcon icon={fa1} />,
    description:'Conversamos para resolver tus dudas, entender tus necesidades y te proponemos el plan digital que más te convenga.'
    },
    { name:'Plan CORE',
    icon: <FontAwesomeIcon icon={fa2} />,
    description:'Te acompañamos en la configuración de tu cuenta, integración de servicios y capacitación en el uso de la plataforma.'
    },

    { name: 'Lanzamiento',
    icon:<FontAwesomeIcon icon={fa3}/>,
    description: 'Te ayudamos a lanzar tu plataforma digital, asegurando que todo funcione correctamente y que estés listo para recibir a tus primeros clientes.' 
    },
    { name: 'Continuidad operacional', 
      icon:<FontAwesomeIcon icon={fa4} />, 
      description: 'Ofrecemos un mantenimiento continuo y nuevas funcionalidades que mejoran la experiencia del cliente y usuario final.'
    }
]
  
  export default function Servicios() {
    return (
      <div className="">
        <div className="mx-auto grid grid-cols-1 gap-x-8 px-6 py-1">
          <div>
          <div className="tracking-tight font-bold text-cyan-900 text-3xl text-center">
            Personaliza y contrata uno de nuestros <span className='rounded-md rounded-bl-3xl px-3 py-0 text-center font-semibold shadow-sm bg-yellow-400 text-cyan-900'>2 planes</span> 
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
  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer, faRobot,faMicrochip, faChalkboardUser, faWindowMaximize, faPeopleRoof, faUserGear, faPaintRoller, faArrowPointer, faPalette, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import DavidProfile from '../assets/img/PerfilCuadradoByN.jpeg'

const features = [
    { name:'Tech Consultant',
    icon: <FontAwesomeIcon icon={faPeopleRoof} />,
    description:'Coordina y supervisa el desarrollo de un proyecto desde la idea hasta su lanzamiento.  '
    },

    { name: 'UX Designer',
    icon:<FontAwesomeIcon icon={faPaintBrush}/>,
    description: 'Investiga las necesidades y comportamientos de los usuarios, para luego diseñar la arquitectura de la información, wireframes y prototipos.' 
    },

    { name: 'Web Developer', 
      icon:<FontAwesomeIcon icon={faUserGear} />, 
      description: 'Desarrolla la tecnología construir el prototipo diseñado. En el frontend, crea interfaces interactivas y atractivas. En el backend, se encarga de la lógica de la aplicación, bases de datos y la integración de sistemas. '
    },
]
  
  export default function QuienesSomos() {
    return (
      <div className="">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 px-6 py-1">
          <div>
          <div className="tracking-tight text-center font-bold text-cyan-900 text-3xl">
              Nosotros
          </div>
          <div className='lg:p-10 flex flex-col'>
          <div className='flex justify-center p-16 lg:p-0'>
          <img className='rounded-full w-40 h-40' src={DavidProfile} alt="" />            
          </div>

            <div className='px-16 flex items-center'>

          <p className="text-sm text-justify text-gray-500">
          <h1 className="text-xl text-center font-bold tracking-tight text-gray-900 pt-16 pb-10 ">
              Consultor Fundador
          </h1>
          Soy David Bravo, fundador de BUCONT, Ingeniero Civil Industrial USM y Desarrollador Full-Stack certificado. Especialista en crear soluciones empresariales basadas en tecnología y consultoría.
          </p>
          </div>

          </div>
          <h1 className="text-xl text-center font-bold tracking-tight text-gray-900 mt-16 mb-5 ">
              Nuestros especialistas
          </h1>
            <dl className="p-0 lg:p-10 grid grid-cols-1 gap-x-6 gap-y-4">
              {features.map((feature) => (
                <div key={feature.name} className=" flex flex-col justify-center items-center lg:grid lg:grid-cols-[1fr_9fr] border-t border-gray-200 pt-4">
                  <div className='text-5xl flex justify-left items-center text-cyan-700'>
                    {feature.icon}
                  </div>
                  <div>
                    <dt className="mt-2 text-xl lg:text-left text-center font-bold text-gray-700">{feature.name}</dt>
                    <dd className="mt-2 text-justify text-sm text-gray-500">{feature.description}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          
           </div>
      </div>
    )
  }
  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer, faRobot,faMicrochip, faChalkboardUser, faWindowMaximize, faPeopleRoof, faUserGear, faPaintRoller, faArrowPointer, faPalette, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import DavidProfile from '../assets/img/PerfilCuadrado.png'

const features = [
    { name:'Product Consultant',
    icon: <FontAwesomeIcon icon={faPeopleRoof} />,
    description:'Coordina y supervisa el desarrollo de un producto desde la idea inicial hasta su lanzamiento final. Define la visión del producto, establece las prioridades de desarrollo, colabora con diferentes equipos como marketing, ventas, y técnico para garantizar que las características cumplan con las necesidades del mercado y los objetivos comerciales. Además, ajusta las estrategias basándose en el feedback de los usuarios y el rendimiento del producto.'
    },

    { name: 'UX Designer',
    icon:<FontAwesomeIcon icon={faPaintBrush}/>,
    description: 'Se enfoca en la interacción del usuario con productos digitales, como aplicaciones o sitios web. Su trabajo consiste en investigar las necesidades y comportamientos de los usuarios, diseñar la arquitectura de la información, los wireframes y prototipos, probarlos y optimizar la interfaz y la experiencia de usuario para que sean intuitivos y agradables.' 
    },

    { name: 'Web Developer', 
      icon:<FontAwesomeIcon icon={faUserGear} />, 
      description: 'Maneja tanto el frontend como el backend de aplicaciones web. En el frontend, crea interfaces interactivas y visualmente atractivas. En el backend, se encarga de la lógica de la aplicación, bases de datos y la integración de sistemas. Este rol requiere una comprensión amplia de tecnologías web para desarrollar soluciones completas e integradas.'
    },
]
  
  export default function QuienesSomos() {
    return (
      <div className="">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 px-6 py-1">
          <div>
          <h1 className="text-2xl text-left font-bold tracking-tight text-gray-900 ">
              Quiénes somos
          </h1>
          <div className='lg:p-10 lg:grid flex flex-col lg:grid-cols-7'>
          <div className='col-span-2 flex justify-center p-16 lg:p-0'>
          <img className='rounded-full ' src={DavidProfile} alt="" />            
          </div>

            <div className='col-span-5 px-0 lg:px-16 flex items-center'>

          <p className="text-sm text-justify text-gray-500">
          <h1 className="text-xl text-center lg:text-left font-bold tracking-tight text-gray-900 mb-4 ">
              Consultor Fundador
          </h1>
          Soy David Bravo, fundador de BUCONT e Ingeniero Civil Industrial de la Universidad Técnica Federico Santa María. Especialista en diseño, desarrollo y lanzamiento de productos tecnológicos digitales. Luego de 6 años adquiriendo experiencia en grandes empresas, el 2023 decidí reunir a los mejores profesionales y crear mi propia consultora de productos digitales a medida.
          </p>
          </div>

          </div>
          <h1 className="text-xl lg:text-left text-center font-bold tracking-tight text-gray-900 mt-10 mb-5 ">
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
  
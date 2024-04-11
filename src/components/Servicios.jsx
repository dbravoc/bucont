import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer, faRobot,faMicrochip, faChalkboardUser, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

const features = [
    { name:'Sitios web a medida',
    icon: <FontAwesomeIcon icon={faWindowMaximize} />,
    description:'Desarrollamos sitios web a medida, enfocados en las necesidades específicas de tu negocio. Combinamos diseño único, tecnología avanzada y estrategia digital para ofrecer soluciones web óptimas y personalizadas, asegurando una experiencia de usuario excepcional y alineación con sus objetivos comerciales.'
    },

    { name: 'Integraciones con Chat GPT',
    icon:<FontAwesomeIcon icon={faMicrochip}/>,
    description: 'Integramos en tus sitios web o aplicaciones, la tecnología de OpenAI como estategia de marketing, ventas o automatización de procesos, entre otros.' 
    },
    { name: 'E-commerce', 
      icon:<FontAwesomeIcon icon={faMoneyBillTransfer} />, 
      description: 'Desarrollamos sitios web de e-commerce personalizados que resaltan tu marca, asegurando una experiencia de usuario sobresaliente y un proceso de compra eficiente, todo apoyado por estrategias de marketing digital efectivas que maximizan la venta'
    },
    { name: 'Sistemas de gestión',
      icon: <FontAwesomeIcon icon={faChalkboardUser}/>,
      description: 'Implementamos softwares con diseños y funcionalidades únicas, desarrollados a medida y alineados con los desafíos de tu negocio.'
    },
]
  
  export default function Servicios() {
    return (
      <div className="">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 px-6 py-1">
          <div>
          <h1 className="text-2xl text-left font-bold tracking-tight text-gray-900 ">
              Servicios
            </h1>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-4 p-10">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col justify-center items-center lg:grid lg:grid-cols-[1fr_9fr] border-t border-gray-200 pt-4">
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
  
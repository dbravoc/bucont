import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cards = [
    {
      title: '1. Consulta inicial',
      description: 'Definición del anteproyecto y propuesta económica',
      incluye: [
        'Reuniones iniciales',
        'Anteproyecto documentado',
        'Presupuesto documentado',
      ],
      precio: 'Sin costo'
    },
    {
      title: '2. Fase de descubrimiento',
      description: 'Etapa inicial para definir la estrategia y el plan de desarrollo',
      incluye: [
        'Plan estratégico del producto',
        'Roadmap del producto',
        'Backlog de producto',
        'Plan técnico de desarrollo',
        'User Research',
	      'Benchmarking',
        'Validación del problema',
        'Reuniones de refinamiento',
        'Reuniones de validación'

      ],    
      precio: '30%',
      formapago:'del valor total, adelantado.'

    },
    {
      title: '3. Fase de diseño',
      description: 'Proceso creativo para diseñar el prototipo high fidelity del producto',
      incluye: [
        'Prototipos en figma low fidelity',
        'Prototipo en figma high fidelity',
        'Pruebas de usabilidad',
        'Reuniones de refinamiento',
        'Reunión de validación de prototipo'
      ], 
      precio: '40%',
      formapago: 'del valor total, adelantado.',

    },
    {
      title: '4. Fase de desarrollo',
      description: 'Entrega del producto terminado, aprobado por el cliente',
      incluye: [
        'Producto terminado, aprobado por cliente',
        'Producto desplegado en dominio web',
        'Documentación funcional de la solución',
        'Reunión de conformidad con cliente',
        'Periodo de garantía',
      ],
      precio: '30%',
      formapago: 'del valor total, contraentrega.'

    },
    {
      title: '5. Fase de lanzamiento',
      description: 'Lanzamiento del producto y periodo de acompañamiento para el logro de los resultados esperados',
      incluye: [
        'Plan go to market',
        'Propuesta de valor',
        'Plan de medición',
        'Ideal customer profile',
        'Customer journey',
        'Reuniones de refinamiento',
        'Reuniones de validación'
      ],

      precio: '30%',
      formapago: 'del valor total, acompañamiento.'

    },
  ];

  export default function Example() {
    return (
      <div className="px-6">
        <div className="mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 ">Metodología</h2>
          <div className="grid grid-cols-1 gap-4 p-10">
            {cards.map((card, index) => (
              
              <div key={index} className="p-4 rounded-lg flex flex-col justify-start">
                <div className='grid grid-cols-1 lg:grid-cols-2 border-t-2'>
                <div className='col-span-1 lg:pr-20 '>

                <h3 className="pt-5 text-xl font-semibold text-cyan-500">{card.title}</h3>
                  {/* <p className="mt-6 text-cyan-400 font-semibold">{card.precio} <span className=" text-base text-black pt-4">{card.formapago}</span></p>*/}
                <p className="mt-6 text-gray-600">{card.description}.</p>
                </div>
                <div className='col-span-1'>
                <p className="mt-6 text-black font-bold">Incluye:</p>
                {/* Verificar si el card tiene la propiedad 'incluye' y renderizar la lista */}
                {card.incluye && (
                  <ul className="mt-2 grid grid-cols-1 lg:grid-cols-3 text-gray-600">
                    {card.incluye.map((item, itemIndex) => (
                      <li key={itemIndex} className='text-black text-xs'>
                        <FontAwesomeIcon className='text-black' icon={faCheck} /> {item}
                        </li>
                    ))}
                  </ul>
                )}
                </div>

              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  
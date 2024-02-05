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
        'Propuesta de valor',
        'Benchmarking',
        'User Research',
        'Ideal customer profile',
        'Validación del problema',
        'Plan estratégico del producto',
        'Plan de medición',
        'Plan go to market',
        'Roadmap del producto',
        'Backlog de producto',
        'Plan técnico de desarrollo',
        'Diagramas de flujo',
        'Customer journey',
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
        'Revisión a fase de descubrimiento',
        'Reuniones de refinamiento',
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
  ];

  export default function Example() {
    return (
      <div className="bg-white p-6">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-16 text-gray-900 sm:text-4xl ">Precios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <div key={index} className="p-4 rounded-lg flex flex-col justify-start">
                <h3 className="border-t-2 pt-5 text-xl font-semibold text-emerald-600">{card.title}</h3>
                <p className="mt-6 text-emerald-600 font-semibold">{card.precio} <span className=" text-base text-black pt-4">{card.formapago}</span></p>
                <p className="mt-6 text-gray-600">{card.description}.</p>
                <p className="mt-6 text-black font-bold">Incluye:</p>
                {/* Verificar si el card tiene la propiedad 'incluye' y renderizar la lista */}
                {card.incluye && (
                  <ul className="mt-2 text-gray-600">
                    {card.incluye.map((item, itemIndex) => (
                      <li key={itemIndex} className='text-black text-xs'>
                        <FontAwesomeIcon className='text-black' icon={faCheck} /> {item}
                        </li>
                    ))}
                  </ul>
                )}

              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  
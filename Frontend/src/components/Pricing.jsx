import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cards = [
    {
      title: 'Diagnóstico',
      description: 'Análisis exhaustivo de la situación actual del cliente y construcción de un anteproyecto',
      incluye: [
        'Reuniones iniciales',
        'Anteproyecto documentado',
        'Presupuesto documentado',
      ],
      precio: 'Sin costo'
    },
    {
      title: 'Kick-off Proyecto',
      description: 'Inicio formal del proyecto, definición de la estrategia y del plan de desarrollo',
      incluye: [
        'Reuniones de refinamiento',
        'Documento con estratégia del proyecto',
        'Documento con plan de desarrollo del proyecto',
        'Documento con flujos de alto nivel',

      ],    
      precio: '30%',
      formapago:'del pago total'

    },
    {
      title: 'Prototipo Lo-Fi',
      description: 'Presentación del prototipo "low fidelity',
      incluye: [
        'Reuniones de refinamiento',
        'Pruebas con usuarios reales',
        'Entregable del prototipo funcional',
        'Plan estratégico y de desarrollo del proyecto reajustado',
      ], 
      precio: '40%',
      formapago: 'del pago total',

    },
    {
      title: 'Solución Hi-Fi',
      description: 'Entrega de la solución "high fidelity" aprobada por el cliente',
      incluye: [
        'Solución Hi-Fi desplegada',
        'Documentación funcional de la solución',
        'Reunión de conformidad con cliente',
        'Periodo de garantía según proyecto',
      ],
      precio: '30%',
      formapago: 'del pago total'

    },
  ];

  export default function Example() {
    return (
      <div className="bg-white p-6">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-16 text-gray-900 sm:text-4xl ">Precios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.description}.</p>
                <p className="mt-2 text-emerald-600 pt-4">Incluye:</p>
                {/* Verificar si el card tiene la propiedad 'incluye' y renderizar la lista */}
                {card.incluye && (
                  <ul className="mt-2 text-gray-600">
                    {card.incluye.map((item, itemIndex) => (
                      <li key={itemIndex} className='text-emerald-600 text-xs'>
                        <FontAwesomeIcon className='text-black' icon={faCheck} /> {item}
                        </li>
                    ))}
                  </ul>
                )}
                <p className="mt-2 text-black text-3xl border-t-2 pt-4 font-semibold">{card.precio} <span className="mt-2 text-base text-black pt-4">{card.formapago}</span></p>


              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  
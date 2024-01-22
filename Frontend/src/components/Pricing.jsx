const cards = [
    {
      title: 'Evaluación inicial',
      description: 'Descripción de la tarjeta 1.',
      incluye: [
        'Consulta inicial',
        'Anteproyecto',
        'Cotización'    
      ],
      // otros campos que necesites
    },
    {
      title: 'Kick-off proyecto',
      description: 'Descripción de la tarjeta 2.',
      // otros campos que necesites
    },
    {
      title: 'Entrega final',
      description: 'Descripción de la tarjeta 3.',
      // otros campos que necesites
    },
    {
      title: 'Garantía conformidad',
      description: 'Descripción de la tarjeta 4.',
      // otros campos que necesites
    },
  ];

  export default function Example() {
    return (
      <div className="bg-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
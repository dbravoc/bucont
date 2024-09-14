import demoGifAsistente from '../assets/img/GIF Asistente IA.gif';
import demoGifLeTrip from '../assets/img/GIF Marketplace.gif';
import demoGifMisterios from '../assets/img/GIF Gestor de reservas.gif';
import './css/Portafolio.css';

const solutions = [
  {
    title: 'Tienda online',
    description: 'Mejora el crecimiento de tu negocio con nuestro E-Commerce',
    features: [
      'Sitio web E-Commerce personalizado',
      'Carrito de compra',
      'Pasarelas de pago',
      'Gestión de inventario',
      'Punto de venta en tienda'
    ],
    gifUrl: demoGifLeTrip,
    visitLink: 'https://comprador.bucont.com'
  },
  {
    title: 'Gestor de reservas',
    description: 'Ahorra dinero en comisiones y utiliza tu propio sistema de reservas',
    features: [
      'Sitio web de reservas personalizado',
      'Conexión con pasarelas de pago',
      'Conexión con PMS y Channel Manager'
    ],
    gifUrl: demoGifMisterios,
    visitLink: 'https://huesped.bucont.com/'
  },
  {
    title: 'Asistente IA',
    description: 'Aumenta el tráfico e interacción con tu sitio web con un asistente virtual potenciado con Chat GPT',
    features: [
      'Respuestas automáticas en base a prompts personalizados',
      'Generador de Leads',
      'Bases de conocimiento personalizadas',
      'Interfaz amigable',
      'Confidencialidad y seguridad de los datos'
    ],
    gifUrl: demoGifAsistente,
    visitLink: 'https://asistente.bucont.com/'
  },
];

export default function Portafolio() {
  return (
    <div className="py-16 px-6">
      <div className="mx-auto">
        <div className="mx-auto text-left">
          <div className="tracking-tight font-bold text-black text-3xl text-center pb-10">PORTAFOLIO</div>
        </div>
        {solutions.map((solution, index) => (
          <div key={index} className="mx-auto max-w-2xl rounded-3xl lg:mx-0 lg:flex lg:max-w-none">
            <div className="px-10 lg:flex-auto">
              <div className='flex flex-col items-center text-center gap-x-10'>
                <div className='lg:p-10 border-t border-gray-200 pt-4'>
                  <a href={solution.visitLink} target="_blank" className="text-xl font-bold tracking-tight text-cyan-900 ">{solution.title}</a>
                  <p className="mt-2 text-justify text-sm leading-7 text-gray-900">{solution.description}</p>
                  <div className="h-px flex-auto bg-gray-100" />
                  
                </div>
                <div className='py-0 col-span-2 flex justify-center items-center'>
                    <div className="w-full max-w-md flex-shrink-0">
                      <div className="flex rounded-2xl text-center justify-center">
                        <div className="my-4 rounded-full bg-black">
                          <img className='w-full h-auto rounded-full' src={solution.gifUrl} alt={solution.title} />
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
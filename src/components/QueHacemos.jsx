import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faGlobe, faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";

export default function Inicio() {
  const services = [
    {
      icon: faGlobe,
      title: "Servicio personalizado",
      description: "Mantenemos una comunicación constante con nuestros clientes para empatizar con sus necesidades."
    },
    {
      icon: faComments,
      title: "Todo en uno",
      description: "Bucont gestiona todo lo digital: marketing, ventas online, estrategia y administración de tu negocio."
    },
    {
      icon: faMoneyBillTrendUp,
      title: "Inversión eficiente",
      description: "Adaptamos nuestra oferta a tus necesidades, garantizando que cada peso invertido se aproveche de manera óptima y eficiente."
    }
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className='text-4xl px-3 py-2 text-center text-cyan-900'>
          <h1 className="font-bold text-black">DIGITALIZAMOS LA VENTA DE LAS PYMES</h1>
          <p className="text-lg">Haz crecer tu negocio en menos de 6 meses, con una inversión accesible y un servicio personalizado</p>
        </div>
        <div className='pt-10 flex flex-col lg:grid lg:grid-cols-3'>
          {services.map((service, index) => (
            <div key={index} className='pt-8 flex flex-col items-start'>
              <FontAwesomeIcon className='bg-black text-4xl text-yellow-500 p-2 rounded-md' icon={service.icon} />
              <h1 className="pt-4 text-xl font-bold text-black">{service.title}</h1>
              <p className="pt-4 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
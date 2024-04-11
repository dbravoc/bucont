
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import img4fases from '../assets/img/4Fases4.png'


export default function Inicio() {

  return (
    <div className="w-full ">
    

        <div className="mx-auto grid lg:grid-cols-4 grid-cols-1">
          <div className=" text-left px-0 col-span-2">
            <h1 className=" tracking-tight font-semibold text-cyan-100 text-6xl">
            CONSTRUIMOS<span className='text-cyan-400 font-semibold'> PRODUCTOS DIGITALES A MEDIDA,</span> INSPIRADOS EN TU VISIÓN DE NEGOCIO.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
            Somos una consultora de productos digitales, especialistas en ingeniería, diseño y negocios, dedicados a investigar, diseñar y desarrollar productos a tu medida para resolver tus desafíos de negocio y alcanzar el crecimiento y éxito que esperas. Con <strong className='text-cyan-300'> BUCONT</strong>, inviertes en innovación y tecnología que entiende y potencia tu negocio.
            </p>
            <div className="mt-10 flex items-center justify-left gap-x-6">
              <a
                href="https://wa.me/56992438343?text=Hola,%20quisiera%20más%20información%20de%20Bucont"
                className="rounded-md flex items-center bg-cyan-100 px-3.5 py-2.5 text-md font-semibold text-cyan-900 shadow-sm hover:bg-cyan-300 hover:text-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-cyan-700 font-extrabold text-3xl" /> Conversemos 
              </a>
              <a
                href="#servicios"
                className="rounded-md flex items-center bg-cyan-100 px-3.5 py-2.5 text-md font-semibold text-cyan-900 shadow-sm hover:bg-cyan-300 hover:text-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                <FontAwesomeIcon icon={faStar} className="mr-2 text-cyan-900 text-3xl" /> Ver servicios 
              </a>
            </div>
          </div>

          <div className='col-span-2 flex justify-end items-center'>
          <img
                className="p-12 h-auto w-full"
                src= {img4fases}
                alt=""
              />
          </div>
        </div>

    </div>
  )
}

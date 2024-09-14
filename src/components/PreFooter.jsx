
import GIFTiendaVirtual from '../assets/img/GIF Tienda online.gif'

export default function Inicio() {
  return (
    <>
        <div className="flex flex-col justify-center items-center">

        <div className='text-3xl px-3 py-2 text-center text-cyan-900'>
          <h1 className="font-bold ">COMIENZA A CRECER HOY MISMO</h1>
          <p>Somos expertos en digitalizar tus ventas</p>
        </div>
        <div className='py-0 col-span-2 flex justify-center items-center'>
                    <div className="w-full max-w-md flex-shrink-0">
                      <div className="flex rounded-2xl text-center justify-center">
                        <div className="my-4 rounded-full bg-black">
                          <img className='w-full h-auto' src={GIFTiendaVirtual}/>
                        </div>
                      </div>
                    </div>
                </div>
        

        </div>

  </>

  );
}

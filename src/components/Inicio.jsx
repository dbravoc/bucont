import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import bucont from '../assets/img/Bucont - Frame 8.jpeg'

export default function Inicio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false); // Esto cerrará el menú móvil
  };
  const navigation = [
    { name: 'Inicio', href: '#', onClick: handleMenuItemClick },
    { name: 'Servicios', href: '#servicios', onClick: handleMenuItemClick },
    { name: 'Portafolio', href: '#portafolio', onClick: handleMenuItemClick },
    { name: 'Precios', href: '#precios', onClick: handleMenuItemClick },
  ];
  

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 border-b-2 border-gray-100" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-14 w-auto"
                src= {bucont}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only"></span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-cyan-600 hover:text-cyan-500  ">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://wa.me/56992438343?text=Hola%20quisiera%20más%20información" className="text-sm font-semibold leading-6 text-cyan-600 hover:text-cyan-500 flex items-center">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-4xl" /> Conversemos
            </a>
          </div>

        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="/Bucont - Frame 8.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 "
                      onClick={item.onClick} // Agrega el manejador de clic aquí

                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

        <div className="mx-auto pt-52 pb-44">
          <div className="hidden sm:mb-8 sm:flex sm:justify-left">
            <div className="relative rounded-full px-6 py-1 text-base leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-bold">
              <span className='text-cyan-700'>Bucont:</span> Digitalizamos tu negocio {' '}
            </div>
          </div>
          <div className="text-left px-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className='text-cyan-700'>Construimos productos digitales</span> inspirados en tu visión de negocio.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Investigamos, diseñamos y desarrollamos productos digitales a tu medida para resolver tus desafíos. No solo enfrentamos tus necesidades actuales, sino que preparamos tu negocio para un futuro de crecimiento y éxito. Con <strong className='text-cyan-600'> Bucont</strong>, estás invirtiendo en tecnología que entiende y potencia tu negocio.
            </p>
            <div className="mt-10 flex items-center justify-left gap-x-6">
              <a
                href="https://wa.me/56992438343?text=Hola,%20quisiera%20más%20información%20de%20Bucont"
                className="rounded-md flex items-center bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-white text-3xl" /> Conversemos 
              </a>
              <a
                href="#servicios"
                className="rounded-md flex items-center bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                <FontAwesomeIcon icon={faStar} className="mr-2 text-white text-3xl" /> Ver servicios 
              </a>
            </div>
          </div>
        </div>

    </div>
  )
}

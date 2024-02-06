import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import lawitec from '../assets/img/Lawitec - Frame 8.jpeg'


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
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Lawitec</span>
              <img
                className="h-24 w-auto"
                src= {lawitec}
                alt=""
              />
            </a>
            <ul className='flex flex-col justify-center px-4 text-l font-extrabold text-black font-mono'>
              <li>Tu</li>
              <li>Partner</li>
              <li className='text-emerald-700'>Tecnológico</li>
            </ul>
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
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://wa.me/56992438343?text=Hola%20quisiera%20más%20información" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-black text-4xl" /> Escríbenos<span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
          </div>

        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only"></span>
                <img
                  className="h-8 w-auto"
                  src="/Lawitec - Frame 8.jpeg"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only"></span>
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
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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

      <div className="relative isolate px-6 py-1">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto pt-56 pb-44">
          <div className="hidden sm:mb-8 sm:flex sm:justify-left">
            <div className="relative rounded-full px-6 py-1 text-base leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-bold">
              <span className='text-emerald-700'>Lawitec:</span> Consultora de productos digitales {' '}
            </div>
          </div>
          <div className="text-left px-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className='text-emerald-700'>Construimos productos digitales</span> inspirados en tu visión de negocio.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Investigamos, diseñamos y desarrollamos productos digitales a tu medida para resolver tus desafíos. No solo enfrentamos tus necesidades actuales, sino que preparamos tu negocio para un futuro de crecimiento y éxito. Con <strong className='text-emerald-600'> Lawitec</strong>, estás invirtiendo en tecnología que entiende y potencia tu negocio.
            </p>
            <div className="mt-10 flex items-center justify-left gap-x-6">
              <a
                href="https://wa.me/56992438343?text=Hola,%20quisiera%20más%20información%20de%20Lawitec"
                className="rounded-md flex items-center bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-white text-3xl" /> Conversemos 
              </a>
              <a
                href="#servicios"
                className="rounded-md flex items-center bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                <FontAwesomeIcon icon={faStar} className="mr-2 text-white text-3xl" /> Ver servicios 
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

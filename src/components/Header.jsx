import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import bucont from '../assets/img/BUCONT1.png';

export default function Inicio() {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Precios', href: '#precios' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 border-yellow-100" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-14 w-auto" src={bucont} alt="Logo" />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-cyan-100 hover:text-cyan-300">
                {item.name}
              </a>
            ))}
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? <XMarkIcon className="h-6 w-6 text-cyan-100" /> : <Bars3Icon className="h-6 w-6 text-cyan-100" />}
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://wa.me/56992438343?text=Hola%20quisiera%20más%20información" className="text-sm font-semibold leading-6 text-cyan-100 hover:text-cyan-300 flex items-center">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-4xl" /> Conversemos
            </a>
          </div>
        </nav>
      </header>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 lg:hidden">
        <div className="fixed inset-0  aria-hidden="true" />
        <div className="fixed inset-0 flex justify-center items-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm w-full bg-gray-900 rounded-lg p-6">
            <div className="mt-4 flex flex-col">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-sm font-semibold text-cyan-100 py-2 hover:text-cyan-300">
                  {item.name}
                </a>
              ))}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

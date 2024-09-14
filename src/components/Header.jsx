import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Inicio() {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { name: 'Servicios', href: '#planes' },
    { name: 'Portafolio', href: '#portafolio' },
    
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <header className="absolute top-0 z-50">
        <nav className="flex items-center justify-center p-6 lg:px-8" aria-label="Global">

          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm py-2 font-light leading-6 text-white hover:text-cyan-300">
                {item.name}
              </a>
            ))}
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? <XMarkIcon className="h-6 w-6 text-cyan-100" /> : <Bars3Icon className="h-6 w-6 text-cyan-100" />}
            </button>
          </div>
        </nav>
      </header>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative  z-50 lg:hidden">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
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

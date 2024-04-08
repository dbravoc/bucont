import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import bucont from '../assets/img/BUCONT1.jpeg'

export default function Inicio() {
  const navigation = [
    { name: 'Inicio', href: '#'},
    { name: 'Servicios', href: '#servicios'},
    { name: 'Portafolio', href: '#portafolio'},
    { name: 'Precios', href: '#precios'},
  ];
  

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 md:px-8 border-b-2 border-yellow-100" aria-label="Global">
          <div className="flex md:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-14 w-auto"
                src= {bucont}
                alt=""
              />
            </a>
          </div>
          <div className="hidden md:flex md:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-cyan-100 hover:text-cyan-300  ">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex md:flex-1 md:justify-end">
            <a href="https://wa.me/56992438343?text=Hola%20quisiera%20más%20información" className="text-sm font-semibold leading-6 text-cyan-100 hover:text-cyan-300 flex items-center">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-4xl" /> Conversemos
            </a>
          </div>

        </nav>
    
      </header>


    </div>
  )
}

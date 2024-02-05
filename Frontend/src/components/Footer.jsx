import lawitec from '../assets/img/Lawitec - Frame 8.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
    return (
      <div className="px-10 flex justify-center gap-x-3 items-center py-5 mt-20 border-t-2 border-gray-200">
            
          <ul>
          <a href="#" className="-m-1.5 p-1.5">
              <img
                className="max-h-10 max-w-12"
                src= {lawitec}
                alt=""
              />
            </a>
          </ul>
          <a href="https://wa.me/56992438343?text=Hola%20quisiera%20más%20información" className="text-xs font-semibold leading-6 text-gray-900 flex items-center">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-black text-4xl" />
          </a>
          <a href="" className="text-xs font-semibold leading-6 text-gray-900 flex items-center">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-black text-4xl" />
          </a>
          <a href="" className="text-xs font-semibold leading-6 text-gray-900 flex items-center">
              <FontAwesomeIcon icon={faSquareInstagram} className="mr-2 text-black text-4xl" />
          </a>
      </div>
    );
  }
  
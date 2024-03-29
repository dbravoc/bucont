import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
      <div className='flex flex-col'>
      <div className="mx-0 px-10 flex justify-center gap-x-3 items-center py-5 mt-20 border-t-2 border-gray-100">
          <a href="https://wa.me/56992438343?text=Hola,%20quisiera%20más%20información%20de%20Bucont" className="text-xs font-semibold leading-6 text-gray-900 flex items-center">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-black text-4xl" />
          </a>
          <a href="https://www.linkedin.com/company/bucont/" className="text-xs font-semibold leading-6 text-gray-900 flex items-center">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-black text-4xl" />
          </a>
          <a href="" className="text-xs font-semibold leading-6 text-gray-900 flex items-center">
              <FontAwesomeIcon icon={faSquareInstagram} className="mr-2 text-black text-4xl" />
          </a>
      </div>
      <ul className="text-xs font-semibold leading-6 text-cyan-700 flex flex-col justify-center items-center">
        <li>david@bucont.com</li>
        <li className='text-black font-light'>- Founder -</li>
      </ul>

      </div>
    );
  }
  
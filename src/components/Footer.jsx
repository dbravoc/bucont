import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import bucont from '../assets/img/BUCONT1.png'


export default function Footer() {
    return (
      <div className='flex flex-col items-center'>
          <div className="tracking-tight font-bold text-cyan-100 text-4xl">
            <span className='text-cyan-300'>bu</span>cont.
          </div>
      <div className='flex'>
      <ul className="text-xs text-center font-semibold leading-6 text-cyan-100">
        <li>david@bucont.com</li>
        <li className='text-cyan-100 font-light'>- Founder -</li>
        <li className='pt-4'> 
        <div>
          <a className='text-cyan-100 hover:text-cyan-300 px-2' href="https://www.linkedin.com/in/bravocisterna/"><FontAwesomeIcon icon={faLinkedin} className="mr-2 text-4xl" /></a>
          <a className='text-cyan-100 hover:text-cyan-300 px-2' href="https://wa.me/56992438343?text=Hola,%20quisiera%20más%20información%20de%20Bucont"><FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-4xl" /></a>
        </div>
        </li>

      </ul>

      </div>
      </div>
    );
  }
  
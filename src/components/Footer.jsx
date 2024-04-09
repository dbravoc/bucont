import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import bucont from '../assets/img/BUCONT1.png'


export default function Footer() {
    return (
      <div className='flex flex-col items-center'>
                  <div className="flex md:flex-1">
            <a href="#" className="m-1.5 p-1.5">
              <img
                className="h-14 w-auto"
                src= {bucont}
                alt=""
              />
            </a>
          </div>
      <div className='flex'>
      <ul className="text-xs text-center font-semibold leading-6 text-cyan-100">
        <li>david@bucont.com</li>
        <li className='text-cyan-100 font-light'>- Founder -</li>
        <li className='pt-4'> <a className='text-cyan-100 hover:text-cyan-300' href="https://www.linkedin.com/in/bravocisterna/"><FontAwesomeIcon icon={faLinkedin} className="mr-2 text-4xl" /></a></li>
      </ul>

      </div>
      </div>
    );
  }
  
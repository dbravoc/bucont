import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import bucont from '../assets/img/BUCONT1.jpeg'


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
      <div className='flex gap-x-5'>
      <div className="">
        
          <a href="https://wa.me/56992438343?text=Hola,%20quisiera%20más%20información%20de%20Bucont" className="text-xs font-semibold leading-6 text-cyan-900">
              <FontAwesomeIcon icon={faWhatsapp} className=" text-cyan-100 text-4xl" />
          </a>
      </div>
      <ul className="text-xs font-semibold leading-6 text-cyan-100">
        <li>david@bucont.com</li>
        <li className='text-black font-light'>- Founder -</li>
      </ul>

      </div>
      </div>
    );
  }
  
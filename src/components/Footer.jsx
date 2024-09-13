import './css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/img/logos/logo bucont.png'


const Footer = () => {
  return (
    <div className="footer ">
      <div className="logo-container-footer">
        <img src={logo} alt="Imagen Logo" className='logo-footer' />

      </div> 
      <div className='column-footer-description'> 
          <p className='p1'>Bucont SpA</p> 
          <p className='p2'>Oficina de servicios de software </p>
      </div>
      <div className="column-footer-rows">
        <p className="contact-title">Contacto</p> 
        <p className="contact-info"> david@bucont.com</p>
        
      </div>
      <div className="column-footer-rows">
        <p className="contact-title">Encuentranos en</p>       
        <div className="column-footer-columns gap-x-5">
          <a href="https://www.instagram.com/bucont.digital/" target="_blank" rel="noopener noreferrer" className="rrss">
            <FontAwesomeIcon icon={faInstagram} size="xl" className="text-white" />
          </a>
        </div> 
      
      </div> 

    </div>
  );
};

export default Footer;
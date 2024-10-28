import './css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/img/logos/logo bucont.png'


const Footer = () => {
  return (
    <div className="footer ">
      <div className="logo-container-footer">
        <img src={logo} alt="Imagen Logo" className='logo-footer' />

      </div> 
      <div className='column-footer-description'> 
          <p className='p1'>Bucont SpA</p> 
          <p className='p2'>Oficina remota de soluciones digitales </p>
      </div>
      <div className="column-footer-rows">
        <p className="contact-title">Contacto</p> 
        <p className="contact-info"> team@bucont.com</p>
        
      </div>
      <div className="column-footer-rows">
        <p className="contact-title">Encuentranos en</p>       
        <div className="column-footer-columns gap-x-5">
          <a href="https://www.instagram.com/bucont.digital/" target="_blank" rel="noopener noreferrer" className="rrss">
            <FontAwesomeIcon icon={faInstagram} size="xl" className="text-white" />
          </a>
        </div> 
        
              {/* Botón de WhatsApp sticky */}
      <a
        href="https://wa.me/56992438343?text=Hola,%20quisiera%20más%20información%20de%CSR" 
        target="_blank" 
        rel="noopener noreferrer"
        className='fixed bottom-5 right-5 w-16 h-16 ButtonWhatsapp text-white bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 hover:bg-green-600'
        aria-label='Chat with us on WhatsApp'
      >
        <FontAwesomeIcon icon={faWhatsapp} className='text-4xl' />
      </a>
      
      </div> 

    </div>
  );
};

export default Footer;
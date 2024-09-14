import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  return (
      <a href="https://wa.me/56992438343?text=Hola%20quisiera%20más%20información%20sobre%20bucont.com" className="block  bg-yellow-400 px-3 py-2 text-center text-xl font-semibold text-cyan-900 shadow-sm hover:bg-cyan-900 hover:text-cyan-100">
        <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-4xl" />Hablemos
      </a>
  );
};

export default WhatsAppButton;

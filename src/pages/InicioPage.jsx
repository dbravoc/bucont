import Inicio from '../components/Inicio';
import QueHacemos from '../components/QueHacemos';
import Planes from '../components/Planes';
import Footer from '../components/Footer';
import Portafolio from '../components/Portafolio'

const InicioPage = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black via-cyan-800 to-cyan-100 p-6 pt-24 flex justify-center flex-wrap">
        <Inicio />
      </div>

      <div id="servicios" className="bg-gradient-to-b from-cyan-100 to-white px-2 py-20 w-full">
      <QueHacemos />
      </div>
      <div id="planes" className="bg-gradient-to-b from-white to-cyan-100 w-full pt-10">
        <Planes />
      </div>
      <div id="planes" className="bg-gradient-to-b from-cyan-100 to-white w-full">
        <Portafolio />
      </div>
      <div className="bg-black border-t-yellow-500 border-t-2">
      <Footer />
      </div>
      </>
  );
};

export default InicioPage;
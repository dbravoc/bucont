import './App.css'
import Inicio from './components/Inicio';
import Servicios from './components/Soluciones';
import Pricing from './components/Pricing';

import Footer from './components/Footer';
import Portafolio from './components/Portafolio';




const App = () => {
  return (
    <>
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between flex-wrap">
          <div className="w-full">
            <Inicio />
          </div>
        </div>
        <div id="servicios"  >
        <Servicios/>
        </div>
        <div id="portafolio">
        <Portafolio/>
        </div>
        <div id='precios'>
        <Pricing/>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;


import './App.css'
import Header from './components/Header';
import Inicio from './components/Inicio';

import Servicios from './components/Servicios';
import Pricing from './components/Pricing';
import Metodologia from './components/Metodologia';


import Footer from './components/Footer';
import Portafolio from './components/Portafolio';
import QuienesSomos from './components/QuienesSomos';
import QueHacemos from './components/QueHacemos';





const App = () => {
  return (
    <>
      <div className="mx-0 font-poppins">
        <div className=" bg-black pt-16 flex justify-between flex-wrap">
        <Header />
        </div>
        <div className="bg-gradient-to-b from-black via-cyan-800 to-cyan-100 p-6 py-20  flex justify-center flex-wrap">
        <Inicio />
        </div>
        <div className="bg-gradient-to-b from-cyan-100 via-cyan-100 to-cyan-100 p-6 py-20 flex justify-center flex-wrap">
        <QueHacemos />
        </div>

        <div id="servicios" className='bg-gradient-to-b from-cyan-100 to-white py-20 w-full'  >
        <Servicios/>
        </div>
        <div id='precios' className='bg-gradient-to-b from-white to-cyan-100 py-10 w-full '>
        <Metodologia/>
        </div>
        <div id="portafolio" className='bg-gradient-to-b from-cyan-100 to-white py-10 '>
        <Portafolio/>
        </div>

        <div id='precios' className='bg-gradient-to-b from-white to-cyan-100 pb-32 pt-10 w-full border-b-2'>
        <QuienesSomos/>
        </div>
        <div className='bg-black py-10'>
        <Footer/>
        </div>
      </div>
    </>
  );
};

export default App;


import './App.css'
import Header from './components/Header';
import Inicio from './components/Inicio';

import Servicios from './components/Servicios';
import Pricing from './components/Pricing';

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
        <div className="bg-gradient-to-b from-black via-cyan-800 to-cyan-100 p-6 py-24  flex justify-center flex-wrap">
        <Inicio />
        </div>
        <div className="bg-gradient-to-b from-cyan-100 via-cyan-100 to-cyan-100 p-6  flex justify-center flex-wrap">
        <QueHacemos />
        </div>
        <div id="servicios" className='bg-gradient-to-b from-cyan-100 to-white pt-12 w-full'  >
        <Servicios/>
        </div>
        <div id="portafolio" className='bg-white border-b-2 border-yellow-100'>
        <Portafolio/>
        </div>
        <div id='precios' className='bg-cyan-50 pb-32 pt-16 w-full border-b-2 border-yellow-100'>
        <Pricing/>
        </div>
        <div id='precios' className='bg-cyan-100 pb-32 pt-16 w-full border-b-2 border-yellow-100'>
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


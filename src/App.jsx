import './App.css'
import Header from './components/Header';
import Inicio from './components/Inicio';

import Servicios from './components/Servicios';
import Pricing from './components/Pricing';

import Footer from './components/Footer';
import Portafolio from './components/Portafolio';
import QuienesSomos from './components/QuienesSomos';




const App = () => {
  return (
    <>
      <div className="mx-0 font-poppins">
        <div className=" bg-black pb-32 pt-16 flex justify-between flex-wrap">
        <Header />
        </div>
        <div className="bg-black p-6 pb-32 border-b-2 border-yellow-100 flex justify-between flex-wrap">
        <Inicio />
        </div>
        <div id="servicios" className='bg-cyan-100 pb-32 pt-16 w-full border-b-2 border-yellow-100'  >
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


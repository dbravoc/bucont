import './App.css'
import Header from './components/Header';
import Inicio from './components/Inicio';

import Servicios from './components/Servicios';
import Pricing from './components/Pricing';

import Footer from './components/Footer';
import Portafolio from './components/Portafolio';



const App = () => {
  return (
    <>
      <div className="mx-auto font-poppins">
        <div className="flex justify-between flex-wrap">
          <div className=" bg-gray-900 mb-32 pt-16">
            <Header />
          </div>
          <div className="p-6 pb-32 border-b-2 border-yellow-100">
            <Inicio />
          </div>
        </div>
        <div id="servicios" className='bg-gray-100 pb-32 pt-16 w-full border-b-2 border-yellow-100'  >
        <Servicios/>
        </div>
        <div id="portafolio" className='bg-white border-b-2 border-yellow-100'>
        <Portafolio/>
        </div>
        <div id='precios' className='bg-gray-100 pb-32 pt-16 w-full border-b-2 border-yellow-100'>
        <Pricing/>
        </div>
        <div className='py-10'>
        <Footer/>
        </div>
      </div>
    </>
  );
};

export default App;


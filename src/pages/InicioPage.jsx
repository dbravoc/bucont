import React from 'react';
import Inicio from '../components/Inicio';
import QueHacemos from '../components/QueHacemos';
import NuestroImpacto from '../components/NuestroImpacto';
import Servicios from '../components/Servicios';
import Metodologia from '../components/Metodologia';
import Portafolio from '../components/Portafolio';
import QuienesSomos from '../components/QuienesSomos';
import Footer from '../components/Footer';

const InicioPage = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black via-cyan-800 to-cyan-100 p-6 py-56 flex justify-center flex-wrap">
        <Inicio />
      </div>
      <div className="bg-cyan-100 pt-20 pb-16 flex justify-center flex-wrap">
        <QueHacemos />
      </div>
      <div className="bg-cyan-100 pb-4 flex justify-center flex-wrap">
        <NuestroImpacto />
      </div>
      <div id="servicios" className="bg-gradient-to-b from-cyan-100 to-white py-20 w-full">
        <Servicios />
      </div>
      <div id="metodologia" className="bg-gradient-to-b from-white to-cyan-100 py-10 w-full">
        <Metodologia />
      </div>
      <div id="portafolio" className="bg-gradient-to-b from-cyan-100 to-white py-10">
        <Portafolio />
      </div>
      <div id="nosotros" className="bg-gradient-to-b from-white to-cyan-100 pb-32 w-full">
        <QuienesSomos />
      </div>
      <Footer />
    </>
  );
};

export default InicioPage;
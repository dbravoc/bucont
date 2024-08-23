import React from 'react';
import Inicio from '../components/Inicio';
import QueHacemos from '../components/QueHacemos';
import NuestroImpacto from '../components/NuestroImpacto';
import Servicios from '../components/Servicios';
import Planes from '../components/Planes';
import Portafolio from '../components/Portafolio';
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
      <div id="planes" className="bg-gradient-to-b from-white to-cyan-100 py-10 w-full">
        <Planes />
      </div>
      <div id="productos" className="bg-gradient-to-b from-cyan-100 via-cyan-100 to-cyan-100 py-10">
        <Portafolio />
      </div>
      <div className="bg-gradient-to-b from-cyan-100 via-cyan-800 to-black py-10">
      <Footer />
      </div>
      </>
  );
};

export default InicioPage;
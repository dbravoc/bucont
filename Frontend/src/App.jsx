import './App.css'
import Inicio from './components/Inicio';
import Materias from './components/Soluciones';
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
        <Materias />
        <Portafolio />
        <Footer />
      </div>
    </>
  );
};

export default App;


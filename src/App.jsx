import './App.css';
import Header from './components/Header';  // Importa el componente Header
import InicioPage from './pages/InicioPage';  // Importa el nuevo componente
import WhatsAppButton from './components/Botones';
import PagoExitoso from './pages/Pagos/PagoExitoso';
import PagoFallido from './pages/Pagos/PagoFallido';
import PagoPendiente from './pages/Pagos/PagoPendiente';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="mx-0 font-poppins">
        <Header />
        <Routes>
          <Route path="/" element={<InicioPage />} />  
          <Route path="/success" element={<PagoExitoso />} />
          <Route path="/failure" element={<PagoFallido />} /> 
          <Route path="/pending" element={<PagoPendiente />} /> 
 

        </Routes>
        <div className="fixed bottom-0 w-full">
          <WhatsAppButton />
        </div>
      </div>
    </Router>
  );
};

export default App;
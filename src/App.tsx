import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comercial from './pages/Comercial';
import EngenhariaDashboard from './pages/EngenhariaDashboard';
import EngenhariaAnalysis from './pages/EngenhariaAnalysis';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/comercial" element={<Comercial />} />
        <Route path="/engenharia" element={<EngenhariaDashboard />} />
        <Route path="/engenharia/analise" element={<EngenhariaAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

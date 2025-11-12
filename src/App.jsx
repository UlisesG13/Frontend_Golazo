// Tu App.jsx con rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Shared/pages/LandingPage';
import AdminDashboard from './Administrador/pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para tu página de bienvenida */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Ruta para tu dashboard de admin */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
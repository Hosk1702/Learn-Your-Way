import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import LandingPage from './features/landing/LandingPage';
import LoginPage from './features/auth/LoginPage';
import RegisterPage from './features/auth/RegisterPage';
import ForgotPasswordPage from './features/auth/ForgotPasswordPage';

function App() {
  return (
    <Router>
      <Routes>
        
        {/* Rutas Públicas (Con Header y Footer) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        {/* Rutas de Autenticación (Pantalla completa, sin Header/Footer)*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import LandingPage from './features/landing/LandingPage';
import LoginPage from './features/auth/LoginPage';
import RegisterPage from './features/auth/RegisterPage';
import ForgotPasswordPage from './features/auth/ForgotPasswordPage';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardPage from './features/dashboard/DashboardPage';
import CatalogPage from './features/dashboard/CatalogPage';
import ClassroomPage from './features/dashboard/ClassroomPage';

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

        {/* Rutas privadas / dashboards */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path='/classroom' element={<ClassroomPage />} />
        </Route>

        
        
      </Routes>
    </Router>
  );
}

export default App;
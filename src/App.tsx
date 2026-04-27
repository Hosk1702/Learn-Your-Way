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
import ApplyTeacherPage from './features/auth/ApplyTeacherPage';
import TeacherLandingPage from './features/landing/TeacgerLandingPage';
import PricingPage from './features/landing/PriceLanding';
import PublicCoursesPage from './features/landing/PublicCoursePage';
import UserProfilePage from './features/dashboard/UserProfileDashboard';
import TeacherLayout from './components/layout/TeacherLayout';
import TeacherDashboardPage from './features/dashboard/TeacherDashboard';
import TeacherCoursePage from "./features/teacher/TeacherCoursesPage"
import CourseStudioPage from './features/teacher/CouseStudioPage';
import TeacherStudentsPage from './features/teacher/TeacherStudentPage';
import CourseStudentsDetailPage from './features/teacher/CourseStudentDetailPage';
import TeacherMessagePage from './features/teacher/TeacherMessagePage';


function App() {
  return (
    <Router>
      <Routes>
        
        {/* Rutas Públicas (Con Header y Footer) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/teachers" element={<TeacherLandingPage />} />
          <Route path="/prices" element={<PricingPage />} />
          <Route path="/courses" element={<PublicCoursesPage />} />
        </Route>

        {/* Rutas de Autenticación (Pantalla completa, sin Header/Footer)*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/apply-teacher' element={<ApplyTeacherPage />}/>

        {/* Rutas privadas / dashboards */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path='/classroom' element={<ClassroomPage />} />
          <Route path='/profile' element={<UserProfilePage />} />
        </Route>

        <Route element={<TeacherLayout />}>
          <Route path='/teacher/dashboard' element={<TeacherDashboardPage />} />
          <Route path='/teacher/courses' element={<TeacherCoursePage />} />
          <Route path='/teacher/studio' element={<CourseStudioPage />} />

          <Route path="/teacher/students" element={<TeacherStudentsPage />} />
          <Route path="/teacher/students/:courseId" element={<CourseStudentsDetailPage />} />
          <Route path="/teacher/messages" element={<TeacherMessagePage />} />
          
          <Route path="/teacher/messages" element={<div className="p-8 text-slate-500 font-bold">Próximamente: Dudas Escaladas</div>} />
        </Route>

        
        
      </Routes>
    </Router>
  );
}

export default App;
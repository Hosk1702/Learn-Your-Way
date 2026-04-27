import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  PlaySquare, 
  MessageCircle, 
  Users, 
  PlusCircle, 
  LogOut,
  GraduationCap
} from 'lucide-react';

export default function TeacherLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      
      {/* SIDEBAR DEL PROFESOR - Minimalista y Claro */}
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col justify-between flex-shrink-0">
        <div>
          {/* Logo y Branding */}
          <div className="h-20 flex items-center px-8 border-b border-slate-100">
            <Link to="/" className="flex items-center gap-2 font-black text-xl text-slate-900 group">
              <GraduationCap className="w-7 h-7 text-orange-500 group-hover:rotate-12 transition-transform" />
              LYW <span className="text-orange-500">Studio</span>
            </Link>
          </div>

          {/* Navegación Principal */}
          <nav className="p-4 space-y-2">
            <TeacherNavItem to="/teacher/dashboard" icon={<BarChart3 />} label="Panel Principal" isActive={location.pathname === '/teacher/dashboard'} />
            <TeacherNavItem to="/teacher/courses" icon={<PlaySquare />} label="Mis Cursos" isActive={location.pathname === '/teacher/courses'} />
            <TeacherNavItem to="/teacher/students" icon={<Users />} label="Estudiantes" isActive={location.pathname === '/teacher/students'} />
            <TeacherNavItem to="/teacher/messages" icon={<MessageCircle />} label="Dudas Escaladas" isActive={location.pathname === '/teacher/messages'} />
          </nav>
        </div>

        {/* Zona Inferior: Nuevo Curso */}
        <div className="p-6 border-t border-slate-100">
          <Link to={'./teacher/studio'} className="flex items-center justify-center gap-2 px-4 py-3 w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all font-bold text-sm shadow-lg shadow-orange-500/20 hover:-translate-y-0.5">
            <PlusCircle className="w-5 h-5" />
            Nuevo Curso
          </Link>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function TeacherNavItem({ to, icon, label, isActive }: any) {
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
        isActive 
          ? 'bg-orange-50 text-orange-600' // Estado Activo: Fondo naranja muy suave, texto naranja fuerte
          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900' // Estado Inactivo: Gris, al pasar el cursor se oscurece
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
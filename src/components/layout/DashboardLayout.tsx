import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Compass, 
  // Video, 
  LogOut, 
  Bell, 
  Search, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function DashboardLayout() {
  // useLocation nos sirve para saber en qué URL estamos y "pintar" el botón activo en el menú
  const location = useLocation();

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col justify-between flex-shrink-0">
        
        <div>
          <div className="h-20 flex items-center px-8 border-b border-slate-100">
            <Link to="/" className="flex items-center gap-2 text-indigo-600 font-black text-xl">
              <BookOpen className="w-6 h-6" />
              LearnYourWay
            </Link>
          </div>

          <nav className="p-4 space-y-2">
            <NavItem to="/dashboard" icon={<LayoutDashboard />} label="Mi Aprendizaje" isActive={location.pathname === '/dashboard'} />
            <NavItem to="/catalog" icon={<Compass />} label="Explorar Catálogo" isActive={location.pathname === '/catalog'} />
            {/* <NavItem to="/classroom" icon={<Video />} label="Aula Virtual" isActive={location.pathname === '/classroom'} /> */}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl mb-4">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
              M
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold text-slate-900 truncate">Marco</p>
              <p className="text-xs text-slate-500 truncate">Estudiante Pro</p>
            </div>
          </div>
          <button className="flex items-center gap-3 px-4 py-2.5 w-full text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors font-semibold text-sm">
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

     <div className="flex-1 flex flex-col min-w-0">
        
         <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 flex-shrink-0 z-10">
          
          <div className="relative w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input 
              type="text" 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" 
              placeholder="Buscar cursos, lecciones..." 
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-slate-400 hover:text-indigo-600 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-sm font-bold">
              <Sparkles className="w-4 h-4" />
              IA Activa
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 bg-slate-50">
          <Outlet />
        </main>
        
      </div>
    </div>
  );
}

// Componente auxiliar para los botones del menú lateral
function NavItem({ to, icon, label, isActive }: any) {
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
        isActive 
          ? 'bg-indigo-50 text-indigo-600' // Si estamos en esa ruta, lo pintamos de índigo
          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900' // Si no, es gris y cambia al pasar el mouse
      }`}
    >
      <div className={`${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>
        {icon}
      </div>
      {label}
    </Link>
  );
}
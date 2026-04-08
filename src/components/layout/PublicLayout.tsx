import { Outlet, Link } from 'react-router-dom';
import { BookOpen, Sparkles } from 'lucide-react';

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      
      {/* Header Minimalista */}
      <header className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-indigo-600 p-2 rounded-xl text-white group-hover:bg-indigo-700 transition">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            LearnYourWay
          </span>
          <span className="hidden sm:flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full ml-2 border border-indigo-100">
            <Sparkles className="w-3 h-3" /> AI-Powered
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="/courses" className="hover:text-indigo-600 transition">Cursos</a>
          <a href="/teachers" className="hover:text-indigo-600 transition">Para Profesores</a>
          <a href="/prices" className="hover:text-indigo-600 transition">Precios</a>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
            Iniciar Sesión
          </Link>
          <Link to="/register" className="bg-indigo-600 text-white text-sm px-5 py-2.5 rounded-full font-medium hover:bg-indigo-700 hover:shadow-md hover:shadow-indigo-200 transition-all">
            Inscribirse Gratis
          </Link>
        </div>
      </header>

      {/* Contenido Dinámico */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer Amigable */}
      <footer className="bg-white py-16 px-8 border-t border-slate-100 mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-slate-800">LearnYourWay</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              La plataforma LMS de próxima generación que combina IA, gamificación y analíticas para transformar la educación.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Categorías</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-indigo-600">Programación & Dev</a></li>
              <li><a href="#" className="hover:text-indigo-600">Diseño UI/UX</a></li>
              <li><a href="#" className="hover:text-indigo-600">Data Science</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Plataforma</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/login" className="hover:text-indigo-600">Iniciar Sesión</Link></li>
              <li><a href="#" className="hover:text-indigo-600">Precios</a></li>
              <li><a href="#" className="hover:text-indigo-600">Para Universidades</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Soporte</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-indigo-600">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-indigo-600">Términos de Uso</a></li>
              <li><a href="#" className="hover:text-indigo-600">Privacidad</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
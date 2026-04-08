import { Link } from 'react-router-dom';
import { CheckCircle2, Zap } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="w-full bg-slate-50 selection:bg-indigo-100 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Invierte en tu futuro
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Elige el plan que mejor se adapte a tu ritmo de aprendizaje. Sin plazos forzosos, cancela cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          
          {/* PLAN BÁSICO */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-200 hover:border-indigo-200 group">
            <h3 className="text-xl font-black text-slate-900 mb-2">Básico</h3>
            <p className="text-sm text-slate-500 mb-6 font-medium">Para dar los primeros pasos</p>
            <div className="mb-6">
              <span className="text-5xl font-black text-slate-900">Gratis</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm font-medium text-slate-600">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Acceso a 5 cursos introductorios</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Foros de la comunidad</li>
              <li className="flex items-center gap-3 opacity-50"><CheckCircle2 className="w-5 h-5 text-slate-300" /> Sin tutor de IA</li>
              <li className="flex items-center gap-3 opacity-50"><CheckCircle2 className="w-5 h-5 text-slate-300" /> Sin certificados</li>
            </ul>
            <Link to="/register" className="block w-full py-3.5 text-center rounded-xl font-bold text-slate-700 bg-slate-50 border border-slate-200 transition-all duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100">
              Crear cuenta gratis
            </Link>
          </div>

          {/* PLAN PRO (Destacado) */}
          {/* Fíjate aquí: como ya estaba levantada en -translate-y-4, al pasar el mouse la levantamos aún más a -translate-y-7 */}
          <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-indigo-500 shadow-2xl relative transform md:-translate-y-4 transition-all duration-500 hover:-translate-y-7 hover:shadow-indigo-500/40 group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1 shadow-lg">
              <Zap className="w-3 h-3 fill-current" /> Más Popular
            </div>
            <h3 className="text-xl font-black text-white mb-2">Pro</h3>
            <p className="text-sm text-slate-400 mb-6 font-medium">Acceso total a la plataforma</p>
            <div className="mb-6 flex items-end gap-1">
              <span className="text-5xl font-black text-white">$15</span>
              <span className="text-slate-400 font-medium mb-1">/mes</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm font-medium text-slate-300">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Acceso ilimitado al catálogo</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Tutor IA 24/7 en todos los cursos</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Certificados verificables</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Descargas de material offline</li>
            </ul>
            <Link to="/register" className="block w-full py-3.5 text-center rounded-xl font-black text-slate-900 bg-gradient-to-r from-cyan-400 to-indigo-400 transition-all duration-300 shadow-lg shadow-cyan-400/20 group-hover:shadow-cyan-400/40 group-hover:scale-[1.02]">
              Empezar prueba de 7 días
            </Link>
          </div>

          {/* PLAN ELITE */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-200 hover:border-indigo-200 group">
            <h3 className="text-xl font-black text-slate-900 mb-2">Mentoría</h3>
            <p className="text-sm text-slate-500 mb-6 font-medium">Para acelerar tu carrera</p>
            <div className="mb-6 flex items-end gap-1">
              <span className="text-5xl font-black text-slate-900">$49</span>
              <span className="text-slate-400 font-medium mb-1">/mes</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm font-medium text-slate-600">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Todo lo incluido en Pro</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Revisión de código/proyectos</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Sesión mensual 1 a 1 en vivo</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Bolsa de trabajo exclusiva</li>
            </ul>
            <Link to="/register" className="block w-full py-3.5 text-center rounded-xl font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-200">
              Elegir Mentoría
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
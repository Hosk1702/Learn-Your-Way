import { Link } from 'react-router-dom';
import { Bot, LineChart, PlayCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TeacherLandingPage() {
  return (
    <div className="w-full bg-white selection:bg-indigo-100 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-8">
          Programa para Creadores
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 max-w-4xl leading-tight">
          Enseña lo que amas. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
            La IA hace el resto.
          </span>
        </h1>
        
        <p className="text-xl text-slate-500 mb-12 max-w-2xl leading-relaxed">
          Crea cursos interactivos, monetiza tu conocimiento y deja que nuestro Tutor IA responda las dudas repetitivas de tus estudiantes 24/7.
        </p>
        
        {/* Este es el botón que ahora sí los lleva al formulario */}
        <Link 
          to="/apply-teacher" 
          className="px-10 py-5 bg-slate-900 hover:bg-indigo-600 text-white rounded-full font-black transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 text-lg group"
        >
          Comenzar mi aplicación <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      {/* 2. BENEFICIOS (Grid de 3 columnas) */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-8">
              <Bot className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Cero dudas repetitivas</h3>
            <p className="text-slate-500 leading-relaxed">
              Nuestro asistente de IA lee tus materiales y responde el 80% de las preguntas de los alumnos al instante. Tú solo intervienes en las dudas complejas.
            </p>
          </div>

          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-8">
              <PlayCircle className="w-7 h-7 text-cyan-600" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Estudio Creativo</h3>
            <p className="text-slate-500 leading-relaxed">
              Sube tus videos y la plataforma genera automáticamente subtítulos, resúmenes en texto y quizzes interactivos para mantener la atención.
            </p>
          </div>

          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-8">
              <LineChart className="w-7 h-7 text-orange-600" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Analíticas de Calor</h3>
            <p className="text-slate-500 leading-relaxed">
              Descubre exactamente en qué minuto del video se confunden o aburren tus estudiantes para mejorar tu contenido constantemente.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
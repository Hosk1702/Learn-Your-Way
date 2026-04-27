import { Link } from 'react-router-dom';
import { Play, Bot, Mic, Flame, PauseCircle, LineChart, Globe, Zap, CheckCircle2, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center w-full bg-white selection:bg-indigo-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-6xl mx-auto px-6 pt-32 pb-24 text-center flex flex-col items-center">
        
        {/* Elementos Flotantes (Badges de Interfaz) */}
        <div className="hidden lg:flex absolute top-20 left-0 items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 animate-bounce [animation-duration:3s]">
          <div className="bg-orange-100 p-1.5 rounded-lg">
            <Flame className="w-4 h-4 text-orange-500" />
          </div>
          <span className="text-sm font-bold text-slate-700">Racha de 14 días</span>
        </div>

        <div className="hidden lg:flex absolute top-48 right-0 items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 animate-pulse">
          <div className="bg-indigo-100 p-1.5 rounded-lg">
            <Bot className="w-4 h-4 text-indigo-600" />
          </div>
          <span className="text-sm font-bold text-slate-700">IA respondiendo...</span>
        </div>

        {/* Etiqueta Superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-10">
          <Sparkles className="w-3.5 h-3.5" />
          Plataforma LMS con IA de próxima generación
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight mb-8 max-w-5xl leading-[1.1]">
          Aprende con IA que <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
            entiende tu ritmo
          </span>
        </h1>
        
        <p className="text-xl text-slate-500 mb-12 max-w-2xl leading-relaxed">
          Tutorías en tiempo real, gamificación avanzada y podcasts automáticos. Todo diseñado para que nunca dejes de aprender.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Link to="/courses" className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-3 text-lg">
            Explorar Catálogo <Play className="w-4 h-4 fill-current" />
          </Link>
          <Link to="/register" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 rounded-full font-bold transition-all text-lg">
            Inscribirse Gratis
          </Link>
        </div>
      </section>

      {/* 2. STATS STRIP (Enfocado en Español) */}
      <section className="w-full border-y border-slate-100 bg-slate-50/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">
          <div className="py-12 px-8 text-center border-b md:border-b-0 md:border-r border-slate-100">
            <div className="text-5xl font-black text-slate-900 mb-2">200+</div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Cursos en español</div>
          </div>
          <div className="py-12 px-8 text-center border-b md:border-b-0 md:border-r border-slate-100">
            <div className="text-5xl font-black text-slate-900 mb-2">98%</div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Tasa de satisfacción</div>
          </div>
          <div className="py-12 px-8 text-center">
            <div className="text-5xl font-black text-slate-900 mb-2">35min</div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Ahorro por lección</div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE CARACTERÍSTICAS */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Características Clave
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            Una plataforma. <br className="md:hidden" /> Seis superpoderes.
          </h2>
          <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            Funciones extraídas de los casos de uso más exigentes para garantizar que cada minuto de estudio cuente. [cite: 160, 290, 524]
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard 
            icon={<Bot className="w-6 h-6" />} title="Tutoría IA en tiempo real" tag="CU-25" color="indigo"
            desc="Resuelve dudas técnicas sin pausar el video. La IA conoce el contexto exacto de tu clase. [cite: 445]"
          />
          <FeatureCard 
            icon={<Mic className="w-6 h-6" />} title="Modo Podcast" tag="CU-52" color="cyan"
            desc="Convierte cualquier lección en audio para repasar mientras te mueves. [cite: 885]"
          />
          <FeatureCard 
            icon={<Flame className="w-6 h-6" />} title="Rachas de estudio" tag="CU-33" color="orange"
            desc="Mantén tu motivación con contadores diarios y recompensas visuales. [cite: 573]"
          />
          <FeatureCard 
            icon={<PauseCircle className="w-6 h-6" />} title="Pausas Activas" tag="CU-32" color="emerald"
            desc="Validación de conocimientos mediante micro-preguntas integradas en el video. [cite: 556]"
          />
          <FeatureCard 
            icon={<LineChart className="w-6 h-6" />} title="Analíticas de Calor" tag="CU-38" color="rose"
            desc="Identifica los puntos exactos donde los estudiantes necesitan más ayuda. [cite: 654]"
          />
          <FeatureCard 
            icon={<Globe className="w-6 h-6" />} title="Importación Moodle" tag="CU-15" color="purple"
            desc="Migración masiva de contenidos institucionales en segundos. [cite: 271]"
          />
        </div>
      </section>

      {/* 4. TEACHER CTA (Tarjeta Flotante Premium) */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-40">
        <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-indigo-100">
          
          {/* Brillo decorativo */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="text-indigo-400 text-xs font-black uppercase tracking-[0.2em] mb-6">Para Profesores</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Crea cursos que los <br/> estudiantes <span className="text-cyan-400 underline decoration-cyan-400/30 underline-offset-8">no abandonan</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Utiliza herramientas de autoría avanzadas y deja que la IA gestione las dudas básicas por ti. [cite: 212, 509]
              </p>
              
              <div className="space-y-4 mb-12">
                <CheckItem text="Analíticas de retención profunda [cite: 670]" />
                <CheckItem text="Bandeja de dudas escaladas (Human-in-the-loop) [cite: 706]" />
                <CheckItem text="Importación inteligente desde plataformas legacy [cite: 932]" />
              </div>

              <Link
                to="/apply-teacher"
              className="w-full sm:w-auto px-10 py-5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 rounded-full font-black transition-all shadow-lg shadow-cyan-400/20 text-lg">
                Solicitar Cuenta Docente
              </Link>
            </div>

            {/* Simulación de Video/Interfaz */}
            <div className="relative group">
              <div className="aspect-video bg-slate-800 rounded-[2.5rem] border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-8 h-8 text-white fill-current" />
                </div>
              </div>
              
              {/* Badge flotante de la imagen */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block animate-float">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-sm font-black text-slate-800">127 estudiantes activos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="text-sm font-bold text-slate-500">IA gestionó 43 dudas hoy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// COMPONENTES AUXILIARES
function FeatureCard({ icon, title, desc, tag, color }: any) {
  const colorMap: any = {
    indigo: 'bg-indigo-50 text-indigo-600',
    cyan: 'bg-cyan-50 text-cyan-600',
    orange: 'bg-orange-50 text-orange-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    rose: 'bg-rose-50 text-rose-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-indigo-100 hover:shadow-[0_20px_50px_rgba(79,70,229,0.05)] transition-all duration-500">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${colorMap[color]} group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className={`text-[10px] font-black px-3 py-1 rounded-full mb-4 inline-block tracking-widest uppercase ${colorMap[color]}`}>
        {tag}
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 text-slate-300">
      <div className="bg-cyan-400/10 p-1 rounded-md">
        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
      </div>
      <span className="font-bold text-sm">{text}</span>
    </div>
  );
}
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, Play, Volume2, Settings, Zap, 
  Bot, FileText, Bookmark, Users, Send, ChevronDown, CheckCircle2,
  Download, ThumbsUp
} from 'lucide-react';

export default function ClassroomPage() {
  // Estado para controlar qué pestaña está activa en el panel derecho
  const [activeTab, setActiveTab] = useState('ia');

  return (
    <div className="max-w-[1600px] mx-auto pb-12">
      
      {/* 1. BREADCRUMBS (Ruta de navegación superior) */}
      <div className="flex items-center gap-2 text-sm font-bold text-slate-500 mb-6">
        <Link to="/dashboard" className="flex items-center hover:text-indigo-600 transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1" /> Mi Aprendizaje
        </Link>
        <span>/</span>
        <span className="text-slate-400">Machine Learning con Python</span>
        <span>/</span>
        <span className="text-indigo-600">Redes Neuronales Convolucionales</span>
      </div>

      {/* 2. LAYOUT PRINCIPAL (Grid: 70% izquierda, 30% derecha) */}
      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* ========================================= */}
        {/* COLUMNA IZQUIERDA (Video y Temario) 70%   */}
        {/* ========================================= */}
        <div className="w-full xl:w-2/3 flex flex-col gap-6">
          
          {/* REPRODUCTOR DE VIDEO */}
          <div className="bg-slate-900 aspect-video rounded-3xl overflow-hidden relative shadow-xl flex flex-col justify-end group">
            {/* Simulación del video (Fondo oscuro con ícono) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
               <div className="text-7xl drop-shadow-2xl mb-4 animate-pulse">🤖</div>
               <h2 className="text-white font-black text-2xl">Redes Neuronales Convolucionales</h2>
               <p className="text-slate-400 font-medium text-sm">Machine Learning con Python</p>
            </div>

            {/* Controles del reproductor (Aparecen abajo) */}
            <div className="relative z-10 bg-gradient-to-t from-slate-950 to-transparent p-6 pt-20">
              
              {/* Botón de Pausa Activa flotante */}
              <div className="absolute right-6 bottom-20">
                <button className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md border border-indigo-500/30 hover:bg-indigo-600 text-indigo-400 hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-lg">
                  <Zap className="w-4 h-4 fill-current" /> Pausa Activa
                </button>
              </div>

              {/* Barra de progreso */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-white">26:44</span>
                <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden cursor-pointer">
                  <div className="w-[65%] h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md"></div>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-400">42:18</span>
              </div>

              {/* Botones inferiores */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-6">
                  <Play className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors fill-current" />
                  <Volume2 className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors" />
                </div>
                <div className="flex items-center gap-6 text-slate-300">
                  <Settings className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* INFO DEL CURSO Y BOTONES EXTRA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div>
              <h1 className="text-2xl font-black text-slate-900">Redes Neuronales Convolucionales</h1>
              <p className="text-sm font-medium text-slate-500 mt-1">Módulo 3 · Lección 4</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">
                Descargar Audio
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-700 font-bold text-sm border border-indigo-100 hover:bg-indigo-100 transition-colors">
                <FileText className="w-4 h-4" /> Resumen IA
              </button>
            </div>
          </div>

          {/* TEMARIO DEL CURSO (Acordeón simplificado) */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h3 className="font-black text-slate-900">Contenido del Curso</h3>
            </div>
            <div className="divide-y divide-slate-100">
              <div className="p-4 px-6 flex items-center justify-between hover:bg-slate-50 cursor-pointer text-slate-500">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> <span className="font-bold">1. Introducción al ML</span></div>
                <span className="text-sm font-bold">6/6</span>
              </div>
              <div className="p-4 px-6 flex items-center justify-between bg-indigo-50 border-l-4 border-indigo-600 cursor-pointer">
                <div className="flex items-center gap-3"><Play className="w-5 h-5 text-indigo-600 fill-current" /> <span className="font-bold text-indigo-900">2. Redes Neuronales</span></div>
                <span className="text-sm font-bold text-indigo-600">5/8</span>
              </div>
              <div className="p-4 px-6 flex items-center justify-between hover:bg-slate-50 cursor-pointer text-slate-400">
                <div className="flex items-center gap-3"><ChevronDown className="w-5 h-5" /> <span className="font-bold">3. CNN y Visión Computacional</span></div>
                <span className="text-sm font-bold">0/10</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* COLUMNA DERECHA (Panel Interactivo) 30%   */}
        {/* ========================================= */}
        {/* sticky top-8 hace que este panel se quede fijo al hacer scroll en pantallas grandes */}
        <div className="w-full xl:w-1/3 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col h-[800px] xl:sticky xl:top-8 overflow-hidden">
          
          {/* TABS HEADER */}
          <div className="flex border-b border-slate-100 shrink-0">
            <TabButton active={activeTab === 'ia'} onClick={() => setActiveTab('ia')} icon={<Bot />} label="IA" />
            <TabButton active={activeTab === 'recursos'} onClick={() => setActiveTab('recursos')} icon={<FileText />} label="Recursos" />
            <TabButton active={activeTab === 'notas'} onClick={() => setActiveTab('notas')} icon={<Bookmark />} label="Notas" />
            <TabButton active={activeTab === 'foro'} onClick={() => setActiveTab('foro')} icon={<Users />} label="Foro" />
          </div>

          {/* TAB CONTENT: Usamos un Switch/If para mostrar el contenido según el estado */}
          <div className="flex-1 overflow-y-auto bg-slate-50">
            
            {/* CONTENIDO IA (Chatbot) */}
            {activeTab === 'ia' && (
              <div className="flex flex-col h-full p-4">
                <div className="flex-1 space-y-4">
                  <div className="bg-indigo-100/50 p-4 rounded-2xl rounded-tl-none border border-indigo-100 max-w-[85%] text-sm text-indigo-900 font-medium">
                    ¡Hola! Soy tu asistente IA para este curso. Puedes preguntarme cualquier duda mientras el video continúa reproduciéndose.
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tr-none border border-slate-200 max-w-[85%] ml-auto text-sm text-slate-700 shadow-sm">
                    ¿Cuál es la diferencia entre una CNN y una RNN?
                  </div>
                  <div className="bg-indigo-100/50 p-4 rounded-2xl rounded-tl-none border border-indigo-100 max-w-[90%] text-sm text-indigo-900 font-medium leading-relaxed">
                    Las CNN (Convolucionales) están optimizadas para datos con estructura espacial, como imágenes. Las RNN (Recurrentes) procesan secuencias temporales, como texto o audio. Para lo que estás viendo ahora, CNN es la elección correcta. ¿Quieres que profundice en alguna?
                  </div>
                </div>
                <div className="mt-4 relative shrink-0">
                  <input type="text" placeholder="Pregúntale a la IA..." className="w-full bg-white border border-slate-200 rounded-2xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm" />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* CONTENIDO RECURSOS */}
            {activeTab === 'recursos' && (
              <div className="p-4 space-y-3">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Materiales de esta lección</p>
                <ResourceCard icon="📄" title="Slides de la lección" type="PDF" />
                <ResourceCard icon="💻" title="Cuaderno Jupyter" type="IPYNB" />
                <ResourceCard icon="🤖" title="Resumen IA" type="MD" />
              </div>
            )}

            {/* CONTENIDO NOTAS */}
            {activeTab === 'notas' && (
              <div className="p-4 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4 text-xs font-black uppercase tracking-widest text-slate-400">
                  <span>Mis notas</span>
                  <span className="text-indigo-500">Min actual: 26:44</span>
                </div>
                <textarea 
                  className="w-full flex-1 bg-white border border-slate-200 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm resize-none" 
                  placeholder="Escribe una nota con timestamp automático..."
                ></textarea>
                <button className="mt-4 w-full py-3.5 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 shadow-sm transition-colors">
                  Guardar nota con timestamp
                </button>
              </div>
            )}

            {/* CONTENIDO FORO */}
            {activeTab === 'foro' && (
              <div className="p-4 space-y-4">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Discusiones de esta lección</p>
                <ForumCard 
                  name="María P." time="@ 28:12" likes={12}
                  msg="¿El padding 'same' vs 'valid' afecta la dimensión de salida de la misma manera en TF y PyTorch?"
                />
                <ForumCard 
                  name="Luis M." time="@ 15:40" likes={8}
                  msg="Excelente explicación del stride, nunca lo había entendido tan claro."
                />
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

// --- COMPONENTES AUXILIARES PARA LAS PESTAÑAS ---

function TabButton({ active, onClick, icon, label }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex-1 py-4 flex flex-col items-center gap-1.5 transition-colors border-b-2 ${
        active ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50' : 'border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50'
      }`}
    >
      <div className="w-5 h-5">{icon}</div>
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
    </button>
  );
}

function ResourceCard({ icon, title, type }: any) {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-200 cursor-pointer transition-colors group">
      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-bold text-slate-900">{title}</h4>
        <p className="text-xs font-medium text-slate-400">{type}</p>
      </div>
      <Download className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" />
    </div>
  );
}

function ForumCard({ name, time, msg, likes }: any) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-black text-slate-900">{name}</span>
        <span className="text-[10px] font-black uppercase tracking-widest bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md">{time}</span>
      </div>
      <p className="text-sm text-slate-600 font-medium mb-3">{msg}</p>
      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors w-fit">
        <ThumbsUp className="w-4 h-4" /> {likes}
      </div>
    </div>
  );
}
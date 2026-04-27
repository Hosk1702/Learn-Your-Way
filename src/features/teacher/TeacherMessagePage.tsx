import { useState } from 'react';
import { Search, Send, AlertCircle, Video, CheckCircle2, Clock, Filter } from 'lucide-react';

export default function TeacherMessagesPage() {
  // Datos simulados de dudas que la IA no pudo contestar
  const doubts = [
    {
      id: 1,
      student: 'Ana García',
      course: 'Machine Learning con Python',
      lesson: '3. Redes Neuronales Convolucionales',
      time: 'Hace 2 horas',
      question: 'Profesor, entiendo cómo funciona la capa de convolución, pero ¿cómo se decide el tamaño exacto del kernel en proyectos reales de reconocimiento facial? La IA me dio la teoría, pero quiero saber su experiencia práctica.',
      status: 'pending'
    },
    {
      id: 2,
      student: 'Roberto Solis',
      course: 'React Avanzado & Arquitectura',
      lesson: '5. Patrón Render Props',
      time: 'Hace 5 horas',
      question: 'En mi trabajo tenemos un proyecto legacy con clases, ¿recomienda refactorizar todo a hooks primero o puedo mezclar render props con componentes funcionales sin afectar el rendimiento?',
      status: 'pending'
    },
    {
      id: 3,
      student: 'Elena Peñuñuri',
      course: 'React Avanzado & Arquitectura',
      lesson: '2. Hooks Personalizados',
      time: 'Ayer',
      question: 'Ya pude resolverlo, era un problema con las dependencias del useEffect. ¡Gracias!',
      status: 'resolved'
    }
  ];

  // Estado para saber qué mensaje estamos viendo
  const [activeDoubt, setActiveDoubt] = useState(doubts[0]);

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)] flex flex-col pb-8">
      
      <div className="mb-8 flex-shrink-0">
        <h1 className="text-3xl font-black text-slate-900">Dudas Escaladas</h1>
        <p className="text-slate-500 mt-2 font-medium">
          Preguntas complejas que el Tutor IA ha transferido a tu bandeja para una respuesta experta.
        </p>
      </div>

      {/* CONTENEDOR PRINCIPAL DIVIDIDO */}
      <div className="flex-1 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex min-h-0">
        
        {/* COLUMNA IZQUIERDA: LISTA DE MENSAJES */}
        <div className="w-1/3 border-r border-slate-100 flex flex-col bg-white">
          <div className="p-6 border-b border-slate-100 space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar alumno o duda..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg">Pendientes</button>
              <button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-50">Resueltas</button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            {doubts.map((doubt) => (
              <div 
                key={doubt.id}
                onClick={() => setActiveDoubt(doubt)}
                className={`p-6 border-b border-slate-50 cursor-pointer transition-all ${
                  activeDoubt.id === doubt.id 
                    ? 'bg-orange-50 border-l-4 border-l-orange-500' 
                    : 'hover:bg-slate-50 border-l-4 border-l-transparent'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-slate-900">{doubt.student}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{doubt.time}</span>
                </div>
                <h4 className="text-xs font-bold text-orange-600 mb-2 truncate">{doubt.course}</h4>
                <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                  {doubt.question}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA: DETALLE Y RESPUESTA */}
        <div className="w-2/3 flex flex-col bg-slate-50/50">
          
          {/* Header del chat */}
          <div className="p-6 bg-white border-b border-slate-100 flex justify-between items-center shadow-sm z-10">
            <div>
              <h2 className="text-xl font-black text-slate-900">{activeDoubt.student}</h2>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mt-1">
                <Video className="w-4 h-4 text-orange-500" />
                <span>{activeDoubt.lesson}</span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl font-bold text-sm hover:bg-emerald-100 transition-colors">
              <CheckCircle2 className="w-4 h-4" /> Marcar resuelta
            </button>
          </div>

          {/* Área de mensajes */}
          <div className="flex-1 p-8 overflow-y-auto space-y-6">
            
            {/* Aviso de la IA */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold">
                <AlertCircle className="w-4 h-4" /> La IA derivó esta duda por requerir experiencia práctica.
              </span>
            </div>

            {/* Burbuja del Alumno */}
            <div className="flex gap-4 max-w-2xl">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-black text-slate-500 flex-shrink-0">
                {activeDoubt.student.charAt(0)}
              </div>
              <div className="bg-white p-5 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm">
                <p className="text-slate-700 leading-relaxed">{activeDoubt.question}</p>
                <span className="text-[10px] font-bold text-slate-400 mt-3 block">{activeDoubt.time}</span>
              </div>
            </div>

          </div>

          {/* Caja de Respuesta */}
          <div className="p-6 bg-white border-t border-slate-100">
            <div className="relative">
              <textarea 
                rows={3} 
                placeholder="Escribe tu respuesta experta aquí..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 pr-16 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none transition-all"
              ></textarea>
              <button className="absolute bottom-4 right-4 w-10 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-xl flex items-center justify-center transition-all shadow-md shadow-orange-200 hover:-translate-y-0.5">
                <Send className="w-4 h-4 ml-1" />
              </button>
            </div>
            <p className="text-[10px] text-slate-400 font-medium mt-2 text-center">
              Tu respuesta será enviada al alumno por correo y aparecerá en su panel del aula virtual.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
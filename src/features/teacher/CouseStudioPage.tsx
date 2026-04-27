import { useState } from 'react';
import { 
  Plus, 
  GripVertical, 
  Video, 
  FileText, 
  Trash2, 
  ChevronDown, 
  UploadCloud, 
  Save,
  PlayCircle
} from 'lucide-react';

export default function CourseStudioPage() {
  // Estado inicial con un módulo de ejemplo
  const [modules, setModules] = useState([
    {
      id: 1,
      title: 'Módulo 1: Fundamentos de la Materia',
      lessons: [
        { id: 101, title: 'Introducción al curso', type: 'video' },
        { id: 102, title: 'Conceptos básicos iniciales', type: 'video' }
      ]
    }
  ]);

  return (
    <div className="max-w-5xl mx-auto pb-20">
      
      {/* HEADER DE EDICIÓN */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <nav className="text-sm font-bold text-slate-400 mb-2">Mis Cursos / Editor</nav>
          <h1 className="text-3xl font-black text-slate-900">Machine Learning con Python</h1>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-all">
            Vista Previa
          </button>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 shadow-lg shadow-orange-200 transition-all flex items-center gap-2">
            <Save className="w-4 h-4" /> Publicar Cambios
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUMNA IZQUIERDA: CONSTRUCTOR DE TEMARIO */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-black text-slate-900">Contenido del Curso</h2>
            <button className="text-sm font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
              <Plus className="w-4 h-4" /> Añadir Módulo
            </button>
          </div>

          {modules.map((module) => (
            <div key={module.id} className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm">
              <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <GripVertical className="text-slate-300 w-5 h-5 cursor-grab" />
                  <input 
                    type="text" 
                    defaultValue={module.title} 
                    className="bg-transparent font-black text-slate-900 focus:outline-none border-b border-transparent focus:border-orange-500 transition-colors"
                  />
                </div>
                <button className="text-slate-400 hover:text-rose-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 space-y-3">
                {module.lessons.map((lesson) => (
                  <div key={lesson.id} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-orange-200 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-orange-50 text-orange-500 rounded-lg">
                        {lesson.type === 'video' ? <Video className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                      </div>
                      <span className="text-sm font-bold text-slate-700">{lesson.title}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-orange-500"><ChevronDown className="w-4 h-4" /></button>
                      <button className="p-2 text-slate-400 hover:text-rose-500"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}

                <button className="w-full py-4 border-2 border-dashed border-slate-100 rounded-2xl text-slate-400 text-sm font-bold hover:border-orange-200 hover:text-orange-500 transition-all flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" /> Añadir Lección
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* COLUMNA DERECHA: CONFIGURACIÓN RÁPIDA */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <h3 className="font-black text-slate-900 mb-6">Portada del Curso</h3>
            <div className="aspect-video bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-6 text-center group hover:border-orange-300 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                <UploadCloud className="text-orange-500 w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-slate-500">Haz clic para subir o arrastra una imagen</p>
              <p className="text-[10px] text-slate-400 mt-2">Recomendado: 1280x720px (PNG o JPG)</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <h3 className="font-black text-slate-900 mb-6">Detalles rápidos</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Precio sugerido</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">$</span>
                  <input type="number" defaultValue="49" className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Nivel</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none text-slate-700">
                  <option>Principiante</option>
                  <option>Intermedio</option>
                  <option>Avanzado</option>
                </select>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
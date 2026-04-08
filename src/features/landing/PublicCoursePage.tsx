import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

export default function PublicCoursesPage() {
  return (
    <div className="w-full bg-white selection:bg-indigo-100 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Aprende de los mejores
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Explora una selección de nuestros cursos más populares. Todos incluyen tutoría personalizada con IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Curso 1 */}
          <div className="bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center border-b border-slate-100/50">
              <div className="text-7xl group-hover:scale-110 transition-transform duration-500 drop-shadow-xl">🤖</div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md border text-indigo-600 bg-indigo-50 border-indigo-100">Data Science</span>
              </div>
              <h3 className="font-black text-xl text-slate-900 mb-1">Machine Learning con Python</h3>
              <p className="text-sm text-slate-500 mb-4 font-medium">Dr. Carlos Vera</p>
              <div className="flex items-center gap-1 text-sm font-bold text-slate-500">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> 4.9 <span className="font-medium text-slate-400">(1,420 reseñas)</span>
              </div>
            </div>
          </div>

          {/* Curso 2 */}
          <div className="bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-cyan-100 to-white flex items-center justify-center border-b border-slate-100/50">
              <div className="text-7xl group-hover:scale-110 transition-transform duration-500 drop-shadow-xl">⚛️</div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md border text-cyan-600 bg-cyan-50 border-cyan-100">Programación</span>
              </div>
              <h3 className="font-black text-xl text-slate-900 mb-1">React Avanzado & Arquitectura</h3>
              <p className="text-sm text-slate-500 mb-4 font-medium">Ana Rodriguez</p>
              <div className="flex items-center gap-1 text-sm font-bold text-slate-500">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> 4.8 <span className="font-medium text-slate-400">(868 reseñas)</span>
              </div>
            </div>
          </div>

          {/* Curso 3 */}
          <div className="bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-orange-100 to-white flex items-center justify-center border-b border-slate-100/50">
              <div className="text-7xl group-hover:scale-110 transition-transform duration-500 drop-shadow-xl">🎨</div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md border text-orange-600 bg-orange-50 border-orange-100">Diseño</span>
              </div>
              <h3 className="font-black text-xl text-slate-900 mb-1">UX Research Profesional</h3>
              <p className="text-sm text-slate-500 mb-4 font-medium">Marcos Fuente</p>
              <div className="flex items-center gap-1 text-sm font-bold text-slate-500">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> 4.7 <span className="font-medium text-slate-400">(754 reseñas)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-indigo-50 border border-indigo-100 rounded-3xl p-10 max-w-4xl mx-auto flex flex-col items-center">
          <h3 className="text-2xl font-black text-indigo-900 mb-4">¿Listo para transformar tu carrera?</h3>
          <p className="text-indigo-700 mb-8 font-medium">Únete a miles de estudiantes y accede a nuestro catálogo completo de más de 200 cursos interactivos.</p>
          <Link to="/register" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-black hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
            Crear cuenta ahora <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
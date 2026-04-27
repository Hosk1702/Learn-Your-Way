import { Link } from 'react-router-dom';
import { Search, Edit3, Eye, MoreVertical, PlusCircle } from 'lucide-react';

export default function TeacherCoursesPage() {
  // Datos simulados de los cursos del profesor
  const courses = [
    {
      id: 1,
      title: 'Machine Learning con Python',
      status: 'publicado',
      students: 1420,
      price: '$49',
      image: '🤖'
    },
    {
      id: 2,
      title: 'React Avanzado & Arquitectura',
      status: 'borrador',
      students: 0,
      price: '$59',
      image: '⚛️'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto pb-12">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Mis Cursos</h1>
          <p className="text-slate-500 mt-1 font-medium">Gestiona tu contenido, actualiza lecciones y revisa el estado de tus publicaciones.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar curso..." 
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-64"
            />
          </div>
          {/* El botón de arriba a la derecha por si no quieren usar el de la barra lateral */}
          <Link to="/teacher/studio" className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all shadow-md shadow-orange-200">
            <PlusCircle className="w-5 h-5" /> Nuevo
          </Link>
        </div>
      </div>

      {/* GRID DE CURSOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1">
            {/* Portada miniatura */}
            <div className="h-40 bg-slate-50 border-b border-slate-100 flex items-center justify-center relative">
              <span className="text-6xl group-hover:scale-110 transition-transform">{course.image}</span>
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
                  course.status === 'publicado' 
                    ? 'bg-emerald-100 text-emerald-600' 
                    : 'bg-amber-100 text-amber-600'
                }`}>
                  {course.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-black text-lg text-slate-900 mb-2 line-clamp-1">{course.title}</h3>
              
              <div className="flex justify-between items-center text-sm font-medium text-slate-500 mb-6">
                <span>{course.students} alumnos</span>
                <span className="font-bold text-slate-700">{course.price}</span>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                {/* BOTÓN PARA EDITAR -> LLEVA AL STUDIO */}
                <Link to="/teacher/studio" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-orange-50 text-orange-600 hover:bg-orange-100 rounded-xl font-bold transition-colors">
                  <Edit3 className="w-4 h-4" /> Editar
                </Link>
                <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl border border-transparent transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
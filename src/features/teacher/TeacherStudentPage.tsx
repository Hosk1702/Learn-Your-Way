import { Link } from 'react-router-dom';
import { Users, ChevronRight, Search } from 'lucide-react';

export default function TeacherStudentsPage() {
  const courses = [
    { id: 1, title: 'Machine Learning con Python', enrolled: 1420, activeNow: 12, emoji: '🤖' },
    { id: 2, title: 'React Avanzado & Arquitectura', enrolled: 868, activeNow: 5, emoji: '⚛️' },
    { id: 3, title: 'UX Research Profesional', enrolled: 754, activeNow: 2, emoji: '🎨' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-slate-900">Gestión de Estudiantes</h1>
        <p className="text-slate-500 mt-2 font-medium">Selecciona un curso para ver la lista de alumnos inscritos y su progreso individual.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link 
            key={course.id} 
            to={`/teacher/students/${course.id}`}
            className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
              {course.emoji}
            </div>
            
            <h3 className="font-black text-xl text-slate-900 mb-2 leading-tight">{course.title}</h3>
            
            <div className="flex items-center gap-4 mt-2 mb-8">
              <div className="flex flex-col">
                <span className="text-lg font-black text-slate-900">{course.enrolled}</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Inscritos</span>
              </div>
              <div className="w-px h-8 bg-slate-100"></div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-orange-500">{course.activeNow}</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Activos</span>
              </div>
            </div>

            <div className="w-full py-3 bg-orange-50 text-orange-600 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-orange-500 group-hover:text-white transition-all">
              Ver Estudiantes <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
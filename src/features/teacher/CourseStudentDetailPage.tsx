import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Search, Mail, MessageSquare, MoreVertical } from 'lucide-react';

export default function CourseStudentsDetailPage() {
  const { courseId } = useParams(); // En el futuro esto servirá para filtrar por API

  const students = [
    { id: 1, name: 'Ana García', email: 'ana.g@mail.com', progress: 85, lastActivity: 'Hace 2 horas' },
    { id: 2, name: 'Roberto Solis', email: 'roberto.s@mail.com', progress: 42, lastActivity: 'Hace 1 día' },
    { id: 3, name: 'Elena Peñuñuri', email: 'elena.p@mail.com', progress: 10, lastActivity: 'Hace 5 min' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumbs / Back */}
      <Link to="/teacher/students" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-orange-500 transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" /> Volver a la lista de cursos
      </Link>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Machine Learning con Python</h1>
          <p className="text-slate-500 font-medium">Listado detallado de estudiantes y rendimiento académico.</p>
        </div>
        
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Buscar alumno..." className="pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full md:w-80 shadow-sm" />
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Estudiante</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Progreso</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Última Actividad</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-orange-50/30 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-black text-sm">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 leading-none mb-1">{student.name}</p>
                      <p className="text-xs text-slate-400 font-medium">{student.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 transition-all" style={{ width: `${student.progress}%` }}></div>
                    </div>
                    <span className="text-xs font-black text-slate-900">{student.progress}%</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-sm font-medium text-slate-500">{student.lastActivity}</span>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-orange-500 hover:bg-white rounded-lg transition-all shadow-sm">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-orange-500 hover:bg-white rounded-lg transition-all shadow-sm">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
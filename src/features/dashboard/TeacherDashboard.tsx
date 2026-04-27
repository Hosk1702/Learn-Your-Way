import { DollarSign, Users, Star, Play, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function TeacherDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto">
      
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900">Panel de Instructor</h1>
        <p className="text-slate-500 mt-1 font-medium">Bienvenido de nuevo. Así va el rendimiento de tus cursos este mes.</p>
      </div>

      {/* MÉTRICAS CLAVE */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <TeacherStat icon={<DollarSign />} label="Ingresos Totales" value="$2,840.00" trend="+12.5%" color="emerald" />
        <TeacherStat icon={<Users />} label="Estudiantes" value="1,240" trend="+8.2%" color="blue" />
        <TeacherStat icon={<Star />} label="Calificación" value="4.9" trend="0.0" color="orange" />
        <TeacherStat icon={<Play />} label="Minutos Vistos" value="45.2k" trend="+15%" color="indigo" />
      </div>

      {/* SECCIÓN: RENDIMIENTO DE CURSOS */}
      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden mb-10">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-black text-slate-900 text-xl">Rendimiento por Curso</h3>
          <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700">Ver reporte completo</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                <th className="px-8 py-4">Curso</th>
                <th className="px-8 py-4">Ventas</th>
                <th className="px-8 py-4">Retención</th>
                <th className="px-8 py-4">Ingresos</th>
                <th className="px-8 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <CourseRow title="React Avanzado & Arquitectura" sales={142} retention="82%" revenue="$1,420" />
              <CourseRow title="Machine Learning con Python" sales={98} retention="75%" revenue="$1,240" />
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

function TeacherStat({ icon, label, value, trend, color }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-2xl bg-${color}-50 text-${color}-600`}>{icon}</div>
        <span className="text-emerald-500 text-xs font-black bg-emerald-50 px-2 py-1 rounded-lg flex items-center">
          <TrendingUp className="w-3 h-3 mr-1" /> {trend}
        </span>
      </div>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{label}</p>
      <h4 className="text-2xl font-black text-slate-900">{value}</h4>
    </div>
  );
}

function CourseRow({ title, sales, retention, revenue }: any) {
  return (
    <tr className="hover:bg-slate-50 transition-colors group">
      <td className="px-8 py-6">
        <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer">{title}</div>
      </td>
      <td className="px-8 py-6 text-sm font-medium text-slate-600">{sales} alumnos</td>
      <td className="px-8 py-6">
        <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500" style={{ width: retention }}></div>
        </div>
      </td>
      <td className="px-8 py-6 font-black text-slate-900">{revenue}</td>
      <td className="px-8 py-6 text-right">
        <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all">
          <ArrowUpRight className="w-5 h-5 text-slate-400" />
        </button>
      </td>
    </tr>
  );
}
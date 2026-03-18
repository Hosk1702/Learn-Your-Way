import { 
  Flame, 
  Zap, 
  BookOpen, 
  Clock, 
  Medal, 
  TrendingUp, 
  PlayCircle,
  Award,
  Target,
  Coffee,
  Bot,
  BookMarked
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  // Datos de prueba para simular lo que vendría de una base de datos
  const activeCourses = [
    {
      id: 1,
      title: "Desarrollo iOS con Swift",
      category: "Programación",
      nextLesson: "Patrones de Diseño",
      progress: 68,
      xp: 1240,
      color: "indigo"
    },
    {
      id: 2,
      title: "Desarrollo Web con React",
      category: "Programacion",
      nextLesson: "Desarrollo Web avanzado",
      progress: 42,
      xp: 820,
      color: "cyan"
    },
    {
      id: 3,
      title: "Inglés Técnico para Devs",
      category: "Idiomas",
      nextLesson: "Preparación para Entrevistas",
      progress: 89,
      xp: 1580,
      color: "orange"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto pb-12">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            Mi Aprendizaje <span className="text-4xl animate-bounce origin-bottom-right">👋</span>
          </h1>
          <p className="text-slate-500 mt-2 font-medium">¡Buen trabajo, Marco! Tu racha va por 14 días seguidos.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-orange-50 border border-orange-100 px-4 py-2 rounded-xl text-orange-600 font-bold">
            <Flame className="w-5 h-5" /> 14 días
          </div>
          <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-xl text-indigo-600 font-bold">
            <Zap className="w-5 h-5" /> 3,640 XP
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <StatCard icon={<BookOpen />} label="Cursos activos" value="3" color="indigo" />
        <StatCard icon={<Clock />} label="Horas este mes" value="28.5h" color="cyan" />
        <StatCard icon={<Medal />} label="Medallas obtenidas" value="12" color="orange" />
        <StatCard icon={<TrendingUp />} label="Lecciones hoy" value="4" color="emerald" />
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-black text-slate-900 mb-6">Cursos en Progreso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCourses.map((course) => (
            <CourseProgressCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-slate-900 mb-6">Mis Medallas</h2>
        <div className="flex flex-wrap gap-4">
          <Badge icon={<Flame className="w-4 h-4 text-orange-500" />} text="Racha 14d" />
          <Badge icon={<Target className="w-4 h-4 text-rose-500" />} text="Perfeccionista" />
          <Badge icon={<Coffee className="w-4 h-4 text-amber-700" />} text="Madrugador" />
          <Badge icon={<Bot className="w-4 h-4 text-indigo-500" />} text="Amigo IA x50" />
          <Badge icon={<BookMarked className="w-4 h-4 text-emerald-500" />} text="Lector Veloz" />
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-slate-500 text-sm font-bold hover:bg-slate-50 transition-colors">
            <Award className="w-4 h-4" /> Ver todas (12)
          </button>
        </div>
      </div>

    </div>
  );
}


function StatCard({ icon, label, value, color }: any) {
  const colors: any = {
    indigo: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    cyan: 'text-cyan-600 bg-cyan-50 border-cyan-100',
    orange: 'text-orange-600 bg-orange-50 border-orange-100',
    emerald: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  };

  return (
    <div className="bg-white p-6 rounded-[1.5rem] border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2.5 rounded-xl border ${colors[color]}`}>
          {icon}
        </div>
        <span className="text-sm font-bold text-slate-500">{label}</span>
      </div>
      <div className="text-4xl font-black text-slate-900">{value}</div>
    </div>
  );
}

function CourseProgressCard({ course }: { course: any }) {
  const colors: any = {
    indigo: 'bg-indigo-600',
    cyan: 'bg-cyan-500',
    orange: 'bg-orange-500',
  };

  const textColors: any = {
    indigo: 'text-indigo-600',
    cyan: 'text-cyan-600',
    orange: 'text-orange-600',
  };

  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:border-indigo-200 hover:shadow-lg transition-all group flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl shadow-inner">
          {course.color === 'indigo' ? '📱' : course.color === 'cyan' ? '⚛️' : '🇬🇧'}
        </div>
        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 ${textColors[course.color]}`}>
          {course.category}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-black text-lg text-slate-900 mb-1 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-slate-500 font-medium mb-6">Siguiente: {course.nextLesson}</p>
      </div>

      <div className="mt-auto">
        <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
          <span>Progreso</span>
          <span>{course.progress}%</span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mb-6">
          <div 
            className={`h-full rounded-full ${colors[course.color]} transition-all duration-1000 ease-out`}
            style={{ width: `${course.progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500">
            <Zap className="w-4 h-4 fill-current" /> {course.xp} XP
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-indigo-600 transition-colors">
            <Link 
                to="/classroom" 
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-indigo-600 transition-colors"
            >
                <PlayCircle className="w-4 h-4" /> Continuar
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function Badge({ icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 shadow-sm rounded-full cursor-default hover:scale-105 hover:border-indigo-200 transition-all">
      {icon}
      <span className="text-sm font-bold text-slate-700">{text}</span>
    </div>
  );
}
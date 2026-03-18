import { Search, Filter, Star, Clock, Zap, Bot } from 'lucide-react';

export default function CatalogPage() {
  const categories = [
    'Todos', 'Programación', 'Diseño', 'Data Science', 'Marketing', 'Idiomas', 'Negocios'
  ];

//   cursos hardcodeados yeayea
  const courses = [
    {
      id: 1, icon: '🤖', title: 'Machine Learning con Python',
      instructor: 'Dr. Carlos Vera', category: 'Data Science',
      rating: 4.9, reviews: '1,420', duration: '38h', xp: '8,200',
      price: '$49', color: 'indigo' 
    },
    {
      id: 2, icon: '⚛️', title: 'React Avanzado & Arquitectura',
      instructor: 'Ana Rodriguez', category: 'Programación',
      rating: 4.8, reviews: '868', duration: '24h', xp: '5,400',
      price: '$39', color: 'cyan' 
    },
    {
      id: 3, icon: '🎨', title: 'UX Research Profesional',
      instructor: 'Marcos Fuente', category: 'Diseño',
      rating: 4.7, reviews: '754', duration: '20h', xp: '3,800',
      price: '$35', color: 'orange' 
    },
    {
      id: 4, icon: '🗄️', title: 'SQL y Bases de Datos NoSQL',
      instructor: 'Laura Gutiérrez', category: 'Programación',
      rating: 4.9, reviews: '2,100', duration: '16h', xp: '12,000',
      price: '$29', color: 'emerald' 
    },
    {
      id: 5, icon: '📈', title: 'Marketing Digital con IA',
      instructor: 'Diego Salas', category: 'Marketing',
      rating: 4.6, reviews: '543', duration: '14h', xp: '2,900',
      price: 'Gratis', color: 'rose'
    },
    {
      id: 6, icon: '🌍', title: 'Inglés de Negocios B2 → C1',
      instructor: 'Emily Carter', category: 'Idiomas',
      rating: 4.8, reviews: '1,890', duration: '45h', xp: '9,800',
      price: '$55', color: 'purple' 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto pb-12">
      
      {/* cabecera */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900">Explorar Catálogo</h1>
        <p className="text-slate-500 mt-2 font-medium">6 cursos disponibles · Todos con tutoría IA</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input 
            type="text" 
            placeholder="Buscar cursos, instructores..." 
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all" 
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 shadow-sm transition-colors">
          <Filter className="w-4 h-4" /> Todos los niveles
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat, index) => (
          <button key={cat} className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${index === 0 ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm'}`}>
            {cat}
          </button>
        ))}
      </div>

      <p className="text-xs font-black text-slate-400 mb-6 uppercase tracking-widest">
        6 resultados
      </p>

      {/* --- grid de las tarjetas --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CatalogCard key={course.id} course={course} />
        ))}
      </div>

    </div>
  );
}

// --- Componente de la tarjeta ---

function CatalogCard({ course }: { course: any }) {
  // Mapa de colores para los badges y botones
  const colorStyles: any = {
    indigo: { badge: 'text-indigo-600 bg-indigo-50 border-indigo-100', button: 'bg-indigo-600 hover:bg-indigo-700 text-white', bgTop: 'bg-gradient-to-br from-indigo-100 via-indigo-50 to-white' },
    cyan: { badge: 'text-cyan-600 bg-cyan-50 border-cyan-100', button: 'bg-cyan-500 hover:bg-cyan-600 text-slate-900', bgTop: 'bg-gradient-to-br from-cyan-100 via-cyan-50 to-white' },
    orange: { badge: 'text-orange-600 bg-orange-50 border-orange-100', button: 'bg-orange-500 hover:bg-orange-600 text-white', bgTop: 'bg-gradient-to-br from-orange-100 via-orange-50 to-white' },
    emerald: { badge: 'text-emerald-600 bg-emerald-50 border-emerald-100', button: 'bg-emerald-500 hover:bg-emerald-600 text-white', bgTop: 'bg-gradient-to-br from-emerald-100 via-emerald-50 to-white' },
    rose: { badge: 'text-rose-600 bg-rose-50 border-rose-100', button: 'bg-rose-500 hover:bg-rose-600 text-white', bgTop: 'bg-gradient-to-br from-rose-100 via-rose-50 to-white' },
    purple: { badge: 'text-purple-600 bg-purple-50 border-purple-100', button: 'bg-purple-500 hover:bg-purple-600 text-white', bgTop: 'bg-gradient-to-br from-purple-100 via-purple-50 to-white' },
  };

  const style = colorStyles[course.color];

  return (
    <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      
      {/* 1. ÁREA DE LA IMAGEN (Ahora con degradados suaves y amigables) */}
      <div className={`h-48 ${style.bgTop} flex items-center justify-center relative overflow-hidden border-b border-slate-100/50`}>
        {/* Ícono central con sombra más sutil */}
        <div className="text-7xl group-hover:scale-110 transition-transform duration-500 relative z-10 drop-shadow-xl">
          {course.icon}
        </div>
      </div>

      {/* 2. CONTENIDO (Cuerpo de la tarjeta) */}
      <div className="p-6 flex flex-col flex-1">
        
        <div className="flex justify-between items-center mb-4">
          <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md border ${style.badge}`}>
            {course.category}
          </span>
          <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest px-2 py-1.5 bg-slate-100 text-slate-500 rounded-md">
            <Bot className="w-3 h-3" /> IA
          </div>
        </div>

        <h3 className="font-black text-lg text-slate-900 mb-1.5 leading-tight line-clamp-2">
          {course.title}
        </h3>
        <p className="text-sm text-slate-500 mb-5 font-medium">
          {course.instructor}
        </p>

        {/* Agrupamos la data para que use todo el ancho */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-6">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-slate-700">{course.rating}</span> <span className="text-slate-400 font-medium">({course.reviews})</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-slate-400" />
              {course.duration}
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-slate-400" />
              {course.xp}
            </div>
          </div>
        </div>

        {/* 3. FOOTER */}
        <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
          <span className={`text-2xl font-black ${course.price === 'Gratis' ? 'text-emerald-500' : 'text-slate-900'}`}>
            {course.price}
          </span>
          <button className={`px-5 py-2.5 rounded-xl text-sm font-black shadow-sm transition-colors ${style.button}`}>
            Inscribirme
          </button>
        </div>

      </div>
    </div>
  );
}
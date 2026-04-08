import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  User, 
  Mail, 
  Briefcase, 
  Link as LinkIcon, 
  MessageSquare,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

export default function ApplyTeacherPage() {
  // Estado para cambiar entre el formulario y el mensaje de éxito
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí en el futuro enviaríamos los datos al backend
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-6 font-sans">
      
      {/* 1. ENCABEZADO */}
      <div className="sm:mx-auto sm:w-full sm:max-w-xl">
        <Link to="/" className="flex items-center justify-center gap-2 text-indigo-600 font-black text-2xl mb-8 hover:scale-105 transition-transform">
          <GraduationCap className="w-8 h-8" />
          LearnYourWay
        </Link>
        
        <h2 className="text-center text-3xl font-black text-slate-900 tracking-tight mb-2">
          {isSubmitted ? '¡Solicitud enviada!' : 'Conviértete en Instructor'}
        </h2>
        <p className="text-center text-sm text-slate-500 max-w-md mx-auto">
          {isSubmitted 
            ? 'Nuestro equipo revisará tu perfil y te contactaremos muy pronto.' 
            : 'Únete a nuestra comunidad de expertos y comparte tu conocimiento con miles de estudiantes.'}
        </p>
      </div>

      {/* 2. CONTENEDOR DE LA TARJETA */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-[2rem] sm:px-10">
          
          {!isSubmitted ? (
            // --- EL FORMULARIO ---
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nombre completo</label>
                  <div className="relative rounded-xl">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400" />
                    </div>
                    <input type="text" required className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Ej. Carlos Vera" />
                  </div>
                </div>

                {/* Correo */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Correo electrónico</label>
                  <div className="relative rounded-xl">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input type="email" required className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="tucorreo@ejemplo.com" />
                  </div>
                </div>
              </div>

              {/* Área de Especialidad (Select) */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Área de Especialidad</label>
                <div className="relative rounded-xl">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-slate-400" />
                  </div>
                  <select required className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-700 appearance-none">
                    <option value="" disabled selected>Selecciona una categoría...</option>
                    <option value="programacion">Programación y Tecnología</option>
                    <option value="ciencias">Ciencias Exactas</option>
                    <option value="diseno">Diseño y UX/UI</option>
                    <option value="negocios">Negocios y Marketing</option>
                    <option value="idiomas">Idiomas</option>
                  </select>
                </div>
              </div>

              {/* Link a LinkedIn/Portafolio */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">LinkedIn o Portafolio (URL)</label>
                <div className="relative rounded-xl">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <LinkIcon className="h-5 w-5 text-slate-400" />
                  </div>
                  <input type="url" required className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="https://linkedin.com/in/tu-perfil" />
                </div>
              </div>

              {/* Carta de Motivación (Textarea) */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">¿Por qué quieres enseñar con nosotros?</label>
                <div className="relative rounded-xl">
                  <div className="absolute top-3 left-4 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-slate-400" />
                  </div>
                  <textarea required rows={4} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none" placeholder="Cuéntanos un poco sobre tu experiencia docente o profesional..."></textarea>
                </div>
              </div>

              {/* Botón Principal */}
              <button type="submit" className="w-full py-4 px-4 rounded-xl shadow-lg shadow-indigo-200 text-sm font-black text-white bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-200">
                Enviar Solicitud
              </button>

            </form>
          ) : (
            // --- PANTALLA DE ÉXITO ---
            <div className="text-center py-8 animate-in fade-in duration-500">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">¡Todo listo, futuro profesor!</h3>
              <p className="text-sm text-slate-600 font-medium mb-8 max-w-sm mx-auto">
                Hemos recibido tu información correctamente. Te enviaremos un correo con los siguientes pasos en un plazo máximo de 48 horas.
              </p>
            </div>
          )}

          {/* Botón de Regreso */}
          <div className="mt-8 text-center pt-6 border-t border-slate-100">
            <Link to="/register" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1" /> Volver al Registro
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
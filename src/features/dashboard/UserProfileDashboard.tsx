import { useState } from 'react';
import { User, Mail, Lock, Camera, Save, Bell, Shield } from 'lucide-react';

export default function UserProfilePage() {
  // Estados para simular que el formulario funciona
  const [name, setName] = useState('Marco');
  const [email, setEmail] = useState('marco@alumno.com');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: any) => {
    e.preventDefault();
    setIsSaved(true);
    // Hacemos que el mensaje de "Guardado" desaparezca después de 3 segundos
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto pb-12">
      
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900">Configuración de Perfil</h1>
        <p className="text-slate-500 mt-2 font-medium">Administra tus datos personales y preferencias de la cuenta.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* ========================================= */}
        {/* COLUMNA IZQUIERDA (Avatar y Resumen)      */}
        {/* ========================================= */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          
          {/* Tarjeta de Foto de Perfil */}
          <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm text-center flex flex-col items-center">
            
            <div className="relative mb-4 group cursor-pointer">
              <div className="w-32 h-32 rounded-full bg-indigo-600 flex items-center justify-center text-white text-5xl font-black shadow-lg">
                {name.charAt(0)}
              </div>
              {/* Overlay oscuro que aparece al pasar el mouse */}
              <div className="absolute inset-0 bg-slate-900/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-xl font-black text-slate-900">{name}</h2>
            <p className="text-sm font-medium text-slate-500 mb-6">Estudiante Pro</p>
            
            <div className="w-full bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-slate-500">Miembro desde</span>
                <span className="font-black text-slate-900">Abril 2026</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-bold text-slate-500">Nivel actual</span>
                <span className="font-black text-indigo-600">Nivel 12</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================= */}
        {/* COLUMNA DERECHA (Formularios)             */}
        {/* ========================================= */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          
          {/* TARJETA: Información Personal */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><User className="w-5 h-5" /></div>
              <h3 className="text-xl font-black text-slate-900">Información Personal</h3>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nombre completo</label>
                  <div className="relative rounded-xl">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400" />
                    </div>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Correo electrónico</label>
                  <div className="relative rounded-xl">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end pt-4">
                <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md">
                  {isSaved ? '¡Guardado!' : <><Save className="w-4 h-4" /> Guardar Cambios</>}
                </button>
              </div>
            </form>
          </div>

          {/* TARJETA: Seguridad y Contraseña */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Shield className="w-5 h-5" /></div>
              <h3 className="text-xl font-black text-slate-900">Seguridad</h3>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Contraseña actual</label>
                <div className="relative rounded-xl">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nueva contraseña</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Confirmar nueva contraseña</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
              </div>

              <div className="flex items-center justify-end pt-4">
                <button type="button" className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-md">
                  Actualizar Contraseña
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
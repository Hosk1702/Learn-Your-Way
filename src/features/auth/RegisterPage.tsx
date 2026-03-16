import { useState } from "react";
import { Link } from "react-router-dom";
import {UserPlus, Mail, Lock, User,
     Eye, EyeOff} from "lucide-react";

export default function LoginPage() {

    const [showPassword, setShowPassword] = useState(false);

    return(
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-6 font-sans">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                
                <Link to="/"  className="flex item-center justify-center gap2 text-indigo-600 font-black text-2xl mb-8 hover:scale-105 transition-transform">
                <UserPlus className="w-8 h-8" />
                LearnYourWay
                </Link>

                <h2 className="text-center text-3xl font-black text-slate-900 tracking-tight">
                    Crea tu cuenta
                </h2>

                <p className="mt-2 text-center text-sm text-slate-600">
                    ¿Ya tienes una cuenta?{' '}
                    <Link to="/login" className="font-bold text-indigo-600 hover:text-indigo-500 transition-colors">
                        Inicia sesión aquí
                    </Link>
                </p>

            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-[2rem] sm:px-10">
                    <form className="space-y-6">
                        {/* Campo del nombre de usuario */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                Nombre completo
                            </label>
                            <div className="relative rounded-xl">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-slate-400" />
                                </div>
                                <input 
                                type="text" 
                                required 
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" 
                                placeholder="Juan Pérez" 
                                />
                            </div>
                        </div>
                        {/* Campo del correo electrónico */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                Correo electrónico
                            </label>
                            <div className="relative rounded-xl">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400" />
                                </div>
                                <input 
                                    type="email" 
                                    required 
                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" 
                                    placeholder="ejemplo@correo.com" 
                                />
                            </div>
                        </div>
                        {/* Campo de la contraseña */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                Contraseña
                            </label>
                            <div className="relative rounded-xl">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-400" />
                                </div>
                                
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    required 
                                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" 
                                    placeholder="Mínimo 8 caracteres" 
                                />

                                <button
                                    type="button" 
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-indigo-600 transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full flex justify-center py-4 px-4 rounded-xl shadow-lg shadow-indigo-200 text-sm font-black text-white bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                        >
                        Crear Cuenta
                        </button>
                    </form>
                    
                    <p className="mt-8 text-center text-xs text-slate-500 leading-relaxed">
                    ¿Eres profesor y quieres enseñar con nosotros? <br />
                        <Link to="/apply-teacher" className="font-bold text-indigo-600 hover:text-indigo-500 underline decoration-indigo-200 underline-offset-4 transition-colors">
                        Solicita tu cuenta de instructor aquí
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    
    )
}    
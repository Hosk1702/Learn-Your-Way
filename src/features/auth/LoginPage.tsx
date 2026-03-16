import { useState } from "react";
import { Link } from "react-router-dom";
import {LogIn, Mail, Lock, Eye, EyeOff} from "lucide-react";

export default function LoginPage() {

    const [showPassword, setShowPassword] = useState(false);

    return(
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-6 font-sans">
            
            <div className="sm:mx-auto sm:w-full sm:max-w-md">

                <Link to="/" className="flex items-center justify-center gap-2 text-indigo-600 font-black text-2xl mb-8 hover:scale-105 transition-transform">
                <LogIn className="w-8 h-8" />
                LearnYourWay
                </Link>

                <h2 className="text-center text-3xl font-black text-slate-900 tracking-tight">
                Bienvenido de nuevo
                </h2>

                <p className="mt-2 text-center text-sm text-slate-500">
                    ¿No tienes una cuenta? {' '}
                    <Link to="/register"className="font-bold text-indigo600 hover:text-indigo-500 transition-colors">
                        Registrarse gratis
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">

                <div className="bg-white py-8 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-[2rem] sm:px-10">
                    <form className="space-y-6">
                        <div>
                            {/* Campo del correo */}
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                Correo electrónico
                            </label>

                            <div className="relative rounded-xl">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400"/>
                                </div>

                                <input 
                                type="email" 
                                required 
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" 
                                placeholder="ejemplo@correo.com" 
                                />

                            </div>
                        </div>
                        <div>
                            {/* Campo de la contrasena */}
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-bold text-slate-700">
                                    Contraseña
                                </label>
                                <div className="text-sm">
                                    <Link to="/forgot-password  " className="font-bold text-indigo-600 hover;text-indigo-500 transition-colors">
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                </div>
                            </div>

                            <div className="relative rounded-xl">
                                <div className="absolute inset-y-0 left-0 pl-4 flex-item-center">
                                    <Lock className="h-5 w-5 text-slate-400"/>
                                </div>

                                <input 
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" 
                                    placeholder="••••••••"
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

                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-4 rounded-xl shadow-lg shadow-indigo-200 text-sm font-black text-white bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                            >
                            Iniciar Sesión
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>

        

    );
}
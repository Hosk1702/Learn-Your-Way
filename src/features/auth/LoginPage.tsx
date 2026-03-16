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

                    <div className="mt-8">
                        <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200" />
                        </div>
                        
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-slate-500 font-medium">O continúa con</span>
                        </div>
                        </div>

                        <div className="mt-6">
                        <button 
                            type="button" 
                            className="w-full inline-flex justify-center items-center py-3.5 px-4 border-2 border-slate-100 rounded-xl shadow-sm bg-white text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-200 transition-all"
                        >
                            {/* SVG del logo original de Google */}
                            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            Google
                        </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        

    );
}
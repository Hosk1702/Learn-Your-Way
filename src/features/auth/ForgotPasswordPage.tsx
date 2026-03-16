import { useState } from "react";
import {Link} from "react-router-dom";
import { KeyRound, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return(
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-6 font-sans">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link to="/" className="flex items-center justify-center gap-2 text-indigo-600 font-black text-2xl mb-8 hover:scale-105 transition-transform">
                    <KeyRound className="w-8 h-8" />
                    LearnYourWay
                </Link>

                <h2 className="text-center text-3xl font-black text-slate-900 tracking-tight">
                    {isSubmitted ? 'Revisa tu bandeja' : 'Recupera tu contraseña'}
                </h2>

                <p className="mt-2 text-center text-sm text-slate-500 max-w-sm mx-auto">
                    {isSubmitted 
                    ? 'Te hemos enviado un enlace seguro para restablecer tu acceso.' 
                    : 'Ingresa el correo asociado a tu cuenta y te enviaremos las instrucciones.'}
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-[2rem] sm:px-10">
                    {!isSubmitted ? (
                        <form
                            className="space-y-6"
                            onSubmit={(e) => {
                                e.preventDefault(); 
                                setIsSubmitted(true); 
                            }}
                        >
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
                            
                            <button 
                                type="submit" 
                                className="w-full flex justify-center py-4 px-4 rounded-xl shadow-lg shadow-indigo-200 text-sm font-black text-white bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                            >
                                Enviar enlace de recuperación
                            </button>
                        </form>
                        
                    ): (
                        <div className="text-center py-4 animate-in fade-in duration-500">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                            </div>
                            <p className="text-sm text-slate-600 font-medium mb-8">
                                No olvides revisar tu carpeta de spam si no lo ves en unos minutos.
                            </p>
                            <button 
                                onClick={() => setIsSubmitted(false)}
                                className="text-sm font-bold text-indigo-600 hover:text-indigo-500 transition-colors"
                            >
                                Intentar con otro correo
                            </button>
                        </div>
                    )}

                    <div className="mt-8 text-center">
                        <Link to="/login" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-1" /> Volver a Iniciar Sesión
                        </Link> 
                    </div>
                </div>


            </div>
        </div>

    )

}
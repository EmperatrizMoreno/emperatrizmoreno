"use client";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const initialRegisterState = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: false,
};

const Login: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'register' | 'reset'>('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [register, setRegister] = useState(initialRegisterState);
  const [showPassword, setShowPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirm, setShowRegConfirm] = useState(false);
  const router = useRouter();

  const handleMode = (m: 'login' | 'register' | 'reset') => {
    setMode(m);
    setError("");
    setMessage("");
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setRegister(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    const supabase = createClient();

    if (mode === 'login') {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      });
      setLoading(false);
      if (error) {
        setError(error.message);
      } else {
        router.push("/dashboard");
      }
    } else if (mode === 'register') {
      if (!register.terms) {
        setError("Debes aceptar los términos y condiciones y la política de privacidad.");
        setLoading(false);
        return;
      }
      if (register.password !== register.confirmPassword) {
        setError("Las contraseñas no coinciden.");
        setLoading(false);
        return;
      }
      const { error } = await supabase.auth.signUp({
        email: register.email,
        password: register.password,
        options: {
          data: {
            nombre: register.nombre,
            apellido: register.apellido,
          },
        },
      });
      setLoading(false);
      if (error) {
        setError(error.message);
      } else {
        setMessage("¡Registro exitoso! Revisa tu correo para confirmar tu cuenta.");
        setRegister(initialRegisterState);
      }
    } else if (mode === 'reset') {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail);
      setLoading(false);
      if (error) {
        setError(error.message);
      } else {
        setMessage("Si el correo existe, recibirás un enlace para restablecer tu contraseña.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[#181f3a] rounded-2xl shadow-2xl p-8 w-full max-w-md transition-all duration-500">
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'login' && (
            <>
              <h1 className="text-2xl font-bold text-center mb-1 text-white">Iniciar Sesión</h1>
              <p className="text-center text-gray-300 mb-4">Accede a tu cuenta para continuar</p>
              <div>
                <label className="block mb-1 text-gray-200">Correo Electrónico</label>
                <input
                  type="email"
                  className="w-full border-none rounded bg-[#232c4b] px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  placeholder="tu@email.com"
                  value={loginEmail}
                  onChange={e => setLoginEmail(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <label className="block mb-1 text-gray-200">Contraseña</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border-none rounded bg-[#232c4b] px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  placeholder="********"
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  required
                />
                <span
                  className="absolute right-3 top-9 cursor-pointer text-gray-400"
                  onClick={() => setShowPassword(v => !v)}
                  title={showPassword ? "Ocultar" : "Mostrar"}
                >{showPassword ? '🙈' : '👁️'}</span>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-blue-400 text-sm hover:underline"
                  onClick={() => handleMode('reset')}
                >¿Olvidaste tu contraseña?</button>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded font-semibold mt-2 hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
                disabled={loading}
              >{loading ? "Ingresando..." : "Iniciar Sesión"}</button>
              <div className="text-center text-gray-300 mt-2 text-sm">
                ¿No tienes una cuenta?{' '}
                <span
                  className="text-blue-400 hover:underline cursor-pointer"
                  onClick={() => handleMode('register')}
                >Regístrate aquí</span>
              </div>
            </>
          )}
          {mode === 'register' && (
            <>
              <h1 className="text-2xl font-bold text-center mb-1 text-white">Crear Cuenta</h1>
              <p className="text-center text-gray-300 mb-4">Únete a la comunidad de Emperatriz Moreno</p>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label className="block mb-1 text-gray-200">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="w-full border-none rounded bg-[#232c4b] px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    placeholder="Juan"
                    value={register.nombre}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1 text-gray-200">Apellido</label>
                  <input
                    type="text"
                    name="apellido"
                    className="w-full border-none rounded bg-[#232c4b] px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    placeholder="Pérez"
                    value={register.apellido}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 text-gray-200">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border-none rounded bg-[#232c4b] px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  placeholder="tu@email.com"
                  value={register.email}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="flex gap-2">
                <div className="w-1/2 relative">
                  <label className="block mb-1 text-gray-200">Contraseña</label>
                  <input
                    type={showRegPassword ? "text" : "password"}
                    name="password"
                    className="w-full border-none rounded bg-[#232c4b] px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    placeholder="********"
                    value={register.password}
                    onChange={handleRegisterChange}
                    required
                  />
                  <span
                    className="absolute right-3 top-9 cursor-pointer text-gray-400"
                    onClick={() => setShowRegPassword(v => !v)}
                    title={showRegPassword ? "Ocultar" : "Mostrar"}
                  >{showRegPassword ? '🙈' : '👁️'}</span>
                </div>
                <div className="w-1/2 relative">
                  <label className="block mb-1 text-gray-200">Confirmar Contraseña</label>
                  <input
                    type={showRegConfirm ? "text" : "password"}
                    name="confirmPassword"
                    className="w-full border-none rounded bg-[#232c4b] px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    placeholder="********"
                    value={register.confirmPassword}
                    onChange={handleRegisterChange}
                    required
                  />
                  <span
                    className="absolute right-3 top-9 cursor-pointer text-gray-400"
                    onClick={() => setShowRegConfirm(v => !v)}
                    title={showRegConfirm ? "Ocultar" : "Mostrar"}
                  >{showRegConfirm ? '🙈' : '👁️'}</span>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={register.terms}
                  onChange={handleRegisterChange}
                  className="mr-2 accent-blue-600"
                  required
                />
                <label htmlFor="terms" className="text-gray-300 text-sm">
                  Acepto los <a href="/terminos-condiciones" className="underline text-blue-400" target="_blank">términos y condiciones</a> y la <a href="/politica-privacidad" className="underline text-blue-400" target="_blank">política de privacidad</a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded font-semibold mt-2 hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
                disabled={loading}
              >{loading ? "Registrando..." : "Crear Cuenta"}</button>
              <div className="text-center text-gray-300 mt-2 text-sm">
                ¿Ya tienes una cuenta?{' '}
                <span
                  className="text-blue-400 hover:underline cursor-pointer"
                  onClick={() => handleMode('login')}
                >Inicia sesión aquí</span>
              </div>
            </>
          )}
          {mode === 'reset' && (
            <>
              <h1 className="text-2xl font-bold text-center mb-1 text-white">Recuperar Contraseña</h1>
              <p className="text-center text-gray-300 mb-4">Te enviaremos un enlace para restablecer tu contraseña</p>
              <div>
                <label className="block mb-1 text-gray-200">Correo Electrónico</label>
                <input
                  type="email"
                  className="w-full border-none rounded bg-[#232c4b] px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  placeholder="tu@email.com"
                  value={resetEmail}
                  onChange={e => setResetEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded font-semibold mt-2 hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
                disabled={loading}
              >{loading ? "Enviando..." : "Enviar enlace"}</button>
              <div className="text-center text-gray-300 mt-2 text-sm">
                ¿Ya tienes una cuenta?{' '}
                <span
                  className="text-blue-400 hover:underline cursor-pointer"
                  onClick={() => handleMode('login')}
                >Inicia sesión aquí</span>
              </div>
            </>
          )}
          {error && <p className="text-red-500 text-center font-medium mt-2">{error}</p>}
          {message && <p className="text-green-400 text-center font-medium mt-2">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;


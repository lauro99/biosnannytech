'use client';

import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fechaSeleccionada, setFechaSeleccionada] = useState('');

  // Obtener fecha actual en formato local exacto (YYYY-MM-DD) para evitar problemas de zona horaria
  const getLocalDateStr = () => {
    const dateObj = new Date();
    return dateObj.getFullYear() + '-' + 
           String(dateObj.getMonth() + 1).padStart(2, '0') + '-' + 
           String(dateObj.getDate()).padStart(2, '0');
  };

  const today = getLocalDateStr();
  const isToday = fechaSeleccionada === today;
  const currentHour = new Date().getHours();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setEnviado(true);
      } else {
        alert('Hubo un error al enviar, por favor intenta de nuevo.');
      }
    } catch (error) {
      console.error(error);
      alert('Error de conexión. Inténtalo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mt-20 -mr-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mb-20 -ml-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Información del Lado Izquierdo */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-dark mb-6 tracking-tight">
              Agendar Visita
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Déjanos tus datos y un asesor se comunicará contigo para programar un recorrido personalizado. Ven a descubrir por qué somos la mejor opción para el desarrollo de tus pequeños.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark shrink-0">
                  <span className="text-xl">📅</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary-dark">Horarios de visita</h4>
                  <p className="text-slate-600">Lunes a Viernes: 8:00 AM - 2:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent-dark shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary-dark">Ubicación céntrica y segura</h4>
                  <p className="text-slate-600">Instalaciones diseñadas específicamente para preescolar con vigilancia 24/7.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative">
            {enviado ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <CheckCircle className="w-20 h-20 text-green-500 animate-bounce" />
                <h3 className="text-2xl font-bold text-secondary-dark">¡Solicitud recibida!</h3>
                <p className="text-slate-600">Nos comunicaremos contigo muy pronto para confirmar tu visita.</p>
                <button 
                  onClick={() => setEnviado(false)}
                  className="mt-4 text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Agendar otra visita
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-secondary-dark mb-6">Completa tus datos</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="nombre">
                      Nombre del Padre/Madre <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="nombre" 
                      name="nombre"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow bg-slate-50"
                      placeholder="Ej. Ana García"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="nombreNino">
                      Nombre del niñ@
                    </label>
                    <input 
                      type="text" 
                      id="nombreNino" 
                      name="nombreNino"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow bg-slate-50"
                      placeholder="Ej. Luis o María"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="telefono">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="telefono" 
                      name="telefono"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow bg-slate-50"
                      placeholder="Ej. 55 1234 5678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="edad">
                      Edad de tu hij@
                    </label>
                    <select 
                      id="edad" 
                      name="edad"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow bg-slate-50 text-slate-700"
                    >
                      <option value="">Selecciona...</option>
                      <option value="1-2">1 a 2 años</option>
                      <option value="3-4">3 a 4 años</option>
                      <option value="5-6">5 a 6 años</option>
                      <option value="7-8">7 a 8 años</option>
                      <option value="9-10">9 a 10 años</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">
                    Correo Electrónico
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow bg-slate-50"
                    placeholder="tu@correo.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="fecha">
                      Fecha preferida para la visita
                    </label>
                    <input 
                      type="date" 
                      id="fecha" 
                      name="fecha"
                      min={today}
                      value={fechaSeleccionada}
                      onChange={(e) => setFechaSeleccionada(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow bg-slate-50 text-slate-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="horario">
                      Horario de preferencia
                    </label>
                    <select 
                      id="horario" 
                      name="horario"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow bg-slate-50 text-slate-700"
                    >
                      <option value="">Selecciona horario...</option>
                      <option value="8-10" disabled={isToday && currentHour >= 10}>8:00 AM - 10:00 AM</option>
                      <option value="10-12" disabled={isToday && currentHour >= 12}>10:00 AM - 12:00 PM</option>
                      <option value="12-14" disabled={isToday && currentHour >= 14}>12:00 PM - 2:00 PM</option>
                      <option value="14-16" disabled={isToday && currentHour >= 16}>2:00 PM - 4:00 PM</option>
                      <option value="16-18" disabled={isToday && currentHour >= 18}>4:00 PM - 6:00 PM</option>
                      <option value="18-mas" disabled={false}>Después de las 6:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="servicio">
                    Servicio Principal de Interés
                  </label>
                  <select 
                    id="servicio" 
                    name="servicio"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow bg-slate-50 text-slate-700"
                  >
                    <option value="">Selecciona una opción...</option>
                    <option value="maternal">Maternal / Pre-Kinder</option>
                    <option value="kinder">Kinder (K1-K3)</option>
                    <option value="estancia">Estancia Infantil</option>
                    <option value="clubes">Clubes Vespertinos</option>
                    <option value="multiples">Múltiples servicios</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="mensaje">
                    Mensaje o duda adicional
                  </label>
                  <textarea 
                    id="mensaje" 
                    name="mensaje"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow bg-slate-50 resize-none"
                    placeholder="¿Tienes alguna pregunta específica antes de tu visita?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-light disabled:bg-primary/50 text-secondary-dark font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Agendar Visita Ahora</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[2.2rem] md:text-4xl font-bold text-[#1b3644] mb-4">Servicios Educativos y Estancia</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Ofrecemos programas académicos estructurados y servicio de cuidado flexible y seguro, adaptándonos al estilo de vida de tu familia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Servicio 1 */}
          <div className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col bg-slate-50 relative">
            <div className="h-44 bg-gradient-to-tr from-[#fcd05c]/30 to-[#fcd05c]/10 relative overflow-hidden flex items-center justify-center">
              <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🧸</span>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-[#1b3644] mb-2">Maternal y Pre-Kinder</h3>
              <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                Para niños de 1 a 3 años. Fomentamos el desarrollo psicomotor, estimulación sensorial, control de esfínteres e interacción social en un ambiente 100% seguro.
              </p>
              <button className="text-left font-semibold text-[#b58b4b] hover:text-[#1b3644] transition-colors text-sm flex items-center gap-2 mt-auto">
                Ver plan <span className="text-lg leading-none">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col bg-slate-50 relative lg:mt-6">
            <div className="h-44 bg-gradient-to-tr from-[#59b8a3]/30 to-[#59b8a3]/10 relative overflow-hidden flex items-center justify-center">
              <span className="text-5xl group-hover:scale-110 transition-transform duration-300">📚</span>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-[#1b3644] mb-2">Kinder (K1, K2 y K3)</h3>
              <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                Niveles preescolares (3 a 6 años) con un programa bilingüe. Enfocado en lectoescritura, lógica-matemática y desarrollo de inteligencia emocional.
              </p>
              <button className="text-left font-semibold text-[#3b8775] hover:text-[#1b3644] transition-colors text-sm flex items-center gap-2 mt-auto">
                Ver plan <span className="text-lg leading-none">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Servicio 3 */}
          <div className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col bg-slate-50 relative">
            <div className="h-44 bg-gradient-to-tr from-purple-300/30 to-purple-300/10 relative overflow-hidden flex items-center justify-center">
              <span className="text-5xl group-hover:scale-110 transition-transform duration-300">💡</span>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-[#1b3644] mb-2">Clubes After-School</h3>
              <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                Extensión de horario. Talleres de robótica básica, iniciación artística, música y apoyo en tareas. Ideal para nutrir talentos extraescolares.
              </p>
              <button className="text-left font-semibold text-purple-600 hover:text-[#1b3644] transition-colors text-sm flex items-center gap-2 mt-auto">
                Ver clubes <span className="text-lg leading-none">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Servicio 4 (NUEVO) */}
          <div className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col bg-slate-50 relative lg:mt-6 border-2 border-[#162f3c]/10">
            <div className="h-44 w-full bg-[#162f3c] text-white relative overflow-hidden flex flex-col items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
              <span className="text-5xl group-hover:scale-110 transition-transform duration-300 z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">🌙</span>
              <span className="absolute top-3 right-4 bg-red-500 text-white text-[0.6rem] font-bold px-2 py-1 rounded-full animate-pulse z-10">24/7</span>
            </div>
            <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-white to-orange-50">
              <h3 className="text-lg font-bold text-[#1b3644] mb-2">Estancia Flexible 24/7</h3>
              <div className="text-slate-600 flex-1 text-sm leading-relaxed mb-4">
                <p className="mb-2">Guardería que se adapta a ti. Seguro, divertido y confiable para niños de <strong>0 a 10 años</strong>, de lunes a domingo.</p>
                <ul className="space-y-1.5 font-medium text-[#1b3644]">
                  <li className="flex items-center gap-1.5"><span className="text-green-500">✔</span> Modalidades: por hora, día o mes.</li>
                  <li className="flex items-center gap-1.5"><span className="text-blue-500">✔</span> Incluye horario tarde/noche.</li>
                </ul>
              </div>
              <button className="text-left font-semibold text-orange-500 hover:text-orange-700 transition-colors text-sm flex items-center gap-2 mt-auto">
                Consultar opciones <span className="text-lg leading-none">&rarr;</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
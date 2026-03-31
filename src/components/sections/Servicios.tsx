export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[2.2rem] md:text-4xl font-bold text-[#1b3644] mb-4">Nuestros Niveles Educativos</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Ofrecemos un programa académico diseñado por expertos en pedagogía, que respeta y potencia el ritmo de aprendizaje de cada niño.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col bg-slate-50 relative">
            <div className="h-48 bg-gradient-to-tr from-[#fcd05c]/30 to-[#fcd05c]/10 relative overflow-hidden flex items-center justify-center">
              <span className="text-6xl group-hover:scale-110 transition-transform duration-300">🧸</span>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-[#1b3644] mb-3">Maternal y Pre-Kinder</h3>
              <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                Para niños de 1 a 3 años. Fomentamos el desarrollo psicomotor, estimulación sensorial, control de esfínteres y las primeras interacciones sociales en un ambiente 100% seguro.
              </p>
              <button className="text-left font-semibold text-[#b58b4b] hover:text-[#1b3644] transition-colors text-sm flex items-center gap-2">
                Ver plan de estudios <span className="text-lg leading-none">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col bg-slate-50 relative top-0 md:-top-4">
            <div className="h-48 bg-gradient-to-tr from-[#59b8a3]/30 to-[#59b8a3]/10 relative overflow-hidden flex items-center justify-center">
              <span className="text-6xl group-hover:scale-110 transition-transform duration-300">📚</span>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-[#1b3644] mb-3">Kinder (K1, K2 y K3)</h3>
              <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                Niveles preescolares (3 a 6 años) con un programa inmersivo bilingüe. Enfocado en lectoescritura interactiva, lógica-matemática temprana y desarrollo de inteligencia emocional.
              </p>
              <button className="text-left font-semibold text-[#3b8775] hover:text-[#1b3644] transition-colors text-sm flex items-center gap-2">
                Ver plan de estudios <span className="text-lg leading-none">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Servicio 3 */}
          <div className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col bg-slate-50 relative">
            <div className="h-48 bg-gradient-to-tr from-purple-300/30 to-purple-300/10 relative overflow-hidden flex items-center justify-center">
              <span className="text-6xl group-hover:scale-110 transition-transform duration-300">💡</span>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-[#1b3644] mb-3">Clubes After-School</h3>
              <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                Extensión de horario formativo. Talleres de robótica básica, iniciación artística, música y apoyo en tareas. Ideal para padres que trabajan y buscan nutrir los talentos extraescolares.
              </p>
              <button className="text-left font-semibold text-purple-600 hover:text-[#1b3644] transition-colors text-sm flex items-center gap-2">
                Ver clubes <span className="text-lg leading-none">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { ShieldCheck, Video, Heart, BookOpen, Sparkles } from 'lucide-react';

export default function Beneficios() {
  return (
    <section id="beneficios" className="relative py-28 overflow-hidden bg-gradient-to-b from-[#f2f8fc] via-[#f7f5ff] to-[#fbf7f3]">
      {/* Soft background sparkles/texture (Optional overlay) */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-color-burn pointer-events-none"></div>
      {/* Soft glow blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#e0f0ff] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f3e8ff] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#fdf8ed] border border-[#f5e3c8] text-sm font-medium text-[#b58b4b] mb-6 shadow-sm">
            <Sparkles size={14} className="text-[#d8a861]" />
            <span>Tecnología + Cuidado Humano</span>
          </div>

          <h2 className="text-[2.2rem] md:text-5xl font-bold text-[#1b3644] mb-5 tracking-tight">
            Seguridad real <span className="font-medium text-[#1b3644]/70">para quienes<br/>más te importan</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-[1.1rem] leading-relaxed">
            Combinamos educación vanguardista con cuidado humano para ofrecer aprendizaje, creatividad y tranquilidad todos los días.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_15px_40px_-15px_rgba(59,130,246,0.15)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-500 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <ShieldCheck size={28} strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1b3644]">Seguridad<br/>Biométrica</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Acceso exclusivo con reconocimiento facial y huella para entregar y recoger a los alumnos.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_15px_40px_-15px_rgba(34,197,94,0.15)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-green-600 mb-6 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <Video size={28} strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1b3644]">Monitoreo en<br/>Tiempo Real</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Observa la clase de tu hijo en cualquier momento desde tu celular con transmisión segura.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_15px_40px_-15px_rgba(234,179,8,0.15)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center text-amber-600 mb-6 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <Heart size={28} strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1b3644]">Docentes<br/>Calificados</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Educadoras certificadas guiando y acompañando el desarrollo cognitivo de cada estudiante.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_15px_40px_-15px_rgba(168,85,247,0.15)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-purple-500 mb-6 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <BookOpen size={28} strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1b3644]">Educación<br/>STEAM</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Estimulación temprana con tecnología, creatividad y aprendizaje activo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
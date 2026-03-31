import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 overflow-hidden bg-[#162f3c] text-white min-h-[90vh] flex items-center">
      {/* Background Image Setup - Restricted width to prevent over-zooming */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[68%] z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 lg:opacity-100 transition-all duration-700"
          style={{ backgroundImage: "url('/images/inicio_imagen.png')" }}
        ></div>
        {/* Gradients to blend the image into the solid background color */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#162f3c] from-5% via-[#162f3c]/80 to-transparent w-full lg:w-[50%]"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#162f3c] via-[#162f3c]/50 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#162f3c] via-[#162f3c]/50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl mt-8">
          <h1 className="text-[2.25rem] md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.15] mb-5 text-white text-shadow-sm">
            Cuidamos lo <span className="text-[#a3d0c2]">que más amas,</span><br className="hidden md:block"/>
            <span className="inline-block mt-1">incluso cuando tú no puedes</span>
          </h1>
          
          <p className="text-lg md:text-[1.35rem] text-slate-100 mx-auto md:mx-0 max-w-2xl mb-5 leading-snug font-light">
            Tecnología inteligente + cuidado humano para<br className="hidden sm:block" />
            el desarrollo seguro de tu hijo.
          </p>

          <p className="text-[1.05rem] text-slate-200 mb-8 leading-relaxed max-w-xl">
            <span className="font-semibold text-white">Seguridad</span>, monitoreo y atención profesional en todo momento.<br className="hidden sm:block" />
            Tranquilidad para ti, bienestar para ellos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
            <Link href="/contacto" className="bg-[#fcd05c] hover:bg-[#fad875] text-[#17323f] px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(252,208,92,0.3)] transition-all transform hover:scale-105 w-full sm:w-auto text-center inline-block">
              Agendar visita gratuita
            </Link>
            <Link href="/#beneficios" className="bg-transparent hover:bg-white/5 text-slate-200 border border-slate-400/50 px-8 py-3.5 rounded-full font-medium transition-colors w-full sm:w-auto text-center inline-block">
              Ver cómo funciona
            </Link>
          </div>

          <div className="flex flex-col gap-3.5 text-[15px]">
            <div className="flex items-center gap-3">
              <span className="text-yellow-400 text-lg w-6 flex justify-center">⭐</span>
              <p><span className="font-semibold text-white">Más de 50 familias</span> <span className="text-slate-300">confían en nosotros</span></p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#59b8a3] text-lg w-6 flex justify-center">✅</span>
              <p><span className="font-semibold text-white">Monitoreo seguro</span> <span className="text-slate-300">24/7</span></p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg w-6 flex justify-center">👩🏼‍⚕️</span>
              <p><span className="font-semibold text-white">Personal</span> <span className="text-slate-300">certificado</span></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
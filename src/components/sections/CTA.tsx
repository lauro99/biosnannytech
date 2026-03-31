import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 relative px-4 bg-surface">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-secondary to-secondary-dark rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl shadow-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-accent opacity-20 rounded-full blur-2xl"></div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ven y descubre el kínder del futuro</h2>
        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
          Agenda una visita guiada sin compromiso. Conoce a nuestras maestras, experimenta nuestra app para padres y enamórate de nuestro modelo educativo.
        </p>
        <Link href="#contacto" className="bg-primary text-secondary-dark hover:bg-primary-light px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:scale-105 relative z-10 inline-block">
          Quiero agendar una visita
        </Link>
      </div>
    </section>
  );
}
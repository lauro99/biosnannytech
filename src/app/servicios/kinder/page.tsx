import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function KinderPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col pt-24">
      <ScrollToTop />
      <div className="bg-[#162f3c] h-24 w-full absolute top-0 left-0 right-0 z-0"></div>
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 w-full text-center">
        <span className="text-8xl mb-6 inline-block">📚</span>
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6">Kinder (K1, K2 y K3)</h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          Niveles preescolares (3 a 6 años) con un programa inmersivo bilingüe, enfocado en robótica temprana, creatividad y matemáticas lúdicas.
        </p>
        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 mb-10">
          <p className="text-slate-500 mb-6">(Aquí irá la información completa del plan de estudios y metodología de los 3 años de kínder.)</p>
          <Link href="/contacto" className="bg-[#fcd05c] hover:bg-[#fad875] text-[#17323f] px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(252,208,92,0.3)] transition-all transform hover:scale-105 inline-block">
            Pedir más información
          </Link>
        </div>
        <Link href="/#servicios" className="text-[#59b8a3] hover:text-[#3b8775] font-medium">&larr; Volver a Servicios</Link>
      </main>
      
      <Footer />
    </div>
  );
}
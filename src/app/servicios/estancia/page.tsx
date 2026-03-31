import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function EstanciaPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col pt-24">
      <ScrollToTop />
      <div className="bg-[#162f3c] h-24 w-full absolute top-0 left-0 right-0 z-0"></div>
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 w-full text-center">
        <span className="text-8xl mb-6 inline-block drop-shadow-md">🌙</span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#162f3c] mb-6">Estancia Flexible 24/7</h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          La opción perfecta para papás con horarios extendidos. Cuidado profesional bajo demanda de Lunes a Domingo.
        </p>
        <div className="p-8 bg-gradient-to-b from-orange-50 to-white rounded-3xl border border-orange-100 mb-10 text-left max-w-2xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-[#162f3c] mb-6 border-b border-orange-200 pb-4">Nuestras Tarifas y Modalidades</h3>
          <ul className="space-y-4 text-slate-700 text-lg">
            <li className="flex items-center gap-3"><span className="text-green-500">✔</span> <strong>Servicio por hora, día o mes.</strong></li>
            <li className="flex items-center gap-3"><span className="text-yellow-500 text-xl">☀️</span> <strong>Promoción de Apertura:</strong> 4 HORAS por $200 pesos.</li>
            <li className="flex items-center gap-3"><span className="text-[#162f3c] text-xl">🌃</span> <strong>Tarde-Noche:</strong> $100 pesos la hora.</li>
            <li className="flex items-center gap-3 text-red-500 font-semibold mt-4 pt-4 border-t border-orange-100">
              ¡Cupo limitado! Niños de 0 a 10 años.
            </li>
          </ul>
        </div>
        <Link href="/contacto" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all transform hover:scale-105 inline-block text-lg">
          Agendar Estancia Hoy
        </Link>
        <div className="mt-8">
          <Link href="/#servicios" className="text-orange-500 hover:text-orange-700 font-medium">&larr; Volver a Servicios</Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
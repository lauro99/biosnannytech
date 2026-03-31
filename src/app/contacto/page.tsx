import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contacto from '@/components/sections/Contacto';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: 'Contacto y Visitas | BiosNannyTech',
  description: 'Agenda tu visita guiada para conocer BiosNannyTech, el primer kínder tecnológico. Deja tus datos y con gusto te atenderemos.',
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col pt-24">
      <ScrollToTop />
      
      {/* Fondo oscuro en la parte superior para que el Navbar (que tiene texto blanco) sea visible */}
      <div className="bg-[#162f3c] h-24 w-full absolute top-0 left-0 right-0 z-0"></div>
      
      <Navbar />
      
      <main className="flex-grow">
        <Contacto />
      </main>
      
      <Footer />
    </div>
  );
}
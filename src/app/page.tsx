import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Hero from '@/components/sections/Hero';
import Beneficios from '@/components/sections/Beneficios';
import Servicios from '@/components/sections/Servicios';
// import Instalaciones from '@/components/sections/Instalaciones'; // Oculto temporalmente por remodelación
import CTA from '@/components/sections/CTA';

// --- SEO METADATA ---
export const metadata: Metadata = {
  title: 'BiosNannyTech | Maternal, Lactantes y Estancia Infantil',
  description: 'Seguridad biométrica, monitoreo en tiempo real para padres y cuidados en un entorno de aprendizaje y amor.',
  keywords: ['maternal', 'lactantes', 'estancia infantil', 'guardería', 'monitoreo para padres', 'seguridad biométrica', 'BiosNannyTech', 'clubes vespertinos'],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-slate-800 font-sans">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Beneficios />
      <Servicios />
      {/* <Instalaciones /> Oculto temporalmente por remodelación */}
      <CTA />
      <Footer />
    </div>
  );
}

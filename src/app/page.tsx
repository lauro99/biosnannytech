import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Hero from '@/components/sections/Hero';
import Beneficios from '@/components/sections/Beneficios';
import Servicios from '@/components/sections/Servicios';
import Instalaciones from '@/components/sections/Instalaciones';
import CTA from '@/components/sections/CTA';

// --- SEO METADATA ---
export const metadata: Metadata = {
  title: 'BiosNannyTech | Kinder y Educación Inteligente',
  description: 'El primer preescolar tecnológico. Seguridad biométrica, monitoreo en tiempo real para padres y educación STEAM temprana en un entorno de aprendizaje y amor.',
  keywords: ['kinder', 'preescolar', 'educación temprana', 'educación STEAM', 'monitoreo para padres', 'seguridad biométrica', 'BiosNannyTech'],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-slate-800 font-sans">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Beneficios />
      <Servicios />
      <Instalaciones />
      <CTA />
      <Footer />
    </div>
  );
}

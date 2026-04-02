import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: 'Políticas de Seguridad | BiosNannyTech',
  description: 'Cómo protegemos a los niños, el control de acceso y protocolos en BiosNannyTech.',
};

export default function SeguridadPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col pt-24">
      <ScrollToTop />
      
      <div className="bg-[#162f3c] h-24 w-full absolute top-0 left-0 right-0 z-0"></div>
      
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6">Políticas de Seguridad</h1>
        <div className="prose prose-slate max-w-none text-lg text-slate-600">
          <p className="mb-6">Última actualización: Abril 2026</p>
          
          <p>En BiosNannyTech, nuestra prioridad es brindar un ambiente protegido para el bienestar y desarrollo infantil. Implementamos tecnología avanzada, infraestructura especializada y protocolos de actuación sólidos.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">1. Control de Acceso Biométrico</h2>
          <p>Solo personal autorizado y familiares previamente registrados pueden entrar a las instalaciones. Contamos con un sistema biométrico que asegura que cada ingreso es validado al momento. Nadie ajeno a la institución o sin su previa notificación podrá acceder ni retirar a ningún menor bajo ninguna circunstancia.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">2. Sistema de Circuito Cerrado</h2>
          <p>Todas las áreas comunes, aulas y patios de recreo están monitoreadas por un circuito cerrado de televisión (CCTV) en alta definición, grabando en tiempo real y permitiendo supervisión constante. Además, este sistema tecnológico nos habilita para proveer notificaciones y reportes directos sobre el bienestar de su hijo a través de la aplicación a lo largo del día.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">3. Protocolos de Emergencia</h2>
          <p>Todo el personal está capacitado en primeros auxilios y evacuación mediante simulacros periódicos. Colaboramos directamente con las autoridades locales y servicios de emergencias médicas para asegurar que en nuestra infraestructura y diseño se reduzcan riesgos y cualquier incidente reciba una atención inmediata y profesional.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">4. Ciberseguridad</h2>
          <p>La seguridad no solo es física, sino también digital. Los perfiles, expedientes educativos y los registros de salud de sus hijos están encriptados y respaldados bajo estándares de seguridad informática y nube segura, compartiéndose únicamente con los tutores legales y el personal estrictamente necesario.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
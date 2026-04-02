import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: 'Términos de Servicio | BiosNannyTech',
  description: 'Términos y condiciones de uso de BiosNannyTech.',
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col pt-24">
      <ScrollToTop />
      
      <div className="bg-[#162f3c] h-24 w-full absolute top-0 left-0 right-0 z-0"></div>
      
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6">Términos de Servicio</h1>
        <div className="prose prose-slate max-w-none text-lg text-slate-600">
          <p className="mb-6">Última actualización: Abril 2026</p>
          
          <p>Bienvenido a BiosNannyTech. Estos Términos y Condiciones establecen las reglas y normas aplicables al uso de nuestros servicios educativos, la estancia infantil y las plataformas tecnológicas asociadas.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">1. Aceptación de los Términos</h2>
          <p>Al inscribir a su hijo/hija o al utilizar cualquiera de nuestros servicios, incluyendo nuestro sitio web y aplicativos, usted acepta regirse por estos términos y condiciones. Si no está de acuerdo con alguno de ellos, no podrá utilizar nuestros servicios.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">2. Servicios Educativos</h2>
          <p>Ofrecemos educación preescolar (Kinder y Maternal) así como estancias infantiles y clubes vespertinos integrados con herramientas tecnológicas y un enfoque STEAM. Nos reservamos el derecho de modificar el plan de estudios, horarios o actividades para adaptarnos a las necesidades de los alumnos y mejorar la calidad de la enseñanza.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">3. Pagos y Cobros</h2>
          <p>Los padres o tutores se comprometen a realizar los pagos de inscripción, colegiaturas y servicios adicionales en los plazos establecidos. El incumplimiento de pago podría resultar en la retención del servicio o en la generación de recargos, según se estipule en el contrato de inscripción firmado.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">4. Limitación de Responsabilidad</h2>
          <p>El uso de la información en línea y la aplicación móvil se proporciona "tal cual". BiosNannyTech no se hace responsable por caídas temporales del servidor externo o por fallas de conectividad que escapen a nuestro control.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
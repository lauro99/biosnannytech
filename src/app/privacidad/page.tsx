import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: 'Política de Privacidad | BiosNannyTech',
  description: 'Conoce nuestra política de privacidad y cómo protegemos tus datos.',
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col pt-24">
      <ScrollToTop />
      
      <div className="bg-[#162f3c] h-24 w-full absolute top-0 left-0 right-0 z-0"></div>
      
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6">Política de Privacidad</h1>
        <div className="prose prose-slate max-w-none prose-h2:text-secondary-dark prose-a:text-primary">
          <p className="text-lg text-slate-600 mb-6">Última actualización: Abril 2026</p>
          
          <p>En BiosNannyTech, nos tomamos muy en serio la privacidad de nuestros alumnos y sus familias. Esta Política de Privacidad describe cómo recopilamos, utilizamos, protegemos y compartimos la información personal que nos proporciona.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">1. Información que recopilamos</h2>
          <p>Recopilamos información personal que usted nos proporciona voluntariamente, como nombre, información de contacto (teléfono, correo electrónico) y la información de sus hijos que sea necesaria para proveer nuestros servicios. Además, utilizamos sistemas de seguridad, como cámaras de circuito cerrado y controles de acceso biométrico que registran la asistencia y proporcionan un entorno seguro.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">2. Uso de la información</h2>
          <p>Utilizamos la información para: </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Brindar y mejorar nuestros servicios educativos y de cuidado infantil.</li>
            <li>Comunicarnos con los padres o tutores sobre el progreso o cualquier eventualidad.</li>
            <li>Garantizar la seguridad de las instalaciones y el bienestar de los menores.</li>
            <li>Cumplir con las obligaciones legales y normativas aplicables.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">3. Protección de datos</h2>
          <p>Implementamos medidas de seguridad físicas, técnicas y administrativas para proteger su información personal y la de sus hijos contra el acceso no autorizado, la pérdida o la alteración. Al ser un kínder tecnológico, nos comprometemos con estándares de seguridad cibernética de primer nivel para resguardar la plataforma por la que compartimos los reportes a los padres.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">4. Sus derechos</h2>
          <p>Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, por favor contáctenos directamente en nuestras instalaciones o mediante el formulario de contacto.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
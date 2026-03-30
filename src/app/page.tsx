import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Video, 
  GraduationCap, 
  Heart, 
  Menu, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

// --- SEO METADATA ---
export const metadata: Metadata = {
  title: 'BiosNannyTech | Cuidado Inteligente y Amoroso',
  description: 'La primera guardería tecnológica. Seguridad biométrica, monitoreo en tiempo real para padres y educación STEAM temprana en un entorno lleno de amor.',
  keywords: ['guardería', 'tecnología', 'cuidado infantil', 'educación STEAM', 'monitoreo para padres', 'seguridad biométrica', 'BiosNannyTech'],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-slate-800 font-sans">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Image 
                src="/images/logo.png" 
                alt="BiosNannyTech Logo" 
                width={56} 
                height={56} 
                className="w-14 h-14 object-contain"
                priority
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="#inicio" className="text-secondary hover:text-primary transition-colors font-medium">Inicio</Link>
              <Link href="#beneficios" className="text-secondary hover:text-primary transition-colors font-medium">Servicios</Link>
              <Link href="#instalaciones" className="text-secondary hover:text-primary transition-colors font-medium">Instalaciones</Link>
              <Link href="#contacto" className="text-secondary hover:text-primary transition-colors font-medium">Contacto</Link>
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold shadow-md shadow-primary/30 transition-all transform hover:scale-105">
                Agendar Visita
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button className="text-secondary hover:text-primary focus:outline-none">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="inicio" className="relative pt-20 pb-32 overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-secondary to-accent-dark opacity-90 -z-10" />
        {/* Subtle tech pattern background placeholder */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/50 text-sm font-semibold text-primary-light">
            ✨ Cuidado seguro e inteligente
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl mb-6">
            Bienvenido a <span className="text-primary">BiosNanny</span><span className="text-accent-light">Tech</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
            Tranquilidad para ti, desarrollo integral para ellos. Combinamos la calidez humana con tecnología de punta para crear el entorno más seguro y estimulante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-primary hover:bg-primary-light text-secondary-dark px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/30 transition-all hover:-translate-y-1">
              Agendar un Recorrido
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg shadow-sm transition-all hover:border-white">
              Conocer más
            </button>
          </div>
        </div>
      </section>

      {/* 3. BENEFICIOS / POR QUÉ ELEGIRNOS */}
      <section id="beneficios" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">La tranquilidad que mereces</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Nuestro modelo educativo fusiona la tecnología de vanguardia con metodologías basadas en el apego seguro y la inteligencia emocional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-background p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary-dark mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Seguridad Biométrica</h3>
              <p className="text-slate-600 leading-relaxed">Control de acceso estricto mediante reconocimiento facial y huella dactilar para personal y tutores autorizados.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent-dark mb-6 group-hover:scale-110 transition-transform">
                <Video size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Monitoreo en Tiempo Real</h3>
              <p className="text-slate-600 leading-relaxed">Aplicación exclusiva para padres donde puedes ver el streaming seguro de tu pequeño durante el día.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary-dark mb-6 group-hover:scale-110 transition-transform">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Personal Capacitado</h3>
              <p className="text-slate-600 leading-relaxed">Educadoras, psicólogos infantiles y personal médico pediátrico en las instalaciones en todo momento.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-background p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent-dark mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Educación STEAM</h3>
              <p className="text-slate-600 leading-relaxed">Laboratorios sensoriales adaptados a su edad para despertar su interés por la ciencia, arte y tecnología desde bebés.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACERCA DE / INSTALACIONES */}
      <section id="instalaciones" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Un entorno diseñado para la curiosidad y la seguridad
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                En BiosNannyTech hemos reinventado el concepto de guardería. Cada metro cuadrado está pensado ergonómicamente para prevenir accidentes, mientras que nuestras instalaciones están equipadas con sensores ambientales para garantizar la temperatura y calidad del aire perfecta.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent"><CheckIcon /></div>
                  <span className="text-slate-700">Pisos absorbentes de impacto antibacterianos.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent"><CheckIcon /></div>
                  <span className="text-slate-700">Purificadores de aire de grado hospitalario (HEPA).</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent"><CheckIcon /></div>
                  <span className="text-slate-700">Comedor con nutrición personalizada mediante IA.</span>
                </li>
              </ul>
            </div>
            {/* Image Placeholder */}
            <div className="lg:w-1/2 w-full">
              <div className="aspect-[4/3] bg-secondary-light rounded-[2rem] overflow-hidden relative shadow-2xl border-4 border-white">
                <div className="absolute inset-0 flex items-center justify-center text-white/70 flex-col gap-2 bg-gradient-to-tr from-secondary-dark to-secondary/80">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex flex-col items-center justify-center shadow-sm backdrop-blur-sm">
                   <Video size={32} className="text-primary mb-1"/> 
                  </div>
                  <span className="font-medium tracking-wide">Galería de Instalaciones</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION (CTA) */}
      <section className="py-20 relative px-4 bg-surface">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-secondary to-secondary-dark rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl shadow-secondary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary opacity-20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-accent opacity-20 rounded-full blur-2xl"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ven y descubre el cuidado inteligente</h2>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
            Agenda una visita guiada sin compromiso. Conoce a nuestro equipo, experimenta nuestra app para padres y enamórate del futuro del cuidado infantil.
          </p>
          <button className="bg-primary text-secondary-dark hover:bg-primary-light px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:scale-105 relative z-10">
            Quiero agendar una visita
          </button>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer id="contacto" className="bg-secondary-dark text-slate-300 pt-20 pb-10 border-t border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image 
                  src="/images/logo.png" 
                  alt="BiosNannyTech Logo" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12 object-contain bg-white/5 p-1 rounded-xl"
                />
                <span className="font-bold text-xl text-white tracking-tight">
                  BiosNanny<span className="text-accent-light">Tech</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Cuidamos lo más valioso de tu vida integrando innovación, seguridad y amor en cada detalle de su desarrollo.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors text-white"><FacebookIcon /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors text-white"><InstagramIcon /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors text-white"><TwitterIcon /></a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Explorar</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#inicio" className="hover:text-primary transition-colors">Inicio</Link></li>
                <li><Link href="#beneficios" className="hover:text-primary transition-colors">Nuestros Servicios</Link></li>
                <li><Link href="#instalaciones" className="hover:text-primary transition-colors">Instalaciones</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Blog para Padres</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-primary transition-colors">Política de Privacidad</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Términos de Servicio</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Políticas de Seguridad</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Contacto</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5" />
                  <span className="text-slate-400">Av. Innovación 1234, Distrito Tecnológico.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-accent-light" />
                  <span className="text-slate-400">+52 55 1234 5678</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <span className="text-slate-400">hola@biosnannytech.com</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="border-t border-secondary pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} BiosNannyTech. Todos los derechos reservados.</p>
            <p>Hecho con <span className="text-primary">inteligencia</span> y amor para el futuro de tus hijos.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Icono Helper para la lista de instalaciones
function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

// Iconos Sociales Integrados
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

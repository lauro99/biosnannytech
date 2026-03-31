import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../ui/Icons';

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-slate-300 pt-20 pb-10 border-t border-secondary">
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
              Educamos y cuidamos lo más valioso de tu vida, integrando innovación, seguridad y excelencia académica desde el primer día.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1DdAkeTEPf/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors text-white"><FacebookIcon /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors text-white"><InstagramIcon /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors text-white"><TwitterIcon /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Explorar</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#inicio" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="/#beneficios" className="hover:text-primary transition-colors">Nuestros Servicios</Link></li>
              <li><Link href="/#instalaciones" className="hover:text-primary transition-colors">Instalaciones</Link></li>
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
                <MapPin size={22} className="text-primary mt-0.5 shrink-0" />
                <span className="text-slate-400">Lima 3, Jardines del Cupatitzio, Uruapan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#25D366] shrink-0" />
                <span className="text-slate-400">452 500 5450</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-slate-400">info@biosnannytech.com</span>
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
  );
}
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-[#fccc6f]">BiosNanny</span>
              <span className="text-[#a3d0c2]">Tech</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            <Link href="/#inicio" className="text-white hover:text-white/80 transition-colors">Inicio</Link>
            <Link href="/#servicios" className="text-white hover:text-white/80 transition-colors">Servicios</Link>
            <Link href="/#instalaciones" className="text-white hover:text-white/80 transition-colors">Instalaciones</Link>
            <Link href="/contacto" className="text-white hover:text-white/80 transition-colors">Contacto</Link>
            <Link href="/contacto" className="bg-[#facc33] text-[#1b3644] px-6 py-2.5 rounded-full font-bold shadow-[0_0_20px_rgba(250,204,51,0.5)] transition-all hover:scale-105 inline-block">
              Agendar Visita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-50">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight" onClick={closeMobileMenu}>
              <span className="text-[#fccc6f]">BiosNanny</span>
              <span className="text-[#a3d0c2]">Tech</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            <Link href="/#inicio" className="text-white hover:text-white/80 transition-colors">Inicio</Link>
            <Link href="/#servicios" className="text-white hover:text-white/80 transition-colors">Servicios</Link>
            <Link href="/#instalaciones" className="text-white hover:text-white/80 transition-colors">Instalaciones</Link>
            <Link href="/promociones" className="text-[#facc33] font-bold hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[#facc33] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Promociones</Link>
            <Link href="/contacto" className="text-white hover:text-white/80 transition-colors">Contacto</Link>
            <Link href="/contacto" className="bg-[#facc33] text-[#1b3644] px-6 py-2.5 rounded-full font-bold shadow-[0_0_20px_rgba(250,204,51,0.5)] transition-all hover:scale-105 inline-block">
              Agendar Visita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-white focus:outline-none p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Menú principal"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full bg-[#162f3c]/95 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="px-4 pt-28 pb-8 space-y-4 flex flex-col shadow-inner">
          <Link href="/#inicio" onClick={closeMobileMenu} className="block px-4 py-3 text-lg font-medium text-white hover:bg-white/10 rounded-xl transition-colors">Inicio</Link>
          <Link href="/#servicios" onClick={closeMobileMenu} className="block px-4 py-3 text-lg font-medium text-white hover:bg-white/10 rounded-xl transition-colors">Servicios</Link>
          <Link href="/#instalaciones" onClick={closeMobileMenu} className="block px-4 py-3 text-lg font-medium text-white hover:bg-white/10 rounded-xl transition-colors">Instalaciones</Link>
          <Link href="/promociones" onClick={closeMobileMenu} className="block px-4 py-3 text-lg font-bold text-[#facc33] hover:bg-white/10 rounded-xl transition-colors flex items-center gap-2">Promociones <span className="text-xl leading-none">🎁</span></Link>
          <Link href="/contacto" onClick={closeMobileMenu} className="block px-4 py-3 text-lg font-medium text-white hover:bg-white/10 rounded-xl transition-colors">Contacto</Link>
          <div className="pt-4 border-t border-white/10">
            <Link href="/contacto" onClick={closeMobileMenu} className="block w-full text-center bg-[#facc33] text-[#1b3644] px-6 py-4 rounded-xl font-bold shadow-lg mt-2">
              Agendar Visita
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
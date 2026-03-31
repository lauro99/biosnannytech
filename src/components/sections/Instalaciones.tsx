import { Video } from 'lucide-react';
import { CheckIcon } from '../ui/Icons';

export default function Instalaciones() {
  return (
    <section id="instalaciones" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Un entorno diseñado para la curiosidad y el aprendizaje
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              En BiosNannyTech hemos reinventado el concepto de jardín de niños. Cada salón está pensado ergonómicamente para potenciar la creatividad y prevenir accidentes, equipados con la mejor tecnología para apoyar a nuestros educadores.
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
  );
}
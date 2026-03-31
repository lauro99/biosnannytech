import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Image from 'next/image';

/* ====================================================================================
   INSTRUCCIONES PARA AGREGAR NUEVAS PROMOCIONES (MUY FÁCIL):
   
   1. Guarda la imagen de tu promoción en la carpeta: 'public/images/promos/'
      (Asegúrate de que la imagen sea .jpg, .png o .webp)
      
   2. Copia y pega uno de los bloques dentro de los corchetes [ ] de abajo y 
      cambia los datos. 

   EJEMPLO DE BLOQUE:
   {
     id: 1,
     titulo: "Inscripción Gratis Septiembre",
     imagen: "/images/promos/mi-imagen.jpg", 
     activa: true, // Pon 'false' si quieres ocultarla temporalmente sin borrar el código
     etiqueta: "Nuevo Ingreso" // Opcional, un pequeño texto arriba
   }
==================================================================================== */

const PROMOCIONES = [
  {
    id: 1,
    titulo: "¡Inscripción 100% GRATIS + Uniforme!",
    imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    activa: true,
    etiqueta: "🔥 Últimos 5 Lugares",
    descripcion: "Asegura el futuro de tu pequeño hoy. Al pagar tu primer ciclo mensual por adelantado, te regalamos la inscripción completa y su primer uniforme escolar. ¡Solo esta semana!"
  },
  {
    id: 2,
    titulo: "Día de Prueba VIP - Sin Costo",
    imagen: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    activa: true,
    etiqueta: "✨ Descubre la Diferencia",
    descripcion: "¿Indeciso? Deja que tu hijo viva la experiencia BiosNannyTech por un día entero totalmente gratis. Te daremos acceso temporal a nuestras cámaras para que lo veas disfrutar en tiempo real."
  },
  {
    id: 3,
    titulo: "Plan Hermanos / Amigos: 2x1",
    imagen: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    activa: true,
    etiqueta: "👯‍♂️ Programa Aliados",
    descripcion: "Si inscribes a dos hermanitos o recomiendas a un amigo y se inscribe, la primera mensualidad de uno de los dos va por nuestra cuenta. ¡Juntos es mejor!"
  },
  {
    id: 4,
    titulo: "Pase 'Noche Libre' para Papás: 50% OFF",
    imagen: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    activa: true,
    etiqueta: "🌙 Estancia 24/7",
    descripcion: "¿Cena romántica o imprevistos de trabajo? Tu hijo estará seguro, cenando y durmiendo en las mejores manos. Tu primera noche de estancia infantil a mitad de precio."
  },
  {
    id: 5,
    titulo: "Beca 30% en Club de Robótica",
    imagen: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    activa: true,
    etiqueta: "💻 Mente Brillante",
    descripcion: "Potencia el talento de tu hijo. Obtén un 30% de descuento vitalicio en nuestros clubes extracurriculares al inscribirlo en horario extendido."
  }
];


export default function PromocionesPage() {
  // Filtramos para mostrar solo las que estén 'activas'
  const promosActivas = PROMOCIONES.filter(promo => promo.activa);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col pt-24">
      <ScrollToTop />
      
      {/* Fondo oscuro para que el Navbar resalte */}
      <div className="bg-[#162f3c] h-24 w-full absolute top-0 left-0 right-0 z-0"></div>
      <Navbar />

      <main className="flex-grow w-full pb-20">
        
        {/* Cabecera de la página */}
        <section className="bg-gradient-to-b from-[#162f3c] rounded-b-[3rem] px-4 pt-16 pb-24 text-center shadow-lg relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
             <span className="text-6xl inline-block mb-6 drop-shadow-[0_0_15px_rgba(252,208,92,0.6)]">🎉</span>
             <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Promociones Exclusivas</h1>
             <p className="text-lg md:text-xl text-slate-200">
               Descubre nuestros beneficios, becas y descuentos especiales pensados en apoyar a la economía de tu familia.
             </p>
           </div>
        </section>

        {/* Galería de Promociones */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
          
          {promosActivas.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-slate-100">
               <span className="text-5xl inline-block mb-4">👀</span>
               <h3 className="text-2xl font-bold text-[#1b3644] mb-2">¡Próximamente más sorpresas!</h3>
               <p className="text-slate-500">Por el momento no tenemos promociones activas. ¡Vuelve pronto!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {promosActivas.map((promo) => (
                <div key={promo.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 group flex flex-col">
                  
                  {/* Contenedor de la Imagen */}
                  <div className="relative aspect-[4/5] md:aspect-square w-full bg-slate-100 overflow-hidden">
                    {promo.etiqueta && (
                      <div className="absolute top-4 left-4 z-10 bg-[#fcd05c] text-[#1b3644] text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                        {promo.etiqueta}
                      </div>
                    )}
                    <img 
                      src={promo.imagen} 
                      alt={promo.titulo} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    
                    {/* Gradiente sutil para que luzca elegante */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Textos de la tarjeta */}
                  <div className="p-6 flex flex-col flex-grow text-center items-center">
                    <h3 className="text-xl font-bold text-[#1b3644] mb-3">{promo.titulo}</h3>
                    {promo.descripcion && (
                      <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                        {promo.descripcion}
                      </p>
                    )}
                    
                    <a 
                      href="/contacto" 
                      className="mt-auto w-full bg-slate-100 hover:bg-[#59b8a3] hover:text-white text-slate-700 font-semibold py-3 rounded-2xl transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      Me interesa <span className="text-xl leading-none">&rarr;</span>
                    </a>
                  </div>
                  
                </div>
              ))}
            </div>
          )}
        </section>

      </main>

      <Footer />
    </div>
  );
}
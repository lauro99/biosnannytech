import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: 'Política de Privacidad | BiosNannyTech',
  description: 'Conoce nuestro aviso de privacidad integral y cómo protegemos jurídica y tecnológicamente tus datos y los de los menores de edad.',
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col pt-24">
      <ScrollToTop />
      
      <div className="bg-[#162f3c] h-24 w-full absolute top-0 left-0 right-0 z-0"></div>
      
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6">Aviso de Privacidad Integral</h1>
        <div className="prose prose-slate max-w-none prose-h2:text-secondary-dark prose-a:text-primary">
          <p className="text-lg text-slate-600 mb-6 font-bold">Última actualización: Mayo 2026</p>
          
          <p>En estricto apego y cumplimiento a lo dispuesto por la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>, su Reglamento y los Lineamientos del Aviso de Privacidad, <strong>BiosNannyTech</strong> (en adelante "La Institución") emite el presente Aviso de Privacidad Integral.</p>
          
          <p>Nuestra prioridad absoluta es la protección de los datos personales (incluyendo datos sensibles) de nuestros alumnos, padres, tutores y prospectos, implementando las medidas de seguridad físicas, técnicas y administrativas más estrictas para evitar el daño, pérdida, alteración, destrucción, o el uso, acceso o tratamiento no autorizado.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">1. Datos Personales y Sensibles Recabados</h2>
          <p>La Institución recaba de forma directa y presencial, así como a través de nuestros medios tecnológicos, las siguientes categorías de datos personales y sensibles:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Datos de Identificación del Menor:</strong> Nombre completo, fecha de nacimiento, CURP, acta de nacimiento y grado escolar o nivel de desarrollo integral.</li>
            <li><strong>Datos de Salud (Considerados Sensibles):</strong> Tipo de sangre, alergias comprobadas, enfermedades crónicas padecidas, tratamientos médicos en curso, cartilla de vacunación y requerimientos nutricionales o psicopedagógicos especiales.</li>
            <li><strong>Datos de Padres/Tutores Legales:</strong> Nombre completo, domicilio verificado, ocupación laboral, identificación oficial vigente, teléfonos de localización prioritaria, correo electrónico, RFC (para efectos de facturación) y firma autógrafa.</li>
            <li><strong>Datos Biométricos y Multimedia (Considerados Sensibles):</strong> Huellas dactilares y biometría facial (exclusivamente para control de acceso informático al instituto), así como imágenes y grabaciones en video obtenidas por las cámaras de videovigilancia de nuestras instalaciones con estricto fin de seguridad.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">2. Finalidades del Tratamiento</h2>
          <p>Los datos recabados serán utilizados bajo estricta confidencialidad para las siguientes finalidades primarias y necesarias que dan origen a la relación jurídica e institucional:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Prestación de servicios educativos, formativos, de guardería y estancia 24/7 de manera óptima, asertiva y personalizada.</li>
            <li>Identificación formal, habilitación de controles de acceso perimetral biométricos y salvaguarda de la integridad física de los menores y el personal dentro de las instalaciones.</li>
            <li>Integración y custodia de expedientes académicos, médicos y psicopedagógicos exigidos por autoridades regulatorias aplicables.</li>
            <li>Atención, logística médica y contacto inmediato con tutores en casos de emergencias sanitarias o incidentes preventivos.</li>
            <li>Gestión de cobranza, emisión de facturas fiscales y el cabal cumplimiento de nuestras obligaciones contables y administrativas.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">3. Limitación, Ciberseguridad y Control Tecnológico</h2>
          <p>Al tener en nuestro núcleo el componente tecnológico, su información es recolectada, transmitida y almacenada en bases de datos y servidores apoyados en protocolos de cifrado de extremo a extremo, detrás de barreras de red (firewalls) robustas y vigiladas por mecanismos <em>antimalware</em> para mitigar brechas de seguridad (Ciberseguridad Continua).</p>
          <p>Es importante destacar que el procesamiento de datos biométricos utilizados para el control de acceso y el análisis en el ecosistema de vigilancia se restringe al uso exclusivo dentro del flujo operativo entre el software propietario y el personal de alta gerencia o seguridad corporativa de la institución. Estas herramientas son intransferibles de sus responsabilidades de verificación.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">4. Transferencia de Datos</h2>
          <p>Le informamos enfáticamente que <strong>BiosNannyTech NO realiza transferencias, comercialización ni compartición de sus datos o los de sus menores a terceros o con propósitos mercadológicos</strong>. Sus datos solo se compartirán excepcionalmente en situaciones que encuadren plenamente en las descripciones del Artículo 37 de la LFPDPPP, las cuales consideran primariamente:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Que la transferencia sea exigida legalmente por requerimientos de autoridades judiciales o competentes que se encuentren debidamente fundados y motivados.</li>
            <li>Que se presente una inminente emergencia médica o integridad comprometida que requiera la irrenunciable intervención médica donde compartir información específica con clínicas, hospitales, o paramédicos sea una obligación de auxilio.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">5. Ejercicio de Derechos ARCO y Revocación</h2>
          <p>De conformidad a lo plasmado en las legislaciones de privacidad de nuestro país, usted posée sus derechos <strong>ARCO</strong>: derecho a rectificar e indagar qué datos conservamos (<strong>A</strong>cceso), solicitar que realicemos correcciones cuando encontremos imprecisiones (<strong>R</strong>ectificación), solicitar la supresión de nuestra retención (<strong>C</strong>ancelación) y externar la nulidad de su tratamiento cuando no deriven de su propósito primordial (<strong>O</strong>posición).</p>
          <p>Cualquier petición para el ejercicio de los Derechos ARCO deberá solicitarse de forma directa y presencial ante el departamento directivo/administrativo de nuestras instalaciones, requiriendo un formato validable llenado de puño y letra, y acompañando identificación oficial vigente que sustente la tutoría del titular de los derechos solicitados.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
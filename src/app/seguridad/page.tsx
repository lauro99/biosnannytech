import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: 'Protocolos de Seguridad | BiosNannyTech',
  description: 'Conoce los estándares robustos de seguridad biométrica, ciberseguridad avanzada y respuesta de contingencias implementados por BiosNannyTech.',
};

export default function SeguridadPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col pt-24">
      <ScrollToTop />
      
      <div className="bg-[#162f3c] h-24 w-full absolute top-0 left-0 right-0 z-0"></div>
      
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6">Políticas y Protocolos de Seguridad Institucional</h1>
        <div className="prose prose-slate max-w-none text-lg text-slate-600">
          <p className="mb-6 font-bold">Tecnología y Protocolos - Actualizado: Mayo 2026</p>
          
          <p>En <strong>BiosNannyTech</strong>, la integridad inviolable es el principio maestro y rector sobre el que rigen todas y cada una de nuestras dinámicas en torno a la comunidad infantil de primer nivel y su entorno operante. Ello nos encauza a instituir sin reparo una robusta, restrictiva e inexpugnable capa de protección dual: un engranaje preciso y estricto en biometría y controles perimetrales, anidado sobre un ecosistema proactivo de infraestructura de prevención prehospitalaria, protección informática de grado vanguardista y saneamiento patológico del recinto.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">1. Matriz Cero Tolerancia y Exclusas Biométricas de Acceso Integral</h2>
          <p>El perímetro exterior e infraestructural de las instalaciones se halla salvaguardado y regido de manera permanente por el paradigma operativo de "Validación y Aislamiento por Sistema" (Zero-Trust Model):</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Reconocimiento Biométrico Implacable:</strong> Las puertas principales están configuradas bajo estructura dual de exclusas "tipo trampa/blindaje bancario". Bajo ningún criterio discrecional y/o excusa o flexión relacional se habilitarán accesos para una contraparte. Solo se aperturará tras una lectura efectiva a las métricas del rostro biométrico y/o parámetros dactilares debidamente cotejados por la inteligencia de las terminales operativas.</li>
            <li><strong>Mecanismo Legal Sobre Bloqueo Inmediato:</strong> Ante querellas, conflictos tutelados, sentencias limitantes y cualquier querella parental corroborada con oficios judiciales procedentes presentados ante administración, las características corporales relacionadas a los actores sancionados o suspendidos son eliminadas del control de la base institucional. Su aproximamiento acata una negación perentoria del acceso a la planta física.</li>
            <li><strong>Protocolo Excepcional de Entrega a Exclusividad Aprobada:</strong> Bajo mandato, todos los individuos carecientes de pre-autorización documentaria fotográfica, biometría censada y en un formato validado están sistemáticamente penalizados en el proceso de buscar retirar parcial o plenamente a niños adyacentes a las inmediaciones. En contingencias demostrables donde un allegado secundario reclame una entrega sin autorización explícita previa y cotejable por el centro informático, se invocará al comando reaccionario de emergencia.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">2. Circuito Cerrado, Monitorización Panorámica y Ecosistema de Alarmas</h2>
          <p>No existen resquicios pasivos perimetrales, el diseño arquitectónico se fundó al cobijo y resguardo de la Videovigilancia (CCTV) Inteligente IP en grabaciones dinámicas 4K e ininterrumpida operatividad analítica.</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Todos los espacios formales, comedores, áreas lúdico constructivas, andadores de exploración y claustros docentes (exceptuando rigurosamente salas sanitarias) se auditan operativamente y carecen de cortinas virtuales ni espacios opacos.</li>
            <li>El registro cronológico videográfico es sostenido como patrimonio de preservación institucional bajo redundancia segura por servidores locales espejeados que, sin disrupción alguna, son volcados sincronizadamente y en formato encapsulado hacia infraestructuras en nubes blindadas.</li>
            <li>Despliegue operativo y sigiloso sobre sensores infra rojos, cercas detectoras, alarmas interconectadas y botones de pánico comunicados y atados de primer nivel a comandos logísticos y de fuerzas policiales y servicios de salud.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">3. Encriptación Pediátrica Informativa (Ciberprotección Defensiva)</h2>
          <p>Porque somos vanguardia tecno-sensible y resguardamos a nuestros miembros, el andamiaje electrónico se cobija bajo los estándares ISO aplicables a la salud y al cuidado integral de menores. Las carteras nutricionales, bitácoras neurológicas o padecimientos infantiles y trayectorias cronológicas son aislados con avanzados sistemas de encriptación militar. Las intercepciones o inyecciones externas rebotan gracias a los parches en red perimetrales. Implementamos esquemas de alta rotación de <em>passwords</em> a usuarios paternos para inhabilitar fugas en plataformas digitales relativas a nuestros prospectos de estancias.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">4. Plan Máximo Prehospitalario y Logística Civil</h2>
          <p>Nuestra comunidad entera está supeditada imperativamente a una capacitación y aval técnico obligatorio como primeros respondedores por los cánones locales en: soporte cardiorrespiratorio vital, abordajes en resucitación RCP y Maniobra de Heimlich pediátrica a fondo.</p>
          <p>Están establecidas alianzas primordiales, ineludibles y vigentes con nosocomios infantiles selectos a un alcance inmediato y veloz, un escrutinio dietético para extirpar la ingestión y colindancia a alérgenos que causen patogénias agudas (Ej. Trazas y perfiles nutríferos secos, y mariscos alérgenos).</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">5. Muros Sanitizantes Epidemiológicos Proactivos</h2>
          <p>Se acató una depuración estructural incuestionable con el despliegue del Filtro Clínico Diario Obligatorio en el portón general; rehusando y delegando la negación sin excepciones ni distinciones al ingreso general en personas provistas con perfiles inflamatorios en garganta, rinitis agudizada o índices de piréxia (fiebre). Para coadyuvar y mermar exponencialmente variables de brotes orgánicos, instrumentamos rutinas obligadas higrotérmicas aplicando generadores de ozono e iluminación estática y germicida UV-C estandarizados con graduación médica para desinfección molecular del aire y enseres de los niños cuando los alumnos parten al concluir jornadas.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: 'Términos de Servicio | BiosNannyTech',
  description: 'Términos, condiciones vinculantes y marco jurídico normativo de los servicios brindados y operados por BiosNannyTech.',
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col pt-24">
      <ScrollToTop />
      
      <div className="bg-[#162f3c] h-24 w-full absolute top-0 left-0 right-0 z-0"></div>
      
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6">Condiciones Generales y Términos de Servicio</h1>
        <div className="prose prose-slate max-w-none text-lg text-slate-600">
          <p className="mb-6 font-bold">Última actualización: Mayo 2026</p>
          
          <p>Al matricular al menor de edad bajo su custodia o de contratar e interactuar con cualquiera de los servicios institucionales que oferta <strong>BiosNannyTech</strong> (en lo consiguiente citado como "La Institución"), los padres de familia, madres o tutores legales (en lo consiguiente referenciados como "El Tutor") convienen y consienten expresamente el someterse, obligarse legalmente y acatar sin reservas todos y cada uno de los lineamientos definidos en estos Términos.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">1. Alcance de los Servicios</h2>
          <p>Nuestra oferta se enmarca bajo esquemas y planes del orden preescolar de carácter vanguardista (K1, K2 y K3, y Maternal), de igual modo incluye clubes STEAM extraescolares de alto nivel, y operaciones innovadoras de modalidad guardería estancia y horario vespertino-nocturno bajo demanda. La Institución retiene para sí de forma explícita el derecho potestativo inalienable para reestructurar, acoplar, suprimir o enriquecer las currículas académicas y agendas operacionales siempre apuntando hacia una mejora en la provisión del marco integral formativo de su comunidad estudiantil.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">2. Responsabilidad Fundamental sobre Exposición de Salud</h2>
          <p>El Tutor contrae la obligación jurídica primordial, indisoluble e inexcusable de declarar bajo un marco de protesta de decir completa verdad, de forma fidedigna y certera <strong>cualquier y toda anomalía, afección diagnosticada, padecimiento de salud clínico, neurológico, nutricional (alergias de amplio espectro, incluyendo choque anafiláctico), y requerimiento especial o impedimentos físicos</strong> del menor. La Institución y sus directivos, así como personal afiliado, quedan irrevocable y perpetuamente eximidos de forma tajante contra toda responsabilidad civil, administrativa o imputación judicial en incidentes donde medie culpa o agravio surgido o coadyuvado de forma directa o conexa al error de negligencia u omisión cometida por reservas u ocultamiento de El Tutor en su proceso de registro.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">3. Servicios Digitales e Inmunidad en Sistemas Tecnológicos</h2>
          <p>Las redes corporativas de aplicaciones vinculantes, así como la transmisión digital o monitoreo en la nube, operan como canales secundarios de valor sobre el entorno formativo principal. La Institución provee este canal interconectado <em>“en el estado y forma en que se encuentran (“As is”)”</em>. La Institución desconoce categóricamente todo endoso sobre interrupciones no anticipadas del ancho de red proporcionadas por terceros, colapsos foráneos, actualizaciones de software, cese imprevisto o retraso ineludible en conectividad.</p>
          <p>Las utilidades y registros de dichas aplicaciones son estrictamente asignadas en carácter confidencial, restrictivo al usuario e <strong>intransferibles</strong>. Efectuar acciones como compartir accesos o contraseñas, clonear perfiles, capturar copias y/o grabaciones que violen derechos o privacidad ajena para esparcirlas por redes, y/o intencionalmente burlar (hackeo) directrices de ingreso en las aplicaciones, constituye causa sumaria, incuestionable e inmediata para la desvinculación y expulsión escolar irreversible, acoplándose además a reservas del instituto y a interponer las demandas necesarias.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">4. Causas de Rescisión Contractual y Desvinculación Justificada</h2>
          <p>Constituyen fallas graves por parte del Tutor, y la Institución se atribuirá derecho cabal para anular toda interacción formativa y obligacional prestada, llevando a cabo la rescisión inminente de los términos estipulados sin rembolso a primas generadas en las siguientes causales:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Acumulación de mensualidades, primas por eventos vespertinos o anualidades caídas y no resarcidas fuera del límite de morosidad acordados previamente en documento contractual final.</li>
            <li>Atentados conductuales: difamación injustificada, intimidación moral o legal, ataques violentos verbales o físicos ejercidos por El Tutor, parentela o agregados que actúen contra maestros, directivos, padres afiliados o contra cualquier otro alumno dentro o colindante a instalaciones.</li>
            <li>Presentación y soporte material mediante uso de comprobaciones e historiales clínicos intencionalmente erróneos, editados o falsificados de su procedencia original.</li>
            <li>Irrupción, disputas interpersonales agudas por pugnas judiciales familiares intra-tutores derivadas por demandas de custodia y tutela, que desencadenen confrontaciones hostiles en zonas circundantes y comprometan el estado anímico, reputacional y seguridad pública de todo el plantel o el alumnado perimetral.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#162f3c]">5. Exención Legal Ante Dinámicas Relacionales de Tutores y Compensaciones</h2>
          <p>BiosNannyTech establece el imperativo de abstención jurídica e imparcialidad total frente a resoluciones civiles o penales externas que mantengan los garantes. Por ende, los reportes docentes, anotaciones psicopedagógicas y de personal se orientarán por y con un estricto orden de crecimiento formativo institucional y no obran para certificar en litigio o juicio de disputas, y el personal en su conjunto no estará vinculado ni es susceptible a someter declaraciones frente a magistratura a la sazón de disputas entre tutores o relativos familiares salvo imposición dictaminada por órdenes judiciales.</p>
          <p>El Tutor acuerda defender, indemnizar a fondo y acatar los costos para dejar a salvaguarda íntegra de multas u honorarios y sanciones a BiosNannyTech derivado del mal uso tecnológico o ruptura de obligaciones listadas.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
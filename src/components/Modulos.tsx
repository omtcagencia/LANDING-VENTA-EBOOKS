import { useState } from "react";
import { BookOpen } from "lucide-react";
import ModuleCard from "./ModuleCard";

export default function Modulos() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const modules = [
    {
      num: "01",
      name: "PORTAFOLIO Y MARCA PERSONAL",
      description: "Aprende a construir una identidad profesional sólida y magnética.",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80",
      details: [
        "Selección y curaduría de tus mejores fotos (The Selection Rule)",
        "Creación de tu comp card física y digital homologada",
        "Estrategia de branding en Instagram y TikTok para llamar la atención de scouts",
        "Cómo redactar tu biografía profesional y datos de contacto de forma comercial",
      ],
    },
    {
      num: "02",
      name: "EXPRESIÓN Y EMOCIÓN",
      description: "Domina la comunicación emocional sutil frente al objetivo táctico.",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
      details: [
        "El micro-gesto facial: de neutro a dramático sin sobreactuar",
        "La técnica 'Smize' (sonreír con la mirada) perfeccionada",
        "Expresión ocular: cómo contar una historia y conectar con el lente de inmediato",
        "Evitar la cara vacía o inexpresiva en retratos tipo 'Headshot'",
      ],
    },
    {
      num: "03",
      name: "IMAGEN, CUERPO Y PRESENCIA",
      description: "Proyecta confianza, autoridad física y asertividad elegante.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
      details: [
        "Higiene postural: alineación y altura visual sin tensión",
        "Técnicas de pasarela básica (Runway Pivot & Balance)",
        "Control del eje de gravedad para giros y detenciones perfectas",
        "Proyección de energía: de la vulnerabilidad a la soberbia de alta costura",
      ],
    },
    {
      num: "04",
      name: "TIPOS DE MODELAJE Y ENFOQUE",
      description: "Encuentra tu especialidad ideal dentro del mercado global actual.",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80",
      details: [
        "Editoriales de alta costura vs. Campañas Comerciales masivas",
        "Modelaje de partes (manos, cabello, calzado) y nichos rentables",
        "El fenómeno 'Fitness' y 'Alternative' en la actualidad",
        "Cómo enfocarte en tu fisionomía para maximizar contratos en tu región",
      ],
    },
    {
      num: "05",
      name: "FOTOGRAFÍA Y LECTURA DE CÁMARA",
      description: "Entiende cómo trabajar e interpretar las directrices de los fotógrafos.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80",
      details: [
        "Entender la iluminación: luz dura, suave, contraluz y reflectores",
        "Cómo encontrar los ángulos según la dirección de la luz",
        "Comunicación activa y códigos universales en un 'set' profesional",
        "Lectura espacial: saber en qué parte de la composición te encuentras",
      ],
    },
    {
      num: "06",
      name: "POSADO Y CONTROL CORPORAL",
      description: "Domina tu lenguaje corporal milimétrico y expande tus rangos.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
      details: [
        "Coordinación de extremidades para crear líneas geométricas estables",
        "La teoría de los vacíos: uso de la silueta y espacios negativos",
        "Movimiento fluido y transiciones en ráfagas de obturador",
        "Evitar la rigidez en manos y hombros durante poses forzadas",
      ],
    },
    {
      num: "07",
      name: "TÉCNICAS DE POSADO BASE",
      description: "Las poses esenciales para destacar en editoriales y catálogos.",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=600&q=80",
      details: [
        "El posado en tres cuartos para estilizar siluetas",
        "Poses sentada en cubos de estudio y superficies minimalistas",
        "Uso de prendas de vestir como elementos de juego dinámico (chaquetas, bolsos)",
        "Posado de espaldas con torsión: elegancia pura de pasarela",
      ],
    },
    {
      num: "08",
      name: "MENTALIDAD Y VALOR",
      description: "Desarrolla confianza profesional inquebrantable ante el rechazo.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
      details: [
        "Psicología del casting: vencer el síndrome del impostor",
        "Cómo recibir una negativa sin dudar de tu potencial real",
        "Auto-cuidado: la nutrición del carisma y descanso estético",
        "Crear una coraza mental inexpugnable para la industria pesada",
      ],
    },
    {
      num: "09",
      name: "¿QUÉ ES SER MODELO HOY?",
      description: "Comprende a fondo el funcionamiento y las reglas de la industria moderna.",
      image: "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?auto=format&fit=crop&w=600&q=80",
      details: [
        "La redefinición de estándares de belleza hacia la hiper-personalidad",
        "El impacto de Instagram, TikTok y la IA en la contratación",
        "Cómo contactar scouts directos sin intermediarios estafadores",
        "Diferencias críticas entre Agencias Madre e intermediarios de eventos",
      ],
    },
    {
      num: "10",
      name: "VOCABULARIO DEL MODELAJE",
      description: "Habla como una profesional experimentada desde el primer día.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      details: [
        "Jerga inglesa indispensable: TFP, Comp Card, Go-See, Polas, Calltime",
        "Glosario de iluminación: Beauty Dish, Softbox, Ring Light y sus usos",
        "Términos comerciales de derechos de imagen: 'Buyout' y 'Usage rights'",
        "Los perfiles técnicos del staff: Productor, MUA, Stylist y Director de Arte",
      ],
    },
  ];

  const toggleModule = (num: string) => {
    if (activeModule === num) {
      setActiveModule(null);
    } else {
      setActiveModule(num);
    }
  };

  return (
    <section id="contenido" className="relative py-20 md:py-28 bg-white min-h-screen border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20 text-left">
          <span className="text-gold-dark uppercase tracking-[0.25em] text-xxs font-bold mb-3 flex items-center">
            <BookOpen size={12} className="mr-1.5 text-gold-premium" /> PLAN DE DESARROLLO DE ÉLITE
          </span>
          <h2 className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] uppercase text-zinc-950">
            PLAN DE ESTUDIOS <span className="text-zinc-400">PRESENCIAL DIGITAL</span>
          </h2>
          <p className="font-sans text-xs text-zinc-500 uppercase tracking-widest mt-2 font-medium">
            SISTEMA ACADÉMICO MULTIMODULAR COMPLETO CON UN TOTAL DE 10 CAPÍTULOS
          </p>
          <div className="w-16 h-[2px] bg-gold-premium mt-4"></div>
        </div>

        {/* Responsive Grid with 10 modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {modules.map((item, index) => (
            <ModuleCard
              key={item.num}
              num={item.num}
              name={item.name}
              description={item.description}
              image={item.image}
              details={item.details}
              isOpen={activeModule === item.num}
              onToggle={() => toggleModule(item.num)}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

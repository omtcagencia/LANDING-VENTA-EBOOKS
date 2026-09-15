import { Gift, BookOpen, CheckSquare, Send } from "lucide-react";
import BonoCard from "./BonoCard";

export default function Bonos() {
  const bonuses = [
    {
      id: "bon-1",
      num: "01",
      icon: <BookOpen className="text-gold-premium" size={28} strokeWidth={1} />,
      title: "Guía de Poses para Instagram",
      value: "$37 USD",
      description:
        "Domina el algoritmo visual. El compendio definitivo de poses exprés, ángulos de cámara móvil y estéticas minimalistas ideales para feeds de redes sociales de modelos emergentes.",
      bullets: [
        "15 esquemas de poses rápidas de pie",
        "Configuración corporal para 'Café Aesthetic' shots",
        "Guía de expresión espontánea y mirada desenfadada",
      ],
    },
    {
      id: "bon-2",
      num: "02",
      icon: <CheckSquare className="text-gold-premium" size={28} strokeWidth={1} />,
      title: "Checklist de Portafolio",
      value: "$27 USD",
      description:
        "No pierdas tiempo con fotos inservibles. La lista de control estricta para auditar tu portafolio antes de enviarlo a un scout de nivel internacional.",
      bullets: [
        "Las 5 fotografías obligatorias que toda agencia busca",
        "Parámetros técnicos de luz e indumentaria para tus 'Polas'",
        "Secretos de exportación digital y formato de entrega formal",
      ],
    },
    {
      id: "bon-3",
      num: "03",
      icon: <Send className="text-gold-premium" size={28} strokeWidth={1} />,
      title: "Plantilla para Aplicar a Agencias",
      value: "$47 USD",
      description:
        "Elimina las dudas al escribir. Plantillas pre-redactadas en español e inglés técnico para enviar tu perfil a las agencias madre más prestigiosas.",
      bullets: [
        "Estructura formal de correo de postulación directa",
        "Cómo presentarte y detallar tus dimensiones corporales",
        "Qué adjuntar para evitar que descarten tu correo en 5 segundos",
      ],
    },
  ];

  return (
    <section id="bonos" className="relative py-20 md:py-28 bg-white overflow-hidden border-b border-zinc-200">
      {/* Background ambient light */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-gold-light/40 filter blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <span className="text-gold-dark uppercase tracking-[0.25em] text-xxs font-bold mb-3 inline-flex items-center">
            <Gift size={12} className="mr-1.5 text-gold-premium" /> RECOMPENSAS EXCLUSIVAS EXPANDIDAS
          </span>
          <h2 className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-zinc-950 leading-tight">
            ACCESORIOS <span className="gold-gradient-text">VIP ADICIONALES</span> GRATIS
          </h2>
          <p className="font-sans text-xs text-zinc-500 uppercase tracking-widest mt-2 font-medium">
            REGALOS INCLUIDOS EN TU ACCESO DIRECTO ESTA SEMANA
          </p>
          <div className="w-12 h-[2px] bg-gold-premium mx-auto mt-4"></div>
        </div>

        {/* 3 cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {bonuses.map((bonus, i) => (
            <BonoCard
              key={bonus.id}
              num={bonus.num}
              icon={bonus.icon}
              title={bonus.title}
              value={bonus.value}
              description={bonus.description}
              bullets={bonus.bullets}
              index={i}
            />
          ))}
        </div>

        {/* Total accumulation visual trigger */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block border border-gold-premium/40 bg-gold-light/40 px-6 sm:px-8 py-4 sm:py-5 shadow-sm">
            <p className="font-montserrat text-xs sm:text-sm font-black tracking-wider uppercase text-zinc-950">
              VALOR TOTAL DE LOS BONOS: <span className="text-zinc-500 line-through">$111 USD</span> 
              <span className="text-gold-dark ml-2">¡GRATIS HOY CON EL PACK!</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

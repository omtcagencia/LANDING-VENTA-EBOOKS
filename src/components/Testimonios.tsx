import { MessageSquare } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonios() {
  const testimonials = [
    {
      id: "test-1",
      name: "Valeria Santillán",
      profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      achievement: "Castings aprobados en 3 agencias",
      quote:
        "El Pack fue un punto de inflexión. No sabía cómo pararme frente a la cámara sin lucir incómoda. Integré la Guía de Poses en una sesión TFP y el fotógrafo quedó fascinado. Un mes después conseguí mi primera representación.",
      stars: 5,
    },
    {
      id: "test-2",
      name: "Lucía Villalobos",
      profile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
      achievement: "Campaña Comercial Internacional",
      quote:
        "La plantilla de postulación directa es oro puro. Envié mi correo redactado tal cual se indica en el módulo 10 a dos marcas independientes. Me invitaron directo a casting secundario y fui seleccionada.",
      stars: 5,
    },
    {
      id: "test-3",
      name: "Camila Arbeláez",
      profile: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=150&h=150&q=80",
      achievement: "Lanzamiento Marca Personal Instagram",
      quote:
        "Me sirvió mucho la Checklist de Portafolio. Limpié todas mis fotos viejas de Instagram del feed que daban un perfil amateur. Logré posicionarme mucho más pulida para que me tomen en serio en castings presenciales.",
      stars: 5,
    },
  ];

  return (
    <section id="testimonios" className="relative py-20 md:py-28 bg-zinc-50/70 overflow-hidden border-b border-zinc-200">
      {/* Editorial aesthetic watermark background text */}
      <div className="absolute left-0 bottom-24 select-none pointer-events-none opacity-[0.03] text-zinc-950 font-montserrat font-black text-8xl md:text-9xl tracking-[0.25em] whitespace-nowrap">
        ELITE RECOGNITION
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Headings */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20 text-left">
          <span className="text-gold-dark uppercase tracking-[0.25em] text-xxs font-bold mb-3 flex items-center">
            <MessageSquare size={12} className="mr-1.5 text-gold-premium" /> REPUTACIÓN INCUESTIONABLE
          </span>
          <h2 className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] uppercase text-zinc-950">
            RECONOCIMIENTO Y <br />
            <span className="gold-gradient-text">RESULTADOS REALES</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-premium mt-4"></div>
        </div>

        {/* 3 cards row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((test, i) => (
            <TestimonialCard
              key={test.id}
              id={test.id}
              name={test.name}
              profile={test.profile}
              achievement={test.achievement}
              quote={test.quote}
              stars={test.stars}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

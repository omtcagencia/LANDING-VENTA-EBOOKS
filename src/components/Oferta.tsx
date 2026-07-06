import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Check, Clock, ShieldCheck, Lock, ArrowRight } from "lucide-react";

export default function Oferta() {
  // Scarcity countdown details: 15 minutes
  const [timeLeft, setTimeLeft] = useState(900); // 15:00 mins in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 900; // Reset or stop (let's loop for continuous FOMO)
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const offerList = [
    "10 Ebooks de Desarrollo de Técnicas Avanzadas",
    "3 Bonos de Expansión VIP Gratis (Valor $111 USD)",
    "Acceso Inmediato de por vida a la base digital",
    "Descarga ilimitada compatible con Celular y Tablet",
    "Actualizaciones futuras de forma totalmente gratuita",
  ];

  const handleCheckoutClick = () => {
    window.open("https://pay.hotmart.com/R105897023Y", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="oferta" className="relative py-24 md:py-32 bg-[#0A0A0B] overflow-hidden border-t border-white/5">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-gold-premium/5 via-transparent to-transparent pointer-events-none filter blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Urgent Alert Banner */}
        <div className="max-w-xl mx-auto mb-10 text-center">
          <div className="inline-flex items-center space-x-2.5 bg-gold-premium/10 border border-gold-premium/25 px-5 py-2.5 text-gold-premium text-xxs font-bold uppercase tracking-[0.2em] rounded-none">
            <Clock size={12} className="animate-spin-slow text-gold-premium" />
            <span id="countdown-banner">OFERTA DE ESTRENO LIMITADA EN TIEMPO</span>
          </div>
        </div>

        {/* Section layout */}
        <div className="max-w-4xl mx-auto bg-black border border-white/8 relative overflow-hidden p-6 sm:p-12 md:p-16 glow-premium">
          
          {/* Internal background aesthetic */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-premium/[0.02] filter blur-3xl rounded-full" />
          
          <div className="relative z-10 text-center">
            
            {/* Title */}
            <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase text-white leading-tight mb-4">
              TODO LO QUE NECESITAS PARA <br />
              <span className="gold-gradient-text">DESARROLLAR TU IMAGEN</span> PROFESIONAL
            </h2>
            <div className="w-16 h-[2px] bg-gold-premium mx-auto mb-10"></div>

            {/* Layout divided in list and pricing */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
              
              {/* Left Column: value deliverables */}
              <div className="lg:col-span-7 space-y-5">
                <span className="text-zinc-500 text-xxs uppercase tracking-[0.25em] font-mono font-bold block mb-2">
                  EL CONTENIDO DEL ACCESO COMPLETO:
                </span>
                
                {offerList.map((item) => (
                  <div key={item} className="flex items-start space-x-3.5">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-premium/15 flex items-center justify-center border border-gold-premium/30 mt-0.5">
                      <Check className="text-gold-premium" size={11} strokeWidth={3} />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-zinc-300 font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Column: checkout pricing trigger */}
              <div className="lg:col-span-5 bg-zinc-950 border border-white/5 p-8 text-center relative">
                
                {/* Visual discount tags */}
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-sm">
                  DESCUENTO -90%
                </span>

                <div className="mt-2 text-zinc-500 text-xxs uppercase tracking-widest font-mono">
                  PRECIO HABITUAL
                </div>
                
                {/* Crossed original price */}
                <div className="text-xl text-zinc-400 line-through font-montserrat font-black opacity-60 tracking-wider">
                  197 USD
                </div>

                <div className="mt-4 text-[#D4AF37] text-xxs uppercase tracking-[0.3em] font-bold">
                  PRECIO DE OFERTA EXCLUSIVO
                </div>

                {/* Offer Price Highlight */}
                <div className="font-montserrat text-5xl sm:text-6xl font-black text-white uppercase tracking-tight mt-1 mb-1 relative inline-block">
                  <span className="text-gold-premium">$</span>20 <span className="text-xs text-zinc-400 uppercase tracking-widest">USD</span>
                </div>

                <p className="text-xxs text-zinc-500 uppercase tracking-widest leading-relaxed mb-6 font-mono">
                  Pago Único • Sin Mensualidades
                </p>

                {/* Scarcity countdown timer */}
                <div className="bg-black/80 border border-white/5 py-2 px-4 inline-flex items-center space-x-2.5 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xxs font-mono uppercase tracking-widest text-zinc-400">El precio sube en:</span>
                  <span className="text-xs font-mono font-bold text-[#F4D35E]">{formatTime(timeLeft)}</span>
                </div>

                {/* Massive Buy CTA Button with interactive shimmer */}
                <button
                  id="checkout-trigger-cta"
                  onClick={handleCheckoutClick}
                  className="w-full bg-gold-premium text-black font-montserrat text-xs font-black tracking-[0.2em] py-4.5 rounded-none uppercase cursor-pointer select-none relative overflow-hidden group hover:bg-[#F4D35E] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
                  QUIERO ACCEDER AHORA
                </button>

                {/* Small security notes */}
                <div className="mt-5 flex items-center justify-center space-x-2 text-zinc-500">
                  <Lock size={10} />
                  <span className="text-xxs tracking-widest uppercase font-mono">PAGO 100% ENCRIPTADO Y SEGURO</span>
                </div>
              </div>

            </div>

            {/* Standard Payment logo vectors */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xxs tracking-widest uppercase text-zinc-650 font-mono">
                MÉTODOS DE PAGO CONTINUOS:
              </span>
              
              <div className="flex items-center space-x-6 grayscale opacity-30 select-none">
                <span className="font-montserrat text-xxs font-black tracking-widest text-white">VISA</span>
                <span className="font-montserrat text-xxs font-black tracking-widest text-white">MASTERCARD</span>
                <span className="font-montserrat text-xxs font-black tracking-widest text-white font-serif">AMEX</span>
                <span className="font-montserrat text-xxs font-black tracking-widest text-white">PAYPAL</span>
                <span className="font-montserrat text-xxs font-black tracking-widest text-white">APPLE PAY</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

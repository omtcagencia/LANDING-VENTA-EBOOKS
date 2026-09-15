import { motion } from "motion/react";
import { Check, Clock, ShieldCheck, Lock, ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export default function Oferta() {
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
    <section id="oferta" className="relative py-20 md:py-28 bg-zinc-100/70 overflow-hidden border-t border-zinc-200">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-gold-light/40 via-transparent to-transparent pointer-events-none filter blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Urgent Alert Banner */}
        <div className="max-w-xl mx-auto mb-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gold-light border border-gold-premium/40 px-4 sm:px-5 py-2 text-gold-dark text-xxs font-bold uppercase tracking-[0.2em]">
            <Clock size={12} className="text-gold-dark animate-pulse" />
            <span id="countdown-banner">OFERTA DE ESTRENO LIMITADA EN TIEMPO • 24 HORAS</span>
          </div>
        </div>

        {/* Section layout */}
        <div className="max-w-4xl mx-auto bg-white border border-zinc-300 relative overflow-hidden p-6 sm:p-10 md:p-14 shadow-2xl">
          
          {/* Internal background aesthetic */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-light/30 filter blur-3xl rounded-full pointer-events-none" />
          
          <div className="relative z-10 text-center">
            
            {/* Title */}
            <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase text-zinc-950 leading-tight mb-3">
              TODO LO QUE NECESITAS PARA <br />
              <span className="gold-gradient-text">DESARROLLAR TU IMAGEN</span> PROFESIONAL
            </h2>
            <div className="w-16 h-[2px] bg-gold-premium mx-auto mb-6"></div>

            {/* Prominent 24-Hour Countdown Urgency Component */}
            <CountdownTimer variant="prominent" className="mb-8 sm:mb-10" />

            {/* Layout divided in list and pricing */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center text-left">
              
              {/* Left Column: value deliverables */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-zinc-500 text-xxs uppercase tracking-[0.25em] font-mono font-bold block mb-2">
                  EL CONTENIDO DEL ACCESO COMPLETO:
                </span>
                
                {offerList.map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-light flex items-center justify-center border border-gold-premium/50 mt-0.5 shadow-xs">
                      <Check className="text-gold-dark" size={11} strokeWidth={3} />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-zinc-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Column: checkout pricing trigger */}
              <div className="lg:col-span-5 bg-zinc-50 border border-zinc-200 p-6 sm:p-8 text-center relative shadow-sm">
                
                {/* Visual discount tags */}
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 shadow-xs">
                  DESCUENTO -90%
                </span>

                <div className="mt-2 text-zinc-500 text-xxs uppercase tracking-widest font-mono font-semibold">
                  PRECIO HABITUAL
                </div>
                
                {/* Crossed original price */}
                <div className="text-xl text-zinc-400 line-through font-montserrat font-bold opacity-75 tracking-wider">
                  197 USD
                </div>

                <div className="mt-3 text-gold-dark text-xxs uppercase tracking-[0.25em] font-black">
                  PRECIO DE OFERTA EXCLUSIVO
                </div>

                {/* Offer Price Highlight */}
                <div className="font-montserrat text-5xl sm:text-6xl font-black text-zinc-950 uppercase tracking-tight mt-1 mb-1 relative inline-block">
                  <span className="text-gold-dark">$</span>20 <span className="text-xs text-zinc-500 uppercase tracking-widest">USD</span>
                </div>

                <p className="text-xxs text-zinc-500 uppercase tracking-widest leading-relaxed mb-4 font-mono font-semibold">
                  Pago Único • Sin Mensualidades
                </p>

                {/* Scarcity 24-hour countdown timer */}
                <CountdownTimer variant="card" className="mb-5" />

                {/* Massive Buy CTA Button with interactive shimmer */}
                <button
                  id="checkout-trigger-cta"
                  onClick={handleCheckoutClick}
                  className="w-full bg-gold-dark hover:bg-gold-premium text-white font-montserrat text-xs font-black tracking-[0.2em] py-4 rounded-none uppercase cursor-pointer select-none relative overflow-hidden group shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
                  QUIERO ACCEDER AHORA
                </button>

                {/* Small security notes */}
                <div className="mt-4 flex items-center justify-center space-x-1.5 text-zinc-500">
                  <Lock size={11} className="text-zinc-500" />
                  <span className="text-xxs tracking-wider uppercase font-mono font-semibold">PAGO 100% ENCRIPTADO Y SEGURO</span>
                </div>
              </div>

            </div>

            {/* Standard Payment logo vectors */}
            <div className="mt-10 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xxs tracking-widest uppercase text-zinc-500 font-mono font-semibold">
                MÉTODOS DE PAGO CONTINUOS:
              </span>
              
              <div className="flex items-center space-x-4 sm:space-x-6 grayscale opacity-60 select-none font-montserrat text-xxs font-black tracking-widest text-zinc-600">
                <span>VISA</span>
                <span>MASTERCARD</span>
                <span className="font-serif font-bold">AMEX</span>
                <span>PAYPAL</span>
                <span>APPLE PAY</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

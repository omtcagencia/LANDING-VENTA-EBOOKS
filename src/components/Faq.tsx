import { useState } from "react";
import { HelpCircle } from "lucide-react";
import FaqAccordionItem from "./FaqAccordionItem";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Necesito experiencia?",
      answer:
        "No, en absoluto. Este pack digital está diseñado precisamente para guiarte desde cero. Aprenderás las bases anatómicas del posado, composición corporal técnica, alineación e higiene postural de forma progresiva, tal como lo enseñan los managers en agencias internacionales.",
    },
    {
      question: "¿Sirve para hombres y mujeres?",
      answer:
        "Sí. Aunque los lineamientos estéticos editoriales se inspiran en las grandes pasarelas, los conceptos técnicos de fisionomía, lectura de luces, proyección ante la cámara, lenguaje corporal geométrico, portafolio profesional y negociación comercial son 100% universales y válidos tanto para modelos masculinos como femeninos.",
    },
    {
      question: "¿Es descargable?",
      answer:
        "Sí. El 100% de los materiales, ebooks de desarrollo, guías de poses rápidas para Instagram y plantillas formales de envío de correos son descargables al instante. Podrás guardarlos directamente en tus dispositivos para consultarlos sin internet en cualquier set.",
    },
    {
      question: "¿Acceso de por vida?",
      answer:
        "Completamente de por vida. Con tu único pago de oferta de $20 USD, adquieres derechos de acceso permanente. Podrás descargar los archivos las veces que lo necesites y recibirás acceso libre a todas las optimizaciones y ampliaciones futuras gratuitas.",
    },
    {
      question: "¿Puedo verlo desde celular?",
      answer:
        "Sí, está optimizado en formato responsive PDF-Chic de alta resolución, ideal para teléfonos inteligentes, tablets y computadoras. Es sumamente cómodo para abrirlo rápidamente a mitad de una sesión y verificar un esquema de pose o un ángulo de luz sugerido.",
    },
  ];

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-zinc-50/70 overflow-hidden border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-gold-dark uppercase tracking-[0.25em] text-xxs font-bold mb-3 inline-flex items-center">
            <HelpCircle size={12} className="mr-1.5 text-gold-premium" /> RESOLUCIÓN DE DUDAS
          </span>
          <h2 className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-zinc-950 leading-tight">
            PREGUNTAS <span className="gold-gradient-text">FRECUENTES</span>
          </h2>
          <p className="font-sans text-xs text-zinc-500 uppercase tracking-widest mt-2 font-medium">
            RESPUESTAS CLARAS PARA EMPEZAR HOY MISMO
          </p>
          <div className="w-12 h-[2px] bg-gold-premium mx-auto mt-4"></div>
        </div>

        {/* Accordions */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <FaqAccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFaq(index)}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

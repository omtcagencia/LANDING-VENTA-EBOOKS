import { useState, useEffect } from "react";
import { Clock, Flame } from "lucide-react";

// Session timestamp resets every time the user enters / opens the page
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000;
const sessionStartTime = Date.now();

export function useCountdown24h() {
  const calculateRemaining = () => {
    const elapsed = Date.now() - sessionStartTime;
    const remainingMs = SESSION_DURATION_MS - (elapsed % SESSION_DURATION_MS);
    return Math.max(0, Math.floor(remainingMs / 1000));
  };

  const [timeLeft, setTimeLeft] = useState<number>(calculateRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return {
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
    totalSeconds: timeLeft,
  };
}

interface CountdownTimerProps {
  className?: string;
  variant?: "prominent" | "card";
}

export default function CountdownTimer({ className = "", variant = "card" }: CountdownTimerProps) {
  const { hours, minutes, seconds } = useCountdown24h();

  if (variant === "prominent") {
    return (
      <div
        id="oferta-countdown-prominent"
        className={`w-full bg-white border-2 border-gold-premium/60 p-5 sm:p-7 text-center relative overflow-hidden shadow-lg ${className}`}
      >
        {/* Subtle decorative gold blur behind */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 bg-gold-light/60 blur-2xl pointer-events-none rounded-full" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 px-3.5 py-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <Flame size={13} className="text-red-600" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.18em] text-red-700 uppercase">
              OFERTA POR TIEMPO LIMITADO: 24 HORAS
            </span>
          </div>

          <p className="text-zinc-700 text-xs sm:text-sm font-sans tracking-wide mb-4 max-w-lg font-medium">
            El precio promocional de <strong className="text-gold-dark font-black">$20 USD</strong> y los 3 bonos exclusivos expiran al finalizar el contador:
          </p>

          {/* Time digits grid */}
          <div className="flex items-center justify-center space-x-2.5 sm:space-x-4">
            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="w-13 sm:w-16 h-13 sm:h-16 bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-md">
                <span className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                  {hours}
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-zinc-600 font-bold uppercase mt-2">
                HORAS
              </span>
            </div>

            <span className="font-montserrat text-2xl sm:text-3xl font-bold text-gold-dark -mt-6 animate-pulse">
              :
            </span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="w-13 sm:w-16 h-13 sm:h-16 bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-md">
                <span className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                  {minutes}
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-zinc-600 font-bold uppercase mt-2">
                MINUTOS
              </span>
            </div>

            <span className="font-montserrat text-2xl sm:text-3xl font-bold text-gold-dark -mt-6 animate-pulse">
              :
            </span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="w-13 sm:w-16 h-13 sm:h-16 bg-zinc-950 border border-gold-premium flex items-center justify-center shadow-md">
                <span className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-black text-gold-light tracking-tight">
                  {seconds}
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-gold-dark font-bold uppercase mt-2">
                SEGUNDOS
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default 'card' variant: tightly integrated inside the checkout column
  return (
    <div
      id="oferta-countdown-timer"
      className={`w-full bg-white border border-zinc-200 p-3 sm:p-3.5 text-center relative overflow-hidden shadow-xs ${className}`}
    >
      {/* Top indicator */}
      <div className="flex items-center justify-center space-x-1.5 mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
        <Clock size={11} className="text-gold-dark" />
        <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.15em] text-zinc-700 uppercase">
          EL PRECIO SUBE EN:
        </span>
      </div>

      {/* Digits row */}
      <div className="flex items-center justify-center space-x-2 sm:space-x-2.5">
        {/* Hours block */}
        <div className="flex flex-col items-center">
          <div className="w-11 sm:w-12 h-10 sm:h-11 bg-zinc-100 border border-zinc-300 flex items-center justify-center">
            <span className="font-montserrat text-base sm:text-lg font-black text-zinc-950">
              {hours}
            </span>
          </div>
          <span className="text-[8px] font-mono tracking-wider text-zinc-500 uppercase mt-0.5 font-bold">
            HORAS
          </span>
        </div>

        <span className="font-montserrat text-base sm:text-lg font-bold text-gold-dark -mt-3 animate-pulse">
          :
        </span>

        {/* Minutes block */}
        <div className="flex flex-col items-center">
          <div className="w-11 sm:w-12 h-10 sm:h-11 bg-zinc-100 border border-zinc-300 flex items-center justify-center">
            <span className="font-montserrat text-base sm:text-lg font-black text-zinc-950">
              {minutes}
            </span>
          </div>
          <span className="text-[8px] font-mono tracking-wider text-zinc-500 uppercase mt-0.5 font-bold">
            MIN
          </span>
        </div>

        <span className="font-montserrat text-base sm:text-lg font-bold text-gold-dark -mt-3 animate-pulse">
          :
        </span>

        {/* Seconds block */}
        <div className="flex flex-col items-center">
          <div className="w-11 sm:w-12 h-10 sm:h-11 bg-zinc-900 border border-gold-premium/60 flex items-center justify-center">
            <span className="font-montserrat text-base sm:text-lg font-black text-gold-light">
              {seconds}
            </span>
          </div>
          <span className="text-[8px] font-mono tracking-wider text-gold-dark uppercase mt-0.5 font-bold">
            SEG
          </span>
        </div>
      </div>
    </div>
  );
}

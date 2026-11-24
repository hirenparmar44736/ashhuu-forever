import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Calendar, Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

export const Countdown: React.FC = () => {
  // Target: 24 February 2027 00:00:00
  const targetDate = new Date('2027-02-24T00:00:00');

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPassed: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#FDFCF7] via-[#FAF7EE] to-[#FBE8E7]/40">
      {/* Decorative floral/geometric borders */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Header badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#5B1E29] text-xs uppercase tracking-[0.25em] font-medium shadow-sm mb-6"
        >
          <Calendar className="w-3.5 h-3.5 text-[#AA820A]" />
          <span>Save The Dates — 24 & 25 February 2027</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3D121A] font-normal tracking-tight mb-4"
        >
          Counting Every Beat Until <span className="font-script text-5xl sm:text-6xl text-[#9B4450]">Forever</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-neutral-600 max-w-xl mx-auto text-base sm:text-lg font-light italic mb-12"
        >
          "Our wedding celebration begins on 24 February 2027. Counting every day, hour, and minute until I hold your hand as my wife."
        </motion.p>

        {timeLeft.isPassed ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#5B1E29] text-[#FAF7EE] shadow-2xl border border-[#D4AF37]/40"
          >
            <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto mb-4 animate-spin" />
            <h3 className="font-serif text-3xl sm:text-4xl mb-2">Our Wedding Day Is Here!</h3>
            <p className="font-script text-4xl text-[#FBE8E7]">Happy Married Life, Ashhuu & Hiren ❤️</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {timeUnits.map((unit, idx) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="relative group"
              >
                <div className="relative p-6 sm:p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-[#D4AF37]/25 shadow-lg group-hover:border-[#D4AF37] group-hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#5B1E29] mb-2 tracking-tight">
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] font-medium text-[#8A6D3B]">
                    {unit.label}
                  </div>
                  
                  {/* Subtle inner corner accent */}
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37]" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Celebratory date pill */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-neutral-600 text-sm"
        >
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#9B4450] fill-[#9B4450]" />
            <span className="font-serif text-base text-[#5B1E29] font-medium">Grand Celebrations:</span>
          </div>
          <span className="px-3 py-1 rounded-md bg-[#FAF7EE] border border-[#ECE3C6] font-medium text-[#3D121A]">
            Day 1: 24 February 2027
          </span>
          <span className="hidden sm:inline text-neutral-400">&amp;</span>
          <span className="px-3 py-1 rounded-md bg-[#FAF7EE] border border-[#ECE3C6] font-medium text-[#3D121A]">
            Day 2: 25 February 2027
          </span>
        </motion.div>

      </div>
    </section>
  );
};

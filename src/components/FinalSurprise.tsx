import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Crown, Stars } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FinalSurprise: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  const lines = [
    "Some people make life beautiful just by being in it.",
    "Ashhuu, you are one of those people.",
    "You are my favourite person, my happiness and my forever.",
    "Here's to every tomorrow, every dream and every beautiful memory waiting for us.",
    "Love you forever, my Janudii. ❤️"
  ];

  const handleReveal = () => {
    setRevealed(true);
    // Big cinematic confetti shower
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#D4AF37', '#FBE8E7', '#9B4450', '#FAF7EE']
    });
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#D4AF37', '#9B4450']
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#D4AF37', '#9B4450']
      });
    }, 400);
  };

  return (
    <section id="final-surprise" className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#281219] via-[#1B0B10] to-[#12050A] text-[#FAF7EE] relative overflow-hidden">
      {/* Background Starry Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5B1E29]/30 rounded-full blur-3xl animate-pulse" />
        <div className="vintage-grain absolute inset-0 opacity-10" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#3D121A]/80 border border-[#D4AF37]/40 text-xs font-editorial uppercase tracking-[0.3em] text-[#D4AF37] mb-8 shadow-lg"
        >
          <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>The Final Whisper — Our Forever</span>
          <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
        </motion.div>

        {!revealed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 sm:p-14 rounded-3xl bg-[#281219]/90 border border-[#D4AF37]/30 shadow-2xl backdrop-blur-xl"
          >
            <h3 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-4">
              A Special Message Awaits, Ashhuu
            </h3>
            <p className="text-neutral-400 font-serif italic text-base sm:text-lg mb-8 max-w-lg mx-auto">
              "Touch the golden seal below to reveal what you truly mean to my life."
            </p>

            <motion.button
              onClick={handleReveal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E8D49E] to-[#AA820A] text-[#1B0B10] font-semibold text-sm tracking-widest uppercase shadow-xl shadow-[#D4AF37]/20 flex items-center gap-3 mx-auto group cursor-pointer"
            >
              <Heart className="w-5 h-5 text-[#5B1E29] fill-[#5B1E29] group-hover:scale-125 transition-transform" />
              <span>Reveal The Secret</span>
              <Sparkles className="w-5 h-5 text-[#5B1E29]" />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Cinematic Lines Revealed */}
            <div className="space-y-6 max-w-2xl mx-auto px-4">
              {lines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.7, duration: 0.8 }}
                  className="relative"
                >
                  <p className={`font-serif tracking-wide leading-relaxed ${
                    idx === lines.length - 1
                      ? 'text-3xl sm:text-4xl text-[#E8D49E] font-medium pt-4'
                      : idx === 1
                      ? 'text-2xl sm:text-3xl text-white font-medium italic'
                      : 'text-xl sm:text-2xl text-neutral-300 font-light'
                  }`}>
                    {line}
                  </p>
                </motion.div>
              ))}

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: lines.length * 0.7 + 0.3, duration: 0.8 }}
                className="pt-6"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="h-px w-12 bg-[#D4AF37]/50" />
                  <span className="font-script text-4xl sm:text-5xl text-[#D4AF37]">— Hiren</span>
                  <span className="h-px w-12 bg-[#D4AF37]/50" />
                </div>
              </motion.div>
            </div>

            {/* Breathtaking Romantic Couple Frame */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: lines.length * 0.7 + 0.6, duration: 1 }}
              className="relative max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20 group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={`${import.meta.env.BASE_URL}photos/6.jpeg`}
                  alt="Ashhuu and Hiren Forever"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#1B0B10] via-transparent to-transparent flex flex-col justify-end p-6 text-center">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-editorial mb-1">
                  Together Into Eternity
                </span>
                <p className="font-script text-3xl text-white">
                  Ashhuu &amp; Hiren ❤️
                </p>
              </div>
            </motion.div>

            {/* Final blessing */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: lines.length * 0.7 + 1.2 }}
              className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-editorial pt-6"
            >
              Always &amp; Forever • 2026 — Eternity
            </motion.p>
          </motion.div>
        )}

      </div>
    </section>
  );
};

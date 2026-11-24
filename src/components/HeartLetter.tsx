import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, Feather, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export const HeartLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#FBE8E7', '#9B4450']
      });
    }
  };

  return (
    <section id="heart-letter" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF7EE] to-[#FDFCF7] relative overflow-hidden">
      {/* Background accents */}
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D4AF37]/35 text-xs font-editorial uppercase tracking-[0.25em] text-[#5B1E29] mb-4 shadow-sm"
          >
            <Feather className="w-3.5 h-3.5 text-[#AA820A]" />
            <span>Words From The Soul</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3D121A] font-normal tracking-tight"
          >
            A Little Letter <span className="font-script text-5xl sm:text-6xl text-[#9B4450]">From My Heart</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-neutral-600 text-sm sm:text-base font-light italic"
          >
            "Click on the wax seal below to unfold my deepest feelings for you."
          </motion.p>
        </div>

        {/* Envelope / Letter Interactive Experience */}
        <div className="relative flex flex-col items-center">
          
          {/* Animated Wax Seal Envelope Toggle */}
          <motion.button
            onClick={handleOpenLetter}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-5 rounded-3xl bg-gradient-to-r from-[#5B1E29] via-[#7B2838] to-[#5B1E29] text-[#FAF7EE] shadow-2xl border-2 border-[#D4AF37]/50 flex items-center gap-4 cursor-pointer group mb-10 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform">
              <Mail className="w-6 h-6 text-[#3D121A]" />
            </div>

            <div className="text-left">
              <span className="text-[10px] uppercase tracking-widest text-[#E8D49E] block font-semibold">
                Personal &amp; Confidential
              </span>
              <span className="font-serif text-lg sm:text-xl font-medium tracking-wide">
                {isOpen ? 'Fold The Letter' : 'Read My Letter, Ashhuu'}
              </span>
            </div>

            <Sparkles className="w-5 h-5 text-[#D4AF37] ml-2 animate-pulse" />
          </motion.button>

          {/* Unfolded Letter Parchment */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-3xl rounded-3xl p-8 sm:p-14 bg-[#FCFBF7] border-2 border-[#D4AF37]/30 shadow-2xl relative overflow-hidden"
              >
                {/* Vintage Letterhead Trim */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#AA820A] via-[#D4AF37] to-[#8A6D3B]" />
                <div className="vintage-grain absolute inset-0 opacity-15 pointer-events-none" />

                {/* Romantic Watermark */}
                <div className="absolute right-6 bottom-8 pointer-events-none opacity-5">
                  <Heart className="w-72 h-72 text-[#5B1E29]" />
                </div>

                {/* Letter Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#ECE3C6] pb-6 mb-8 gap-2">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#5B1E29] font-medium">
                      My Dearest Ashhuu,
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#AA820A] mt-1 font-editorial">
                      To the love of my life
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-neutral-400 font-serif italic">
                      Written with every beat of my heart
                    </span>
                  </div>
                </div>

                {/* Letter Body - Exact Prompt Content */}
                <div className="space-y-6 text-neutral-800 font-serif text-lg sm:text-xl leading-relaxed tracking-wide">
                  <p>
                    Pehle hi dil mein feeling aa gayi thi ki humari jodi zaroor jamegi. Phir baatein shuru hui, video calls shuru hui... aur pata hi nahi chala ki kab ye liking pyaar mein badal gayi.
                  </p>

                  <p>
                    Kabhi-kabhi mujhe lagta hai ki hum dono soulmates hain. Bhagwan ne bhi humein itne saare hints diye hain. Itni jaldi hum ek-dusre ke close aa gaye, jaise pehle se hi ek-dusre ko jaante hon. Humari vibes match hui aur sab kuch itna naturally perfect lagne laga.
                  </p>

                  <p>
                    Mujhe tumhara care karna, meri chhoti-chhoti baaton ki fikr karna, tumhari smile, tumhare nakhre aur tumhara pyaar bahut pasand hai.
                  </p>

                  <p>
                    Mujhe tumhare saath zindagi bitani hai. Har situation mein ek-dusre ka saath dena, milkar ghar sambhalna, saath ghoomna, khana aur chhoti-chhoti khushiyan celebrate karna.
                  </p>

                  <p>
                    Main chahta hoon ki hum dono apne-apne dreams poore karein aur ek-dusre ke sapno ki taakat banein. Ek din humari apni chhoti si family ho — ek princess aur ek little champ.
                  </p>

                  <p>
                    Bike, car aur ghar toh humare paas hain... ab bas un sab mein saath bitayi hui khoobsurat yaadein jodni hain.
                  </p>

                  <p>
                    I want to grow with you, laugh with you, travel with you and stand beside you through every chapter of life.
                  </p>

                  <p className="text-[#5B1E29] font-semibold">
                    Ashhuu, I promise to love you forever.
                  </p>
                </div>

                {/* Letter Sign-off */}
                <div className="mt-12 pt-8 border-t border-[#ECE3C6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-script text-3xl sm:text-4xl text-[#9B4450]">
                      Forever yours,
                    </p>
                    <p className="font-serif text-2xl text-[#3D121A] font-semibold tracking-wide">
                      Hiren ❤️
                    </p>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/30 flex items-center gap-2 text-xs text-[#8A6D3B]">
                    <Check className="w-4 h-4 text-[#AA820A]" />
                    <span>Sealed with lifelong loyalty</span>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

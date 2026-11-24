import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';
import { nicknames } from '../data/content';

export const Nicknames: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7EE] relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D4AF37]/35 text-xs font-editorial uppercase tracking-[0.25em] text-[#5B1E29] mb-4 shadow-sm"
        >
          <Heart className="w-3.5 h-3.5 text-[#9B4450] fill-[#9B4450]" />
          <span>Whispers of Affection</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl text-[#3D121A] font-normal tracking-tight mb-4"
        >
          Our Special <span className="font-script text-4xl sm:text-6xl text-[#9B4450]">Nicknames</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-neutral-600 max-w-xl mx-auto text-sm sm:text-base font-light italic mb-12"
        >
          "The sweetest names that Hiren calls his Ashlesha with all his heart."
        </motion.p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nicknames.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#FBE8E7] rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              <div className="relative z-10">
                <Star className="w-4 h-4 text-[#D4AF37] mb-3 group-hover:rotate-45 transition-transform" />
                <h3 className="font-script text-4xl text-[#5B1E29] mb-2 font-semibold">
                  {item.name}
                </h3>
                <p className="text-xs text-neutral-600 font-serif italic leading-relaxed">
                  "{item.meaning}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-center gap-1 text-[11px] text-[#AA820A] uppercase tracking-wider font-editorial">
                <Sparkles className="w-3 h-3" />
                <span>Called with pure love</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

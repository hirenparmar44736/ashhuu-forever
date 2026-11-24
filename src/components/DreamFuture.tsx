import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Home, Plane, Coffee, TrendingUp, Baby, Car, Mountain, Sparkles } from 'lucide-react';
import { dreamGoals } from '../data/content';

const iconLookup: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#AA820A]" />,
  Home: <Home className="w-6 h-6 text-[#AA820A]" />,
  Plane: <Plane className="w-6 h-6 text-[#AA820A]" />,
  Coffee: <Coffee className="w-6 h-6 text-[#AA820A]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#AA820A]" />,
  Baby: <Baby className="w-6 h-6 text-[#AA820A]" />,
  Car: <Car className="w-6 h-6 text-[#AA820A]" />,
};

export const DreamFuture: React.FC = () => {
  return (
    <section id="dreams" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FDFCF7] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/35 text-xs font-editorial uppercase tracking-[0.25em] text-[#5B1E29] mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#AA820A]" />
            <span>Our Shared Horizon</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3D121A] font-normal tracking-tight"
          >
            Our Dream <span className="font-script text-5xl sm:text-6xl text-[#9B4450]">Future</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-neutral-600 text-base sm:text-lg font-light italic"
          >
            "A lifetime of togetherness, adventures, laughter and dreams built side by side."
          </motion.p>
        </div>

        {/* Featured First Dream Trip Spotlight: DARJEELING */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 bg-gradient-to-r from-[#281219] via-[#4A1722] to-[#281219] text-[#FAF7EE] p-8 sm:p-12"
        >
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B0B10] border border-[#D4AF37]/40 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-4">
                <Mountain className="w-3.5 h-3.5" />
                <span>Our First Dream Destination</span>
              </div>
              
              <h3 className="font-serif text-3xl sm:text-5xl text-white font-medium mb-4 tracking-wide">
                DARJEELING <span className="text-3xl">🏔️</span>
              </h3>

              <p className="font-serif text-lg sm:text-xl text-[#ECE3C6] italic leading-relaxed">
                "One day, mountains, beautiful views, chai and endless memories — together."
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs tracking-wider text-[#D4AF37] font-editorial uppercase">
                <span className="px-3 py-1 rounded-lg bg-black/30 border border-[#D4AF37]/20">Misty Hills</span>
                <span className="px-3 py-1 rounded-lg bg-black/30 border border-[#D4AF37]/20">Steaming Chai</span>
                <span className="px-3 py-1 rounded-lg bg-black/30 border border-[#D4AF37]/20">Endless Conversations</span>
              </div>
            </div>

            {/* Aesthetic Mini Preview Card */}
            <div className="w-full md:w-80 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-xl bg-white/5 backdrop-blur-md p-4 flex flex-col items-center text-center">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 relative">
                <img 
                  src={`${import.meta.env.BASE_URL}photos/2.jpeg`} 
                  alt="Couple warmth" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="font-script text-2xl text-[#FAF7EE]">Darjeeling Awaits Us</span>
                </div>
              </div>
              <p className="text-xs text-[#ECE3C6]/70 italic">
                Hand in hand, watching sunrise over Kanchenjunga.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 7 Core Dream Aspirations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dreamGoals.map((goal, idx) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-[#D4AF37]/20 shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF7EE] border border-[#ECE3C6] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#FBE8E7] transition-all">
                  {iconLookup[goal.icon] || <Sparkles className="w-6 h-6 text-[#AA820A]" />}
                </div>

                <h4 className="font-serif text-xl text-[#3D121A] font-medium mb-2 group-hover:text-[#9B4450] transition-colors">
                  {goal.title}
                </h4>

                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  {goal.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-[#AA820A]">
                <span className="font-editorial tracking-widest uppercase text-[10px]">Forever Promise</span>
                <span className="font-script text-lg text-[#5B1E29]">H &amp; A</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

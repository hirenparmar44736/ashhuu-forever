import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToTimeline = () => {
    const el = document.getElementById('our-story');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FDFCF7]">
      {/* Background delicate artistic graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#FBE8E7]/60 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#FAF7EE] blur-3xl border border-[#D4AF37]/20" />
        <div className="vintage-grain absolute inset-0 opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Curated Pre-title Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FAF7EE]/90 border border-[#D4AF37]/35 shadow-sm mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#AA820A]" />
          <span className="font-editorial text-xs sm:text-sm tracking-[0.3em] uppercase text-[#5B1E29] font-medium">
            A Love Story Written in The Stars
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#AA820A]" />
        </motion.div>

        {/* Cinematic Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mb-6"
        >
          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl text-[#3D121A] tracking-wider font-light">
            ASHHUU
          </h1>
          <span className="font-script text-4xl sm:text-6xl text-[#9B4450] absolute -bottom-4 right-2 sm:right-6 md:right-12 select-none">
            &amp; Hiren
          </span>
        </motion.div>

        {/* Romantic Quotation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mt-6 space-y-4"
        >
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#5B1E29] italic font-normal leading-relaxed">
            "Every love story is special, but ours is my favourite."
          </p>
          <p className="text-neutral-600 text-sm sm:text-base tracking-widest uppercase font-light">
            Made with love, just for you.
          </p>
          <div className="flex items-center justify-center gap-2 pt-2">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="font-script text-2xl text-[#AA820A]">— Hiren ❤️</span>
            <span className="h-px w-8 bg-[#D4AF37]" />
          </div>
        </motion.div>

        {/* Editorial Photo Trio Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6 }}
          className="mt-12 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 items-center px-4"
        >
          {/* Left Photo - Ashlesha */}
          <div className="relative group rounded-2xl overflow-hidden shadow-xl aspect-[3/4] border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src={`${import.meta.env.BASE_URL}photos/11.jpeg`} 
              alt="Ashlesha" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white font-script text-2xl">My Janudii</p>
            </div>
          </div>

          {/* Center Main Couple Photo */}
          <div className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] border-4 border-[#D4AF37] sm:scale-110 z-10 hover:scale-[1.12] transition-transform duration-500">
            <img 
              src={`${import.meta.env.BASE_URL}photos/1.jpeg`} 
              alt="Ashlesha and Hiren Together" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D121A]/70 via-transparent to-transparent opacity-80 flex flex-col justify-end p-5 text-left">
              <span className="text-[#E8D49E] text-[10px] tracking-widest uppercase font-semibold">Our Eternal Bond</span>
              <p className="text-white font-serif text-lg font-medium">Ashhuu &amp; Hiren</p>
            </div>
          </div>

          {/* Right Photo - Hiren / Outing moment */}
          <div className="relative group rounded-2xl overflow-hidden shadow-xl aspect-[3/4] border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src={`${import.meta.env.BASE_URL}photos/3.jpeg`} 
              alt="Special Moment" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white font-script text-2xl">Pure Happiness</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14 cursor-pointer flex flex-col items-center gap-2 group"
          onClick={scrollToTimeline}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#8A6D3B] group-hover:text-[#5B1E29] transition-colors">
            Explore Our Chapter
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-[#AA820A]" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircleHeart, Video, HeartHandshake, Compass, Calendar } from 'lucide-react';
import { milestones } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-[#AA820A]" />,
  MessageCircleHeart: <MessageCircleHeart className="w-5 h-5 text-[#AA820A]" />,
  Video: <Video className="w-5 h-5 text-[#AA820A]" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#AA820A]" />,
  Compass: <Compass className="w-5 h-5 text-[#AA820A]" />,
};

export const Timeline: React.FC = () => {
  return (
    <section id="our-story" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7EE] relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#D4AF37]/30 text-xs font-editorial uppercase tracking-[0.25em] text-[#5B1E29] mb-4 shadow-sm"
          >
            <span>Chapter By Chapter</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3D121A] font-normal tracking-tight"
          >
            Our Love Story — <span className="font-script text-5xl sm:text-6xl text-[#9B4450]">Timeline</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-neutral-600 text-base sm:text-lg font-light italic"
          >
            "Five sacred milestones that sealed our bond forever."
          </motion.p>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical gold center line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/60 to-[#D4AF37]/10" />

          {/* Left gold line (mobile) */}
          <div className="block md:hidden absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/60 to-[#D4AF37]/10" />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={milestone.date}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 * idx }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#D4AF37] shadow-md flex items-center justify-center">
                      {iconMap[milestone.iconName] || <Calendar className="w-5 h-5 text-[#AA820A]" />}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-14' : 'md:pl-14'}`}>
                    <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      
                      {/* Date Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3.5 py-1 rounded-full bg-[#FBE8E7] text-[#5B1E29] text-xs font-medium tracking-wider uppercase font-editorial border border-[#DDA7A5]/40">
                          {milestone.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#3D121A] font-medium mb-3 group-hover:text-[#9B4450] transition-colors">
                        {milestone.title}
                      </h3>

                      {/* Main Hindi quote */}
                      <p className="text-neutral-800 font-serif text-base sm:text-lg italic leading-relaxed mb-4">
                        "{milestone.hindiQuote}"
                      </p>

                      {/* English poetic note */}
                      <p className="text-xs sm:text-sm text-[#8A6D3B] tracking-wide font-light border-t border-[#FAF7EE] pt-3">
                        {milestone.englishSub}
                      </p>

                      {/* Milestone Photo Preview if available */}
                      {milestone.image && (
                        <div className="mt-5 rounded-xl overflow-hidden border border-[#D4AF37]/30 max-h-48 shadow-inner">
                          <img 
                            src={`${import.meta.env.BASE_URL}${milestone.image.replace(/^\//, '')}`} 
                            alt={milestone.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty Spacer column for desktop balance */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

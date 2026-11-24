import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Heart, Maximize2, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryPhotos, PhotoItem } from '../data/content';

type CategoryFilter = 'all' | 'together' | 'ashlesha' | 'hiren' | 'special';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = activeFilter === 'all' 
    ? galleryPhotos 
    : galleryPhotos.filter(p => p.category === activeFilter);

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FDFCF7] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/35 text-xs font-editorial uppercase tracking-[0.25em] text-[#5B1E29] mb-4 shadow-sm"
          >
            <Camera className="w-3.5 h-3.5 text-[#AA820A]" />
            <span>Curated Visual Memories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3D121A] font-normal tracking-tight"
          >
            Our Memories — <span className="font-script text-5xl sm:text-6xl text-[#9B4450]">Photographic Gallery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-neutral-600 text-base sm:text-lg font-light italic"
          >
            "Every authentic picture holds a heartbeat, preserving the original beauty of our journey."
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Photographs' },
            { id: 'together', label: 'Our Togetherness' },
            { id: 'ashlesha', label: "Ashlesha's Moments" },
            { id: 'hiren', label: "Hiren's Moments" },
            { id: 'special', label: 'Special Memories' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as CategoryFilter)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 font-medium ${
                activeFilter === tab.id
                  ? 'bg-[#5B1E29] text-[#FAF7EE] shadow-md border border-[#D4AF37]'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-[#D4AF37]/60 hover:bg-[#FAF7EE]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry / Editorial Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-[#D4AF37]/20 flex flex-col"
                onClick={() => setSelectedPhoto(photo)}
              >
                {/* Image Container with Natural Aspect Preservation */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#FAF7EE]">
                  <img
                    src={`${import.meta.env.BASE_URL}${photo.src.replace(/^\//, '')}`}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D121A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="text-white text-xs font-editorial tracking-widest uppercase">
                      View Photograph
                    </span>
                    <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="p-4 bg-white flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-[#AA820A] block mb-1">
                      {photo.tag}
                    </span>
                    <h3 className="font-serif text-lg text-[#3D121A] font-medium leading-snug">
                      {photo.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-500 italic mt-2 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedPhoto(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-20"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev / Next controls */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-20"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-20"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[90vh] bg-[#281219] rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl flex flex-col md:flex-row"
              >
                {/* Photo */}
                <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${selectedPhoto.src.replace(/^\//, '')}`}
                    alt={selectedPhoto.title}
                    className="max-h-[60vh] md:max-h-[85vh] w-full object-contain"
                  />
                </div>

                {/* Details Sidebar */}
                <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-[#FAF7EE] bg-[#281219]">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B0B10] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-wider mb-4">
                      <Tag className="w-3 h-3" />
                      <span>{selectedPhoto.tag}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-3">
                      {selectedPhoto.title}
                    </h3>

                    <p className="font-serif text-base text-[#ECE3C6] italic leading-relaxed mb-6">
                      "{selectedPhoto.caption}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#ECE3C6]/60">
                    <span className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-[#9B4450] fill-[#9B4450]" />
                      Authentic Original Memory
                    </span>
                    <span className="font-script text-xl text-[#E8D49E]">Ashhuu &amp; Hiren</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

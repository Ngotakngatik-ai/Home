import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const prompts = [
  {
    id: 1,
    title: "Foto Orang di Salju",
    tag: "Image",
    type: "Portrait",
    image: "https://images.unsplash.com/photo-1652342531665-c3002a494e0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://facebook.com/ngotakngatikai"
  },
  {
    id: 2,
    title: "Product Skincare Aesthetic",
    tag: "Image",
    type: "Product",
    image: "https://images.unsplash.com/photo-1538489281439-336a8b1ccb2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://facebook.com/ngotakngatikai"
  },
  {
    id: 3,
    title: "Abstract Tech Flow",
    tag: "Video",
    type: "Experimental",
    image: "https://images.unsplash.com/photo-1764258560164-97f682adef36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://facebook.com/ngotakngatikai"
  },
  {
    id: 4,
    title: "UGC Content Creator",
    tag: "Video",
    type: "UGC",
    image: "https://images.unsplash.com/photo-1727142073879-a3cd38774ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://facebook.com/ngotakngatikai"
  },
  {
    id: 5,
    title: "Cyberpunk Street Style",
    tag: "Image",
    type: "Cinematic",
    image: "https://images.unsplash.com/photo-1758600436770-821223436cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://facebook.com/ngotakngatikai"
  },
  {
    id: 6,
    title: "Minimalist Workspace",
    tag: "Image",
    type: "Interior",
    image: "https://images.unsplash.com/photo-1769596722174-38df0c84206b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://facebook.com/ngotakngatikai"
  }
];

export const PromptGallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mb-2">Inspirasi Terbaru</h2>
          <p className="text-gray-500">Klik kartu untuk melihat prompt lengkap di Facebook.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
        {prompts.map((prompt, index) => (
          <motion.a
            key={prompt.id}
            href={prompt.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 4) * 0.1 }}
            className="group relative flex flex-col rounded-[24px] overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Thumbnail */}
            <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden relative">
              <ImageWithFallback
                src={prompt.image}
                alt={prompt.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Tag Label */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-wider uppercase bg-white/90 text-[#0F172A] shadow-sm backdrop-blur-sm`}>
                  {prompt.tag}
                </span>
              </div>

              {/* Title Overlay (Mobile/Hover) */}
              <div className="absolute bottom-4 left-4 right-4 z-10 transition-transform duration-300 transform md:translate-y-4 group-hover:translate-y-0 opacity-100 md:opacity-0 group-hover:opacity-100">
                <p className="text-white font-bold text-sm md:text-base leading-tight">
                  {prompt.title}
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-white/70 text-[10px] md:text-xs font-medium">
                  <ExternalLink className="w-3 h-3" /> Lihat Prompt
                </div>
              </div>
            </div>
            
            {/* Desktop footer info (optional - hidden on mobile to keep pinterest style) */}
            <div className="hidden md:block p-4 border-t border-gray-50">
               <h3 className="font-bold text-[#0F172A] text-sm truncate">{prompt.title}</h3>
               <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-bold">{prompt.type}</p>
            </div>
          </motion.a>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gray-50 text-[#0F172A] font-bold rounded-2xl border border-gray-200 hover:bg-gray-100 transition-colors"
        >
          Muat Lebih Banyak
        </motion.button>
      </div>
    </section>
  );
};

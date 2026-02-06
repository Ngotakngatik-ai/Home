import React from 'react';
import { Image, Video, User, ShoppingBag, FlaskConical, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const categories = [
  { id: 'image', name: 'Generate Image', icon: <Image className="w-5 h-5" />, color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 'video', name: 'Video UGC', icon: <Video className="w-5 h-5" />, color: 'text-purple-600', bg: 'bg-purple-50' },
  { id: 'portrait', name: 'Cinematic Portrait', icon: <User className="w-5 h-5" />, color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 'product', name: 'Product Content', icon: <ShoppingBag className="w-5 h-5" />, color: 'text-purple-600', bg: 'bg-purple-50' },
  { id: 'experimental', name: 'Experimental AI', icon: <FlaskConical className="w-5 h-5" />, color: 'text-blue-600', bg: 'bg-blue-50' },
];

export const CategorySection = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-nowrap md:flex-wrap items-center gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide no-scrollbar">
        {categories.map((cat, index) => (
          <motion.button
            key={cat.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -2 }}
            className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white group cursor-pointer`}
          >
            <div className={`${cat.bg} ${cat.color} p-2.5 rounded-xl transition-transform group-hover:scale-110`}>
              {cat.icon}
            </div>
            <span className="font-bold text-[#0F172A] whitespace-nowrap">{cat.name}</span>
          </motion.button>
        ))}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-shrink-0 flex items-center gap-2 px-4 py-4 text-blue-600 font-bold hover:underline"
        >
          See All <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
};

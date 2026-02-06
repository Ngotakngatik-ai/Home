import React from 'react';
import { motion } from 'motion/react';
import { Facebook, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl -z-10 h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-[#2563EB] bg-blue-50 rounded-full border border-blue-100">
            🔥 #1 AI Prompt Library in Indonesia
          </span>
          
          <h1 className="text-5xl md:text-7xl font-[900] tracking-tight mb-6 leading-[1.1]">
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              Ngotak Ngatik AI
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#0F172A]/70 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Kumpulan Prompt AI Image & Video. <br className="hidden md:block" />
            Tinggal Klik, Copy, Generate. Bebaskan imajinasimu sekarang.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 bg-[#0F172A] text-white rounded-[20px] font-bold text-lg shadow-xl shadow-black/10 flex items-center justify-center gap-2 group"
            >
              Explore Prompt <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="https://facebook.com/ngotakngatikai"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-5 bg-white text-[#2563EB] border-2 border-blue-50 rounded-[20px] font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-50/50 transition-colors"
            >
              <Facebook className="w-5 h-5 fill-current" /> Ikuti Fanspage
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

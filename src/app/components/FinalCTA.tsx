import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Send } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-[40px] p-8 md:p-16 text-center shadow-2xl shadow-blue-500/20">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Prompt Baru Update di Fanspage
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto font-medium">
              Jangan ketinggalan tren AI terbaru. Gabung dengan komunitas kami dan ngotak-ngatik bareng!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://facebook.com/ngotakngatikai"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-white text-[#2563EB] rounded-2xl font-bold text-xl shadow-lg flex items-center justify-center gap-3"
              >
                <Facebook className="w-6 h-6 fill-[#2563EB]" /> Buka Facebook Page
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-black/20 text-white border border-white/30 backdrop-blur-md rounded-2xl font-bold text-xl flex items-center justify-center gap-3"
              >
                Join Telegram <Send className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const SimpleFooter = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] w-8 h-8 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-lg">N</span>
          </div>
          <span className="font-black text-xl text-[#0F172A]">Ngotak Ngatik AI</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-[#0F172A]/50 uppercase tracking-widest">
          <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
          <a href="#" className="hover:text-blue-600 transition-colors">TikTok</a>
          <a href="https://facebook.com/ngotakngatikai" className="hover:text-blue-600 transition-colors">Facebook</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
        </div>
        
        <p className="text-[#0F172A]/30 text-xs font-medium">
          &copy; 2026 Ngotak Ngatik AI. Built with love for AI creators.
        </p>
      </div>
    </footer>
  );
};

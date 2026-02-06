import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[40px] px-8 py-16 md:py-24 text-center border border-gray-100 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100/30 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-purple-100/30 blur-[100px] rounded-full" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6">Siap Ngoprek AI?</h2>
            <p className="text-lg md:text-xl text-[#0F172A]/60 mb-10 max-w-xl mx-auto">
              Gabung dengan ribuan kreator lainnya dan mulai buat konten visual yang memukau sekarang juga.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white rounded-2xl font-bold text-xl shadow-xl shadow-blue-500/25 inline-flex items-center gap-3"
            >
              Gas Generate Sekarang <Send className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl text-[#0F172A] mb-2">Ngotak Ngatik AI</h3>
            <p className="text-[#0F172A]/50 text-sm">© 2026 Ngotak Ngatik AI. Semua hak dilindungi.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm font-medium text-[#0F172A]/60 hover:text-[#2563EB] transition-colors">Twitter</a>
            <a href="#" className="text-sm font-medium text-[#0F172A]/60 hover:text-[#2563EB] transition-colors">Discord</a>
            <a href="#" className="text-sm font-medium text-[#0F172A]/60 hover:text-[#2563EB] transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

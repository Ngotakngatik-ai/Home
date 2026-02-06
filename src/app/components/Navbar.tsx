import React from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] p-1.5 rounded-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-[#0F172A] tracking-tight">Ngotak Ngatik AI</span>
          </div>

          <div className="hidden md:flex items-center space-gap-8">
            <a href="#" className="text-[#0F172A]/70 hover:text-[#2563EB] transition-colors px-4 py-2 text-sm font-medium">Home</a>
            <a href="#" className="text-[#0F172A]/70 hover:text-[#2563EB] transition-colors px-4 py-2 text-sm font-medium">Prompts</a>
            <a href="#" className="text-[#0F172A]/70 hover:text-[#2563EB] transition-colors px-4 py-2 text-sm font-medium">Showcase</a>
            <a href="#" className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity ml-4 shadow-md">Get Started</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#0F172A] p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-2"
        >
          <a href="#" className="block px-4 py-2 text-[#0F172A]/70 hover:bg-gray-50 rounded-lg">Home</a>
          <a href="#" className="block px-4 py-2 text-[#0F172A]/70 hover:bg-gray-50 rounded-lg">Prompts</a>
          <a href="#" className="block px-4 py-2 text-[#0F172A]/70 hover:bg-gray-50 rounded-lg">Showcase</a>
          <button className="w-full mt-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white px-5 py-3 rounded-xl font-semibold">Get Started</button>
        </motion.div>
      )}
    </nav>
  );
};

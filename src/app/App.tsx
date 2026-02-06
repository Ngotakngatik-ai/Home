import React from 'react';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { PromptGallery } from './components/PromptGallery';
import { FinalCTA, SimpleFooter } from './components/FinalCTA';
import { Navbar } from './components/Navbar';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0F172A] selection:bg-blue-100 selection:text-[#2563EB]">
      <Toaster position="top-center" richColors />
      
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none -z-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_center,_var(--color-blue-50)_0%,_transparent_70%)] opacity-30" />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Decorative divider */}
        <div className="max-w-7xl mx-auto px-4">
           <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
        </div>

        <CategorySection />
        
        <PromptGallery />
        
        <FinalCTA />
      </main>

      <SimpleFooter />
    </div>
  );
}

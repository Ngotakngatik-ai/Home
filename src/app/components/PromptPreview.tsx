import React from 'react';
import { motion } from 'motion/react';
import { Copy, Terminal } from 'lucide-react';
import { toast } from 'sonner';

export const PromptPreview = () => {
  const examplePrompt = "A futuristic cyberpunk city in 2077, cinematic lighting, neon colors, hyper-detailed, 8k resolution, volumetric atmosphere, shot on 35mm lens --ar 16:9";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(examplePrompt);
    toast.success("Prompt copied to clipboard!");
  };

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Sneak Peek Prompt</h2>
          <p className="text-[#0F172A]/60">Lihat betapa mudahnya mengolah prompt dengan sistem kami.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0F172A] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-white/40 text-xs font-mono ml-2 flex items-center gap-1.5">
                <Terminal className="w-3 h-3" /> prompt_builder.sh
              </span>
            </div>
            <button 
              onClick={copyToClipboard}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>

          {/* Code Area */}
          <div className="p-8 md:p-12">
            <code className="text-lg md:text-xl font-mono text-white/90 leading-relaxed block">
              <span className="text-blue-400">"</span>
              {examplePrompt}
              <span className="text-blue-400">"</span>
            </code>
          </div>
        </motion.div>
        
        <div className="mt-8 flex justify-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span className="text-xs font-medium text-gray-500">Image</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            <span className="text-xs font-medium text-gray-500">Video</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-gray-500">3D</span>
          </div>
        </div>
      </div>
    </section>
  );
};

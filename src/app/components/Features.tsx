import React from 'react';
import { motion } from 'motion/react';
import { Layout, RefreshCw, DollarSign } from 'lucide-react';

const features = [
  {
    title: "Prompt Siap Pakai",
    description: "Koleksi prompt berkualitas tinggi yang sudah teruji untuk berbagai engine AI.",
    icon: <Layout className="w-8 h-8 text-[#2563EB]" />,
    color: "bg-blue-50"
  },
  {
    title: "Update Berkala",
    description: "Update prompt terbaru mengikuti tren AI terkini agar hasil generate selalu fresh.",
    icon: <RefreshCw className="w-8 h-8 text-[#7C3AED]" />,
    color: "bg-purple-50"
  },
  {
    title: "Bisa Jadi Cuan",
    description: "Pelajari cara monetisasi hasil karya AI-mu dan bangun karir baru di era digital.",
    icon: <DollarSign className="w-8 h-8 text-green-600" />,
    color: "bg-green-50"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-gray-50 rounded-[24px] border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{feature.title}</h3>
              <p className="text-[#0F172A]/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

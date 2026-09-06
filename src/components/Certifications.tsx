import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: "Fundamentals of Business Analytics",
    issuer: "Coursera — Microsoft"
  },
  {
    title: "Basic Digital Marketing",
    issuer: "Elysium Academy, Madurai"
  },
  {
    title: "Hospital Management",
    issuer: "E.M.G. Yadava Women's College"
  },
  {
    title: "Python",
    issuer: "Venus Computer Centre"
  }
];

export const Certifications: React.FC = () => {
  return (
    <section className="py-32 relative bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-accent mb-4 uppercase"
          >
            Certifications
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-background border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg leading-tight mb-2 flex-grow">{cert.title}</h4>
                <p className="text-foreground/50 text-sm">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

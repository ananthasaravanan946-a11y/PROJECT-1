import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "P.K.S Engineering Private Limited",
    duration: "21 Days",
    type: "Internship experience"
  },
  {
    company: "Oneyes Infotech Solutions",
    duration: "1 Month",
    type: "Internship experience"
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-accent mb-4 uppercase"
          >
            Professional Experience
          </motion.h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-none space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                <div className="hidden md:block col-span-1 text-right text-sm font-medium text-foreground/50 mt-1">
                  {exp.duration}
                </div>
                
                <div className="col-span-4 relative md:pl-10">
                  {/* Timeline Node */}
                  <div className="absolute -left-[41px] md:-left-[5px] top-1.5 w-3 h-3 bg-background border-2 border-accent rounded-full z-10" />
                  <div className="hidden md:block absolute left-[0.5px] top-1.5 bottom-[-48px] w-px bg-white/10" />
                  
                  <div className="md:hidden text-sm font-medium text-accent mb-2">
                    {exp.duration}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-1">{exp.company}</h4>
                  <p className="text-sm text-foreground/40 italic">{exp.type}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

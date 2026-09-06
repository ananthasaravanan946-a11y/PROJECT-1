import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CareerVision: React.FC = () => {
  const steps = [
    { label: "BUSINESS", desc: "Understanding the problem" },
    { label: "DATA", desc: "Finding the patterns" },
    { label: "INSIGHT", desc: "Extracting meaning" },
    { label: "DECISION", desc: "Taking action" },
    { label: "IMPACT", desc: "Driving results" }
  ];

  return (
    <section className="py-40 relative bg-background overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium tracking-widest text-accent uppercase">
            Building Toward Data-Driven Business
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-24 max-w-4xl mx-auto leading-tight"
        >
          From understanding business problems <br className="hidden md:block" />
          <span className="text-foreground/40">to discovering insights within data.</span>
        </motion.h2>

        {/* Conceptual Transition */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto flex-wrap">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 flex items-center justify-center mb-4 group-hover:border-accent/50 group-hover:bg-accent/5 transition-all relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-bold tracking-widest text-xs md:text-sm text-foreground/80 group-hover:text-accent relative z-10">
                    {step.label}
                  </span>
                </div>
                <span className="text-xs text-foreground/40 font-light opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  {step.desc}
                </span>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="hidden md:block text-white/20"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Presentation, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent mb-4 uppercase">
              About The Analyst
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Bridging the gap between <br className="hidden md:block" />
              <span className="text-foreground/50">business strategy and data.</span>
            </h3>
            
            <div className="space-y-6 text-foreground/70 font-light leading-relaxed">
              <p>
                As a Business Administration graduate currently pursuing an MBA at Kalasalingam Academy of Research and Education, I am developing a strong foundation in business analytics and data visualization.
              </p>
              <p>
                My focus is on transforming complex data into clear, actionable insights. Through practical projects and internships, I've honed my abilities in problem-solving, business communication, and data-informed decision making.
              </p>
              <p>
                I believe that effective leadership and strategic thinking, when powered by robust data analysis, form the core of modern business success.
              </p>
            </div>
          </motion.div>

          {/* Analyst Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full" />
            
            <div className="relative bg-background border border-white/5 rounded-2xl p-8 backdrop-blur-sm overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full transition-transform group-hover:scale-110" />
              
              <h4 className="text-xl font-medium mb-8">Analyst Profile</h4>
              
              <div className="space-y-6">
                {[
                  { icon: Presentation, label: "Business Administration", value: "Core Foundation" },
                  { icon: TrendingUp, label: "MBA", value: "In Progress" },
                  { icon: BarChart3, label: "Business Analytics", value: "Primary Focus" },
                  { icon: Lightbulb, label: "Decision Making", value: "Data-Informed" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="p-3 bg-surface rounded-lg text-accent">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="text-xs text-foreground/50">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

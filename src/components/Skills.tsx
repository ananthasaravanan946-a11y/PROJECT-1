import React from 'react';
import { motion } from 'framer-motion';
import { Database, LayoutGrid, FileSpreadsheet, Terminal } from 'lucide-react';

const businessSkills = [
  "Business Communication",
  "Team Leadership",
  "Time Management",
  "Collaborative Problem-Solving"
];

const technicalSkills = [
  { name: "Power BI", icon: LayoutGrid, type: "dashboard" },
  { name: "MS Excel", icon: FileSpreadsheet, type: "grid" },
  { name: "MySQL", icon: Database, type: "nodes" },
  { name: "Python", icon: Terminal, type: "code", level: "Basics" },
  { name: "Data Analysis", icon: LayoutGrid, type: "dashboard" },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-accent mb-4 uppercase"
          >
            Core Competencies
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Technical & Business Skills
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Analytics & Technical */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface rounded-2xl p-8 border border-white/5"
          >
            <h4 className="text-xl font-medium mb-8 flex items-center gap-2">
              Analytics & Technical
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-background border border-white/5 group relative overflow-hidden"
                >
                  {/* Subtle hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-surface text-accent group-hover:scale-110 transition-transform">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{skill.name}</div>
                      {skill.level && (
                        <div className="text-xs text-foreground/50 mt-1">{skill.level}</div>
                      )}
                      
                      {/* Abstract mini-visualization */}
                      <div className="mt-3 flex gap-1 h-3 items-end opacity-50 group-hover:opacity-100 transition-opacity">
                        {skill.type === 'dashboard' && (
                          <>
                            <div className="w-2 bg-accent/80 h-2 rounded-sm" />
                            <div className="w-2 bg-accent/40 h-3 rounded-sm" />
                            <div className="w-2 bg-accent/60 h-1.5 rounded-sm" />
                          </>
                        )}
                        {skill.type === 'grid' && (
                          <div className="grid grid-cols-3 gap-0.5 w-full">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="h-1 bg-white/20 rounded-sm" />
                            ))}
                          </div>
                        )}
                        {skill.type === 'nodes' && (
                          <div className="flex items-center gap-1 w-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <div className="flex-1 h-[1px] bg-accent/50" />
                            <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                          </div>
                        )}
                        {skill.type === 'code' && (
                          <div className="font-mono text-[8px] text-accent/80 tracking-tighter">
                            def init():
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Other Technical Tools */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl bg-background border border-white/5 group flex flex-col justify-center"
              >
                <div className="font-medium text-sm text-foreground/80 mb-2">Office Suite</div>
                <div className="flex gap-2 text-xs text-foreground/50">
                  <span className="px-2 py-1 bg-surface rounded-md">MS Word</span>
                  <span className="px-2 py-1 bg-surface rounded-md">PowerPoint</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Business & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface rounded-2xl p-8 border border-white/5 relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 border border-white/5 rounded-full opacity-20" />
            <div className="absolute -right-10 -top-10 w-48 h-48 border border-accent/20 rounded-full opacity-20" />

            <h4 className="text-xl font-medium mb-8 relative z-10">Business Acumen</h4>
            
            <div className="space-y-4 relative z-10">
              {businessSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-foreground/80 font-light">{skill}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-4 bg-background/50 rounded-xl border border-white/5 backdrop-blur-sm relative z-10">
              <p className="text-sm font-light text-foreground/70 italic">
                "Combining technical tools with effective communication to drive impactful business decisions."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

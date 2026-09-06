import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: "MBA",
    institution: "Kalasalingam Academy of Research and Education",
    year: "In Progress",
    score: null
  },
  {
    degree: "BBA",
    institution: "EMG Yadava Women's College",
    year: "2025",
    score: "71%"
  },
  {
    degree: "HSC",
    institution: "O.C.P.M. Hr. Sec. School",
    year: "2022",
    score: "64%"
  },
  {
    degree: "SSLC",
    institution: "O.C.P.M. Hr. Sec. School",
    year: "2020",
    score: "51.2%"
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 relative bg-background">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-accent mb-4 uppercase"
          >
            Academic Background
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />
          
          <div className="space-y-12">
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 w-10 h-10 bg-surface border border-white/10 rounded-full flex items-center justify-center -translate-x-1/2 z-10 text-foreground/50 shadow-xl shadow-background">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-5/12" />

                  {/* Content Card */}
                  <div className="w-full md:w-5/12 pl-20 md:pl-0">
                    <div className={`bg-surface p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors ${
                      isEven ? 'md:mr-8 md:text-right' : 'md:ml-8 text-left'
                    }`}>
                      <div className="text-accent text-sm font-medium mb-1">{edu.year}</div>
                      <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                      <p className="text-foreground/70 font-light text-sm leading-relaxed mb-3">
                        {edu.institution}
                      </p>
                      {edu.score && (
                        <div className={`inline-flex items-center px-3 py-1 bg-white/5 rounded-full text-xs text-foreground/50 ${
                           isEven ? 'md:float-right' : ''
                        }`}>
                          Score: <span className="text-foreground ml-1 font-medium">{edu.score}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, BarChart, Network, Activity } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  findings: string[];
  visualType: 'demographic' | 'regulation' | 'funnel';
  details: {
    context: string;
    businessQuestion: string;
    analysis: string;
    keyInsight: string;
    businessRelevance: string;
  };
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Render the abstract visualization based on the type
  const renderVisual = () => {
    switch (project.visualType) {
      case 'demographic':
        return (
          <div className="h-full w-full flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-500 relative">
            <BarChart className="w-24 h-24 text-accent absolute" strokeWidth={1} />
            {/* Animated bars */}
            <motion.div className="flex gap-2 h-16 items-end mt-4 z-10">
              <motion.div animate={{ height: ['40%', '80%', '40%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="w-4 bg-white/20 rounded-t-sm" />
              <motion.div animate={{ height: ['60%', '30%', '60%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="w-4 bg-accent/80 rounded-t-sm" />
              <motion.div animate={{ height: ['30%', '90%', '30%'] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="w-4 bg-white/20 rounded-t-sm" />
              <motion.div animate={{ height: ['80%', '50%', '80%'] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} className="w-4 bg-accent/40 rounded-t-sm" />
            </motion.div>
          </div>
        );
      case 'regulation':
        return (
          <div className="h-full w-full flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-500 relative">
            <Network className="w-24 h-24 text-accent absolute" strokeWidth={1} />
            <div className="flex flex-col items-center gap-2 mt-2 z-10">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-[1px] h-4 bg-white/20" />
              <div className="flex gap-4">
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="w-2 h-2 rounded-full bg-accent/50" />
                <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} className="w-2 h-2 rounded-full bg-white/50" />
              </div>
            </div>
          </div>
        );
      case 'funnel':
        return (
          <div className="h-full w-full flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-500 relative">
            <Activity className="w-24 h-24 text-accent absolute" strokeWidth={1} />
            <div className="flex flex-col items-center gap-1 mt-6 z-10 w-full px-12">
              <motion.div animate={{ width: ['100%', '95%', '100%'] }} transition={{ duration: 4, repeat: Infinity }} className="h-2 bg-white/20 rounded-sm" />
              <motion.div animate={{ width: ['80%', '75%', '80%'] }} transition={{ duration: 4, repeat: Infinity, delay: 0.2 }} className="h-2 bg-accent/40 rounded-sm" />
              <motion.div animate={{ width: ['60%', '55%', '60%'] }} transition={{ duration: 4, repeat: Infinity, delay: 0.4 }} className="h-2 bg-accent/70 rounded-sm" />
              <motion.div animate={{ width: ['40%', '35%', '40%'] }} transition={{ duration: 4, repeat: Infinity, delay: 0.6 }} className="h-2 bg-accent rounded-sm" />
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {/* Thumbnail Card */}
      <motion.div
        layoutId={`project-container-${project.id}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onClick={() => setIsExpanded(true)}
        className="group cursor-pointer bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors flex flex-col h-[450px]"
      >
        {/* Visual Header */}
        <motion.div 
          layoutId={`project-visual-${project.id}`}
          className="h-48 bg-background relative overflow-hidden flex-shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10" />
          {renderVisual()}
        </motion.div>

        {/* Content */}
        <motion.div className="p-8 flex flex-col flex-grow">
          <motion.div layoutId={`project-meta-${project.id}`} className="text-xs text-accent font-medium tracking-widest uppercase mb-2">
            {project.subtitle}
          </motion.div>
          <motion.h4 layoutId={`project-title-${project.id}`} className="text-2xl font-bold mb-4">
            {project.title}
          </motion.h4>
          <motion.p layoutId={`project-desc-${project.id}`} className="text-foreground/60 text-sm line-clamp-3 mb-6">
            {project.description}
          </motion.p>
          
          <div className="mt-auto flex items-center justify-between text-sm font-medium text-foreground/80 group-hover:text-accent transition-colors">
            <span>View Case Study</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-background/80 backdrop-blur-xl"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              layoutId={`project-container-${project.id}`}
              className="bg-surface w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 flex flex-col md:flex-row relative shadow-2xl shadow-accent/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsExpanded(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-background/50 hover:bg-white/10 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column - Visual & Quick hits */}
              <div className="w-full md:w-2/5 bg-background border-r border-white/5 flex flex-col">
                <motion.div 
                  layoutId={`project-visual-${project.id}`}
                  className="h-64 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                  {renderVisual()}
                </motion.div>
                
                <div className="p-8 md:p-10 flex-grow">
                  <motion.div layoutId={`project-meta-${project.id}`} className="text-xs text-accent font-medium tracking-widest uppercase mb-2">
                    {project.subtitle}
                  </motion.div>
                  <motion.h3 layoutId={`project-title-${project.id}`} className="text-3xl font-bold mb-6">
                    {project.title}
                  </motion.h3>
                  <motion.p layoutId={`project-desc-${project.id}`} className="text-foreground/70 font-light mb-8">
                    {project.description}
                  </motion.p>
                  
                  {project.highlight && (
                    <div className="p-4 bg-surface rounded-xl border border-white/5 mb-6">
                      <div className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Key Finding</div>
                      <div className="text-accent font-medium">{project.highlight}</div>
                    </div>
                  )}

                  {project.findings.length > 0 && (
                    <div className="space-y-3">
                      {project.findings.map((finding, i) => (
                         <div key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                           <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                           <span>{finding}</span>
                         </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Case Study details */}
              <div className="w-full md:w-3/5 p-8 md:p-12">
                <h4 className="text-xl font-medium mb-10 border-b border-white/5 pb-4">Analytical Case Study</h4>
                
                <div className="space-y-10">
                  <DetailSection num="01" title="Context" content={project.details.context} />
                  <DetailSection num="02" title="Business Question" content={project.details.businessQuestion} />
                  <DetailSection num="03" title="Analysis" content={project.details.analysis} />
                  <DetailSection num="04" title="Key Insight" content={project.details.keyInsight} />
                  <DetailSection num="05" title="Business Relevance" content={project.details.businessRelevance} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const DetailSection = ({ num, title, content }: { num: string, title: string, content: string }) => (
  <div className="flex gap-6">
    <div className="text-sm font-mono text-foreground/30 mt-1">{num}</div>
    <div>
      <h5 className="text-sm uppercase tracking-widest text-foreground/50 mb-2">{title}</h5>
      <p className="text-foreground/80 font-light leading-relaxed">{content}</p>
    </div>
  </div>
);

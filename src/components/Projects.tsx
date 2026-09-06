import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import type { ProjectData } from './ProjectCard';

const projectsData: ProjectData[] = [
  {
    id: "kfc-study",
    title: "Customer Perception & Loyalty Study",
    subtitle: "KFC — Madurai",
    description: "Analyzed customer perception and loyalty patterns, identifying key preferences among surveyed customers.",
    highlight: "80% of surveyed customers were aged 18–25.",
    findings: [
      "Strong preference for seasonal menus",
      "Interest in self-combo customization"
    ],
    visualType: "demographic",
    details: {
      context: "A localized study examining the dining behaviors, brand perception, and loyalty drivers for KFC in the Madurai region.",
      businessQuestion: "What demographic factors and menu preferences most strongly influence customer retention and loyalty?",
      analysis: "Detailed methodology to be added.",
      keyInsight: "The customer base is highly concentrated in the 18-25 demographic, showing significant responsiveness to customizable and seasonal offerings rather than standard menu items.",
      businessRelevance: "Highlights the need for targeted marketing strategies and product localization to maximize retention in the dominant age segment."
    }
  },
  {
    id: "sebi-gold",
    title: "SEBI's Circular on Digital Gold",
    subtitle: "Regulatory Analysis",
    description: "Analyzed the regulatory implications of SEBI's circular on digital gold and its relevance to retail investors in India's gold investment landscape.",
    highlight: "",
    findings: [],
    visualType: "regulation",
    details: {
      context: "SEBI issued new regulatory frameworks addressing the growing digital gold investment sector in India to protect retail investors.",
      businessQuestion: "How do SEBI's regulatory changes impact the operational dynamics of digital gold platforms and retail investor behavior?",
      analysis: "Detailed methodology to be added.",
      keyInsight: "The regulatory framework introduces necessary compliance layers that, while initially disruptive to platforms, ultimately establish trust and structured security for retail investors.",
      businessRelevance: "Demonstrates an understanding of financial compliance, risk management, and regulatory impacts on market accessibility."
    }
  },
  {
    id: "zoho-books",
    title: "Adoption Barriers Study",
    subtitle: "Zoho Books Among SMEs",
    description: "Investigated factors limiting accounting software adoption among small and medium enterprises.",
    highlight: "",
    findings: [],
    visualType: "funnel",
    details: {
      context: "Despite the availability of modern accounting solutions like Zoho Books, many SMEs continue to face barriers in digital transformation.",
      businessQuestion: "What are the primary operational, financial, and psychological barriers preventing SMEs from adopting cloud accounting software?",
      analysis: "Detailed methodology to be added.",
      keyInsight: "Cost of transition and perceived complexity often outweigh the recognized benefits of automation for small business owners in the short term.",
      businessRelevance: "Identifies crucial friction points in B2B SaaS adoption, providing actionable intelligence for go-to-market strategies and product onboarding improvements."
    }
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-accent mb-4 uppercase"
          >
            Selected Analytics Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold max-w-2xl"
          >
            Extracting narratives from data to solve business problems.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

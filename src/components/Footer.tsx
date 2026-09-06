import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-background border-t border-white/5 text-center px-6 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h4 className="font-bold tracking-widest text-lg mb-2">M. Anantha Rani</h4>
        <p className="text-sm text-foreground/60 mb-6">Business Administration Graduate · Aspiring Business Analyst</p>
        
        <div className="w-12 h-[1px] bg-white/20 mb-6" />
        
        <p className="text-xs text-foreground/40 tracking-wider font-light italic">
          "Designed around data, business, and continuous learning."
        </p>
        
        <div className="mt-8 text-[10px] text-foreground/30 uppercase tracking-widest">
          © {new Date().getFullYear()} M. Anantha Rani
        </div>
      </div>
    </footer>
  );
};

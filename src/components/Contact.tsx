import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent mb-4 uppercase">
              Let's Connect
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to turn data <br />
              <span className="text-foreground/50">into your next advantage?</span>
            </h3>
            <p className="text-foreground/60 font-light max-w-md mb-10">
              Currently seeking opportunities in business analytics, data visualization, and strategic roles.
            </p>
            
            <a 
              href="mailto:anantharanimurugan@gmail.com?subject=Portfolio%20Contact&body=Hello%20Ananthar%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-background font-medium rounded-full hover:scale-105 transition-transform"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-background border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex items-start gap-4">
              <div className="p-3 bg-surface rounded-full text-accent mt-1">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground/50 mb-1">Email</div>
                <a href="mailto:anantharanimurugan@gmail.com" className="text-lg font-medium hover:text-accent transition-colors break-all">
                  anantharanimurugan@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-background border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex items-start gap-4">
              <div className="p-3 bg-surface rounded-full text-accent mt-1">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground/50 mb-1">Phone</div>
                <a href="tel:+919342127409" className="text-lg font-medium hover:text-accent transition-colors break-all">
                  +91 93421 27409
                </a>
              </div>
            </div>

            <div className="bg-background border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex items-start gap-4">
              <div className="p-3 bg-surface rounded-full text-accent mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground/50 mb-1">Location</div>
                <div className="text-lg font-medium">
                  Madurai, Tamil Nadu, India
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header as LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/Footer';
import { Mail, Clock, Zap, CheckCircle2, Loader2, Send } from 'lucide-react';

export default function SupportPage({ onEnterDashboard }: { onEnterDashboard: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-sky-200 selection:text-sky-900 flex flex-col">
      <LandingHeader onEnterDashboard={onEnterDashboard} />

      <main className="flex-1 relative pt-32 pb-24 lg:pt-40 lg:pb-32 px-6">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

        <div className="max-w-3xl mx-auto relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <h1 className="text-3xl font-display font-bold text-slate-900 mb-3 tracking-tight">Support</h1>
            <p className="text-slate-500 text-lg">
              Need help with your account, billing, or technical issues? Send us a message.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[1.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/40 transition-shadow duration-300 hover:shadow-2xl hover:shadow-sky-100/50 mb-10">
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message received</h3>
                  <p className="text-slate-500">We'll get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 focus:bg-white transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 focus:bg-white transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-bold text-slate-700">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 focus:bg-white transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 focus:bg-white transition-all resize-y"
                      placeholder="Please provide as much detail as possible..."
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Quick Contact Bar */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-6 border-t border-slate-200/60">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-sm font-medium text-slate-700">Work@fieldcore.co.in</div>
                </div>
              </div>

              <div className="hidden md:block w-px h-8 bg-slate-200"></div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Hours</div>
                  <div className="text-sm font-medium text-slate-700">Monday–Friday, 9 AM–6 PM</div>
                </div>
              </div>

              <div className="hidden md:block w-px h-8 bg-slate-200"></div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Response Time</div>
                  <div className="text-sm font-medium text-slate-700">Usually within 24 hours</div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

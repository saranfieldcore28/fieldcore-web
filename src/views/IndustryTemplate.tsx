import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Header as LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/Footer';
import { CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface IndustryFeature {
  title: string;
  description: string;
  placeholderText: string;
  visualContent?: React.ReactNode;
}

interface ProblemCard {
  title: string;
  description: string;
}

interface IndustryTemplateProps {
  onEnterDashboard: () => void;
  title: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroPlaceholder: string;
  heroCaption: string;
  heroVisualContent?: React.ReactNode;
  builtForList: string[];
  problemsHeadline: string;
  problems: ProblemCard[];
  featuresHeadline: string;
  features: IndustryFeature[];
  whyChooseHeadline: string;
  whyChooseList: string[];
  ctaHeadline: string;
}

export const IndustryTemplate: React.FC<IndustryTemplateProps> = ({
  onEnterDashboard,
  title,
  heroHeadline,
  heroSubheadline,
  heroPlaceholder,
  heroCaption,
  heroVisualContent,
  builtForList,
  problemsHeadline,
  problems,
  featuresHeadline,
  features,
  whyChooseHeadline,
  whyChooseList,
  ctaHeadline,
}) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(headerRef.current, {
      y: -30,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.1
    })
    .from(".gsap-header-item", {
      y: -15,
      opacity: 0,
      stagger: 0.06,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all"
    }, "-=0.8");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 font-sans text-slate-950 flex flex-col relative overflow-hidden">
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-[100] mix-blend-overlay"></div>
      
      <LandingHeader onEnterDashboard={onEnterDashboard} headerRef={headerRef} />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-16 pb-20 lg:pt-24 lg:pb-32 px-6 overflow-hidden bg-sky-50">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <motion.div 
             animate={{ rotate: [0, 360] }}
             transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
             className="absolute top-[-40%] left-[-20%] w-[140%] h-[140%] opacity-50 mix-blend-multiply"
             style={{
               background: 'linear-gradient(to right, #bae6fd, #e0f2fe)',
               borderRadius: '43% 57% 43% 57% / 43% 57% 57% 43%'
             }}
           />
           <motion.div 
             animate={{ rotate: [360, 0] }}
             transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
             className="absolute top-[-30%] left-[-10%] w-[130%] h-[130%] opacity-60 mix-blend-overlay"
             style={{
               background: 'linear-gradient(to top, #7dd3fc, #bae6fd)',
               borderRadius: '60% 40% 40% 60% / 50% 60% 40% 50%'
             }}
           />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-slate-200/50 shadow-sm backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{title}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-slate-950 leading-[1.05]">
              {heroHeadline}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl">
              {heroSubheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => navigate('/checkout')} className="px-8 py-4 bg-slate-950 text-white font-bold tracking-widest uppercase text-sm rounded-full hover:bg-indigo-600 transition-all shadow-xl hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] hover:-translate-y-1">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white text-slate-950 font-bold tracking-widest uppercase text-sm rounded-full hover:bg-slate-100 transition-all border border-slate-200/60 flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative w-full flex flex-col justify-center items-center"
          >
             <div className="w-full aspect-[4/3] bg-slate-200 rounded-3xl border-8 border-white shadow-2xl flex items-center justify-center relative overflow-hidden">
                {heroVisualContent ? (
                   heroVisualContent
                ) : (
                  <>
                    <div className="absolute inset-0 bg-slate-900/5 mix-blend-overlay"></div>
                    <div className="text-center p-6">
                      <span className="text-slate-500 font-bold tracking-widest uppercase text-sm">{heroPlaceholder}</span>
                      <p className="text-slate-400 text-xs mt-2">{heroCaption}</p>
                    </div>
                  </>
                )}
             </div>
          </motion.div>
        </div>
      </section>

      {/* BUILT FOR SECTION */}
      <section className="py-20 px-6 bg-white border-b border-slate-100 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Built For</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {builtForList.map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-full border border-slate-100"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                <span className="font-medium text-slate-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS SECTION */}
      <section className="py-24 px-6 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl font-display font-bold tracking-tight text-slate-950 mb-6"
            >
              {problemsHeadline}
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                   <div className="w-6 h-6 border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 font-bold text-sm">!</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
                <p className="text-slate-600 leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-32 px-6 bg-white relative z-10 border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24 max-w-3xl mx-auto">
              <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-950 mb-6"
              >
                {featuresHeadline}
              </motion.h2>
           </div>

           <div className="space-y-32">
             {features.map((feature, i) => {
               const isReversed = i % 2 !== 0;
               return (
                 <motion.div 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8 }}
                   key={i} 
                   className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                 >
                   <div className={`space-y-6 ${isReversed ? 'lg:order-2' : ''}`}>
                      <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest">
                         Feature {i + 1}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-950">{feature.title}</h3>
                      <p className="text-xl text-slate-600 leading-relaxed">{feature.description}</p>
                   </div>
                   
                   <div className={`relative w-full aspect-[4/3] bg-slate-100 rounded-3xl border border-slate-200 shadow-xl flex items-center justify-center overflow-hidden group ${isReversed ? 'lg:order-1' : ''}`}>
                      {feature.visualContent ? (
                         feature.visualContent
                      ) : (
                        <div className="text-center p-6 transition-transform group-hover:scale-105 duration-500">
                          <span className="text-slate-400 font-bold tracking-widest uppercase text-sm block mb-2">Screenshot Placeholder</span>
                          <span className="text-slate-600 font-medium">{feature.placeholderText}</span>
                        </div>
                      )}
                   </div>
                 </motion.div>
               );
             })}
           </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-24 px-6 bg-slate-950 text-white relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-12"
          >
            {whyChooseHeadline}
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {whyChooseList.map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex items-center gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-800"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="text-lg font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 bg-sky-50 relative z-10 text-center border-t border-sky-100">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-display font-bold text-slate-950 tracking-tight"
          >
            {ctaHeadline}
          </motion.h2>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="pt-6"
          >
             <button onClick={() => navigate('/checkout')} className="px-10 py-5 bg-indigo-600 text-white font-bold tracking-widest uppercase text-sm rounded-full hover:bg-slate-950 transition-all shadow-xl hover:-translate-y-1">
                Start Free Trial
             </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

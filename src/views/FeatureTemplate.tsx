import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header as LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/Footer';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface ProductSection {
  title: string;
  description: string;
  placeholder?: string;
  visualContent?: React.ReactNode;
}

interface FAQ {
  question: string;
  answer: string;
}

interface FeatureTemplateProps {
  onEnterDashboard: () => void;
  title: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroPlaceholder: string;
  heroVisualContent?: React.ReactNode;
  workflowSteps: string[];
  scenarios: string[];
  productSections: ProductSection[];
  faqs: FAQ[];
  ctaHeadline?: string;
}

export const FeatureTemplate: React.FC<FeatureTemplateProps> = ({
  onEnterDashboard,
  title,
  heroHeadline,
  heroSubheadline,
  heroPlaceholder,
  heroVisualContent,
  workflowSteps,
  scenarios,
  productSections,
  faqs,
  ctaHeadline = "Ready To Organize Your Business?",
}) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

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
      <section className="relative z-10 pt-20 pb-12 lg:pt-32 lg:pb-20 px-6 bg-sky-50 overflow-hidden">
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

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-slate-200/50 shadow-sm backdrop-blur-md mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">{title}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-950 leading-[1.05] max-w-4xl mx-auto">
              {heroHeadline}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mt-6">
              {heroSubheadline}
            </p>

            <div className="flex justify-center gap-4 pt-10">
              <button onClick={() => navigate('/checkout')} className="px-8 py-4 bg-slate-950 text-white font-bold tracking-widest uppercase text-sm rounded-full hover:bg-indigo-600 transition-all shadow-xl hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] hover:-translate-y-1">
                Start Free Trial
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HERO SCREENSHOT */}
      <section className="px-6 relative z-10 -mt-10 lg:-mt-16 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="w-full aspect-[16/9] bg-slate-200 rounded-2xl md:rounded-[2.5rem] border-[10px] md:border-[16px] border-white shadow-2xl flex items-center justify-center relative overflow-hidden"
          >
            {heroVisualContent ? (
              heroVisualContent
            ) : (
              <>
                <div className="absolute inset-0 bg-slate-900/5 mix-blend-overlay"></div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200/50 shadow-sm">
                  <span className="text-slate-500 font-bold tracking-widest uppercase text-sm block mb-2">Primary Dashboard</span>
                  <span className="text-slate-800 font-medium text-lg">{heroPlaceholder}</span>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="py-24 px-6 bg-white border-b border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-2xl font-bold uppercase tracking-widest text-slate-400 mb-16"
          >
            The Perfect Workflow
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {workflowSteps.map((step, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl font-bold text-slate-800 shadow-sm w-full md:w-auto"
                >
                  {step}
                </motion.div>
                {i < workflowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.1 }}
                    className="text-slate-300 hidden md:block"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                )}
                {i < workflowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.1 }}
                    className="text-slate-300 md:hidden"
                  >
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* SCENARIOS SECTION */}
      <section className="py-24 px-6 bg-slate-50 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl font-display font-bold tracking-tight text-slate-950"
            >
              Real-World Scenarios
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {scenarios.map((scenario, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4"
              >
                <div className="mt-1">
                  <CheckCircle className="w-6 h-6 text-indigo-500" />
                </div>
                <p className="text-lg font-medium text-slate-800 leading-snug">{scenario}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE SECTIONS */}
      <section className="py-24 px-6 bg-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-32">
          {productSections.map((section, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                key={i} 
                className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`space-y-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-950 leading-tight">
                    {section.title}
                  </h3>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    {section.description}
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center gap-3 text-slate-700">
                       <CheckCircle className="w-5 h-5 text-sky-500" /> Mobile friendly
                    </li>
                    <li className="flex items-center gap-3 text-slate-700">
                       <CheckCircle className="w-5 h-5 text-sky-500" /> Real-time sync
                    </li>
                    <li className="flex items-center gap-3 text-slate-700">
                       <CheckCircle className="w-5 h-5 text-sky-500" /> Built for solo operators
                    </li>
                  </ul>
                </div>
                
                <div className={`relative w-full aspect-[4/3] bg-slate-100 rounded-3xl border border-slate-200 shadow-xl flex items-center justify-center overflow-hidden group ${isReversed ? 'lg:order-1' : ''}`}>
                  {section.visualContent ? (
                    section.visualContent
                  ) : (
                    <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200/50 shadow-sm transition-transform group-hover:scale-105 duration-500">
                      <span className="text-slate-400 font-bold tracking-widest uppercase text-sm block mb-2">Feature View</span>
                      <span className="text-slate-800 font-medium text-lg">{section.placeholder}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 bg-slate-50 relative z-10 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl font-display font-bold tracking-tight text-slate-950"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span className="pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 bg-slate-950 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight"
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
             <button onClick={() => navigate('/checkout')} className="px-10 py-5 bg-indigo-500 text-white font-bold tracking-widest uppercase text-sm rounded-full hover:bg-indigo-400 transition-all shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] hover:-translate-y-1">
                Start Free Trial
             </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

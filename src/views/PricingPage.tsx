import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { Header as LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/Footer';
import { Check, Plus, Minus, ArrowRight, Calendar, Users, FileText, Mail, Play, DollarSign, Star, CheckCircle, CheckCircle2, Flame, Shield, LayoutDashboard, ArrowRightCircle, TrendingUp } from 'lucide-react';

const AnimatedCounter = ({ from, to, duration = 1, prefix = "", suffix = "", decimals = 0 }: { from: number, to: number, duration?: number, prefix?: string, suffix?: string, decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setValue(progress * (to - from) + from);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{prefix}{value.toFixed(decimals)}{suffix}</span>;
};

const PricingCard = ({ 
  price, 
  tier, 
  features, 
  recommended, 
  delay, 
  subtitle,
  jobLimit,
  buttonText = "Start Free Trial",
  onEnterDashboard
}: { 
  price: string, 
  tier: string, 
  features: string[], 
  recommended?: boolean, 
  delay: number, 
  subtitle?: string,
  jobLimit: string,
  buttonText?: string,
  onEnterDashboard: () => void
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={recommended ? { y: -8, scale: 1.02 } : { y: -8 }}
    className={`relative p-8 md:p-10 rounded-[2rem] border flex flex-col h-full transition-all duration-500 group ${
      recommended 
        ? 'bg-slate-900 text-white border-slate-700 shadow-[0_20px_50px_-12px_rgba(14,165,233,0.3)] md:scale-105 z-10 before:absolute before:inset-0 before:rounded-[2rem] before:bg-gradient-to-b before:from-sky-500/20 before:to-transparent before:pointer-events-none hover:shadow-[0_30px_60px_-15px_rgba(14,165,233,0.5)] hover:border-sky-500/50' 
        : 'bg-white/60 backdrop-blur-3xl text-slate-900 border-slate-200/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-sky-100/60 hover:border-sky-200/80 hover:bg-white'
    }`}
  >
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-sky-500/30 flex items-center gap-1.5">
        <Star className="w-3.5 h-3.5 fill-white" /> Best Value
      </div>
    )}
    
    <div className="mb-8 relative z-10">
      <h3 className={`text-2xl font-bold mb-2 ${recommended ? 'text-white' : 'text-slate-900'}`}>{tier}</h3>
      <p className={`text-sm mb-6 h-10 ${recommended ? 'text-slate-300' : 'text-slate-500'}`}>{subtitle}</p>
      <div className="flex items-end gap-1 mb-2">
          <span className={`text-2xl font-bold opacity-70 mb-1 ${recommended ? 'text-sky-300' : 'text-slate-400'}`}>$</span>
          <span className="text-6xl md:text-7xl font-display font-bold tracking-tighter">{price}</span>
          <span className="text-lg font-medium opacity-70 mb-2">/mo</span>
      </div>
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold mt-2 ${recommended ? 'bg-sky-500/20 text-sky-200 border border-sky-500/20' : 'bg-slate-100 text-slate-700 border border-slate-200'}`}>
        {jobLimit}
      </div>
    </div>
    
    <button onClick={onEnterDashboard} className={`w-full py-4 rounded-xl text-sm font-bold transition-all mb-8 relative z-10 overflow-hidden group/btn ${
      recommended 
        ? 'bg-sky-500 text-white hover:bg-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.3)]' 
        : 'bg-slate-900 text-white hover:bg-slate-800'
    }`}>
      <span className="relative z-10">{buttonText}</span>
      {recommended && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />}
    </button>
    
    <div className={`text-xs font-bold uppercase tracking-widest mb-6 relative z-10 ${recommended ? 'text-slate-400' : 'text-slate-400'}`}>
      Included Features
    </div>
    
    <ul className="space-y-4 flex-1 relative z-10">
      {features.map((feat: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-sm font-medium leading-relaxed group/item">
              <div className={`mt-0.5 rounded-full p-0.5 transition-colors ${recommended ? 'bg-sky-500/20 text-sky-400 group-hover/item:bg-sky-500/40' : 'bg-sky-50 text-sky-600 group-hover/item:bg-sky-100'}`}>
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className={recommended ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
          </li>
      ))}
    </ul>
  </motion.div>
);

const AccordionItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <button 
        className={`w-full flex justify-between items-center text-left focus:outline-none group p-6 rounded-2xl transition-all duration-300 border ${isOpen ? 'bg-white border-slate-200 shadow-md shadow-slate-100/50' : 'bg-white/60 backdrop-blur-md border-slate-200/60 hover:bg-white hover:shadow-sm'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-slate-900 pr-8 group-hover:text-sky-600 transition-colors">{question}</span>
        <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-slate-900 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-900'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden px-6"
          >
            <p className="pt-2 pb-6 text-slate-600 leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function PricingPage({ onEnterDashboard }: { onEnterDashboard: () => void }) {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [roiJobValue, setRoiJobValue] = useState(250);
  const roiSubscriptionCost = 39;
  const calculatedRoi = roiJobValue / roiSubscriptionCost;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 20) {
          headerRef.current.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
          headerRef.current.classList.remove('bg-transparent');
        } else {
          headerRef.current.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
          headerRef.current.classList.add('bg-transparent');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featureList = [
    "Client CRM",
    "Job Scheduling",
    "Quote Templates",
    "Time Tracking",
    "Inventory Tracking",
    "Profit Tracking",
    "Maintenance Reminder Emails",
    "Review Requests"
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-sky-200 selection:text-sky-900 overflow-hidden">
      <LandingHeader onEnterDashboard={onEnterDashboard} headerRef={headerRef} />

      {/* SECTION 1 - PREMIUM HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 overflow-hidden flex flex-col items-center">
        {/* Subtle Background Textures */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_60%,transparent_100%)] opacity-30 pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-sky-50/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-400/10 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [Math.random() * -20, Math.random() * 20, Math.random() * -20],
                x: [Math.random() * -10, Math.random() * 10, Math.random() * -10],
                opacity: [0.2, 0.5, 0.2] 
              }}
              transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-1 h-1 rounded-full bg-sky-400"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="max-w-2xl pt-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              
              <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Simple Pricing That <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-500 animate-gradient-x bg-[length:200%_auto]">Grows With Your Business</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                Everything you need to schedule jobs, manage customers, track profits, send invoices, automate maintenance reminders and generate repeat business.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No Contracts</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Cancel Anytime</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 5-Day Free Trial</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No Credit Card Required</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Premium Floating UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-[600px] perspective-[2000px] mt-10 lg:mt-0"
          >
            {/* Main Mockup UI */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/50 shadow-2xl shadow-sky-900/5 bg-white backdrop-blur-xl bg-opacity-90">
              {/* Fake Window Header */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                </div>
              </div>
              {/* Fake UI Content */}
              <div className="p-6 grid grid-cols-2 gap-4 bg-slate-50/50">
                <div className="col-span-2 bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex justify-between items-center">
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Revenue This Month</div>
                    <div className="text-3xl font-display font-bold text-slate-900">$12,450.00</div>
                  </div>
                  <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-sky-500" />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium mb-2 uppercase tracking-wider">Today's Schedule</div>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <div className="text-sm font-bold text-slate-800">AC Tune-up</div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      <div className="text-sm font-bold text-slate-800">Diagnostic</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                   <div className="text-xs text-slate-500 font-medium mb-2 uppercase tracking-wider">Recent Reviews</div>
                   <div className="flex text-amber-400 gap-0.5 mb-2">
                     <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                   </div>
                   <div className="text-sm text-slate-600">"Great service, very fast!"</div>
                </div>
              </div>
            </div>

            {/* Floating KPI Cards */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-12 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Jobs Scheduled</p>
                  <p className="text-lg font-bold text-slate-900">+24</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-12 bottom-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Collection Rate</p>
                  <p className="text-lg font-bold text-slate-900">92%</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute left-10 -bottom-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Reviews Requested</p>
                  <p className="text-lg font-bold text-slate-900">18</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - PLAN SELECTION */}
      <section className="relative z-10 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Choose Your Plan</h2>
            <p className="text-slate-600 text-lg">Start small and upgrade only when your workload grows.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto relative">
            <PricingCard 
              tier="Solo Pro" 
              price="39" 
              recommended={true}
              delay={0.1}
              jobLimit="Up to 50 Jobs Per Month"
              subtitle="Ideal for growing service businesses."
              buttonText="Start 5-Day Free Trial"
              onEnterDashboard={() => navigate('/checkout?plan=solo-pro')}
              features={featureList} 
            />
            <PricingCard 
              tier="Solo Max" 
              price="79" 
              delay={0.2}
              jobLimit="51–100 Jobs Per Month"
              subtitle="Built for high-volume service businesses."
              buttonText="Start 5-Day Free Trial"
              onEnterDashboard={() => navigate('/checkout?plan=solo-max')}
              features={featureList} 
            />
          </div>

          {/* Billing Information */}
          <div className="max-w-3xl mx-auto mt-16 p-6 md:p-8 rounded-2xl bg-white border border-slate-200/60 shadow-xl shadow-slate-100/40 text-center">
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-950 mb-4 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-sky-500" />
              Billing Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600 font-medium text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>All plans include a free 5-day trial.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>Your subscription begins automatically when the trial ends unless cancelled beforehand.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>Cancel anytime during the trial to avoid being charged.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>Prices are displayed in USD.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>Applicable taxes may be added where required by law.</span>
              </div>
              <div className="flex items-start gap-2.5 md:col-span-2">
                <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>By subscribing, you agree to our Terms of Service, Privacy Policy and Refund Policy.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - VISUAL VALUE COMPARISON */}
      <section className="py-24 px-6 relative z-10 bg-slate-950 text-white overflow-hidden">
        {/* Subtle grid in dark section */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Everything Included. <span className="text-sky-400">No Upsells.</span></h2>
            <p className="text-slate-400 text-lg">Why piece together 5 different tools when FieldCore does it all for one price?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* FieldCore Side */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-[2rem] border border-sky-500/30 p-8 shadow-2xl shadow-sky-900/20 relative"
            >
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center shadow-lg shadow-sky-500/40">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">FieldCore</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['CRM', 'Scheduling', 'Quotes', 'Inventory', 'Profit Tracking', 'Review Requests', 'Maintenance Emails'].map(item => (
                  <span key={item} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-medium text-slate-300">{item}</span>
                ))}
              </div>
              <div className="border-t border-slate-800 pt-6">
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">One Subscription</div>
                <div className="text-4xl font-display font-bold text-white">$39<span className="text-xl text-slate-400">/mo</span></div>
              </div>
            </motion.div>

            {/* Typical Stack Side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 rounded-[2rem] border border-slate-800 p-8 opacity-70"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-400">Typical Software Stack</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center text-slate-400"><span>Scheduling Tool</span> <span>$49/mo</span></li>
                <li className="flex justify-between items-center text-slate-400"><span>CRM Tool</span> <span>$39/mo</span></li>
                <li className="flex justify-between items-center text-slate-400"><span>Review Software</span> <span>$99/mo</span></li>
                <li className="flex justify-between items-center text-slate-400"><span>Email Software</span> <span>$29/mo</span></li>
                <li className="flex justify-between items-center text-slate-400"><span>Invoice Software</span> <span>$15/mo</span></li>
              </ul>
              <div className="border-t border-slate-800 pt-6">
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Total Cost</div>
                <div className="text-4xl font-display font-bold text-slate-400 line-through decoration-red-500/50">$231<span className="text-xl">/mo</span></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - ROI CALCULATOR */}
      <section className="py-32 px-6 relative z-10 bg-[#0F172A] text-white overflow-hidden">
        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">1 Extra Job Pays For FieldCore</h2>
          <p className="text-slate-400 text-lg mb-16">Calculate your immediate return on investment.</p>
          
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-black/50">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="text-left space-y-8">
                <div>
                  <label className="block text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">Average Job Value</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-500">$</span>
                    <input 
                      type="number" 
                      value={roiJobValue}
                      onChange={(e) => setRoiJobValue(Number(e.target.value) || 0)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl py-4 pl-10 pr-4 text-2xl font-bold text-white focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">Monthly Subscription</label>
                  <div className="text-2xl font-bold text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded-xl py-4 px-4">
                    ${roiSubscriptionCost}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[250px]">
                  <div className="text-sky-400 text-sm font-bold tracking-widest uppercase mb-4">Return On Investment</div>
                  <div className="text-6xl md:text-8xl font-black font-display tracking-tighter text-white drop-shadow-lg flex items-baseline gap-1">
                    <AnimatedCounter from={0} to={calculatedRoi} duration={1.5} decimals={1} />
                    <span className="text-5xl md:text-6xl">x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 6 - WHY FIELDCORE COSTS LESS */}
      <section className="py-24 px-6 relative z-10 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why Is FieldCore So Affordable?</h2>
             <p className="text-slate-400 text-lg">Because solo operators should not pay for enterprise software.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Built For Solo Operators", desc: "You are not paying for fleet management, dispatch teams or enterprise reporting.", icon: Shield },
              { title: "No Per-Seat Pricing", desc: "One technician. One subscription. No hidden user fees as your revenue grows.", icon: Users },
              { title: "Only What You Need", desc: "Everything focused on scheduling, getting paid and generating repeat business.", icon: LayoutDashboard }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 relative z-10 group-hover:border-sky-500/50 transition-colors">
                  <card.icon className="w-7 h-7 text-slate-300 group-hover:text-sky-400 transition-colors" />
                </div>
                <h4 className="font-bold text-white text-xl mb-4 relative z-10">{card.title}</h4>
                <p className="text-slate-400 leading-relaxed relative z-10">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - FAQ */}
      <section className="py-24 px-6 bg-[#FAFAFA] relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How does the 5-day free trial work?", a: "You can use all features included in your selected plan for five days at no cost. If you cancel before the trial ends, you will not be charged." },
              { q: "When will I be charged?", a: "Your payment method will only be charged once your 5-day trial expires unless you cancel beforehand." },
              { q: "Can I cancel anytime?", a: "Yes. You can cancel your subscription at any time. If you cancel during your free trial, you will not be charged." },
              { q: "Do you offer refunds?", a: "Payments are generally non-refundable except where required by law or in limited circumstances such as duplicate charges or verified billing errors. Please see our Refund Policy for full details." },
              { q: "Can I upgrade or downgrade later?", a: "Yes. You can change your subscription plan at any time from your account settings." },
              { q: "What happens if I exceed my monthly job limit?", a: "You'll be prompted to upgrade to the next plan to continue creating additional jobs." },
              { q: "Is my payment secure?", a: "Yes. Payments are securely processed through our trusted payment partners using industry-standard encryption." }
            ].map((faq, i) => (
              <AccordionItem key={i} index={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - FINAL CTA */}
      <section className="py-32 px-6 relative z-10 bg-slate-950 overflow-hidden w-full">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] opacity-30 pointer-events-none" />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/20 blur-[150px] rounded-full pointer-events-none"
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white max-w-3xl mx-auto leading-tight mb-8">
              Stop Chasing Paperwork<br/>
              <span className="text-sky-400">Start Running Your Business</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
              Join solo HVAC operators using FieldCore to stay organized, get paid faster and generate repeat business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => navigate('/checkout')} className="w-full sm:w-auto px-10 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 text-lg flex items-center justify-center gap-2 group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-700 hover:border-slate-600 text-lg flex items-center justify-center gap-2">
                Book Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

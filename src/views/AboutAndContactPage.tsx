import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Header as LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/Footer';
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Wrench,
  Users,
  CalendarDays,
  FileSignature,
  Receipt,
  CreditCard,
  Clock,
  Package,
  TrendingUp,
  Mail,
  Star,
  User,
  Sparkles,
  Lightbulb,
  Search,
  Settings,
  Rocket,
  LineChart,
  ArrowRight
} from 'lucide-react';

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Floating Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, (i % 2 === 0 ? 50 : -50), 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-blue-500/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function AboutAndContactPage({ onEnterDashboard }: { onEnterDashboard: () => void }) {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const timeline = [
    { icon: Lightbulb, title: "Idea" },
    { icon: Search, title: "Research" },
    { icon: Settings, title: "Build" },
    { icon: Rocket, title: "Launch" },
    { icon: LineChart, title: "Improve Every Month" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col relative overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      <ParticleBackground />
      <LandingHeader onEnterDashboard={onEnterDashboard} />

      <main className="flex-1 relative z-10 w-full flex flex-col pt-20">
        
        {/* SECTION 1 - PAGE TITLE (White with subtle radial gradient) */}
        <section className="relative w-full py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none" />
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-blue-200/20 blur-[120px] pointer-events-none"
          />
          
          <div className="max-w-[1150px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold tracking-widest text-slate-500 uppercase mb-8 shadow-sm">
                Our Story
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                About Us
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-8 leading-tight">
                Built for the People Who Keep Businesses Running
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl font-medium">
                FieldCore was built by two founders who wanted to simplify business software for solo tradespeople. Instead of enterprise complexity, we focused on the tools independent professionals actually need.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 - OUR STORY (Very light gray) */}
        <section className="relative w-full py-24 md:py-32 bg-[#fafafa] border-y border-slate-100 overflow-hidden">
          <div className="max-w-[1150px] mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold tracking-widest text-slate-500 uppercase mb-12 shadow-sm">
                Our Origin
              </div>
              
              <div className="group relative bg-white/60 backdrop-blur-2xl border border-white/60 rounded-[24px] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.1)] transition-all duration-500 hover:-translate-y-1 w-full">
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/40 to-white/10 pointer-events-none" />
                <div className="absolute inset-0 rounded-[24px] border border-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                  <div className="space-y-8">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
                      Why We Built FieldCore
                    </h3>
                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                      <p>
                        Most field service software is built for companies with office staff, dispatchers, and multiple trucks. Independent HVAC technicians, plumbers, electricians, and other solo service professionals are forced to pay for complicated systems packed with features they'll never use.
                      </p>
                      <p className="font-semibold text-slate-800">
                        We believed there was a better way.
                      </p>
                      <p>
                        So we created FieldCore—a platform designed specifically for solo operators who handle every part of their business themselves. From answering customer calls and sending quotes to scheduling jobs, tracking profits, and bringing customers back with automated reminders, everything works together in one place.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative h-[450px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-400/10 blur-[100px] rounded-full" />
                    
                    {/* Floating UI Elements */}
                    <motion.div 
                      animate={{ y: [-10, 10, -10], rotate: [-1, 1, -1] }} 
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-10 left-5 md:-left-5 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100/50 w-48"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <LayoutDashboard className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="w-20 h-2 rounded bg-slate-100" />
                      </div>
                      <div className="space-y-2">
                        <div className="w-full h-2 rounded bg-slate-50" />
                        <div className="w-3/4 h-2 rounded bg-slate-50" />
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      animate={{ y: [15, -15, 15], rotate: [2, -2, 2] }} 
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-20 left-10 md:left-0 bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-slate-100/50 w-56 z-10"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <FileText className="w-5 h-5 text-sky-500" />
                        <div className="text-xs font-bold text-sky-500 bg-sky-50 px-2 py-0.5 rounded">INVOICE</div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="w-16 h-2 rounded bg-slate-100" />
                          <div className="w-10 h-2 rounded bg-slate-200" />
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="w-20 h-2 rounded bg-slate-100" />
                          <div className="w-12 h-2 rounded bg-slate-200" />
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }} 
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                      className="absolute top-20 right-0 md:-right-5 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100/50 w-48"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-indigo-500" />
                        <div className="w-16 h-2 rounded bg-slate-100" />
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        {Array.from({length: 12}).map((_, i) => (
                          <div key={i} className={`h-8 rounded ${i === 4 ? 'bg-indigo-100 border border-indigo-200' : 'bg-slate-50'}`} />
                        ))}
                      </div>
                    </motion.div>

                    <motion.div 
                      animate={{ y: [10, -10, 10], rotate: [3, -3, 3] }} 
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                      className="absolute bottom-10 right-10 md:right-5 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-[0_8px_20px_rgb(0,0,0,0.05)] border border-slate-100/50 flex items-center justify-center"
                    >
                      <Wrench className="w-6 h-6 text-slate-400" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 - OUR MISSION (Dark navy gradient, cinematic) */}
        <section className="relative w-full py-32 overflow-hidden bg-slate-950">
          {/* Animated Cinematic Background */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent blur-[100px] z-0"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(2,6,23,1)_100%)] opacity-50" />
          
          <div className="max-w-[1150px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/50 text-xs font-bold tracking-widest text-blue-300 uppercase mb-12 shadow-sm backdrop-blur-sm">
                Our Mission
              </div>

              <div className="relative group mx-auto max-w-5xl rounded-[32px] p-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-blue-900/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" 
                  animate={{ x: ['-100%', '100%'] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }} 
                />
                
                <div className="relative bg-slate-950/80 backdrop-blur-2xl rounded-[31px] p-12 md:p-20 overflow-hidden shadow-2xl">
                  {/* Spotlight */}
                  <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-10 leading-[1.1] relative z-10">
                    Helping Solo Tradespeople Run Professional Businesses Without Enterprise Software.
                  </h3>
                  <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium relative z-10">
                    We believe great software should remove complexity—not create it. Every feature in FieldCore exists to help independent professionals save time, win more jobs, and grow their business.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 - WHAT'S INSIDE FIELDCORE (White, Bento Grid) */}
        <section className="relative w-full py-24 md:py-32 bg-white border-b border-slate-100 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-transparent" />
          
          <div className="max-w-[1150px] mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold tracking-widest text-slate-500 uppercase mb-8 shadow-sm">
                Platform Capabilities
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 text-center">
                What's Inside FieldCore
              </h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px]">
              
              {/* Large Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 group bg-white border border-slate-200/80 rounded-[24px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.1)] hover:border-blue-200 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-end"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-8 left-8 w-12 h-12 bg-slate-50 group-hover:bg-white text-slate-600 group-hover:text-blue-600 rounded-xl flex items-center justify-center shadow-sm transition-colors duration-500 group-hover:shadow-md">
                  <Users className="w-6 h-6" />
                </div>
                
                <div className="relative z-10 mt-auto">
                  <h4 className="font-display font-bold text-2xl text-slate-900 mb-2">Customer CRM</h4>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-sm">Manage all your clients, history, and notes in one perfectly organized place.</p>
                </div>
              </motion.div>

              {/* Large Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 group bg-white border border-slate-200/80 rounded-[24px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.1)] hover:border-indigo-200 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-end"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-8 left-8 w-12 h-12 bg-slate-50 group-hover:bg-white text-slate-600 group-hover:text-indigo-600 rounded-xl flex items-center justify-center shadow-sm transition-colors duration-500 group-hover:shadow-md">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <div className="relative z-10 mt-auto">
                  <h4 className="font-display font-bold text-2xl text-slate-900 mb-2">Job Scheduling</h4>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-sm">Easy drag-and-drop calendar for all your jobs, estimates, and tasks.</p>
                </div>
              </motion.div>

              {/* Smaller Cards */}
              {[
                { icon: FileSignature, name: "Quote Templates", desc: "Send professional quotes in minutes.", color: "hover:border-emerald-200", bg: "from-emerald-50/50", textHover: "group-hover:text-emerald-600" },
                { icon: Receipt, name: "Automatic Invoicing", desc: "Get paid faster with automated invoices.", color: "hover:border-sky-200", bg: "from-sky-50/50", textHover: "group-hover:text-sky-600" },
                { icon: CreditCard, name: "Payment Links", desc: "Accept credit cards directly.", color: "hover:border-violet-200", bg: "from-violet-50/50", textHover: "group-hover:text-violet-600" },
                { icon: Clock, name: "Time Tracking", desc: "Track hours spent accurately.", color: "hover:border-amber-200", bg: "from-amber-50/50", textHover: "group-hover:text-amber-600" },
                { icon: Package, name: "Inventory", desc: "Keep track of parts and materials.", color: "hover:border-rose-200", bg: "from-rose-50/50", textHover: "group-hover:text-rose-600" },
                { icon: TrendingUp, name: "Profit Tracking", desc: "Know exactly how much you're making.", color: "hover:border-teal-200", bg: "from-teal-50/50", textHover: "group-hover:text-teal-600" },
                { icon: Mail, name: "Maintenance Emails", desc: "Automate follow-ups for recurring work.", color: "hover:border-blue-200", bg: "from-blue-50/50", textHover: "group-hover:text-blue-600" },
                { icon: Star, name: "Review Requests", desc: "Automatically ask happy customers for reviews.", color: "hover:border-orange-200", bg: "from-orange-50/50", textHover: "group-hover:text-orange-600" }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`col-span-1 row-span-1 group bg-white border border-slate-200/80 rounded-[20px] p-6 shadow-sm hover:shadow-[0_15px_30px_rgb(0,0,0,0.06)] transition-all duration-400 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-end ${feature.color}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                  
                  <div className={`absolute top-6 left-6 w-10 h-10 bg-slate-50 group-hover:bg-white text-slate-500 ${feature.textHover} rounded-lg flex items-center justify-center transition-colors duration-400 group-hover:shadow-sm`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  
                  <div className="relative z-10 mt-auto">
                    <h4 className="font-bold text-slate-900 mb-1">{feature.name}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 - OUR VALUES (Light blue gradient) */}
        <section className="relative w-full py-24 md:py-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/80 via-slate-50/50 to-white overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-100/30 to-transparent pointer-events-none" />
          
          <div className="max-w-[1150px] mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center mb-16 text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold tracking-widest text-slate-500 uppercase mb-8 shadow-sm">
                Core Values
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
                What Drives Us
              </h3>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: User, title: "Built for Solo Operators", desc: "Every workflow is designed around one technician managing one business." },
                { icon: Sparkles, title: "Simple by Design", desc: "No unnecessary enterprise features. Just the tools that matter." },
                { icon: TrendingUp, title: "Affordable Growth", desc: "Professional software shouldn't require enterprise pricing." }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-[24px] p-10 hover:shadow-[0_20px_40px_rgb(59,130,246,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating accent shape */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm mb-8 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-500 group-hover:-translate-y-1">
                      <value.icon className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-2xl font-display font-bold text-slate-900 mb-4">{value.title}</h4>
                    <p className="text-slate-500 text-lg leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 - HOW WE STARTED (White) */}
        <section className="relative w-full py-24 md:py-32 bg-white border-t border-slate-100 overflow-hidden">
          <div className="max-w-[1150px] mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center mb-24 text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold tracking-widest text-slate-500 uppercase mb-8 shadow-sm">
                Our Journey
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
                How We Started
              </h3>
            </motion.div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Animated Line Container */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-100 -translate-y-1/2 overflow-hidden hidden md:block">
                <motion.div 
                  className="absolute top-0 bottom-0 left-0 bg-blue-500 origin-left"
                  style={{ scaleX }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
                    className="flex flex-row md:flex-col items-center text-left md:text-center gap-6 md:gap-6 group"
                  >
                    <div className="w-16 h-16 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center shadow-sm relative z-10 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgb(59,130,246,0.3)] transition-all duration-300 group-hover:scale-110 bg-clip-padding">
                      <item.icon className="w-6 h-6 text-slate-500 group-hover:text-blue-600 transition-colors" />
                    </div>
                    
                    {/* Mobile vertical line */}
                    {i !== timeline.length - 1 && (
                      <div className="w-[2px] h-full bg-slate-100 absolute left-8 top-16 -z-10 md:hidden overflow-hidden">
                         <motion.div 
                           className="w-full bg-blue-500 origin-top"
                           style={{ scaleY: scaleX }}
                         />
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{item.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 - CALL TO ACTION (Dark premium rounded card) */}
        <section className="relative w-full py-12 md:py-24 bg-white px-6">
          <div className="max-w-[1150px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden bg-slate-950 rounded-[32px] p-12 md:p-24 text-center shadow-[0_20px_60px_rgb(0,0,0,0.1)] border border-slate-800"
            >
              {/* Subtle animated blue gradient */}
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -right-1/2 w-[100%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent blur-[80px] pointer-events-none"
              />
              
              <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-tight mb-8">
                  Ready to Spend Less Time on Paperwork?
                </h3>
                <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12 max-w-2xl">
                  Join independent HVAC technicians, plumbers, electricians, and other solo professionals using FieldCore to run their business more efficiently.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                  <button onClick={() => navigate('/checkout')} className="group relative w-full sm:w-auto px-10 py-5 bg-white text-slate-950 font-bold text-lg rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 overflow-hidden flex items-center justify-center gap-2 hover:-translate-y-1">
                    <span className="relative z-10">Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  <Link to="/support" className="group relative w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-bold text-lg rounded-2xl border border-slate-700 hover:bg-slate-800 hover:border-slate-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 overflow-hidden flex items-center justify-center hover:-translate-y-1">
                    <span className="relative z-10">Contact Us</span>
                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

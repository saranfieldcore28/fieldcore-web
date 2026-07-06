import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useInView, animate, AnimatePresence } from 'framer-motion';
import { CheckCircle, Calendar, DollarSign, Mail, Star, Package, Lock, Shield, Server, Database, EyeOff, Phone, Wrench, FileText, CreditCard, TrendingUp, Droplets, Zap, Wind, TreePine, Paintbrush, Hammer, ChevronDown, Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from '../components/LandingHeader';
import { FieldCoreLogo } from '../components/FieldCoreLogo';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({ value, prefix = "" }: { value: number, prefix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          setCount(Math.floor(v));
        }
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}</span>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const CalendarPreview = () => (
  <div className="p-6 h-full flex flex-col">
    <div className="flex justify-between items-center mb-6">
      <div className="font-bold text-slate-900">Oct 24, 2026</div>
      <div className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-bold rounded-full">Today</div>
    </div>
    <div className="flex-1 border-t border-slate-200 pt-4 flex gap-4">
      <div className="w-12 text-xs text-slate-400 font-medium space-y-8 mt-2">
        <div>8 AM</div><div>9 AM</div><div>10 AM</div>
      </div>
      <div className="flex-1 relative">
        <div className="absolute top-2 left-0 right-0 bg-indigo-50 border-l-4 border-indigo-500 p-3 rounded-r-lg shadow-sm">
          <div className="font-bold text-indigo-900 text-sm">HVAC Repair</div>
          <div className="text-xs text-indigo-700 mt-1">124 Main St.</div>
        </div>
        <div className="absolute top-24 left-0 right-0 bg-orange-50 border-l-4 border-orange-500 p-3 rounded-r-lg shadow-sm">
          <div className="font-bold text-orange-900 text-sm">Annual Maintenance</div>
          <div className="text-xs text-orange-700 mt-1">88 Park Ave.</div>
        </div>
      </div>
    </div>
  </div>
);

const EstimatePreview = () => (
  <div className="p-8 h-full flex flex-col justify-center">
    <div className="bg-white rounded-xl shadow-md border border-slate-200/60 p-6 transform rotate-1 hover:rotate-0 transition-transform">
      <div className="flex justify-between border-b border-slate-100 pb-4 mb-4">
        <div>
          <div className="text-xs text-slate-500 font-bold tracking-widest mb-1">ESTIMATE</div>
          <div className="font-bold text-slate-900">EST-2045</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-500 font-bold tracking-widest mb-1">TOTAL</div>
          <div className="font-bold text-slate-900 text-lg">$1,450.00</div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600 font-medium">Compressor Unit</span>
          <span className="font-medium text-slate-900">$850.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600 font-medium">Labor (4 hrs)</span>
          <span className="font-medium text-slate-900">$600.00</span>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-slate-100">
        <button className="w-full bg-slate-950 text-white rounded-lg py-3 text-sm font-bold tracking-wide hover:bg-slate-800 transition-colors">Approve & Sign</button>
      </div>
    </div>
  </div>
);

const EmailPreview = () => (
  <div className="p-6 h-full flex flex-col justify-center">
    <div className="bg-white rounded-xl shadow-md border border-slate-200/60 p-5 overflow-hidden">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">JD</div>
        <div>
          <div className="font-bold text-sm text-slate-900">Spring Tune-Up Offer</div>
          <div className="text-xs text-slate-500">Sent to 452 customers</div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-slate-100 rounded w-3/4"></div>
        <div className="h-4 bg-slate-100 rounded w-full"></div>
        <div className="h-4 bg-slate-100 rounded w-5/6"></div>
      </div>
      <div className="mt-6 flex gap-2">
        <div className="flex-1 bg-sky-50 rounded p-3 text-center">
          <div className="text-xl font-bold text-sky-700">42%</div>
          <div className="text-[10px] uppercase font-bold text-sky-600 mt-1">Open Rate</div>
        </div>
        <div className="flex-1 bg-green-50 rounded p-3 text-center">
          <div className="text-xl font-bold text-green-700">12</div>
          <div className="text-[10px] uppercase font-bold text-green-600 mt-1">Jobs Booked</div>
        </div>
      </div>
    </div>
  </div>
);

const ReminderPreview = () => (
  <div className="p-8 h-full flex flex-col justify-center items-center">
    <div className="relative">
      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto animate-bounce">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 text-center relative z-10 w-64">
        <div className="font-bold text-slate-900 text-sm mb-1">Time for Maintenance!</div>
        <div className="text-xs text-slate-500 mb-3">It's been 12 months since your last service.</div>
        <button className="text-xs font-bold bg-slate-900 text-white w-full py-2 rounded-lg">Book Service</button>
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-slate-200 transform rotate-45 z-0"></div>
    </div>
  </div>
);

const InvoicePreview = () => (
  <div className="p-6 h-full flex flex-col justify-center">
    <div className="bg-white rounded-xl shadow-md border border-slate-200/60 flex flex-col overflow-hidden">
      <div className="bg-slate-900 p-5 text-white flex justify-between items-center">
        <div>
          <div className="text-xs text-slate-400 font-bold tracking-widest mb-1">INVOICE</div>
          <div className="font-bold">INV-9021</div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold">$450.00</div>
          <div className="text-xs text-green-400 font-bold mt-1">PAID</div>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-center gap-4">
        <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
           <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center">
             <CreditCard className="w-5 h-5 text-slate-500" />
           </div>
           <div>
             <div className="text-sm font-bold text-slate-900">Paid via Stripe</div>
             <div className="text-xs text-slate-500">Visa ending in 4242</div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

const ProfitPreview = () => (
  <div className="p-6 h-full flex flex-col justify-center">
    <div className="bg-white rounded-xl shadow-md border border-slate-200/60 p-5">
      <div className="mb-6">
        <div className="text-xs text-slate-500 font-bold tracking-widest mb-1">MONTHLY PROFIT</div>
        <div className="text-3xl font-display font-bold text-slate-900">$12,450</div>
        <div className="text-xs text-green-600 font-bold mt-2 flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> +14% vs last month
        </div>
      </div>
      <div className="flex items-end gap-2 h-32 pt-4 border-t border-slate-100">
        {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
          <div key={i} className="flex-1 bg-sky-100 rounded-t-sm hover:bg-sky-200 transition-colors relative group">
            <div className="absolute bottom-0 left-0 w-full bg-sky-500 rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }}></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ReviewPreview = () => (
  <div className="p-6 h-full flex flex-col justify-center items-center">
    <div className="bg-white p-5 rounded-xl shadow-xl border border-slate-200 w-full max-w-xs transform -rotate-2">
      <div className="flex justify-between items-start mb-3">
         <div className="flex gap-1">
           {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
         </div>
         <div className="text-xs text-slate-400 font-medium">2 days ago</div>
      </div>
      <p className="text-sm text-slate-700 italic mb-4">"Fast, professional, and left the place cleaner than they found it. Highly recommend!"</p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-700 font-bold text-xs">SM</div>
        <div className="text-sm font-bold text-slate-900">Sarah M.</div>
      </div>
    </div>
  </div>
);

const InventoryPreview = () => (
  <div className="p-6 h-full flex flex-col justify-center">
    <div className="bg-white rounded-xl shadow-md border border-slate-200/60 overflow-hidden">
      <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
         <div className="font-bold text-sm text-slate-900">Truck Inventory</div>
         <div className="text-xs px-2 py-1 bg-red-100 text-red-700 font-bold rounded">2 Low Stock</div>
      </div>
      <div className="divide-y divide-slate-100">
        {[
          { name: "Copper Pipe 1/2\"", count: 45, status: "good" },
          { name: "PVC Fittings", count: 12, status: "good" },
          { name: "HVAC Filters", count: 3, status: "low" },
        ].map((item, i) => (
          <div key={i} className="p-4 flex justify-between items-center">
             <div className="text-sm font-medium text-slate-700">{item.name}</div>
             <div className="flex items-center gap-3">
               <div className="text-sm font-bold text-slate-900">{item.count}</div>
               <div className={`w-2 h-2 rounded-full ${item.status === 'low' ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CrmPreview = () => (
  <div className="p-6 h-full flex flex-col justify-center">
     <div className="bg-white p-5 rounded-xl shadow-md border border-slate-200/60">
       <div className="flex items-center gap-4 mb-6">
         <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center">
           <span className="text-xl font-bold text-slate-400">RC</span>
         </div>
         <div>
           <div className="font-bold text-lg text-slate-900">Robert Chen</div>
           <div className="text-sm text-slate-500">1422 Elm Street</div>
         </div>
       </div>
       <div className="space-y-3">
         <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-2 rounded">
           <Phone className="w-4 h-4" /> (555) 019-2834
         </div>
         <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-2 rounded">
           <Wrench className="w-4 h-4" /> 3 Past Jobs
         </div>
         <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-2 rounded">
           <DollarSign className="w-4 h-4" /> LTV: $3,240
         </div>
       </div>
     </div>
  </div>
);

const GenericPreview = ({ title, icon: Icon, color }: any) => (
  <div className="p-6 h-full flex flex-col justify-center items-center text-center">
     <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${color}`}>
        <Icon className="w-10 h-10 text-white" />
     </div>
     <div className="font-bold text-xl text-slate-900 mb-2">{title}</div>
     <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto"></div>
  </div>
);

const PaymentPreview = () => (
  <div className="p-6 h-full flex flex-col justify-center">
    <div className="bg-white rounded-xl shadow-md border border-slate-200/60 overflow-hidden">
      <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
         <div className="font-bold text-sm text-slate-900">Recent Payments</div>
         <div className="text-xs px-2 py-1 bg-green-100 text-green-700 font-bold rounded">+$2,450</div>
      </div>
      <div className="divide-y divide-slate-100">
        {[
          { name: "Invoice #INV-9021", amount: "$450.00", status: "Paid", time: "2h ago" },
          { name: "Invoice #INV-9020", amount: "$1,200.00", status: "Paid", time: "5h ago" },
          { name: "Invoice #INV-9019", amount: "$800.00", status: "Paid", time: "1d ago" },
        ].map((item, i) => (
          <div key={i} className="p-4 flex justify-between items-center">
             <div>
               <div className="text-sm font-bold text-slate-900">{item.name}</div>
               <div className="text-xs text-slate-500 mt-0.5">{item.time}</div>
             </div>
             <div className="text-right">
               <div className="text-sm font-bold text-slate-900">{item.amount}</div>
               <div className="text-xs text-green-600 font-medium mt-0.5">{item.status}</div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FollowUpPreview = () => (
  <div className="p-6 h-full flex flex-col justify-center">
    <div className="bg-white rounded-xl shadow-md border border-slate-200/60 overflow-hidden">
      <div className="p-4 border-b border-slate-100 bg-slate-50">
        <div className="font-bold text-sm text-slate-900">Automated Follow Ups</div>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4 text-sky-600" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">Post-Job Check In</div>
            <div className="text-xs text-slate-500 mt-1">Sends 2 days after job completion to ensure satisfaction.</div>
            <div className="mt-2 flex items-center gap-2 text-xs font-medium text-sky-600">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span> Active
            </div>
          </div>
        </div>
        <div className="flex gap-4 opacity-50">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4 text-slate-500" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">1-Month Reminder</div>
            <div className="text-xs text-slate-500 mt-1">Sends 30 days after job for future needs.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LoyaltyPreview = () => (
  <div className="p-6 h-full flex flex-col justify-center">
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-md border border-amber-200/50 p-6 text-center">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-amber-100">
        <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
      </div>
      <div className="font-bold text-lg text-slate-900 mb-1">VIP Customer</div>
      <div className="text-sm text-slate-600 mb-4">Robert has completed 5 jobs with you this year.</div>
      <div className="bg-white rounded-lg p-3 border border-amber-100 flex justify-between items-center text-sm">
        <span className="font-medium text-slate-700">Loyalty Discount</span>
        <span className="font-bold text-amber-600">10% OFF</span>
      </div>
    </div>
  </div>
);

const HistoryPreview = () => (
  <div className="p-6 h-full flex flex-col justify-center">
    <div className="bg-white rounded-xl shadow-md border border-slate-200/60 overflow-hidden p-5">
      <div className="font-bold text-sm text-slate-900 mb-4">Job History: 1422 Elm St</div>
      <div className="relative border-l-2 border-slate-100 ml-3 space-y-6">
        <div className="relative pl-6">
          <div className="absolute -left-[9px] top-1 w-4 h-4 bg-sky-500 rounded-full border-4 border-white shadow-sm"></div>
          <div className="text-sm font-bold text-slate-900">A/C Tune Up</div>
          <div className="text-xs text-slate-500 mt-0.5">May 12, 2026 • $150.00</div>
        </div>
        <div className="relative pl-6">
          <div className="absolute -left-[9px] top-1 w-4 h-4 bg-slate-300 rounded-full border-4 border-white shadow-sm"></div>
          <div className="text-sm font-bold text-slate-900">Furnace Repair</div>
          <div className="text-xs text-slate-500 mt-0.5">Nov 03, 2025 • $450.00</div>
        </div>
        <div className="relative pl-6">
          <div className="absolute -left-[9px] top-1 w-4 h-4 bg-slate-300 rounded-full border-4 border-white shadow-sm"></div>
          <div className="text-sm font-bold text-slate-900">Initial Inspection</div>
          <div className="text-xs text-slate-500 mt-0.5">Oct 15, 2025 • $85.00</div>
        </div>
      </div>
    </div>
  </div>
);

const ReportPreview = () => (
  <div className="p-6 h-full flex flex-col justify-center">
    <div className="bg-white rounded-xl shadow-md border border-slate-200/60 p-5">
      <div className="flex justify-between items-end mb-6">
        <div>
          <div className="font-bold text-sm text-slate-900">Revenue by Service</div>
          <div className="text-xs text-slate-500 mt-1">Last 30 Days</div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-slate-900">$18,240</div>
          <div className="text-xs text-green-600 font-bold mt-1 flex items-center justify-end gap-1"><TrendingUp className="w-3 h-3"/> 12%</div>
        </div>
      </div>
      <div className="space-y-3">
        {[
          { name: "Repairs", percent: 65, color: "bg-indigo-500" },
          { name: "Installations", percent: 25, color: "bg-sky-400" },
          { name: "Maintenance", percent: 10, color: "bg-amber-400" },
        ].map((item, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
              <span>{item.name}</span>
              <span>{item.percent}%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FeatureRow = ({ num, title, features }: { num: string, title: string, features: { title: string, preview: React.ReactNode }[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col lg:flex-row gap-12 lg:gap-24 py-20 relative group/row"
    >
      {/* Animated Divider */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "circOut" }}
        className="absolute top-0 left-0 w-full h-[1px] bg-slate-200/80 origin-left"
      />

      <div className="lg:w-5/12 shrink-0 flex flex-col justify-center relative z-10">
        <div className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-6">{num}</div>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-950 tracking-tight mb-12">{title}</h3>
        
        <div className="flex flex-col gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              className="cursor-pointer group flex items-center"
            >
              <div className={`text-2xl md:text-3xl font-medium tracking-tight transition-all duration-300 flex items-center gap-4 ${activeIndex === idx ? 'text-slate-950 translate-x-3' : 'text-slate-400 group-hover:text-slate-600'}`}>
                <span className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-orange-500 opacity-100 scale-100' : 'bg-slate-300 opacity-0 scale-50 group-hover:opacity-100'}`}></span>
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-7/12 flex items-center justify-center relative min-h-[350px] lg:min-h-[450px]">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl shadow-sky-900/5 border border-slate-200/50 overflow-hidden relative aspect-[4/3] flex items-center justify-center transform lg:translate-y-4 lg:group-hover/row:translate-y-0 transition-transform duration-700 ease-out">
          {/* Subtle grid background inside preview window */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-50 z-0" />
          
          <AnimatePresence mode="wait">
             <motion.div
               key={activeIndex}
               initial={{ opacity: 0, y: 15, scale: 0.98 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: -15, scale: 0.98 }}
               transition={{ duration: 0.4, ease: "easeOut" }}
               className="absolute inset-0 z-10"
             >
               {features[activeIndex].preview}
             </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

import FeaturesIncludedSection from '../components/FeaturesIncludedSection';

const faqs = [
  {
    question: "Who is FieldCore built for?",
    answer: "FieldCore is designed specifically for solo field service professionals including HVAC technicians, plumbers, electricians, appliance repair specialists, cleaners, landscapers, locksmiths, handymen, and other independent tradespeople."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes. Every plan includes a free trial so you can explore FieldCore before subscribing."
  },
  {
    question: "Can I use FieldCore on my phone?",
    answer: "Yes. FieldCore works on desktop, tablet, and mobile devices so you can manage your business from anywhere."
  },
  {
    question: "Do I need multiple employees?",
    answer: "No. FieldCore was built specifically for solo operators and one-person businesses."
  },
  {
    question: "What features are included?",
    answer: "Depending on your plan, FieldCore includes customer management, scheduling, quote templates, invoicing, payment links, inventory tracking, profit tracking, reminder emails, and review requests."
  },
  {
    question: "Can I upgrade or downgrade later?",
    answer: "Yes. You can change your subscription at any time."
  },
  {
    question: "Is my business data secure?",
    answer: "Yes. We use industry-standard security practices to help protect your business information."
  },
  {
    question: "How do I contact support?",
    answer: "You can contact us anytime through our Support page or by emailing work@fieldcore.co.in."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. You may cancel your subscription at any time."
  },
  {
    question: "Will FieldCore continue improving?",
    answer: "Absolutely. We regularly release improvements and new features based on customer feedback."
  }
];

const FAQSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-10 py-32 px-6 border-t border-sky-900/5 bg-slate-50 overflow-hidden">
      {/* Background glow and texture */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[1000px] h-[1000px] bg-sky-400/10 rounded-full blur-[120px] mix-blend-multiply" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-950 tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know before getting started with FieldCore.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-slate-200/60 rounded-[20px] shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all duration-300 hover:-translate-y-[2px] overflow-hidden group"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-lg pr-8">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-slate-400 group-hover:text-sky-500 transition-colors"
                  >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const LandingPage: React.FC<{ onEnterDashboard: () => void }> = ({ onEnterDashboard }) => {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: workflowScroll } = useScroll({
    target: workflowRef,
    offset: ["start center", "end center"]
  });

  useGSAP(() => {
    // Header Animation
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
    <div ref={containerRef} className="min-h-screen bg-slate-50 font-sans text-slate-950 selection:bg-indigo-500/30 relative">
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-[100] mix-blend-overlay"></div>
      {/* 1. HEADER */}
      <Header onEnterDashboard={onEnterDashboard} headerRef={headerRef} />

      {/* HERO & TIMELINE WRAPPER */}
      <div className="relative overflow-hidden bg-sky-50">
        {/* Advanced Layered Background Texture */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           {/* Light Blue Water/Liquid Animations */}
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
           <motion.div 
             animate={{ rotate: [0, 360] }}
             transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
             className="absolute top-[-50%] right-[-10%] w-[110%] h-[110%] opacity-40 mix-blend-color-burn"
             style={{
               background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)',
               borderRadius: '50% 50% 60% 40% / 40% 60% 50% 50%'
             }}
           />

           {/* Water Caustics / Glints Reflection Simulation */}
           <motion.div
             animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[10%] left-[20%] w-[50%] h-[50%] bg-white/50 blur-[90px] rounded-full"
           />
           <motion.div
             animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
             transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
             className="absolute top-[40%] right-[10%] w-[40%] h-[40%] bg-white/40 blur-[80px] rounded-full"
           />

           {/* Subtle Noise Texture Overlay to give it a physical/water surface feel */}
           <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </div>

        {/* 2. HERO */}
        <section id="home" className="relative z-10 pt-12 pb-16 lg:pt-20 lg:pb-28 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-8 text-center lg:text-left lg:pt-10"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tighter"
            >
              Field Service Management for <br className="hidden md:block"/>
              <motion.span 
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-600 to-orange-600 bg-[length:200%_auto] inline-block"
              >
                Solo Trades
              </motion.span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed tracking-tight"
            >
              Manage jobs, send invoices, get paid faster — all in one app. Built specifically for the workflow of solo plumbers, electricians & HVAC technicians.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 pt-8"
            >
              <button onClick={() => navigate('/checkout')} className="group relative px-8 py-4 bg-slate-950 text-white rounded-none hover:shadow-[6px_6px_0px_rgba(234,88,12,1)] transition-all duration-300 border-2 border-slate-950 flex items-center justify-center gap-3 text-[13px] font-bold uppercase tracking-[0.15em] active:translate-y-1 active:translate-x-1 active:shadow-none">
                <span className="relative z-10">Start Free Trial</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="group px-8 py-4 bg-transparent text-slate-950 border-2 border-slate-950 rounded-none hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-3 text-[13px] font-bold uppercase tracking-[0.15em]">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Watch Demo</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image/Screenshot */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative perspective-[2000px] w-full flex justify-center lg:justify-end lg:-translate-y-8"
          >
            <div className="transform lg:rotate-y-[-10deg] lg:rotate-z-[2deg] lg:scale-110 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-900/20 border-[10px] border-slate-900 bg-slate-900 w-full max-w-[420px] aspect-[9/19] relative ring-1 ring-slate-800/50 flex flex-col">
              {/* iPhone Notch/Island */}
              <div className="absolute top-2 inset-x-0 h-6 bg-black rounded-full w-24 mx-auto z-20 flex justify-center items-center">
                 <div className="w-12 h-1 bg-slate-900/80 rounded-full"></div>
              </div>
              
              <div className="relative bg-black flex-1 w-full overflow-hidden rounded-[2rem]">
                 <video 
                   src="/dashboard-preview.mp4" 
                   autoPlay 
                   loop 
                   muted 
                   playsInline 
                   preload="auto"
                   className="w-full h-full object-cover block" 
                 />
                 <div className="absolute inset-0 pointer-events-none shadow-[inset_0_4px_20px_rgba(0,0,0,0.15)] ring-1 ring-inset ring-white/10 rounded-[2rem]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. WORKFLOW TIMELINE */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-950 tracking-tight mb-6"
            >
              From First Call To Final Payment.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              FieldCore keeps every customer, job, invoice and review organized in one simple workflow.
            </motion.p>
          </div>

          <div ref={workflowRef} className="relative max-w-5xl mx-auto px-4 md:px-0">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-[2px] bg-sky-900/10 hidden md:block">
              <motion.div 
                className="h-full bg-slate-950 rounded-full origin-left"
                style={{ scaleX: workflowScroll }}
              />
            </div>
            
            {/* Mobile Vertical Line */}
            <div className="absolute top-0 bottom-0 left-12 w-[2px] bg-sky-900/10 block md:hidden">
              <motion.div 
                className="w-full bg-slate-950 rounded-full origin-top"
                style={{ scaleY: workflowScroll }}
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between relative z-10 gap-12 md:gap-4">
              {[
                { icon: Phone, title: "Customer Calls", desc: "A new lead contacts you." },
                { icon: Calendar, title: "Schedule Job", desc: "Book the job and assign a time." },
                { icon: Wrench, title: "Complete Work", desc: "Track progress and completion." },
                { icon: FileText, title: "Send Invoice", desc: "Generate a professional invoice." },
                { icon: Star, title: "Request Review", desc: "Automatically ask for feedback." },
                { icon: CreditCard, title: "Get Paid", desc: "Track payments seamlessly." },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex md:flex-col items-center md:text-center gap-6 md:gap-4 flex-1"
                >
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 z-10 relative hover:border-slate-400 hover:scale-[1.05] transition-all duration-300">
                    <step.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 1: Everything Runs From One Dashboard */}
      <section className="relative z-10 py-24 px-6 border-t border-sky-900/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-950 tracking-tight mb-6"
            >
              Everything Runs From One Dashboard
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Manage customers, jobs, invoices, reviews and payments without switching tools.
            </motion.p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Callouts (Desktop only) */}
            <div className="hidden lg:block absolute -left-16 top-1/4 z-20 text-right">
              <div className="flex items-center gap-4 justify-end">
                <div>
                  <div className="font-bold text-slate-900">Scheduling</div>
                </div>
                <div className="w-12 h-px bg-slate-300"></div>
              </div>
            </div>

            <div className="hidden lg:block absolute -left-16 bottom-1/4 z-20 text-right">
              <div className="flex items-center gap-4 justify-end">
                <div>
                  <div className="font-bold text-slate-900">Invoicing</div>
                </div>
                <div className="w-12 h-px bg-slate-300"></div>
              </div>
            </div>

            <div className="hidden lg:block absolute -right-16 top-1/4 z-20 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-slate-300"></div>
                <div>
                  <div className="font-bold text-slate-900">Customer Reviews</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute -right-16 bottom-1/4 z-20 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-slate-300"></div>
                <div>
                  <div className="font-bold text-slate-900">Profit Tracking</div>
                </div>
              </div>
            </div>

            {/* Large Dashboard Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10 w-[100%] mx-auto rounded-xl bg-white border border-slate-200/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col aspect-[4/3] md:aspect-[16/10]"
            >
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              </div>
              <div className="flex-1 flex overflow-hidden">
                 {/* Sidebar */}
                 <div className="w-16 md:w-56 border-r border-slate-100 bg-slate-50 flex flex-col items-center md:items-start py-4 shrink-0">
                    <div className="px-4 mb-6 hidden md:block">
                      <FieldCoreLogo className="h-10 w-auto text-slate-950" />
                    </div>
                    <div className="w-10 h-10 mb-6 md:hidden flex items-center justify-center">
                      <FieldCoreLogo className="h-5 w-auto text-slate-950" />
                    </div>
                    <div className="w-full px-2 md:px-3 space-y-1">
                      <div className="p-2 md:px-3 md:py-2 rounded-lg bg-indigo-50/60 text-indigo-700 flex items-center gap-3 font-medium text-sm">
                         <Calendar className="w-4 h-4 shrink-0" />
                         <span className="hidden md:inline">Schedule</span>
                      </div>
                      <div className="p-2 md:px-3 md:py-2 rounded-lg text-slate-600 flex items-center gap-3 font-medium text-sm">
                         <FileText className="w-4 h-4 shrink-0" />
                         <span className="hidden md:inline">Invoices</span>
                      </div>
                      <div className="p-2 md:px-3 md:py-2 rounded-lg text-slate-600 flex items-center gap-3 font-medium text-sm">
                         <Star className="w-4 h-4 shrink-0" />
                         <span className="hidden md:inline">Reviews</span>
                      </div>
                      <div className="p-2 md:px-3 md:py-2 rounded-lg text-slate-600 flex items-center gap-3 font-medium text-sm">
                         <DollarSign className="w-4 h-4 shrink-0" />
                         <span className="hidden md:inline">Payments</span>
                      </div>
                    </div>
                 </div>
                 {/* Main Content Area */}
                 <div className="flex-1 bg-white flex flex-col overflow-hidden">
                    <div className="h-12 border-b border-slate-100 flex items-center justify-between px-4 md:px-6 shrink-0">
                      <div className="text-sm font-bold text-slate-900">Dashboard Overview</div>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-100"></div>
                        <div className="w-6 h-6 rounded-full bg-slate-900"></div>
                      </div>
                    </div>
                    <div className="flex-1 p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
                       <div className="md:col-span-2 space-y-4 overflow-y-auto">
                         {/* Calendar/Jobs List Mockup */}
                         <div className="h-28 border border-slate-100 rounded-xl bg-slate-50/50 p-4 flex flex-col justify-between">
                           <div className="flex justify-between items-start">
                             <div className="font-bold text-slate-900 text-sm md:text-base">Repair HVAC - Smith Residence</div>
                             <div className="text-[10px] md:text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">In Progress</div>
                           </div>
                           <div className="flex gap-4 text-xs md:text-sm text-slate-500">
                             <span className="flex items-center gap-1"><Phone className="w-3 h-3 md:w-4 md:h-4"/> 555-0192</span>
                             <span className="flex items-center gap-1"><Wrench className="w-3 h-3 md:w-4 md:h-4"/> 2h 15m tracked</span>
                           </div>
                         </div>
                         <div className="h-28 border border-slate-100 rounded-xl bg-white p-4 flex flex-col justify-between">
                           <div className="flex justify-between items-start">
                             <div className="font-bold text-slate-900 text-sm md:text-base">Install Water Heater - Johnson</div>
                             <div className="text-[10px] md:text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded">2:00 PM</div>
                           </div>
                           <div className="flex gap-4 text-xs md:text-sm text-slate-500">
                             <span className="flex items-center gap-1"><Phone className="w-3 h-3 md:w-4 md:h-4"/> 555-0144</span>
                           </div>
                         </div>
                       </div>
                       <div className="space-y-4 hidden md:flex md:flex-col">
                          <div className="flex-1 border border-slate-100 rounded-xl bg-white p-4">
                             <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Weekly Revenue</div>
                             <div className="text-xl md:text-2xl font-display font-bold text-slate-900">$4,250</div>
                             <div className="mt-4 h-12 w-full flex items-end gap-1">
                               <div className="flex-1 bg-slate-100 rounded-t h-[40%]"></div>
                               <div className="flex-1 bg-slate-100 rounded-t h-[60%]"></div>
                               <div className="flex-1 bg-indigo-500 rounded-t h-[100%]"></div>
                               <div className="flex-1 bg-slate-100 rounded-t h-[30%]"></div>
                               <div className="flex-1 bg-slate-100 rounded-t h-[50%]"></div>
                             </div>
                          </div>
                          <div className="flex-1 border border-slate-100 rounded-xl bg-white p-4">
                             <div className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Recent Invoices</div>
                             <div className="space-y-2">
                               <div className="flex justify-between items-center text-xs">
                                 <div className="font-medium text-slate-900">#INV-089</div>
                                 <div className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">Paid</div>
                               </div>
                               <div className="flex justify-between items-center text-xs">
                                 <div className="font-medium text-slate-900">#INV-088</div>
                                 <div className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">Paid</div>
                               </div>
                               <div className="flex justify-between items-center text-xs">
                                 <div className="font-medium text-slate-900">#INV-087</div>
                                 <div className="text-amber-600 font-bold bg-amber-50 px-1.5 py-0.5 rounded">Pending</div>
                               </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Feature Architecture */}
      <FeaturesIncludedSection />

      {/* SECTION 3: Know Your Numbers */}
      <section className="relative z-10 py-24 px-6 border-t border-sky-900/5">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-slate-950 tracking-tight mb-16"
          >
            Know Your Numbers
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Revenue This Month", value: 12450, prefix: "$" },
              { title: "Invoices Paid", value: 32, prefix: "" },
              { title: "Reviews Generated", value: 18, prefix: "" },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-slate-200/60 p-10 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2"
              >
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{metric.title}</div>
                <div className="text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight">
                  <AnimatedCounter value={metric.value} prefix={metric.prefix} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION FAQ */}
      <FAQSection />

      {/* SECTION 4: Final CTA */}
      <section className="relative z-10 py-32 px-6 border-t border-sky-900/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.1]">
              Spend Less Time On Admin.<br />More Time On Jobs.
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to run a solo trade business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5 pt-8">
              <button onClick={() => navigate('/checkout')} className="group relative px-8 py-4 bg-slate-950 text-white rounded-none hover:shadow-[6px_6px_0px_rgba(234,88,12,1)] transition-all duration-300 border-2 border-slate-950 flex items-center justify-center gap-3 text-[13px] font-bold uppercase tracking-[0.15em] active:translate-y-1 active:translate-x-1 active:shadow-none">
                <span className="relative z-10">Start Free Trial</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="group px-8 py-4 bg-transparent text-slate-950 border-2 border-slate-950 rounded-none hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-3 text-[13px] font-bold uppercase tracking-[0.15em]">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Watch Demo</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      </div>

      {/* 10. FOOTER */}
      <footer className="bg-slate-900 pt-20 pb-10 px-6">
         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-16">
            <div className="col-span-2 md:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <FieldCoreLogo className="h-24 w-auto text-white" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Manage jobs, send invoices, and get paid faster. Built for the solo tradesperson.</p>
            </div>
            <div className="space-y-4">
               <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider">Product</h4>
               <ul className="space-y-3 text-slate-400 text-sm">
                 <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                 <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
                 <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
                 <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
               </ul>
            </div>
            <div className="space-y-4">
               <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider">Company</h4>
               <ul className="space-y-3 text-slate-400 text-sm">
                 <li><Link to="/about-and-contact" className="hover:text-white transition-colors">About Us & Contact Us</Link></li>
                 <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                 <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                 <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
               </ul>
            </div>
            <div className="space-y-4">
               <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider">Connect</h4>
               <ul className="space-y-3 text-slate-400 text-sm">
                 <li><a href="https://x.com/FieldCore5rt0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
                 <li><a href="https://www.linkedin.com/in/field-core-50161a419" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                 <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
               </ul>
            </div>
         </div>
         <div className="max-w-7xl mx-auto text-center md:text-left text-slate-500 text-xs">
            © 2026 FieldCore. All rights reserved.
         </div>
      </footer>
    </div>
  );
};

export default LandingPage;

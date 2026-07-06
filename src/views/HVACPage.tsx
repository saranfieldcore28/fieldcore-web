import React from 'react';
import { IndustryTemplate } from './IndustryTemplate';
import { Calendar, DollarSign, Mail, Star, Package, Clock, TrendingUp, Search, Bell, CheckCircle } from 'lucide-react';

const HVACPage = ({ onEnterDashboard }: { onEnterDashboard: () => void }) => {
  return (
    <IndustryTemplate
      onEnterDashboard={onEnterDashboard}
      title="HVAC Business Management For Solo Technicians"
      heroHeadline="Run Your HVAC Business Without The Paperwork"
      heroSubheadline="Schedule jobs, track profits, send maintenance reminders and grow repeat business from one simple platform."
      heroPlaceholder="[HVAC HERO IMAGE PLACEHOLDER]"
      heroCaption="Replace with real HVAC technician photo later."
      heroVisualContent={
        <div className="relative w-full h-full group">
           <img fetchpriority="high" 
             src="/hvac header.webp" 
             alt="HVAC Technician on Roof" 
             referrerPolicy="no-referrer"
             className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent mix-blend-overlay"></div>
           <div className="absolute bottom-6 left-6 right-6">
             <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                   <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 </div>
                 <div>
                   <p className="text-sm font-bold text-slate-900">Job Complete</p>
                   <p className="text-xs text-slate-500">Invoice sent automatically</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      }
      builtForList={[
        "Solo HVAC Technicians",
        "Independent HVAC Contractors",
        "AC Repair Specialists",
        "HVAC Maintenance Businesses"
      ]}
      problemsHeadline="Common HVAC Problems"
      problems={[
        { title: "Summer Rush Chaos", description: "Too many emergency AC calls and no organized schedule." },
        { title: "Lost Maintenance Revenue", description: "Customers forget annual tune-ups." },
        { title: "Unknown Profitability", description: "Not sure whether repairs, installs or maintenance plans make the most money." }
      ]}
      featuresHeadline="How FieldCore Helps HVAC Businesses"
      features={[
        { 
          title: "Job Scheduling", 
          description: "Track maintenance visits, emergency breakdowns and installations in one calendar.", 
          placeholderText: "",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="/calender.webp" 
                alt="Job Scheduling Calendar" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -left-4 top-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-64 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-bold text-slate-800">Today's Schedule</span>
                </div>
                <div className="space-y-2">
                   <div className="bg-sky-50 rounded-lg p-2 border border-sky-100 border-l-4 border-l-sky-500">
                     <p className="text-[10px] font-bold text-slate-700">8:00 AM - AC Install</p>
                     <p className="text-[9px] text-slate-500">John Smith • 123 Main St</p>
                   </div>
                   <div className="bg-red-50 rounded-lg p-2 border border-red-100 border-l-4 border-l-red-500">
                     <p className="text-[10px] font-bold text-slate-700">1:30 PM - Emergency Repair</p>
                     <p className="text-[9px] text-slate-500">Sarah Jenkins • No Cooling</p>
                   </div>
                </div>
              </div>
            </div>
          )
        },
        { 
          title: "Profit Tracking", 
          description: "Compare profits from repairs, installs and maintenance contracts.", 
          placeholderText: "",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Profit Dashboard" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -right-4 bottom-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-56 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3 border-b border-slate-100 pb-2">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">Monthly Revenue</span>
                </div>
                <div className="text-2xl font-display font-bold text-slate-900">$24,500</div>
                <div className="flex items-center gap-1 mt-1 text-emerald-600">
                   <TrendingUp className="w-3 h-3" />
                   <span className="text-[10px] font-bold">+12% vs last month</span>
                </div>
                <div className="mt-3 space-y-1">
                   <div className="flex justify-between text-[9px] text-slate-600"><span>Installs</span><span className="font-bold text-slate-900">$14k</span></div>
                   <div className="flex justify-between text-[9px] text-slate-600"><span>Repairs</span><span className="font-bold text-slate-900">$8k</span></div>
                   <div className="flex justify-between text-[9px] text-slate-600"><span>Maintenance</span><span className="font-bold text-slate-900">$2.5k</span></div>
                </div>
              </div>
            </div>
          )
        },
        { 
          title: "Maintenance Reminder Emails", 
          description: "Automatically remind customers when seasonal HVAC service is due.", 
          placeholderText: "",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="/email.webp" 
                alt="Email Automation" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -left-4 top-1/3 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-64 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold text-slate-800">Automated Campaign</span>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-100 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                   <p className="text-[10px] font-bold text-slate-700">Subject: Your Annual AC Tune-Up</p>
                   <p className="text-[9px] text-slate-500 mt-2 leading-relaxed">Hi John, summer is approaching. It's time for your annual AC maintenance to ensure everything is running efficiently.</p>
                   <div className="mt-3 inline-block bg-indigo-600 text-white text-[8px] font-bold px-2 py-1 rounded">Book Now</div>
                </div>
              </div>
            </div>
          )
        },
        { 
          title: "Review Requests", 
          description: "Automatically request reviews after completed jobs.", 
          placeholderText: "",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" 
                alt="Review Requests" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -right-4 top-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-64 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3 border-b border-slate-100 pb-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-slate-800">New Google Review</span>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-1 text-amber-400">
                    <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                  </div>
                  <p className="text-[10px] text-slate-600 leading-relaxed font-medium">"Extremely professional and fast. Fixed our AC unit within an hour of calling. Highly recommended!"</p>
                  <p className="text-[9px] text-slate-400 mt-1">- Michael R.</p>
                </div>
              </div>
            </div>
          )
        },
        { 
          title: "Inventory Tracking", 
          description: "Track filters, refrigerant, capacitors, compressors and other HVAC parts.", 
          placeholderText: "",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="/inventory.webp" 
                alt="Inventory Tracking" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -left-4 bottom-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-56 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">Parts Inventory</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100">
                     <div>
                       <p className="text-[10px] font-bold text-slate-900">R-410A Cylinder</p>
                       <p className="text-[9px] text-slate-500">SKU: R410-25</p>
                     </div>
                     <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">8 in stock</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100">
                     <div>
                       <p className="text-[10px] font-bold text-slate-900">Run Capacitor 45/5</p>
                       <p className="text-[9px] text-slate-500">SKU: CAP-455</p>
                     </div>
                     <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">Low: 2 left</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]}
      whyChooseHeadline="Why HVAC Technicians Choose FieldCore"
      whyChooseList={[
        "Simple setup",
        "Mobile friendly",
        "Built for solo operators",
        "No enterprise complexity"
      ]}
      ctaHeadline="Ready To Organize Your HVAC Business?"
    />
  );
};

export default HVACPage;

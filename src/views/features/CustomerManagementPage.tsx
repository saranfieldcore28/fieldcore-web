import React from 'react';
import { FeatureTemplate } from '../FeatureTemplate';
import { Users, History, FileCheck, StickyNote, Building2 } from 'lucide-react';

const CustomerManagementPage = ({ onEnterDashboard }: { onEnterDashboard: () => void }) => {
  return (
    <FeatureTemplate
      onEnterDashboard={onEnterDashboard}
      title="Customer Management"
      heroHeadline="Every Customer. Every Job. One Place."
      heroSubheadline="Store customer information, job history, notes and communication records in a single organized system."
      heroPlaceholder=""
      heroVisualContent={
        <div className="relative w-full h-full group">
           <img fetchpriority="high" 
             src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
             alt="Customer Management Dashboard" 
             referrerPolicy="no-referrer"
             className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent mix-blend-overlay"></div>
           <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-xl border border-white/20 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-bold text-slate-900">142 Active Clients</span>
                </div>
              </div>
           </div>
           <div className="absolute bottom-6 left-6 right-6">
             <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                   <Building2 className="w-6 h-6 text-slate-600" />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-slate-900">Oakridge Commercial Group</p>
                   <p className="text-xs text-slate-500">4 Properties • 12 Active Contracts</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      }
      workflowSteps={[
        "Customer Added",
        "Quote Sent",
        "Job Completed",
        "Follow Up Logged"
      ]}
      scenarios={[
        "Returning HVAC customer",
        "Repeat plumbing customer",
        "Commercial electrical client"
      ]}
      productSections={[
        {
          title: "Service History",
          description: "Never walk into a job blind. See every past quote, invoice, and completed job for any customer before you even arrive on site.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="/service history.webp" 
                alt="Service History" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -left-4 bottom-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-64 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3">
                  <History className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold text-slate-800">Timeline</span>
                </div>
                <div className="space-y-3 relative pl-2 border-l-2 border-slate-100 ml-2">
                   <div className="relative">
                     <div className="absolute -left-[13px] top-1 w-2 h-2 rounded-full bg-emerald-500"></div>
                     <p className="text-[10px] font-bold text-slate-700">Oct 12, 2025</p>
                     <p className="text-[9px] text-slate-500 mt-1">AC Unit Replaced • $4,200</p>
                   </div>
                   <div className="relative">
                     <div className="absolute -left-[13px] top-1 w-2 h-2 rounded-full bg-sky-500"></div>
                     <p className="text-[10px] font-bold text-slate-700">May 04, 2024</p>
                     <p className="text-[9px] text-slate-500 mt-1">Spring Tune-Up • $149</p>
                   </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Job Records",
          description: "Keep all job-specific details neatly organized. Attach photos, manuals, diagrams, and inspection reports directly to the job file.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="/job records.webp" 
                alt="Job Records" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -right-4 top-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-56 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">Job Documentation</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-100 mb-2">
                  <div className="w-6 h-6 rounded bg-slate-200 shrink-0 overflow-hidden"><img loading="lazy" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" /></div>
                  <span className="text-[9px] font-medium text-slate-600 truncate">before_repair.jpg</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                  <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center shrink-0"><span className="text-[8px] font-bold text-red-600">PDF</span></div>
                  <span className="text-[9px] font-medium text-slate-600 truncate">inspection_report.pdf</span>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Customer Notes",
          description: "Leave internal notes about access codes, pets, or specific customer preferences to ensure a flawless experience every time.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop" 
                alt="Customer Notes" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -left-4 top-1/3 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-56 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                 <div className="flex items-center gap-3 mb-3">
                  <StickyNote className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-bold text-slate-800">Internal Notes</span>
                 </div>
                 <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                   <p className="text-[10px] font-medium text-slate-700 leading-relaxed">Gate code is 4920. Watch out for their dog (Buster) in the backyard, very friendly but tries to escape.</p>
                 </div>
              </div>
            </div>
          )
        }
      ]}
      faqs={[
        {
          question: "Can I import my existing customer list?",
          answer: "Yes, you can easily import your existing clients via CSV or from your previous software."
        },
        {
          question: "Can I manage commercial clients with multiple properties?",
          answer: "Absolutely. FieldCore allows you to attach multiple service locations to a single commercial billing account."
        },
        {
          question: "Is my customer data secure?",
          answer: "We use enterprise-grade encryption to ensure your client data is secure, backed up, and only accessible by you."
        }
      ]}
    />
  );
};

export default CustomerManagementPage;

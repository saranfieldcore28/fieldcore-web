import React from 'react';
import { FeatureTemplate } from '../FeatureTemplate';
import { CheckCircle, Calendar, FileText, Clock, Users } from 'lucide-react';

const SchedulingAndQuotingPage = ({ onEnterDashboard }: { onEnterDashboard: () => void }) => {
  return (
    <FeatureTemplate
      onEnterDashboard={onEnterDashboard}
      title="Scheduling & Quoting"
      heroHeadline="From Customer Call To Scheduled Job"
      heroSubheadline="Track enquiries, send quotes, schedule work and keep every job organized from one place."
      heroPlaceholder=""
      heroVisualContent={
        <div className="relative w-full h-full group">
           <img fetchpriority="high" 
             src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop" 
             alt="Technician checking schedule on tablet" 
             referrerPolicy="no-referrer"
             className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
           />
           {/* Blur overlay for Lincoln School of Engineering logo */}
           <div className="absolute top-[35%] left-[25%] w-[15%] h-[15%] backdrop-blur-xl rounded-full mix-blend-overlay bg-black/10"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent mix-blend-overlay"></div>
           <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-xl border border-white/20 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-bold text-slate-900">3 Jobs Today</span>
                </div>
              </div>
           </div>
           <div className="absolute bottom-6 left-6 right-6">
             <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                   <CheckCircle className="w-6 h-6 text-green-600" />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-slate-900">Quote Approved</p>
                   <p className="text-xs text-slate-500">HVAC Installation • $4,200</p>
                 </div>
                 <button className="ml-auto px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800">
                   Schedule Job
                 </button>
               </div>
             </div>
           </div>
        </div>
      }
      workflowSteps={[
        "Customer Calls",
        "Quote Created",
        "Quote Approved",
        "Job Scheduled",
        "Work Completed"
      ]}
      scenarios={[
        "HVAC installation quote",
        "Emergency plumbing repair",
        "Electrical inspection booking"
      ]}
      productSections={[
        {
          title: "Create Quotes Faster",
          description: "Generate professional quotes from the field in seconds. Use pre-built templates and pricebook items to speed up your estimating process.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              {/* Decorative Blueprint Texture */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              
              <img loading="lazy" 
                src="/create quote faster.webp" 
                alt="Creating Quotes" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              
              {/* Floating Card */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-48 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold text-slate-800">New Quote</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-slate-100 rounded w-full"></div>
                  <div className="h-2 bg-slate-100 rounded w-2/3"></div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100">
                     <span className="text-xs font-medium text-slate-500">Total</span>
                     <span className="text-sm font-bold text-slate-900">$1,250</span>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Schedule Every Job",
          description: "A drag-and-drop calendar built for trades. See your day, week, or month at a glance and dispatch jobs with a single click.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="/schedule every job.webp" 
                alt="Calendar Scheduling" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -left-4 top-1/3 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-56 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-bold text-slate-800">Dispatch Update</span>
                </div>
                <div className="bg-sky-50 rounded-lg p-2 border border-sky-100">
                  <p className="text-xs font-medium text-slate-700">Tech Assigned: Mike R.</p>
                  <p className="text-[10px] text-slate-500 mt-1">Arrival: 2:00 PM</p>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Track Quote Status",
          description: "Never lose track of a potential job. See which quotes are draft, sent, viewed, approved, or declined automatically.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Quote Status Tracking" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -right-4 bottom-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-48 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-600">Viewed</span>
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-600">Approved</span>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Keep Customer History Attached",
          description: "Every quote and scheduled job stays linked to the customer profile. Access past quotes, invoices, and notes instantly.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Customer History" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -left-4 bottom-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-56 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                 <div className="flex items-center gap-3 mb-3">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold text-slate-800">Client Profile</span>
                </div>
                <div className="bg-white rounded-lg p-2 border border-slate-100 shadow-sm">
                  <p className="text-xs font-medium text-slate-700">Sarah Jenkins</p>
                  <p className="text-[10px] text-slate-500 mt-1">3 Past Jobs • $8,400 LTV</p>
                </div>
              </div>
            </div>
          )
        }
      ]}
      faqs={[
        {
          question: "Can I send quotes directly from my phone?",
          answer: "Yes, FieldCore is completely mobile-responsive. You can build and email quotes directly from the job site."
        },
        {
          question: "Can customers approve quotes online?",
          answer: "Absolutely. Customers receive a secure link where they can view and digitally approve your quotes."
        },
        {
          question: "Does it sync with my calendar?",
          answer: "FieldCore serves as your central source of truth for scheduling, eliminating the need for separate calendar apps."
        }
      ]}
    />
  );
};

export default SchedulingAndQuotingPage;

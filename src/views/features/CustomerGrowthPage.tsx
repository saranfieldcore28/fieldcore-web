import React from 'react';
import { FeatureTemplate } from '../FeatureTemplate';
import { Star, MessageSquare, Mail, RefreshCw, ThumbsUp } from 'lucide-react';

const CustomerGrowthPage = ({ onEnterDashboard }: { onEnterDashboard: () => void }) => {
  return (
    <FeatureTemplate
      onEnterDashboard={onEnterDashboard}
      title="Customer Growth"
      heroHeadline="Turn One Job Into Repeat Business"
      heroSubheadline="Automatically request reviews, send maintenance reminders and stay connected with customers."
      heroPlaceholder=""
      heroVisualContent={
        <div className="relative w-full h-full group">
           <img fetchpriority="high" 
             src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop" 
             alt="Customer Satisfaction" 
             referrerPolicy="no-referrer"
             className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent mix-blend-overlay"></div>
           <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-xl border border-white/20 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-slate-900">4.9/5 Average Rating</span>
                </div>
              </div>
           </div>
           <div className="absolute bottom-6 left-6 right-6">
             <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                   <MessageSquare className="w-6 h-6 text-indigo-600" />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-slate-900">Automated Follow-up Sent</p>
                   <p className="text-xs text-slate-500">"Hi Sarah, thanks for choosing us!"</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      }
      workflowSteps={[
        "Job Completed",
        "Review Request Sent",
        "Customer Leaves Review",
        "Maintenance Reminder Sent",
        "Repeat Job Booked"
      ]}
      scenarios={[
        "Annual AC service reminder",
        "Water tank maintenance reminder",
        "Electrical safety inspection reminder"
      ]}
      productSections={[
        {
          title: "Review Requests",
          description: "Automatically send SMS or email review requests as soon as a job is marked complete. Build your local Google ranking effortlessly.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" 
                alt="Review Automation" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-64 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3 border-b border-slate-100 pb-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-slate-800">New Google Review</span>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-1 text-amber-400">
                    <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                  </div>
                  <p className="text-[10px] text-slate-600 leading-relaxed font-medium">"Mike was incredibly fast and professional. He explained everything clearly and got our AC working in no time. Highly recommend!"</p>
                  <p className="text-[9px] text-slate-400 mt-1">- John D.</p>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Email Reminders",
          description: "Set up recurring reminders for seasonal maintenance. Bring customers back year after year without lifting a finger.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="/email.webp" 
                alt="Email Reminders" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -left-4 bottom-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-64 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-bold text-slate-800">Automated Emails</span>
                </div>
                <div className="space-y-2 relative">
                   <div className="bg-sky-50 rounded-lg p-2 border border-sky-100 absolute w-full z-10">
                     <p className="text-[10px] font-bold text-slate-700">Subject: Time for your Fall Tune-Up!</p>
                     <p className="text-[9px] text-slate-500 mt-1 truncate">Hi there, it's been 6 months since your last...</p>
                   </div>
                   <div className="bg-white rounded-lg p-2 border border-slate-100 absolute w-full top-3 opacity-50 scale-95 z-0">
                     <p className="text-[10px] font-bold text-slate-700">Subject: Annual AC Maintenance</p>
                   </div>
                   <div className="h-16"></div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Customer Follow-Ups",
          description: "Send automated 'thank you' messages or follow-up surveys to ensure customer satisfaction and build lasting relationships.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop" 
                alt="Follow Ups" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -right-4 top-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-56 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                    <ThumbsUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Job Follow-Up</p>
                    <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Sent via SMS to +1 (555) 0192. "Is everything working perfectly today?"</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Repeat Business Automation",
          description: "Turn one-off emergency calls into lifetime clients by keeping your business top-of-mind through consistent, professional communication.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074&auto=format&fit=crop" 
                alt="Repeat Business" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -left-4 top-1/3 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-56 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                 <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold text-slate-800">Customer Lifetime Value</span>
                 </div>
                 <div className="text-2xl font-display font-bold text-slate-900">$12,450</div>
                 <p className="text-[10px] text-slate-500 mt-1">Acquired May 2021</p>
                 <div className="mt-3 text-[10px] font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded inline-block">
                   7 total jobs completed
                 </div>
              </div>
            </div>
          )
        }
      ]}
      faqs={[
        {
          question: "Can I link this to my Google Business profile?",
          answer: "Yes, you can drop your direct Google Review link into the automated messages."
        },
        {
          question: "Do the automated messages look professional?",
          answer: "All messages are clean, professional, and customizable to match your brand's voice."
        },
        {
          question: "Will I annoy my customers with too many emails?",
          answer: "You have complete control over the frequency and timing of reminders, ensuring communication is helpful, not spammy."
        }
      ]}
    />
  );
};

export default CustomerGrowthPage;

import React from 'react';
import { FeatureTemplate } from '../FeatureTemplate';
import { DollarSign, TrendingUp, BarChart3, PieChart, AlertCircle } from 'lucide-react';

const ProfitTrackingPage = ({ onEnterDashboard }: { onEnterDashboard: () => void }) => {
  return (
    <FeatureTemplate
      onEnterDashboard={onEnterDashboard}
      title="Profit Tracking"
      heroHeadline="Know Which Jobs Actually Make Money"
      heroSubheadline="Track revenue, expenses and profitability across every service you provide."
      heroPlaceholder=""
      heroVisualContent={
        <div className="relative w-full h-full group">
           <img fetchpriority="high" 
             src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
             alt="Profit Dashboard Analytics" 
             referrerPolicy="no-referrer"
             className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent mix-blend-overlay"></div>
           <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <div>
                     <p className="text-xs font-medium text-slate-500">Weekly Profit</p>
                     <p className="text-sm font-bold text-slate-900">$2,450.00</p>
                  </div>
                </div>
              </div>
           </div>
           <div className="absolute bottom-6 right-6">
             <div className="bg-slate-900/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-slate-700 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               <div className="flex items-center gap-4">
                 <div>
                   <p className="text-xs text-slate-400">Highest Margin Service</p>
                   <p className="text-sm font-bold text-white">AC Installation (42%)</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      }
      workflowSteps={[
        "Job Completed",
        "Costs Recorded",
        "Invoice Paid",
        "Profit Calculated"
      ]}
      scenarios={[
        "Compare AC installation profit vs maintenance profit",
        "Compare emergency plumbing jobs vs planned jobs",
        "Compare electrical inspection revenue vs installation revenue"
      ]}
      productSections={[
        {
          title: "Track Revenue Per Job",
          description: "See exactly how much revenue each job generated and compare it against the costs of materials and labor to find your true margin.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop" 
                alt="Track Revenue" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-56 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3 border-b border-slate-100 pb-2">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">Job #1042 Breakdown</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-500">Revenue</span>
                    <span className="text-xs font-medium text-slate-900">$850.00</span>
                  </div>
                  <div className="flex justify-between items-center text-red-500">
                    <span className="text-[10px]">Parts/Labor</span>
                    <span className="text-xs font-medium">-$320.00</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-800">Net Profit</span>
                    <span className="text-xs font-bold text-emerald-600">$530.00</span>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Understand Your Best Services",
          description: "Identify which types of jobs are the most profitable for your business. Focus your marketing on the services that actually grow your bottom line.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Service Profitability" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -left-4 bottom-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-64 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3">
                  <PieChart className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold text-slate-800">Top Performers</span>
                </div>
                <div className="space-y-3">
                   <div>
                     <div className="flex justify-between text-[10px] mb-1">
                       <span className="text-slate-600 font-medium">Installations</span>
                       <span className="text-slate-900 font-bold">48% Margin</span>
                     </div>
                     <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-indigo-500 w-[48%]"></div></div>
                   </div>
                   <div>
                     <div className="flex justify-between text-[10px] mb-1">
                       <span className="text-slate-600 font-medium">Repairs</span>
                       <span className="text-slate-900 font-bold">32% Margin</span>
                     </div>
                     <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-sky-400 w-[32%]"></div></div>
                   </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Identify Low-Margin Work",
          description: "Spot the jobs that are eating up your time without generating profit. Adjust your pricing or stop offering services that don't pay off.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Low Margin Report" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -right-4 bottom-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-56 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-1">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Low Margin Alert</p>
                    <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Diagnostic calls are averaging 12% margin this month due to fuel costs.</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Make Better Pricing Decisions",
          description: "Use historical data to price future jobs accurately. Never guess on a quote again when you know exactly what similar jobs cost to deliver.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop" 
                alt="Pricing Insights" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -left-4 top-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-56 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                 <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-bold text-slate-800">Historical Avg Cost</span>
                 </div>
                 <div className="text-2xl font-display font-bold text-slate-900">$450.00</div>
                 <p className="text-[10px] text-slate-500 mt-1">Based on 24 similar jobs</p>
                 <div className="mt-3 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded inline-block">
                   Recommend quoting $850+
                 </div>
              </div>
            </div>
          )
        }
      ]}
      faqs={[
        {
          question: "How difficult is it to track costs per job?",
          answer: "It's built into your workflow. Add materials and labor costs directly to the job card, and FieldCore does the math instantly."
        },
        {
          question: "Can I export these reports for my accountant?",
          answer: "Yes, all profit tracking data can be exported into standard formats for your bookkeeper or accountant."
        },
        {
          question: "Do I need to be an accounting expert?",
          answer: "Not at all. FieldCore is designed for tradespeople, presenting clear, simple numbers so you know exactly where your business stands."
        }
      ]}
    />
  );
};

export default ProfitTrackingPage;

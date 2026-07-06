import React from 'react';
import { FeatureTemplate } from '../FeatureTemplate';
import { Package, Search, BarChart2, ShieldAlert, TrendingDown } from 'lucide-react';

const InventoryTrackingPage = ({ onEnterDashboard }: { onEnterDashboard: () => void }) => {
  return (
    <FeatureTemplate
      onEnterDashboard={onEnterDashboard}
      title="Inventory Tracking"
      heroHeadline="Always Know What Parts You Have Available"
      heroSubheadline="Track inventory levels, materials usage and job costs without spreadsheets."
      heroPlaceholder=""
      heroVisualContent={
        <div className="relative w-full h-full group">
           <img fetchpriority="high" 
             src="/inventory tracking header.webp" 
             alt="Inventory Warehouse" 
             referrerPolicy="no-referrer"
             className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent mix-blend-overlay"></div>
           <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-xl border border-white/20 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-900">Truck 1 Stock: 84%</span>
                </div>
              </div>
           </div>
           <div className="absolute bottom-6 left-6 right-6">
             <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                   <ShieldAlert className="w-6 h-6 text-amber-600" />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-slate-900">Low Stock Alert</p>
                   <p className="text-xs text-slate-500">1/2" Copper Fittings (Only 14 left)</p>
                 </div>
                 <button className="ml-auto px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800">
                   Reorder
                 </button>
               </div>
             </div>
           </div>
        </div>
      }
      workflowSteps={[
        "Part Purchased",
        "Inventory Updated",
        "Used On Job",
        "Stock Adjusted"
      ]}
      scenarios={[
        "HVAC filter inventory",
        "Plumbing fittings inventory",
        "Electrical wire inventory"
      ]}
      productSections={[
        {
          title: "Track Materials",
          description: "Keep a digital catalog of all your commonly used parts, complete with costs, supplier details, and current stock levels.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="/track material.webp" 
                alt="Materials Catalog" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-64 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3 border-b border-slate-100 pb-2">
                  <Search className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">Parts Search</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100">
                     <div>
                       <p className="text-[10px] font-bold text-slate-900">12x12x1 Filter</p>
                       <p className="text-[9px] text-slate-500">SKU: FLT-12121</p>
                     </div>
                     <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">24 in stock</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100">
                     <div>
                       <p className="text-[10px] font-bold text-slate-900">Condenser Motor</p>
                       <p className="text-[9px] text-slate-500">SKU: MOT-8392</p>
                     </div>
                     <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">2 in stock</span>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Monitor Stock Levels",
          description: "Know exactly what's sitting in your truck or shop. Deduct items as they are used on jobs so your counts are always accurate.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop" 
                alt="Stock Levels" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -left-4 bottom-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-56 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart2 className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-bold text-slate-800">Truck Inventory</span>
                </div>
                <div className="space-y-3">
                   <div>
                     <div className="flex justify-between text-[10px] mb-1">
                       <span className="text-slate-600 font-medium">Copper Pipes</span>
                       <span className="text-slate-900 font-bold">12 ft</span>
                     </div>
                     <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-red-400 w-[15%]"></div></div>
                   </div>
                   <div>
                     <div className="flex justify-between text-[10px] mb-1">
                       <span className="text-slate-600 font-medium">PVC Fittings</span>
                       <span className="text-slate-900 font-bold">140 units</span>
                     </div>
                     <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-emerald-400 w-[85%]"></div></div>
                   </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Reduce Waste",
          description: "Stop buying parts you already have. By knowing your true inventory, you eliminate duplicate purchases and save money.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="/reduce waste.webp" 
                alt="Reduce Waste" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -right-4 top-1/4 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-56 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingDown className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">Waste Reduction</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed mb-2">Duplicate orders prevented this month:</p>
                <div className="text-xl font-display font-bold text-slate-900">$340.50 Saved</div>
              </div>
            </div>
          )
        },
        {
          title: "Control Inventory Costs",
          description: "Track price changes from suppliers over time and ensure you are always passing the correct materials cost onto your invoices.",
          visualContent: (
            <div className="relative w-full h-full group bg-slate-50">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop" 
                alt="Cost Control" 
                referrerPolicy="no-referrer"
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -left-4 top-1/3 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-200/50 w-56 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-[10px] font-bold text-slate-700">R-22 Refrigerant Price</span>
                   <span className="text-[9px] text-slate-500">Supplier A</span>
                 </div>
                 <div className="h-12 w-full flex items-end gap-1 mb-2">
                   <div className="w-1/4 bg-slate-200 h-[60%] rounded-t"></div>
                   <div className="w-1/4 bg-slate-200 h-[65%] rounded-t"></div>
                   <div className="w-1/4 bg-slate-200 h-[80%] rounded-t"></div>
                   <div className="w-1/4 bg-red-400 h-[100%] rounded-t relative">
                     <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-red-600">+15%</span>
                   </div>
                 </div>
                 <p className="text-[9px] text-slate-500 border-t border-slate-100 pt-2">Price updated automatically on all new quotes.</p>
              </div>
            </div>
          )
        }
      ]}
      faqs={[
        {
          question: "Can I categorize my inventory items?",
          answer: "Yes, you can group parts by category, manufacturer, or system type for easy searching."
        },
        {
          question: "Does it alert me when I'm running low?",
          answer: "You can set low-stock thresholds and see at a glance which items need to be reordered before your next big job."
        },
        {
          question: "Can I manage inventory from my truck?",
          answer: "Yes, our mobile-friendly interface allows you to update stock levels the moment you pull a part from your van."
        }
      ]}
    />
  );
};

export default InventoryTrackingPage;

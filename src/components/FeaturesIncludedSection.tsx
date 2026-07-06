import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, CheckCircle, ArrowRight, DollarSign, Package, Users, Mail } from 'lucide-react';

const FeaturesIncludedSection = () => {
  return (
    <section id="features" className="relative z-10 py-32 px-6 border-t border-sky-900/5 bg-slate-50 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <motion.div 
           animate={{ rotate: [0, 360] }}
           transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
           className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] opacity-30 mix-blend-multiply"
           style={{
             background: 'radial-gradient(circle, #bae6fd 0%, transparent 70%)',
           }}
         />
         <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-32 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-950 tracking-tight leading-[1.1]"
          >
            Everything You Need To Run A Solo Service Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 leading-relaxed"
          >
            FieldCore combines scheduling, customer management, profit tracking and repeat-business tools into one simple operating system.
          </motion.p>
        </div>

        <div className="space-y-40">
          
          {/* BLOCK 1: Schedule More Jobs */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-950 leading-tight">
                Schedule More Jobs
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                Take control of your time with a calendar built specifically for the way solo operators actually work.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Calendar scheduling",
                  "Drag-and-drop jobs",
                  "Emergency call priority tags",
                  "Customer history before arrival"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 text-lg">
                     <CheckCircle className="w-6 h-6 text-indigo-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 flex flex-col overflow-hidden"
            >
               {/* Mock UI */}
               <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                 <div className="font-bold text-lg text-slate-900">Monday Schedule</div>
                 <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                   <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                   <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                 </div>
               </div>
               
               <div className="flex-1 relative space-y-4">
                 <motion.div 
                   initial={{ x: 50, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.5, duration: 0.5 }}
                   className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex gap-4"
                 >
                   <div className="w-1.5 h-full absolute left-0 top-0 bg-indigo-500 rounded-l-xl"></div>
                   <div className="flex-1">
                     <div className="flex justify-between items-start mb-1">
                       <span className="font-bold text-indigo-900">Installation</span>
                       <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">8:00 AM</span>
                     </div>
                     <div className="text-sm text-indigo-700">124 Maple Street</div>
                   </div>
                 </motion.div>

                 <motion.div 
                   initial={{ x: 50, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.8, duration: 0.5 }}
                   className="bg-rose-50 border border-rose-100 rounded-xl p-4 flex gap-4 relative"
                 >
                   <div className="w-1.5 h-full absolute left-0 top-0 bg-rose-500 rounded-l-xl"></div>
                   <div className="flex-1">
                     <div className="flex justify-between items-start mb-1">
                       <span className="font-bold text-rose-900">Emergency Repair</span>
                       <span className="text-xs font-bold text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">11:30 AM</span>
                     </div>
                     <div className="text-sm text-rose-700">Priority call</div>
                   </div>
                 </motion.div>

                 <motion.div 
                   initial={{ x: 50, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 1.1, duration: 0.5 }}
                   className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex gap-4 relative"
                 >
                   <div className="w-1.5 h-full absolute left-0 top-0 bg-emerald-500 rounded-l-xl"></div>
                   <div className="flex-1">
                     <div className="flex justify-between items-start mb-1">
                       <span className="font-bold text-emerald-900">Maintenance Visit</span>
                       <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">2:00 PM</span>
                     </div>
                     <div className="text-sm text-emerald-700">Annual tune-up</div>
                   </div>
                 </motion.div>
               </div>
            </motion.div>
          </div>

          {/* BLOCK 2: Quote Faster */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1 relative aspect-square md:aspect-[4/3] bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-8 flex flex-col justify-center overflow-hidden"
            >
               {/* Mock UI */}
               <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm mx-auto w-full">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold text-slate-800">New Quote</span>
                    <span className="text-sm font-medium text-slate-400">QT-1042</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="h-10 bg-slate-50 border border-slate-200 rounded-lg flex items-center px-4">
                      <span className="text-slate-500 text-sm">Customer: Sarah Jenkins</span>
                    </div>
                    <div className="h-10 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between px-4">
                      <span className="text-slate-500 text-sm">Service: AC Repair</span>
                      <span className="font-medium text-slate-800">$450.00</span>
                    </div>
                  </div>

                  <motion.div 
                    initial={{ background: "#f8fafc", color: "#64748b" }}
                    whileInView={{ background: "#4f46e5", color: "#ffffff" }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="h-12 rounded-xl flex items-center justify-center font-bold transition-colors"
                  >
                    <motion.span
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ delay: 1, duration: 0 }}
                      className="absolute"
                    >
                      Draft
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0 }}
                      className="absolute"
                    >
                      Approved
                    </motion.span>
                  </motion.div>
               </div>
               
               <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none mix-blend-overlay"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="order-1 lg:order-2 space-y-8"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-950 leading-tight">
                Quote Faster.<br/>Win More Work.
              </h3>
              <ul className="space-y-4 pt-4">
                {[
                  "Create quotes in under 90 seconds",
                  "Save reusable templates",
                  "Convert approved quotes into jobs",
                  "Send directly to customers"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 text-lg">
                     <CheckCircle className="w-6 h-6 text-sky-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* BLOCK 3: Know Exactly What Makes Money */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-950 leading-tight">
                Know Exactly What Makes Money
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                Stop guessing about your margins. See exactly which jobs drive your business forward.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Profit per job",
                  "Weekly profit",
                  "Monthly profit",
                  "Material cost tracking"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 text-lg">
                     <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 flex flex-col justify-end overflow-hidden"
            >
               <div className="absolute inset-0 p-8 flex flex-col">
                  <div className="font-bold text-xl text-slate-900 mb-8">Service Profitability</div>
                  
                  <div className="space-y-6 flex-1">
                    {[
                      { name: "AC Repair", profit: "$240", width: "40%", delay: 0.2 },
                      { name: "Water Heater Install", profit: "$520", width: "70%", delay: 0.4 },
                      { name: "Electrical Rewire", profit: "$740", width: "90%", delay: 0.6 }
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-sm font-bold">
                          <span className="text-slate-700">{item.name}</span>
                          <span className="text-emerald-600">Profit: {item.profit}</span>
                        </div>
                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: item.width }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: item.delay, ease: "easeOut" }}
                            className="h-full bg-emerald-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </motion.div>
          </div>

          {/* BLOCK 4: Track Inventory */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1 relative aspect-square md:aspect-[4/3] bg-slate-50 rounded-3xl border border-slate-200 shadow-xl p-8 overflow-hidden"
            >
               <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden h-full">
                  <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <span className="font-bold text-slate-800">Inventory</span>
                  </div>
                  <div className="divide-y divide-slate-50">
                    {[
                      { name: "Air Filters (20x20)", stock: 12, status: "In Stock" },
                      { name: "Copper Pipe (1/2\")", stock: 4, status: "Low Stock", isLow: true },
                      { name: "15A Breakers", stock: 24, status: "In Stock" },
                      { name: "Standard Switches", stock: 45, status: "In Stock" }
                    ].map((item, i) => (
                      <div key={i} className="p-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
                         <div>
                           <div className="font-medium text-slate-900">{item.name}</div>
                           <div className={`text-xs mt-1 ${item.isLow ? 'text-rose-500 font-bold' : 'text-slate-500'}`}>
                             {item.status}
                           </div>
                         </div>
                         <div className="text-right">
                           <motion.div 
                             initial={{ opacity: 1 }}
                             whileInView={item.isLow ? { scale: [1, 1.2, 1], color: ["#0f172a", "#f43f5e", "#f43f5e"] } : {}}
                             viewport={{ once: true }}
                             transition={{ delay: 1 + (i * 0.1), duration: 0.5 }}
                             className="font-bold text-slate-900"
                           >
                             {item.stock}
                           </motion.div>
                         </div>
                      </div>
                    ))}
                  </div>
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-950 leading-tight">
                Track Inventory Without Spreadsheets
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                Know exactly what parts you have and what you need before you head to the job site.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Material tracking",
                  "Cost tracking",
                  "Supplier records",
                  "Usage history"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 text-lg">
                     <CheckCircle className="w-6 h-6 text-amber-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* BLOCK 5: Turn One-Time Customers Into Repeat Customers */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-950 leading-tight">
                Turn One-Time Customers Into Repeat Customers
              </h3>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Automated review requests",
                  "Email reminders",
                  "Seasonal campaigns",
                  "Customer follow-ups",
                  "Repeat business tracking"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 text-lg">
                     <CheckCircle className="w-6 h-6 text-indigo-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] bg-gradient-to-br from-indigo-50 to-sky-50 rounded-3xl border border-indigo-100 shadow-xl p-8 flex items-center justify-center overflow-hidden"
            >
               <div className="absolute inset-0 pointer-events-none z-0">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                       initial={{ pathLength: 0, opacity: 0 }}
                       whileInView={{ pathLength: 1, opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                       d="M 50 100 Q 150 100 200 200 T 400 300"
                       stroke="#6366f1"
                       strokeWidth="2"
                       strokeDasharray="4 4"
                       fill="none"
                       className="absolute"
                    />
                  </svg>
               </div>
               
               <div className="relative z-10 w-full space-y-6">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.5 }}
                   className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 w-3/4 ml-auto"
                 >
                   <div className="flex items-center gap-3 mb-2">
                     <Mail className="w-4 h-4 text-slate-400" />
                     <span className="text-xs font-bold text-slate-500 uppercase">Automated Request</span>
                   </div>
                   <div className="text-sm font-medium text-slate-800">"Thank you for your business! Please leave a review."</div>
                 </motion.div>

                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 1 }}
                   className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 w-3/4"
                 >
                   <div className="flex items-center gap-3 mb-2">
                     <Mail className="w-4 h-4 text-slate-400" />
                     <span className="text-xs font-bold text-slate-500 uppercase">Annual Reminder</span>
                   </div>
                   <div className="text-sm font-medium text-slate-800">"Your AC tune-up is due. Click here to book."</div>
                 </motion.div>
                 
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 1.5 }}
                   className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 w-3/4 ml-auto"
                 >
                   <div className="flex items-center gap-3 mb-2">
                     <Mail className="w-4 h-4 text-slate-400" />
                     <span className="text-xs font-bold text-slate-500 uppercase">Seasonal Campaign</span>
                   </div>
                   <div className="text-sm font-medium text-slate-800">"Time for your annual electrical inspection."</div>
                 </motion.div>
               </div>
            </motion.div>
          </div>

        </div>

        {/* FINAL SUMMARY PANEL */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mt-40 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-tight">
              Everything Works Together
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 py-8">
              {['Scheduling', 'Quoting', 'Inventory', 'Profit Tracking', 'Customer Follow-Ups'].map((sys, i, arr) => (
                <React.Fragment key={sys}>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold px-6 py-3 rounded-full text-sm tracking-wide"
                  >
                    {sys}
                  </motion.div>
                  {i < arr.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                      <ArrowRight className="w-5 h-5 text-indigo-400/50" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
              FieldCore isn't five separate tools. It's one operating system designed specifically for solo tradespeople.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesIncludedSection;


import React, { useMemo } from 'react';
import { FleetStats, Job, JobStatus, Invoice, InvoiceStatus, Customer, Technician } from '../types';
import { Calendar, Clock, CheckCircle2, DollarSign, Menu, Wifi, Home, FileText, Package } from 'lucide-react';

interface DashboardProps {
  stats: FleetStats;
  jobs: Job[];
  invoices: Invoice[];
  customers: Customer[];
  technicians: Technician[];
  onUpdateStatus: (id: string, status: JobStatus) => void;
  onOpenCreate?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ stats, jobs, invoices }) => {
    const todayRevenue = stats.dailyRevenue;
    const completedJobs = jobs.filter(j => j.status === JobStatus.COMPLETED).length;

    return (
        <div className="max-w-[400px] mx-auto bg-[#F8FAFC] min-h-[800px] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col relative border-[12px] border-[#2A2A2A]">
            {/* Header */}
            <div className="bg-white px-6 py-5 flex items-center justify-between z-10 relative">
                <div className="flex items-center gap-2">
                    {/* F Logo */}
                    <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6">
                        <path d="M6 4h12v4H10v4h6v4h-6v8H6V4z"/>
                    </svg>
                    <div className="leading-tight mt-0.5">
                        <p className="text-[12px] font-black tracking-[0.15em] text-slate-800 italic">FIELDCORE</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 border border-green-100 rounded-full">
                        <div className="w-1.5 h-1.5 bg-[#00E676] rounded-full"></div>
                        <Wifi className="w-3 h-3 text-[#00E676]" />
                        <span className="text-[10px] font-bold text-[#00E676]">Online</span>
                    </div>
                    <div className="text-right leading-none">
                        <p className="text-[11px] font-black uppercase tracking-tight text-slate-900">Operator</p>
                        <p className="text-[11px] font-black uppercase tracking-tight text-slate-900">Desk</p>
                    </div>
                    <Menu className="w-6 h-6 text-slate-800" />
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-5 py-6 pb-28">
                
                {/* Hero Card */}
                <div className="bg-[#1A2639] rounded-3xl p-6 mb-5 shadow-lg shadow-indigo-900/10">
                    <div className="flex items-center gap-2 mb-4">
                        <p className="text-[#00E676] text-[10px] font-black tracking-widest uppercase">Operations Control</p>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Good morning</h1>
                    <p className="text-slate-300 text-sm leading-relaxed pr-4">
                        Ready to dispatch. Today is Wednesday, June 24.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                    {/* Today's Profit */}
                    <div className="bg-white rounded-3xl p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-[10px] font-bold text-slate-400 tracking-widest leading-tight">TODAY'S PROFIT</p>
                            <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                                <DollarSign className="w-4 h-4" />
                            </div>
                        </div>
                        <p className="text-2xl font-black text-slate-800 tracking-tight">${todayRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                    </div>

                    {/* Completed */}
                    <div className="bg-white rounded-3xl p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-[10px] font-bold text-slate-400 tracking-widest leading-tight">COMPLETED</p>
                            <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0">
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <p className="text-3xl font-black text-slate-800 tracking-tight">{completedJobs}</p>
                            <p className="text-xs font-bold text-slate-400">jobs</p>
                        </div>
                    </div>

                    {/* Week Profit */}
                    <div className="bg-white rounded-3xl p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-[10px] font-bold text-slate-400 tracking-widest leading-tight">WEEK PROFIT</p>
                            <div className="w-8 h-8 rounded-xl bg-[#E0F2F1] flex items-center justify-center text-[#00796B] shrink-0">
                                <DollarSign className="w-4 h-4" />
                            </div>
                        </div>
                        <p className="text-2xl font-black text-slate-800 tracking-tight">$0</p>
                    </div>

                    {/* Total Time */}
                    <div className="bg-white rounded-3xl p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-[10px] font-bold text-slate-400 tracking-widest leading-tight">TOTAL TIME</p>
                            <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                                <Clock className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <p className="text-3xl font-black text-slate-800 tracking-tight">0.0</p>
                            <p className="text-xs font-bold text-slate-400">hrs</p>
                        </div>
                    </div>
                </div>

                {/* Dispatch Lineup Card */}
                <div className="bg-white rounded-[2rem] p-6 shadow-sm mb-6 pb-20">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-3 items-center">
                            <Calendar className="w-5 h-5 text-[#00E676]" />
                            <h3 className="text-xs font-black text-slate-800 tracking-widest uppercase leading-snug max-w-[100px]">TODAY'S DISPATCH LINEUP</h3>
                        </div>
                        <button className="text-[10px] font-black text-[#00E676] uppercase tracking-widest mt-1">
                            GO TO SCHEDULER
                        </button>
                    </div>
                    {/* Placeholder for list */}
                    <div className="border-t border-dashed border-slate-200 mt-4 pt-4">
                        
                    </div>
                </div>

            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4 flex justify-between items-center z-10 pb-6 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
                <button className="flex flex-col items-center gap-1 group">
                    <Home className="w-6 h-6 text-[#00E676]" />
                    <span className="text-[10px] font-black text-[#00E676]">Dashboard</span>
                </button>
                <button className="flex flex-col items-center gap-1 group">
                    <Calendar className="w-6 h-6 text-slate-400" />
                    <span className="text-[10px] font-bold text-slate-400">Schedule</span>
                </button>
                <button className="flex flex-col items-center gap-1 group">
                    <Clock className="w-6 h-6 text-slate-400" />
                    <span className="text-[10px] font-bold text-slate-400">Dispatch</span>
                </button>
                <button className="flex flex-col items-center gap-1 group">
                    <FileText className="w-6 h-6 text-slate-400" />
                    <span className="text-[10px] font-bold text-slate-400">Quotes</span>
                </button>
                <button className="flex flex-col items-center gap-1 group">
                    <Package className="w-6 h-6 text-slate-400" />
                    <span className="text-[10px] font-bold text-slate-400">Inventory</span>
                </button>
            </div>
        </div>
    );
};

export default Dashboard;



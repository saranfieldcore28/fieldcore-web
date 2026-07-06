
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Customer, Job, Invoice } from '../types';

interface CustomerDetailPanelProps {
  customer: Customer | null;
  onClose: () => void;
  customerJobs: Job[];
  customerInvoices: Invoice[];
  onOpenJob: (job: Job) => void;
}

const CustomerDetailPanel: React.FC<CustomerDetailPanelProps> = ({ customer, onClose, customerJobs, customerInvoices, onOpenJob }) => {
  const [activeTab, setActiveTab] = useState<'Overview' | 'History' | 'Equipment' | 'Recurring'>('Overview');

  if (!customer) return null;

  const openBalance = customer.balance;
  const lastService = customerJobs.length > 0 ? new Date(customerJobs[0].createdAt).toLocaleDateString() : 'Never';

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose} className="fixed inset-0 bg-[#0A1A3A]/60 backdrop-blur-sm z-50"
      />
      
      <motion.div 
        initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed inset-y-0 right-0 w-[85%] max-w-[1000px] bg-[#F3F4F6] shadow-2xl z-50 flex flex-col border-l border-gray-300"
      >
        {/* Header */}
        <div className="bg-white border-b border-gray-300 p-6 shadow-sm z-10">
           <div className="flex justify-between items-start mb-6">
               <div className="flex items-center gap-4">
                   <div className="w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center text-2xl font-black shadow-lg">
                       {customer.name.charAt(0)}
                   </div>
                   <div>
                       <h2 className="text-2xl font-bold text-gray-900 leading-none">{customer.name}</h2>
                       <div className="flex items-center gap-2 mt-2">
                           <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded border ${customer.status === 'Active' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-gray-100 border-gray-200 text-gray-500'}`}>
                               {customer.status}
                           </span>
                           <span className="text-sm text-gray-500 font-medium">#{customer.id}</span>
                           <span className="text-sm text-gray-400">•</span>
                           <span className="text-sm text-gray-500 font-medium">{customer.type}</span>
                       </div>
                   </div>
               </div>
               <div className="flex gap-3">
                   <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-bold rounded shadow-sm hover:bg-gray-50 text-sm">Edit Profile</button>
                   <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-2">
                       <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
                   </button>
               </div>
           </div>

           {/* Quick Stats Bar */}
           <div className="flex gap-8 pt-2">
               <div>
                   <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Open Balance</p>
                   <p className={`text-lg font-bold ${openBalance > 0 ? 'text-red-600' : 'text-green-600'}`}>${openBalance.toFixed(2)}</p>
               </div>
               <div>
                   <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Lifetime Rev</p>
                   <p className="text-lg font-bold text-gray-900">${customer.lifetimeValue.toLocaleString()}</p>
               </div>
               <div>
                   <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Last Service</p>
                   <p className="text-lg font-bold text-gray-900">{lastService}</p>
               </div>
               <div>
                   <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Active Agrmt</p>
                   <p className="text-lg font-bold text-blue-600">Gold Plan</p>
               </div>
           </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-white px-6">
          {['Overview', 'History', 'Equipment', 'Recurring'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-4 text-xs font-bold uppercase tracking-widest border-b-[3px] transition-colors ${
                activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
            {activeTab === 'Overview' && (
                <div className="grid grid-cols-2 gap-8">
                    {/* Location Card */}
                    <div className="bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden">
                        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex justify-between items-center">
                            <h3 className="font-bold text-gray-800 text-sm">Service Location</h3>
                            <button className="text-blue-600 text-xs font-bold uppercase">Map</button>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">{customer.address}</p>
                                    <p className="text-sm text-gray-500">{customer.city}, {customer.zip}</p>
                                    <div className="mt-4 space-y-2">
                                        <div className="flex gap-2">
                                            <span className="text-xs font-bold text-gray-400 w-16 uppercase">Zone</span>
                                            <span className="text-xs font-bold text-gray-800">North Metro</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-xs font-bold text-gray-400 w-16 uppercase">Year Built</span>
                                            <span className="text-xs font-bold text-gray-800">1998</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bill To Card */}
                    <div className="bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden">
                        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
                            <h3 className="font-bold text-gray-800 text-sm">Bill To</h3>
                        </div>
                        <div className="p-6 space-y-4">
                             <div className="flex items-center gap-3">
                                 <svg className="text-gray-400" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"/></svg>
                                 <span className="text-sm font-medium text-gray-900">{customer.phone}</span>
                                 <span className="text-[10px] bg-gray-100 text-gray-500 px-1 rounded uppercase font-bold">Mobile</span>
                             </div>
                             <div className="flex items-center gap-3">
                                 <svg className="text-gray-400" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                 <span className="text-sm font-medium text-gray-900">{customer.email}</span>
                             </div>
                        </div>
                    </div>
                </div>
            )}
            
            {activeTab === 'History' && (
                <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                             <tr>
                                 <th className="px-4 py-3 text-[10px] font-black uppercase text-gray-500 tracking-wider">Date</th>
                                 <th className="px-4 py-3 text-[10px] font-black uppercase text-gray-500 tracking-wider">Job #</th>
                                 <th className="px-4 py-3 text-[10px] font-black uppercase text-gray-500 tracking-wider">Type</th>
                                 <th className="px-4 py-3 text-[10px] font-black uppercase text-gray-500 tracking-wider">Tech</th>
                                 <th className="px-4 py-3 text-[10px] font-black uppercase text-gray-500 tracking-wider text-right">Total</th>
                                 <th className="px-4 py-3 text-[10px] font-black uppercase text-gray-500 tracking-wider text-right">Status</th>
                             </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {customerJobs.map(job => (
                                <tr key={job.id} onClick={() => onOpenJob(job)} className="hover:bg-blue-50 cursor-pointer">
                                    <td className="px-4 py-3 text-xs font-bold text-gray-900">{new Date(job.createdAt).toLocaleDateString()}</td>
                                    <td className="px-4 py-3 text-xs text-blue-600 font-bold">{job.id}</td>
                                    <td className="px-4 py-3 text-xs text-gray-600">{job.type}</td>
                                    <td className="px-4 py-3 text-xs text-gray-600">{job.technicianName}</td>
                                    <td className="px-4 py-3 text-xs font-bold text-gray-900 text-right">${job.value.toFixed(2)}</td>
                                    <td className="px-4 py-3 text-right">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${job.status === 'COMPLETED' ? 'bg-gray-200 text-gray-600' : 'bg-green-100 text-green-700'}`}>{job.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            
            {activeTab === 'Equipment' && (
                <div className="space-y-4">
                     {customer.assets.length > 0 ? customer.assets.map(asset => (
                         <div key={asset.id} className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm flex gap-4 hover:border-blue-400 transition-colors">
                             <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                                <span className="text-3xl">⚙️</span>
                             </div>
                             <div className="flex-1">
                                 <div className="flex justify-between">
                                     <h3 className="text-sm font-bold text-gray-900">{asset.name}</h3>
                                     <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded uppercase">Active</span>
                                 </div>
                                 <p className="text-xs text-gray-500 mt-1">Model: {asset.model} • Serial: {asset.serial}</p>
                                 <div className="flex gap-4 mt-3">
                                     <div className="bg-gray-50 px-3 py-1 rounded border border-gray-100">
                                         <p className="text-[10px] font-bold text-gray-400 uppercase">Install Date</p>
                                         <p className="text-xs font-bold text-gray-900">{new Date(asset.installDate).toLocaleDateString()}</p>
                                     </div>
                                     <div className="bg-gray-50 px-3 py-1 rounded border border-gray-100">
                                         <p className="text-[10px] font-bold text-gray-400 uppercase">Manufacturer</p>
                                         <p className="text-xs font-bold text-gray-900">{asset.type}</p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     )) : <p className="text-gray-500 text-sm italic">No equipment on file.</p>}
                </div>
            )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomerDetailPanel;

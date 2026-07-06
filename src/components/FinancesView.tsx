
import React, { useState } from 'react';
import { Invoice, InvoiceStatus } from '../types';

interface FinancesViewProps {
  invoices: Invoice[];
  onCollectPayment: (invoiceId: string) => void;
}

const FinancesView: React.FC<FinancesViewProps> = ({ invoices, onCollectPayment }) => {
  const [activeTab, setActiveTab] = useState('Invoices');
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const getStatusColor = (status: InvoiceStatus) => {
    switch (status) {
      case InvoiceStatus.PAID: return 'bg-green-100 text-green-700 border-green-200';
      case InvoiceStatus.OVERDUE: return 'bg-red-100 text-red-700 border-red-200';
      case InvoiceStatus.SENT: return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleProcessPayment = () => {
      if(selectedInvoice) {
          onCollectPayment(selectedInvoice.id);
          setSelectedInvoice(null);
      }
  }

  const totalRevenue = invoices.filter(i => i.status === InvoiceStatus.PAID).reduce((acc, i) => acc + i.amount, 0);
  const outstanding = invoices.filter(i => i.status === InvoiceStatus.SENT || i.status === InvoiceStatus.OVERDUE).reduce((acc, i) => acc + i.amount, 0);

  return (
    <div className="space-y-6">
      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#0A1A3A] p-6 rounded-xl text-white shadow-lg">
          <p className="text-[10px] font-black uppercase tracking-widest text-blue-300 mb-2">Total Collections</p>
          <p className="text-3xl font-black">${totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Accounts Receivable</p>
           <p className="text-3xl font-black text-gray-900">${outstanding.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Avg. Ticket Size</p>
           <p className="text-3xl font-black text-gray-900">$485</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Overdue Count</p>
           <p className="text-3xl font-black text-red-600">{invoices.filter(i => i.status === InvoiceStatus.OVERDUE).length}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden min-h-[500px]">
         <div className="flex border-b border-gray-200">
            {['Invoices', 'Estimates', 'Recurring', 'Payments'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-bold border-b-2 transition-colors ${
                  activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
         </div>

         {activeTab === 'Invoices' && (
           <>
            {/* Toolbar */}
            <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
               <div className="flex gap-2">
                 <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-xs font-bold text-gray-700 shadow-sm hover:bg-gray-50">Filter by Date</button>
                 <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-xs font-bold text-gray-700 shadow-sm hover:bg-gray-50">Status</button>
               </div>
               <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 shadow-sm">
                  + Create Invoice
               </button>
            </div>

            {/* Table */}
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Invoice #</th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Customer</th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Issue Date</th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {invoices.length > 0 ? invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{invoice.id}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">{invoice.customerName}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{new Date(invoice.issueDate).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">${invoice.amount.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase border ${getStatusColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                       {invoice.status !== InvoiceStatus.PAID && (
                         <button 
                           onClick={() => setSelectedInvoice(invoice)}
                           className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-xs font-bold shadow-sm"
                         >
                           Pay
                         </button>
                       )}
                       {invoice.status === InvoiceStatus.PAID && (
                           <span className="text-xs text-gray-400 font-medium">Paid</span>
                       )}
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan={6} className="p-12 text-center text-gray-500">No invoices generated yet.</td></tr>
                )}
              </tbody>
            </table>
           </>
         )}
         
         {activeTab !== 'Invoices' && (
           <div className="p-12 text-center text-gray-400">
             <p className="text-sm font-medium">This module is available in the Enterprise Plan.</p>
           </div>
         )}
      </div>

       {/* PAYMENT MODAL */}
       {selectedInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md animate-in zoom-in duration-200">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Process Payment</h3>
                    <button onClick={() => setSelectedInvoice(null)} className="text-gray-400 hover:text-gray-600">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-500 text-sm">Invoice #</span>
                        <span className="font-bold text-gray-900">{selectedInvoice.id}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500 text-sm">Total Due</span>
                        <span className="font-black text-xl text-[#0A1A3A]">${selectedInvoice.amount.toLocaleString()}</span>
                    </div>
                </div>

                <div className="space-y-4 mb-8">
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Payment Method</p>
                     <div className="grid grid-cols-2 gap-3">
                         <button className="py-3 border-2 border-blue-500 bg-blue-50 text-blue-700 font-bold rounded-lg text-sm">Credit Card</button>
                         <button className="py-3 border border-gray-200 text-gray-600 font-bold rounded-lg text-sm hover:bg-gray-50">Check / ACH</button>
                     </div>
                </div>

                <button 
                    onClick={handleProcessPayment}
                    className="w-full py-4 bg-[#00C851] text-[#0A1A3A] rounded-xl font-black uppercase tracking-widest hover:brightness-110 shadow-lg text-sm"
                >
                    Confirm Payment
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default FinancesView;

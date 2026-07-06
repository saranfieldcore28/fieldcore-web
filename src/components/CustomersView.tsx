
import React, { useState } from 'react';
import { Customer } from '../types';

interface CustomersViewProps {
  customers: Customer[];
  onCustomerClick?: (customer: Customer) => void;
}

const CustomersView: React.FC<CustomersViewProps> = ({ customers, onCustomerClick }) => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredCustomers = customers.filter(c => {
    const matchesFilter = filter === 'All' || c.type === filter;
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-bold text-gray-500 uppercase">Active Accounts</p>
          <p className="text-2xl font-black text-gray-900 mt-1">{customers.length}</p>
          <p className="text-xs text-green-600 font-bold mt-1">+12% this month</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-bold text-gray-500 uppercase">Outstanding Balance</p>
          <p className="text-2xl font-black text-gray-900 mt-1">
            ${customers.reduce((acc, c) => acc + c.balance, 0).toLocaleString()}
          </p>
          <p className="text-xs text-red-500 font-bold mt-1">Needs attention</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-bold text-gray-500 uppercase">Commercial Split</p>
          <p className="text-2xl font-black text-gray-900 mt-1">
            {Math.round((customers.filter(c => c.type === 'Commercial').length / (customers.length || 1)) * 100)}%
          </p>
          <p className="text-xs text-blue-500 font-bold mt-1">Target: 45%</p>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-5 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-2">
             <h2 className="text-lg font-bold text-gray-900">Client Database</h2>
             <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">{customers.length}</span>
           </div>
           
           <div className="flex items-center gap-3 w-full sm:w-auto">
             <div className="flex bg-gray-100 p-1 rounded-lg">
                {['All', 'Commercial', 'Residential'].map(f => (
                  <button 
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${filter === f ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    {f}
                  </button>
                ))}
             </div>
             <div className="relative flex-1 sm:w-64">
               <input 
                 type="text" 
                 placeholder="Search clients..." 
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 className="w-full pl-9 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
               <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
             </div>
             <button className="px-4 py-2 bg-[#0A1A3A] text-white rounded-lg text-sm font-bold hover:bg-[#152C55]">
               + Add Client
             </button>
           </div>
        </div>

        {/* Table */}
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Client Name</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Balance</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Lifetime Value</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredCustomers.length > 0 ? filteredCustomers.map((customer) => (
              <tr 
                key={customer.id} 
                onClick={() => onCustomerClick && onCustomerClick(customer)}
                className="hover:bg-gray-50 transition-colors group cursor-pointer"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                      {customer.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600">{customer.name}</p>
                      <p className="text-xs text-gray-500">#{customer.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-900">{customer.email}</p>
                  <p className="text-xs text-gray-500">{customer.phone}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${
                    customer.type === 'Commercial' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {customer.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {customer.balance > 0 ? (
                    <span className="text-red-600 font-bold bg-red-50 px-2 py-1 rounded text-xs">${customer.balance.toLocaleString()}</span>
                  ) : (
                    <span className="text-gray-400 text-sm font-medium">--</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-gray-900">${customer.lifetimeValue.toLocaleString()}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-blue-600 font-bold text-xs uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                    View Profile
                  </button>
                </td>
              </tr>
            )) : (
               <tr><td colSpan={6} className="p-12 text-center text-gray-500">No customers found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersView;

import React, { useState } from 'react';
import { Search, Bell, Plus, User } from 'lucide-react';
import { Job, Customer, Invoice } from '../types';

interface HeaderProps {
  onNewDispatch: () => void;
  allData: {
    jobs: Job[];
    customers: Customer[];
    invoices: Invoice[];
  };
  onNavigate: (type: string, id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNewDispatch, allData, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 shrink-0 z-10">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search jobs, customers, invoices..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-4 pl-6">
        <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <button 
          onClick={onNewDispatch}
          className="hidden sm:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          New Dispatch
        </button>

        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold ml-2 shrink-0 border border-indigo-200">
          <User className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;

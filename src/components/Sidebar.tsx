
import React from 'react';
import { ICONS } from '../constants';
import { FieldCoreLogo } from './FieldCoreLogo';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { name: 'Dashboard', icon: <ICONS.Dashboard />, count: null },
    { name: 'Schedule', icon: <ICONS.Jobs />, count: null },
    { name: 'Dispatch', icon: <ICONS.Map />, count: null },
    { name: 'Pricebook', icon: <ICONS.Inventory />, count: null }, // Reusing inventory icon for now or similar
    { name: 'Inventory', icon: <ICONS.Inventory />, count: 'Low' },
    { name: 'Customers', icon: <ICONS.Settings />, count: null },
    { name: 'Finances', icon: <ICONS.Dashboard />, count: null },
    { name: 'Intelligence', icon: <ICONS.Search />, count: 'New' },
  ];

  return (
    <aside className="w-64 bg-[#0A1A3A] border-r border-[#1E2D50] text-gray-300 flex flex-col h-full shrink-0 z-30 shadow-xl">
      {/* Brand Header */}
      <div className="h-16 flex items-center px-6 border-b border-[#1E2D50] bg-[#050E21]">
        <div className="flex items-center gap-3">
          <FieldCoreLogo className="h-8 w-auto text-white" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`w-full group flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 ${
              activeTab === item.name 
                ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-900/20 font-semibold' 
                : 'hover:bg-[#1E2D50] hover:text-white font-medium text-slate-400'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`${activeTab === item.name ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}>
                {item.icon}
              </span>
              <span className="text-sm">{item.name}</span>
            </div>
            {item.count && (
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                activeTab === item.name 
                  ? 'bg-white text-[#2563EB]' 
                  : (item.count === 'Low' ? 'bg-red-500 text-white' : item.count === 'New' ? 'bg-[#00C851] text-[#0A1A3A]' : 'bg-[#1E2D50] text-slate-400 border border-slate-700')
              }`}>
                {item.count}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer / Support */}
      <div className="p-4 border-t border-[#1E2D50] bg-[#050E21]">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center text-green-500 border border-green-800 relative">
             <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#050E21] rounded-full"></span>
             <span className="text-xs font-bold">JS</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs font-bold text-white truncate">John Smith</p>
            <p className="text-[10px] text-slate-500 truncate">Pro Account</p>
          </div>
          <button className="text-slate-500 hover:text-white">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

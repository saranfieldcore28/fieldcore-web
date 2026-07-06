
import React, { useState } from 'react';
import { PricebookEntry } from '../types';

interface PricebookViewProps {
  items: PricebookEntry[];
  onAddEntry?: (entry: PricebookEntry) => void;
}

const PricebookView: React.FC<PricebookViewProps> = ({ items, onAddEntry }) => {
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [cost, setCost] = useState('');
  const [type, setType] = useState('Service');
  const [category, setCategory] = useState('');

  const filteredItems = items.filter(i => filter === 'All' || i.type === filter);

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onAddEntry) {
          onAddEntry({
              id: `PB-${Date.now()}`,
              code: code || `SVC-${Math.floor(Math.random() * 1000)}`,
              name,
              description,
              type: type as any,
              category: category || 'General',
              cost: parseFloat(cost) || 0,
              price: parseFloat(price) || 0,
              estHours: 1,
              taxable: true
          });
      }
      setIsModalOpen(false);
      // Reset
      setCode(''); setName(''); setDescription(''); setPrice(''); setCost('');
  };

  return (
    <div className="space-y-6">
      {/* KPI Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-bold text-gray-500 uppercase">Active Services</p>
          <p className="text-2xl font-black text-gray-900 mt-1">{items.filter(i => i.type === 'Service').length}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-bold text-gray-500 uppercase">Material Database</p>
          <p className="text-2xl font-black text-gray-900 mt-1">{items.filter(i => i.type === 'Material').length}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
           <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Avg Margin</p>
                <p className="text-2xl font-black text-green-600 mt-1">62%</p>
              </div>
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded font-bold">Healthy</span>
           </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-2">
             <h2 className="text-lg font-bold text-gray-900">Flat Rate Pricebook</h2>
             <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">{items.length} Items</span>
           </div>
           
           <div className="flex items-center gap-3 w-full sm:w-auto">
             <div className="flex bg-gray-100 p-1 rounded-lg">
                {['All', 'Service', 'Material', 'Equipment'].map(f => (
                  <button 
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${filter === f ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    {f}
                  </button>
                ))}
             </div>
             <button 
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-[#0A1A3A] text-white rounded-lg text-sm font-bold hover:bg-[#152C55]"
             >
               + New Service
             </button>
           </div>
        </div>

        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Code</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Cost</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Price</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Margin</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredItems.map((item) => {
              const margin = item.price > 0 ? Math.round(((item.price - item.cost) / item.price) * 100) : 0;
              return (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <span className="font-mono text-xs font-bold bg-gray-100 px-2 py-1 rounded text-gray-600">{item.code}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                        <p className="text-sm font-bold text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500 truncate max-w-[200px]">{item.description}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-gray-600">{item.category}</span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-gray-500">
                    ${item.cost.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-gray-900">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`text-xs font-bold ${margin >= 50 ? 'text-green-600' : margin >= 30 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {margin}%
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* CREATE ENTRY MODAL */}
      {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg animate-in zoom-in duration-200">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900">Add Pricebook Item</h3>
                    <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                          <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Type</label>
                              <select 
                                value={type} 
                                onChange={e => setType(e.target.value)}
                                className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                              >
                                  <option>Service</option>
                                  <option>Material</option>
                                  <option>Equipment</option>
                              </select>
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Code (Optional)</label>
                              <input 
                                  type="text" 
                                  value={code} 
                                  onChange={e => setCode(e.target.value)} 
                                  className="w-full border border-gray-300 rounded p-2 text-sm"
                                  placeholder="e.g. HVAC-900" 
                              />
                          </div>
                      </div>

                      <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Item Name</label>
                          <input 
                              required 
                              type="text" 
                              value={name} 
                              onChange={e => setName(e.target.value)} 
                              className="w-full border border-gray-300 rounded p-2 text-sm font-bold"
                              placeholder="e.g. System Tune-Up" 
                          />
                      </div>

                      <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Description</label>
                          <textarea 
                              value={description} 
                              onChange={e => setDescription(e.target.value)} 
                              className="w-full border border-gray-300 rounded p-2 text-sm"
                              placeholder="Details about the service..."
                              rows={2}
                          />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Category</label>
                              <input 
                                  type="text" 
                                  value={category} 
                                  onChange={e => setCategory(e.target.value)} 
                                  className="w-full border border-gray-300 rounded p-2 text-sm"
                                  placeholder="e.g. Maintenance" 
                              />
                          </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                          <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Your Cost ($)</label>
                              <input 
                                  type="number" 
                                  step="0.01"
                                  value={cost} 
                                  onChange={e => setCost(e.target.value)} 
                                  className="w-full border border-gray-300 rounded p-2 text-sm"
                                  placeholder="0.00" 
                              />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Price to Customer ($)</label>
                              <input 
                                  required
                                  type="number" 
                                  step="0.01"
                                  value={price} 
                                  onChange={e => setPrice(e.target.value)} 
                                  className="w-full border border-blue-300 rounded p-2 text-sm font-bold text-blue-900"
                                  placeholder="0.00" 
                              />
                          </div>
                      </div>

                      <div className="flex gap-3 pt-4 border-t border-gray-100">
                          <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 border border-gray-300 rounded font-bold text-sm hover:bg-gray-50">Cancel</button>
                          <button type="submit" className="flex-1 py-3 bg-[#0A1A3A] text-white rounded font-bold text-sm hover:bg-[#152C55]">Create Item</button>
                      </div>
                  </form>
              </div>
          </div>
      )}
    </div>
  );
};

export default PricebookView;

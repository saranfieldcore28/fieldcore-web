
import React, { useState } from 'react';
import { InventoryItem } from '../types';

interface InventoryViewProps {
  items: InventoryItem[];
  onRestock: (itemId: string, qty: number) => void;
}

const InventoryView: React.FC<InventoryViewProps> = ({ items, onRestock }) => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  // Modal State
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [restockQty, setRestockQty] = useState(10);

  const filteredItems = items.filter(item => {
    const matchesFilter = filter === 'All' || item.location === filter;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.sku.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const lowStockCount = items.filter(i => i.quantity <= i.minQuantity).length;
  const totalValue = items.reduce((acc, i) => acc + (i.quantity * i.unitCost), 0);

  const handleSubmitRestock = (e: React.FormEvent) => {
      e.preventDefault();
      if (selectedItem) {
          onRestock(selectedItem.id, restockQty);
          setSelectedItem(null);
          setRestockQty(10);
      }
  };

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-bold text-gray-500 uppercase">Total Inventory Value</p>
          <p className="text-2xl font-black text-gray-900 mt-1">${totalValue.toLocaleString()}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
          {lowStockCount > 0 && <div className="absolute right-0 top-0 p-2"><span className="flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span></span></div>}
          <p className="text-xs font-bold text-gray-500 uppercase">Low Stock Alerts</p>
          <p className={`text-2xl font-black mt-1 ${lowStockCount > 0 ? 'text-red-600' : 'text-gray-900'}`}>{lowStockCount} Items</p>
          <p className="text-xs text-gray-400 mt-1">Requires reorder</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-bold text-gray-500 uppercase">Total SKUs</p>
          <p className="text-2xl font-black text-gray-900 mt-1">{items.length}</p>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-5 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-2">
             <h2 className="text-lg font-bold text-gray-900">Warehouse & Stock</h2>
           </div>
           
           <div className="flex items-center gap-3 w-full sm:w-auto">
             <div className="flex bg-gray-100 p-1 rounded-lg">
                {['All', 'Warehouse A', 'Truck 1', 'Truck 2'].map(f => (
                  <button 
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${filter === f ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    {f}
                  </button>
                ))}
             </div>
             <input 
               type="text" 
               placeholder="Search SKU or Name..." 
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="pl-4 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
             <button className="px-4 py-2 bg-[#0A1A3A] text-white rounded-lg text-sm font-bold hover:bg-[#152C55]">
               + Add Part
             </button>
           </div>
        </div>

        {/* Table */}
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Part Details</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">SKU</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Stock Level</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Unit Cost</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredItems.length > 0 ? filteredItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-lg">📦</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.category}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-mono text-gray-600">
                  {item.sku}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                    {item.location}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                     <div className="flex-1 w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${item.quantity <= item.minQuantity ? 'bg-red-500' : 'bg-green-500'}`} 
                          style={{ width: `${Math.min((item.quantity / (item.minQuantity * 3)) * 100, 100)}%` }}
                        ></div>
                     </div>
                     <span className={`text-xs font-bold ${item.quantity <= item.minQuantity ? 'text-red-600' : 'text-gray-900'}`}>{item.quantity}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  ${item.unitCost}
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={() => setSelectedItem(item)}
                    className="text-blue-600 hover:text-blue-800 font-bold text-xs uppercase"
                  >
                    Restock
                  </button>
                </td>
              </tr>
            )) : (
               <tr><td colSpan={6} className="p-12 text-center text-gray-500">No items found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* RESTOCK MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm animate-in zoom-in duration-200">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Create Purchase Order</h3>
                <p className="text-sm text-gray-500 mb-4">Restocking: <span className="font-bold text-gray-800">{selectedItem.name}</span></p>
                
                <form onSubmit={handleSubmitRestock} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Quantity to Order</label>
                        <input 
                            type="number" 
                            min="1"
                            value={restockQty}
                            onChange={e => setRestockQty(parseInt(e.target.value))}
                            className="w-full border border-gray-300 rounded-lg p-2 font-bold text-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                        />
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500">Est. Cost</span>
                        <span className="font-bold text-gray-900">${(restockQty * selectedItem.unitCost).toFixed(2)}</span>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <button type="button" onClick={() => setSelectedItem(null)} className="flex-1 py-2 border border-gray-300 rounded-lg font-bold text-sm hover:bg-gray-50">Cancel</button>
                        <button type="submit" className="flex-1 py-2 bg-[#0A1A3A] text-white rounded-lg font-bold text-sm hover:bg-[#152C55]">Submit PO</button>
                    </div>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default InventoryView;

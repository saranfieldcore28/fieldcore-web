
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import { motion } from 'framer-motion';

const ResearchView: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ text: string, sources: any[] } | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResult(null);
    
    try {
      const data = await geminiService.performMarketResearch(query);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [
    "Error code E1 on Carrier furnace",
    "Wholesale price of R-410A refrigerant 2025",
    "Average HVAC labor rates in Chicago",
    "Honeywell T6 Pro installation manual",
    "Plumbing code requirements for P-traps"
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
       <div className="text-center py-8">
          <h2 className="text-3xl font-black text-[#0A1A3A] tracking-tight mb-3">Market Intelligence</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Access real-time data on part pricing, diagnostics, competitor rates, and technical compliance using verified sources.
          </p>
       </div>

       {/* Search Bar */}
       <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-200 max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
             <div className="pl-4 text-gray-400">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
             </div>
             <input 
               type="text" 
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               placeholder="Ask about diagnostics, pricing, or regulations..." 
               className="flex-1 py-4 px-2 text-lg font-medium text-gray-900 focus:outline-none"
             />
             <button 
               type="submit" 
               disabled={loading}
               className={`px-8 py-3 rounded-xl font-bold text-white transition-all ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#2563EB] hover:bg-blue-700 shadow-md'}`}
             >
               {loading ? 'Scanning...' : 'Research'}
             </button>
          </form>
       </div>

       {/* Suggestions */}
       {!result && !loading && (
          <div className="flex flex-wrap justify-center gap-3 mt-4">
             {suggestions.map((s, i) => (
               <button 
                 key={i} 
                 onClick={() => setQuery(s)}
                 className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
               >
                 {s}
               </button>
             ))}
          </div>
       )}

       {/* Results Area */}
       {result && (
         <motion.div 
           initial={{ opacity: 0, y: 20 }} 
           animate={{ opacity: 1, y: 0 }} 
           className="grid md:grid-cols-3 gap-6 mt-12"
         >
            {/* Main Answer */}
            <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                     <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Research Briefing</h3>
               </div>
               <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {result.text}
               </div>
            </div>

            {/* Sources Column */}
            <div className="space-y-4">
               <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest px-1">Verified Sources</h3>
               {result.sources.length > 0 ? result.sources.map((source: any, i: number) => (
                  <a 
                    key={i} 
                    href={source.uri} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
                  >
                     <p className="text-xs font-bold text-gray-400 mb-1 truncate">{new URL(source.uri).hostname}</p>
                     <p className="text-sm font-bold text-gray-900 leading-tight group-hover:text-blue-600 line-clamp-2">{source.title}</p>
                     <div className="mt-3 flex items-center gap-1 text-[10px] font-bold text-blue-500">
                        <span>ACCESS SOURCE</span>
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                     </div>
                  </a>
               )) : (
                 <div className="p-4 bg-gray-50 rounded-xl text-center">
                    <p className="text-xs text-gray-500">No direct web citations returned.</p>
                 </div>
               )}
            </div>
         </motion.div>
       )}
    </div>
  );
};

export default ResearchView;

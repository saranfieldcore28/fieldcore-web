
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, Cell, PieChart, Pie } from 'recharts';
import { Job, FleetStats } from '../types';
import { geminiService } from '../services/geminiService';

interface ReportsViewProps {
  jobs: Job[];
  stats: FleetStats;
}

const ReportsView: React.FC<ReportsViewProps> = ({ jobs, stats }) => {
  const [aiSummary, setAiSummary] = useState<string>("Initializing CoreBrain AI analysis...");
  const [loading, setLoading] = useState(false);

  // --- DATA PREP FOR CHARTS ---
  // 1. Revenue by Tech
  const revenueByTech = React.useMemo(() => {
    const data: Record<string, number> = {};
    jobs.forEach(job => {
        const tech = job.technician === 'Unassigned' ? 'Backlog' : job.technician;
        data[tech] = (data[tech] || 0) + job.value;
    });
    return Object.keys(data).map(key => ({ name: key, value: data[key] }));
  }, [jobs]);

  // 2. Job Status Distribution
  const jobStatusDist = React.useMemo(() => {
      const data: Record<string, number> = {};
      jobs.forEach(job => {
          data[job.status] = (data[job.status] || 0) + 1;
      });
      return Object.keys(data).map(key => ({ name: key.replace('_', ' '), value: data[key] }));
  }, [jobs]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  useEffect(() => {
    const generateReport = async () => {
        if (jobs.length === 0) {
            setAiSummary("Insufficient operational data. Please process at least one job to generate AI insights.");
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            await new Promise(r => setTimeout(r, 1500)); // Simulate think time
            
            const topTech = revenueByTech.sort((a,b) => b.value - a.value)[0]?.name || "None";
            const totalJobs = jobs.length;
            const completionRate = Math.round((jobs.filter(j => j.status === 'COMPLETED').length / totalJobs) * 100);
            
            setAiSummary(`Based on the analysis of ${totalJobs} active service records, fleet efficiency is currently operating at ${completionRate}%. Technician ${topTech} is leading revenue generation. Recommendation: Monitor job completion times to optimize schedule density.`);
        } catch (e) {
            setAiSummary("AI Analysis unavailable.");
        } finally {
            setLoading(false);
        }
    };
    generateReport();
  }, [jobs, revenueByTech]);

  return (
    <div className="space-y-6">
       <div className="bg-[#0A1A3A] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2zM4.5 11a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9zm15 0a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9z"/></svg>
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">CoreBrain Executive Summary</h2>
              </div>
              <p className="text-lg text-blue-100 leading-relaxed font-medium max-w-4xl">
                  {loading ? (
                      <span className="animate-pulse">Analyzing fleet telemetry and revenue streams...</span>
                  ) : (
                      aiSummary
                  )}
              </p>
          </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {/* Chart 1 */}
           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
               <h3 className="text-sm font-bold text-gray-500 uppercase mb-6">Revenue Attribution</h3>
               {jobs.length > 0 ? (
                   <div className="h-80 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={revenueByTech} layout="vertical" margin={{ left: 20 }}>
                              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                              <XAxis type="number" hide />
                              <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12, fontWeight: 600}} />
                              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px'}} />
                              <Bar dataKey="value" fill="#2563EB" radius={[0, 4, 4, 0]} barSize={20} />
                          </BarChart>
                      </ResponsiveContainer>
                   </div>
               ) : (
                   <div className="h-80 w-full flex items-center justify-center text-gray-400 text-sm">No data available</div>
               )}
           </div>

           {/* Chart 2 */}
           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
               <h3 className="text-sm font-bold text-gray-500 uppercase mb-6">Job Status Distribution</h3>
               {jobs.length > 0 ? (
                   <div className="h-80 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                              <Pie
                                data={jobStatusDist}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                              >
                                {jobStatusDist.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                              <Legend verticalAlign="bottom" height={36}/>
                          </PieChart>
                      </ResponsiveContainer>
                   </div>
               ) : (
                   <div className="h-80 w-full flex items-center justify-center text-gray-400 text-sm">No data available</div>
               )}
           </div>
       </div>
    </div>
  );
};

export default ReportsView;

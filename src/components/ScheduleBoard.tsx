
import React from 'react';
import { Job, JobStatus, Technician } from '../types';

interface ScheduleBoardProps {
  jobs: Job[];
  technicians: Technician[];
  onJobClick: (job: Job) => void;
  onAssignJob?: (jobId: string, technicianId: string, startTime: string) => void;
}

const HOURS = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

const ScheduleBoard: React.FC<ScheduleBoardProps> = ({ jobs, technicians, onJobClick, onAssignJob }) => {
  
  const unassignedJobs = jobs.filter(j => j.technician === 'Unassigned');
  const assignedJobs = jobs.filter(j => j.technician !== 'Unassigned');

  // Drag Handlers
  const handleDragStart = (e: React.DragEvent, jobId: string) => {
      e.dataTransfer.setData('jobId', jobId);
      e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, techId: string, hourIndex: number) => {
      e.preventDefault();
      const jobId = e.dataTransfer.getData('jobId');
      if (jobId && onAssignJob) {
          const hour = 8 + hourIndex;
          const time = `${hour}:00`;
          onAssignJob(jobId, techId, time);
      }
  };

  // --- SMART DISPATCH ALGORITHM ---
  const handleSmartAssign = (job: Job) => {
      if(!onAssignJob) return;

      // 1. Filter for Available Techs
      const availableTechs = technicians.filter(t => t.status === 'AVAILABLE');

      if (availableTechs.length === 0) {
          alert('No technicians are currently marked AVAILABLE.');
          return;
      }

      // 2. Score Techs based on Fit
      const scoredTechs = availableTechs.map(tech => {
          let score = 0;
          
          // Zone Match (Simulating GPS proximity)
          // We check if the job location loosely matches the tech's zone text
          // In a real app, this would be geospatial distance
          if (job.location.includes(tech.zone) || tech.zone === 'Central') {
              score += 50; 
          }

          // Skill Match (Simple check)
          const jobType = job.type.split(' ')[0]; // e.g. "HVAC", "Plumbing"
          if (tech.skills.some(s => s.includes(jobType) || jobType.includes(s))) {
              score += 30;
          }

          return { tech, score };
      });

      // 3. Sort by Score Descending
      scoredTechs.sort((a, b) => b.score - a.score);
      const bestMatch = scoredTechs[0];

      if (bestMatch) {
          onAssignJob(job.id, bestMatch.tech.id, '08:00'); // Default to morning slot
          // Optional: Show a toast here via parent if possible, or just let the UI update
      } else {
          alert('Could not determine a suitable technician.');
      }
  };

  // ServiceTitan uses Job Type colors more than Status colors for the block body
  const getJobStyle = (job: Job) => {
    const startHour = parseInt(job.startTime.split(':')[0]); 
    const offset = Math.max(0, startHour - 8); 
    const width = job.duration; 
    
    // Type-based Coloring (Maintenance vs Repair vs Install)
    let typeColor = 'bg-gray-100 border-l-4 border-gray-500'; 
    if (job.type.includes('Maintenance')) typeColor = 'bg-green-50 border-l-4 border-green-500 text-green-900';
    else if (job.type.includes('Repair')) typeColor = 'bg-red-50 border-l-4 border-red-500 text-red-900';
    else if (job.type.includes('Install')) typeColor = 'bg-blue-50 border-l-4 border-blue-500 text-blue-900';
    else typeColor = 'bg-orange-50 border-l-4 border-orange-500 text-orange-900';

    return {
      left: `${(offset / HOURS.length) * 100}%`,
      width: `${(width / HOURS.length) * 100}%`,
      className: `absolute top-1 bottom-1 rounded-sm text-[10px] p-1.5 overflow-hidden cursor-pointer hover:shadow-lg hover:z-50 hover:brightness-95 transition-all shadow-sm flex flex-col leading-tight ${typeColor}`
    };
  };

  // Empty State
  if (technicians.length === 0) {
      return <div className="p-12 text-center text-gray-500">No resources configured.</div>;
  }

  return (
    <div className="flex h-full gap-0 bg-white border border-gray-300 shadow-sm rounded-none overflow-hidden select-none">
      
      {/* 1. DISPATCH QUEUE (Left Panel) */}
      <div className="w-72 border-r border-gray-300 bg-[#F4F5F7] flex flex-col z-20 shadow-[4px_0_10px_rgba(0,0,0,0.05)]">
        <div className="h-10 border-b border-gray-300 bg-white flex justify-between items-center px-4 shadow-sm">
           <span className="text-[11px] font-black uppercase text-gray-700 tracking-wider">Call Booking ({unassignedJobs.length})</span>
           <div className="flex gap-2">
                <button className="text-gray-400 hover:text-blue-600"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg></button>
           </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
           {unassignedJobs.length === 0 && (
               <div className="p-4 text-center">
                   <p className="text-xs text-gray-400 italic">No unassigned jobs.</p>
               </div>
           )}
           {unassignedJobs.map(job => (
             <div 
               key={job.id} 
               draggable
               onDragStart={(e) => handleDragStart(e, job.id)}
               onClick={() => onJobClick(job)}
               className="bg-white p-3 rounded border border-gray-300 shadow-sm cursor-grab active:cursor-grabbing hover:border-blue-500 hover:shadow-md transition-all group relative"
             >
                <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold text-blue-700 truncate">{job.customer.name}</span>
                    <button 
                        onClick={(e) => { e.stopPropagation(); handleSmartAssign(job); }}
                        className="text-gray-300 hover:text-purple-600 transition-colors"
                        title="Smart Assign (AI)"
                    >
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/></svg>
                    </button>
                </div>
                <div className="text-[10px] text-gray-500 font-medium truncate mb-2">{job.location}</div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold text-white uppercase ${
                            job.priority === 'High' ? 'bg-red-500' : 'bg-gray-500'
                        }`}>{job.priority.charAt(0)}</span>
                        <span className="text-[9px] text-gray-400 font-bold uppercase border border-gray-200 px-1 rounded">{job.type}</span>
                    </div>
                    <span className="text-[9px] font-bold bg-gray-100 text-gray-600 px-1 rounded">{job.duration}h</span>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* 2. GANTT CHART (Right Panel) */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        
        {/* Timeline Header */}
        <div className="h-10 border-b border-gray-300 flex bg-gray-50 shrink-0">
           <div className="w-56 border-r border-gray-300 bg-gray-50 flex items-center px-4 shrink-0">
              <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Technician</span>
           </div>
           <div className="flex-1 flex">
             {HOURS.map(hour => (
               <div key={hour} className="flex-1 border-r border-gray-200 px-1 flex items-center justify-start text-[10px] font-bold text-gray-400">
                 {hour}
               </div>
             ))}
           </div>
        </div>

        {/* Scrollable Grid */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative">
           
           {/* Grid Background Lines (Absolute) */}
           <div className="absolute inset-0 flex pl-56 pointer-events-none z-0">
              {HOURS.map((_, i) => (
                <div key={i} className="flex-1 border-r border-gray-100 h-full bg-white odd:bg-gray-50/30"></div>
              ))}
           </div>

           {/* Tech Rows */}
           {technicians.map(tech => (
             <div key={tech.id} className="h-28 border-b border-gray-200 flex relative z-10 hover:bg-blue-50/10 transition-colors">
                
                {/* Tech Card */}
                <div className="w-56 border-r border-gray-300 flex-shrink-0 p-3 bg-white z-20 flex flex-col justify-center">
                   <div className="flex items-center gap-3 mb-2">
                       <div className="relative">
                           <img loading="lazy" src={tech.avatar} className="w-10 h-10 rounded-full border border-gray-200 object-cover" alt={tech.name} />
                           <div className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${
                            tech.status === 'AVAILABLE' ? 'bg-blue-500' : tech.status === 'BUSY' ? 'bg-green-500' : 'bg-gray-400'
                           }`}></div>
                       </div>
                       <div>
                           <p className="text-xs font-bold text-gray-900 leading-tight">{tech.name}</p>
                           <p className="text-[10px] text-gray-500 font-medium">{tech.zone} Zone</p>
                       </div>
                   </div>
                   <div className="flex flex-wrap gap-1">
                       {tech.skills.map(s => (
                           <span key={s} className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[9px] font-bold text-gray-600">{s}</span>
                       ))}
                   </div>
                </div>

                {/* Drop Zone / Timeline */}
                <div className="flex-1 relative group flex">
                    {/* Render Droppable Columns */}
                    {HOURS.map((_, idx) => (
                        <div 
                            key={idx}
                            className="flex-1 h-full z-0 border-r border-transparent hover:bg-blue-100/30 transition-colors"
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, tech.id, idx)}
                        ></div>
                    ))}

                    {/* Render Assigned Jobs */}
                    {assignedJobs.filter(j => j.technician === tech.id).map(job => {
                       const style = getJobStyle(job);
                       return (
                         <div 
                           key={job.id} 
                           style={{ left: style.left, width: style.width }} 
                           className={style.className}
                           onClick={(e) => { e.stopPropagation(); onJobClick(job); }}
                         >
                           <div className="flex justify-between items-start">
                               <span className="font-bold truncate">{job.customer.name}</span>
                               <span className="text-[9px] opacity-70 font-mono">{job.startTime}</span>
                           </div>
                           <div className="truncate text-[9px] mt-0.5 font-medium">{job.city}</div>
                           <div className="mt-auto flex justify-between items-end">
                                <span className="font-black opacity-50 uppercase tracking-tighter">{job.type.split(' ')[0]}</span>
                                {job.status === 'COMPLETED' && <span className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></span>}
                           </div>
                         </div>
                       );
                     })}
                </div>

             </div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default ScheduleBoard;

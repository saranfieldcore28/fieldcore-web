
import React, { useState, useEffect } from 'react';
import { Customer, Job, JobStatus } from '../types';

interface CallBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBook: (job: Job, isNewCustomer: boolean) => void;
  existingCustomers: Customer[];
}

const CallBookingModal: React.FC<CallBookingModalProps> = ({ isOpen, onClose, onBook, existingCustomers }) => {
  const [step, setStep] = useState<1 | 2>(1); // 1: Identify, 2: Job Details
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  
  // Job Form State
  const [jobType, setJobType] = useState('Repair');
  const [priority, setPriority] = useState('Medium');
  const [marketingSource, setMarketingSource] = useState('Google LSA');
  const [description, setDescription] = useState('');

  // Reset state on open
  useEffect(() => {
    if (isOpen) {
        setStep(1);
        setSearchTerm('');
        setSelectedCustomer(null);
        setIsNewCustomer(false);
        setJobType('Repair');
        setPriority('Medium');
        setDescription('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const matchedCustomers = existingCustomers.filter(c => 
     c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     c.phone.includes(searchTerm) || 
     c.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateNewCustomer = () => {
      const newCust: Customer = {
          id: `C-${Date.now()}`,
          name: searchTerm || 'New Customer',
          phone: '(555) 000-0000',
          email: 'pending@email.com',
          address: 'Address Pending',
          city: 'Metro City',
          zip: '00000',
          type: 'Residential',
          status: 'Lead',
          balance: 0,
          lifetimeValue: 0,
          lastServiceDate: new Date().toISOString(),
          tags: ['New'],
          assets: []
      };
      setSelectedCustomer(newCust);
      setIsNewCustomer(true);
      setStep(2);
  };

  const handleSelectCustomer = (c: Customer) => {
      setSelectedCustomer(c);
      setIsNewCustomer(false);
      setStep(2);
  };

  const handleSubmit = () => {
      if (!selectedCustomer) return;

      const newJob: Job = {
          id: `FC-${Math.floor(Math.random() * 90000) + 10000}`,
          customer: selectedCustomer,
          type: jobType,
          status: JobStatus.PENDING,
          priority: priority as any,
          technician: 'Unassigned',
          startTime: '08:00', // Default, will be dragged on board
          duration: 2,
          location: selectedCustomer.address,
          description: description,
          lineItems: [],
          proposals: [],
          value: 0,
          createdAt: new Date().toISOString(),
          marketingSource: marketingSource,
          logs: [
              {
                  id: `LOG-${Date.now()}`,
                  timestamp: new Date().toISOString(),
                  action: 'JOB_CREATED',
                  details: `Job created via CSR Booking. Source: ${marketingSource}`,
                  user: 'CSR Agent'
              }
          ]
      };
      
      onBook(newJob, isNewCustomer);
      onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0A1A3A]/80 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl h-[600px] rounded-xl shadow-2xl flex overflow-hidden animate-in fade-in zoom-in duration-200">
          
          {/* Left Panel: Script & Flow */}
          <div className="w-1/3 bg-gray-50 border-r border-gray-200 p-6 flex flex-col">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Call Script</h3>
              
              <div className="space-y-6 flex-1">
                  <div className={`p-4 rounded-lg border transition-all ${step === 1 ? 'bg-white border-blue-500 shadow-md' : 'bg-transparent border-gray-200 opacity-50'}`}>
                      <div className="flex items-center gap-3 mb-2">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>1</span>
                          <span className="font-bold text-gray-900">Identify Caller</span>
                      </div>
                      <p className="text-xs text-gray-500 italic">"Thank you for calling FieldCore. Who am I speaking with?"</p>
                  </div>

                  <div className={`p-4 rounded-lg border transition-all ${step === 2 ? 'bg-white border-blue-500 shadow-md' : 'bg-transparent border-gray-200 opacity-50'}`}>
                      <div className="flex items-center gap-3 mb-2">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>2</span>
                          <span className="font-bold text-gray-900">Classify Job</span>
                      </div>
                      <p className="text-xs text-gray-500 italic">"How can we help you today? Is this an emergency?"</p>
                  </div>
              </div>
              
              <div className="mt-auto pt-6 border-t border-gray-200">
                 <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    System Online
                 </div>
              </div>
          </div>

          {/* Right Panel: Interactive Form */}
          <div className="flex-1 p-8 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-black text-[#0A1A3A] tracking-tight">Incoming Call</h2>
                  <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>
              </div>

              {step === 1 && (
                  <div className="flex-1 flex flex-col">
                      <div className="relative mb-6">
                          <input 
                             autoFocus
                             type="text" 
                             className="w-full text-lg p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                             placeholder="Search Name, Phone, or Address..."
                             value={searchTerm}
                             onChange={e => setSearchTerm(e.target.value)}
                          />
                          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                      </div>

                      <div className="flex-1 overflow-y-auto space-y-2 pr-2">
                          {matchedCustomers.map(c => (
                              <button 
                                key={c.id}
                                onClick={() => handleSelectCustomer(c)}
                                className="w-full text-left p-4 rounded-lg border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                              >
                                  <div className="flex justify-between items-start">
                                      <div>
                                          <p className="font-bold text-gray-900 group-hover:text-blue-700">{c.name}</p>
                                          <p className="text-sm text-gray-500">{c.address}</p>
                                      </div>
                                      <div className="text-right">
                                          <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${c.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{c.status}</span>
                                          {c.assets && c.assets[0] && (
                                              <p className="text-[10px] text-gray-400 mt-1">{c.assets[0].name}</p>
                                          )}
                                      </div>
                                  </div>
                              </button>
                          ))}
                          {matchedCustomers.length === 0 && searchTerm.length > 2 && (
                              <div className="text-center py-8">
                                  <p className="text-gray-400 mb-4">No matching records found.</p>
                                  <button 
                                    onClick={handleCreateNewCustomer}
                                    className="px-6 py-2 bg-[#0A1A3A] text-white rounded-lg font-bold text-sm hover:bg-[#152C55]"
                                  >
                                      + Create New Customer
                                  </button>
                              </div>
                          )}
                      </div>
                  </div>
              )}

              {step === 2 && selectedCustomer && (
                  <div className="flex-1 flex flex-col gap-4">
                      {/* Customer Summary */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex justify-between items-center">
                          <div>
                              <p className="font-bold text-[#0A1A3A]">{selectedCustomer.name}</p>
                              <p className="text-xs text-blue-600">{selectedCustomer.address}</p>
                          </div>
                          <button onClick={() => setStep(1)} className="text-xs font-bold text-blue-400 hover:text-blue-600 underline">Change</button>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                              <label className="text-[10px] font-black uppercase text-gray-400 tracking-wider">Job Type</label>
                              <select 
                                value={jobType} 
                                onChange={e => setJobType(e.target.value)}
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-bold text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                              >
                                  <option>Repair</option>
                                  <option>Maintenance</option>
                                  <option>Installation</option>
                                  <option>Warranty</option>
                                  <option>Callback</option>
                              </select>
                          </div>
                          <div className="space-y-1">
                              <label className="text-[10px] font-black uppercase text-gray-400 tracking-wider">Priority</label>
                              <select 
                                value={priority} 
                                onChange={e => setPriority(e.target.value)}
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-bold text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                              >
                                  <option>Low</option>
                                  <option>Medium</option>
                                  <option>High</option>
                                  <option>Critical (Emergency)</option>
                              </select>
                          </div>
                      </div>

                      <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase text-gray-400 tracking-wider">Marketing Source <span className="text-red-500">*</span></label>
                          <select 
                            value={marketingSource} 
                            onChange={e => setMarketingSource(e.target.value)}
                            className="w-full p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm font-bold text-gray-900 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                          >
                              <option>Google LSA</option>
                              <option>Google PPC</option>
                              <option>Yelp</option>
                              <option>Referral</option>
                              <option>Previous Customer</option>
                              <option>Radio Spot</option>
                          </select>
                      </div>

                      <div className="space-y-1 flex-1">
                          <label className="text-[10px] font-black uppercase text-gray-400 tracking-wider">Description</label>
                          <textarea 
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            className="w-full h-full min-h-[100px] p-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                            placeholder="Describe the issue (e.g., 'No heat, thermostat blank')..."
                          ></textarea>
                      </div>

                      <div className="pt-2">
                          <button 
                            onClick={handleSubmit}
                            className="w-full py-4 bg-[#00C851] text-[#0A1A3A] rounded-xl text-sm font-black uppercase tracking-widest hover:brightness-110 shadow-lg"
                          >
                              Book Job
                          </button>
                      </div>
                  </div>
              )}
          </div>
      </div>
    </div>
  );
};

export default CallBookingModal;

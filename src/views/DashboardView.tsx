
import React, { useState, useMemo, useEffect } from 'react';
import { Job, JobStatus, FleetStats, Customer, Invoice, InvoiceStatus, InventoryItem, PricebookEntry, AuditLog, Asset, Technician } from '../types';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import ScheduleBoard from '../components/ScheduleBoard';
import JobDetailPanel from '../components/JobDetailPanel';
import CustomerDetailPanel from '../components/CustomerDetailPanel';
import CustomersView from '../components/CustomersView';
import FinancesView from '../components/FinancesView';
import InventoryView from '../components/InventoryView';
import ReportsView from '../components/ReportsView';
import ResearchView from '../components/ResearchView';
import PricebookView from '../views/PricebookView';
import CallBookingModal from '../components/CallBookingModal';
import { AnimatePresence, motion } from 'framer-motion';

// --- DATA TYPES ---

interface AppData {
  jobs: Job[];
  customers: Customer[];
  invoices: Invoice[];
  inventory: InventoryItem[];
  pricebook: PricebookEntry[];
  technicians: Technician[];
}

// --- INITIALIZATION ---
// Returns a "Clean Slate" state but with essential CONFIGURATION (Techs, Pricebook)
// so the user can immediately start working without 5 hours of setup.
const initializeAccount = (): AppData => {
  const technicians: Technician[] = [
    { id: 'T1', name: 'Marcus Aurelius', avatar: 'https://i.pravatar.cc/150?u=1', status: 'AVAILABLE', skills: ['HVAC', 'Install'], zone: 'North' },
    { id: 'T2', name: 'Sarah Connor', avatar: 'https://i.pravatar.cc/150?u=2', status: 'OFFLINE', skills: ['Plumb', 'Gas'], zone: 'West' },
    { id: 'T3', name: 'John Wick', avatar: 'https://i.pravatar.cc/150?u=3', status: 'AVAILABLE', skills: ['Sec', 'Controls'], zone: 'Central' },
    { id: 'T4', name: 'Ellen Ripley', avatar: 'https://i.pravatar.cc/150?u=4', status: 'OFFLINE', skills: ['Comml', 'Refrig'], zone: 'South' },
    { id: 'T5', name: 'Tony Stark', avatar: 'https://i.pravatar.cc/150?u=5', status: 'AVAILABLE', skills: ['Elec', 'Auto'], zone: 'East' },
  ];

  // Seed Pricebook (Catalog) - REAL HVAC DATA
  const pbItems = [
      { code: 'HVAC-101', name: 'Diagnostic & Travel Fee', desc: 'Standard system inspection, travel to site (Zone 1)', cost: 45, price: 89, memberPrice: 49, type: 'Service', cat: 'Diagnostic' },
      { code: 'HVAC-204', name: 'Capacitor 45/5 Replacement', desc: 'Dual run capacitor replacement (Part + Labor). 5 Year Warranty.', cost: 18, price: 245, memberPrice: 208, type: 'Material', cat: 'Electrical', linkedSku: 'EL-102' },
      { code: 'HVAC-305', name: 'Contactor 2-Pole 40A', desc: 'Heavy duty contactor replacement. Prevents compressor failure.', cost: 22, price: 189, memberPrice: 161, type: 'Material', cat: 'Electrical', linkedSku: 'EL-205' },
      { code: 'HVAC-400', name: 'Condenser Fan Motor (OEM)', desc: 'OEM Motor replacement labor & parts. Includes blade balance.', cost: 145, price: 685, memberPrice: 582, type: 'Equipment', cat: 'Motors', linkedSku: 'MT-050' },
      { code: 'HVAC-500', name: 'Evaporator Coil Acid Clean', desc: 'Chemical clean in place. Improves efficiency by 15%.', cost: 12, price: 299, memberPrice: 254, type: 'Service', cat: 'Maintenance' },
      { code: 'HVAC-600', name: 'Refrigerant Charge R-410A (lb)', desc: 'R-410A per pound. Includes leak search visual.', cost: 38, price: 125, memberPrice: 106, type: 'Material', cat: 'Refrigerant', linkedSku: 'CH-410' },
      { code: 'PLMB-100', name: 'Standard Drain Clear', desc: 'Auger up to 50ft. Main line or secondary.', cost: 5, price: 199, memberPrice: 169, type: 'Service', cat: 'Plumbing' },
      { code: 'PLMB-202', name: 'Water Heater Flush', desc: 'Remove sediment build-up. Extends tank life.', cost: 0, price: 149, memberPrice: 0, type: 'Service', cat: 'Plumbing' },
  ];

  const pricebook: PricebookEntry[] = pbItems.map((item, i) => ({
      id: `PB-${1000+i}`,
      code: item.code,
      name: item.name,
      description: item.desc,
      type: item.type as any,
      cost: item.cost,
      price: item.price,
      memberPrice: item.memberPrice,
      estHours: 1,
      category: item.cat,
      linkedSku: item.linkedSku,
      taxable: true
  }));

  // Seed Inventory (Stock) - REAL PARTS with SUPPLIERS & BINS
  const parts = [
      { name: 'Compressor 3 Ton Scroll', sku: 'CP-300', cost: 450, cat: 'HVAC', supplier: 'United Refrigeration', bin: 'A-12' },
      { name: 'Turbo 200 Capacitor', sku: 'EL-102', cost: 18, cat: 'Electric', supplier: 'Johnstone Supply', bin: 'B-04' },
      { name: 'Contactor 40A', sku: 'EL-205', cost: 22, cat: 'Electric', supplier: 'Johnstone Supply', bin: 'B-05' },
      { name: 'Freon R-410A (Drum)', sku: 'CH-410', cost: 380, cat: 'Chemical', supplier: 'Ferguson', bin: 'HZ-01' },
      { name: 'Honeywell T6 Pro', sku: 'CT-500', cost: 85, cat: 'Controls', supplier: 'Resideo Direct', bin: 'C-08' },
      { name: 'Copper Pipe 3/4 Type L', sku: 'PP-075', cost: 45, cat: 'Plumbing', supplier: 'Ferguson', bin: 'P-22' },
      { name: 'Fan Motor 1/2HP 1075', sku: 'MT-050', cost: 145, cat: 'Motors', supplier: 'Grainger', bin: 'M-03' }
  ];
  const locations = ['Warehouse A', 'Truck 1', 'Truck 2'] as const;
  const inventory: InventoryItem[] = [];

  for (let i = 0; i < 20; i++) {
      const part = parts[i % parts.length];
      const loc = locations[i % locations.length];
      // Simulate separate bins for trucks vs warehouse
      const finalBin = loc === 'Warehouse A' ? part.bin : 'Trk-Bin';
      
      inventory.push({
          id: `PRT-${1000+i}`,
          name: part.name,
          sku: `${part.sku}`, 
          category: part.cat,
          location: loc,
          binLocation: finalBin,
          supplier: part.supplier,
          quantity: Math.floor(Math.random() * 15) + 2, // Random stock 2-17
          minQuantity: 5,
          unitCost: part.cost,
          sellingPrice: part.cost * 2.2,
          lastRestocked: new Date().toISOString()
      });
  }

  // RETURN CLEAN TRANSACTION DATA
  return { 
      jobs: [], 
      customers: [], 
      invoices: [], 
      inventory, 
      pricebook,
      technicians 
  };
};

// --- MAIN VIEW CONTROLLER (THE "BACKEND") ---

interface DashboardViewProps {
  onBackToHome: () => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [toast, setToast] = useState<{message: string, type: 'success'|'error'} | null>(null);

  // --- 1. PERSISTENT STATE ENGINE ---
  const [data, setData] = useState<AppData>(() => {
      // Try to load from local storage
      const saved = localStorage.getItem('fieldcore_pro_db_v1');
      if (saved) {
          try {
              const parsed = JSON.parse(saved);
              // Ensure we have technicians structure even if loading old data
              if (!parsed.technicians) parsed.technicians = initializeAccount().technicians;
              return parsed;
          } catch (e) {
              console.error("DB Load Error", e);
          }
      }
      return initializeAccount();
  });

  // Save to "DB" on every change
  useEffect(() => {
      localStorage.setItem('fieldcore_pro_db_v1', JSON.stringify(data));
  }, [data]);

  // Toast Helper
  useEffect(() => {
      if (toast) {
          const timer = setTimeout(() => setToast(null), 3000);
          return () => clearTimeout(timer);
      }
  }, [toast]);

  const showToast = (message: string, type: 'success'|'error' = 'success') => {
      setToast({ message, type });
  };

  // --- 2. BUSINESS LOGIC ENGINE (THE "BACKEND") ---

  const handleCreateJob = (newJob: Job, isNewCustomer: boolean) => {
    // Add default initial notes/photos structure
    const jobWithExtras = {
        ...newJob,
        notes: [],
        photos: []
    };

    setData(prev => {
        let newCustomers = [...prev.customers];
        // Ensure customer is added if new, or updated if existing
        if (isNewCustomer) {
            newCustomers = [newJob.customer, ...prev.customers];
        } else {
             // If existing, update last service date
             newCustomers = prev.customers.map(c => 
                c.id === newJob.customer.id ? { ...c, lastServiceDate: new Date().toISOString() } : c
             );
        }
        return {
          ...prev,
          jobs: [jobWithExtras, ...prev.jobs],
          customers: newCustomers
        };
    });
    showToast(`Job #${newJob.id} booked successfully`);
    setActiveTab('Schedule'); // Auto-navigate to schedule
  };

  const handleUpdateJobData = (updatedJob: Job) => {
     setData(prev => ({
       ...prev,
       jobs: prev.jobs.map(job => job.id === updatedJob.id ? updatedJob : job)
     }));
     // Keep selection in sync
     if (selectedJob && selectedJob.id === updatedJob.id) {
         setSelectedJob(updatedJob);
     }
  };

  const handleAddPricebookEntry = (entry: PricebookEntry) => {
      setData(prev => ({
          ...prev,
          pricebook: [entry, ...prev.pricebook]
      }));
      showToast(`${entry.name} added to Pricebook`);
  };

  // Drag & Drop Dispatch Logic
  const handleAssignJob = (jobId: string, technicianId: string, startTime: string) => {
      const job = data.jobs.find(j => j.id === jobId);
      if(!job) return;

      const tech = data.technicians.find(t => t.id === technicianId);
      const techName = tech ? tech.name : 'Unknown Tech';

      const dispatchLog: AuditLog = {
          id: `LOG-${Date.now()}`,
          timestamp: new Date().toISOString(),
          action: 'DISPATCHED',
          details: `Assigned to ${techName} at ${startTime}`,
          user: 'Dispatcher'
      };

      const updatedJob = {
          ...job,
          technician: technicianId,
          technicianName: techName,
          startTime: startTime,
          status: JobStatus.DISPATCHED,
          logs: [dispatchLog, ...(job.logs || [])]
      };

      // Also update Tech Status
      const updatedTechs = data.technicians.map(t => 
          t.id === technicianId ? { ...t, status: 'BUSY' as const } : t
      );

      setData(prev => ({
          ...prev,
          jobs: prev.jobs.map(j => j.id === jobId ? updatedJob : j),
          technicians: updatedTechs
      }));
      
      showToast(`Dispatched: ${job.customer.name} to ${techName}`);
  };

  // CRITICAL: This function simulates the backend "End Job" workflow
  // 1. Calculates Final Price + Tax
  // 2. Creates Invoice (PAID if payment collected)
  // 3. Deducts Inventory
  // 4. Updates Customer Balance
  const handleJobCompletion = (jobId: string, acceptedProposalIndex: number = 0) => {
    const job = data.jobs.find(j => j.id === jobId);
    if (!job) return;

    // Determine Final Amount
    const acceptedProposal = job.proposals[acceptedProposalIndex] || job.proposals[0];
    let subtotal = 0;
    let taxAmount = 0;
    
    // Fallback if no items (manual value)
    if (!acceptedProposal || acceptedProposal.items.length === 0) {
        subtotal = job.value;
        taxAmount = job.value * 0.0825;
    } else {
        acceptedProposal.items.forEach(item => {
            subtotal += item.total;
            if (item.taxable !== false) {
                taxAmount += item.total * 0.0825;
            }
        });
    }
    const finalAmount = subtotal + taxAmount;

    // 1. Deduct Inventory (Backend Logic)
    // Looks for pricebook items in the job that are linked to SKUs in inventory
    const newInventory = [...data.inventory];
    acceptedProposal?.items.forEach(item => {
        if (item.type === 'Material' || item.type === 'Equipment') {
            const pbEntry = data.pricebook.find(p => p.id === item.pricebookId);
            // Deduct from ALL locations for now to simulate consumption, or prefer 'Truck 1'
            if (pbEntry && pbEntry.linkedSku) {
                // Find matching part in inventory (partial match on SKU to allow for warehouse suffix)
                const invItemIndex = newInventory.findIndex(i => i.sku.includes(pbEntry.linkedSku!) && i.quantity > 0);
                if (invItemIndex !== -1) {
                    newInventory[invItemIndex] = {
                        ...newInventory[invItemIndex],
                        quantity: Math.max(0, newInventory[invItemIndex].quantity - item.qty)
                    };
                }
            }
        }
    });

    // 2. Generate Invoice & Check Payment Status
    // If we have a payment record, invoice is PAID immediately.
    const isPaid = !!job.paymentRecord;
    
    const newInvoice: Invoice = {
        id: `INV-${Date.now().toString().slice(-6)}`,
        jobId: job.id,
        customerId: job.customer.id,
        customerName: job.customer.name,
        issueDate: new Date().toISOString(),
        dueDate: new Date(Date.now() + 86400000 * 30).toISOString(), // Net 30
        amount: finalAmount,
        status: isPaid ? InvoiceStatus.PAID : InvoiceStatus.SENT,
        items: acceptedProposal?.items || [],
        paymentMethod: job.paymentRecord?.method,
        paidDate: isPaid ? new Date().toISOString() : undefined
    };

    // 3. Update Customer Balance
    const newCustomers = data.customers.map(c => {
        if (c.id === job.customer.id) {
            return {
                ...c,
                // Only increase balance if NOT paid. If paid, balance remains same (or decreases if they had debt)
                balance: isPaid ? c.balance : c.balance + finalAmount,
                lastServiceDate: new Date().toISOString(),
                lifetimeValue: c.lifetimeValue + finalAmount
            };
        }
        return c;
    });

    // 4. Update Tech Status back to AVAILABLE
    const updatedTechs = data.technicians.map(t => 
        t.id === job.technician ? { ...t, status: 'AVAILABLE' as const } : t
    );

    const completionLog: AuditLog = {
        id: `LOG-${Date.now()}`,
        timestamp: new Date().toISOString(),
        action: 'JOB_COMPLETED',
        details: `Job completed. Invoice ${newInvoice.id} generated (${isPaid ? 'PAID' : 'SENT'}). Inventory deducted.`,
        user: 'Technician App'
    };

    const updatedJob = { 
        ...job, 
        status: JobStatus.COMPLETED, 
        value: finalAmount,
        lineItems: acceptedProposal?.items || [],
        logs: [completionLog, ...(job.logs || [])]
    };

    setData(prev => ({
        ...prev,
        inventory: newInventory,
        invoices: [newInvoice, ...prev.invoices],
        customers: newCustomers,
        technicians: updatedTechs,
        jobs: prev.jobs.map(j => j.id === jobId ? updatedJob : j)
    }));

    setSelectedJob(updatedJob);
    showToast(`Job Completed! Invoice #${newInvoice.id} created.`);
  };

  const handleUpdateJobStatus = (id: string, newStatus: JobStatus) => {
    if (newStatus === JobStatus.COMPLETED) {
        handleJobCompletion(id);
    } else {
        const job = data.jobs.find(j => j.id === id);
        const statusLog: AuditLog = {
            id: `LOG-${Date.now()}`,
            timestamp: new Date().toISOString(),
            action: 'STATUS_CHANGE',
            details: `Status changed from ${job?.status} to ${newStatus}`,
            user: 'Dispatcher'
        };
        const updatedJob = { ...job!, status: newStatus, logs: [statusLog, ...(job?.logs || [])] };
        handleUpdateJobData(updatedJob);
    }
  };

  const handleRestock = (itemId: string, quantity: number) => {
      setData(prev => ({
          ...prev,
          inventory: prev.inventory.map(i => 
              i.id === itemId ? { ...i, quantity: i.quantity + quantity, lastRestocked: new Date().toISOString() } : i
          )
      }));
      showToast(`Purchase Order Processed. +${quantity} units.`);
  };

  const handleCollectPayment = (invoiceId: string) => {
      const invoice = data.invoices.find(i => i.id === invoiceId);
      if(!invoice) return;

      const updatedInvoices = data.invoices.map(i => 
          i.id === invoiceId ? { ...i, status: InvoiceStatus.PAID } : i
      );

      const updatedCustomers = data.customers.map(c => 
          c.id === invoice.customerId ? { ...c, balance: Math.max(0, c.balance - invoice.amount) } : c
      );

      setData(prev => ({
          ...prev,
          invoices: updatedInvoices,
          customers: updatedCustomers
      }));
      showToast(`Payment of $${invoice.amount} collected`);
  };

  // --- NAVIGATION HELPERS ---
  const handleSearchResultClick = (type: string, id: string) => {
      if (type === 'Job') {
          const j = data.jobs.find(x => x.id === id);
          if (j) {
              setActiveTab('Schedule');
              setSelectedJob(j);
          }
      } else if (type === 'Customer') {
          const c = data.customers.find(x => x.id === id);
          if (c) {
              setSelectedCustomer(c);
          }
      } else if (type === 'Invoice') {
          setActiveTab('Finances');
      }
  };

  const handleOpenCustomer = (customer: Customer) => {
      setSelectedCustomer(customer);
  };
  
  const handleOpenJobFromCustomer = (job: Job) => {
      setSelectedCustomer(null); // Close customer panel
      setSelectedJob(job); // Open job panel
  };

  const handleResetData = () => {
      if(window.confirm("WARNING: This will wipe all current jobs, customers, and invoices. Are you sure?")) {
          const fresh = initializeAccount();
          setData(fresh);
          localStorage.removeItem('fieldcore_pro_db_v1');
          showToast("System Reset to Default Configuration");
      }
  };

  // --- CALCULATE LIVE STATS ---
  const stats: FleetStats = useMemo(() => {
    const revenueFromInvoices = data.invoices
        .filter(i => new Date(i.issueDate).toDateString() === new Date().toDateString())
        .reduce((acc, i) => acc + i.amount, 0);

    return {
      activeTeams: data.technicians.filter(t => t.status === 'BUSY').length,
      avgResponseTime: data.jobs.length > 0 ? '48m' : '--',
      fleetHealth: 98,
      dailyRevenue: revenueFromInvoices,
      hoursSavedThisWeek: 0 // In real app, calc from job duration efficiency
    };
  }, [data.jobs, data.invoices, data.technicians]);


  const renderContent = () => {
    switch(activeTab) {
      case 'Dashboard':
        return (
          <Dashboard 
            stats={stats} 
            jobs={data.jobs} 
            invoices={data.invoices}
            customers={data.customers}
            onUpdateStatus={handleUpdateJobStatus}
            onOpenCreate={() => setIsModalOpen(true)}
            technicians={data.technicians}
          />
        );
      case 'Schedule':
      case 'Dispatch':
        return (
           <ScheduleBoard 
              jobs={data.jobs} 
              technicians={data.technicians}
              onJobClick={setSelectedJob} 
              onAssignJob={handleAssignJob}
           />
        );
      case 'Pricebook':
        return <PricebookView items={data.pricebook} onAddEntry={handleAddPricebookEntry} />;
      case 'Customers':
        return <CustomersView customers={data.customers} onCustomerClick={handleOpenCustomer} />;
      case 'Finances':
        return <FinancesView invoices={data.invoices} onCollectPayment={handleCollectPayment} />;
      case 'Inventory':
        // Pass Active Jobs & Pricebook to calculate committed stock
        return <InventoryView items={data.inventory} jobs={data.jobs} pricebook={data.pricebook} onRestock={handleRestock} />;
      case 'Reports':
        return <ReportsView jobs={data.jobs} stats={stats} />;
      case 'Intelligence':
        return <ResearchView />;
      default:
        return <div className="p-12 text-center text-gray-400 font-medium">Module Loading...</div>;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F3F4F6]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto relative">
        <Header 
            onNewDispatch={() => setIsModalOpen(true)} 
            allData={{ jobs: data.jobs, customers: data.customers, invoices: data.invoices }}
            onNavigate={handleSearchResultClick}
        />
        
        <main className="p-8 max-w-[1600px] mx-auto w-full">
          {/* Header Section */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{activeTab}</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">Live Production</span>
              </div>
              <p className="text-gray-500 text-sm">
                {activeTab === 'Dashboard' ? 'Real-time operational oversight.' : `Manage ${activeTab.toLowerCase()}.`}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
               <button 
                  onClick={handleResetData}
                  className="px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors shadow-sm"
                >
                  Reset Data
               </button>
               <button 
                  onClick={onBackToHome}
                  className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Log Out
               </button>
               <button 
                 onClick={() => setIsModalOpen(true)}
                 className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2 animate-pulse"
               >
                 <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                 Incoming Call
               </button>
            </div>
          </div>

          {renderContent()}
        </main>
      </div>

      <CallBookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onBook={handleCreateJob}
        existingCustomers={data.customers}
      />

      <JobDetailPanel 
        job={selectedJob} 
        onClose={() => setSelectedJob(null)}
        onUpdateStatus={handleUpdateJobStatus}
        pricebook={data.pricebook}
        inventory={data.inventory}
        onUpdateJob={handleUpdateJobData}
      />

      <CustomerDetailPanel 
         customer={selectedCustomer}
         onClose={() => setSelectedCustomer(null)}
         customerJobs={data.jobs.filter(j => j.customer.id === selectedCustomer?.id)}
         customerInvoices={data.invoices.filter(i => i.customerId === selectedCustomer?.id)}
         onOpenJob={handleOpenJobFromCustomer}
      />

      {/* TOAST NOTIFICATION */}
      <AnimatePresence>
          {toast && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className={`fixed bottom-8 right-8 px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 z-[100] ${
                    toast.type === 'success' ? 'bg-[#0A1A3A] text-white' : 'bg-red-600 text-white'
                }`}
              >
                  <div className={`w-2 h-2 rounded-full ${toast.type === 'success' ? 'bg-[#00C851]' : 'bg-white'}`}></div>
                  <span className="font-bold text-sm">{toast.message}</span>
              </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardView;

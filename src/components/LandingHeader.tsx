import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wind, Droplets, Zap, ChevronDown, Menu, X } from 'lucide-react';
import { FieldCoreLogo } from './FieldCoreLogo';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onEnterDashboard: () => void;
  headerRef?: React.RefObject<HTMLElement>;
}

export const Header: React.FC<HeaderProps> = ({ onEnterDashboard, headerRef }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header 
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/60 backdrop-blur-2xl border-b border-slate-200/50 flex flex-col shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
    >
      <div className="px-6 py-4 flex justify-between items-center w-full">
        <Link to="/" className="flex items-center gap-3 gsap-header-item cursor-pointer hover:opacity-80 transition-opacity">
          <FieldCoreLogo className="h-20 w-auto text-slate-950" />
        </Link>
        <nav className="hidden md:flex gap-10 text-[12px] uppercase tracking-[0.15em] font-bold text-slate-500 items-center">
          <Link to="/" className="gsap-header-item text-slate-950 relative group py-1">
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-950 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <div className="gsap-header-item relative group py-1">
            <span className="flex items-center gap-1 cursor-pointer hover:text-slate-950 transition-colors duration-300">
              Features <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 w-64 flex flex-col gap-1">
                <Link to="/features/scheduling-and-quoting" className="px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-slate-950 transition-colors flex items-center gap-2">
                  Scheduling & Quoting
                </Link>
                <Link to="/features/profit-tracking" className="px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-slate-950 transition-colors flex items-center gap-2">
                  Profit Tracking
                </Link>
                <Link to="/features/customer-management" className="px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-slate-950 transition-colors flex items-center gap-2">
                  Customer Management
                </Link>
                <Link to="/features/inventory-tracking" className="px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-slate-950 transition-colors flex items-center gap-2">
                  Inventory Tracking
                </Link>
                <Link to="/features/customer-growth" className="px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-slate-950 transition-colors flex items-center gap-2">
                  Customer Growth
                </Link>
              </div>
            </div>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-950 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </div>
          <div className="gsap-header-item relative group py-1">
            <span className="flex items-center gap-1 cursor-pointer hover:text-slate-950 transition-colors duration-300">
              Industries <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 w-48 flex flex-col gap-1">
                <Link to="/hvac" className="px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-slate-950 transition-colors flex items-center gap-2">
                  <Wind className="w-4 h-4 text-sky-500" /> HVAC
                </Link>
                <Link to="/plumbing" className="px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-slate-950 transition-colors flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-blue-500" /> Plumbing
                </Link>
                <Link to="/electrical" className="px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-slate-950 transition-colors flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" /> Electrical
                </Link>
              </div>
            </div>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-950 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </div>
          <Link to="/pricing" className="gsap-header-item relative group hover:text-slate-950 transition-colors duration-300 py-1">
            Pricing
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-950 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/about-and-contact" className="gsap-header-item relative group hover:text-slate-950 transition-colors duration-300 py-1">
            About Us & Contact Us
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-950 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </nav>
        <div className="flex gap-4 items-center">
          <div className="hidden md:flex gap-5 items-center">
            <button onClick={onEnterDashboard} className="gsap-header-item text-[12px] font-bold uppercase text-slate-600 hover:text-slate-950 transition-colors tracking-widest">
              Log In
            </button>
            <button onClick={() => navigate('/checkout')} className="gsap-header-item px-6 py-2.5 bg-slate-950 text-white rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] hover:-translate-y-0.5 active:translate-y-0">
              Free Trial
            </button>
          </div>
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4 text-[13px] font-bold uppercase tracking-widest text-slate-600 shadow-xl"
          >
            <Link to="/" onClick={closeMobileMenu} className="py-2 hover:text-slate-950 transition-colors">
              Home
            </Link>
            
            <div className="flex flex-col gap-2">
              <button onClick={() => toggleDropdown('features')} className="flex items-center justify-between py-2 hover:text-slate-950 transition-colors uppercase tracking-widest">
                Features <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'features' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openDropdown === 'features' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col gap-2 pl-4 border-l-2 border-slate-100 overflow-hidden"
                  >
                    <Link to="/features/scheduling-and-quoting" onClick={closeMobileMenu} className="py-2 text-[11px] hover:text-slate-950 transition-colors">Scheduling & Quoting</Link>
                    <Link to="/features/profit-tracking" onClick={closeMobileMenu} className="py-2 text-[11px] hover:text-slate-950 transition-colors">Profit Tracking</Link>
                    <Link to="/features/customer-management" onClick={closeMobileMenu} className="py-2 text-[11px] hover:text-slate-950 transition-colors">Customer Management</Link>
                    <Link to="/features/inventory-tracking" onClick={closeMobileMenu} className="py-2 text-[11px] hover:text-slate-950 transition-colors">Inventory Tracking</Link>
                    <Link to="/features/customer-growth" onClick={closeMobileMenu} className="py-2 text-[11px] hover:text-slate-950 transition-colors">Customer Growth</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-2">
              <button onClick={() => toggleDropdown('industries')} className="flex items-center justify-between py-2 hover:text-slate-950 transition-colors uppercase tracking-widest">
                Industries <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openDropdown === 'industries' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col gap-2 pl-4 border-l-2 border-slate-100 overflow-hidden"
                  >
                    <Link to="/hvac" onClick={closeMobileMenu} className="py-2 text-[11px] flex items-center gap-2 hover:text-slate-950 transition-colors"><Wind className="w-3 h-3 text-sky-500" /> HVAC</Link>
                    <Link to="/plumbing" onClick={closeMobileMenu} className="py-2 text-[11px] flex items-center gap-2 hover:text-slate-950 transition-colors"><Droplets className="w-3 h-3 text-blue-500" /> Plumbing</Link>
                    <Link to="/electrical" onClick={closeMobileMenu} className="py-2 text-[11px] flex items-center gap-2 hover:text-slate-950 transition-colors"><Zap className="w-3 h-3 text-amber-500" /> Electrical</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/pricing" onClick={closeMobileMenu} className="py-2 hover:text-slate-950 transition-colors">
              Pricing
            </Link>
            <Link to="/about-and-contact" onClick={closeMobileMenu} className="py-2 hover:text-slate-950 transition-colors">
              About Us & Contact Us
            </Link>
            
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 mt-2">
              <button onClick={onEnterDashboard} className="w-full py-3 bg-slate-100 text-slate-950 rounded-xl text-[12px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors">
                Log In
              </button>
              <button onClick={() => { closeMobileMenu(); navigate('/checkout'); }} className="w-full py-3 bg-slate-950 text-white rounded-xl text-[12px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-colors">
                Free Trial
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

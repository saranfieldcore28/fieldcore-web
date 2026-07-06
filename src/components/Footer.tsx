import React from 'react';
import { Link } from 'react-router-dom';
import { FieldCoreLogo } from './FieldCoreLogo';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-16">
        <div className="col-span-2 md:col-span-1 space-y-6">
          <div className="flex items-center gap-3">
            <FieldCoreLogo className="h-24 w-auto text-white" />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Manage jobs, send invoices, and get paid faster. Built for the solo tradesperson.</p>
        </div>
        <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
        </div>
        <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/about-and-contact" className="hover:text-white transition-colors">About Us & Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
        </div>
        <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="https://x.com/FieldCore5rt0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/field-core-50161a419" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center md:text-left text-slate-500 text-xs">
        © 2026 FieldCore. All rights reserved.
      </div>
    </footer>
  );
};


import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import DashboardView from './views/DashboardView';
import HVACPage from './views/HVACPage';
import PlumbingPage from './views/PlumbingPage';
import ElectricalPage from './views/ElectricalPage';
import SchedulingAndQuotingPage from './views/features/SchedulingAndQuotingPage';
import ProfitTrackingPage from './views/features/ProfitTrackingPage';
import CustomerManagementPage from './views/features/CustomerManagementPage';
import InventoryTrackingPage from './views/features/InventoryTrackingPage';
import CustomerGrowthPage from './views/features/CustomerGrowthPage';
import AboutAndContactPage from './views/AboutAndContactPage';
import PrivacyPolicyPage from './views/PrivacyPolicyPage';
import TermsOfServicePage from './views/TermsOfServicePage';
import RefundPolicyPage from './views/RefundPolicyPage';
import PricingPage from './views/PricingPage';
import CheckoutPage from './views/CheckoutPage';
import SupportPage from './views/SupportPage';
import AuthenticationPage from './views/AuthenticationPage';

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<LandingPage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/about-and-contact" element={<AboutAndContactPage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/refund-policy" element={<RefundPolicyPage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/pricing" element={<PricingPage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/checkout" element={<CheckoutPage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/support" element={<SupportPage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/auth" element={<AuthenticationPage />} />
      <Route path="/dashboard" element={<Navigate to="/auth" replace />} />
      <Route path="/hvac" element={<HVACPage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/plumbing" element={<PlumbingPage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/electrical" element={<ElectricalPage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/features/scheduling-and-quoting" element={<SchedulingAndQuotingPage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/features/profit-tracking" element={<ProfitTrackingPage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/features/customer-management" element={<CustomerManagementPage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/features/inventory-tracking" element={<InventoryTrackingPage onEnterDashboard={() => navigate('/auth')} />} />
      <Route path="/features/customer-growth" element={<CustomerGrowthPage onEnterDashboard={() => navigate('/auth')} />} />
    </Routes>
  );
};

export default App;

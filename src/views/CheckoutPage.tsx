import React, { useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Header as LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Shield, Lock, CheckCircle, ArrowLeft, Calendar, Building, User, Mail, Phone, Globe, DollarSign } from 'lucide-react';

export default function CheckoutPage({ onEnterDashboard }: { onEnterDashboard: () => void }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const planParam = searchParams.get('plan') || 'solo-pro';
  const isMax = planParam.toLowerCase() === 'solo-max';
  
  const selectedPlanName = isMax ? 'Solo Max' : 'Solo Pro';
  const selectedPlanPrice = isMax ? 79 : 39;
  
  // Calculate dynamic date + 5 days
  const getTrialEndDate = () => {
    const today = new Date();
    const trialEnd = new Date(today);
    trialEnd.setDate(today.getDate() + 5);
    return trialEnd.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // State for Customer Information
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    businessEmail: '',
    phone: '',
    country: 'United States'
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    zip: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.businessName || !formData.businessEmail) {
      alert('Please fill out all required customer information fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to process future subscription trial setup
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-sky-200 selection:text-sky-900 flex flex-col">
      <LandingHeader onEnterDashboard={onEnterDashboard} />

      <main className="flex-1 pt-32 pb-24 px-6 lg:pt-40 lg:pb-32 relative">
        {/* Decorative Grid and Ambient Lights */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-400/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1100px] mx-auto relative z-10">
          
          <button 
            onClick={() => navigate('/pricing')}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors mb-8 font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Pricing
          </button>

          <div className="text-center md:text-left mb-12">
            <h1 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
              Start Your 5-Day Free Trial
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl">
              You're only a few steps away from using FieldCore. Start your free trial today. You won't be charged until your trial ends.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!showSuccess ? (
              <motion.div 
                key="checkout-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid lg:grid-cols-12 gap-8 items-start"
              >
                
                {/* LEFT COLUMN: Input Forms */}
                <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-8">
                  
                  {/* Step 1: Customer Information */}
                  <div className="bg-white rounded-2xl border border-slate-200/60 p-6 md:p-8 shadow-xl shadow-slate-100/40">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <User className="w-5 h-5 text-sky-500" />
                      Customer Information
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">First Name <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <input 
                            required
                            type="text" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                            className="w-full bg-slate-50/50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl py-3 px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all text-sm font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">Last Name <span className="text-red-500">*</span></label>
                        <input 
                          required
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          className="w-full bg-slate-50/50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl py-3 px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all text-sm font-medium"
                        />
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">Business Name <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <Building className="w-4 h-4" />
                          </span>
                          <input 
                            required
                            type="text" 
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleInputChange}
                            placeholder="e.g. Apex Plumbing LLC"
                            className="w-full bg-slate-50/50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all text-sm font-medium"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">Business Email <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <Mail className="w-4 h-4" />
                          </span>
                          <input 
                            required
                            type="email" 
                            name="businessEmail"
                            value={formData.businessEmail}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full bg-slate-50/50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all text-sm font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">Phone Number <span className="text-xs font-normal text-slate-400">(Optional)</span></label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <Phone className="w-4 h-4" />
                          </span>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(555) 000-0000"
                            className="w-full bg-slate-50/50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all text-sm font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">Country <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <Globe className="w-4 h-4" />
                          </span>
                          <select 
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50/50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl py-3 pl-11 pr-4 text-slate-900 focus:outline-none transition-all text-sm font-semibold"
                          >
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Payment Information */}
                  <div className="bg-white rounded-2xl border border-slate-200/60 p-6 md:p-8 shadow-xl shadow-slate-100/40">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-sky-500" />
                        Payment Information
                      </h2>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                        <Lock className="w-3 h-3" /> Secure SSL
                      </div>
                    </div>

                    <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                      This is a secure checkout interface designed to integrate seamlessly with our certified payment gateway. Enter your card details to establish your future billing after the trial ends.
                    </p>

                    {/* Fake payment inputs that are fully styled */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">Credit / Debit Card</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <CreditCard className="w-4 h-4" />
                          </span>
                          <input 
                            required
                            type="text" 
                            name="cardNumber"
                            value={paymentData.cardNumber}
                            onChange={handlePaymentChange}
                            placeholder="4111 1111 1111 1111"
                            maxLength={19}
                            className="w-full bg-slate-50/50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all text-sm font-medium font-mono tracking-wider"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 space-y-2">
                          <label className="block text-sm font-semibold text-slate-700">Expiry Date</label>
                          <input 
                            required
                            type="text" 
                            name="expiry"
                            value={paymentData.expiry}
                            onChange={handlePaymentChange}
                            placeholder="MM / YY"
                            maxLength={7}
                            className="w-full bg-slate-50/50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl py-3 px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all text-sm font-medium text-center"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-slate-700">CVC</label>
                          <input 
                            required
                            type="text" 
                            name="cvc"
                            value={paymentData.cvc}
                            onChange={handlePaymentChange}
                            placeholder="123"
                            maxLength={4}
                            className="w-full bg-slate-50/50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl py-3 px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all text-sm font-medium text-center"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 font-medium">
                      <Shield className="w-4 h-4 text-sky-500 shrink-0" />
                      Your connection is encrypted with industry-standard 256-bit SSL protection. We never store raw card credentials on our servers.
                    </div>
                  </div>

                  {/* Notices and Button */}
                  <div className="space-y-6">
                    <div className="bg-sky-50/55 border border-sky-100/80 rounded-xl p-5 text-sm text-slate-600 leading-relaxed font-medium">
                      <span className="font-bold text-sky-800">Billing Notice: </span>
                      Your free trial lasts for 5 days. Unless cancelled before the trial expires, your selected payment method will be charged automatically for your chosen subscription plan.
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white font-bold rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:shadow-sky-500/30 text-base flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Setting Up Your Free Trial...
                        </>
                      ) : (
                        <>
                          Start Free Trial
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400 font-medium leading-relaxed max-w-lg mx-auto">
                      By clicking "Start Free Trial", you agree to our{' '}
                      <Link to="/terms-of-service" className="text-sky-500 hover:underline">Terms of Service</Link>,{' '}
                      <Link to="/privacy-policy" className="text-sky-500 hover:underline">Privacy Policy</Link>, and{' '}
                      <Link to="/refund-policy" className="text-sky-500 hover:underline">Refund Policy</Link>.
                    </p>
                  </div>

                </form>

                {/* RIGHT COLUMN: Order Summary */}
                <div className="lg:col-span-5 sticky top-32">
                  <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 md:p-8 shadow-xl relative overflow-hidden">
                    {/* Glowing Mesh on Top Right */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-[40px] rounded-full pointer-events-none" />
                    
                    <h3 className="text-lg font-bold uppercase tracking-wider text-slate-400 mb-6">Order Summary</h3>
                    
                    <div className="space-y-6">
                      
                      {/* Product Detail row */}
                      <div className="flex justify-between items-start pb-6 border-b border-slate-800">
                        <div>
                          <div className="text-base font-bold text-white mb-1">
                            FieldCore Subscription
                          </div>
                          <div className="text-sm font-semibold text-sky-400">
                            {selectedPlanName} Plan
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">
                            ${selectedPlanPrice}.00
                          </div>
                          <div className="text-xs text-slate-400 font-medium mt-0.5">
                            per month
                          </div>
                        </div>
                      </div>

                      {/* Detail list */}
                      <div className="space-y-4 text-sm font-medium">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Trial Length</span>
                          <span className="text-white font-semibold">5 Days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Billing Frequency</span>
                          <span className="text-white font-semibold">Monthly</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Amount Due Today</span>
                          <span className="text-emerald-400 font-extrabold text-base">$0.00</span>
                        </div>
                      </div>

                      {/* Expected first charge date panel */}
                      <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-800 flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                            Estimated First Charge Date
                          </div>
                          <div className="text-sm font-bold text-white">
                            {getTrialEndDate()}
                          </div>
                          <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                            No charges will occur before this date. Cancel any time to completely prevent automatic billing.
                          </div>
                        </div>
                      </div>

                      {/* Guarantees list */}
                      <div className="pt-6 border-t border-slate-800 space-y-3.5">
                        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          No contract, cancel anytime
                        </div>
                        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          5 Days of full premium access
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </motion.div>
            ) : (
              <motion.div 
                key="checkout-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl mx-auto text-center bg-white border border-slate-200/60 rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-slate-100"
              >
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-4 tracking-tight">
                  Trial Started Successfully!
                </h2>
                
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  Thank you, <span className="text-slate-900 font-bold">{formData.firstName}</span>! We have successfully created your trial account for the <span className="font-bold text-slate-900">{selectedPlanName}</span> plan under <span className="font-bold text-slate-900">{formData.businessName}</span>.
                </p>

                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl text-left text-sm text-slate-600 space-y-3 mb-10 max-w-md mx-auto font-medium">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Account Email:</span>
                    <span className="font-bold text-slate-800">{formData.businessEmail}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Plan Option:</span>
                    <span className="font-bold text-sky-600">{selectedPlanName} Trial</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">First Billing Date:</span>
                    <span className="font-bold text-slate-800">{getTrialEndDate()}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/auth')}
                  className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg"
                >
                  Enter Your Dashboard
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>

      <Footer />
    </div>
  );
}

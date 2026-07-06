import React, { useEffect, useState } from 'react';
import { Header as LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/Footer';

const sections = [
  { id: "overview", title: "1. Overview" },
  { id: "monthly-subscriptions", title: "2. Monthly Subscriptions" },
  { id: "billing-errors", title: "3. Billing Errors & Duplicate Charges" },
  { id: "accidental-purchases", title: "4. Accidental Purchases" },
  { id: "how-to-cancel", title: "5. How to Cancel" },
  { id: "how-to-request-a-refund", title: "6. How to Request a Refund" },
  { id: "changes-to-policy", title: "7. Changes to This Policy" },
  { id: "contact", title: "8. Contact" },
];

export default function RefundPolicyPage({ onEnterDashboard }: { onEnterDashboard: () => void }) {
  const [activeSection, setActiveSection] = useState<string>("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200; // Offset for header

      let currentActive = activeSection;
      
      sectionElements.forEach((el) => {
        if (el && el.offsetTop <= scrollPosition) {
          currentActive = el.id;
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120; // sticky header offset
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-sky-200 selection:text-sky-900 flex flex-col">
      <LandingHeader onEnterDashboard={onEnterDashboard} />

      <main className="flex-1 pt-32 pb-24 px-6 lg:pt-40 lg:pb-32 relative">
        {/* Very subtle background texture */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

        <div className="max-w-[850px] mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">
              Refund Policy
            </h1>
            <p className="text-slate-500 font-medium text-lg">
              Last Updated: July 1, 2026
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 relative items-start">
            
            {/* Sticky Table of Contents */}
            <aside className="hidden lg:block w-64 shrink-0 sticky top-32">
              <nav className="flex flex-col border-l border-slate-200 pl-4 space-y-1.5 py-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left text-sm font-medium py-1.5 transition-colors relative ${
                      activeSection === section.id 
                        ? 'text-sky-600' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {activeSection === section.id && (
                      <span className="absolute -left-4 top-0 bottom-0 w-0.5 bg-sky-500" />
                    )}
                    {section.title}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content Area */}
            <article className="flex-1 bg-white rounded-2xl border border-slate-200/60 p-8 md:p-12 shadow-xl shadow-slate-100/50">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:text-slate-900 prose-h2:mb-6 prose-h2:mt-12 prose-h3:text-lg prose-h3:font-bold prose-h3:text-slate-800 prose-h3:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline">
                
                <p className="text-lg text-slate-700 font-medium mb-12">
                  FIELDCORE REFUND POLICY
                </p>

                <div id="overview" className="scroll-mt-32">
                  <h2>1. OVERVIEW</h2>
                  <p>
                    This Refund Policy describes how refunds are handled for subscription payments on the FieldCore SaaS platform. It applies to all subscription plans, including the Starter, Solo Pro, and Solo Max plans.
                  </p>
                  <p>
                    We aim to provide a transparent, fair billing process for all solo tradespeople using our service to manage their operations.
                  </p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="monthly-subscriptions" className="scroll-mt-32">
                  <h2>2. MONTHLY SUBSCRIPTIONS</h2>
                  <p>
                    FieldCore billing is processed on a subscription basis. We do not offer prorated refunds or partial billing period refunds. 
                  </p>
                  <p>
                    If you choose to cancel your subscription, you will retain full access to all features associated with your plan until the end of your current billing cycle. At that point, the subscription will terminate, and you will not be billed further. Any amounts already paid for the current active period are completely non-refundable.
                  </p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="billing-errors" className="scroll-mt-32">
                  <h2>3. BILLING ERRORS & DUPLICATE CHARGES</h2>
                  <p>
                    In the event that you are charged incorrectly, billed multiple times for the same subscription period, or charged after a successfully confirmed cancellation due to a system error, we will issue a full refund for the erroneous charge(s).
                  </p>
                  <p>
                    Please contact our support team immediately if you notice any discrepancies in your statements, and we will promptly investigate and resolve the issue.
                  </p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="accidental-purchases" className="scroll-mt-32">
                  <h2>4. ACCIDENTAL PURCHASES</h2>
                  <p>
                    We understand that accidental purchases or subscription plan choices can happen. If you accidentally purchased a subscription and report this to us within forty-eight (48) hours of the initial charge, you may be eligible for a full refund of that charge.
                  </p>
                  <p>
                    Please note that eligibility for an accidental purchase refund is reviewed and determined at our sole discretion, and is subject to verification that no significant platform activity occurred during that period.
                  </p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="how-to-cancel" className="scroll-mt-32">
                  <h2>5. HOW TO CANCEL</h2>
                  <p>
                    You have complete control over your subscription and can cancel at any time. There are no cancellation fees, contracts, or lock-in periods.
                  </p>
                  <p>
                    To cancel your subscription, you can:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Navigate to <strong>Account Settings &gt; Billing</strong> within the dashboard and click the cancel subscription option.</li>
                    <li>Email our billing and support team directly at <a href="mailto:work@fieldcore.co.in">work@fieldcore.co.in</a> requesting cancellation.</li>
                  </ul>
                  <p className="mt-4">
                    Cancellation strictly stops future billing cycles. It does not refund or prorate payments for the current active billing cycle.
                  </p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="how-to-request-a-refund" className="scroll-mt-32">
                  <h2>6. HOW TO REQUEST A REFUND</h2>
                  <p>
                    To request a refund under eligible circumstances (such as billing errors or accidental purchases within 48 hours), please submit a request to our billing team:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Send an email to <a href="mailto:work@fieldcore.co.in">work@fieldcore.co.in</a>.</li>
                    <li>Include your primary account email address.</li>
                    <li>Provide a detailed reason for the refund request and the date/amount of the transaction.</li>
                  </ul>
                  <p className="mt-4">
                    Once received, our billing operations team will review your request. We aim to respond to all refund inquiries within three (3) business days.
                  </p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="changes-to-policy" className="scroll-mt-32">
                  <h2>7. CHANGES TO THIS POLICY</h2>
                  <p>
                    FieldCore reserves the right to modify or update this Refund Policy at any time to reflect changes in our services, billing platforms, or regulatory requirements. 
                  </p>
                  <p>
                    Any updates to this policy will be posted directly on this page, and the "Last Updated" date at the top will be updated accordingly. We encourage you to review this policy periodically.
                  </p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="contact" className="scroll-mt-32">
                  <h2>8. CONTACT</h2>
                  <p>
                    If you have any questions, concerns, or feedback regarding our Refund Policy, billing processes, or account statuses, please do not hesitate to contact our dedicated support team:
                  </p>
                  <p className="font-semibold text-slate-800 mt-2">
                    Email Support: <a href="mailto:work@fieldcore.co.in" className="text-sky-600 hover:underline">work@fieldcore.co.in</a>
                  </p>
                </div>

              </div>
            </article>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

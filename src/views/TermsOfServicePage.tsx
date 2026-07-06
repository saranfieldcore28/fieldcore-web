import React, { useEffect, useState } from 'react';
import { Header as LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/Footer';

const sections = [
  { id: "acceptance-of-terms", title: "1. Acceptance of Terms" },
  { id: "description-of-service", title: "2. Description of Service" },
  { id: "eligibility", title: "3. Eligibility" },
  { id: "user-accounts", title: "4. User Accounts" },
  { id: "acceptable-use", title: "5. Acceptable Use" },
  { id: "email-communications-and-anti-spam-policy", title: "6. Email Communications and Anti-Spam Policy" },
  { id: "subscriptions-and-billing", title: "7. Subscriptions and Billing" },
  { id: "cancellation-and-termination", title: "8. Cancellation and Termination" },
  { id: "intellectual-property", title: "9. Intellectual Property" },
  { id: "user-data", title: "10. User Data" },
  { id: "service-availability", title: "11. Service Availability" },
  { id: "disclaimer-of-warranties", title: "12. Disclaimer of Warranties" },
  { id: "limitation-of-liability", title: "13. Limitation of Liability" },
  { id: "indemnification", title: "14. Indemnification" },
  { id: "changes-to-the-service", title: "15. Changes to the Service" },
  { id: "changes-to-these-terms", title: "16. Changes to These Terms" },
  { id: "governing-law", title: "17. Governing Law" },
  { id: "contact-information", title: "18. Contact Information" },
];

export default function TermsOfServicePage({ onEnterDashboard }: { onEnterDashboard: () => void }) {
  const [activeSection, setActiveSection] = useState<string>("acceptance-of-terms");

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
              Terms of Service
            </h1>
            <p className="text-slate-500 font-medium text-lg">
              Last Updated: June 2026
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
                  FIELDCORE TERMS OF SERVICE
                </p>

                <div id="acceptance-of-terms" className="scroll-mt-32">
                  <h2>1. ACCEPTANCE OF TERMS</h2>
                  <p>
                    These Terms of Service ("Terms") govern your access to and use of the FieldCore website, software platform, applications, and related services (collectively, the "Service").
                  </p>
                  <p>
                    By accessing or using FieldCore, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
                  </p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="description-of-service" className="scroll-mt-32">
                  <h2>2. DESCRIPTION OF SERVICE</h2>
                  <p>
                    FieldCore is a software platform designed to help service businesses manage operations including customer records, job scheduling, quoting, invoicing, inventory tracking, profit tracking, maintenance reminders, review requests, and related business activities.
                  </p>
                  <p>
                    FieldCore may modify, improve, suspend, or discontinue portions of the Service at any time.
                  </p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="eligibility" className="scroll-mt-32">
                  <h2>3. ELIGIBILITY</h2>
                  <p>
                    You must be at least 18 years old and capable of entering into legally binding agreements to use the Service.
                  </p>
                  <p>
                    By using FieldCore, you represent and warrant that you meet these requirements.
                  </p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="user-accounts" className="scroll-mt-32">
                  <h2>4. USER ACCOUNTS</h2>
                  <p>To access certain features, you may be required to create an account.</p>
                  <p>You are responsible for:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Maintaining the confidentiality of your login credentials</li>
                    <li>All activities occurring under your account</li>
                    <li>Providing accurate and up-to-date information</li>
                    <li>Promptly notifying FieldCore of any unauthorized access</li>
                  </ul>
                  <p className="mt-4">
                    FieldCore is not responsible for losses resulting from unauthorized use of your account.
                  </p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="acceptable-use" className="scroll-mt-32">
                  <h2>5. ACCEPTABLE USE</h2>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Violate any applicable law or regulation</li>
                    <li>Use the Service for unlawful purposes</li>
                    <li>Interfere with the operation of the Service</li>
                    <li>Attempt unauthorized access to systems or accounts</li>
                    <li>Upload malicious software or harmful code</li>
                    <li>Engage in fraudulent, deceptive, or misleading conduct</li>
                    <li>Infringe upon intellectual property rights</li>
                    <li>Use the Service in a manner that may harm FieldCore or other users</li>
                  </ul>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="email-communications-and-anti-spam-policy" className="scroll-mt-32">
                  <h2>6. EMAIL COMMUNICATIONS AND ANTI-SPAM POLICY</h2>
                  <p>FieldCore provides tools that may be used to send business-related communications.</p>
                  <p>You agree that:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Email recipients must have a lawful basis to receive communications</li>
                    <li>Contact information must be obtained legally</li>
                    <li>Communications must comply with applicable laws</li>
                    <li>Unsubscribe requests must be respected where required</li>
                  </ul>
                  <p className="mt-4">You may not use FieldCore to send:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Spam</li>
                    <li>Purchased email lists</li>
                    <li>Unsolicited bulk email</li>
                    <li>Fraudulent messages</li>
                    <li>Phishing attempts</li>
                    <li>Misleading communications</li>
                    <li>Malware or harmful content</li>
                  </ul>
                  <p className="mt-4">
                    FieldCore reserves the right to suspend or terminate accounts engaged in abusive email practices.
                  </p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="subscriptions-and-billing" className="scroll-mt-32">
                  <h2>7. SUBSCRIPTIONS AND BILLING</h2>
                  <p>Certain portions of the Service may require a paid subscription.</p>
                  <p>Subscription fees are billed according to the plan selected by the user.</p>
                  <p>Users are responsible for providing valid payment information.</p>
                  <p>Failure to pay subscription fees may result in suspension or termination of access to paid features.</p>
                  <p>FieldCore reserves the right to modify pricing with reasonable notice.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="cancellation-and-termination" className="scroll-mt-32">
                  <h2>8. CANCELLATION AND TERMINATION</h2>
                  <p>Users may cancel subscriptions at any time.</p>
                  <p>Cancellation prevents future recurring charges but does not automatically entitle users to refunds for previously billed periods.</p>
                  <p>FieldCore may suspend or terminate accounts that violate these Terms or engage in conduct harmful to the Service.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="intellectual-property" className="scroll-mt-32">
                  <h2>9. INTELLECTUAL PROPERTY</h2>
                  <p>The Service, including software, trademarks, logos, text, graphics, interfaces, and related content, is owned by or licensed to FieldCore and is protected by applicable intellectual property laws.</p>
                  <p>These Terms do not grant ownership rights in the Service.</p>
                  <p>Users may not copy, modify, distribute, reverse engineer, or create derivative works from the Service except as permitted by law.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="user-data" className="scroll-mt-32">
                  <h2>10. USER DATA</h2>
                  <p>Users retain ownership of information they submit to the Service.</p>
                  <p>By using FieldCore, users grant FieldCore the rights necessary to process, store, and transmit information solely for the purpose of operating and improving the Service.</p>
                  <p>FieldCore handles information in accordance with its Privacy Policy.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="service-availability" className="scroll-mt-32">
                  <h2>11. SERVICE AVAILABILITY</h2>
                  <p>FieldCore strives to maintain reliable service availability but does not guarantee uninterrupted access.</p>
                  <p>Temporary interruptions may occur due to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Maintenance</li>
                    <li>System upgrades</li>
                    <li>Third-party provider outages</li>
                    <li>Security events</li>
                    <li>Circumstances beyond reasonable control</li>
                  </ul>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="disclaimer-of-warranties" className="scroll-mt-32">
                  <h2>12. DISCLAIMER OF WARRANTIES</h2>
                  <p>The Service is provided on an "as is" and "as available" basis.</p>
                  <p>To the fullest extent permitted by law, FieldCore disclaims all warranties, whether express, implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
                  <p>FieldCore does not guarantee that the Service will be error-free, uninterrupted, or suitable for every use case.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="limitation-of-liability" className="scroll-mt-32">
                  <h2>13. LIMITATION OF LIABILITY</h2>
                  <p>To the maximum extent permitted by law, FieldCore shall not be liable for indirect, incidental, consequential, special, exemplary, or punitive damages.</p>
                  <p>FieldCore's total liability arising from or related to the Service shall not exceed the amount paid by the user to FieldCore during the twelve months preceding the event giving rise to the claim.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="indemnification" className="scroll-mt-32">
                  <h2>14. INDEMNIFICATION</h2>
                  <p>You agree to defend, indemnify, and hold harmless FieldCore and its affiliates from claims, damages, liabilities, losses, costs, and expenses arising from:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Your use of the Service</li>
                    <li>Violation of these Terms</li>
                    <li>Violation of applicable laws</li>
                    <li>Infringement of third-party rights</li>
                  </ul>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="changes-to-the-service" className="scroll-mt-32">
                  <h2>15. CHANGES TO THE SERVICE</h2>
                  <p>FieldCore may add, modify, suspend, or discontinue features at any time.</p>
                  <p>FieldCore is not liable for changes to functionality, availability, or service offerings.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="changes-to-these-terms" className="scroll-mt-32">
                  <h2>16. CHANGES TO THESE TERMS</h2>
                  <p>FieldCore may update these Terms periodically.</p>
                  <p>Updated versions become effective upon posting.</p>
                  <p>Continued use of the Service after updates constitutes acceptance of the revised Terms.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="governing-law" className="scroll-mt-32">
                  <h2>17. GOVERNING LAW</h2>
                  <p>These Terms shall be governed by and interpreted in accordance with the laws applicable in the jurisdiction where FieldCore operates, without regard to conflict-of-law principles.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="contact-information" className="scroll-mt-32">
                  <h2>18. CONTACT INFORMATION</h2>
                  <p>If you have questions regarding these Terms, please contact:</p>
                  <p className="font-bold text-slate-800 mt-6">FieldCore</p>
                  <p>
                    Email: <a href="mailto:Work@fieldcore.co.in">Work@fieldcore.co.in</a><br />
                    Website: <a href="https://fieldcore.co.in" target="_blank" rel="noopener noreferrer">https://fieldcore.co.in</a>
                  </p>
                  <p className="mt-6">By using FieldCore, you acknowledge that you have read, understood, and agree to these Terms of Service.</p>
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


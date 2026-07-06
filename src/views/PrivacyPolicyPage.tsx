import React, { useEffect, useState } from 'react';
import { Header as LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/Footer';

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "how-we-use-information", title: "3. How We Use Information" },
  { id: "email-communications", title: "4. Email Communications" },
  { id: "information-sharing", title: "5. Information Sharing" },
  { id: "third-party-services", title: "6. Third-Party Services" },
  { id: "data-retention", title: "7. Data Retention" },
  { id: "data-security", title: "8. Data Security" },
  { id: "international-data-transfers", title: "9. International Data Transfers" },
  { id: "user-rights", title: "10. User Rights" },
  { id: "childrens-privacy", title: "11. Children's Privacy" },
  { id: "changes-to-this-policy", title: "12. Changes To This Policy" },
  { id: "contact-information", title: "13. Contact Information" },
];

export default function PrivacyPolicyPage({ onEnterDashboard }: { onEnterDashboard: () => void }) {
  const [activeSection, setActiveSection] = useState<string>("introduction");

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
              Privacy Policy
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
                  FIELDCORE PRIVACY POLICY
                </p>

                <div id="introduction" className="scroll-mt-32">
                  <h2>1. INTRODUCTION</h2>
                  <p>
                    FieldCore ("FieldCore", "we", "our", or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, store, and safeguard information when you access or use our website, software platform, applications, and related services.
                  </p>
                  <p>
                    By accessing or using FieldCore, you acknowledge that you have read and understood this Privacy Policy.
                  </p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="information-we-collect" className="scroll-mt-32">
                  <h2>2. INFORMATION WE COLLECT</h2>
                  
                  <h3>Account Information</h3>
                  <p>When creating an account or using our services, we may collect:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Business name</li>
                    <li>Phone number</li>
                    <li>Account credentials</li>
                    <li>Billing information</li>
                  </ul>

                  <h3 className="mt-8">Customer Data</h3>
                  <p>FieldCore allows users to store and manage customer information. This may include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Customer names</li>
                    <li>Contact information</li>
                    <li>Service records</li>
                    <li>Job history</li>
                    <li>Appointment details</li>
                    <li>Internal notes</li>
                    <li>Business-related communications</li>
                  </ul>

                  <h3 className="mt-8">Payment Information</h3>
                  <p>Payments are processed by trusted third-party payment providers.</p>
                  <p>FieldCore does not store complete payment card numbers or full payment credentials on its servers.</p>

                  <h3 className="mt-8">Technical Information</h3>
                  <p>We may automatically collect:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Operating system</li>
                    <li>Log data</li>
                    <li>Usage analytics</li>
                    <li>Diagnostic information</li>
                  </ul>

                  <h3 className="mt-8">Cookies and Similar Technologies</h3>
                  <p>FieldCore may use cookies and similar technologies to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Authenticate users</li>
                    <li>Maintain account sessions</li>
                    <li>Improve platform performance</li>
                    <li>Analyze usage patterns</li>
                    <li>Enhance user experience</li>
                    <li>Improve security</li>
                  </ul>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="how-we-use-information" className="scroll-mt-32">
                  <h2>3. HOW WE USE INFORMATION</h2>
                  <p>We may use information to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide and maintain services</li>
                    <li>Create and manage accounts</li>
                    <li>Process subscriptions and payments</li>
                    <li>Deliver customer support</li>
                    <li>Improve functionality and performance</li>
                    <li>Monitor service reliability</li>
                    <li>Prevent fraud and abuse</li>
                    <li>Enforce our policies</li>
                    <li>Comply with legal obligations</li>
                    <li>Communicate important service-related information</li>
                  </ul>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="email-communications" className="scroll-mt-32">
                  <h2>4. EMAIL COMMUNICATIONS</h2>
                  <p>FieldCore may send emails related to the operation and delivery of services.</p>
                  <p>These emails may include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Account verification emails</li>
                    <li>Password reset emails</li>
                    <li>Billing notifications</li>
                    <li>Subscription notices</li>
                    <li>Customer support communications</li>
                    <li>Service announcements</li>
                    <li>Product updates</li>
                    <li>Job reminder emails</li>
                    <li>Maintenance reminder emails</li>
                    <li>Review request emails</li>
                  </ul>
                  <p>Marketing emails will only be sent where permitted by applicable law.</p>
                  <p>Users may opt out of marketing communications at any time using available unsubscribe methods.</p>
                  <p>FieldCore does not support, promote, or permit spam, unsolicited bulk email, purchased email lists, or abusive email practices.</p>
                  <p>All email communications must comply with applicable laws and industry best practices.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="information-sharing" className="scroll-mt-32">
                  <h2>5. INFORMATION SHARING</h2>
                  <p>FieldCore does not sell personal information.</p>
                  <p>Information may be shared only when necessary to operate and improve the service.</p>
                  <p>Examples include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Payment processors</li>
                    <li>Cloud hosting providers</li>
                    <li>Email delivery providers</li>
                    <li>Analytics providers</li>
                    <li>Security providers</li>
                    <li>Professional service providers</li>
                  </ul>
                  <p>Information may also be disclosed when required by law or to protect legal rights.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="third-party-services" className="scroll-mt-32">
                  <h2>6. THIRD-PARTY SERVICES</h2>
                  <p>FieldCore may utilize third-party providers to support business operations.</p>
                  <p>Examples may include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Amazon Web Services (AWS)</li>
                    <li>Email delivery services</li>
                    <li>Payment processors</li>
                    <li>Analytics providers</li>
                    <li>Customer support systems</li>
                  </ul>
                  <p>These providers may process information only as necessary to perform services on our behalf.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="data-retention" className="scroll-mt-32">
                  <h2>7. DATA RETENTION</h2>
                  <p>We retain information only for as long as reasonably necessary to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide services</li>
                    <li>Maintain accounts</li>
                    <li>Resolve disputes</li>
                    <li>Enforce agreements</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                  <p>Users may request deletion of their account and associated information where permitted by law.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="data-security" className="scroll-mt-32">
                  <h2>8. DATA SECURITY</h2>
                  <p>FieldCore implements reasonable administrative, technical, and organizational safeguards designed to protect information.</p>
                  <p>Security measures may include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Access controls</li>
                    <li>Authentication systems</li>
                    <li>Encrypted communications</li>
                    <li>Secure cloud infrastructure</li>
                    <li>Monitoring systems</li>
                    <li>Security reviews</li>
                  </ul>
                  <p>While we strive to protect information, no method of transmission over the Internet or electronic storage system can be guaranteed to be completely secure.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="international-data-transfers" className="scroll-mt-32">
                  <h2>9. INTERNATIONAL DATA TRANSFERS</h2>
                  <p>Information may be processed and stored in countries where our service providers operate.</p>
                  <p>When information is transferred internationally, FieldCore takes reasonable steps to ensure appropriate safeguards are implemented to protect information.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="user-rights" className="scroll-mt-32">
                  <h2>10. USER RIGHTS</h2>
                  <p>Depending on applicable laws, users may have the right to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Access personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion</li>
                    <li>Request copies of information</li>
                    <li>Object to certain processing activities</li>
                    <li>Request restriction of processing</li>
                  </ul>
                  <p>Requests may be submitted using the contact information provided below.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="childrens-privacy" className="scroll-mt-32">
                  <h2>11. CHILDREN'S PRIVACY</h2>
                  <p>FieldCore is intended for business users and is not directed toward children under the age of 13.</p>
                  <p>We do not knowingly collect personal information from children.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="changes-to-this-policy" className="scroll-mt-32">
                  <h2>12. CHANGES TO THIS POLICY</h2>
                  <p>We may update this Privacy Policy periodically.</p>
                  <p>Changes become effective when the updated version is posted on this page.</p>
                  <p>Users are encouraged to review this Privacy Policy periodically.</p>
                </div>

                <hr className="border-slate-100 my-10" />

                <div id="contact-information" className="scroll-mt-32">
                  <h2>13. CONTACT INFORMATION</h2>
                  <p>If you have questions regarding this Privacy Policy, your account, data practices, or email communications, please contact:</p>
                  <p className="font-bold text-slate-800 mt-6">FieldCore</p>
                  <p>
                    Email: <a href="mailto:Work@fieldcore.co.in">Work@fieldcore.co.in</a><br />
                    Website: <a href="https://fieldcore.co.in" target="_blank" rel="noopener noreferrer">https://fieldcore.co.in</a>
                  </p>
                  <p className="mt-6">We will make reasonable efforts to respond to privacy-related inquiries within a reasonable timeframe.</p>
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

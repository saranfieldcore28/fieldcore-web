import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist');

// Check if build exists
if (!fs.existsSync(distPath)) {
  console.error('Error: "dist" folder does not exist. Please run "npm run build" first.');
  process.exit(1);
}

const baseHtmlPath = path.join(distPath, 'index.html');
if (!fs.existsSync(baseHtmlPath)) {
  console.error('Error: "dist/index.html" template not found.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

// Pre-rendered Header HTML component
const headerHtml = `
<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
  <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    <a href="/" class="flex items-center gap-3 group focus:outline-none">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
        <svg class="w-5 h-5 text-white" viewBox="4390 3640 1080 1350" fill="currentColor">
          <g transform="translate(0, 8500) scale(1, -1)">
            <path d="M5287 4850 l-228 -5 -116 -225 c-103 -199 -113 -222 -87 -205 16 10 74 46 129 80 260 160 550 351 538 356 -4 2 -111 2 -236 -1z" />
            <path d="M4480 4845 c0 -2 26 -44 58 -92 32 -48 94 -143 138 -210 43 -68 81 -123 84 -123 4 0 202 383 218 422 2 4 -109 8 -247 8 -138 0 -251 -2 -251 -5z" />
          </g>
        </svg>
      </div>
      <span class="text-xl font-display font-extrabold text-slate-900 tracking-tight">FieldCore</span>
    </a>
    <nav class="hidden md:flex items-center gap-8">
      <a href="/pricing" class="text-sm font-semibold text-slate-900">Pricing</a>
      <a href="/support" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Support</a>
      <a href="/about-and-contact" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About Us</a>
    </nav>
    <div class="flex items-center gap-4">
      <a href="/auth" class="px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm">Dashboard</a>
    </div>
  </div>
</header>
`;

// Pre-rendered Footer HTML component
const footerHtml = `
<footer class="bg-slate-950 text-white pt-20 pb-12 px-6 border-t border-slate-900">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
          <svg class="w-4 h-4 text-white" viewBox="4390 3640 1080 1350" fill="currentColor">
            <g transform="translate(0, 8500) scale(1, -1)">
              <path d="M5287 4850 l-228 -5 -116 -225 c-103 -199 -113 -222 -87 -205 16 10 74 46 129 80 260 160 550 351 538 356 -4 2 -111 2 -236 -1z" />
              <path d="M4480 4845 c0 -2 26 -44 58 -92 32 -48 94 -143 138 -210 43 -68 81 -123 84 -123 4 0 202 383 218 422 2 4 -109 8 -247 8 -138 0 -251 -2 -251 -5z" />
            </g>
          </svg>
        </div>
        <span class="text-lg font-bold tracking-tight">FieldCore</span>
      </div>
      <p class="text-slate-400 text-sm leading-relaxed max-w-xs">
        The complete Operating System for solo tradespeople (HVAC, plumbing, electrical) in the US.
      </p>
    </div>
    <div class="space-y-4">
      <h5 class="text-xs font-bold uppercase tracking-wider text-slate-400">Industries</h5>
      <ul class="space-y-2.5 text-sm font-medium text-slate-400">
        <li>HVAC Techs</li>
        <li>Plumbers</li>
        <li>Electricians</li>
      </ul>
    </div>
    <div class="space-y-4">
      <h5 class="text-xs font-bold uppercase tracking-wider text-slate-400">Company</h5>
      <ul class="space-y-2.5 text-sm font-medium text-slate-400">
        <li><a href="/about-and-contact" class="hover:text-white transition-colors">About Us & Contact Us</a></li>
        <li><a href="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</a></li>
        <li><a href="/terms-of-service" class="hover:text-white transition-colors">Terms of Service</a></li>
        <li><a href="/refund-policy" class="hover:text-white transition-colors">Refund Policy</a></li>
      </ul>
    </div>
    <div class="space-y-4">
      <h5 class="text-xs font-bold uppercase tracking-wider text-slate-400">Contact</h5>
      <p class="text-sm text-slate-400 font-medium">work@fieldcore.co.in</p>
    </div>
  </div>
  <div class="max-w-7xl mx-auto pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
    <div>&copy; 2026 FieldCore. All rights reserved.</div>
    <div>Tradesmen Operating System</div>
  </div>
</footer>
`;

// Helper to wrap pre-rendered page content with Header and Footer
function buildPageHtml(title, contentHtml) {
  const pageLayout = `
<div class="min-h-screen bg-[#FAFAFA] font-sans selection:bg-sky-200 selection:text-sky-900 flex flex-col">
  ${headerHtml}
  <main class="flex-1 pt-32 pb-24 px-6 lg:pt-40 lg:pb-32 relative">
    <div class="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none"></div>
    ${contentHtml}
  </main>
  ${footerHtml}
</div>
`;
  // Replace the default empty root and update title tag
  let page = baseHtml.replace('<div id="root"></div>', `<div id="root">${pageLayout}</div>`);
  page = page.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  return page;
}

// 1. Pricing Page HTML
const pricingContent = `
<div class="max-w-7xl mx-auto relative z-10">
  <div class="text-center mb-16">
    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest mb-4">
      Pricing Plans
    </span>
    <h1 class="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">
      Simple Pricing That <span class="text-sky-600">Grows With Your Business</span>
    </h1>
    <p class="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
      Everything you need to schedule jobs, manage customers, track profits, and generate repeat business. 5-day free trial. Cancel anytime.
    </p>
  </div>

  <!-- Subscription Cards -->
  <div class="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto mb-16">
    <!-- Solo Pro -->
    <div class="bg-slate-900 text-white rounded-[2rem] border border-slate-800 p-8 md:p-10 flex flex-col justify-between shadow-2xl relative">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-500 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
        ⭐ Best Value
      </div>
      <div>
        <h3 class="text-2xl font-bold text-white mb-2">Solo Pro</h3>
        <p class="text-sm text-slate-400 mb-6">Ideal for growing service businesses.</p>
        <div class="flex items-end gap-1 mb-2">
          <span class="text-2xl font-bold text-sky-400 mb-1">$</span>
          <span class="text-5xl font-extrabold text-white">39</span>
          <span class="text-lg font-medium text-slate-400 mb-1">/mo</span>
        </div>
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold bg-sky-500/20 text-sky-200 border border-sky-500/20 mb-8">
          Up to 50 Jobs Per Month
        </div>
        <ul class="space-y-4 mb-8">
          <li class="flex items-center gap-3 text-sm text-slate-300"><span class="text-sky-400 font-bold">&#10003;</span> Client CRM</li>
          <li class="flex items-center gap-3 text-sm text-slate-300"><span class="text-sky-400 font-bold">&#10003;</span> Job Scheduling</li>
          <li class="flex items-center gap-3 text-sm text-slate-300"><span class="text-sky-400 font-bold">&#10003;</span> Quote Templates</li>
          <li class="flex items-center gap-3 text-sm text-slate-300"><span class="text-sky-400 font-bold">&#10003;</span> Time Tracking</li>
          <li class="flex items-center gap-3 text-sm text-slate-300"><span class="text-sky-400 font-bold">&#10003;</span> Inventory Tracking</li>
          <li class="flex items-center gap-3 text-sm text-slate-300"><span class="text-sky-400 font-bold">&#10003;</span> Profit Tracking</li>
          <li class="flex items-center gap-3 text-sm text-slate-300"><span class="text-sky-400 font-bold">&#10003;</span> Maintenance Reminder Emails</li>
          <li class="flex items-center gap-3 text-sm text-slate-300"><span class="text-sky-400 font-bold">&#10003;</span> Review Requests</li>
        </ul>
      </div>
      <a href="/checkout?plan=solo-pro" class="w-full text-center py-4 rounded-xl text-sm font-bold bg-sky-500 text-white hover:bg-sky-400 transition-all">Start 5-Day Free Trial</a>
    </div>

    <!-- Solo Max -->
    <div class="bg-white rounded-[2rem] border border-slate-200/80 p-8 md:p-10 flex flex-col justify-between shadow-xl shadow-slate-100">
      <div>
        <h3 class="text-2xl font-bold text-slate-900 mb-2">Solo Max</h3>
        <p class="text-sm text-slate-500 mb-6">Built for high-volume service businesses.</p>
        <div class="flex items-end gap-1 mb-2">
          <span class="text-2xl font-bold text-slate-400 mb-1">$</span>
          <span class="text-5xl font-extrabold text-slate-900">79</span>
          <span class="text-lg font-medium text-slate-400 mb-1">/mo</span>
        </div>
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold bg-slate-100 text-slate-700 border border-slate-200 mb-8">
          51–100 Jobs Per Month
        </div>
        <ul class="space-y-4 mb-8">
          <li class="flex items-center gap-3 text-sm text-slate-600"><span class="text-sky-500 font-bold">&#10003;</span> Client CRM</li>
          <li class="flex items-center gap-3 text-sm text-slate-600"><span class="text-sky-500 font-bold">&#10003;</span> Job Scheduling</li>
          <li class="flex items-center gap-3 text-sm text-slate-600"><span class="text-sky-500 font-bold">&#10003;</span> Quote Templates</li>
          <li class="flex items-center gap-3 text-sm text-slate-600"><span class="text-sky-500 font-bold">&#10003;</span> Time Tracking</li>
          <li class="flex items-center gap-3 text-sm text-slate-600"><span class="text-sky-500 font-bold">&#10003;</span> Inventory Tracking</li>
          <li class="flex items-center gap-3 text-sm text-slate-600"><span class="text-sky-500 font-bold">&#10003;</span> Profit Tracking</li>
          <li class="flex items-center gap-3 text-sm text-slate-600"><span class="text-sky-500 font-bold">&#10003;</span> Maintenance Reminder Emails</li>
          <li class="flex items-center gap-3 text-sm text-slate-600"><span class="text-sky-500 font-bold">&#10003;</span> Review Requests</li>
        </ul>
      </div>
      <a href="/checkout?plan=solo-max" class="w-full text-center py-4 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all">Start 5-Day Free Trial</a>
    </div>
  </div>

  <!-- Billing Information -->
  <div class="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-white border border-slate-200/60 shadow-lg text-center mb-24">
    <h3 class="text-base font-bold uppercase tracking-wider text-slate-950 mb-4">Billing Information</h3>
    <div class="grid md:grid-cols-2 gap-4 text-sm text-slate-600 text-left max-w-2xl mx-auto">
      <div>&#10003; All plans include a free 5-day trial.</div>
      <div>&#10003; Your subscription begins automatically when the trial ends unless cancelled beforehand.</div>
      <div>&#10003; Cancel anytime during the trial to avoid being charged.</div>
      <div>&#10003; Prices are displayed in USD.</div>
      <div>&#10003; Applicable taxes may be added where required by law.</div>
      <div class="md:col-span-2">&#10003; By subscribing, you agree to our Terms of Service, Privacy Policy and Refund Policy.</div>
    </div>
  </div>

  <!-- FAQ Section -->
  <div class="max-w-3xl mx-auto mt-24">
    <h2 class="text-3xl font-display font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
    <div class="space-y-6">
      <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h4 class="text-lg font-bold text-slate-900 mb-2">How does the 5-day free trial work?</h4>
        <p class="text-slate-600">You can use all features included in your selected plan for five days at no cost. If you cancel before the trial ends, you will not be charged.</p>
      </div>
      <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h4 class="text-lg font-bold text-slate-900 mb-2">When will I be charged?</h4>
        <p class="text-slate-600">Your payment method will only be charged once your 5-day trial expires unless you cancel beforehand.</p>
      </div>
      <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h4 class="text-lg font-bold text-slate-900 mb-2">Can I cancel anytime?</h4>
        <p class="text-slate-600">Yes. You can cancel your subscription at any time. If you cancel during your free trial, you will not be charged.</p>
      </div>
      <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h4 class="text-lg font-bold text-slate-900 mb-2">Do you offer refunds?</h4>
        <p class="text-slate-600">Payments are generally non-refundable except where required by law or in limited circumstances such as duplicate charges or verified billing errors. Please see our Refund Policy for full details.</p>
      </div>
      <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h4 class="text-lg font-bold text-slate-900 mb-2">Can I upgrade or downgrade later?</h4>
        <p class="text-slate-600">Yes. You can change your subscription plan at any time from your account settings.</p>
      </div>
      <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h4 class="text-lg font-bold text-slate-900 mb-2">What happens if I exceed my monthly job limit?</h4>
        <p class="text-slate-600">You'll be prompted to upgrade to the next plan to continue creating additional jobs.</p>
      </div>
      <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h4 class="text-lg font-bold text-slate-900 mb-2">Is my payment secure?</h4>
        <p class="text-slate-600">Yes. Payments are securely processed through our trusted payment partners using industry-standard encryption.</p>
      </div>
    </div>
  </div>
</div>
`;

// 2. Terms of Service Page HTML
const termsContent = `
<div class="max-w-[850px] mx-auto relative z-10">
  <div class="mb-12 md:mb-16">
    <h1 class="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">Terms of Service</h1>
    <p class="text-slate-500 font-medium text-lg">Last Updated: June 2026</p>
  </div>
  <div class="bg-white rounded-2xl border border-slate-200/60 p-8 md:p-12 shadow-xl shadow-slate-100">
    <div class="prose prose-slate max-w-none text-slate-600 space-y-8">
      <p class="text-lg text-slate-700 font-medium">FIELDCORE TERMS OF SERVICE</p>
      
      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">1. ACCEPTANCE OF TERMS</h2>
        <p>These Terms of Service ("Terms") govern your access to and use of the FieldCore website, software platform, applications, and related services (collectively, the "Service").</p>
        <p class="mt-2">By accessing or using FieldCore, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.</p>
      </div>
      
      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">2. DESCRIPTION OF SERVICE</h2>
        <p>FieldCore is a SaaS field service management platform built for solo tradespeople (plumbers, electricians, HVAC techs) in the US, designed to help organize jobs, manage invoicing, schedules, and collections.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">3. SUBSCRIPTIONS AND BILLING</h2>
        <p>You agree to pay the subscription fees associated with your chosen plan. All payments are non-refundable except as explicitly specified in our Refund Policy. Billing cycles renew automatically unless cancelled from Account Settings.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">4. CONTACT INFORMATION</h2>
        <p>For questions or notices regarding these Terms, please email our support team at <a href="mailto:work@fieldcore.co.in" class="text-sky-600 hover:underline">work@fieldcore.co.in</a>.</p>
      </div>
    </div>
  </div>
</div>
`;

// 3. Privacy Policy Page HTML
const privacyContent = `
<div class="max-w-[850px] mx-auto relative z-10">
  <div class="mb-12 md:mb-16">
    <h1 class="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">Privacy Policy</h1>
    <p class="text-slate-500 font-medium text-lg">Last Updated: June 2026</p>
  </div>
  <div class="bg-white rounded-2xl border border-slate-200/60 p-8 md:p-12 shadow-xl shadow-slate-100">
    <div class="prose prose-slate max-w-none text-slate-600 space-y-8">
      <p class="text-lg text-slate-700 font-medium">FIELDCORE PRIVACY POLICY</p>

      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">1. INTRODUCTION</h2>
        <p>FieldCore respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, store, and safeguard your data.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">2. INFORMATION WE COLLECT</h2>
        <p>We collect account details (name, email, phone, business name), technical logs, usage analytics, and customer data that you upload to the platform for job scheduling and tracking.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">3. HOW WE USE INFORMATION</h2>
        <p>We use your information to operate and maintain the SaaS platform, process subscriptions, send client invoice reminders, and provide customer support.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">4. CONTACT INFORMATION</h2>
        <p>For questions regarding our privacy practices, please contact us at <a href="mailto:work@fieldcore.co.in" class="text-sky-600 hover:underline">work@fieldcore.co.in</a>.</p>
      </div>
    </div>
  </div>
</div>
`;

// 4. Refund Policy Page HTML
const refundContent = `
<div class="max-w-[850px] mx-auto relative z-10">
  <div class="mb-12 md:mb-16">
    <h1 class="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">Refund Policy</h1>
    <p class="text-slate-500 font-medium text-lg">Last Updated: July 1, 2026</p>
  </div>
  <div class="bg-white rounded-2xl border border-slate-200/60 p-8 md:p-12 shadow-xl shadow-slate-100">
    <div class="prose prose-slate max-w-none text-slate-600 space-y-8">
      <p class="text-lg text-slate-700 font-medium">FIELDCORE REFUND POLICY</p>

      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">1. Overview</h2>
        <p>This policy applies to FieldCore subscription payments (Starter, Solo Pro, Solo Max plans). We want solo tradespeople using our service to have a fair, simple, and transparent billing experience.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">2. Monthly Subscriptions</h2>
        <p>We do not offer refunds or prorated refunds for partial billing periods. If a customer cancels their subscription, they retain full access to their features and active plan until the end of their current billing cycle, but the amount already paid is non-refundable.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">3. Billing Errors & Duplicate Charges</h2>
        <p>If a customer is charged incorrectly, charged twice, or billed after cancellation due to a system error, we will issue a full refund for the erroneous charge. Please contact support immediately to report duplicate charges.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">4. Accidental Purchases</h2>
        <p>Accidental subscription purchases reported within 48 hours of the charge may be eligible for a full refund at our sole discretion, provided that no significant platform activity has occurred during that period.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">5. How to Cancel</h2>
        <p>Customers can cancel anytime from Account Settings > Billing inside the dashboard, or by emailing <a href="mailto:work@fieldcore.co.in" class="text-sky-600 hover:underline">work@fieldcore.co.in</a>. No cancellation fees apply. Cancelling stops future billing only — it does not refund the current period.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">6. How to Request a Refund</h2>
        <p>Instruct customers to email <a href="mailto:work@fieldcore.co.in" class="text-sky-600 hover:underline">work@fieldcore.co.in</a> with their account email and reason for the request. We review all requests and respond within three (3) business days.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">7. Changes to This Policy</h2>
        <p>FieldCore may update this policy from time to time. Changes will be posted directly on this page with the "Last Updated" date updated accordingly.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold text-slate-900 mb-3">8. Contact</h2>
        <p>Support & Billing Email: <a href="mailto:work@fieldcore.co.in" class="text-sky-600 hover:underline">work@fieldcore.co.in</a></p>
      </div>
    </div>
  </div>
</div>
`;

// Helper to write static file
function writeStaticRoute(routePath, htmlContent) {
  const targetDir = path.join(distPath, routePath);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent);
  console.log(`Prerendered: ${routePath}/index.html`);
}

// Generate the pages
console.log('Starting prerendering process for Paddle compatibility...');
writeStaticRoute('pricing', buildPageHtml('Pricing | FieldCore', pricingContent));
writeStaticRoute('privacy-policy', buildPageHtml('Privacy Policy | FieldCore', privacyContent));
writeStaticRoute('terms-of-service', buildPageHtml('Terms of Service | FieldCore', termsContent));
writeStaticRoute('refund-policy', buildPageHtml('Refund Policy | FieldCore', refundContent));

console.log('Prerendering successfully completed!');

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  FolderSync,
  MessageSquare,
  Video,
  Headphones,
  Mail,
  Layers,
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  Cloud
} from 'lucide-react';
import SEO from '@/src/components/SEO';
import heroStudioImage from '@/src/assets/images/venihost_stack_studio_1795716674639.jpg';

interface WaitlistFormProps {
  idPrefix: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ idPrefix, inputRef }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          formType: 'waitlist',
          productName: 'Own Your Stack Webinar — VeniHost Open Source Empowerment Campaign',
          name: trimmedName,
          email: trimmedEmail,
          message: 'Registered for the Own Your Stack live webinar waitlist.',
          sourceUrl: typeof window !== 'undefined' ? window.location.href : ''
        })
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.ok) {
        setErrorMessage(
          payload.error || 'Unable to join the waitlist right now. Please try again.'
        );
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch {
      setIsSubmitting(false);
      setErrorMessage('Network error while joining the waitlist. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <div
        className="rounded-2xl p-6 md:p-8 border bg-slate-900/90 border-secondary/40 text-white"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary shrink-0">
            <CheckCircle2 size={22} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1.5">You are on the waitlist</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Thank you, <span className="font-semibold text-white">{name}</span>. We have reserved early access for{' '}
              <span className="font-semibold text-orange-300">{email}</span> and will notify you first when the live webinar date is announced.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setName('');
                setEmail('');
              }}
              className="text-xs font-medium text-orange-300 hover:text-orange-200 underline underline-offset-4 cursor-pointer"
            >
              Add another email address
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor={`${idPrefix}-name`} className="block text-sm font-medium text-slate-200 mb-1.5">
          Full Name
        </label>
        <input
          ref={inputRef}
          id={`${idPrefix}-name`}
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adaobi Okafor"
          className="w-full h-12 px-4 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder:text-slate-400 text-[15px] focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus:border-secondary transition-colors"
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-email`} className="block text-sm font-medium text-slate-200 mb-1.5">
          Work or Personal Email
        </label>
        <input
          id={`${idPrefix}-email`}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="adaobi@yourstartup.com"
          className="w-full h-12 px-4 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder:text-slate-400 text-[15px] focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus:border-secondary transition-colors"
        />
      </div>

      {errorMessage && (
        <p className="text-sm text-rose-300 bg-rose-950/50 border border-rose-500/30 rounded-lg px-3.5 py-2" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-secondary hover:bg-orange-600 text-white font-semibold text-base transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary whitespace-nowrap shadow-lg shadow-secondary/20"
      >
        <span>{isSubmitting ? 'Joining Waitlist...' : 'Join the Waitlist'}</span>
        {!isSubmitting && <ArrowRight size={18} aria-hidden="true" />}
      </button>

      <p className="text-xs text-slate-400 leading-relaxed pt-1">
        Free live webinar with live demonstrations. No spam, ever.
      </p>
    </form>
  );
};

const OwnYourStackWebinar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const heroInputRef = useRef<HTMLInputElement | null>(null);

  const scrollToHeroWaitlist = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById('waitlist-hero');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        heroInputRef.current?.focus();
      }, 400);
    }
  };

  const stackReplacements = [
    {
      openSource: 'Nextcloud + OnlyOffice',
      replaces: 'Google Drive & Microsoft 365',
      description:
        'Store company files, collaborate on documents and spreadsheets in real time, and control team permissions on your own server.',
      icon: FolderSync
    },
    {
      openSource: 'Mattermost',
      replaces: 'Slack',
      description:
        'Organize company channels, direct messages, and file sharing with unlimited searchable message history and zero per-seat fees.',
      icon: MessageSquare
    },
    {
      openSource: 'Jitsi',
      replaces: 'Zoom',
      description:
        'Host reliable HD video meetings and screen-sharing sessions right in the browser with no arbitrary time limits or host licenses.',
      icon: Video
    },
    {
      openSource: 'Chatwoot',
      replaces: 'Intercom & Zendesk',
      description:
        'Manage live website chat, email support tickets, and social conversations from a single shared team inbox you own.',
      icon: Headphones
    },
    {
      openSource: 'Mailcow',
      replaces: 'Google Workspace & Paid Email',
      description:
        'Run professional custom-domain business email with modern webmail, shared calendars, and full deliverability control.',
      icon: Mail
    },
    {
      openSource: 'Odoo or ERPNext',
      replaces: 'Disconnected CRM & Finance Apps',
      description:
        'Run your entire operation—CRM, invoicing, accounting, inventory, HR, and projects—inside one unified open-source platform.',
      icon: Layers
    }
  ];

  const webinarTopics = [
    {
      number: '01.',
      title: 'Live Stack Demonstrations',
      description:
        'See Nextcloud, OnlyOffice, Mattermost, Jitsi, Chatwoot, Mailcow, and Odoo/ERPNext working together as one cohesive startup workspace.'
    },
    {
      number: '02.',
      title: 'The 70–90% Cost Reduction Blueprint',
      description:
        'Walk through real numbers comparing monthly SaaS subscriptions for growing teams against predictable open-source hosting costs.'
    },
    {
      number: '03.',
      title: 'Smooth Migration Without Downtime',
      description:
        'Learn how founders and small teams move emails, shared drives, and chat workflows away from Big Tech without halting daily operations.'
    },
    {
      number: '04.',
      title: 'Security, Backups & Team Adoption',
      description:
        'Understand practical server maintenance, automated backups, access control, and how VeniHost supports your team after launch.'
    }
  ];

  const comparisonRows = [
    { area: 'Team Size (15 Users)', saas: '$2,700 – $5,400 / yr', openSource: 'Predictable single-server cost' },
    { area: 'Pricing Model', saas: 'Per-user, every month forever', openSource: 'Flat infrastructure, unlimited seats' },
    { area: 'Data Ownership', saas: 'Stored under vendor terms', openSource: '100% yours on your own infrastructure' },
    { area: 'Vendor Lock-In', saas: 'Price hikes & feature gating', openSource: 'Full portability & open standards' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-primary">
      <SEO
        title="Own Your Stack — Replace Google, Microsoft & Zoom with Open Source"
        description="Official launch of the VeniHost Open Source Empowerment Campaign. Join the waitlist for our free live webinar on cutting startup software costs by 70–90% with open-source infrastructure."
        keywords="open source business stack, replace google workspace, nextcloud, mattermost, jitsi, chatwoot, mailcow, odoo, erpnext, venihost webinar"
      />

      {/* Minimal Dark Header — VeniHost Brand Colors (#0F172A + #F97316) */}
      <header className="sticky top-0 z-40 bg-primary/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <Link
            to="/"
            className="text-lg font-display font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-md"
          >
            <img
              src="/logo.png"
              alt="VeniHost"
              referrerPolicy="no-referrer"
              className="w-7 h-7 object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <span>
              VENI<span className="text-secondary">HOST</span>
            </span>
          </Link>

          {/* Zone 2: 4 Concise Single-Line Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#the-problem" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              The Problem
            </a>
            <a href="#the-solution" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Open Source Stack
            </a>
            <a href="#curriculum" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              What You'll Learn
            </a>
            <Link to="/" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              VeniHost Home
            </Link>
          </nav>

          {/* Zone 3: Single Primary Action (Waitlist only) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#waitlist-hero"
              onClick={scrollToHeroWaitlist}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-secondary hover:bg-orange-600 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[40px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              Join the Waitlist
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-primary border-t border-white/10 px-4 py-4 space-y-2">
            <a
              href="#the-problem"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/5"
            >
              The Problem
            </a>
            <a
              href="#the-solution"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/5"
            >
              Open Source Stack
            </a>
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/5"
            >
              What You'll Learn
            </a>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/5"
            >
              VeniHost Home
            </Link>
            <div className="pt-2">
              <a
                href="#waitlist-hero"
                onClick={scrollToHeroWaitlist}
                className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-secondary hover:bg-orange-600 text-white font-semibold text-sm flex items-center justify-center whitespace-nowrap"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* 1. Dark Hero Section + Prominent Waitlist Form */}
        <section className="relative bg-primary text-white py-16 md:py-24 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 75% 20%, rgba(249, 115, 22, 0.16), transparent 48%), radial-gradient(circle at 15% 85%, rgba(249, 115, 22, 0.08), transparent 42%)'
            }}
          />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Campaign Context & Core Message */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-orange-400">
                  <span>VeniHost Open Source Empowerment Campaign</span>
                  <span aria-hidden="true" className="text-slate-500">·</span>
                  <span className="text-slate-300">Webinar 01</span>
                  <span aria-hidden="true" className="text-slate-500">·</span>
                  <span className="text-slate-300">Free Live Session Coming Soon</span>
                </div>

                <div className="space-y-4">
                  <h1
                    className="font-display font-bold tracking-tight text-white leading-[1.08]"
                    style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)', textWrap: 'balance' }}
                  >
                    Own Your Stack:{' '}
                    <span className="text-secondary">
                      How Startups Can Replace Google, Microsoft & Zoom with Open Source
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl font-medium text-slate-100 max-w-2xl leading-snug">
                    Stop renting your business infrastructure. Start owning your digital future.
                  </p>
                </div>

                <p className="text-[15px] sm:text-base text-slate-300 max-w-[65ch] leading-relaxed">
                  Most startups spend thousands every year on Google Workspace, Microsoft 365, Zoom, Slack, and other SaaS tools. There is a better way. Learn how to run a complete professional business stack using open-source software and cut software costs by{' '}
                  <span className="text-white font-semibold tabular-nums">70–90%</span> while fully owning your data.
                </p>

                <div className="pt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                  <div>
                    <div className="text-2xl font-display font-bold text-white tabular-nums">70–90%</div>
                    <div className="text-xs text-slate-400 mt-0.5">Typical annual software savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-white tabular-nums">6 Core Tools</div>
                    <div className="text-xs text-slate-400 mt-0.5">Covered with live demonstrations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-white">100% Owned</div>
                    <div className="text-xs text-slate-400 mt-0.5">Your domain, servers, and data</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Prominent Waitlist Capture Card */}
              <div id="waitlist-hero" className="lg:col-span-5">
                <div className="bg-slate-900/90 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
                  <div className="pb-5 mb-5 border-b border-white/10">
                    <p className="text-xs font-semibold text-orange-400 tracking-wide mb-1.5">
                      Official Campaign Launch · Early Access
                    </p>
                    <h2 className="text-2xl font-display font-bold text-white mb-2">
                      Join the Waitlist
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Join the waitlist to get early access and be the first to know when the webinar goes live.
                    </p>
                  </div>

                  <WaitlistForm idPrefix="hero" inputRef={heroInputRef} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Problem: SaaS Costs & Dependency */}
        <section id="the-problem" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Left: Narrative + Visual */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-8">
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-orange-600">01. The Problem</p>
                  <h2
                    className="text-3xl sm:text-4xl font-display font-bold text-primary leading-tight"
                    style={{ textWrap: 'balance' }}
                  >
                    You are paying rent on the tools your business runs on every day
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed max-w-[65ch]">
                    Every new hire triggers another recurring license fee—one for email and files, another for team chat, another for video calls, another for customer support, and another for operations.
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed max-w-[65ch]">
                    When prices rise or features get locked behind higher tiers, you have no leverage. Worse, your company’s conversations, customer records, and files live on infrastructure you do not own or control.
                  </p>
                </div>

                {/* Editorial Infrastructure Visual with Fallback */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-primary aspect-video">
                  {!imageFailed ? (
                    <img
                      src={heroStudioImage}
                      alt="Startup team working alongside private open-source server infrastructure"
                      referrerPolicy="no-referrer"
                      onError={() => setImageFailed(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-primary to-slate-800 text-white">
                      <Cloud size={32} className="text-secondary mb-2" />
                      <p className="text-sm font-medium text-slate-200">
                        Private Startup Infrastructure & Open-Source Stack
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Clean SaaS vs Open Source Comparison Card */}
              <div className="lg:col-span-6 flex flex-col justify-between bg-accent border border-slate-200 rounded-2xl p-6 sm:p-8">
                <div>
                  <h3 className="text-xl font-display font-bold text-primary mb-2">
                    Renting SaaS vs. Owning Your Stack
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    How recurring Big Tech subscriptions compare to running an open-source business stack on dedicated infrastructure.
                  </p>

                  <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
                    {comparisonRows.map((row) => (
                      <div key={row.area} className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-start">
                        <div className="text-sm font-semibold text-primary">{row.area}</div>
                        <div className="text-sm text-slate-500 tabular-nums">{row.saas}</div>
                        <div className="text-sm font-semibold text-orange-600">{row.openSource}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-sm font-semibold text-primary mb-1">
                    Own your tools, own your data, control your costs
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Instead of paying per employee for five disconnected SaaS platforms, you run proven enterprise open-source software under your company’s control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution: Open Source Stack Overview */}
        <section id="the-solution" className="py-16 md:py-24 bg-accent border-b border-slate-200/80">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-12 md:mb-14 space-y-3">
              <p className="text-sm font-semibold text-orange-600">02. The Solution</p>
              <h2
                className="text-3xl sm:text-4xl font-display font-bold text-primary leading-tight"
                style={{ textWrap: 'balance' }}
              >
                A complete, battle-tested open-source stack for modern startups
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Every daily workflow your team depends on has a mature, reliable open-source alternative. Here is the exact stack we will demonstrate live.
              </p>
            </div>

            {/* 6 Tool Replacement Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stackReplacements.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.openSource}
                    className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between transition-colors hover:border-secondary/50"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-orange-600 shrink-0">
                          <Icon size={20} aria-hidden="true" />
                        </div>
                        <span className="text-xs font-medium text-slate-500 text-right">
                          Replaces {item.replaces}
                        </span>
                      </div>

                      <h3 className="text-lg font-display font-bold text-primary mb-2">
                        {item.openSource}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 7th Core Pillar: Ownership Summary Strip */}
            <div className="mt-6 bg-primary text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4 max-w-2xl">
                <div className="w-11 h-11 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                  <ShieldCheck size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-1">
                    Own your tools, own your data, control your costs
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    No arbitrary license spikes as your team grows, no vendor lock-in, and complete visibility over where your business data lives.
                  </p>
                </div>
              </div>
              <a
                href="#waitlist-hero"
                onClick={scrollToHeroWaitlist}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-secondary hover:bg-orange-600 text-white font-semibold text-sm transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        </section>

        {/* 4. What You Will Learn in the Webinar */}
        <section id="curriculum" className="py-16 md:py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <p className="text-sm font-semibold text-orange-600">03. Webinar Agenda</p>
                <h2
                  className="text-3xl sm:text-4xl font-display font-bold text-primary leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  What you will learn in this live session
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Built for startup founders, small business owners, and operations decision-makers. No heavy technical jargon—just practical guidance and live software demonstrations.
                </p>

                <div className="pt-4 border-t border-slate-200 space-y-2 text-sm text-slate-600">
                  <p className="font-semibold text-primary">
                    VeniHost Open Source Empowerment Campaign
                  </p>
                  <p>
                    This free live webinar marks the official launch of our campaign helping businesses move from expensive SaaS rentals to sovereign, open-source infrastructure.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 divide-y divide-slate-200 border-t border-b border-slate-200">
                {webinarTopics.map((topic) => (
                  <div key={topic.number} className="py-6 flex items-start gap-5">
                    <span className="font-display font-bold text-lg text-orange-600 tabular-nums shrink-0 pt-0.5">
                      {topic.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-display font-bold text-primary mb-1.5">
                        {topic.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Final Waitlist Section */}
        <section id="waitlist-final" className="py-16 md:py-24 bg-primary text-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8 space-y-3">
                <p className="text-xs sm:text-sm font-medium text-orange-400">
                  Own Your Stack · Free Live Webinar Coming Soon
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Reserve your spot before seats open
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Join the waitlist to get early access and be the first to know when the webinar goes live.
                </p>
              </div>

              <div className="bg-slate-900/90 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <WaitlistForm idPrefix="footer" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Simple Footer with VeniHost Branding */}
      <footer className="bg-[#090E1A] text-slate-400 border-t border-white/10 py-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="font-display font-bold text-white tracking-tight">
              VENI<span className="text-secondary">HOST</span>
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-slate-600">–</span>
            <span className="text-slate-300 font-medium">
              Hosting · Consulting · Training
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">
              venihost.com.ng
            </Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>© {new Date().getFullYear()} VeniHost</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OwnYourStackWebinar;

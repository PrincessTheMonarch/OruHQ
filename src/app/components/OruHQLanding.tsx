import image_2149726093 from '@/imports/2149726093.jpg'
import image_2150132310 from '@/imports/2150132310.jpg'
import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronRight, Menu, X } from "lucide-react";

import imgHeroDashboard from "figma:asset/96f3dee3bd46eebb2bdafbb44ef5f484623f93a7.png";
import imgHeroCard1 from "figma:asset/bc96df429a349e44fa05b9e94567583ceb68fa6b.png";
import imgHeroCard2 from "figma:asset/f9dc3ecac4a2fc99aa6deb9127c07b877ba103d5.png";
import imgProcessFlow from "figma:asset/43c81a4b16ce6f195ed49febb9f825af0020cce2.png";

const earningsData = [
  { month: "Jan", earnings: 2400 },
  { month: "Feb", earnings: 1800 },
  { month: "Mar", earnings: 3200 },
  { month: "Apr", earnings: 2900 },
  { month: "May", earnings: 4100 },
  { month: "Jun", earnings: 3800 },
  { month: "Jul", earnings: 5200 },
  { month: "Aug", earnings: 4700 },
  { month: "Sep", earnings: 5900 },
  { month: "Oct", earnings: 5400 },
  { month: "Nov", earnings: 6800 },
  { month: "Dec", earnings: 7200 },
];

const problemTabs = [
  {
    id: "tasks",
    label: "Scattered Tasks",
    heading: "Tasks scattered across multiple tools",
    body: "You spend more time switching between apps than doing actual work. Every client lives in a different place. Nothing talks to anything else.",
  },
  {
    id: "invoices",
    label: "Lost Invoices",
    heading: "Invoices lost in email threads",
    body: "You send an invoice and immediately lose track of it. Chasing payments becomes a second job, eating into time you should spend creating.",
  },
  {
    id: "deadlines",
    label: "Missed Deadlines",
    heading: "Deadlines sneak up on you",
    body: "Without a single system, project timelines blur. A task overdue by two days can cost you a client relationship built over months.",
  },
  {
    id: "payments",
    label: "Unpaid Work",
    heading: "Hours billed that never get paid",
    body: "You did the work. The invoice went out. But with no payment tracking in place, it's easy for money to fall through the cracks permanently.",
  },
];

const features = [
  {
    num: "01",
    title: "Task Manager",
    description: "List-based task system. No Kanban, no drag-and-drop — just clear, organized checklists grouped by stage.",
    bg: "bg-[#0b0a0c]",
    textColor: "text-white",
    descColor: "text-white/80",
    numColor: "text-white",
  },
  {
    num: "02",
    title: "Project Tracking",
    description: "Manage client projects from start to finish with clear deadlines and progress visibility.",
    bg: "bg-[#8d0000]",
    textColor: "text-white",
    descColor: "text-white/80",
    numColor: "text-white",
  },
  {
    num: "03",
    title: "Invoice Builder",
    description: "Create and send professional invoices in seconds — standalone or linked to a project.",
    bg: "bg-[#dae8cc]",
    textColor: "text-[#1a1a1a]",
    descColor: "text-[#1a1a1a]/80",
    numColor: "text-[#1a1a1a]",
  },
  {
    num: "04",
    title: "Payment Tracking",
    description: "Log payments in real time. Know what's pending, confirmed, or completed at a glance.",
    bg: "bg-[#cce8e8]",
    textColor: "text-[#1a1010]",
    descColor: "text-[#1a1010]/80",
    numColor: "text-[#1a1010]",
  },
  {
    num: "05",
    title: "Deadline Management",
    description: "Set project deadlines and task due dates. Never miss a delivery with clear timeline tracking.",
    bg: "bg-[#dacce8]",
    textColor: "text-[#1a1010]",
    descColor: "text-[#1a1010]/80",
    numColor: "text-[#1a1010]",
  },
  {
    num: "06",
    title: "Income Overview",
    description: "Visualize earnings over time. See monthly trends, top clients, and income sources in one clean view.",
    bg: "bg-[#f6f2ec]",
    textColor: "text-[#0b0a0c]",
    descColor: "text-[#0b0a0c]/70",
    numColor: "text-[#0b0a0c]",
    border: "border-2 border-[#0b0a0c]",
  },
];

function PrimaryButton({
  children,
  dark = true,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  if (dark) {
    return (
      <button
        className={`relative rounded-[6px] shrink-0 cursor-pointer ${className}`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="bg-[#0b0a0c] flex items-center justify-center px-6 py-[10px] relative rounded-[6px]">
          <span
            className="text-white text-sm whitespace-nowrap relative z-[1]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            {children}
          </span>
        </div>
        <div
          aria-hidden
          className="absolute border-[#0b0a0c] border-b-4 border-l-2 border-r-2 border-t-2 border-solid inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]"
        />
      </button>
    );
  }
  return (
    <button
      className={`relative rounded-[6px] shrink-0 cursor-pointer ${className}`}
    >
      <div className="bg-white flex items-center justify-center px-6 py-[10px] relative rounded-[6px]">
        <span
          className="text-[#0b0a0c] text-sm whitespace-nowrap relative z-[1]"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
        >
          {children}
        </span>
      </div>
      <div
        aria-hidden
        className="absolute border-[#dadada] border-b-4 border-l-2 border-r-2 border-t-2 border-solid inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]"
      />
      <div className="absolute inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_0px_0px_#dadada]" />
    </button>
  );
}

function ExploreButton({ className = "", fullWidth = false }: { className?: string; fullWidth?: boolean }) {
  return (
    <button
      className={`relative rounded-[6px] cursor-pointer ${fullWidth ? "w-full" : "shrink-0"} ${className}`}
    >
      <div className={`flex items-center gap-3 px-6 py-[10px] relative rounded-[6px] ${fullWidth ? "justify-center" : ""}`}>
        <span
          className="text-[#0b0a0c] text-sm whitespace-nowrap"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
        >
          Explore
        </span>
        <ChevronRight className="size-5 text-[#0b0a0c]" strokeWidth={1.5} />
      </div>
      <div
        aria-hidden
        className="absolute border-[#0b0a0c] border-b-4 border-l-2 border-r-2 border-t-2 border-solid inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px] bg-[#f6f2ec00]"
      />
    </button>
  );
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0b0a0c] w-full relative z-50 shrink-0">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-center h-[72px] px-16">
        <div className="flex items-center justify-between w-full max-w-[1280px]">
          <div className="flex items-center gap-8 flex-1">
            <a
              href="#features"
              className="text-white leading-[1.6] text-[16px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-white leading-[1.6] text-[16px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              How It Works
            </a>
          </div>
          <span
            className="text-[#f1f5f9] text-[40px] leading-[32px] tracking-[-0.6px] select-none"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >OruHQ</span>
          <div className="flex flex-1 justify-end">
            <PrimaryButton dark={false}>Get Started</PrimaryButton>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center h-[64px] px-5 gap-4">
        <button
          className="flex-1 flex items-start"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <X className="size-6 text-white" />
          ) : (
            <Menu className="size-6 text-white" />
          )}
        </button>
        <span
          className="text-[#f1f5f9] text-[24px] leading-[32px] tracking-[-0.6px] w-[100px] text-center"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          OruHQ
        </span>
        <div className="flex-1 flex justify-end">
          <PrimaryButton dark={false}>
            <span className="text-[14px]">Get Started</span>
          </PrimaryButton>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0a0c] w-full px-5 pb-6 flex flex-col gap-8">
          <a
            href="#features"
            className="text-white text-[24px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-white text-[24px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="bg-[#f6f2ec] w-full shrink-0">
      <div className="flex flex-col items-center w-full overflow-hidden">
        <div className="flex flex-col gap-8 px-5 py-10 md:px-[80px] md:py-12 w-full max-w-[1440px] mx-auto">
            {/* Row 1: subheadline left + floating card right (desktop only) */}
            <div className="flex items-center justify-between gap-8 px-[0px] py-[16px]">
              <p
                className="text-[#0b0a0c] leading-[1.6] max-w-[596px] text-[14px]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                OruHQ helps freelancers manage projects, tasks, invoices, payments, deadlines, and earnings in one
                connected workspace. Built for those who want clarity, structure, and control.
              </p>
              {/* Floating card — desktop only */}
              <div className="hidden md:block shrink-0 rounded-[11px] overflow-hidden" style={{ width: 200, height: 134, border: "4px solid #0b0a0c" }}>
                <img src={imgHeroCard1} alt="Stats card" className="w-full h-full object-cover" />
              </div>
            </div>
          
            {/* Row 2: headline top on mobile, images below */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16 px-[0px] py-[80px]">
          
              {/* Images — below headline on mobile, left on desktop */}
              <div className="order-2 md:order-1 flex gap-4 md:gap-[32px] items-end shrink-0">
                {/* Main dashboard screenshot */}
                <div
                  className="rounded-[9px] overflow-hidden"
                  style={{
                    width: "clamp(120px, 38vw, 260px)",
                    height: "clamp(170px, 50vw, 370px)",
                    border: "1.5px solid #0b0a0c",
                  }}
                >
                  <img src={imgHeroDashboard} alt="OruHQ dashboard" className="w-full h-full object-cover" style={{ objectPosition: "left top" }} />
                </div>
                {/* Invoice/payment card */}
                <div
                  className="rounded-[11px] overflow-hidden"
                  style={{
                    width: "clamp(80px, 24vw, 150px)",
                    height: "clamp(100px, 32vw, 200px)",
                    border: "2px solid #0b0a0c",
                  }}
                >
                  <img src={imgHeroCard2} alt="Invoice card" className="w-full h-full object-cover" />
                </div>
              </div>
          
              {/* Headline + CTAs */}
              <div className="order-1 md:order-2 flex flex-col gap-6 md:gap-10 items-start md:items-end min-w-0">
                <div
                  className="text-[#0b0a0c] text-left md:text-right w-full"
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    lineHeight: 1,
                  }}
                >
                  <p
                    className="mb-0 leading-none px-[0px] py-[8px]"
                    style={{ fontSize: "clamp(32px, 4.5vw, 68px)", letterSpacing: "clamp(-1px, -0.03em, -3px)" }}
                  >
                    Work, Invoice
                  </p>
                  <p
                    className="mb-0 leading-none px-[0px] py-[8px]"
                    style={{ fontSize: "clamp(32px, 4.5vw, 68px)", letterSpacing: "clamp(-1px, -0.03em, -3px)" }}
                  >
                    <span className="text-[#8d0000]">Get Paid,</span>
                  </p>
                  <p
                    className="leading-none px-[0px] pt-[8px] pb-[24px]"
                    style={{ fontSize: "clamp(32px, 4.5vw, 68px)", letterSpacing: "clamp(-1px, -0.03em, -3px)" }}
                  >
                    All in one place.
                  </p>
                </div>
                <div className="flex gap-3 md:gap-4 items-start flex-wrap">
                  <PrimaryButton dark>Get Started</PrimaryButton>
                  <button className="relative rounded-[6px] shrink-0 cursor-pointer">
                    <div className="flex items-center justify-center px-5 py-[10px]">
                      <span
                        className="text-[#0b0a0c] text-[14px] md:text-[16px] whitespace-nowrap"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                      >
                        Learn More
                      </span>
                    </div>
                    <div
                      aria-hidden
                      className="absolute border-[#0b0a0c] border-b-4 border-l-2 border-r-2 border-t-2 border-solid inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]"
                    />
                  </button>
                </div>
              </div>

  </div>
</div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#232224] w-full shrink-0">
      <div className="flex flex-col items-center w-full overflow-hidden">
        <div className="flex flex-col items-center px-5 py-16 md:px-16 md:py-28 w-full">
          <div className="flex flex-col items-center gap-12 md:gap-20 w-full max-w-[1280px]">
            {/* Header */}
            <div className="flex flex-col gap-3 md:gap-4 items-center max-w-[768px] w-full opacity-80">
              <span
                className="text-white text-[16px] leading-[1.5]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                Reality
              </span>
              <div className="text-white text-center">
                <p
                  className="text-[44px] md:text-[60px] leading-[1.2] tracking-[0.44px] md:tracking-[0.6px]"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  Freelance work becomes disorganized fast
                </p>
                <p
                  className="text-[14px] md:text-[20px] leading-[1.6] mt-5 md:mt-6"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  Most freelancers juggle multiple tools and lose track of what matters. OruHQ brings everything
                  together in one connected workspace.
                </p>
              </div>
            </div>

            {/* Problem tabs card */}
            <div className="relative w-full rounded-[16px] bg-[#232224] border-2 border-white overflow-hidden">
              {/* Desktop layout */}
              <div className="hidden md:flex items-stretch">
                {/* Content area */}
                <div className="flex-1 min-w-0 w-[800px] max-w-[800px] p-16 flex flex-col justify-center min-h-[448px]">
                  <p
                    className="text-white text-[48px] leading-[1.2] tracking-[0.48px]"
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}
                  >
                    {problemTabs[activeTab].heading}
                  </p>
                  <p
                    className="text-white/70 leading-[1.6] mt-6 text-[16px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    {problemTabs[activeTab].body}
                  </p>
                </div>
                {/* Tabs menu */}
                <div className="flex flex-col flex-1 min-w-0 max-w-[480px] relative border-l-2 border-white">
                  {problemTabs.map((tab, i) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(i)}
                      className={`relative w-full text-left px-8 py-6 border-b-2 border-white last:border-b-0 transition-colors ${
                        activeTab === i ? "bg-white/10" : "hover:bg-white/5"
                      }`}
                    >
                      <p
                        className="text-white leading-[1.2] tracking-[0.32px] text-[24px]"
                        style={{ fontFamily: "'Archivo Black', sans-serif" }}
                      >
                        {tab.label}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile layout */}
              <div className="flex md:hidden flex-col">
                {/* Tabs */}
                <div className="flex flex-col border-t-2 border-white">
                  {problemTabs.map((tab, i) => (
                    <div key={tab.id} className="border-b-2 border-white last:border-b-0">
                      <button
                        onClick={() => setActiveTab(activeTab === i ? -1 : i)}
                        className="w-full text-left px-6 py-6"
                      >
                        <p
                          className="text-white text-[20px] leading-[1.2] tracking-[0.2px]"
                          style={{ fontFamily: "'Archivo Black', sans-serif" }}
                        >
                          {tab.label}
                        </p>
                      </button>
                      {activeTab === i && (
                        <div className="px-6 pb-6">
                          <p
                            className="text-white text-[32px] leading-[1.2] tracking-[0.32px] mb-5"
                            style={{ fontFamily: "'Archivo Black', sans-serif" }}
                          >
                            {tab.heading}
                          </p>
                          <p
                            className="text-white/70 text-[14px] leading-[1.6]"
                            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                          >
                            {tab.body}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="bg-[#f6f2ec] w-full shrink-0" id="features">
      <div className="flex flex-col items-center px-5 py-16 md:px-16 md:py-28 w-full">
        <div className="flex flex-col items-start w-full max-w-[1280px]">
          {/* Title */}
          <div className="flex flex-col gap-3 mb-8 md:mb-20 w-full">
            <span
              className="text-[#0b0a0c] text-[16px] leading-[1.5]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Solution
            </span>
            <p
              className="text-[#0b0a0c] text-[44px] md:text-[60px] leading-[1.2] tracking-[0.44px] md:tracking-[0.6px]"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              One workspace for everything
            </p>
            <p
              className="text-[#0b0a0c] text-[14px] md:text-[20px] leading-[1.6]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Stop switching between tools. OruHQ connects your projects, invoices, and payments in a single, intuitive
              workspace.
            </p>
          </div>

          {/* Cards grid */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {[
              {
                num: "01",
                title: "Project Tracking",
                desc: "Manage client projects from start to finish with clear deadlines and progress.",
                bg: "bg-[#8d0000]",
                text: "text-white",
                desc_color: "text-white/80",
              },
              {
                num: "02",
                title: "Task Manager",
                desc: "Break work into tasks, move them through stages, track delivery.",
                bg: "bg-[#dae8cc]",
                text: "text-[#1a1a1a]",
                desc_color: "text-[#1a1010]",
              },
              {
                num: "03",
                title: "Invoice Builder",
                desc: "Create and send professional invoices in seconds — standalone or linked.",
                bg: "bg-[#cce8e8]",
                text: "text-[#1a1010]",
                desc_color: "text-[#1a1010]",
              },
              {
                num: "04",
                title: "Payment Tracking",
                desc: "Log payments in real time, know what's pending, confirmed, or completed.",
                bg: "bg-[#dacce8]",
                text: "text-[#1a1010]",
                desc_color: "text-[#1a1010]",
              },
            ].map((card) => (
              <div
                key={card.num}
                className={`${card.bg} flex-1 rounded-[20px] shadow-[4px_6px_0px_0px_rgba(20,5,5,0.9)] overflow-hidden`}
              >
                <div className="flex flex-col gap-5 px-6 py-10">
                  <p
                    className={`${card.text} text-[13px] leading-normal`}
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                  >
                    {card.num}
                  </p>
                  <p
                    className={`${card.text} text-[22px] leading-[28px]`}
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}
                  >
                    {card.title}
                  </p>
                  <p
                    className={`${card.desc_color} text-[13px] leading-[20px]`}
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <ExploreButton className="mt-10 md:mt-16" />
        </div>
      </div>
    </section>
  );
}

function FeatureGridSection() {
  return (
    <section className="bg-[#f6f2ec] w-full shrink-0 border-t border-[#0b0a0c]/10">
      
    </section>
  );
}

function TaskManagerSection() {
  return (
    <section className="bg-[#f6f2ec] w-full shrink-0">
      <div className="flex flex-col items-start w-full max-w-[1280px] gap-10 md:gap-14 mx-auto px-5 md:px-[80px] py-[80px] mx-[80px] my-[0px]">

  {/* Two-column header: title left, description + stages right */}
  <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start w-full">
    {/* Left: tagline + title */}
    <div className="flex-1 min-w-0">
      <div className="flex flex-col gap-3 md:gap-4">
        <span
          className="text-[#0b0a0c] text-[16px] leading-[1.5]"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
        >
          Workflow
        </span>
        <p
          className="text-[#0b0a0c] text-[44px] md:text-[60px] leading-[1.2] tracking-[0.44px] md:tracking-[0.6px]"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          Task manager built for real freelance work
        </p>
      </div>
    </div>

    {/* Right: description + stage descriptions */}
    <div className="flex-1 min-w-0 flex flex-col gap-8">
      <p
        className="text-[#0b0a0c] text-[14px] md:text-[20px] leading-[1.6]"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
      >
        Organized and clear. Group your work by stage — no drag-and-drop, no bloated boards. Just a simple, list-based system that keeps you on track.
      </p>

      {/* Stage descriptions */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p
            className="text-[#0b0a0c] text-[18px] md:text-[26px] leading-[1.2] tracking-[0.26px] mb-3"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            To do
          </p>
          <p
            className="text-[#0b0a0c] text-[14px] md:text-[18px] leading-[1.6]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Work waiting to start, organized and ready when you are.
          </p>
        </div>
        <div className="flex-1">
          <p
            className="text-[#0b0a0c] text-[18px] md:text-[26px] leading-[1.2] tracking-[0.26px] mb-3"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            In progress
          </p>
          <p
            className="text-[#0b0a0c] text-[14px] md:text-[18px] leading-[1.6]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Active tasks moving forward with clear due dates and status.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom row: task checklist left + Explore button right */}
  <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center w-full">
    {/* Task checklist */}
    <div className="flex-1 min-w-0 border-2 border-[#0b0a0c]/10 rounded-[16px] overflow-hidden bg-white/60">
      {/* Today group */}
      <div className="px-5 pt-5 pb-3">
        <p
          className="text-[#0b0a0c]/50 text-[11px] uppercase tracking-wider mb-3"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
        >
          Today
        </p>
        {[
          { label: "Review Acme Corp homepage wireframes", done: true },
          { label: "Send invoice #INV-042 to Design Studio", done: true },
          { label: "Update project timeline for BrandCo", done: false },
        ].map((task) => (
          <div key={task.label} className="flex items-center gap-3 py-2.5 border-b border-[#0b0a0c]/5 last:border-0">
            <div
              className={`size-4 rounded-[4px] border-2 flex items-center justify-center shrink-0 ${
                task.done ? "bg-[#8d0000] border-[#8d0000]" : "border-[#0b0a0c]/30 bg-transparent"
              }`}
            >
              {task.done && (
                <svg className="size-2.5" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span
              className={`text-[13px] md:text-[15px] leading-[1.5] ${task.done ? "line-through text-[#0b0a0c]/40" : "text-[#0b0a0c]"}`}
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              {task.label}
            </span>
          </div>
        ))}
      </div>
      {/* Upcoming group */}
      <div className="px-5 pb-5 border-t border-[#0b0a0c]/5">
        <p
          className="text-[#0b0a0c]/50 text-[11px] uppercase tracking-wider mt-3 mb-3"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
        >
          Upcoming
        </p>
        {[
          { label: "Kick off call with startup client" },
          { label: "Submit final assets for Project Phoenix" },
        ].map((task) => (
          <div key={task.label} className="flex items-center gap-3 py-2.5 border-b border-[#0b0a0c]/5 last:border-0">
            <div className="size-4 rounded-[4px] border-2 border-[#0b0a0c]/30 bg-transparent shrink-0" />
            <span
              className="text-[#0b0a0c] text-[13px] md:text-[15px] leading-[1.5]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              {task.label}
            </span>
          </div>
        ))}
      </div>
    </div>
    {/* Explore button — right column, center-aligned and pushed to the right */}
    <div className="flex-1 min-w-0 flex items-center justify-end">
      <ExploreButton />
    </div>
  </div>

</div>
    </section>
  );
}

const landingEarnings = [2400, 1800, 3200, 2900, 4100, 3800, 5200, 4700, 5900, 5400, 6800, 7200];
const landingMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function LandingSparkline() {
  const [hov, setHov] = useState<number | null>(null);
  const W = 500, H = 180, PL = 8, PR = 8, PT = 8, PB = 28;
  const iW = W - PL - PR, iH = H - PT - PB;
  const min = Math.min(...landingEarnings), max = Math.max(...landingEarnings);
  const range = max - min || 1;
  const xs = landingEarnings.map((_, i) => PL + (i / (landingEarnings.length - 1)) * iW);
  const ys = landingEarnings.map((v) => PT + iH - ((v - min) / range) * iH);
  const pts = xs.map((x, i) => `${x},${ys[i]}`).join(" ");
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: 200, display: "block" }} onMouseLeave={() => setHov(null)}>
        {landingMonths.map((m, i) => (
          <text key={m} x={xs[i]} y={H - 6} textAnchor="middle" fontSize={9} fill="#0b0a0c50" fontFamily="Inter, sans-serif">{m}</text>
        ))}
        <polyline points={pts} fill="none" stroke="#8d0000" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        {landingEarnings.map((v, i) => (
          <g key={i} onMouseEnter={() => setHov(i)} style={{ cursor: "crosshair" }}>
            <rect x={xs[i] - (iW / (landingEarnings.length - 1)) / 2} y={PT} width={iW / (landingEarnings.length - 1)} height={iH} fill="transparent" />
            {hov === i && (
              <>
                <line x1={xs[i]} x2={xs[i]} y1={PT} y2={PT + iH} stroke="#0b0a0c15" strokeWidth={1} />
                <circle cx={xs[i]} cy={ys[i]} r={4} fill="#8d0000" stroke="white" strokeWidth={2} />
              </>
            )}
          </g>
        ))}
      </svg>
      {hov !== null && (
        <div style={{
          position: "absolute",
          top: (ys[hov] / (H / 200)) - 36,
          left: `${(xs[hov] / W) * 100}%`,
          transform: "translateX(-50%)",
          background: "#f6f2ec",
          border: "2px solid #8d0000",
          borderRadius: 8,
          padding: "4px 10px",
          fontSize: 12,
          fontFamily: "Inter, sans-serif",
          color: "#0b0a0c",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}>
          <b>{landingMonths[hov]}</b> — ${(landingEarnings[hov] / 100).toFixed(0)}k
        </div>
      )}
    </div>
  );
}
function IncomeInsightsSection() {
  return (
    <section className="bg-[#f6f2ec] w-full shrink-0">
      <div className="flex flex-col items-center px-5 py-16 md:px-16 md:py-28 w-full overflow-hidden">
        <div className="flex flex-col items-center gap-12 md:gap-20 w-full max-w-[1280px]">
          {/* Section header */}
          <div className="flex flex-col gap-3 items-center text-center max-w-[768px]">
            <span
              className="text-[#0b0a0c] text-[16px] leading-[1.5]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Insights
            </span>
            <p
              className="text-[#0b0a0c] text-[44px] md:text-[60px] leading-[1.2] tracking-[0.44px] md:tracking-[0.6px]"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              Understand your freelance income clearly
            </p>
            <p
              className="text-[#0b0a0c] text-[14px] md:text-[20px] leading-[1.6]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              See earnings trends and income sources at a glance
            </p>
          </div>

          {/* Card */}
          <div className="relative w-full rounded-[16px] border-2 border-[#8d0000] overflow-hidden min-h-[420px] md:min-h-[640px] flex flex-col md:flex-row bg-[#8d0000]">
            {/* Left: text */}
            <div className="flex-1 flex flex-col justify-center p-6 md:p-12 gap-8">
              <div className="flex flex-col gap-2">
                <span
                  className="text-[16px] leading-[1.5] text-[#fcfcfc]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  Growth
                </span>
              </div>
              <div className="flex flex-col gap-6">
                <p
                  className="text-[32px] md:text-[48px] leading-[1.2] tracking-[0.32px] md:tracking-[0.48px] text-[#fcfcfc]"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  Watch your money grow over time
                </p>
                <p
                  className="text-[12px] md:text-[18px] leading-[1.6] text-[#fcfcfc]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  Monthly charts show exactly where your income comes from and how it's trending.
                </p>
              </div>
              <ExploreButton fullWidth />
            </div>

            {/* Right: earnings line chart */}
            <div className="flex-1 flex flex-col justify-center p-6 md:p-8 bg-[#F6F2EC]/100 gap-6 bg-[#f6f2ec]">
              {/* Summary stats */}
              <div className="flex gap-6 shrink-0">
                <div>
                  <p
                    className="text-[#0b0a0c]/50 text-[11px] uppercase tracking-wider"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                  >
                    Total Earnings
                  </p>
                  <p
                    className="text-[#0b0a0c] text-[22px] leading-[1.2]"
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}
                  >
                    $51,400
                  </p>
                </div>
                <div>
                  <p
                    className="text-[#0b0a0c]/50 text-[11px] uppercase tracking-wider"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                  >
                    vs Last Year
                  </p>
                  <p
                    className="text-[#478d00] text-[22px] leading-[1.2]"
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}
                  >
                    +34%
                  </p>
                </div>
              </div>
              <LandingSparkline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-[#f6f2ec] w-full shrink-0" id="how-it-works">
      <div className="flex flex-col items-center px-5 py-16 md:px-16 md:py-28 w-full overflow-hidden">
        <div className="flex flex-col items-center gap-12 md:gap-20 w-full max-w-[1280px]">
          {/* Header */}
          <div className="flex flex-col gap-3 items-center text-center max-w-[768px]">
            <span
              className="text-[#0b0a0c] text-[16px] leading-[1.5]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Process
            </span>
            <p
              className="text-[#0b0a0c] text-[44px] md:text-[60px] leading-[1.2] tracking-[0.44px] md:tracking-[0.6px]"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              Three steps to clarity
            </p>
            <p
              className="text-[#0b0a0c] text-[14px] md:text-[20px] leading-[1.6]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Connect your work, invoices, and payments seamlessly
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col md:flex-row gap-8 w-full items-stretch">
            {/* Left: 2 stacked cards */}
            <div className="flex flex-col gap-8 flex-1">
              {/* Step 1 */}
              <div className="relative rounded-[16px] border-2 border-[#478d00] overflow-hidden flex-1 bg-[#dae8cc]">
                <div className="p-6 md:p-12">
                  {/* Start icon */}
                  <div className="size-12 mb-6 flex items-center justify-center">
                    <svg viewBox="0 0 39.926 24.407" fill="none" className="w-10">
                      <path
                        d="M1.6945 24.407C1.21117 24.407 0.808 24.2432 0.485 23.9155C0.161667 23.5882 0 23.1842 0 22.7035V1.7035C0 1.22283 0.1645 0.818834 0.4935 0.491501C0.8225 0.163834 1.22867 0 1.712 0C2.19533 0 2.59867 0.163834 2.922 0.491501C3.245 0.818834 3.4065 1.22283 3.4065 1.7035V22.7035C3.4065 23.1842 3.242 23.5882 2.913 23.9155C2.584 24.2432 2.17783 24.407 1.6945 24.407ZM34.0705 13.907H10.06C9.579 13.907 9.17483 13.7423 8.8475 13.413C8.52017 13.084 8.3565 12.6778 8.3565 12.1945C8.3565 11.7115 8.52017 11.3083 8.8475 10.985C9.17483 10.6617 9.579 10.5 10.06 10.5H34.0705L27.0795 3.447C26.7315 3.107 26.5595 2.70917 26.5635 2.2535C26.5675 1.79783 26.7395 1.4 27.0795 1.06C27.4192 0.720001 27.815 0.55 28.267 0.55C28.7187 0.55 29.1185 0.720001 29.4665 1.06L39.4045 10.998C39.5872 11.1807 39.7198 11.3735 39.8025 11.5765C39.8848 11.7795 39.926 11.9907 39.926 12.21C39.926 12.4297 39.8848 12.6387 39.8025 12.837C39.7198 13.0357 39.5872 13.2263 39.4045 13.409L29.4665 23.347C29.1185 23.687 28.716 23.8588 28.259 23.8625C27.802 23.8665 27.4062 23.7052 27.0715 23.3785C26.7288 23.0255 26.5575 22.6113 26.5575 22.136C26.5575 21.6607 26.7275 21.252 27.0675 20.91L34.0705 13.907Z"
                        fill="#0b0a0c"
                      />
                    </svg>
                  </div>
                  <p
                    className="text-[#0b0a0c] text-[32px] md:text-[48px] leading-[1.2] tracking-[0.32px] mb-6"
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}
                  >
                    Create a project or invoice
                  </p>
                  <p
                    className="text-[#0b0a0c] text-[14px] md:text-[18px] leading-[1.6]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    Start by setting up your project with scope and timeline or generate an invoice from existing work.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative rounded-[16px] bg-[#f6f2ec] border-2 border-[#008d8d] overflow-hidden flex-1">
                <div className="p-6 md:p-12 bg-[#cce8e8]">
                  <div className="size-12 mb-6 flex items-center justify-center">
                    <svg viewBox="0 0 32.61 40.61" fill="none" className="w-8">
                      <path
                        d="M14.011 27.4815L9.86 23.3305C9.711 23.1885 9.55217 23.0822 9.3835 23.0115C9.21483 22.9408 9.03983 22.9075 8.8585 22.9115C8.6775 22.9155 8.49817 22.955 8.3205 23.03C8.14317 23.105 7.9875 23.2215 7.8535 23.3795C7.5695 23.6708 7.4275 24.0132 7.4275 24.4065C7.4275 24.7998 7.56967 25.1408 7.854 25.4295L12.7935 30.3675C12.9775 30.5495 13.1712 30.682 13.3745 30.765C13.5775 30.848 13.7883 30.8895 14.007 30.8895C14.2257 30.8895 14.434 30.848 14.632 30.765C14.8303 30.682 15.0212 30.5495 15.2045 30.3675L24.559 21.013C24.8333 20.727 24.9705 20.3872 24.9705 19.9935C24.9705 19.6002 24.8303 19.2622 24.55 18.9795C24.2693 18.6968 23.9303 18.5555 23.533 18.5555C23.1357 18.5555 22.7953 18.6972 22.512 18.9805L14.011 27.4815ZM3.4065 40.61C2.4865 40.61 1.68883 40.2722 1.0135 39.5965C0.337833 38.9212 0 38.1235 0 37.2035V3.4185C0 2.49517 0.337833 1.69466 1.0135 1.017C1.68883 0.338998 2.4865 0 3.4065 0H20.051C20.5227 0 20.9722 0.0953319 21.3995 0.285999C21.8268 0.476665 22.1937 0.725164 22.5 1.0315L31.5785 10.11C31.8848 10.4163 32.1333 10.7832 32.324 11.2105C32.5147 11.6378 32.61 12.0873 32.61 12.559V37.2035C32.61 38.1235 32.271 38.9212 31.593 39.5965C30.9153 40.2722 30.1148 40.61 29.1915 40.61H3.4065ZM19.7415 11.0155V3.4185H3.4065V37.2035H29.1915V12.7185H21.4445C20.9638 12.7185 20.5598 12.5548 20.2325 12.2275C19.9052 11.9002 19.7415 11.4962 19.7415 11.0155Z"
                        fill="#0b0a0c"
                      />
                    </svg>
                  </div>
                  <p
                    className="text-[#0b0a0c] text-[32px] md:text-[48px] leading-[1.2] tracking-[0.32px] mb-6"
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}
                  >
                    Manage tasks and track progress
                  </p>
                  <p
                    className="text-[#0b0a0c] text-[14px] md:text-[18px] leading-[1.6]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    Organize your work with simple checklists. Keep tasks grouped by Today, Upcoming, and Completed —
                    stay focused on what actually matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: large card with image */}
            <div className="relative rounded-[16px] bg-[#f6f2ec] border-2 border-[#47008d] overflow-hidden flex-1 min-h-[400px] flex flex-col">
              <div className="p-6 md:p-12 bg-[#dacce8]">
                <span
                  className="text-[#0b0a0c] text-[16px] leading-[1.5] block mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  First
                </span>
                <p
                  className="text-[#0b0a0c] text-[32px] md:text-[48px] leading-[1.2] tracking-[0.32px] mb-6"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  Three connected steps to control
                </p>
                <p
                  className="text-[#0b0a0c] text-[14px] md:text-[18px] leading-[1.6]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  Link your projects, invoices, and payments into one flowing system
                </p>
              </div>
              <div className="relative flex-1 min-h-[200px] overflow-hidden">
                <img
                  src={image_2149726093}
                  alt="Process flow diagram"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "top center" }}
                />
              </div>
            </div>
          </div>

          <ExploreButton />
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-[#8d0000] w-full shrink-0">
      <div className="flex flex-col items-center px-5 py-16 md:px-16 md:py-28 w-full overflow-hidden">
        <div className="w-full max-w-[1280px]">
          <div className="relative rounded-[16px] bg-[#8d0000] border-2 border-white overflow-hidden min-h-[280px] md:min-h-[352px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-8 max-w-[768px] p-8 md:p-16 text-center">
              <p
                className="text-white text-[44px] md:text-[60px] leading-[1.2] tracking-[0.44px] md:tracking-[0.6px]"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                Start organizing today
              </p>
              <p
                className="text-white text-[14px] md:text-[20px] leading-[1.6]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                No complexity. No clutter. Just clarity and control over your freelance business.
              </p>
              <div className="flex gap-4 items-start flex-wrap justify-center">
                <PrimaryButton dark={false}>Get Started</PrimaryButton>
                <button className="relative rounded-[6px] shrink-0 cursor-pointer">
                  <div className="flex items-center justify-center px-6 py-[10px]">
                    <span
                      className="text-white text-sm whitespace-nowrap"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                    >
                      Learn More
                    </span>
                  </div>
                  <div
                    aria-hidden
                    className="absolute border-b-4 border-l-2 border-r-2 border-t-2 border-white border-solid inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [email, setEmail] = useState("");

  const footerLinks = [
    {
      heading: "Product",
      links: ["Features", "How it works", "Pricing", "Get started", "Resources"],
    },
    {
      heading: "Company",
      links: ["About us", "Blog", "Contact", "Careers", "Support"],
    },
    {
      heading: "Legal",
      links: ["Privacy policy", "Terms of service", "Cookie policy", "Accessibility", "Sitemap"],
    },
    {
      heading: "Connect",
      links: ["Twitter", "LinkedIn", "Instagram", "Facebook", "Discord"],
    },
    {
      heading: "Freelancers",
      links: ["For agencies", "For teams", "For enterprises", "For consultants"],
    },
  ];

  return (
    <footer className="bg-[#232224] w-full shrink-0">
      <div className="flex flex-col items-center px-5 py-12 md:px-16 md:py-20 w-full overflow-hidden">
        <div className="flex flex-col gap-12 md:gap-20 w-full max-w-[1280px]">
          {/* Newsletter */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="flex flex-col gap-1 max-w-[560px]">
              <p
                className="text-white text-[16px] md:text-[20px] leading-[1.6]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                Stay in the loop
              </p>
              <p
                className="text-white text-[14px] md:text-[18px] leading-[1.6]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                Get updates on new features and freelancer tips
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-[400px]">
              <div className="flex gap-4 items-start">
                <div className="relative flex-1 rounded-[6px]">
                  <div
                    aria-hidden
                    className="absolute border-2 border-white inset-[-2px] pointer-events-none rounded-[8px]"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-transparent px-3 py-2 text-white/60 text-[14px] md:text-[18px] leading-[1.6] outline-none placeholder:text-white/40"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <button className="relative rounded-[6px] shrink-0 cursor-pointer">
                  <div className="flex items-center justify-center px-6 py-[10px]">
                    <span
                      className="text-white text-sm md:text-[18px] whitespace-nowrap"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                    >
                      Subscribe
                    </span>
                  </div>
                  <div
                    aria-hidden
                    className="absolute border-b-4 border-l-2 border-r-2 border-t-2 border-white border-solid inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]"
                  />
                </button>
              </div>
              <p
                className="text-white text-[10px] leading-[1.6]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                We respect your privacy. Unsubscribe anytime.{" "}
                <span className="underline cursor-pointer">Terms of service</span>
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Logo */}
            <div className="flex-1 min-w-[120px] font-[Archivo_Black]">
              <span
                className="text-[#f1f5f9] text-[24px] md:text-[40px] leading-[32px] tracking-[-0.6px]"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                OruHQ
              </span>
            </div>

            {/* Link columns */}
            {footerLinks.map((col) => (
              <div key={col.heading} className="flex-1 flex flex-col gap-3">
                <p
                  className="text-white text-[14px] md:text-[18px] leading-[1.6]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  {col.heading}
                </p>
                <div className="flex flex-col">
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-white text-[12px] md:text-[16px] leading-[1.6] py-2 hover:text-white/70 transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Credits */}
          <div className="flex flex-col gap-8">
            {/* Divider */}
            <div className="w-full h-[2px] bg-white" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
                <span
                  className="text-white text-[12px] md:text-[16px] leading-[1.6]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  Privacy
                </span>
                <a
                  href="#"
                  className="text-white text-[12px] md:text-[16px] leading-[1.6] underline"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  Terms of service
                </a>
                <a
                  href="#"
                  className="text-white text-[12px] md:text-[16px] leading-[1.6] underline"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  Cookies
                </a>
                <a
                  href="#"
                  className="text-white text-[12px] md:text-[16px] leading-[1.6] underline"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  Cookies Settings
                </a>
              </div>

              {/* Social icons */}
              <div className="flex gap-3 items-center">
                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100 transition-opacity">
                  <svg className="size-6" fill="none" viewBox="0 0 20 20">
                    <path
                      d="M20 10.0611C20 4.50451 15.5229 0 10 0C4.47715 0 0 4.50451 0 10.0611C0 15.0828 3.65684 19.2452 8.4375 20V12.9694H5.89844V10.0611H8.4375V7.84452C8.4375 5.32296 9.9305 3.93012 12.2146 3.93012C13.3088 3.93012 14.4531 4.12663 14.4531 4.12663V6.60261H13.1922C11.95 6.60261 11.5625 7.37822 11.5625 8.1739V10.0611H14.3359L13.8926 12.9694H11.5625V20C16.3432 19.2452 20 15.083 20 10.0611Z"
                      fill="white"
                    />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="opacity-80 hover:opacity-100 transition-opacity">
                  <svg className="size-6" fill="none" viewBox="0 0 18 18">
                    <path
                      clipRule="evenodd"
                      d="M13 0H5C2.23858 0 0 2.23858 0 5V13C0 15.7614 2.23858 18 5 18H13C15.7614 18 18 15.7614 18 13V5C18 2.23858 15.7614 0 13 0ZM16.25 13C16.2445 14.7926 14.7926 16.2445 13 16.25H5C3.20735 16.2445 1.75549 14.7926 1.75 13V5C1.75549 3.20735 3.20735 1.75549 5 1.75H13C14.7926 1.75549 16.2445 3.20735 16.25 5V13ZM13.75 5.25C14.3023 5.25 14.75 4.80228 14.75 4.25C14.75 3.69772 14.3023 3.25 13.75 3.25C13.1977 3.25 12.75 3.69772 12.75 4.25C12.75 4.80228 13.1977 5.25 13.75 5.25ZM9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5027 7.8057 13.0294 6.65957 12.1849 5.81508C11.3404 4.97059 10.1943 4.49734 9 4.5ZM6.25 9C6.25 10.5188 7.4812 11.75 9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.4812 10.5188 6.25 9 6.25C7.4812 6.25 6.25 7.4812 6.25 9Z"
                      fill="white"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
                {/* X/Twitter */}
                <a href="#" aria-label="Twitter" className="opacity-80 hover:opacity-100 transition-opacity">
                  <svg className="size-6" fill="none" viewBox="0 0 18 16">
                    <path
                      d="M14.1761 0H16.9362L10.9061 6.7774L18 16H12.4456L8.0951 10.4066L3.11723 16H0.35544L6.80517 8.7508L0 0H5.69545L9.6279 5.11262L14.1761 0ZM13.2073 14.3754H14.7368L4.86441 1.53928H3.2232L13.2073 14.3754Z"
                      fill="white"
                    />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" aria-label="LinkedIn" className="opacity-80 hover:opacity-100 transition-opacity">
                  <svg className="size-6" fill="none" viewBox="0 0 18 18">
                    <path
                      clipRule="evenodd"
                      d="M1.5 0C0.67157 0 0 0.67157 0 1.5V16.5C0 17.3284 0.67157 18 1.5 18H16.5C17.3284 18 18 17.3284 18 16.5V1.5C18 0.67157 17.3284 0 16.5 0H1.5ZM5.52076 4.00272C5.52639 4.95897 4.81061 5.54819 3.96123 5.54397C3.16107 5.53975 2.46357 4.90272 2.46779 4.00413C2.47201 3.15897 3.13998 2.47975 4.00764 2.49944C4.88795 2.51913 5.52639 3.1646 5.52076 4.00272ZM9.2797 6.76176H6.75971H6.7583V15.3216H9.4217V15.1219C9.4217 14.742 9.4214 14.362 9.4211 13.9819C9.4203 12.9681 9.4194 11.9532 9.4246 10.9397C9.426 10.6936 9.4372 10.4377 9.5005 10.2028C9.7381 9.3253 10.5271 8.7586 11.4074 8.8979C11.9727 8.9864 12.3467 9.3141 12.5042 9.8471C12.6013 10.1803 12.6449 10.5389 12.6491 10.8863C12.6605 11.9339 12.6589 12.9815 12.6573 14.0292C12.6567 14.399 12.6561 14.769 12.6561 15.1388V15.3202H15.328V15.1149C15.328 14.6629 15.3278 14.211 15.3275 13.7591C15.327 12.6296 15.3264 11.5001 15.3294 10.3702C15.3308 9.8597 15.276 9.3563 15.1508 8.8627C14.9638 8.1286 14.5771 7.5211 13.9485 7.0824C13.5027 6.77019 13.0133 6.5691 12.4663 6.5466C12.404 6.54401 12.3412 6.54062 12.2781 6.53721C11.9984 6.52209 11.7141 6.50673 11.4467 6.56066C10.6817 6.71394 10.0096 7.0641 9.5019 7.6814C9.4429 7.7522 9.3852 7.8241 9.2991 7.9314L9.2797 7.9557V6.76176ZM2.68164 15.3244H5.33242V6.76733H2.68164V15.3244Z"
                      fill="white"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" aria-label="YouTube" className="opacity-80 hover:opacity-100 transition-opacity">
                  <svg className="size-6" fill="none" viewBox="0 0 20.0141 14.012">
                    <path
                      d="M19.607 2.20301C19.4931 1.78041 19.2705 1.39501 18.9614 1.08518C18.6522 0.775338 18.2673 0.551868 17.845 0.437007C16.279 0.00700739 10.014 7.5965e-06 10.014 7.5965e-06C10.014 7.5965e-06 3.75 -0.00699261 2.183 0.404007C1.76093 0.524154 1.37682 0.750785 1.06757 1.06214C0.758311 1.3735 0.534287 1.75913 0.417002 2.18201C0.00400165 3.74801 1.46515e-06 6.99601 1.46515e-06 6.99601C1.46515e-06 6.99601 -0.00399852 10.26 0.406001 11.81C0.636001 12.667 1.311 13.344 2.169 13.575C3.751 14.005 9.999 14.012 9.999 14.012C9.999 14.012 16.264 14.019 17.83 13.609C18.2525 13.4943 18.6377 13.2714 18.9477 12.9622C19.2576 12.653 19.4814 12.2682 19.597 11.846C20.011 10.281 20.014 7.03401 20.014 7.03401C20.014 7.03401 20.034 3.76901 19.607 2.20301ZM8.01 10.005L8.015 4.00501L13.222 7.01001L8.01 10.005Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <p
              className="text-white/50 text-[12px] leading-[1.6]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              © 2025 OruHQ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function OruHQLanding() {
  const navigate = useNavigate();
  const goToOnboarding = () => navigate("/onboarding");

  return (
    <div className="flex flex-col items-start w-full min-h-screen" onClick={(e) => {
      const btn = (e.target as HTMLElement).closest("button");
      if (btn && (btn.textContent?.trim() === "Get Started" || btn.textContent?.trim() === "Get Started")) {
        goToOnboarding();
      }
    }}>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeatureGridSection />
      <TaskManagerSection />
      <IncomeInsightsSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
}

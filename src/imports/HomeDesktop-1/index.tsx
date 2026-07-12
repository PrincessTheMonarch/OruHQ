import svgPaths from "./svg-dcv19jui00";
import imgPlaceholderImage from "./96f3dee3bd46eebb2bdafbb44ef5f484623f93a7.png";
import imgPlaceholderImage1 from "./bc96df429a349e44fa05b9e94567583ceb68fa6b.png";
import imgPlaceholderImage2 from "./f9dc3ecac4a2fc99aa6deb9127c07b877ba103d5.png";
import imgPlaceholderImage3 from "./a9e16dd8e0f27e434673fe8dcba11cc02162eda5.png";
import imgPlaceholderImage4 from "./43c81a4b16ce6f195ed49febb9f825af0020cce2.png";

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Features</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">How It Works</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Column">
      <Link />
      <Link1 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Column">
      <Column1 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-w-px relative" data-name="Column">
      <div className="content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute bg-white inset-0 pointer-events-none rounded-[6px]" />
        <div aria-hidden className="absolute border-[#dadada] border-b-4 border-l-2 border-r-2 border-solid border-t-2 inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0b0a0c] text-[18px] whitespace-nowrap">Get Started</p>
        <div className="absolute inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_0px_0px_#dadada]" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Column />
      <p className="[word-break:break-word] font-['Cooper_Black:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#f1f5f9] text-[40px] tracking-[-0.6px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        OruHQ
      </p>
      <Column2 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-[#0b0a0c] h-[72px] relative shrink-0 w-full" data-name="Navbar / 3 /">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[64px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#0b0a0c] w-full" data-name="Content">
      <div className="font-['Archivo_Black:Regular',sans-serif] leading-[0] relative shrink-0 text-[0px] tracking-[-4.2px] w-full">
        <p className="mb-0 text-[84px]">
          <span className="leading-none">{`Work. Invoice. `}</span>
          <span className="[word-break:break-word] font-['Archivo_Black:Regular',sans-serif] leading-none not-italic text-[#8d0000]">Get Paid.</span>
        </p>
        <p className="leading-none text-[84px]">All in one place.</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full">OruHQ helps freelancers manage projects, tasks, invoices, payments, deadlines, and earnings in one connected workspace. Built for those who want clarity, structure, and control.</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <div className="bg-[#0b0a0c] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border-[#0b0a0c] border-b-4 border-l-2 border-r-2 border-solid border-t-2 inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Get Started</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border-[#0b0a0c] border-b-4 border-l-2 border-r-2 border-solid border-t-2 inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0b0a0c] text-[18px] whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Column">
      <Content />
      <Actions />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="h-[638px] relative shrink-0 w-[520px]" data-name="Image container">
      <div className="-translate-x-1/2 absolute bottom-0 left-1/2 rounded-[16px] top-0 w-[424px]" data-name="Placeholder Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute h-full left-[-57.5%] max-w-none top-[0.04%] w-[225.71%]" src={imgPlaceholderImage} />
        </div>
      </div>
      <div className="absolute right-[-46px] rounded-[16px] size-[244px] top-[58px]" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage1} />
      </div>
      <div className="absolute h-[202px] left-[-20px] rounded-[16px] top-[421px] w-[304px]" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage2} />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="Component">
      <Column3 />
      <ImageContainer />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#f6f2ec] relative shrink-0 w-full" data-name="Header / 127 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Reality</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center text-white w-full" data-name="Content">
      <p className="font-['Archivo_Black:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">Freelance work becomes disorganized fast</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full">Most freelancers juggle multiple tools and lose track of what matters. OruHQ brings everything together in one connected workspace.</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] opacity-80 relative shrink-0 w-full" data-name="Content">
      <TaglineWrapper />
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Archivo_Black:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[48px] tracking-[0.48px] w-full">Tasks scattered across multiple tools</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full">You spend more time switching between apps than doing actual work.</p>
    </div>
  );
}

function ContentTop() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content Top">
      <Content3 />
    </div>
  );
}

function TabPane() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[800px]" data-name="Tab Pane 1">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[64px] relative size-full">
          <ContentTop />
        </div>
      </div>
    </div>
  );
}

function TabsContent() {
  return (
    <div className="content-stretch flex flex-col h-[448px] items-start relative shrink-0 w-[800px]" data-name="Tabs Content">
      <TabPane />
    </div>
  );
}

function TabLink() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab link">
      <div aria-hidden className="absolute border-b-2 border-solid border-white inset-[0_0_-2px_0] pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[24px] relative size-full">
          <p className="[word-break:break-word] font-['Archivo_Black:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white tracking-[0.32px] w-full">Scattered Tasks</p>
        </div>
      </div>
    </div>
  );
}

function TabLink1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Tab link">
      <div aria-hidden className="absolute border-b-2 border-solid border-white inset-[0_0_-2px_0] pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[24px] relative size-full">
          <p className="[word-break:break-word] font-['Archivo_Black:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white tracking-[0.32px] w-full">Lost Invoices</p>
        </div>
      </div>
    </div>
  );
}

function TabLink2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Tab link">
      <div aria-hidden className="absolute border-b-2 border-solid border-white inset-[0_0_-2px_0] pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[24px] relative size-full">
          <p className="[word-break:break-word] font-['Archivo_Black:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white tracking-[0.32px] w-full">Missed Deadlines</p>
        </div>
      </div>
    </div>
  );
}

function TabLink3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Tab link">
      <div aria-hidden className="absolute border-b-2 border-solid border-white inset-[0_0_-2px_0] pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[24px] relative size-full">
          <p className="[word-break:break-word] font-['Archivo_Black:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white tracking-[0.32px] w-full">Unpaid Work</p>
        </div>
      </div>
    </div>
  );
}

function TabsMenu() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[480px] min-w-px relative self-stretch" data-name="Tabs Menu">
      <div aria-hidden className="absolute border-l-2 border-solid border-white inset-[0_0_0_-2px] pointer-events-none" />
      <TabLink />
      <TabLink1 />
      <TabLink2 />
      <TabLink3 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#232224] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <TabsContent />
        <TabsMenu />
      </div>
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content1 />
      <Card />
    </div>
  );
}

function Layout4() {
  return (
    <div className="bg-[#232224] relative shrink-0 w-full" data-name="Layout / 506 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0b0a0c] text-[16px] whitespace-nowrap">Solution</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#0b0a0c] w-full" data-name="Content">
      <p className="font-['Archivo_Black:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">One workspace for everything</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full">Stop switching between tools. OruHQ connects your projects, invoices, and payments in a single, intuitive workspace.</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content6 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <SectionTitle />
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column">
      <Content5 />
    </div>
  );
}

function ProjectTracking() {
  return (
    <div className="bg-[#8d0000] flex-[1_0_0] min-w-px relative rounded-[20px] shadow-[4px_6px_0px_0px_rgba(20,5,5,0.9)]" data-name="Project Tracking">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[21px] items-start not-italic px-[24px] py-[40px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[13px] text-white w-full">01</p>
          <p className="font-['Archivo_Black:Regular',sans-serif] leading-[28px] relative shrink-0 text-[22px] text-white w-full">Project Tracking</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.8)] w-full">Manage client projects from start to finish with clear deadlines and progress.</p>
        </div>
      </div>
    </div>
  );
}

function TaskManager() {
  return (
    <div className="bg-[#dae8cc] flex-[1_0_0] min-w-px relative rounded-[20px] shadow-[4px_6px_0px_0px_rgba(20,5,5,0.9)]" data-name="Task Manager">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[21px] items-start not-italic px-[24px] py-[40px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[13px] w-full">02</p>
          <p className="font-['Archivo_Black:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#1a1a1a] text-[22px] w-full">Task Manager</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1a1010] text-[13px] w-full">Break work into tasks, move them through stages, track delivery.</p>
        </div>
      </div>
    </div>
  );
}

function InvoiceBuilder() {
  return (
    <div className="bg-[#cce8e8] flex-[1_0_0] min-w-px relative rounded-[20px] shadow-[4px_6px_0px_0px_rgba(20,5,5,0.9)]" data-name="Invoice Builder">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[21px] items-start not-italic px-[24px] py-[40px] relative size-full text-[#1a1010]">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[13px] w-full">03</p>
          <p className="font-['Archivo_Black:Regular',sans-serif] leading-[28px] relative shrink-0 text-[22px] w-full">Invoice Builder</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] w-full">Create and send professional invoices in seconds — standalone or linked.</p>
        </div>
      </div>
    </div>
  );
}

function PaymentTracking() {
  return (
    <div className="bg-[#dacce8] flex-[1_0_0] min-w-px relative rounded-[20px] shadow-[4px_6px_0px_0px_rgba(20,5,5,0.9)]" data-name="Payment Tracking">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[21px] items-start not-italic px-[24px] py-[40px] relative size-full text-[#1a1010]">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[13px] w-full">04</p>
          <p className="font-['Archivo_Black:Regular',sans-serif] leading-[28px] relative shrink-0 text-[22px] w-full">Payment Tracking</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] w-full">{`Log payments in real time, know what's pending, confirmed, or completed.`}</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row">
      <ProjectTracking />
      <TaskManager />
      <InvoiceBuilder />
      <PaymentTracking />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Content">
      <Row />
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Column">
      <Content7 />
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0b0a0c] text-[18px] whitespace-nowrap">Explore</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, #0B0A0C)" id="Vector" stroke="var(--stroke-0, #0B0A0C)" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#0b0a0c] border-b-4 border-l-2 border-r-2 border-solid border-t-2 inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <Button />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="Content">
      <Column4 />
      <Column5 />
      <Actions1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content4 />
    </div>
  );
}

function Layout3() {
  return (
    <div className="bg-[#f6f2ec] relative shrink-0 w-full" data-name="Layout / 463 /">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0b0a0c] text-[16px] whitespace-nowrap">Workflow</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper2 />
      <p className="[word-break:break-word] font-['Archivo_Black:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#0b0a0c] text-[60px] tracking-[0.6px] w-[min-content]">Task manager built for real freelance work</p>
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Column">
      <SectionTitle1 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="List Item">
      <p className="font-['Archivo_Black:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[26px] tracking-[0.26px] w-full">To do</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full">Work waiting to start, organized and ready when you are.</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="List Item">
      <p className="font-['Archivo_Black:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[26px] tracking-[0.26px] w-full">In progress</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full">Active tasks moving forward with clear due dates and status.</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start not-italic py-[8px] relative shrink-0 text-[#0b0a0c] w-full" data-name="Row">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row1 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0b0a0c] text-[20px] w-full">Organize your day visually. Drag tasks through columns and stay focused on what matters.</p>
      <Content11 />
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0b0a0c] text-[18px] whitespace-nowrap">Explore</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, #0B0A0C)" id="Vector" stroke="var(--stroke-0, #0B0A0C)" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#0b0a0c] border-b-4 border-l-2 border-r-2 border-solid border-t-2 inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <Button1 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <Actions3 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Content10 />
      <Actions2 />
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pt-[240px] relative" data-name="Column">
      <Content9 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="Content">
      <Column6 />
      <Column7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content8 />
    </div>
  );
}

function Layout2() {
  return (
    <div className="bg-[#f6f2ec] relative shrink-0 w-full" data-name="Layout / 461 /">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0b0a0c] text-[16px] text-center whitespace-nowrap">Insights</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0b0a0c] text-center w-full" data-name="Content">
      <p className="font-['Archivo_Black:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">Understand your freelance income clearly</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full">See earnings trends and income sources at a glance</p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper3 />
      <Content12 />
    </div>
  );
}

function TaglineWrapper4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0b0a0c] text-[16px] whitespace-nowrap">Growth</p>
    </div>
  );
}

function Content14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#0b0a0c] w-full" data-name="Content">
      <p className="font-['Archivo_Black:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[48px] tracking-[0.48px] w-full">Watch your money grow over time</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full">{`Monthly charts show exactly where your income comes from and how it's trending.`}</p>
    </div>
  );
}

function ContentTop1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
      <TaglineWrapper4 />
      <Content14 />
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0b0a0c] text-[18px] whitespace-nowrap">Explore</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, #0B0A0C)" id="Vector" stroke="var(--stroke-0, #0B0A0C)" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#0b0a0c] border-b-4 border-l-2 border-r-2 border-solid border-t-2 inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <Button2 />
    </div>
  );
}

function Content13() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center p-[48px] relative size-full">
          <ContentTop1 />
          <Actions4 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-name="Image">
      <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage3} />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#f6f2ec] flex-[1_0_0] h-[640px] min-w-px relative rounded-[16px]" data-name="Card">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Content13 />
        <Image />
      </div>
      <div aria-hidden className="absolute border-2 border-[#8d0000] border-solid inset-[-2px] pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Card1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component">
      <Row2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle2 />
      <Component1 />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-[#f6f2ec] relative shrink-0 w-full" data-name="Layout / 358 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0b0a0c] text-[16px] text-center whitespace-nowrap">Process</p>
    </div>
  );
}

function Content15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0b0a0c] text-center w-full" data-name="Content">
      <p className="font-['Archivo_Black:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">Three steps to clarity</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full">Connect your work, invoices, and payments seamlessly</p>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper5 />
      <Content15 />
    </div>
  );
}

function Content17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#0b0a0c] w-full" data-name="Content">
      <p className="font-['Archivo_Black:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[48px] tracking-[0.48px] w-full">Create a project or invoice</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full">Start by setting up your project with scope and timeline or generate an invoice from existing work.</p>
    </div>
  );
}

function ContentTop2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content Top">
      <div className="relative shrink-0 size-[48px]" data-name="start">
        <div className="absolute inset-[24.58%_9.11%_24.58%_7.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.926 24.407">
            <path d={svgPaths.p23441300} fill="var(--fill-0, #0B0A0C)" id="Vector" />
          </svg>
        </div>
      </div>
      <Content17 />
    </div>
  );
}

function Content16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[48px] relative size-full">
          <ContentTop2 />
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#f6f2ec] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Content16 />
      </div>
      <div aria-hidden className="absolute border-2 border-[#478d00] border-solid inset-[-2px] pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Content19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#0b0a0c] w-full" data-name="Content">
      <p className="font-['Archivo_Black:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[48px] tracking-[0.48px] w-full">Manage tasks and track progress</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full">Organize your work visually on kanban boards and keep everything aligned with your project milestones.</p>
    </div>
  );
}

function ContentTop3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content Top">
      <div className="relative shrink-0 size-[48px]" data-name="task">
        <div className="absolute inset-[7.69%_16.02%_7.71%_16.04%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.61 40.61">
            <path d={svgPaths.pcfa7480} fill="var(--fill-0, #0B0A0C)" id="Vector" />
          </svg>
        </div>
      </div>
      <Content19 />
    </div>
  );
}

function Content18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[48px] relative size-full">
          <ContentTop3 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#f6f2ec] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Content18 />
      </div>
      <div aria-hidden className="absolute border-2 border-[#008d8d] border-solid inset-[-2px] pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative self-stretch" data-name="Row">
      <Card2 />
      <Card3 />
    </div>
  );
}

function TaglineWrapper6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0b0a0c] text-[16px] whitespace-nowrap">First</p>
    </div>
  );
}

function Content21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#0b0a0c] w-full" data-name="Content">
      <p className="font-['Archivo_Black:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[48px] tracking-[0.48px] w-full">Three connected steps to control</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full">Link your projects, invoices, and payments into one flowing system</p>
    </div>
  );
}

function ContentTop4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
      <TaglineWrapper6 />
      <Content21 />
    </div>
  );
}

function Content20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[48px] relative size-full">
          <ContentTop4 />
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#f6f2ec] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Content20 />
        <div className="h-[360px] relative shrink-0 w-full" data-name="Placeholder Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[158.31%] left-0 max-w-none top-[-0.01%] w-full" src={imgPlaceholderImage4} />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-2 border-[#47008d] border-solid inset-[-2px] pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Row4 />
      <Card4 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component">
      <Row3 />
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0b0a0c] text-[18px] whitespace-nowrap">Explore</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, #0B0A0C)" id="Vector" stroke="var(--stroke-0, #0B0A0C)" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#0b0a0c] border-b-4 border-l-2 border-r-2 border-solid border-t-2 inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <Button3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle3 />
      <Component2 />
      <Actions5 />
    </div>
  );
}

function Layout1() {
  return (
    <div className="bg-[#f6f2ec] relative shrink-0 w-full" data-name="Layout / 367 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Content23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center text-white w-full" data-name="Content">
      <p className="font-['Archivo_Black:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">Start organizing today</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full">No complexity. No clutter. Just clarity and control over your freelance business.</p>
    </div>
  );
}

function Actions6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute bg-white inset-0 pointer-events-none rounded-[6px]" />
        <div aria-hidden className="absolute border-[#dadada] border-b-4 border-l-2 border-r-2 border-solid border-t-2 inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0b0a0c] text-[18px] whitespace-nowrap">Get Started</p>
        <div className="absolute inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_0px_0px_#dadada]" />
      </div>
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border-b-4 border-l-2 border-r-2 border-solid border-t-2 border-white inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <Content23 />
      <Actions6 />
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-[#8d0000] h-[352px] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[64px] relative size-full">
          <Content22 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Card5 />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#8d0000] h-[576px] relative shrink-0 w-full" data-name="CTA / 51 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Content24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.6] max-w-[560px] min-w-px not-italic relative text-white" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full">Stay in the loop</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[18px] w-full">Get updates on new features and freelancer tips</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Text input">
        <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[18px] text-[rgba(255,255,255,0.6)]">your@email.com</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border-b-4 border-l-2 border-r-2 border-solid border-t-2 border-white inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Subscribe</p>
      </div>
    </div>
  );
}

function Content25() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-normal gap-[4px] items-start relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0">We respect your privacy. Unsubscribe anytime.</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Roboto:Regular',sans-serif] leading-[1.5] relative shrink-0 underline" style={{ fontVariationSettings: '"wdth" 100' }}>
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  );
}

function Actions7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative self-stretch shrink-0 w-[400px]" data-name="Actions">
      <Form />
      <Content25 />
    </div>
  );
}

function Newsletter() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Newsletter">
      <Content24 />
      <Actions7 />
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Column">
      <p className="[word-break:break-word] font-['Cooper_Black:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#f1f5f9] text-[40px] tracking-[-0.6px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        OruHQ
      </p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Features</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">How it works</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Pricing</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Get started</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Resources</p>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Column">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[18px] text-white w-full">Product</p>
      <FooterLinks />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">About us</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Blog</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Contact</p>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Careers</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Support</p>
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Column">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[18px] text-white w-full">Company</p>
      <FooterLinks1 />
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Privacy policy</p>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Terms of service</p>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Cookie policy</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Accessibility</p>
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Sitemap</p>
    </div>
  );
}

function FooterLinks2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link12 />
      <Link13 />
      <Link14 />
      <Link15 />
      <Link16 />
    </div>
  );
}

function Column11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Column">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[18px] text-white w-full">Legal</p>
      <FooterLinks2 />
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Twitter</p>
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">LinkedIn</p>
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Instagram</p>
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Facebook</p>
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Discord</p>
    </div>
  );
}

function FooterLinks3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link17 />
      <Link18 />
      <Link19 />
      <Link20 />
      <Link21 />
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Column">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[18px] text-white w-full">Connect</p>
      <FooterLinks3 />
    </div>
  );
}

function Link22() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">For agencies</p>
    </div>
  );
}

function Link23() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">For teams</p>
    </div>
  );
}

function Link24() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">For enterprises</p>
    </div>
  );
}

function Link25() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">For consultants</p>
    </div>
  );
}

function Link26() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">© 2025 OruHQ. All rights reserved.</p>
    </div>
  );
}

function FooterLinks4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link22 />
      <Link23 />
      <Link24 />
      <Link25 />
      <Link26 />
    </div>
  );
}

function Column13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Column">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[18px] text-white w-full">Freelancers</p>
      <FooterLinks4 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Links">
      <Column8 />
      <Column9 />
      <Column10 />
      <Column11 />
      <Column12 />
      <Column13 />
    </div>
  );
}

function Credits1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-center leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-name="Credits">
      <p className="relative shrink-0">Privacy</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline">Terms of service</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline">Cookies</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline">Cookies Settings</p>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Social Links">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Facebook">
        <div className="absolute inset-[9.34%_8.33%_7.32%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2c56c980} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Instagram">
        <div className="absolute inset-[13.51%_12.5%_11.49%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.p9b0b480} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="X">
        <div className="absolute inset-[17.68%_12.5%_15.66%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
            <path d={svgPaths.pd265900} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="LinkedIn">
        <div className="absolute inset-[13.51%_12.5%_11.49%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.p56afe80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Youtube">
        <div className="absolute inset-[20.83%_8.33%_20.78%_8.27%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0141 14.012">
            <path d={svgPaths.p1fcc3d80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row">
      <Credits1 />
      <SocialLinks />
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Credits">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 2">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeWidth="2" x2="1280" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <Row5 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Newsletter />
      <Links />
      <Credits />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#232224] relative shrink-0 w-full" data-name="Footer / 5 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative size-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

export default function HomeDesktop() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Home • Desktop">
      <Navbar />
      <Header />
      <Layout4 />
      <Layout3 />
      <Layout2 />
      <Layout />
      <Layout1 />
      <Cta />
      <Footer />
    </div>
  );
}
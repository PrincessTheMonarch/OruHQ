import svgPaths from "./svg-3yaeznikgk";

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Column">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="menu">
        <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
            <path d={svgPaths.p56416f0} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Column">
      <p className="[word-break:break-word] font-['Cooper_Black:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#f1f5f9] text-[24px] tracking-[-0.6px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        OruHQ
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#0b0a0c] h-[64px] relative shrink-0 w-full z-[3]" data-name="Container 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[20px] relative size-full">
          <Column />
          <Column1 />
          <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[6px] shrink-0" data-name="Button">
            <div aria-hidden className="absolute bg-white inset-0 pointer-events-none rounded-[6px]" />
            <div aria-hidden className="absolute border-[#dadada] border-b-4 border-l-2 border-r-2 border-solid border-t-2 inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]" />
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0b0a0c] text-[14px] whitespace-nowrap">Get Started</p>
            <div className="absolute inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_0px_0px_#dadada]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Features</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">How It Works</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0" data-name="Column">
      <Link />
      <Link1 />
    </div>
  );
}

function Column2() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Column">
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Column3 />
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="bg-[#0b0a0c] content-stretch flex flex-col isolate items-center relative size-full" data-name="Navbar / 3 /">
      <Container />
      <Column2 />
    </div>
  );
}
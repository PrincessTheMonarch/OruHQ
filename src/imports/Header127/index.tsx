import imgPlaceholderImage from "./bc96df429a349e44fa05b9e94567583ceb68fa6b.png";
import imgPlaceholderImage1 from "./96f3dee3bd46eebb2bdafbb44ef5f484623f93a7.png";
import imgPlaceholderImage2 from "./f9dc3ecac4a2fc99aa6deb9127c07b877ba103d5.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-end justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#0b0a0c] text-[14px] w-[min-content]">OruHQ helps freelancers manage projects, tasks, invoices, payments, deadlines, and earnings in one connected workspace. Built for those who want clarity, structure, and control.</p>
      <div className="h-[88px] pointer-events-none relative rounded-[11.213px] shrink-0 w-[128px]" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[11.213px] size-full" src={imgPlaceholderImage} />
        <div aria-hidden className="absolute border-b-4 border-black border-l-2 border-r-2 border-solid border-t-2 inset-0 rounded-[11.213px]" />
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <div className="bg-[#0b0a0c] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border-[#0b0a0c] border-b-4 border-l-2 border-r-2 border-solid border-t-2 inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Get Started</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border-[#0b0a0c] border-b-4 border-l-2 border-r-2 border-solid border-t-2 inset-[-2px_-2px_-4px_-2px] pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0b0a0c] text-[14px] whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] font-['Archivo_Black:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#0b0a0c] text-[0px] tracking-[-1.8px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[1.1] mb-0 text-[36px]">{`Work. Invoice. `}</p>
        <p className="leading-[1.1] mb-0 text-[#8d0000] text-[36px]">Get Paid.</p>
        <p className="leading-[1.1] text-[36px]">All in one place.</p>
      </div>
      <Actions />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="Column">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[40px] items-end justify-center pointer-events-none relative shrink-0">
      <div className="h-[200px] relative rounded-[8.755px] shrink-0 w-[168px]" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8.755px] size-full" src={imgPlaceholderImage1} />
        <div aria-hidden className="absolute border-b-[3.095px] border-black border-l-[1.547px] border-r-[1.547px] border-solid border-t-[1.547px] inset-0 rounded-[8.755px]" />
      </div>
      <div className="h-[120px] relative rounded-[11.168px] shrink-0 w-[128px]" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[11.168px] size-full" src={imgPlaceholderImage2} />
        <div aria-hidden className="absolute border-b-[4.178px] border-black border-l-[2.089px] border-r-[2.089px] border-solid border-t-[2.089px] inset-0 rounded-[11.168px]" />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Component">
      <Column />
      <Frame />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#f6f2ec] content-stretch flex flex-col items-center justify-center px-[20px] py-[40px] relative size-full" data-name="Header / 127 /">
      <Container />
    </div>
  );
}
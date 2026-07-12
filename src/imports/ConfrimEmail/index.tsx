import svgPaths from "./svg-9kqe9rz4qz";

function Svg() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p17143710} id="Vector" stroke="var(--stroke-0, #8D0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p12025880} id="Vector_2" stroke="var(--stroke-0, #8D0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[rgba(141,0,0,0.1)] left-[191px] rounded-[9999px] size-[64px] top-[32px]" data-name="Background">
      <Svg />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[166px] left-0 top-0 w-[446px]" data-name="Container">
      <Background2 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Archivo:SemiBold',sans-serif] font-semibold leading-[32px] left-[97.22px] text-[#0f172a] text-[24px] text-center top-[126px] tracking-[-0.6px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        Almost done!
      </p>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e5e7eb] border-solid h-[58px] left-[32px] rounded-[12px] top-[72px] w-[382px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[91.38px] not-italic text-[#0f172a] text-[16px] text-center top-[16px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        jane@example.com
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#8d0000] h-[56px] left-0 rounded-[12px] top-0 w-[382px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[190.99px] not-italic text-[18px] text-center text-white top-[17px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Send Magic Link
      </p>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-[141.84px] size-[16px] top-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1e9ce1f0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12.67 8H3.34" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[44px] left-0 rounded-[12px] top-[68px] w-[382px]" data-name="Button">
      <Svg1 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[202.98px] not-italic text-[#64748b] text-[16px] text-center top-[12px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Edit Email
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[112px] left-[32px] top-[162px] w-[382px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[306px] left-0 top-[166px] w-[446px]" data-name="Container">
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[221.59px] not-italic text-[#475569] text-[16px] text-center top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        <p className="leading-[24px] mb-0">{`We use passwordless authentication. We'll send a`}</p>
        <p className="leading-[24px]">secure magic link to sign you in.</p>
      </div>
      <Background3 />
      <Container4 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-white border border-[rgba(229,231,235,0.5)] border-solid drop-shadow-[0px_8px_5px_rgba(226,232,240,0.5),0px_20px_12.5px_rgba(226,232,240,0.5)] h-[474px] left-0 rounded-[16px] top-0 w-[448px]" data-name="Background">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[474px] left-0 top-0 w-[448px]" data-name="Container">
      <Background1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[474px] left-[477px] top-[169.5px] w-[448px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#f6f2ec] h-[813px] left-0 top-0 w-[1402px]" data-name="Background">
      <Container />
    </div>
  );
}

export default function ConfrimEmail() {
  return (
    <div className="bg-white relative size-full" data-name="Confrim email">
      <Background />
    </div>
  );
}
import svgPaths from "./svg-i7nzwvlkhz";

function Svg() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_11_6636)" id="SVG">
          <path d={svgPaths.p1891d000} id="Vector" stroke="var(--stroke-0, #008D6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p73da280} id="Vector_2" stroke="var(--stroke-0, #008D6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.67 16H29.34" id="Vector_3" stroke="var(--stroke-0, #008D6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_11_6636">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[rgba(0,141,110,0.1)] left-[191px] rounded-[9999px] size-[64px] top-[32px]" data-name="Background">
      <Svg />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[228px] left-0 top-0 w-[446px]" data-name="Container">
      <Background2 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Archivo:SemiBold',sans-serif] font-semibold leading-[32px] left-[150.47px] text-[#0f172a] text-[24px] text-center top-[126px] tracking-[-0.6px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        Set your base currency
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[209.93px] not-italic text-[#64748b] text-[14px] text-center top-[164px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        <p className="leading-[20px] mb-0">{`We've auto-detected your location. This will be used for`}</p>
        <p className="leading-[20px]">your dashboard and invoices.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[44px] left-[38.77px] top-0 w-[56.48px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0f172a] text-[16px] top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        Nigeria
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#64748b] text-[14px] top-[24px]" style={{ fontFeatureSettings: '"dlig"' }}>
        NGN (₦)
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="[word-break:break-word] absolute h-[44px] left-[16px] not-italic top-[16px] w-[95.25px] whitespace-nowrap" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[13.39px] text-[#020617] text-[24px] text-center top-[6px]" style={{ fontFeatureSettings: '"dlig"' }}>
        🇳🇬
      </p>
      <Container6 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-[342px] size-[20px] top-[28px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white border-2 border-[#e5e7eb] border-solid h-[80px] left-0 rounded-[12px] top-0 w-[382px]" data-name="Button">
      <Container5 />
      <Svg1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[80px] left-[32px] top-0 w-[382px]" data-name="Container">
      <Button />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[16px] left-[32px] top-[112px] w-[382px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[126.6px] not-italic text-[#94a3b8] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        You can always change this later in Settings.
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#8d0000] h-[56px] left-[32px] rounded-[12px] top-[152px] w-[382px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[191px] not-italic text-[18px] text-center text-white top-[17px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Finish Setup
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[240px] left-0 top-[228px] w-[446px]" data-name="Container">
      <Container4 />
      <Container7 />
      <Button1 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-white border border-[rgba(229,231,235,0.5)] border-solid drop-shadow-[0px_8px_5px_rgba(226,232,240,0.5),0px_20px_12.5px_rgba(226,232,240,0.5)] h-[470px] left-0 rounded-[16px] top-0 w-[448px]" data-name="Background">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[470px] left-0 top-0 w-[448px]" data-name="Container">
      <Background1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[470px] left-[477px] top-[171.5px] w-[448px]" data-name="Container">
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

export default function CurrencySetup() {
  return (
    <div className="bg-white relative size-full" data-name="Currency Setup">
      <Background />
    </div>
  );
}
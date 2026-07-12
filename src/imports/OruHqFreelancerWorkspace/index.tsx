import svgPaths from "./svg-igls819si2";

function Container4() {
  return (
    <div className="[word-break:break-word] absolute h-[64px] left-0 top-0 w-[342.42px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Archivo:Black',sans-serif] font-black leading-[36px] left-0 text-[#0f172a] text-[30px] top-0 tracking-[-0.75px]" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        Projects
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[16px] top-[40px]" style={{ fontFeatureSettings: '"dlig"' }}>
        Manage your active work and track progress.
      </p>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute left-[24px] size-[16px] top-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M3.33 8H12.66" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 3.33V12.66" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#8d0000] h-[44px] left-[985.86px] rounded-[12px] top-[10px] w-[181.14px]" data-name="Button">
      <Svg />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[102.57px] not-italic text-[16px] text-center text-white top-[12px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Create Project
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[64px] left-[32px] top-[32px] w-[1167px]" data-name="Container">
      <Container4 />
      <Button />
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M14 14L11.11 11.11" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p24977900} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[28px] relative shrink-0 w-[400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
          Search projects or clients...
        </p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[44px] left-0 rounded-[12px] top-0 w-[448px]" data-name="Input">
      <div className="content-stretch flex items-start overflow-clip pl-[37px] pr-[13px] py-[9px] relative rounded-[inherit] size-full">
        <Container9 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[448px]" data-name="Container">
      <Input />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[448px]" data-name="Container">
      <Svg1 />
      <Container8 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[32px] left-[4px] rounded-[6px] top-[4px] w-[40.98px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[20.49px] not-italic text-[#0f172a] text-[14px] text-center top-[7px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        All
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[32px] left-[52.98px] rounded-[6px] top-[4px] w-[66.2px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[33.1px] not-italic text-[#64748b] text-[14px] text-center top-[7px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Active
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[32px] left-[127.19px] rounded-[6px] top-[4px] w-[70.09px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[35.05px] not-italic text-[#64748b] text-[14px] text-center top-[7px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        At Risk
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[32px] left-[205.28px] rounded-[6px] top-[4px] w-[97.08px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[48.54px] not-italic text-[#64748b] text-[14px] text-center top-[7px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Completed
      </p>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[42px] left-[464px] rounded-[8px] top-px w-[308.36px]" data-name="Background">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[1077px]" data-name="Container">
      <Container7 />
      <Background1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute left-[6px] size-[16px] top-[6px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2f344ec0} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p254cfd00} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p11d0a5f0} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pb3fbb70} id="Vector_4" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute left-[4px] rounded-[6px] size-[28px] top-[7px]" data-name="Button">
      <Svg2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute left-[6px] size-[16px] top-[6px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M2 8H2.01" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 12H2.01" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 4H2.01" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5.33 8H14" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5.33 12H14" id="Vector_5" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5.33 4H14" id="Vector_6" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#f1f5f9] left-[40px] rounded-[6px] size-[28px] top-[7px]" data-name="Button">
      <Svg3 />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[44px] left-[1093px] rounded-[8px] top-0 w-[74px]" data-name="Background">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[44px] left-[32px] top-[128px] w-[1167px]" data-name="Container">
      <Container6 />
      <Background2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="[word-break:break-word] absolute h-[48px] left-0 top-0 w-[186.16px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Archivo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#0f172a] text-[18px] top-0 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        E-commerce Redesign
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[14px] top-[28px]" style={{ fontFeatureSettings: '"dlig"' }}>
        Shopify Plus
      </p>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[rgba(0,141,110,0.1)] h-[20px] left-[1060.83px] rounded-[9999px] top-0 w-[56.17px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#008d6e] text-[12px] top-[2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Active
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[24px] w-[1117px]" data-name="Container">
      <Container12 />
      <Background4 />
    </div>
  );
}

function Container15() {
  return (
    <div className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-0 not-italic text-[#334155] text-[14px] top-0 w-[1117px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        Progress
      </p>
      <p className="absolute left-[1085.83px] top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        65%
      </p>
    </div>
  );
}

function Background6() {
  return <div className="absolute bg-[#008d6e] h-[8px] left-0 rounded-[9999px] top-0 w-[726.05px]" data-name="Background" />;
}

function Background5() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[8px] left-0 rounded-[9999px] top-[28px] w-[1117px]" data-name="Background">
      <Background6 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[1117px]" data-name="Container">
      <Container15 />
      <Background5 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M5.33 1.33V4" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.67 1.33V4" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pa7e2700} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 6.67H14" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[108.69px]" data-name="Container">
      <Svg4 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[22px] not-italic text-[#64748b] text-[14px] top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Oct 24, 2026
      </p>
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1eb952f0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2e05ba00} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.66 6H5.33" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.66 8.67H5.33" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.66 11.33H5.33" id="Vector_5" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[20px] left-[124.69px] top-0 w-[30.66px]" data-name="Container">
      <Svg5 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[22px] not-italic text-[#64748b] text-[14px] top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        3
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[20px] left-0 top-[16px] w-[155.34px]" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute border-[#f1f5f9] border-solid border-t h-[37px] left-0 top-[60px] w-[1117px]" data-name="Container">
      <Container17 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[1039.5px] not-italic text-[#0f172a] text-[14px] top-[16px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        ₦1,250,000
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[97px] left-[24px] top-[88px] w-[1117px]" data-name="Container">
      <Container14 />
      <Container16 />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.02),0px_1px_1.5px_rgba(0,0,0,0.05)] h-[211px] left-0 rounded-[16px] top-0 w-[1167px]" data-name="Background">
      <Container11 />
      <Container13 />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[211px] left-0 top-0 w-[1167px]" data-name="Link">
      <Background3 />
    </div>
  );
}

function Container21() {
  return (
    <div className="[word-break:break-word] absolute h-[48px] left-0 top-0 w-[113.78px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Archivo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#0f172a] text-[18px] top-0 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        Brand Identity
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[14px] top-[28px]" style={{ fontFeatureSettings: '"dlig"' }}>
        StartupX
      </p>
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-[rgba(0,20,141,0.1)] h-[20px] left-[1034.36px] rounded-[9999px] top-0 w-[82.64px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#00148d] text-[12px] top-[2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Completed
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[24px] w-[1117px]" data-name="Container">
      <Container21 />
      <Background8 />
    </div>
  );
}

function Container24() {
  return (
    <div className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-0 not-italic text-[#334155] text-[14px] top-0 w-[1117px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        Progress
      </p>
      <p className="absolute left-[1079.2px] top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        100%
      </p>
    </div>
  );
}

function Background10() {
  return <div className="absolute bg-[#00148d] h-[8px] left-0 rounded-[9999px] top-0 w-[1117px]" data-name="Background" />;
}

function Background9() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[8px] left-0 rounded-[9999px] top-[28px] w-[1117px]" data-name="Background">
      <Background10 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[1117px]" data-name="Container">
      <Container24 />
      <Background9 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M5.33 1.33V4" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.67 1.33V4" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pa7e2700} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 6.67H14" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[107.84px]" data-name="Container">
      <Svg6 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[22px] not-italic text-[#64748b] text-[14px] top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Sep 15, 2026
      </p>
    </div>
  );
}

function Svg7() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1c801980} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2ba66000} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.67 6H5.34" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.67 8.67H5.34" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.67 11.33H5.34" id="Vector_5" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[20px] left-[123.84px] top-0 w-[30.55px]" data-name="Container">
      <Svg7 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[22px] not-italic text-[#64748b] text-[14px] top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        2
      </p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[20px] left-0 top-[16px] w-[154.39px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute border-[#f1f5f9] border-solid border-t h-[37px] left-0 top-[60px] w-[1117px]" data-name="Container">
      <Container26 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[1049.38px] not-italic text-[#0f172a] text-[14px] top-[16px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        ₦850,000
      </p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[97px] left-[24px] top-[88px] w-[1117px]" data-name="Container">
      <Container23 />
      <Container25 />
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.02),0px_1px_1.5px_rgba(0,0,0,0.05)] h-[211px] left-0 rounded-[16px] top-0 w-[1167px]" data-name="Background">
      <Container20 />
      <Container22 />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[211px] left-0 top-[227px] w-[1167px]" data-name="Link">
      <Background7 />
    </div>
  );
}

function Container30() {
  return (
    <div className="[word-break:break-word] absolute h-[48px] left-0 top-0 w-[133.92px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Archivo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#0f172a] text-[18px] top-0 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        Mobile App MVP
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[14px] top-[28px]" style={{ fontFeatureSettings: '"dlig"' }}>
        TechFlow
      </p>
    </div>
  );
}

function Background12() {
  return (
    <div className="absolute bg-[rgba(141,0,0,0.1)] h-[20px] left-[1057.5px] rounded-[9999px] top-0 w-[59.5px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#8d0000] text-[12px] top-[2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        At Risk
      </p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[24px] w-[1117px]" data-name="Container">
      <Container30 />
      <Background12 />
    </div>
  );
}

function Container33() {
  return (
    <div className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-0 not-italic text-[#334155] text-[14px] top-0 w-[1117px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        Progress
      </p>
      <p className="absolute left-[1085.27px] top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        30%
      </p>
    </div>
  );
}

function Background14() {
  return <div className="absolute bg-[#8d0000] h-[8px] left-0 rounded-[9999px] top-0 w-[335.09px]" data-name="Background" />;
}

function Background13() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[8px] left-0 rounded-[9999px] top-[28px] w-[1117px]" data-name="Background">
      <Background14 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[1117px]" data-name="Container">
      <Container33 />
      <Background13 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M5.33 1.33V4" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.67 1.33V4" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pa7e2700} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 6.67H14" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[109.56px]" data-name="Container">
      <Svg8 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[22px] not-italic text-[#64748b] text-[14px] top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Nov 01, 2026
      </p>
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1c801980} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2ba66000} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.67 6H5.34" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.67 8.67H5.34" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.67 11.33H5.34" id="Vector_5" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[20px] left-[125.56px] top-0 w-[27.7px]" data-name="Container">
      <Svg9 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[22px] not-italic text-[#64748b] text-[14px] top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        1
      </p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[20px] left-0 top-[16px] w-[153.27px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute border-[#f1f5f9] border-solid border-t h-[37px] left-0 top-[60px] w-[1117px]" data-name="Container">
      <Container35 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[1035.53px] not-italic text-[#0f172a] text-[14px] top-[16px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        ₦2,400,000
      </p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[97px] left-[24px] top-[88px] w-[1117px]" data-name="Container">
      <Container32 />
      <Container34 />
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.02),0px_1px_1.5px_rgba(0,0,0,0.05)] h-[211px] left-0 rounded-[16px] top-0 w-[1167px]" data-name="Background">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[211px] left-0 top-[454px] w-[1167px]" data-name="Link">
      <Background11 />
    </div>
  );
}

function Container39() {
  return (
    <div className="[word-break:break-word] absolute h-[48px] left-0 top-0 w-[151.09px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Archivo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#0f172a] text-[18px] top-0 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        Marketing Website
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[14px] top-[28px]" style={{ fontFeatureSettings: '"dlig"' }}>
        GrowthCo
      </p>
    </div>
  );
}

function Background16() {
  return (
    <div className="absolute bg-[rgba(0,141,110,0.1)] h-[20px] left-[1060.83px] rounded-[9999px] top-0 w-[56.17px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#008d6e] text-[12px] top-[2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Active
      </p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[24px] w-[1117px]" data-name="Container">
      <Container39 />
      <Background16 />
    </div>
  );
}

function Container42() {
  return (
    <div className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-0 not-italic text-[#334155] text-[14px] top-0 w-[1117px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        Progress
      </p>
      <p className="absolute left-[1088.83px] top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        15%
      </p>
    </div>
  );
}

function Background18() {
  return <div className="absolute bg-[#008d6e] h-[8px] left-0 rounded-[9999px] top-0 w-[167.55px]" data-name="Background" />;
}

function Background17() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[8px] left-0 rounded-[9999px] top-[28px] w-[1117px]" data-name="Background">
      <Background18 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[1117px]" data-name="Container">
      <Container42 />
      <Background17 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M5.33 1.33V4" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.67 1.33V4" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pa7e2700} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 6.67H14" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[108.94px]" data-name="Container">
      <Svg10 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[22px] not-italic text-[#64748b] text-[14px] top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Dec 10, 2026
      </p>
    </div>
  );
}

function Svg11() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1eb952f0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2e05ba00} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.66 6H5.33" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.66 8.67H5.33" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.66 11.33H5.33" id="Vector_5" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[20px] left-[124.94px] top-0 w-[30.84px]" data-name="Container">
      <Svg11 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[22px] not-italic text-[#64748b] text-[14px] top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        0
      </p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[20px] left-0 top-[16px] w-[155.78px]" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute border-[#f1f5f9] border-solid border-t h-[37px] left-0 top-[60px] w-[1117px]" data-name="Container">
      <Container44 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[1048.77px] not-italic text-[#0f172a] text-[14px] top-[16px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        ₦600,000
      </p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[97px] left-[24px] top-[88px] w-[1117px]" data-name="Container">
      <Container41 />
      <Container43 />
    </div>
  );
}

function Background15() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.02),0px_1px_1.5px_rgba(0,0,0,0.05)] h-[211px] left-0 rounded-[16px] top-0 w-[1167px]" data-name="Background">
      <Container38 />
      <Container40 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[211px] left-0 top-[681px] w-[1167px]" data-name="Link">
      <Background15 />
    </div>
  );
}

function Container48() {
  return (
    <div className="[word-break:break-word] absolute h-[48px] left-0 top-0 w-[147.33px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Archivo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#0f172a] text-[18px] top-0 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>{`SEO Audit & Fixes`}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[14px] top-[28px]" style={{ fontFeatureSettings: '"dlig"' }}>
        LocalBiz
      </p>
    </div>
  );
}

function Background20() {
  return (
    <div className="absolute bg-[rgba(0,20,141,0.1)] h-[20px] left-[1034.36px] rounded-[9999px] top-0 w-[82.64px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#00148d] text-[12px] top-[2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Completed
      </p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[24px] w-[1117px]" data-name="Container">
      <Container48 />
      <Background20 />
    </div>
  );
}

function Container51() {
  return (
    <div className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-0 not-italic text-[#334155] text-[14px] top-0 w-[1117px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        Progress
      </p>
      <p className="absolute left-[1079.2px] top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        100%
      </p>
    </div>
  );
}

function Background22() {
  return <div className="absolute bg-[#00148d] h-[8px] left-0 rounded-[9999px] top-0 w-[1117px]" data-name="Background" />;
}

function Background21() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[8px] left-0 rounded-[9999px] top-[28px] w-[1117px]" data-name="Background">
      <Background22 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[1117px]" data-name="Container">
      <Container51 />
      <Background21 />
    </div>
  );
}

function Svg12() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M5.33 1.33V4" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.67 1.33V4" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pa7e2700} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 6.67H14" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[112.16px]" data-name="Container">
      <Svg12 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[22px] not-italic text-[#64748b] text-[14px] top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Aug 30, 2026
      </p>
    </div>
  );
}

function Svg13() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1eb952f0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2e05ba00} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.66 6H5.33" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.66 8.67H5.33" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.66 11.33H5.33" id="Vector_5" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[20px] left-[128.16px] top-0 w-[27.7px]" data-name="Container">
      <Svg13 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[22px] not-italic text-[#64748b] text-[14px] top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        1
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[20px] left-0 top-[16px] w-[155.86px]" data-name="Container">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute border-[#f1f5f9] border-solid border-t h-[37px] left-0 top-[60px] w-[1117px]" data-name="Container">
      <Container53 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[1049.41px] not-italic text-[#0f172a] text-[14px] top-[16px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        ₦350,000
      </p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[97px] left-[24px] top-[88px] w-[1117px]" data-name="Container">
      <Container50 />
      <Container52 />
    </div>
  );
}

function Background19() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.02),0px_1px_1.5px_rgba(0,0,0,0.05)] h-[211px] left-0 rounded-[16px] top-0 w-[1167px]" data-name="Background">
      <Container47 />
      <Container49 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[211px] left-0 top-[908px] w-[1167px]" data-name="Link">
      <Background19 />
    </div>
  );
}

function Container57() {
  return (
    <div className="[word-break:break-word] absolute h-[48px] left-0 top-0 w-[137.36px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Archivo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#0f172a] text-[18px] top-0 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        Dashboard UI Kit
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[14px] top-[28px]" style={{ fontFeatureSettings: '"dlig"' }}>
        Internal
      </p>
    </div>
  );
}

function Background24() {
  return (
    <div className="absolute bg-[rgba(0,141,110,0.1)] h-[20px] left-[1060.83px] rounded-[9999px] top-0 w-[56.17px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#008d6e] text-[12px] top-[2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Active
      </p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[24px] w-[1117px]" data-name="Container">
      <Container57 />
      <Background24 />
    </div>
  );
}

function Container60() {
  return (
    <div className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-0 not-italic text-[#334155] text-[14px] top-0 w-[1117px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        Progress
      </p>
      <p className="absolute left-[1085.23px] top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        80%
      </p>
    </div>
  );
}

function Background26() {
  return <div className="absolute bg-[#008d6e] h-[8px] left-0 rounded-[9999px] top-0 w-[893.59px]" data-name="Background" />;
}

function Background25() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[8px] left-0 rounded-[9999px] top-[28px] w-[1117px]" data-name="Background">
      <Background26 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[1117px]" data-name="Container">
      <Container60 />
      <Background25 />
    </div>
  );
}

function Svg14() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M5.33 1.33V4" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.67 1.33V4" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pa7e2700} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 6.67H14" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[108.91px]" data-name="Container">
      <Svg14 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[22px] not-italic text-[#64748b] text-[14px] top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Oct 30, 2026
      </p>
    </div>
  );
}

function Svg15() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1eb952f0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2e05ba00} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.66 6H5.33" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.66 8.67H5.33" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.66 11.33H5.33" id="Vector_5" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[20px] left-[124.91px] top-0 w-[30.84px]" data-name="Container">
      <Svg15 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[22px] not-italic text-[#64748b] text-[14px] top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        0
      </p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[20px] left-0 top-[16px] w-[155.75px]" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute border-[#f1f5f9] border-solid border-t h-[37px] left-0 top-[60px] w-[1117px]" data-name="Container">
      <Container62 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[1066.41px] not-italic text-[#0f172a] text-[14px] top-[16px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Internal
      </p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[97px] left-[24px] top-[88px] w-[1117px]" data-name="Container">
      <Container59 />
      <Container61 />
    </div>
  );
}

function Background23() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.02),0px_1px_1.5px_rgba(0,0,0,0.05)] h-[211px] left-0 rounded-[16px] top-0 w-[1167px]" data-name="Background">
      <Container56 />
      <Container58 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[211px] left-0 top-[1135px] w-[1167px]" data-name="Link">
      <Background23 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[1346px] left-[32px] top-[204px] w-[1167px]" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[1582px] left-0 top-0 w-[1231px]" data-name="Container">
      <Container3 />
      <Container5 />
      <Container10 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[1582px] left-0 overflow-clip top-[64px] w-[1231px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Svg16() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M14 14L11.11 11.11" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p24977900} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start overflow-clip relative shrink-0 w-[400px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Search projects, invoices...
      </p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex h-[44px] items-start left-0 overflow-clip pl-[36px] pr-[12px] py-[8px] rounded-[12px] top-0 w-[448px]" data-name="Input">
      <Container68 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[448px]" data-name="Container">
      <Input1 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[448px]" data-name="Container">
      <Svg16 />
      <Container67 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[44px] left-[32px] top-[9.5px] w-[1015.25px]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Svg17() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1aaa8200} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c988a00} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background28() {
  return <div className="absolute bg-[#8d0000] left-[22px] rounded-[9999px] shadow-[0px_0px_0px_0px_white,0px_0px_0px_0px_white] size-[8px] top-[6px]" data-name="Background" />;
}

function Button7() {
  return (
    <div className="absolute left-0 size-[36px] top-0" data-name="Button">
      <Svg17 />
      <Background28 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[36px] left-[1047.25px] top-[13.5px] w-[151.75px]" data-name="Container">
      <Button7 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[52px] not-italic text-[#64748b] text-[12px] top-[10px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        View Empty State
      </p>
    </div>
  );
}

function Background27() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-b border-solid h-[64px] left-0 top-0 w-[1231px]" data-name="Background">
      <Container65 />
      <Container69 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[1646px] left-[256px] top-0 w-[1231px]" data-name="Container">
      <Container1 />
      <Background27 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute border-[#e2e8f0] border-b border-solid h-[64px] left-0 top-0 w-[255px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Cooper_Black:Regular',sans-serif] leading-[32px] left-[24px] not-italic text-[#8d0000] text-[24px] top-[15.5px] tracking-[-0.6px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        OruHQ
      </p>
    </div>
  );
}

function Svg18() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[10px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1e3f6600} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p9952900} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1221db00} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3791e100} id="Vector_4" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[40px] left-[16px] rounded-[8px] top-[24px] w-[223px]" data-name="Link">
      <Svg18 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#475569] text-[14px] top-[11px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Dashboard
      </p>
    </div>
  );
}

function Svg19() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[10px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p29f75080} id="Vector" stroke="var(--stroke-0, #8D0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.67 8.33V11.66" id="Vector_2" stroke="var(--stroke-0, #8D0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 8.33V10" id="Vector_3" stroke="var(--stroke-0, #8D0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.33 8.33V13.33" id="Vector_4" stroke="var(--stroke-0, #8D0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute bg-[rgba(141,0,0,0.1)] h-[40px] left-[16px] rounded-[8px] top-[68px] w-[223px]" data-name="Link">
      <Svg19 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#8d0000] text-[14px] top-[11px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Projects
      </p>
    </div>
  );
}

function Svg20() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[10px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1d23be00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p335f9b80} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.34 7.5H6.67" id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.34 10.83H6.67" id="Vector_4" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.34 14.17H6.67" id="Vector_5" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[40px] left-[16px] rounded-[8px] top-[112px] w-[223px]" data-name="Link">
      <Svg20 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#475569] text-[14px] top-[11px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Invoices
      </p>
    </div>
  );
}

function Svg21() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[10px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2b180a80} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M1.67 8.33H18.34" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute h-[40px] left-[16px] rounded-[8px] top-[156px] w-[223px]" data-name="Link">
      <Svg21 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#475569] text-[14px] top-[11px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Payments
      </p>
    </div>
  );
}

function Svg22() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[10px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1ae33800} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.paf42600} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute h-[40px] left-[16px] rounded-[8px] top-[200px] w-[223px]" data-name="Link">
      <Svg22 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#475569] text-[14px] top-[11px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Settings
      </p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[1513px] left-0 overflow-clip top-[64px] w-[255px]" data-name="Container">
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
    </div>
  );
}

function Background30() {
  return (
    <div className="absolute bg-[rgba(141,0,0,0.2)] left-0 rounded-[9999px] size-[32px] top-[2px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[6.84px] not-italic text-[#8d0000] text-[14px] top-[7px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        JD
      </p>
    </div>
  );
}

function Container74() {
  return (
    <div className="[word-break:break-word] absolute h-[36px] left-[44px] not-italic top-0 w-[63.88px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#0f172a] text-[14px] top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        John Doe
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#64748b] text-[12px] top-[20px]" style={{ fontFeatureSettings: '"dlig"' }}>
        Freelancer
      </p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[36px] left-[16px] top-[16px] w-[223px]" data-name="Container">
      <Background30 />
      <Container74 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute border-[#e2e8f0] border-solid border-t h-[69px] left-0 top-[1577px] w-[255px]" data-name="Container">
      <Container73 />
    </div>
  );
}

function Background29() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-r border-solid h-[1646px] left-0 top-0 w-[256px]" data-name="Background">
      <Container70 />
      <Container71 />
      <Container72 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#f7f7f5] h-[1646px] left-0 top-0 w-[1487px]" data-name="Background">
      <Container />
      <Background29 />
    </div>
  );
}

export default function OruHqFreelancerWorkspace() {
  return (
    <div className="bg-white relative size-full" data-name="OruHQ Freelancer Workspace">
      <Background />
    </div>
  );
}
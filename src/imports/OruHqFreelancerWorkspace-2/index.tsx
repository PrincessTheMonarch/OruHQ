import svgPaths from "./svg-x17jsmkalo";

function Container4() {
  return (
    <div className="[word-break:break-word] absolute h-[64px] left-0 top-0 w-[335.27px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Archivo:Black',sans-serif] font-black leading-[36px] left-0 text-[#0f172a] text-[30px] top-0 tracking-[-0.75px]" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        Payments
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[16px] top-[40px]" style={{ fontFeatureSettings: '"dlig"' }}>
        Track and manage your incoming payments.
      </p>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute left-[24px] size-[16px] top-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M3.34 8H12.67" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 3.33V12.66" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#8d0000] h-[44px] left-[969.59px] rounded-[12px] top-[10px] w-[197.41px]" data-name="Button">
      <Svg />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[110.71px] not-italic text-[16px] text-center text-white top-[12px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Record Payment
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
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3ce594f0} id="Vector" stroke="var(--stroke-0, #0D9488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pdb9c600} id="Vector_2" stroke="var(--stroke-0, #0D9488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#f0fdfa] left-0 rounded-[9999px] size-[32px] top-0" data-name="Background">
      <Svg1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[32px] left-[20px] top-[20px] w-[336.33px]" data-name="Container">
      <Background2 />
      <p className="[word-break:break-word] absolute font-['Archivo:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[#64748b] text-[14px] top-[6px] tracking-[-0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        Total Received
      </p>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.02),0px_1px_1.5px_rgba(0,0,0,0.05)] h-[114px] left-0 rounded-[16px] top-0 w-[378.33px]" data-name="Background">
      <Container6 />
      <p className="[word-break:break-word] absolute font-['Archivo:Bold',sans-serif] font-bold leading-[32px] left-[20px] text-[#0f172a] text-[24px] top-[63px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        ₦1,320,000
      </p>
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1422f200} id="Vector" stroke="var(--stroke-0, #8D6E00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M1.33 6.67H14.66" id="Vector_2" stroke="var(--stroke-0, #8D6E00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[rgba(141,110,0,0.1)] left-0 rounded-[9999px] size-[32px] top-0" data-name="Background">
      <Svg2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[32px] left-[20px] top-[20px] w-[336.33px]" data-name="Container">
      <Background4 />
      <p className="[word-break:break-word] absolute font-['Archivo:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[#64748b] text-[14px] top-[6px] tracking-[-0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        Pending Amount
      </p>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.02),0px_1px_1.5px_rgba(0,0,0,0.05)] h-[114px] left-[394.33px] rounded-[16px] top-0 w-[378.33px]" data-name="Background">
      <Container7 />
      <p className="[word-break:break-word] absolute font-['Archivo:Bold',sans-serif] font-bold leading-[32px] left-[20px] text-[#0f172a] text-[24px] top-[63px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        ₦850,000
      </p>
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1f768180} id="Vector" stroke="var(--stroke-0, #00148D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 14.67V12H10V14.67" id="Vector_2" stroke="var(--stroke-0, #00148D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5.33 4H5.34" id="Vector_3" stroke="var(--stroke-0, #00148D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.66 4H10.67" id="Vector_4" stroke="var(--stroke-0, #00148D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 4H8.01" id="Vector_5" stroke="var(--stroke-0, #00148D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 6.67H8.01" id="Vector_6" stroke="var(--stroke-0, #00148D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 9.33H8.01" id="Vector_7" stroke="var(--stroke-0, #00148D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.66 6.67H10.67" id="Vector_8" stroke="var(--stroke-0, #00148D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.66 9.33H10.67" id="Vector_9" stroke="var(--stroke-0, #00148D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5.33 6.67H5.34" id="Vector_10" stroke="var(--stroke-0, #00148D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5.33 9.33H5.34" id="Vector_11" stroke="var(--stroke-0, #00148D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[rgba(0,20,141,0.1)] left-0 rounded-[9999px] size-[32px] top-0" data-name="Background">
      <Svg3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[32px] left-[20px] top-[20px] w-[336.34px]" data-name="Container">
      <Background6 />
      <p className="[word-break:break-word] absolute font-['Archivo:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[#64748b] text-[14px] top-[6px] tracking-[-0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        This Month
      </p>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.02),0px_1px_1.5px_rgba(0,0,0,0.05)] h-[114px] left-[788.66px] rounded-[16px] top-0 w-[378.34px]" data-name="Background">
      <Container8 />
      <p className="[word-break:break-word] absolute font-['Archivo:Bold',sans-serif] font-bold leading-[32px] left-[20px] text-[#0f172a] text-[24px] top-[63px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        ₦720,000
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[114px] left-[32px] top-[128px] w-[1167px]" data-name="Container">
      <Background1 />
      <Background3 />
      <Background5 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#0f172a] h-[44px] left-0 rounded-[8px] top-0 w-[48.98px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24.49px] not-italic text-[14px] text-center text-white top-[13px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        All
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[44px] left-[56.98px] rounded-[8px] top-0 w-[88.83px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[43.42px] not-italic text-[#475569] text-[14px] text-center top-[12px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Pending
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[44px] left-[153.81px] rounded-[8px] top-0 w-[104.94px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[51.36px] not-italic text-[#475569] text-[14px] text-center top-[12px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Confirmed
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[44px] left-[266.75px] rounded-[8px] top-0 w-[107.08px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[52.54px] not-italic text-[#475569] text-[14px] text-center top-[12px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Completed
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip top-0 w-[373.83px]" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Svg4() {
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

function Container13() {
  return (
    <div className="h-[28px] relative shrink-0 w-[208px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
          Search payments...
        </p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[44px] left-0 rounded-[12px] top-0 w-[256px]" data-name="Input">
      <div className="content-stretch flex items-start overflow-clip pl-[37px] pr-[13px] py-[9px] relative rounded-[inherit] size-full">
        <Container13 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[256px]" data-name="Container">
      <Input />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[44px] left-[911px] top-0 w-[256px]" data-name="Container">
      <Svg4 />
      <Container12 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[44px] left-[32px] top-[274px] w-[1167px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[52.5px] left-0 top-0 w-[172.75px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#64748b] text-[14px] top-[17px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Payment Ref
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[52.5px] left-[172.75px] top-0 w-[182.31px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#64748b] text-[14px] top-[17px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Client
      </p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[52.5px] left-[355.06px] top-0 w-[136.19px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#64748b] text-[14px] top-[17px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Invoice
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[52.5px] left-[491.25px] top-0 w-[151.31px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#64748b] text-[14px] top-[17px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Amount
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[52.5px] left-[642.56px] top-0 w-[182.45px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#64748b] text-[14px] top-[17px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Method
      </p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[52.5px] left-[825.02px] top-0 w-[169.88px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#64748b] text-[14px] top-[17px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Date
      </p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[52.5px] left-[994.89px] top-0 w-[170.11px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#64748b] text-[14px] top-[17px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Status
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[52.5px] left-0 top-0 w-[1165px]" data-name="Container">
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-b border-solid h-[52.5px] left-0 top-0 w-[1165px]" data-name="Background">
      <Container16 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[54px] left-0 top-0 w-[172.75px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#0f172a] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        PAY-001
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[54px] left-[172.75px] top-0 w-[182.31px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        TechCorp
      </p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[54px] left-[355.06px] top-0 w-[136.19px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        INV-042
      </p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[54px] left-[491.25px] top-0 w-[151.31px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#0f172a] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        ₦
      </p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[54px] left-[642.56px] top-0 w-[182.45px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Bank Transfer
      </p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[54px] left-[825.02px] top-0 w-[169.88px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        2026-06-09
      </p>
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-[rgba(0,141,110,0.1)] h-[20px] left-[24px] rounded-[9999px] top-[17.5px] w-[82.64px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#008d6e] text-[12px] top-[2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Completed
      </p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[54px] left-[994.89px] top-0 w-[170.11px]" data-name="Container">
      <Background9 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[54px] left-0 top-0 w-[1165px]" data-name="Container">
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[54px] left-0 top-[-1px] w-[172.75px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#0f172a] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        PAY-002
      </p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[54px] left-[172.75px] top-[-1px] w-[182.31px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Acme Inc
      </p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[54px] left-[355.06px] top-[-1px] w-[136.19px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        INV-043
      </p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[54px] left-[491.25px] top-[-1px] w-[151.31px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#0f172a] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        ₦
      </p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[54px] left-[642.56px] top-[-1px] w-[182.45px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Card
      </p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[54px] left-[825.02px] top-[-1px] w-[169.88px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        2026-06-08
      </p>
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute bg-[rgba(0,141,110,0.1)] h-[20px] left-[24px] rounded-[9999px] top-[17.5px] w-[82.64px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#008d6e] text-[12px] top-[2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Completed
      </p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[54px] left-[994.89px] top-[-1px] w-[170.11px]" data-name="Container">
      <Background10 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute border-[#e2e8f0] border-solid border-t h-[54px] left-0 top-[54px] w-[1165px]" data-name="Container">
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[54px] left-0 top-[-1px] w-[172.75px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#0f172a] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        PAY-003
      </p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[54px] left-[172.75px] top-[-1px] w-[182.31px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        StartupX
      </p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[54px] left-[355.06px] top-[-1px] w-[136.19px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        INV-044
      </p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[54px] left-[491.25px] top-[-1px] w-[151.31px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#0f172a] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        ₦
      </p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[54px] left-[642.56px] top-[-1px] w-[182.45px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Bank Transfer
      </p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[54px] left-[825.02px] top-[-1px] w-[169.88px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        2026-06-10
      </p>
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-[rgba(141,110,0,0.1)] h-[20px] left-[24px] rounded-[9999px] top-[17.5px] w-[67px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#8d6e00] text-[12px] top-[2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Pending
      </p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[54px] left-[994.89px] top-[-1px] w-[170.11px]" data-name="Container">
      <Background11 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute border-[#e2e8f0] border-solid border-t h-[54px] left-0 top-[108px] w-[1165px]" data-name="Container">
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[54px] left-0 top-[-1px] w-[172.75px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#0f172a] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        PAY-004
      </p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[54px] left-[172.75px] top-[-1px] w-[182.31px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Global Media
      </p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[54px] left-[355.06px] top-[-1px] w-[136.19px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        INV-041
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[54px] left-[491.25px] top-[-1px] w-[151.31px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#0f172a] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        ₦
      </p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[54px] left-[642.56px] top-[-1px] w-[182.45px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Cash
      </p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[54px] left-[825.02px] top-[-1px] w-[169.88px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        2026-06-05
      </p>
    </div>
  );
}

function Background12() {
  return (
    <div className="absolute bg-[rgba(0,20,141,0.1)] h-[20px] left-[24px] rounded-[9999px] top-[17.5px] w-[80.8px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#00148d] text-[12px] top-[2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Confirmed
      </p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[54px] left-[994.89px] top-[-1px] w-[170.11px]" data-name="Container">
      <Background12 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute border-[#e2e8f0] border-solid border-t h-[54px] left-0 top-[162px] w-[1165px]" data-name="Container">
      <Container50 />
      <Container51 />
      <Container52 />
      <Container53 />
      <Container54 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[54px] left-0 top-[-1px] w-[172.75px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#0f172a] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        PAY-005
      </p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[54px] left-[172.75px] top-[-1px] w-[182.31px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Design Studio
      </p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[54px] left-[355.06px] top-[-1px] w-[136.19px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        INV-040
      </p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[54px] left-[491.25px] top-[-1px] w-[151.31px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#0f172a] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        ₦
      </p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[54px] left-[642.56px] top-[-1px] w-[182.45px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Card
      </p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[54px] left-[825.02px] top-[-1px] w-[169.88px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        2026-06-01
      </p>
    </div>
  );
}

function Background13() {
  return (
    <div className="absolute bg-[rgba(0,141,110,0.1)] h-[20px] left-[24px] rounded-[9999px] top-[17.5px] w-[82.64px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#008d6e] text-[12px] top-[2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Completed
      </p>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[54px] left-[994.89px] top-[-1px] w-[170.11px]" data-name="Container">
      <Background13 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute border-[#e2e8f0] border-solid border-t h-[54px] left-0 top-[216px] w-[1165px]" data-name="Container">
      <Container58 />
      <Container59 />
      <Container60 />
      <Container61 />
      <Container62 />
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[53.5px] left-0 top-[-1px] w-[172.75px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#0f172a] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        PAY-006
      </p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[53.5px] left-[172.75px] top-[-1px] w-[182.31px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        TechCorp
      </p>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[53.5px] left-[355.06px] top-[-1px] w-[136.19px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        INV-039
      </p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[53.5px] left-[491.25px] top-[-1px] w-[151.31px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#0f172a] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        ₦
      </p>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[53.5px] left-[642.56px] top-[-1px] w-[182.45px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Bank Transfer
      </p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[53.5px] left-[825.02px] top-[-1px] w-[169.88px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#475569] text-[14px] top-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        2026-05-28
      </p>
    </div>
  );
}

function Background14() {
  return (
    <div className="absolute bg-[rgba(0,141,110,0.1)] h-[20px] left-[24px] rounded-[9999px] top-[17.5px] w-[82.64px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#008d6e] text-[12px] top-[2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Completed
      </p>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[53.5px] left-[994.89px] top-[-1px] w-[170.11px]" data-name="Container">
      <Background14 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute border-[#e2e8f0] border-solid border-t h-[53.5px] left-0 top-[270px] w-[1165px]" data-name="Container">
      <Container66 />
      <Container67 />
      <Container68 />
      <Container69 />
      <Container70 />
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[323.5px] left-0 top-[52.5px] w-[1165px]" data-name="Container">
      <Container25 />
      <Container33 />
      <Container41 />
      <Container49 />
      <Container57 />
      <Container65 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[376px] left-0 top-0 w-[1165px]" data-name="Container">
      <Background8 />
      <Container24 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[376px] left-0 overflow-clip top-0 w-[1165px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[378px] left-[32px] overflow-clip rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.02),0px_1px_3px_0px_rgba(0,0,0,0.05)] top-[350px] w-[1167px]" data-name="Background">
      <Container14 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[760px] left-0 top-0 w-[1231px]" data-name="Container">
      <Container3 />
      <Container5 />
      <Container9 />
      <Background7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[760px] left-0 overflow-clip top-[64px] w-[1231px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Svg5() {
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

function Container76() {
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
      <Container76 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[448px]" data-name="Container">
      <Input1 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[448px]" data-name="Container">
      <Svg5 />
      <Container75 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[44px] left-[32px] top-[9.5px] w-[1015.25px]" data-name="Container">
      <Container74 />
    </div>
  );
}

function Svg6() {
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

function Background16() {
  return <div className="absolute bg-[#8d0000] left-[22px] rounded-[9999px] shadow-[0px_0px_0px_0px_white,0px_0px_0px_0px_white] size-[8px] top-[6px]" data-name="Background" />;
}

function Button5() {
  return (
    <div className="absolute left-0 size-[36px] top-0" data-name="Button">
      <Svg6 />
      <Background16 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[36px] left-[1047.25px] top-[13.5px] w-[151.75px]" data-name="Container">
      <Button5 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[52px] not-italic text-[#64748b] text-[12px] top-[10px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        View Empty State
      </p>
    </div>
  );
}

function Background15() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-b border-solid h-[64px] left-0 top-0 w-[1231px]" data-name="Background">
      <Container73 />
      <Container77 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[824px] left-[256px] top-0 w-[1231px]" data-name="Container">
      <Container1 />
      <Background15 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute border-[#e2e8f0] border-b border-solid h-[64px] left-0 top-0 w-[255px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Cooper_Black:Regular',sans-serif] leading-[32px] left-[24px] not-italic text-[#8d0000] text-[24px] top-[15.5px] tracking-[-0.6px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        OruHQ
      </p>
    </div>
  );
}

function Svg7() {
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

function Link() {
  return (
    <div className="absolute h-[40px] left-[16px] rounded-[8px] top-[24px] w-[223px]" data-name="Link">
      <Svg7 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#475569] text-[14px] top-[11px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Dashboard
      </p>
    </div>
  );
}

function Svg8() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[10px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p29f75080} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.67 8.33V11.66" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 8.33V10" id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.33 8.33V13.33" id="Vector_4" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[40px] left-[16px] rounded-[8px] top-[68px] w-[223px]" data-name="Link">
      <Svg8 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#475569] text-[14px] top-[11px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Projects
      </p>
    </div>
  );
}

function Svg9() {
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

function Link2() {
  return (
    <div className="absolute h-[40px] left-[16px] rounded-[8px] top-[112px] w-[223px]" data-name="Link">
      <Svg9 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#475569] text-[14px] top-[11px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Invoices
      </p>
    </div>
  );
}

function Svg10() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[10px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2b180a80} id="Vector" stroke="var(--stroke-0, #8D0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M1.67 8.33H18.34" id="Vector_2" stroke="var(--stroke-0, #8D0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[rgba(141,0,0,0.1)] h-[40px] left-[16px] rounded-[8px] top-[156px] w-[223px]" data-name="Link">
      <Svg10 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#8d0000] text-[14px] top-[11px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Payments
      </p>
    </div>
  );
}

function Svg11() {
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

function Link4() {
  return (
    <div className="absolute h-[40px] left-[16px] rounded-[8px] top-[200px] w-[223px]" data-name="Link">
      <Svg11 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#475569] text-[14px] top-[11px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Settings
      </p>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[691px] left-0 overflow-clip top-[64px] w-[255px]" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Background18() {
  return (
    <div className="absolute bg-[rgba(141,0,0,0.2)] left-0 rounded-[9999px] size-[32px] top-[2px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[6.84px] not-italic text-[#8d0000] text-[14px] top-[7px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        JD
      </p>
    </div>
  );
}

function Container82() {
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

function Container81() {
  return (
    <div className="absolute h-[36px] left-[16px] top-[16px] w-[223px]" data-name="Container">
      <Background18 />
      <Container82 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute border-[#e2e8f0] border-solid border-t h-[69px] left-0 top-[755px] w-[255px]" data-name="Container">
      <Container81 />
    </div>
  );
}

function Background17() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-r border-solid h-[824px] left-0 top-0 w-[256px]" data-name="Background">
      <Container78 />
      <Container79 />
      <Container80 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#f7f7f5] h-[824px] left-0 top-0 w-[1487px]" data-name="Background">
      <Container />
      <Background17 />
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
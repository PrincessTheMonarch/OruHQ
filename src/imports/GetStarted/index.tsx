function Container2() {
  return (
    <div className="[word-break:break-word] absolute h-[90px] left-0 text-center top-0 w-[446px] whitespace-nowrap" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Archivo:SemiBold',sans-serif] font-semibold leading-[32px] left-[130.64px] text-[#0f172a] text-[24px] top-[24px] tracking-[-0.6px]" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"dlig"' }}>
        Welcome to OruHQ
      </p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[132.44px] not-italic text-[#64748b] text-[14px] top-[62px]" style={{ fontFeatureSettings: '"dlig"' }}>{`Let's get your workspace set up.`}</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[374px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
          Jane Doe
        </p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[44px] left-0 rounded-[12px] top-[30px] w-[398px]" data-name="Input">
      <div className="content-stretch flex items-start overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <Container6 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[74px] left-0 top-0 w-[398px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#334155] text-[14px] top-[4px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Full Name
      </p>
      <Input />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[374px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
          jane@example.com
        </p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-white h-[44px] left-0 rounded-[12px] top-[30px] w-[398px]" data-name="Input">
      <div className="content-stretch flex items-start overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <Container8 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[74px] left-0 top-[94px] w-[398px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#334155] text-[14px] top-[4px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Email Address
      </p>
      <Input1 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#8d0000] h-[56px] left-0 opacity-50 rounded-[12px] top-[188px] w-[398px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[198.99px] not-italic opacity-50 text-[18px] text-center text-white top-[17px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Continue
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[244px] left-[24px] top-0 w-[398px]" data-name="Container">
      <Container5 />
      <Container7 />
      <Button />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[268px] left-0 top-[106px] w-[446px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-white border border-[rgba(229,231,235,0.5)] border-solid drop-shadow-[0px_8px_5px_rgba(226,232,240,0.5),0px_20px_12.5px_rgba(226,232,240,0.5)] h-[376px] left-0 rounded-[16px] top-0 w-[448px]" data-name="Background">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[376px] left-0 top-[80px] w-[448px]" data-name="Container">
      <Background1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[456px] left-[477px] top-[178.5px] w-[448px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Cooper_Black:Regular',sans-serif] leading-[32px] left-[calc(50%-70px)] not-italic text-[#8d0000] text-[40px] top-0 tracking-[-0.6px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        OruHQ
      </p>
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

export default function GetStarted() {
  return (
    <div className="bg-white relative size-full" data-name="Get started">
      <Background />
    </div>
  );
}
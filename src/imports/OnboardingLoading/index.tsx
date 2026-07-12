function Container1() {
  return (
    <div className="absolute h-[32px] left-0 overflow-clip top-[96px] w-[256px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[123.33px] not-italic text-[16px] text-[rgba(255,255,255,0.9)] text-center top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Personalizing your experience...
      </p>
    </div>
  );
}

function Background2() {
  return <div className="absolute bg-white h-[4px] left-0 rounded-[9999px] top-0 w-[149.47px]" data-name="Background" />;
}

function Background1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[4px] left-[32px] overflow-clip rounded-[9999px] top-[160px] w-[192px]" data-name="Background">
      <Background2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[164px] left-[573px] top-[324.5px] w-[256px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Cooper_Black:Regular',sans-serif] leading-[32px] left-[calc(50%-70px)] not-italic text-[#f1f5f9] text-[40px] top-[-13.11px] tracking-[-0.6px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        OruHQ
      </p>
      <Container1 />
      <Background1 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#8d0000] h-[813px] left-0 top-0 w-[1402px]" data-name="Background">
      <Container />
    </div>
  );
}

export default function OnboardingLoading() {
  return (
    <div className="bg-white relative size-full" data-name="Onboarding Loading">
      <Background />
    </div>
  );
}
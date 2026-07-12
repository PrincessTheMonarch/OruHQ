import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { User, Briefcase, Zap, ChevronDown, Mail, ArrowLeft } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { supabase } from "@/lib/supabase"; // ← ADD THIS

type Step = "welcome" | "confirm-email" | "account-type" | "currency" | "loading";

const accountTypes = [
  { id: "freelancer", icon: User, label: "Freelancer", desc: "I work solo with multiple clients." },
  { id: "agency", icon: Briefcase, label: "Small Agency", desc: "I work with a team of 2–10 people." },
  { id: "side-hustler", icon: Zap, label: "Side Hustler", desc: "I freelance part-time alongside a job." },
];

const currencies = [
  { flag: "🇳🇬", country: "Nigeria", code: "NGN", symbol: "₦" },
  { flag: "🇺🇸", country: "United States", code: "USD", symbol: "$" },
  { flag: "🇬🇧", country: "United Kingdom", code: "GBP", symbol: "£" },
  { flag: "🇪🇺", country: "Euro Zone", code: "EUR", symbol: "€" },
  { flag: "🇨🇦", country: "Canada", code: "CAD", symbol: "CA$" },
];

function ProgressDots({ step }: { step: Step }) {
  const steps: Step[] = ["welcome", "account-type", "currency"];
  const idx = steps.indexOf(step);
  return (
    <div className="flex gap-2 items-center mb-8">
      {steps.map((s, i) => (
        <div
          key={s}
          className="h-1.5 rounded-full transition-all duration-300"
          style={{ width: i === idx ? 24 : 8, background: i <= idx ? "#8d0000" : "#e2e8f0" }}
        />
      ))}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-white rounded-2xl w-full max-w-[448px] shadow-[0px_8px_5px_rgba(226,232,240,0.5),0px_20px_12.5px_rgba(226,232,240,0.5)]"
      style={{ border: "1px solid rgba(229,231,235,0.5)" }}
    >
      {children}
    </div>
  );
}

function InputField({ label, type = "text", placeholder, value, onChange }: {
  label: string; type?: string; placeholder: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#334155" }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 rounded-xl outline-none text-[14px] transition-all"
        style={{ fontFamily: "'Inter', sans-serif", border: "1px solid #e5e7eb", color: "#0f172a" }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#8d0000")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
      />
    </div>
  );
}

function PrimaryBtn({ children, onClick, disabled, fullWidth = true }: {
  children: React.ReactNode; onClick?: () => void; disabled?: boolean; fullWidth?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${fullWidth ? "w-full" : ""} py-3.5 rounded-xl text-white text-[16px] transition-opacity flex items-center justify-center`}
      style={{
        background: disabled ? "#e2e8f0" : "#8d0000",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        color: disabled ? "#94a3b8" : "white",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {children}
    </button>
  );
}

// ── Step 1: Welcome ────────────────────────────────────────────────────────────
function WelcomeStep({ onNext }: { onNext: (name: string, email: string) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Card>
      <div className="p-8">
        <div className="mb-6">
          <h1 className="text-[24px] tracking-[-0.6px] mb-1" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, color: "#0f172a" }}>
            Welcome to OruHQ
          </h1>
          <p className="text-[14px]" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>
            Let's get your workspace set up.
          </p>
        </div>
        <ProgressDots step="welcome" />
        <div className="flex flex-col gap-4 mb-6">
          <InputField label="Full Name" placeholder="Jane Doe" value={name} onChange={setName} />
          <InputField label="Email Address" type="email" placeholder="jane@example.com" value={email} onChange={setEmail} />
        </div>
        <PrimaryBtn disabled={!name || !email} onClick={() => onNext(name, email)}>
          Continue
        </PrimaryBtn>
      </div>
    </Card>
  );
}

// ── Step 2: Confirm Email — NOW ACTUALLY SENDS MAGIC LINK ─────────────────────
function ConfirmEmailStep({ email, name, onBack }: {
  email: string; name: string; onBack: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSendLink = async () => {
    setLoading(true);
    setError("");

    // Save name to localStorage so we have it after the email redirect
    localStorage.setItem("oruhq_name", name);
    localStorage.setItem("oruhq_email", email);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: { full_name: name },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSent(true);
      setLoading(false);
    }
  };

  // Sent state — same card design, different content
  if (sent) {
    return (
      <Card>
        <div className="p-8">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="size-16 rounded-full flex items-center justify-center mb-5" style={{ background: "rgba(141,0,0,0.1)" }}>
              <Mail className="size-8" style={{ color: "#8d0000" }} strokeWidth={1.5} />
            </div>
            <h2 className="text-[24px] tracking-[-0.6px] mb-2" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, color: "#0f172a" }}>
              Check your inbox!
            </h2>
            <p className="text-[16px] leading-[1.5]" style={{ fontFamily: "'Inter', sans-serif", color: "#475569" }}>
              We sent a magic link to{" "}
              <span style={{ fontWeight: 500, color: "#0f172a" }}>{email}</span>.
              Click it to continue setup.
            </p>
          </div>
          <button
            onClick={() => setSent(false)}
            className="w-full text-center text-[14px]"
            style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}
          >
            Didn't get it?{" "}
            <span style={{ color: "#8d0000", textDecoration: "underline" }}>Resend</span>
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="p-8">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="size-16 rounded-full flex items-center justify-center mb-5" style={{ background: "rgba(141,0,0,0.1)" }}>
            <Mail className="size-8" style={{ color: "#8d0000" }} strokeWidth={1.5} />
          </div>
          <h2 className="text-[24px] tracking-[-0.6px] mb-2" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, color: "#0f172a" }}>
            Almost done!
          </h2>
          <p className="text-[16px] leading-[1.5]" style={{ fontFamily: "'Inter', sans-serif", color: "#475569" }}>
            We use passwordless authentication. We'll send a secure magic link to sign you in.
          </p>
        </div>
        <div className="rounded-xl px-4 py-4 mb-6 text-center" style={{ background: "#f8fafc", border: "1px solid #e5e7eb", fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#0f172a" }}>
          {email}
        </div>
        {error && (
          <p className="text-center text-[13px] mb-4" style={{ fontFamily: "'Inter', sans-serif", color: "#8d0000" }}>
            {error}
          </p>
        )}
        <div className="flex flex-col gap-2">
          <PrimaryBtn onClick={handleSendLink} disabled={loading}>
            {loading ? "Sending..." : "Send Magic Link"}
          </PrimaryBtn>
          <button
            onClick={onBack}
            className="flex items-center justify-center gap-2 py-3 rounded-xl text-[16px] transition-colors hover:bg-slate-50"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#64748b" }}
          >
            <ArrowLeft className="size-4" />
            Edit Email
          </button>
        </div>
      </div>
    </Card>
  );
}

// ── Step 3: Account Type ───────────────────────────────────────────────────────
function AccountTypeStep({ onNext }: { onNext: (type: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-full max-w-[512px]">
      <div className="mb-8 text-center">
        <h2 className="text-[30px] tracking-[-0.75px] mb-2" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>
          What best describes you?
        </h2>
        <p className="text-[16px]" style={{ fontFamily: "'Inter', sans-serif", color: "#475569" }}>
          This helps us customize your workspace.
        </p>
      </div>
      <ProgressDots step="account-type" />
      <div className="flex flex-col gap-3 mb-6">
        {accountTypes.map(({ id, icon: Icon, label, desc }) => (
          <button
            key={id}
            onClick={() => setSelected(id)}
            className="flex items-center gap-4 p-5 rounded-2xl text-left transition-all"
            style={{ background: "white", border: selected === id ? "2px solid #8d0000" : "2px solid #e5e7eb" }}
          >
            <div className="size-12 rounded-full flex items-center justify-center shrink-0" style={{ background: selected === id ? "rgba(141,0,0,0.1)" : "#f1f5f9" }}>
              <Icon className="size-6" style={{ color: selected === id ? "#8d0000" : "#64748b" }} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[18px] tracking-[-0.45px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>{label}</p>
              <p className="text-[14px]" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>{desc}</p>
            </div>
          </button>
        ))}
      </div>
      <PrimaryBtn disabled={!selected} onClick={() => selected && onNext(selected)}>
        Continue
      </PrimaryBtn>
    </div>
  );
}

// ── Step 4: Currency ───────────────────────────────────────────────────────────
function CurrencyStep({ onNext }: { onNext: (currency: string, symbol: string) => void }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(currencies[0]);

  return (
    <Card>
      <div className="p-8">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="size-16 rounded-full flex items-center justify-center mb-5" style={{ background: "rgba(0,141,110,0.1)" }}>
            <span className="text-[28px]">💱</span>
          </div>
          <h2 className="text-[24px] tracking-[-0.6px] mb-2" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, color: "#0f172a" }}>
            Set your base currency
          </h2>
          <p className="text-[14px] leading-[1.5]" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>
            We've auto-detected your location. This will be used for your dashboard and invoices.
          </p>
        </div>
        <ProgressDots step="currency" />
        <div className="relative mb-2">
          <button
            onClick={() => setOpen((v) => !v)}
            className="w-full flex items-center justify-between px-4 py-4 rounded-xl"
            style={{ border: "2px solid #e5e7eb", background: "white" }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{selected.flag}</span>
              <div className="text-left">
                <p className="text-[16px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#0f172a" }}>{selected.country}</p>
                <p className="text-[14px]" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>{selected.code} ({selected.symbol})</p>
              </div>
            </div>
            <ChevronDown className="size-5 transition-transform" style={{ color: "#94a3b8", transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
          </button>
          {open && (
            <div className="absolute top-full left-0 right-0 mt-1 rounded-xl shadow-lg overflow-hidden z-10" style={{ border: "1px solid #e2e8f0", background: "white" }}>
              {currencies.map((c) => (
                <button key={c.code} onClick={() => { setSelected(c); setOpen(false); }} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors">
                  <span className="text-xl">{c.flag}</span>
                  <span className="text-[14px]" style={{ fontFamily: "'Inter', sans-serif", color: "#0f172a" }}>{c.country} — {c.code}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <p className="text-center text-[12px] mb-6" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>
          You can always change this later in Settings.
        </p>
        <PrimaryBtn onClick={() => onNext(selected.code, selected.symbol)}>Finish Setup</PrimaryBtn>
      </div>
    </Card>
  );
}

// ── Step 5: Loading ────────────────────────────────────────────────────────────
function LoadingStep() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let msg = 0;
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + 8;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate("/dashboard"), 300);
        }
        return Math.min(next, 100);
      });
      msg = Math.min(msg + 1, 2);
    }, 150);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center gap-6">
      <span className="text-[40px] tracking-[-0.6px]" style={{ fontFamily: "'Archivo Black', sans-serif", color: "#f1f5f9" }}>
        OruHQ
      </span>
      <p className="text-[16px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>
        Personalizing your experience...
      </p>
      <div className="w-48 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.2)" }}>
        <div className="h-full rounded-full transition-all duration-150" style={{ width: `${progress}%`, background: "white" }} />
      </div>
    </div>
  );
}

// ── Main Flow ──────────────────────────────────────────────────────────────────
export default function OnboardingFlow() {
  const [step, setStep] = useState<Step>("welcome");
  const [userData, setUserData] = useState({ name: "", email: "", accountType: "", currency: "NGN", symbol: "₦" });
  const { setUser } = useApp();
  const navigate = useNavigate();

  // Detect if user just came back from clicking the magic link
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        const savedName = localStorage.getItem("oruhq_name") || "";
        const savedEmail = localStorage.getItem("oruhq_email") || session.user.email || "";
        setUserData((u) => ({ ...u, name: savedName, email: savedEmail }));
        setStep("account-type");
      }
    });
  }, []);

  // Save profile to Supabase after onboarding is complete
  const saveProfile = async (currency: string, symbol: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await supabase.from("profiles").upsert({
        id: user.id,
        full_name: userData.name,
        email: userData.email,
        account_type: userData.accountType,
        currency,
        currency_symbol: symbol,
        updated_at: new Date().toISOString(),
      });
      localStorage.removeItem("oruhq_name");
      localStorage.removeItem("oruhq_email");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative"
      style={{ background: step === "loading" ? "#8d0000" : "#f6f2ec", transition: "background 0.4s" }}
    >
      {step !== "loading" && (
        <button
          onClick={() => navigate("/")}
          className="absolute top-5 left-5 flex items-center gap-1.5 text-[13px] transition-colors hover:opacity-70"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#64748b" }}
        >
          <ArrowLeft className="size-4" strokeWidth={1.75} />
          Back
        </button>
      )}

      {step === "welcome" && (
        <div className="flex flex-col items-center gap-6 w-full max-w-[448px]">
          <span className="text-[40px] tracking-[-0.6px]" style={{ fontFamily: "'Archivo Black', sans-serif", color: "#8d0000" }}>
            OruHQ
          </span>
          <WelcomeStep
            onNext={(name, email) => {
              setUserData((u) => ({ ...u, name, email }));
              setStep("confirm-email");
            }}
          />
        </div>
      )}

      {step === "confirm-email" && (
        <ConfirmEmailStep
          email={userData.email}
          name={userData.name}
          onBack={() => setStep("welcome")}
        />
      )}

      {step === "account-type" && (
        <AccountTypeStep
          onNext={(type) => {
            setUserData((u) => ({ ...u, accountType: type }));
            setStep("currency");
          }}
        />
      )}

      {step === "currency" && (
        <div className="flex flex-col items-center gap-6 w-full max-w-[448px]">
          <span className="text-[40px] tracking-[-0.6px]" style={{ fontFamily: "'Archivo Black', sans-serif", color: "#8d0000" }}>
            OruHQ
          </span>
          <CurrencyStep
            onNext={async (currency, symbol) => {
              const finalUser = { ...userData, currency, symbol };
              setUserData(finalUser);
              setUser(finalUser);
              await saveProfile(currency, symbol);
              setStep("loading");
            }}
          />
        </div>
      )}

      {step === "loading" && <LoadingStep />}
    </div>
  );
}
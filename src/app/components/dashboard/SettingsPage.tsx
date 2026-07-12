import { useState } from "react";
import { User, DollarSign, Building2, Camera } from "lucide-react";
import { useApp } from "../../context/AppContext";

type SettingsTab = "profile" | "invoice" | "currency";

const currencies = [
  { flag: "🇳🇬", country: "Nigeria", code: "NGN", symbol: "₦" },
  { flag: "🇺🇸", country: "United States", code: "USD", symbol: "$" },
  { flag: "🇬🇧", country: "United Kingdom", code: "GBP", symbol: "£" },
  { flag: "🇪🇺", country: "Euro Zone", code: "EUR", symbol: "€" },
  { flag: "🇨🇦", country: "Canada", code: "CAD", symbol: "CA$" },
];

const paymentTerms = ["Due on receipt", "Net 7", "Net 14", "Net 30", "Net 60", "Custom"];

function FormField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#334155" }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3.5 py-2.5 rounded-xl text-[14px] outline-none transition-all"
        style={{ fontFamily: "'Inter', sans-serif", border: "1px solid #e5e7eb", color: "#0f172a" }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#8d0000")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
      />
      {hint && <p className="text-[12px]" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>{hint}</p>}
    </div>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#334155" }}>
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3.5 py-2.5 rounded-xl text-[14px] outline-none resize-none transition-all"
        style={{ fontFamily: "'Inter', sans-serif", border: "1px solid #e5e7eb", color: "#0f172a" }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#8d0000")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
      />
    </div>
  );
}

function SaveButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2.5 rounded-xl text-white text-[14px] w-full sm:w-auto"
      style={{ background: "#8d0000", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
    >
      Save Changes
    </button>
  );
}

// ── Profile Tab ────────────────────────────────────────────────────────────────
function ProfileSettings() {
  const { user, setUser } = useApp();
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [accountType, setAccountType] = useState(user?.accountType ?? "Freelancer");

  const handleSave = () => {
    if (!user) return;
    setUser({ ...user, name, email, accountType });
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e7eb" }}>
      <div className="px-4 sm:px-6 py-4 border-b" style={{ borderColor: "#f1f5f9" }}>
        <h3 className="text-[15px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>
          Profile Settings
        </h3>
      </div>

      <div className="p-4 sm:p-6 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <div
              className="size-20 rounded-full flex items-center justify-center"
              style={{ background: "#f1f5f9", border: "2px solid #e2e8f0" }}
            >
              <span className="text-[24px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#94a3b8" }}>
                {(name || "U").split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)}
              </span>
            </div>
            <button
              className="absolute bottom-0 right-0 size-8 rounded-full flex items-center justify-center"
              style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 1px 1px rgba(0,0,0,0.05)" }}
            >
              <Camera className="size-4" style={{ color: "#475569" }} strokeWidth={1.5} />
            </button>
          </div>
          <div className="min-w-0">
            <p className="text-[14px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, color: "#0f172a" }}>Profile Photo</p>
            <p className="text-[13px]" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>Recommended size: 400×400px</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Full Name" value={name} onChange={setName} placeholder="Your name" />
          <FormField label="Email Address" value={email} onChange={setEmail} type="email" placeholder="you@example.com" />
        </div>

        <div>
          <label className="text-[13px] block mb-1.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#334155" }}>
            Account Type
          </label>
          <select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl text-[14px] outline-none"
            style={{ fontFamily: "'Inter', sans-serif", border: "1px solid #e5e7eb", color: "#0f172a", background: "white" }}
          >
            <option>Freelancer</option>
            <option>Agency</option>
            <option>Side Hustler</option>
          </select>
        </div>

        <div className="flex justify-end pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
          <SaveButton onClick={handleSave} />
        </div>
      </div>
    </div>
  );
}

// ── Invoice Settings Tab ───────────────────────────────────────────────────────
function InvoiceSettings() {
  const [bizName, setBizName] = useState("John Doe Studio");
  const [bizEmail, setBizEmail] = useState("john@example.com");
  const [bizAddress, setBizAddress] = useState("123 Creative Street, Lagos, Nigeria");
  const [prefix, setPrefix] = useState("INV");
  const [terms, setTerms] = useState("Net 30");
  const [footerNote, setFooterNote] = useState("Thank you for your business. Please make payment within the agreed terms.");

  return (
    <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e7eb" }}>
      <div className="px-4 sm:px-6 py-4 border-b" style={{ borderColor: "#f1f5f9" }}>
        <h3 className="text-[15px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>
          Invoice Settings
        </h3>
        <p className="text-[13px] mt-0.5" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>
          All future invoices will auto-populate from these settings.
        </p>
      </div>

      <div className="p-4 sm:p-6 flex flex-col gap-5">
        <div>
          <label className="text-[13px] block mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#334155" }}>
            Business Logo
          </label>
          <div
            className="flex items-center justify-center h-24 rounded-xl cursor-pointer transition-colors hover:bg-slate-50"
            style={{ border: "2px dashed #e2e8f0" }}
          >
            <div className="flex flex-col items-center gap-1.5">
              <Camera className="size-5" style={{ color: "#94a3b8" }} />
              <span className="text-[13px]" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>
                Click to upload logo
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Business Name" value={bizName} onChange={setBizName} placeholder="Your business name" />
          <FormField label="Business Email" value={bizEmail} onChange={setBizEmail} type="email" placeholder="billing@yourbiz.com" />
        </div>

        <TextareaField label="Business Address" value={bizAddress} onChange={setBizAddress} placeholder="Street, City, Country" rows={2} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            label="Invoice Prefix"
            value={prefix}
            onChange={setPrefix}
            placeholder="INV"
            hint="e.g. INV-2026-001"
          />
          <div>
            <label className="text-[13px] block mb-1.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#334155" }}>
              Default Payment Terms
            </label>
            <select
              value={terms}
              onChange={(e) => setTerms(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl text-[14px] outline-none"
              style={{ fontFamily: "'Inter', sans-serif", border: "1px solid #e5e7eb", color: "#0f172a", background: "white" }}
            >
              {paymentTerms.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <TextareaField
          label="Invoice Footer Note"
          value={footerNote}
          onChange={setFooterNote}
          placeholder="Thank you for your business..."
          rows={3}
        />

        <div className="flex justify-end pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
          <SaveButton onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

// ── Currency Tab ───────────────────────────────────────────────────────────────
function CurrencySettings() {
  const { user, setUser } = useApp();
  const [selected, setSelected] = useState(user?.currency ?? "NGN");

  const handleSave = () => {
    if (!user) return;
    const match = currencies.find((c) => c.code === selected);
    if (!match) return;
    setUser({ ...user, currency: match.code, symbol: match.symbol });
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e7eb" }}>
      <div className="px-4 sm:px-6 py-4 border-b" style={{ borderColor: "#f1f5f9" }}>
        <h3 className="text-[15px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>
          Currency Settings
        </h3>
      </div>
      <div className="p-4 sm:p-6 flex flex-col gap-4">
        {currencies.map((c) => (
          <button
            key={c.code}
            onClick={() => setSelected(c.code)}
            className="flex items-center gap-4 px-4 py-4 rounded-xl text-left transition-all"
            style={{
              border: selected === c.code ? "2px solid #8d0000" : "2px solid #e5e7eb",
              background: selected === c.code ? "rgba(141,0,0,0.03)" : "white",
            }}
          >
            <span className="text-2xl shrink-0">{c.flag}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[14px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#0f172a" }}>
                {c.country}
              </p>
              <p className="text-[13px]" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>
                {c.code} ({c.symbol})
              </p>
            </div>
            {selected === c.code && (
              <div className="size-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "#8d0000" }}>
                <svg viewBox="0 0 10 8" fill="none" className="size-3">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </button>
        ))}
        <div className="flex justify-end pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
          <SaveButton onClick={handleSave} />
        </div>
      </div>
    </div>
  );
}

// ── Main Settings Page ─────────────────────────────────────────────────────────
export default function SettingsPage() {
  const [tab, setTab] = useState<SettingsTab>("profile");

  const tabs: { id: SettingsTab; label: string; icon: React.ElementType }[] = [
    { id: "profile", label: "Profile", icon: User },
    { id: "invoice", label: "Invoice", icon: Building2 },
    { id: "currency", label: "Currency", icon: DollarSign },
  ];

  return (
    <div className="p-4 sm:p-8" style={{ background: "#f7f7f5", minHeight: "100%" }}>
      <div className="mb-6 sm:mb-8">
        <h1 className="text-[24px] sm:text-[28px] tracking-[-0.7px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, color: "#0f172a" }}>
          Settings
        </h1>
        <p className="text-[14px] sm:text-[15px] mt-1" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>
          Manage your account, preferences, and workspace settings.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="w-full md:w-52 shrink-0">
          <div className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-1 md:pb-0">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[14px] text-left transition-colors shrink-0 whitespace-nowrap"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  background: tab === id ? "rgba(141,0,0,0.1)" : "transparent",
                  color: tab === id ? "#8d0000" : "#475569",
                }}
              >
                <Icon className="size-4 shrink-0" style={{ color: tab === id ? "#8d0000" : "#94a3b8" }} strokeWidth={1.75} />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          {tab === "profile" && <ProfileSettings />}
          {tab === "invoice" && <InvoiceSettings />}
          {tab === "currency" && <CurrencySettings />}
        </div>
      </div>
    </div>
  );
}
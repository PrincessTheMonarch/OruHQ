import { useNavigate } from "react-router";
import { useState } from "react";
import { Plus, AlertTriangle, FolderOpen, CheckCircle2, DollarSign, TrendingUp, ArrowRight, ChevronRight } from "lucide-react";
import { useApp, fmt } from "../../context/AppContext";

// ── Inline sparkline (no recharts) ────────────────────────────────────────────
const sparkData = [120, 185, 240, 195, 310, 275, 420, 380, 510, 470, 560, 640];
const sparkMonths = ["J","F","M","A","M","J","J","A","S","O","N","D"];

function Sparkline() {
  const [hov, setHov] = useState<number | null>(null);
  const W = 400, H = 100, PL = 4, PR = 4, PT = 4, PB = 16;
  const iW = W - PL - PR, iH = H - PT - PB;
  const min = Math.min(...sparkData), max = Math.max(...sparkData);
  const range = max - min || 1;
  const xs = sparkData.map((_, i) => PL + (i / (sparkData.length - 1)) * iW);
  const ys = sparkData.map((v) => PT + iH - ((v - min) / range) * iH);
  const pts = xs.map((x, i) => `${x},${ys[i]}`).join(" ");
  return (
    <div className="relative w-full">
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: 80, display: "block" }} onMouseLeave={() => setHov(null)}>
        {sparkMonths.map((m, i) => (
          <text key={i} x={xs[i]} y={H - 2} textAnchor="middle" fontSize={7} fill="#94a3b8" fontFamily="Inter, sans-serif">{m}</text>
        ))}
        <polyline points={pts} fill="none" stroke="#8d0000" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round" />
        {sparkData.map((_, i) => (
          <g key={i} onMouseEnter={() => setHov(i)} style={{ cursor: "crosshair" }}>
            <rect x={xs[i] - iW / (sparkData.length - 1) / 2} y={PT} width={iW / (sparkData.length - 1)} height={iH} fill="transparent" />
            {hov === i && <circle cx={xs[i]} cy={ys[i]} r={3} fill="#8d0000" stroke="white" strokeWidth={1.5} />}
          </g>
        ))}
      </svg>
    </div>
  );
}

// ── Progress bar ───────────────────────────────────────────────────────────────
function Bar({ value, color = "#8d0000" }: { value: number; color?: string }) {
  return (
    <div className="h-1 rounded-full overflow-hidden w-full" style={{ background: "#f1f5f9" }}>
      <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(value, 100)}%`, background: color }} />
    </div>
  );
}

// ── Status badge ───────────────────────────────────────────────────────────────
function Badge({ status }: { status: string }) {
  const map: Record<string, { bg: string; text: string; label: string }> = {
    active:    { bg: "#eff6ff", text: "#2563eb", label: "Active" },
    "at-risk": { bg: "#fef2f2", text: "#dc2626", label: "At Risk" },
    completed: { bg: "#f0fdf4", text: "#16a34a", label: "Completed" },
  };
  const s = map[status] ?? { bg: "#f1f5f9", text: "#64748b", label: status };
  return (
    <span
      className="text-[11px] px-2 py-0.5 rounded-full whitespace-nowrap"
      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, background: s.bg, color: s.text }}
    >
      {s.label}
    </span>
  );
}

// ── Empty state ────────────────────────────────────────────────────────────────
function EmptyState({ name }: { name: string }) {
  const navigate = useNavigate();
  return (
    <div className="p-8 max-w-2xl mx-auto">
      {/* Greeting */}
      <div className="mb-10">
        <p className="text-[13px] mb-1" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>
          Your freelancer workspace
        </p>
        <h1
          className="text-[32px] tracking-[-0.8px] mb-2"
          style={{ fontFamily: "'Archivo Black', sans-serif", color: "#0f172a" }}
        >
          Welcome, {name} 👋
        </h1>
        <p className="text-[16px] leading-[1.6]" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>
          OruHQ connects your work and money in one place. Start from wherever makes sense for you.
        </p>
      </div>

      {/* Three entry points */}
      <div className="grid grid-cols-1 gap-4 mb-10">
        {[
          {
            title: "Create a Project",
            desc: "Set up your work, add tasks, then attach invoices and payments as they come.",
            icon: FolderOpen,
            accent: "#8d0000",
            to: "/dashboard/projects/new",
            hint: "Projects → Tasks → Invoice → Payment",
          },
          {
            title: "Create an Invoice",
            desc: "Bill a client now. Link it to a project and record payment when it arrives.",
            icon: DollarSign,
            accent: "#2563eb",
            to: "/dashboard/invoices/new",
            hint: "Invoice → Project → Payment",
          },
          {
            title: "Record a Payment",
            desc: "Log money received. Connect it to an invoice or project to keep your records clean.",
            icon: TrendingUp,
            accent: "#16a34a",
            to: "/dashboard/payments/new",
            hint: "Payment → Invoice → Project",
          },
        ].map(({ title, desc, icon: Icon, accent, to, hint }) => (
          <button
            key={title}
            onClick={() => navigate(to)}
            className="flex items-start gap-4 p-5 rounded-2xl text-left transition-all hover:shadow-sm group"
            style={{ border: "1px solid #e2e8f0", background: "white" }}
          >
            <div
              className="size-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: accent + "12" }}
            >
              <Icon className="size-5" style={{ color: accent }} strokeWidth={1.75} />
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-[15px] mb-1"
                style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}
              >
                {title}
              </p>
              <p
                className="text-[13px] leading-[1.5] mb-2"
                style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}
              >
                {desc}
              </p>
              <span
                className="text-[11px] px-2 py-0.5 rounded-full"
                style={{ fontFamily: "'Inter', sans-serif", background: accent + "10", color: accent }}
              >
                {hint}
              </span>
            </div>
            <ChevronRight
              className="size-4 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: accent }}
            />
          </button>
        ))}
      </div>

      {/* How it connects */}
      <div className="p-5 rounded-2xl" style={{ border: "1px solid #e2e8f0", background: "#fafafa" }}>
        <p
          className="text-[13px] mb-3"
          style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}
        >
          Everything connects
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {["Projects", "↔", "Tasks", "↔", "Invoices", "↔", "Payments"].map((item, i) => (
            <span
              key={i}
              className="text-[13px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: item === "↔" ? "#94a3b8" : "#0f172a",
                fontWeight: item === "↔" ? 400 : 500,
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <p
          className="text-[12px] mt-2"
          style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}
        >
          Start anywhere — connect everything later.
        </p>
      </div>
    </div>
  );
}

// ── Main Overview ──────────────────────────────────────────────────────────────
export default function DashboardOverview() {
  const navigate = useNavigate();
  const { user, projects, invoices, payments } = useApp();
  const displayName = user?.name?.split(" ")[0] ?? "John";
  const symbol = user?.symbol ?? "₦";

  const isEmpty = projects.length === 0 && invoices.length === 0 && payments.length === 0;
  if (isEmpty) return <EmptyState name={displayName} />;

  const activeProjects = projects.filter((p) => p.status !== "completed");
  const atRiskProjects = projects.filter((p) => p.status === "at-risk");
  const totalReceived = payments.filter((p) => p.status === "completed").reduce((s, p) => s + p.amount, 0);
  const outstanding = invoices
    .filter((i) => ["sent", "viewed", "overdue"].includes(i.status))
    .reduce((s, i) => s + i.amount, 0);

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      {/* Header row: greeting + actions */}
      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <div>
          <p
            className="text-[24px] tracking-[-0.6px]"
            style={{ fontFamily: "'Archivo Black', sans-serif", color: "#0f172a" }}
          >
            {greeting}, {displayName}
          </p>
          <p className="text-[13px] mt-0.5" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>
            {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { label: "New Project", to: "/dashboard/projects/new", color: "#8d0000" },
            { label: "New Invoice", to: "/dashboard/invoices/new", color: "#2563eb" },
            { label: "Record Payment", to: "/dashboard/payments/new", color: "#16a34a" },
          ].map(({ label, to, color }) => (
            <button
              key={label}
              onClick={() => navigate(to)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] transition-colors hover:opacity-90"
              style={{
                background: color + "10",
                color,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                border: `1px solid ${color}20`,
              }}
            >
              <Plus className="size-3.5" strokeWidth={2} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Stat row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Total Received", value: fmt(totalReceived, symbol), icon: TrendingUp, color: "#16a34a" },
          { label: "Outstanding", value: fmt(outstanding, symbol), icon: DollarSign, color: "#d97706" },
          { label: "Active Projects", value: String(activeProjects.length), icon: FolderOpen, color: "#8d0000" },
          { label: "At Risk", value: String(atRiskProjects.length), icon: AlertTriangle, color: atRiskProjects.length > 0 ? "#dc2626" : "#94a3b8" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="flex items-center gap-3 p-4 rounded-xl"
            style={{ border: "1px solid #e2e8f0", background: "white" }}
          >
            <div className="size-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: color + "12" }}>
              <Icon className="size-4" style={{ color }} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>{label}</p>
              <p className="text-[18px] tracking-[-0.4px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main grid: active projects (left) + at-risk (right) */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-4">
        {/* Active Projects */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0", background: "white" }}>
          <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "#f1f5f9" }}>
            <h2 className="text-[14px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>
              Active Projects
            </h2>
            <button
              onClick={() => navigate("/dashboard/projects")}
              className="text-[12px] flex items-center gap-1 hover:underline"
              style={{ fontFamily: "'Inter', sans-serif", color: "#8d0000" }}
            >
              View all <ArrowRight className="size-3" />
            </button>
          </div>
          <div>
            {activeProjects.length === 0 ? (
              <div className="px-5 py-8 text-center">
                <p className="text-[13px] mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>No active projects</p>
                <button
                  onClick={() => navigate("/dashboard/projects/new")}
                  className="text-[13px] px-3 py-1.5 rounded-lg"
                  style={{ background: "#8d000010", color: "#8d0000", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  + Create Project
                </button>
              </div>
            ) : (
              activeProjects.map((p, i) => {
                const done = p.tasks.filter((t) => t.done).length;
                const total = p.tasks.length;
                const pct = total > 0 ? Math.round((done / total) * 100) : 0;
                return (
                  <button
                    key={p.id}
                    onClick={() => navigate(`/dashboard/projects/${p.id}`)}
                    className="w-full text-left px-5 py-4 hover:bg-slate-50 transition-colors"
                    style={{ borderBottom: i < activeProjects.length - 1 ? "1px solid #f8fafc" : "none" }}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="min-w-0">
                        <p className="text-[14px] truncate" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, color: "#0f172a" }}>
                          {p.name}
                        </p>
                        <p className="text-[12px]" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>{p.client}</p>
                      </div>
                      <Badge status={p.status} />
                    </div>
                    <Bar value={pct} color={p.status === "at-risk" ? "#dc2626" : "#8d0000"} />
                    <div className="flex justify-between mt-1.5">
                      <span className="text-[11px]" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>
                        {done}/{total} tasks · {pct}%
                      </span>
                      <span className="text-[11px]" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>
                        Due {new Date(p.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </span>
                    </div>
                    <div className="flex gap-3 mt-1.5">
                      <span className="text-[11px]" style={{ fontFamily: "'Inter', sans-serif", color: p.invoiceIds.length > 0 ? "#2563eb" : "#cbd5e1" }}>
                        {p.invoiceIds.length > 0 ? `${p.invoiceIds.length} invoice${p.invoiceIds.length > 1 ? "s" : ""}` : "No invoices"}
                      </span>
                      <span className="text-[11px]" style={{ fontFamily: "'Inter', sans-serif", color: p.paymentIds.length > 0 ? "#16a34a" : "#cbd5e1" }}>
                        {p.paymentIds.length > 0 ? `${p.paymentIds.length} payment${p.paymentIds.length > 1 ? "s" : ""}` : "No payments"}
                      </span>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* At-Risk Projects */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0", background: "white" }}>
          <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "#f1f5f9" }}>
            <h2 className="text-[14px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>
              At-Risk Projects
            </h2>
            <span
              className="text-[11px] px-2 py-0.5 rounded-full"
              style={{ background: "#fef2f2", color: "#dc2626", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Needs attention
            </span>
          </div>
          <div>
            {atRiskProjects.length === 0 ? (
              <div className="px-5 py-8 text-center">
                <CheckCircle2 className="size-8 mx-auto mb-2" style={{ color: "#16a34a" }} />
                <p className="text-[13px]" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>All projects are on track</p>
              </div>
            ) : (
              atRiskProjects.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => navigate(`/dashboard/projects/${p.id}`)}
                  className="w-full text-left px-5 py-4 hover:bg-red-50 transition-colors"
                  style={{ borderBottom: i < atRiskProjects.length - 1 ? "1px solid #fef2f2" : "none" }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="size-3.5 shrink-0" style={{ color: "#dc2626" }} />
                    <p className="text-[14px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, color: "#0f172a" }}>
                      {p.name}
                    </p>
                  </div>
                  <p className="text-[12px] ml-5.5" style={{ fontFamily: "'Inter', sans-serif", color: "#dc2626" }}>
                    Behind schedule — due {new Date(p.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </p>
                  <p className="text-[11px] ml-5.5 mt-0.5" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>
                    {p.tasks.filter((t) => t.done).length}/{p.tasks.length} tasks · {p.client}
                  </p>
                </button>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Bottom row: earnings + recent invoices + recent payments */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Earnings chart */}
        <div className="rounded-2xl p-5" style={{ border: "1px solid #e2e8f0", background: "white" }}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[14px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>
              Earnings
            </h2>
            <span className="text-[12px]" style={{ fontFamily: "'Inter', sans-serif", color: "#16a34a", fontWeight: 500 }}>+34% YoY</span>
          </div>
          <p className="text-[22px] tracking-[-0.5px] mb-3" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>
            {fmt(totalReceived, symbol)}
          </p>
          <Sparkline />
        </div>

        {/* Recent invoices */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0", background: "white" }}>
          <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "#f1f5f9" }}>
            <h2 className="text-[14px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>Invoices</h2>
            <button onClick={() => navigate("/dashboard/invoices")} className="text-[12px]" style={{ color: "#8d0000", fontFamily: "'Inter', sans-serif" }}>View all</button>
          </div>
          {invoices.length === 0 ? (
            <div className="px-5 py-6 text-center">
              <p className="text-[12px] mb-2" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>No invoices yet</p>
              <button onClick={() => navigate("/dashboard/invoices/new")} className="text-[12px] underline" style={{ color: "#8d0000" }}>Create one</button>
            </div>
          ) : (
            invoices.slice(0, 4).map((inv, i) => {
              const sc = { draft: ["#f1f5f9","#64748b"], sent: ["#eff6ff","#2563eb"], viewed: ["#f5f3ff","#7c3aed"], paid: ["#f0fdf4","#16a34a"], overdue: ["#fef2f2","#dc2626"] }[inv.status] ?? ["#f1f5f9","#64748b"];
              return (
                <div key={inv.id} className="flex items-center justify-between px-5 py-3" style={{ borderBottom: i < 3 ? "1px solid #f8fafc" : "none" }}>
                  <div>
                    <p className="text-[13px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#0f172a" }}>{inv.invoiceNumber}</p>
                    <p className="text-[11px]" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>{inv.client}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: sc[0], color: sc[1], fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                      {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
                    </span>
                    <span className="text-[13px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>{fmt(inv.amount, symbol)}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Recent payments */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0", background: "white" }}>
          <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "#f1f5f9" }}>
            <h2 className="text-[14px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>Payments</h2>
            <button onClick={() => navigate("/dashboard/payments")} className="text-[12px]" style={{ color: "#8d0000", fontFamily: "'Inter', sans-serif" }}>View all</button>
          </div>
          {payments.length === 0 ? (
            <div className="px-5 py-6 text-center">
              <p className="text-[12px] mb-2" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>No payments recorded</p>
              <button onClick={() => navigate("/dashboard/payments/new")} className="text-[12px] underline" style={{ color: "#8d0000" }}>Record one</button>
            </div>
          ) : (
            payments.slice(0, 4).map((pay, i) => (
              <div key={pay.id} className="flex items-center justify-between px-5 py-3" style={{ borderBottom: i < 3 ? "1px solid #f8fafc" : "none" }}>
                <div>
                  <p className="text-[13px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#0f172a" }}>{pay.client}</p>
                  <p className="text-[11px]" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>{pay.invoiceId ?? "Direct"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: pay.status === "completed" ? "#f0fdf4" : "#fffbeb", color: pay.status === "completed" ? "#16a34a" : "#d97706", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    {pay.status === "completed" ? "Received" : "Pending"}
                  </span>
                  <span className="text-[13px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: pay.status === "completed" ? "#16a34a" : "#0f172a" }}>{fmt(pay.amount, symbol)}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

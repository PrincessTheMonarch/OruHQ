import { useState } from "react";
import { useNavigate } from "react-router";
import { Plus, FolderOpen, CreditCard, Link2, ChevronRight } from "lucide-react";
import { useApp, fmt } from "../../context/AppContext";
import type { InvoiceStatus } from "../../data/mockData";

const statusMap = {
  draft:   { bg: "#f1f5f9", text: "#64748b", label: "Draft" },
  sent:    { bg: "#eff6ff", text: "#2563eb", label: "Sent" },
  viewed:  { bg: "#f5f3ff", text: "#7c3aed", label: "Viewed" },
  paid:    { bg: "#f0fdf4", text: "#16a34a", label: "Paid" },
  overdue: { bg: "#fef2f2", text: "#dc2626", label: "Overdue" },
};

// ─── Attach Project Dropdown ──────────────────────────────────────────────────
function AttachProjectDropdown({
  projects,
  onAttach,
}: {
  projects: { id: string; name: string }[];
  onAttach: (projectId: string) => void;
}) {
  const [open, setOpen] = useState(false);

  if (projects.length === 0) {
    return (
      <span className="text-[11px]" style={{ fontFamily: "'Inter', sans-serif", color: "#cbd5e1" }}>
        No projects yet
      </span>
    );
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
        className="flex items-center gap-1 text-[11px] underline"
        style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}
      >
        <Link2 className="size-3" />
        No project · Attach
        <ChevronRight className="size-3 transition-transform" style={{ transform: open ? "rotate(90deg)" : "none" }} />
      </button>
      {open && (
        <div
          className="absolute left-0 top-full mt-1 z-30 rounded-xl overflow-hidden py-1 min-w-[200px]"
          style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
        >
          {projects.map((p) => (
            <button
              key={p.id}
              className="w-full flex items-center gap-2 px-4 py-2.5 text-left hover:bg-slate-50 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onAttach(p.id);
                setOpen(false);
              }}
            >
              <FolderOpen className="size-3.5 shrink-0" style={{ color: "#94a3b8" }} />
              <span className="text-[13px] truncate" style={{ fontFamily: "'Inter', sans-serif", color: "#0f172a" }}>
                {p.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function InvoicesPage() {
  const navigate = useNavigate();
  const { invoices, projects, user, linkInvoiceToProject } = useApp();
  const [filter, setFilter] = useState<"all" | InvoiceStatus>("all");
  const symbol = user?.symbol ?? "₦";

  const visible = filter === "all" ? invoices : invoices.filter((i) => i.status === filter);
  const outstanding = invoices.filter((i) => ["sent","viewed","overdue"].includes(i.status)).reduce((s,i)=>s+i.amount,0);
  const paid = invoices.filter((i)=>i.status==="paid").reduce((s,i)=>s+i.amount,0);
  const overdueCount = invoices.filter((i)=>i.status==="overdue").length;

  const handleAttachProject = (invoiceId: string, projectId: string) => {
    linkInvoiceToProject(invoiceId, projectId);
  };

  return (
    <div className="p-6" style={{ background: "#fcfcfc", minHeight: "100%" }}>
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[26px] tracking-[-0.65px]" style={{ fontFamily: "'Archivo Black', sans-serif", color: "#0f172a" }}>Invoices</h1>
          <p className="text-[13px] mt-0.5" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>Manage your billing and track payments.</p>
        </div>
        <button
          onClick={() => navigate("/dashboard/invoices/new")}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-[13px]"
          style={{ background: "#8d0000", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
        >
          <Plus className="size-4" strokeWidth={2} />
          New Invoice
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: "Outstanding", value: fmt(outstanding, symbol), color: "#d97706" },
          { label: "Paid", value: fmt(paid, symbol), color: "#16a34a" },
          { label: "Overdue", value: `${overdueCount}`, color: overdueCount > 0 ? "#dc2626" : "#94a3b8" },
        ].map(({ label, value, color }) => (
          <div key={label} className="rounded-xl p-4" style={{ border: "1px solid #e2e8f0", background: "white" }}>
            <p className="text-[11px] uppercase tracking-wider mb-1" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>{label}</p>
            <p className="text-[20px] tracking-[-0.5px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color }}>{value}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        {(["all","draft","sent","viewed","paid","overdue"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setFilter(v)}
            className="px-3 py-1.5 rounded-lg text-[12px] capitalize transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 500,
              background: filter === v ? "#0f172a" : "white",
              color: filter === v ? "white" : "#475569",
              border: `1px solid ${filter === v ? "#0f172a" : "#e2e8f0"}`,
            }}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="rounded-2xl p-12 text-center" style={{ border: "1px solid #e2e8f0", background: "white" }}>
          <p className="text-[14px] mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>No invoices yet</p>
          <button onClick={() => navigate("/dashboard/invoices/new")} className="text-[13px] px-4 py-2 rounded-lg text-white" style={{ background: "#8d0000", fontFamily: "'Inter', sans-serif" }}>
            Create your first invoice
          </button>
        </div>
      ) : (
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0", background: "white" }}>
          <div className="grid gap-0">
            {/* Header */}
            <div className="grid grid-cols-[1.2fr_1fr_0.8fr_0.7fr_0.7fr_auto] px-5 py-2.5 text-[11px] uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8", borderBottom: "1px solid #f1f5f9", background: "#fafafa" }}>
              <span>Invoice</span><span>Client / Project</span><span>Amount</span><span>Issued</span><span>Due</span><span>Status</span>
            </div>
            {visible.map((inv, i) => {
              const sc = statusMap[inv.status];
              const proj = projects.find((p) => p.id === inv.projectId);
              return (
                <div key={inv.id} className="grid grid-cols-[1.2fr_1fr_0.8fr_0.7fr_0.7fr_auto] px-5 py-4 items-center hover:bg-slate-50 transition-colors" style={{ borderBottom: i < visible.length - 1 ? "1px solid #f8fafc" : "none" }}>
                  <span className="text-[13px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#0f172a" }}>{inv.invoiceNumber}</span>
                  <div>
                    <p className="text-[13px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#0f172a" }}>{inv.client}</p>
                    {proj ? (
                      <span className="flex items-center gap-1 text-[11px]" style={{ color: "#2563eb" }}>
                        <FolderOpen className="size-3" />{proj.name}
                      </span>
                    ) : (
                      <AttachProjectDropdown
                        projects={projects}
                        onAttach={(projectId) => handleAttachProject(inv.id, projectId)}
                      />
                    )}
                  </div>
                  <span className="text-[14px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>{fmt(inv.amount, symbol)}</span>
                  <span className="text-[12px]" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>{new Date(inv.issued).toLocaleDateString("en-US",{month:"short",day:"numeric"})}</span>
                  <span className="text-[12px]" style={{ fontFamily: "'Inter', sans-serif", color: inv.status === "overdue" ? "#dc2626" : "#64748b", fontWeight: inv.status === "overdue" ? 500 : 400 }}>
                    {new Date(inv.due).toLocaleDateString("en-US",{month:"short",day:"numeric"})}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap" style={{ background: sc.bg, color: sc.text, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{sc.label}</span>
                    {inv.status !== "paid" && (
                      <button onClick={() => navigate("/dashboard/payments/new")} className="flex items-center gap-1 text-[11px] underline" style={{ color: "#8d0000" }}>
                        <CreditCard className="size-3.5 inline" />Record Payment
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
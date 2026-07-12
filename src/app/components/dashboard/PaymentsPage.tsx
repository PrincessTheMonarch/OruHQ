import { useState } from "react";
import { useNavigate } from "react-router";
import { Plus, FileText, FolderOpen, Link2, ChevronRight } from "lucide-react";
import { useApp, fmt } from "../../context/AppContext";

// ─── Generic Attach Dropdown ──────────────────────────────────────────────────
function AttachDropdown<T extends { id: string }>({
  triggerLabel,
  triggerIcon,
  items,
  renderItem,
  onAttach,
  emptyLabel,
}: {
  triggerLabel: string;
  triggerIcon: React.ReactNode;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onAttach: (id: string) => void;
  emptyLabel: string;
}) {
  const [open, setOpen] = useState(false);

  if (items.length === 0) {
    return (
      <span className="text-[12px]" style={{ fontFamily: "'Inter', sans-serif", color: "#cbd5e1" }}>
        {emptyLabel}
      </span>
    );
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
        className="flex items-center gap-1 text-[11px] px-2 py-0.5 rounded"
        style={{ fontFamily: "'Inter', sans-serif", color: "#475569", background: "#f1f5f9", fontWeight: 500 }}
      >
        {triggerIcon}
        {triggerLabel}
        <ChevronRight className="size-3 transition-transform" style={{ transform: open ? "rotate(90deg)" : "none" }} />
      </button>
      {open && (
        <div
          className="absolute left-0 top-full mt-1 z-30 rounded-xl overflow-hidden py-1 min-w-[220px]"
          style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
        >
          {items.map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center gap-2 px-4 py-2.5 text-left hover:bg-slate-50 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onAttach(item.id);
                setOpen(false);
              }}
            >
              <span className="flex-1 text-[13px] truncate" style={{ fontFamily: "'Inter', sans-serif", color: "#0f172a" }}>
                {renderItem(item)}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PaymentsPage() {
  const navigate = useNavigate();
  const { payments, invoices, projects, user, linkPaymentToInvoice, linkPaymentToProject } = useApp();
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
  const symbol = user?.symbol ?? "₦";

  const visible = filter === "all" ? payments : payments.filter((p) => p.status === filter);
  const received = payments.filter((p) => p.status === "completed").reduce((s,p)=>s+p.amount,0);
  const pending = payments.filter((p) => p.status === "pending").reduce((s,p)=>s+p.amount,0);

  const handleAttachInvoice = (paymentId: string, invoiceId: string) => {
    linkPaymentToInvoice(paymentId, invoiceId);
  };

  const handleAttachProject = (paymentId: string, projectId: string) => {
    linkPaymentToProject(paymentId, projectId);
  };

  return (
    <div className="p-6" style={{ background: "#fcfcfc", minHeight: "100%" }}>
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[26px] tracking-[-0.65px]" style={{ fontFamily: "'Archivo Black', sans-serif", color: "#0f172a" }}>Payments</h1>
          <p className="text-[13px] mt-0.5" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>Track money received and outstanding balances.</p>
        </div>
        <button
          onClick={() => navigate("/dashboard/payments/new")}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-[13px]"
          style={{ background: "#8d0000", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
        >
          <Plus className="size-4" strokeWidth={2} />
          Record Payment
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        {[
          { label: "Total Received", value: fmt(received, symbol), color: "#16a34a", bg: "#f0fdf4" },
          { label: "Pending", value: fmt(pending, symbol), color: "#d97706", bg: "#fffbeb" },
        ].map(({ label, value, color, bg }) => (
          <div key={label} className="rounded-xl p-4" style={{ border: `1px solid ${color}30`, background: bg }}>
            <p className="text-[11px] uppercase tracking-wider mb-1" style={{ fontFamily: "'Inter', sans-serif", color }}>{label}</p>
            <p className="text-[24px] tracking-[-0.6px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color }}>{value}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mb-4">
        {(["all","completed","pending"] as const).map((v) => (
          <button key={v} onClick={() => setFilter(v)} className="px-3 py-1.5 rounded-lg text-[12px] capitalize"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, background: filter === v ? "#0f172a" : "white", color: filter === v ? "white" : "#475569", border: `1px solid ${filter === v ? "#0f172a" : "#e2e8f0"}` }}>
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="rounded-2xl p-12 text-center" style={{ border: "1px solid #e2e8f0", background: "white" }}>
          <p className="text-[14px] mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>No payments recorded</p>
          <button onClick={() => navigate("/dashboard/payments/new")} className="text-[13px] px-4 py-2 rounded-lg text-white" style={{ background: "#8d0000", fontFamily: "'Inter', sans-serif" }}>
            Record your first payment
          </button>
        </div>
      ) : (
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0", background: "white" }}>
          {visible.map((pay, i) => {
            const linkedInvoice = pay.invoiceId ? invoices.find((inv) => inv.id === pay.invoiceId) : null;
            const linkedProject = pay.projectId ? projects.find((p) => p.id === pay.projectId) : null;
            const unlinkedInvoices = invoices.filter((inv) => !inv.paymentId);
            return (
              <div key={pay.id} className="px-5 py-5 hover:bg-slate-50" style={{ borderBottom: i < visible.length - 1 ? "1px solid #f8fafc" : "none" }}>
                <div className="flex items-start gap-3">
                  <div className="size-2 rounded-full mt-1.5 shrink-0" style={{ background: pay.status === "completed" ? "#16a34a" : "#d97706" }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-[14px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>{pay.client}</p>
                      <span className="text-[11px] px-2 py-0.5 rounded-full" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, background: pay.status === "completed" ? "#f0fdf4" : "#fffbeb", color: pay.status === "completed" ? "#16a34a" : "#d97706" }}>
                        {pay.status === "completed" ? "Received" : "Pending"}
                      </span>
                    </div>
                    {pay.date && (
                      <p className="text-[12px] mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>
                        {new Date(pay.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </p>
                    )}
                    <div className="flex gap-4 flex-wrap items-center">
                      {linkedInvoice ? (
                        <span className="flex items-center gap-1.5 text-[12px]" style={{ fontFamily: "'Inter', sans-serif", color: "#2563eb" }}>
                          <FileText className="size-3.5" />{linkedInvoice.invoiceNumber}
                        </span>
                      ) : (
                        <AttachDropdown
                          triggerLabel="Attach Invoice"
                          triggerIcon={<FileText className="size-3.5" />}
                          items={unlinkedInvoices}
                          emptyLabel="No invoices yet"
                          renderItem={(inv) => (
                            <span className="flex items-center justify-between gap-2 w-full">
                              <span>{inv.invoiceNumber}</span>
                              <span style={{ color: "#64748b" }}>{fmt(inv.amount, symbol)}</span>
                            </span>
                          )}
                          onAttach={(invoiceId) => handleAttachInvoice(pay.id, invoiceId)}
                        />
                      )}
                      {linkedProject ? (
                        <span className="flex items-center gap-1.5 text-[12px]" style={{ fontFamily: "'Inter', sans-serif", color: "#7c3aed" }}>
                          <FolderOpen className="size-3.5" />{linkedProject.name}
                        </span>
                      ) : (
                        <AttachDropdown
                          triggerLabel="Link Project"
                          triggerIcon={<Link2 className="size-3" />}
                          items={projects}
                          emptyLabel="No projects yet"
                          renderItem={(p) => <span>{p.name}</span>}
                          onAttach={(projectId) => handleAttachProject(pay.id, projectId)}
                        />
                      )}
                    </div>
                  </div>
                  <p className="text-[16px] shrink-0" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: pay.status === "completed" ? "#16a34a" : "#0f172a" }}>
                    {fmt(pay.amount, symbol)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router";
import { Plus, AlertTriangle, FileText, CreditCard } from "lucide-react";
import { useApp, fmt } from "../../context/AppContext";

function Bar({ value, color }: { value: number; color: string }) {
  return (
    <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: "#f1f5f9" }}>
      <div className="h-full rounded-full" style={{ width: `${Math.min(value, 100)}%`, background: color }} />
    </div>
  );
}

const statusMap = {
  active: { bg: "#eff6ff", text: "#2563eb", label: "Active" },
  "at-risk": { bg: "#fef2f2", text: "#dc2626", label: "At Risk" },
  completed: { bg: "#f0fdf4", text: "#16a34a", label: "Completed" },
} as const;

export default function ProjectsPage() {
  const navigate = useNavigate();
  const { projects, invoices, payments, user } = useApp();
  const [filter, setFilter] = useState<"all" | "active" | "at-risk" | "completed">("all");
  const symbol = user?.symbol ?? "₦";

  const visible = filter === "all" ? projects : projects.filter((p) => p.status === filter);
  const totalRevenue = projects.reduce((s, p) => s + p.budget, 0);
  const atRisk = projects.filter((p) => p.status === "at-risk").length;

  return (
    <div className="p-6" style={{ background: "#fcfcfc", minHeight: "100%" }}>
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[26px] tracking-[-0.65px]" style={{ fontFamily: "'Archivo Black', sans-serif", color: "#0f172a" }}>
            Projects
          </h1>
          <p className="text-[13px] mt-0.5" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>
            Manage your active work and track progress.
          </p>
        </div>
        <button
          onClick={() => navigate("/dashboard/projects/new")}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-[13px]"
          style={{ background: "#8d0000", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
        >
          <Plus className="size-4" strokeWidth={2} />
          New Project
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: "Total Budget", value: fmt(totalRevenue, symbol), color: "#0f172a" },
          { label: "Active", value: `${projects.filter(p=>p.status==="active").length}`, color: "#2563eb" },
          { label: "At Risk", value: `${atRisk}`, color: atRisk > 0 ? "#dc2626" : "#94a3b8" },
        ].map(({ label, value, color }) => (
          <div key={label} className="rounded-xl p-4" style={{ border: "1px solid #e2e8f0", background: "white" }}>
            <p className="text-[11px] uppercase tracking-wider mb-1" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>{label}</p>
            <p className="text-[20px] tracking-[-0.5px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color }}>{value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-4">
        {(["all","active","at-risk","completed"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setFilter(v)}
            className="px-3 py-1.5 rounded-lg text-[12px] transition-colors capitalize"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              background: filter === v ? "#0f172a" : "white",
              color: filter === v ? "white" : "#475569",
              border: `1px solid ${filter === v ? "#0f172a" : "#e2e8f0"}`,
            }}
          >
            {v === "at-risk" ? "At Risk" : v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>

      {/* List */}
      {visible.length === 0 ? (
        <div className="rounded-2xl p-12 text-center" style={{ border: "1px solid #e2e8f0", background: "white" }}>
          <p className="text-[14px] mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>No projects yet</p>
          <button onClick={() => navigate("/dashboard/projects/new")} className="text-[13px] px-4 py-2 rounded-lg text-white" style={{ background: "#8d0000", fontFamily: "'Inter', sans-serif" }}>
            Create your first project
          </button>
        </div>
      ) : (
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0", background: "white" }}>
          {visible.map((project, i) => {
            const done = project.tasks.filter((t) => t.done).length;
            const total = project.tasks.length;
            const pct = total > 0 ? Math.round((done / total) * 100) : 0;
            const sc = statusMap[project.status];
            const projInvoices = invoices.filter((inv) => project.invoiceIds.includes(inv.id));
            const projPayments = payments.filter((pay) => project.paymentIds.includes(pay.id));
            return (
              <button
                key={project.id}
                onClick={() => navigate(`/dashboard/projects/${project.id}`)}
                className="w-full text-left px-5 py-5 hover:bg-slate-50 transition-colors"
                style={{ borderBottom: i < visible.length - 1 ? "1px solid #f8fafc" : "none" }}
              >
                <div className="flex items-start gap-3">
                  {project.status === "at-risk" && (
                    <AlertTriangle className="size-4 mt-0.5 shrink-0" style={{ color: "#dc2626" }} />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-[14px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>{project.name}</p>
                      <span className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: sc.bg, color: sc.text, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{sc.label}</span>
                    </div>
                    <p className="text-[12px] mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>{project.client}</p>
                    <Bar value={pct} color={project.status === "at-risk" ? "#dc2626" : project.status === "completed" ? "#16a34a" : "#8d0000"} />
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-[11px]" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>{done}/{total} tasks · {pct}%</span>
                      <span className="text-[11px]" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>
                        Due {new Date(project.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </div>
                    <div className="flex gap-4 mt-2">
                      <span className="flex items-center gap-1 text-[11px]" style={{ fontFamily: "'Inter', sans-serif", color: projInvoices.length > 0 ? "#2563eb" : "#cbd5e1" }}>
                        <FileText className="size-3" />{projInvoices.length > 0 ? `${projInvoices.length} invoice${projInvoices.length > 1 ? "s" : ""}` : "No invoices"}
                      </span>
                      <span className="flex items-center gap-1 text-[11px]" style={{ fontFamily: "'Inter', sans-serif", color: projPayments.length > 0 ? "#16a34a" : "#cbd5e1" }}>
                        <CreditCard className="size-3" />{projPayments.length > 0 ? `${projPayments.length} payment${projPayments.length > 1 ? "s" : ""}` : "No payments"}
                      </span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    {project.budget > 0 && (
                      <p className="text-[15px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>
                        {fmt(project.budget, symbol)}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

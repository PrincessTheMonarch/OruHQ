import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  Plus,
  Check,
  FileText,
  CreditCard,
  Link2,
  Trash2,
  ChevronRight,
} from "lucide-react";
import { useApp, fmt, type Project, type Invoice, type Payment, type Task } from "../../context/AppContext";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const statusStyle: Record<Project["status"], { bg: string; color: string; label: string }> = {
  active: { bg: "#dbeafe", color: "#1d4ed8", label: "Active" },
  "at-risk": { bg: "#fee2e2", color: "#b91c1c", label: "At Risk" },
  completed: { bg: "#dcfce7", color: "#15803d", label: "Completed" },
};

const invoiceStatusStyle: Record<Invoice["status"], { bg: string; color: string; label: string }> = {
  draft: { bg: "#f1f5f9", color: "#475569", label: "Draft" },
  sent: { bg: "#dbeafe", color: "#1d4ed8", label: "Sent" },
  viewed: { bg: "#ede9fe", color: "#6d28d9", label: "Viewed" },
  paid: { bg: "#dcfce7", color: "#15803d", label: "Paid" },
  overdue: { bg: "#fee2e2", color: "#b91c1c", label: "Overdue" },
};

const paymentStatusStyle: Record<Payment["status"], { bg: string; color: string; label: string }> = {
  pending: { bg: "#fef9c3", color: "#a16207", label: "Pending" },
  completed: { bg: "#dcfce7", color: "#15803d", label: "Completed" },
};

function Badge({ style }: { style: { bg: string; color: string; label: string } }) {
  return (
    <span
      className="text-[11px] px-2 py-0.5 rounded-full whitespace-nowrap"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        background: style.bg,
        color: style.color,
      }}
    >
      {style.label}
    </span>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ border: "1px solid #e2e8f0" }}
    >
      <div
        className="px-5 py-4"
        style={{ borderBottom: "1px solid #f1f5f9" }}
      >
        <h2
          className="text-[15px]"
          style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}
        >
          {title}
        </h2>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}

// ─── Task Item ────────────────────────────────────────────────────────────────

function TaskItem({
  task,
  onToggle,
}: {
  task: Task;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center gap-3 py-2.5 group">
      <button
        onClick={onToggle}
        className="size-[18px] rounded flex items-center justify-center shrink-0 transition-colors"
        style={{
          border: task.done ? "none" : "2px solid #cbd5e1",
          background: task.done ? "#8d0000" : "transparent",
        }}
      >
        {task.done && <Check className="size-3 text-white" strokeWidth={3} />}
      </button>
      <div className="flex-1 min-w-0">
        <span
          className="text-[13px]"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: task.done ? "#94a3b8" : "#0f172a",
            textDecoration: task.done ? "line-through" : "none",
          }}
        >
          {task.title}
        </span>
      </div>
      {task.due && (
        <span
          className="text-[11px] px-2 py-0.5 rounded-full shrink-0"
          style={{ fontFamily: "'Inter', sans-serif", background: "#f1f5f9", color: "#64748b" }}
        >
          {new Date(task.due).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
        </span>
      )}
    </div>
  );
}

// ─── Add Task Input ───────────────────────────────────────────────────────────

function AddTaskInput({ onAdd }: { onAdd: (title: string) => void }) {
  const [value, setValue] = useState("");

  const commit = () => {
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue("");
  };

  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-xl mb-3"
      style={{ border: "1.5px dashed #e2e8f0", background: "#fafafa" }}
    >
      <div
        className="size-[18px] rounded shrink-0"
        style={{ border: "2px solid #cbd5e1" }}
      />
      <input
        type="text"
        placeholder="Add a task and press Enter…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && commit()}
        className="flex-1 text-[13px] outline-none bg-transparent"
        style={{ fontFamily: "'Inter', sans-serif", color: "#0f172a" }}
      />
      {value && (
        <button
          onClick={commit}
          className="flex items-center gap-1 text-[12px] px-2.5 py-1 rounded-lg text-white"
          style={{ background: "#8d0000", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
        >
          <Plus className="size-3" strokeWidth={2.5} />
          Add
        </button>
      )}
    </div>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function ProgressBar({ pct, color = "#8d0000" }: { pct: number; color?: string }) {
  return (
    <div
      className="h-2 w-full rounded-full overflow-hidden"
      style={{ background: "#f1f5f9" }}
    >
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${Math.min(pct, 100)}%`, background: color }}
      />
    </div>
  );
}

// ─── Attach Dropdown ──────────────────────────────────────────────────────────

function AttachDropdown<T extends { id: string }>({
  label,
  items,
  renderItem,
  onAttach,
}: {
  label: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onAttach: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-lg"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          color: "#475569",
          border: "1px solid #e2e8f0",
          background: "white",
        }}
      >
        <Link2 className="size-3.5" />
        {label}
        <ChevronRight
          className="size-3.5 transition-transform"
          style={{ transform: open ? "rotate(90deg)" : "none" }}
        />
      </button>
      {open && (
        <div
          className="absolute right-0 top-full mt-1 z-20 rounded-xl overflow-hidden py-1 min-w-[220px]"
          style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
        >
          {items.map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center gap-2 px-4 py-2.5 text-left hover:bg-slate-50 transition-colors"
              onClick={() => {
                onAttach(item.id);
                setOpen(false);
              }}
            >
              <span className="flex-1 text-[13px]" style={{ fontFamily: "'Inter', sans-serif", color: "#0f172a" }}>
                {renderItem(item)}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    projects,
    invoices,
    payments,
    toggleTask,
    addTaskToProject,
    linkInvoiceToProject,
    linkPaymentToProject,
  } = useApp();

  const project = projects.find((p) => p.id === id);

  // ── Not found ──
  if (!project) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-full p-8"
        style={{ background: "#fcfcfc" }}
      >
        <p
          className="text-[24px] mb-6"
          style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}
        >
          Project not found
        </p>
        <button
          onClick={() => navigate("/dashboard/projects")}
          className="flex items-center gap-2 text-[14px] px-4 py-2 rounded-xl"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            color: "#64748b",
            border: "1px solid #e2e8f0",
            background: "white",
          }}
        >
          <ArrowLeft className="size-4" />
          Back to Projects
        </button>
      </div>
    );
  }

  // ── Derived data ──
  const linkedInvoices = invoices.filter((inv) => inv.projectId === id);
  const linkedPayments = payments.filter((pay) => pay.projectId === id);

  const unlinkedInvoices = invoices.filter(
    (inv) => !inv.projectId && !project.invoiceIds.includes(inv.id)
  );
  const unlinkedPayments = payments.filter(
    (pay) => !pay.projectId && !project.paymentIds.includes(pay.id)
  );

  const activeTasks = project.tasks.filter((t) => !t.done);
  const completedTasks = project.tasks.filter((t) => t.done);
  const totalTasks = project.tasks.length;
  const doneTasks = completedTasks.length;
  const progressPct = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  const ss = statusStyle[project.status];

  // ── Handlers ──
  const handleAddTask = (title: string) => {
    const task: Task = {
      id: `task-${Date.now()}`,
      projectId: id ?? null,
      title,
      done: false,
      due: null,
      notes: "",
    };
    addTaskToProject(project.id, task);
  };

  const handleToggleTask = (taskId: string) => {
    toggleTask(project.id, taskId);
  };

  const handleAttachInvoice = (invoiceId: string) => {
    linkInvoiceToProject(invoiceId, project.id);
  };

  const handleAttachPayment = (paymentId: string) => {
    linkPaymentToProject(paymentId, project.id);
  };

  return (
    <div className="p-8" style={{ background: "#fcfcfc", minHeight: "100%" }}>
      {/* Back button */}
      <button
        onClick={() => navigate("/dashboard/projects")}
        className="flex items-center gap-1.5 text-[13px] mb-5 hover:opacity-70 transition-opacity"
        style={{ fontFamily: "'Inter', sans-serif", color: "#64748b", fontWeight: 500 }}
      >
        <ArrowLeft className="size-4" />
        Back to Projects
      </button>

      {/* Header */}
      <div className="mb-6">
        <h1
          className="text-[32px] tracking-[-0.8px] mb-2"
          style={{ fontFamily: "'Archivo Black', 'Archivo', sans-serif", fontWeight: 900, color: "#0f172a" }}
        >
          {project.name}
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <span
            className="text-[14px]"
            style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}
          >
            {project.client}
          </span>
          <Badge style={ss} />
          {project.deadline && (
            <span
              className="text-[13px]"
              style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}
            >
              Due{" "}
              {new Date(project.deadline).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
        </div>
      </div>

      {/* Two-column grid */}
      <div className="grid gap-6" style={{ gridTemplateColumns: "60% 1fr" }}>
        {/* ── LEFT COLUMN: Tasks ── */}
        <div className="flex flex-col gap-5">
          <SectionCard title="Tasks">
            <AddTaskInput onAdd={handleAddTask} />

            {/* Active tasks */}
            {activeTasks.length > 0 && (
              <div className="mb-4">
                <p
                  className="text-[11px] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8", fontWeight: 600 }}
                >
                  Active · {activeTasks.length}
                </p>
                <div
                  className="divide-y"
                  style={{ borderTop: "1px solid #f1f5f9", borderBottom: completedTasks.length > 0 ? "1px solid #f1f5f9" : "none" }}
                >
                  {activeTasks.map((task) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      onToggle={() => handleToggleTask(task.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Completed tasks */}
            {completedTasks.length > 0 && (
              <div>
                <p
                  className="text-[11px] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8", fontWeight: 600 }}
                >
                  Completed · {completedTasks.length}
                </p>
                <div style={{ borderTop: "1px solid #f1f5f9" }}>
                  {completedTasks.map((task) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      onToggle={() => handleToggleTask(task.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {totalTasks === 0 && (
              <p
                className="text-center py-4 text-[13px]"
                style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}
              >
                No tasks yet. Add one above.
              </p>
            )}
          </SectionCard>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col gap-5">
          {/* Project Info */}
          <SectionCard title="Project Info">
            <dl className="space-y-3">
              {[
                {
                  label: "Budget",
                  value: project.budget > 0 ? fmt(project.budget) : "—",
                  bold: true,
                },
                {
                  label: "Deadline",
                  value: project.deadline
                    ? new Date(project.deadline).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "—",
                },
                {
                  label: "Created",
                  value: project.createdAt
                    ? new Date(project.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "—",
                },
              ].map(({ label, value, bold }) => (
                <div key={label} className="flex items-center justify-between">
                  <dt
                    className="text-[13px]"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}
                  >
                    {label}
                  </dt>
                  <dd
                    className="text-[13px]"
                    style={{
                      fontFamily: bold ? "'Archivo', sans-serif" : "'Inter', sans-serif",
                      fontWeight: bold ? 700 : 400,
                      color: "#0f172a",
                    }}
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <button
              onClick={() => navigate(`/dashboard/projects/${id}/edit`)}
              className="mt-4 w-full py-2 rounded-xl text-[13px] transition-colors hover:bg-slate-100"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: "#475569",
                border: "1px solid #e2e8f0",
                background: "#fafafa",
              }}
            >
              Edit Project
            </button>
          </SectionCard>

          {/* Linked Invoices */}
          <SectionCard title="Linked Invoices">
            {linkedInvoices.length > 0 ? (
              <div className="space-y-2 mb-4">
                {linkedInvoices.map((inv) => {
                  const is = invoiceStatusStyle[inv.status];
                  const linkedPayment = payments.find((p) => p.invoiceId === inv.id);
                  return (
                    <div
                      key={inv.id}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                      style={{ border: "1px solid #f1f5f9", background: "#fafafa" }}
                    >
                      <FileText className="size-4 shrink-0" style={{ color: "#94a3b8" }} />
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-[13px]"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#0f172a" }}
                        >
                          {inv.invoiceNumber}
                        </p>
                        <p
                          className="text-[11px]"
                          style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}
                        >
                          {fmt(inv.amount)}
                          {linkedPayment && (
                            <span style={{ color: "#16a34a" }}>
                              {" "}· Payment linked
                            </span>
                          )}
                        </p>
                      </div>
                      <Badge style={is} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <p
                className="text-[13px] mb-4 text-center py-3"
                style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}
              >
                No invoices linked to this project.
              </p>
            )}

            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => navigate("/dashboard/invoices/new")}
                className="flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-lg text-white"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, background: "#8d0000" }}
              >
                <Plus className="size-3.5" strokeWidth={2.5} />
                Create Invoice
              </button>
              <AttachDropdown
                label="Attach Invoice"
                items={unlinkedInvoices}
                renderItem={(inv) => (
                  <span className="flex items-center justify-between gap-2 w-full">
                    <span>{inv.invoiceNumber}</span>
                    <span style={{ color: "#64748b" }}>{fmt(inv.amount)}</span>
                  </span>
                )}
                onAttach={handleAttachInvoice}
              />
            </div>
          </SectionCard>

          {/* Linked Payments */}
          <SectionCard title="Linked Payments">
            {linkedPayments.length > 0 ? (
              <div className="space-y-2 mb-4">
                {linkedPayments.map((pay) => {
                  const ps = paymentStatusStyle[pay.status];
                  const linkedInvoice = invoices.find((inv) => inv.id === pay.invoiceId);
                  return (
                    <div
                      key={pay.id}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                      style={{ border: "1px solid #f1f5f9", background: "#fafafa" }}
                    >
                      <CreditCard className="size-4 shrink-0" style={{ color: "#94a3b8" }} />
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-[13px]"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#0f172a" }}
                        >
                          {pay.client}
                        </p>
                        <p
                          className="text-[11px]"
                          style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}
                        >
                          {fmt(pay.amount)}
                          {linkedInvoice && (
                            <span style={{ color: "#2563eb" }}>
                              {" "}· {linkedInvoice.invoiceNumber}
                            </span>
                          )}
                        </p>
                      </div>
                      <Badge style={ps} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <p
                className="text-[13px] mb-4 text-center py-3"
                style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}
              >
                No payments recorded for this project.
              </p>
            )}

            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => navigate("/dashboard/payments/new")}
                className="flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-lg text-white"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, background: "#8d0000" }}
              >
                <Plus className="size-3.5" strokeWidth={2.5} />
                Record Payment
              </button>
              <AttachDropdown
                label="Attach Payment"
                items={unlinkedPayments}
                renderItem={(pay) => (
                  <span className="flex items-center justify-between gap-2 w-full">
                    <span>{pay.client}</span>
                    <span style={{ color: "#64748b" }}>{fmt(pay.amount)}</span>
                  </span>
                )}
                onAttach={handleAttachPayment}
              />
            </div>
          </SectionCard>

          {/* Progress */}
          <SectionCard title="Progress">
            <div className="mb-3">
              <ProgressBar
                pct={progressPct}
                color={
                  project.status === "at-risk"
                    ? "#dc2626"
                    : project.status === "completed"
                    ? "#16a34a"
                    : "#8d0000"
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <span
                className="text-[13px]"
                style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}
              >
                {doneTasks} of {totalTasks} tasks completed
              </span>
              <span
                className="text-[15px]"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 700,
                  color:
                    project.status === "at-risk"
                      ? "#dc2626"
                      : project.status === "completed"
                      ? "#16a34a"
                      : "#0f172a",
                }}
              >
                {progressPct}%
              </span>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}

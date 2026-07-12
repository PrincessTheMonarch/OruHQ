import { useState } from "react";
import { useNavigate } from "react-router";
import { useApp, fmt, type Task, type Invoice } from "../../context/AppContext";

// ── shared tokens ────────────────────────────────────────────────────────────
const C = {
  primary: "#8d0000",
  bg: "#fcfcfc",
  textDark: "#0f172a",
  textMuted: "#64748b",
  border: "#e2e8f0",
  cardBg: "#ffffff",
  radius: "12px",
};

const inputStyle = (focused: boolean): React.CSSProperties => ({
  width: "100%",
  padding: "10px 14px",
  borderRadius: "8px",
  border: `1.5px solid ${focused ? C.primary : C.border}`,
  outline: "none",
  fontSize: "14px",
  fontFamily: "'Inter', sans-serif",
  color: C.textDark,
  background: "#fff",
  transition: "border-color 0.15s",
  boxSizing: "border-box",
});

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 500,
  color: C.textDark,
  marginBottom: "6px",
  fontFamily: "'Inter', sans-serif",
};

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <label style={labelStyle}>
        {label}
        {required && <span style={{ color: C.primary, marginLeft: "3px" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

function FocusInput({
  type = "text",
  placeholder,
  value,
  onChange,
  min,
}: {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  min?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      min={min}
      style={inputStyle(focused)}
    />
  );
}

function FocusSelect({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ ...inputStyle(focused), appearance: "none", cursor: "pointer" }}
    >
      {children}
    </select>
  );
}

// ── Step progress ─────────────────────────────────────────────────────────────
const STEPS = ["Project Details", "Add Tasks", "Billing", "Review & Create"];

function StepProgress({ current }: { current: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0",
        marginBottom: "32px",
      }}
    >
      {STEPS.map((label, i) => {
        const idx = i + 1;
        const done = idx < current;
        const active = idx === current;
        return (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none" }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: done || active ? C.primary : "#fff",
                  border: `2px solid ${done || active ? C.primary : C.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: done || active ? "#fff" : C.textMuted,
                  fontFamily: "'Inter', sans-serif",
                  transition: "all 0.2s",
                  flexShrink: 0,
                }}
              >
                {done ? "✓" : idx}
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: active ? 600 : 400,
                  color: active ? C.primary : done ? C.textDark : C.textMuted,
                  fontFamily: "'Inter', sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                style={{
                  flex: 1,
                  height: "2px",
                  background: done ? C.primary : C.border,
                  margin: "0 8px",
                  marginBottom: "20px",
                  transition: "background 0.2s",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Buttons ───────────────────────────────────────────────────────────────────
function BtnPrimary({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 24px",
        background: disabled ? "#ccc" : C.primary,
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: 600,
        fontFamily: "'Inter', sans-serif",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "opacity 0.15s",
      }}
      onMouseEnter={(e) => {
        if (!disabled) (e.currentTarget as HTMLButtonElement).style.opacity = "0.88";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.opacity = "1";
      }}
    >
      {children}
    </button>
  );
}

function BtnOutline({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 24px",
        background: "transparent",
        color: C.textDark,
        border: `1.5px solid ${C.border}`,
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: 500,
        fontFamily: "'Inter', sans-serif",
        cursor: "pointer",
        transition: "border-color 0.15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = C.textMuted;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = C.border;
      }}
    >
      {children}
    </button>
  );
}

function SkipLink({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        color: C.textMuted,
        fontSize: "13px",
        cursor: "pointer",
        fontFamily: "'Inter', sans-serif",
        textDecoration: "underline",
        padding: 0,
      }}
    >
      Skip this step
    </button>
  );
}

// ── Step 1: Project Details ───────────────────────────────────────────────────
function Step1({
  name,
  setName,
  client,
  setClient,
  budget,
  setBudget,
  deadline,
  setDeadline,
}: {
  name: string;
  setName: (v: string) => void;
  client: string;
  setClient: (v: string) => void;
  budget: string;
  setBudget: (v: string) => void;
  deadline: string;
  setDeadline: (v: string) => void;
}) {
  return (
    <div>
      <Field label="Project Name" required>
        <FocusInput placeholder="e.g. Brand Refresh for Acme Co." value={name} onChange={setName} />
      </Field>
      <Field label="Client Name">
        <FocusInput placeholder="e.g. Acme Corporation" value={client} onChange={setClient} />
      </Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <Field label="Budget">
          <FocusInput type="number" placeholder="0.00" value={budget} onChange={setBudget} min="0" />
        </Field>
        <Field label="Deadline">
          <FocusInput type="date" value={deadline} onChange={setDeadline} />
        </Field>
      </div>
    </div>
  );
}

// ── Step 2: Add Tasks ─────────────────────────────────────────────────────────
function Step2({
  tasks,
  setTasks,
}: {
  tasks: Array<{ title: string; due: string }>;
  setTasks: (t: Array<{ title: string; due: string }>) => void;
}) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDue, setTaskDue] = useState("");
  const [titleFocused, setTitleFocused] = useState(false);
  const [dueFocused, setDueFocused] = useState(false);

  const addTask = () => {
    if (!taskTitle.trim()) return;
    setTasks([...tasks, { title: taskTitle.trim(), due: taskDue }]);
    setTaskTitle("");
    setTaskDue("");
  };

  const removeTask = (i: number) => {
    setTasks(tasks.filter((_, idx) => idx !== i));
  };

  return (
    <div>
      <p style={{ fontSize: "13px", color: C.textMuted, marginBottom: "20px", fontFamily: "'Inter', sans-serif" }}>
        Add checklist tasks to this project. You can always add more later.
      </p>

      {tasks.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          {tasks.map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 14px",
                borderRadius: "8px",
                border: `1px solid ${C.border}`,
                background: "#fafafa",
                marginBottom: "8px",
              }}
            >
              <div>
                <span style={{ fontSize: "14px", color: C.textDark, fontFamily: "'Inter', sans-serif" }}>
                  {t.title}
                </span>
                {t.due && (
                  <span style={{ fontSize: "12px", color: C.textMuted, marginLeft: "10px", fontFamily: "'Inter', sans-serif" }}>
                    Due {t.due}
                  </span>
                )}
              </div>
              <button
                onClick={() => removeTask(i)}
                style={{
                  background: "none",
                  border: "none",
                  color: C.textMuted,
                  cursor: "pointer",
                  fontSize: "16px",
                  lineHeight: 1,
                  padding: "2px 6px",
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <div
        style={{
          padding: "16px",
          borderRadius: "10px",
          border: `1.5px dashed ${C.border}`,
          background: "#fafafa",
        }}
      >
        <p style={{ fontSize: "12px", fontWeight: 600, color: C.textMuted, marginBottom: "12px", fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Add a task
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "10px", alignItems: "end" }}>
          <div>
            <input
              type="text"
              placeholder="Task title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              onFocus={() => setTitleFocused(true)}
              onBlur={() => setTitleFocused(false)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              style={inputStyle(titleFocused)}
            />
          </div>
          <div>
            <input
              type="date"
              value={taskDue}
              onChange={(e) => setTaskDue(e.target.value)}
              onFocus={() => setDueFocused(true)}
              onBlur={() => setDueFocused(false)}
              style={{ ...inputStyle(dueFocused), width: "150px" }}
            />
          </div>
        </div>
        <button
          onClick={addTask}
          disabled={!taskTitle.trim()}
          style={{
            marginTop: "10px",
            padding: "8px 18px",
            background: taskTitle.trim() ? C.primary : "#e2e8f0",
            color: taskTitle.trim() ? "#fff" : C.textMuted,
            border: "none",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            cursor: taskTitle.trim() ? "pointer" : "not-allowed",
          }}
        >
          + Add Task
        </button>
      </div>
    </div>
  );
}

// ── Step 3: Billing ───────────────────────────────────────────────────────────
type BillingMode = "existing" | "new" | "skip";

function Step3({
  billingMode,
  setBillingMode,
  existingInvoiceId,
  setExistingInvoiceId,
  newInvoiceAmount,
  setNewInvoiceAmount,
  newInvoiceDue,
  setNewInvoiceDue,
  invoices,
}: {
  billingMode: BillingMode;
  setBillingMode: (m: BillingMode) => void;
  existingInvoiceId: string;
  setExistingInvoiceId: (v: string) => void;
  newInvoiceAmount: string;
  setNewInvoiceAmount: (v: string) => void;
  newInvoiceDue: string;
  setNewInvoiceDue: (v: string) => void;
  invoices: Invoice[];
}) {
  const [amtFocused, setAmtFocused] = useState(false);
  const [dueFocused, setDueFocused] = useState(false);

  const optionCard = (mode: BillingMode, title: string, description: string) => {
    const active = billingMode === mode;
    return (
      <div
        onClick={() => setBillingMode(mode)}
        style={{
          padding: "14px 16px",
          borderRadius: "10px",
          border: `2px solid ${active ? C.primary : C.border}`,
          background: active ? "#fff5f5" : "#fff",
          cursor: "pointer",
          marginBottom: "10px",
          transition: "border-color 0.15s, background 0.15s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              border: `2px solid ${active ? C.primary : C.border}`,
              background: active ? C.primary : "transparent",
              flexShrink: 0,
            }}
          />
          <div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: C.textDark, fontFamily: "'Inter', sans-serif" }}>
              {title}
            </div>
            <div style={{ fontSize: "12px", color: C.textMuted, fontFamily: "'Inter', sans-serif", marginTop: "2px" }}>
              {description}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {optionCard("existing", "Attach existing invoice", "Link this project to an invoice you've already created")}
      {billingMode === "existing" && (
        <div style={{ marginLeft: "16px", marginBottom: "14px" }}>
          <FocusSelect value={existingInvoiceId} onChange={setExistingInvoiceId}>
            <option value="">— Select an invoice —</option>
            {invoices.map((inv) => (
              <option key={inv.id} value={inv.id}>
                {inv.invoiceNumber} · {inv.client} · {fmt(inv.amount)}
              </option>
            ))}
          </FocusSelect>
          {invoices.length === 0 && (
            <p style={{ fontSize: "12px", color: C.textMuted, marginTop: "6px", fontFamily: "'Inter', sans-serif" }}>
              No invoices yet. Create one below or skip.
            </p>
          )}
        </div>
      )}

      {optionCard("new", "Create new invoice", "Create an invoice and attach it directly to this project")}
      {billingMode === "new" && (
        <div
          style={{
            marginLeft: "16px",
            marginBottom: "14px",
            padding: "14px",
            borderRadius: "8px",
            border: `1px solid ${C.border}`,
            background: "#fafafa",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={{ ...labelStyle, fontSize: "12px" }}>Amount *</label>
              <input
                type="number"
                placeholder="0.00"
                value={newInvoiceAmount}
                onChange={(e) => setNewInvoiceAmount(e.target.value)}
                onFocus={() => setAmtFocused(true)}
                onBlur={() => setAmtFocused(false)}
                style={inputStyle(amtFocused)}
                min="0"
              />
            </div>
            <div>
              <label style={{ ...labelStyle, fontSize: "12px" }}>Due Date</label>
              <input
                type="date"
                value={newInvoiceDue}
                onChange={(e) => setNewInvoiceDue(e.target.value)}
                onFocus={() => setDueFocused(true)}
                onBlur={() => setDueFocused(false)}
                style={inputStyle(dueFocused)}
              />
            </div>
          </div>
        </div>
      )}

      {optionCard("skip", "Skip for now", "You can attach billing information later")}
    </div>
  );
}

// ── Step 4: Review ────────────────────────────────────────────────────────────
function ReviewRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "10px 0",
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <span style={{ fontSize: "13px", color: C.textMuted, fontFamily: "'Inter', sans-serif", minWidth: "120px" }}>
        {label}
      </span>
      <span style={{ fontSize: "13px", color: C.textDark, fontFamily: "'Inter', sans-serif", textAlign: "right" }}>
        {value || <span style={{ color: C.textMuted }}>—</span>}
      </span>
    </div>
  );
}

function Step4({
  name,
  client,
  budget,
  deadline,
  tasks,
  billingMode,
  existingInvoiceId,
  newInvoiceAmount,
  newInvoiceDue,
  invoices,
}: {
  name: string;
  client: string;
  budget: string;
  deadline: string;
  tasks: Array<{ title: string; due: string }>;
  billingMode: BillingMode;
  existingInvoiceId: string;
  newInvoiceAmount: string;
  newInvoiceDue: string;
  invoices: Invoice[];
}) {
  const linkedInvoice = invoices.find((inv) => inv.id === existingInvoiceId);

  return (
    <div>
      <div
        style={{
          borderRadius: "10px",
          border: `1px solid ${C.border}`,
          overflow: "hidden",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            padding: "12px 16px",
            background: "#fafafa",
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <span style={{ fontSize: "12px", fontWeight: 600, color: C.textMuted, fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Project Details
          </span>
        </div>
        <div style={{ padding: "0 16px" }}>
          <ReviewRow label="Name" value={name} />
          <ReviewRow label="Client" value={client} />
          <ReviewRow label="Budget" value={budget ? fmt(parseFloat(budget)) : null} />
          <ReviewRow label="Deadline" value={deadline} />
        </div>
      </div>

      <div
        style={{
          borderRadius: "10px",
          border: `1px solid ${C.border}`,
          overflow: "hidden",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            padding: "12px 16px",
            background: "#fafafa",
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <span style={{ fontSize: "12px", fontWeight: 600, color: C.textMuted, fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Tasks ({tasks.length})
          </span>
        </div>
        <div style={{ padding: "12px 16px" }}>
          {tasks.length === 0 ? (
            <p style={{ fontSize: "13px", color: C.textMuted, fontFamily: "'Inter', sans-serif" }}>No tasks added</p>
          ) : (
            tasks.map((t, i) => (
              <div key={i} style={{ fontSize: "13px", color: C.textDark, fontFamily: "'Inter', sans-serif", padding: "4px 0", display: "flex", gap: "8px" }}>
                <span style={{ color: C.primary }}>•</span>
                <span>{t.title}{t.due ? <span style={{ color: C.textMuted }}> — due {t.due}</span> : ""}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <div
        style={{
          borderRadius: "10px",
          border: `1px solid ${C.border}`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "12px 16px",
            background: "#fafafa",
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <span style={{ fontSize: "12px", fontWeight: 600, color: C.textMuted, fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Billing
          </span>
        </div>
        <div style={{ padding: "0 16px" }}>
          {billingMode === "skip" && (
            <ReviewRow label="Invoice" value={<span style={{ color: C.textMuted }}>Skipped</span>} />
          )}
          {billingMode === "existing" && (
            <ReviewRow
              label="Invoice"
              value={linkedInvoice ? `${linkedInvoice.invoiceNumber} · ${fmt(linkedInvoice.amount)}` : "None selected"}
            />
          )}
          {billingMode === "new" && (
            <>
              <ReviewRow label="New Invoice" value={newInvoiceAmount ? fmt(parseFloat(newInvoiceAmount)) : "No amount"} />
              <ReviewRow label="Due Date" value={newInvoiceDue} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function CreateProjectFlow() {
  const { addProject, addInvoice, linkInvoiceToProject, nextInvoiceNumber, invoices } = useApp();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [created, setCreated] = useState(false);
  const [createdId, setCreatedId] = useState("");

  // Step 1
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");

  // Step 2
  const [tasks, setTasks] = useState<Array<{ title: string; due: string }>>([]);

  // Step 3
  const [billingMode, setBillingMode] = useState<BillingMode>("skip");
  const [existingInvoiceId, setExistingInvoiceId] = useState("");
  const [newInvoiceAmount, setNewInvoiceAmount] = useState("");
  const [newInvoiceDue, setNewInvoiceDue] = useState("");

  const canNext1 = name.trim().length > 0;

  const handleCreate = () => {
    const projectId = Date.now().toString();
    const taskObjects: Task[] = tasks.map((t, i) => ({
      id: `${projectId}-task-${i}`,
      projectId,
      title: t.title,
      done: false,
      due: t.due || null,
      notes: "",
    }));

    addProject({
      id: projectId,
      name,
      client,
      budget: budget ? parseFloat(budget) : 0,
      deadline,
      status: "active",
      tasks: taskObjects,
      invoiceIds: [],
      paymentIds: [],
      createdAt: new Date().toISOString(),
    });

    if (billingMode === "new" && newInvoiceAmount) {
      const invoiceId = (Date.now() + 1).toString();
      addInvoice({
        id: invoiceId,
        invoiceNumber: nextInvoiceNumber(),
        client,
        projectId,
        amount: parseFloat(newInvoiceAmount),
        status: "draft",
        due: newInvoiceDue,
        issued: new Date().toISOString().split("T")[0],
        paymentId: null,
        notes: "",
      });
    } else if (billingMode === "existing" && existingInvoiceId) {
      linkInvoiceToProject(existingInvoiceId, projectId);
    }

    setCreatedId(projectId);
    setCreated(true);
  };

  const resetFlow = () => {
    setStep(1);
    setCreated(false);
    setCreatedId("");
    setName("");
    setClient("");
    setBudget("");
    setDeadline("");
    setTasks([]);
    setBillingMode("skip");
    setExistingInvoiceId("");
    setNewInvoiceAmount("");
    setNewInvoiceDue("");
  };

  if (created) {
    return (
      <div style={{ background: C.bg, minHeight: "100vh", padding: "40px 24px", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
        <div
          style={{
            background: C.cardBg,
            borderRadius: C.radius,
            border: `1px solid ${C.border}`,
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            padding: "48px 40px",
            width: "100%",
            maxWidth: "520px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#f0fdf4",
              border: "2px solid #22c55e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "24px",
            }}
          >
            ✓
          </div>
          <h2 style={{ fontFamily: "'Archivo', sans-serif", fontSize: "22px", fontWeight: 700, color: C.textDark, marginBottom: "8px" }}>
            Project Created!
          </h2>
          <p style={{ fontSize: "14px", color: C.textMuted, fontFamily: "'Inter', sans-serif", marginBottom: "32px" }}>
            <strong style={{ color: C.textDark }}>{name}</strong> has been added to your projects.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <BtnPrimary onClick={() => navigate("/dashboard/projects")}>
              View Projects
            </BtnPrimary>
            <BtnOutline onClick={resetFlow}>Create Another</BtnOutline>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: C.bg, minHeight: "100vh", padding: "40px 24px", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
      <div
        style={{
          background: C.cardBg,
          borderRadius: C.radius,
          border: `1px solid ${C.border}`,
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          padding: "40px",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
          <h1
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: "24px",
              fontWeight: 700,
              color: C.textDark,
              margin: 0,
              marginBottom: "4px",
            }}
          >
            Create New Project
          </h1>
          <p style={{ fontSize: "14px", color: C.textMuted, fontFamily: "'Inter', sans-serif", margin: 0 }}>
            Fill in the details to get started
          </p>
        </div>

        <StepProgress current={step} />

        {/* Step title */}
        <div style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              color: C.textDark,
              margin: 0,
              marginBottom: "4px",
            }}
          >
            {STEPS[step - 1]}
          </h2>
          <div style={{ height: "2px", width: "40px", background: C.primary, borderRadius: "2px" }} />
        </div>

        {/* Step content */}
        {step === 1 && (
          <Step1
            name={name} setName={setName}
            client={client} setClient={setClient}
            budget={budget} setBudget={setBudget}
            deadline={deadline} setDeadline={setDeadline}
          />
        )}
        {step === 2 && <Step2 tasks={tasks} setTasks={setTasks} />}
        {step === 3 && (
          <Step3
            billingMode={billingMode} setBillingMode={setBillingMode}
            existingInvoiceId={existingInvoiceId} setExistingInvoiceId={setExistingInvoiceId}
            newInvoiceAmount={newInvoiceAmount} setNewInvoiceAmount={setNewInvoiceAmount}
            newInvoiceDue={newInvoiceDue} setNewInvoiceDue={setNewInvoiceDue}
            invoices={invoices}
          />
        )}
        {step === 4 && (
          <Step4
            name={name} client={client} budget={budget} deadline={deadline}
            tasks={tasks} billingMode={billingMode}
            existingInvoiceId={existingInvoiceId}
            newInvoiceAmount={newInvoiceAmount} newInvoiceDue={newInvoiceDue}
            invoices={invoices}
          />
        )}

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "32px",
            paddingTop: "24px",
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <div>
            {step > 1 && <BtnOutline onClick={() => setStep(step - 1)}>← Back</BtnOutline>}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {step === 2 && <SkipLink onClick={() => setStep(3)} />}
            {step === 3 && <SkipLink onClick={() => { setBillingMode("skip"); setStep(4); }} />}
            {step < 4 && (
              <BtnPrimary
                onClick={() => setStep(step + 1)}
                disabled={step === 1 && !canNext1}
              >
                Next →
              </BtnPrimary>
            )}
            {step === 4 && (
              <BtnPrimary onClick={handleCreate}>
                Create Project
              </BtnPrimary>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

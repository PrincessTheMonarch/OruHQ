import { useState } from "react";
import { useNavigate } from "react-router";
import { useApp, fmt, type Invoice, type Project } from "../../context/AppContext";

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

function FocusTextarea({
  placeholder,
  value,
  onChange,
  rows = 3,
}: {
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      rows={rows}
      style={{
        ...inputStyle(focused),
        resize: "vertical",
        lineHeight: "1.5",
      }}
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
const STEPS = ["Payment Details", "Connections", "Review & Create"];

function StepProgress({ current }: { current: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "32px" }}>
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

function SkipLink({ onClick, label = "Skip this step" }: { onClick: () => void; label?: string }) {
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
      {label}
    </button>
  );
}

// ── Step 1: Payment Details ───────────────────────────────────────────────────
function Step1({
  paymentClient,
  setPaymentClient,
  amount,
  setAmount,
  date,
  setDate,
  notes,
  setNotes,
}: {
  paymentClient: string;
  setPaymentClient: (v: string) => void;
  amount: string;
  setAmount: (v: string) => void;
  date: string;
  setDate: (v: string) => void;
  notes: string;
  setNotes: (v: string) => void;
}) {
  return (
    <div>
      <Field label="Client Name" required>
        <FocusInput placeholder="e.g. Acme Corporation" value={paymentClient} onChange={setPaymentClient} />
      </Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <Field label="Amount" required>
          <FocusInput type="number" placeholder="0.00" value={amount} onChange={setAmount} min="0" />
        </Field>
        <Field label="Payment Date" required>
          <FocusInput type="date" value={date} onChange={setDate} />
        </Field>
      </div>
      <Field label="Notes">
        <FocusTextarea placeholder="Reference number, payment method, or other details..." value={notes} onChange={setNotes} />
      </Field>
    </div>
  );
}

// ── Step 2: Connections ───────────────────────────────────────────────────────
type InvoiceMode = "existing" | "new" | "skip";
type ProjectLinkMode = "existing" | "skip";

function Step2({
  invoiceMode,
  setInvoiceMode,
  linkedInvoiceId,
  setLinkedInvoiceId,
  newInvoiceAmount,
  setNewInvoiceAmount,
  newInvoiceDue,
  setNewInvoiceDue,
  projectLinkMode,
  setProjectLinkMode,
  linkedProjectId,
  setLinkedProjectId,
  invoices,
  projects,
  paymentClient,
}: {
  invoiceMode: InvoiceMode;
  setInvoiceMode: (m: InvoiceMode) => void;
  linkedInvoiceId: string;
  setLinkedInvoiceId: (v: string) => void;
  newInvoiceAmount: string;
  setNewInvoiceAmount: (v: string) => void;
  newInvoiceDue: string;
  setNewInvoiceDue: (v: string) => void;
  projectLinkMode: ProjectLinkMode;
  setProjectLinkMode: (m: ProjectLinkMode) => void;
  linkedProjectId: string;
  setLinkedProjectId: (v: string) => void;
  invoices: Invoice[];
  projects: Project[];
  paymentClient: string;
}) {
  const [amtFocused, setAmtFocused] = useState(false);
  const [dueFocused, setDueFocused] = useState(false);

  const invoiceOptionCard = (mode: InvoiceMode, title: string, description: string) => {
    const active = invoiceMode === mode;
    return (
      <div
        onClick={() => setInvoiceMode(mode)}
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

  const projectOptionCard = (mode: ProjectLinkMode, title: string, description: string) => {
    const active = projectLinkMode === mode;
    return (
      <div
        onClick={() => setProjectLinkMode(mode)}
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
      {/* Invoice section */}
      <div style={{ marginBottom: "28px" }}>
        <h3
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: "15px",
            fontWeight: 600,
            color: C.textDark,
            marginBottom: "12px",
          }}
        >
          Invoice Link
        </h3>

        {invoiceOptionCard("existing", "Link to existing invoice", "Mark a sent invoice as paid")}
        {invoiceMode === "existing" && (
          <div style={{ marginLeft: "16px", marginBottom: "14px" }}>
            <FocusSelect value={linkedInvoiceId} onChange={setLinkedInvoiceId}>
              <option value="">— Select an invoice —</option>
              {invoices.map((inv) => (
                <option key={inv.id} value={inv.id}>
                  {inv.invoiceNumber} · {inv.client} · {fmt(inv.amount)}
                </option>
              ))}
            </FocusSelect>
            {invoices.length === 0 && (
              <p style={{ fontSize: "12px", color: C.textMuted, marginTop: "6px", fontFamily: "'Inter', sans-serif" }}>
                No invoices found. Create one below or skip.
              </p>
            )}
          </div>
        )}

        {invoiceOptionCard("new", "Create new invoice", "Create an invoice for this payment")}
        {invoiceMode === "new" && (
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
                <label style={{ ...labelStyle, fontSize: "12px" }}>Amount</label>
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
            <p style={{ fontSize: "12px", color: C.textMuted, marginTop: "8px", fontFamily: "'Inter', sans-serif" }}>
              Invoice will be created for <strong>{paymentClient || "this client"}</strong> and marked as paid.
            </p>
          </div>
        )}

        {invoiceOptionCard("skip", "Skip invoice link", "Record payment without an invoice")}
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: C.border, marginBottom: "24px" }} />

      {/* Project section */}
      <div>
        <h3
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: "15px",
            fontWeight: 600,
            color: C.textDark,
            marginBottom: "12px",
          }}
        >
          Project Link
        </h3>

        {projectOptionCard("existing", "Link to a project", "Associate this payment with a project")}
        {projectLinkMode === "existing" && (
          <div style={{ marginLeft: "16px", marginBottom: "14px" }}>
            <FocusSelect value={linkedProjectId} onChange={setLinkedProjectId}>
              <option value="">— Select a project —</option>
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}{p.client ? ` · ${p.client}` : ""}
                </option>
              ))}
            </FocusSelect>
            {projects.length === 0 && (
              <p style={{ fontSize: "12px", color: C.textMuted, marginTop: "6px", fontFamily: "'Inter', sans-serif" }}>
                No projects found.
              </p>
            )}
          </div>
        )}

        {projectOptionCard("skip", "Skip project link", "You can link to a project later")}
      </div>
    </div>
  );
}

// ── Step 3: Review ────────────────────────────────────────────────────────────
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
      <span style={{ fontSize: "13px", color: C.textDark, fontFamily: "'Inter', sans-serif", textAlign: "right", maxWidth: "280px" }}>
        {value || <span style={{ color: C.textMuted }}>—</span>}
      </span>
    </div>
  );
}

function Step3({
  paymentClient,
  amount,
  date,
  notes,
  invoiceMode,
  linkedInvoiceId,
  newInvoiceAmount,
  newInvoiceDue,
  projectLinkMode,
  linkedProjectId,
  invoices,
  projects,
}: {
  paymentClient: string;
  amount: string;
  date: string;
  notes: string;
  invoiceMode: InvoiceMode;
  linkedInvoiceId: string;
  newInvoiceAmount: string;
  newInvoiceDue: string;
  projectLinkMode: ProjectLinkMode;
  linkedProjectId: string;
  invoices: Invoice[];
  projects: Project[];
}) {
  const linkedInvoice = invoices.find((inv) => inv.id === linkedInvoiceId);
  const linkedProject = projects.find((p) => p.id === linkedProjectId);

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
        <div style={{ padding: "12px 16px", background: "#fafafa", borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontSize: "12px", fontWeight: 600, color: C.textMuted, fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Payment Details
          </span>
        </div>
        <div style={{ padding: "0 16px" }}>
          <ReviewRow label="Client" value={paymentClient} />
          <ReviewRow label="Amount" value={amount ? fmt(parseFloat(amount)) : null} />
          <ReviewRow label="Date" value={date} />
          {notes && <ReviewRow label="Notes" value={notes} />}
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
        <div style={{ padding: "12px 16px", background: "#fafafa", borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontSize: "12px", fontWeight: 600, color: C.textMuted, fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Invoice
          </span>
        </div>
        <div style={{ padding: "0 16px" }}>
          {invoiceMode === "skip" && (
            <ReviewRow label="Invoice" value={<span style={{ color: C.textMuted }}>Not linked</span>} />
          )}
          {invoiceMode === "existing" && (
            <ReviewRow
              label="Invoice"
              value={linkedInvoice ? `${linkedInvoice.invoiceNumber} · ${fmt(linkedInvoice.amount)}` : "None selected"}
            />
          )}
          {invoiceMode === "new" && (
            <>
              <ReviewRow label="New Invoice" value={newInvoiceAmount ? fmt(parseFloat(newInvoiceAmount)) : "No amount set"} />
              <ReviewRow label="Due Date" value={newInvoiceDue} />
            </>
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
        <div style={{ padding: "12px 16px", background: "#fafafa", borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontSize: "12px", fontWeight: 600, color: C.textMuted, fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Project
          </span>
        </div>
        <div style={{ padding: "0 16px" }}>
          {projectLinkMode === "skip" && (
            <ReviewRow label="Project" value={<span style={{ color: C.textMuted }}>Not linked</span>} />
          )}
          {projectLinkMode === "existing" && (
            <ReviewRow
              label="Project"
              value={linkedProject ? linkedProject.name : "None selected"}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function CreatePaymentFlow() {
  const {
    addPayment,
    addInvoice,
    linkPaymentToInvoice,
    linkPaymentToProject,
    nextInvoiceNumber,
    invoices,
    projects,
  } = useApp();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [created, setCreated] = useState(false);

  // Step 1
  const [paymentClient, setPaymentClient] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [notes, setNotes] = useState("");

  // Step 2
  const [invoiceMode, setInvoiceMode] = useState<InvoiceMode>("skip");
  const [linkedInvoiceId, setLinkedInvoiceId] = useState("");
  const [newInvoiceAmount, setNewInvoiceAmount] = useState("");
  const [newInvoiceDue, setNewInvoiceDue] = useState("");
  const [projectLinkMode, setProjectLinkMode] = useState<ProjectLinkMode>("skip");
  const [linkedProjectId, setLinkedProjectId] = useState("");

  const canNext1 = paymentClient.trim() && amount.trim() && date.trim();

  const handleCreate = () => {
    const paymentId = Date.now().toString();
    let resolvedInvoiceId: string | null = null;
    let resolvedProjectId: string | null = null;

    if (invoiceMode === "existing" && linkedInvoiceId) {
      resolvedInvoiceId = linkedInvoiceId;
    } else if (invoiceMode === "new") {
      const invId = (Date.now() + 1).toString();
      addInvoice({
        id: invId,
        invoiceNumber: nextInvoiceNumber(),
        client: paymentClient,
        projectId: projectLinkMode === "existing" && linkedProjectId ? linkedProjectId : null,
        amount: newInvoiceAmount ? parseFloat(newInvoiceAmount) : parseFloat(amount),
        status: "paid",
        due: newInvoiceDue,
        issued: new Date().toISOString().split("T")[0],
        paymentId: paymentId,
        notes: "",
      });
      resolvedInvoiceId = invId;
    }

    if (projectLinkMode === "existing" && linkedProjectId) {
      resolvedProjectId = linkedProjectId;
    }

    addPayment({
      id: paymentId,
      client: paymentClient,
      amount: parseFloat(amount),
      invoiceId: resolvedInvoiceId,
      projectId: resolvedProjectId,
      status: "completed",
      date,
      notes,
    });

    if (resolvedInvoiceId && invoiceMode === "existing") {
      linkPaymentToInvoice(paymentId, resolvedInvoiceId);
    }

    if (resolvedProjectId) {
      linkPaymentToProject(paymentId, resolvedProjectId);
    }

    setCreated(true);
  };

  const resetFlow = () => {
    setStep(1);
    setCreated(false);
    setPaymentClient("");
    setAmount("");
    setDate(new Date().toISOString().split("T")[0]);
    setNotes("");
    setInvoiceMode("skip");
    setLinkedInvoiceId("");
    setNewInvoiceAmount("");
    setNewInvoiceDue("");
    setProjectLinkMode("skip");
    setLinkedProjectId("");
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
            Payment Recorded!
          </h2>
          <p style={{ fontSize: "14px", color: C.textMuted, fontFamily: "'Inter', sans-serif", marginBottom: "32px" }}>
            Payment of <strong style={{ color: C.textDark }}>{fmt(parseFloat(amount || "0"))}</strong> from <strong style={{ color: C.textDark }}>{paymentClient}</strong> has been recorded.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <BtnPrimary onClick={() => navigate("/dashboard/payments")}>
              View Payments
            </BtnPrimary>
            <BtnOutline onClick={resetFlow}>Record Another</BtnOutline>
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
            Record Payment
          </h1>
          <p style={{ fontSize: "14px", color: C.textMuted, fontFamily: "'Inter', sans-serif", margin: 0 }}>
            Log an incoming payment and link it to invoices or projects
          </p>
        </div>

        <StepProgress current={step} />

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

        {step === 1 && (
          <Step1
            paymentClient={paymentClient} setPaymentClient={setPaymentClient}
            amount={amount} setAmount={setAmount}
            date={date} setDate={setDate}
            notes={notes} setNotes={setNotes}
          />
        )}
        {step === 2 && (
          <Step2
            invoiceMode={invoiceMode} setInvoiceMode={setInvoiceMode}
            linkedInvoiceId={linkedInvoiceId} setLinkedInvoiceId={setLinkedInvoiceId}
            newInvoiceAmount={newInvoiceAmount} setNewInvoiceAmount={setNewInvoiceAmount}
            newInvoiceDue={newInvoiceDue} setNewInvoiceDue={setNewInvoiceDue}
            projectLinkMode={projectLinkMode} setProjectLinkMode={setProjectLinkMode}
            linkedProjectId={linkedProjectId} setLinkedProjectId={setLinkedProjectId}
            invoices={invoices}
            projects={projects}
            paymentClient={paymentClient}
          />
        )}
        {step === 3 && (
          <Step3
            paymentClient={paymentClient} amount={amount} date={date} notes={notes}
            invoiceMode={invoiceMode}
            linkedInvoiceId={linkedInvoiceId}
            newInvoiceAmount={newInvoiceAmount} newInvoiceDue={newInvoiceDue}
            projectLinkMode={projectLinkMode}
            linkedProjectId={linkedProjectId}
            invoices={invoices}
            projects={projects}
          />
        )}

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
            {step < 3 && (
              <BtnPrimary
                onClick={() => setStep(step + 1)}
                disabled={step === 1 && !canNext1}
              >
                Next →
              </BtnPrimary>
            )}
            {step === 3 && (
              <BtnPrimary onClick={handleCreate}>
                Record Payment
              </BtnPrimary>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

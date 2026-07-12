import { useState } from "react";
import { useNavigate } from "react-router";
import { useApp, fmt, type Project } from "../../context/AppContext";

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
const STEPS = ["Invoice Details", "Project Connection", "Review & Create"];

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

// ── Step 1: Invoice Details ───────────────────────────────────────────────────
function Step1({
  invoiceClient,
  setInvoiceClient,
  amount,
  setAmount,
  issued,
  setIssued,
  due,
  setDue,
  notes,
  setNotes,
}: {
  invoiceClient: string;
  setInvoiceClient: (v: string) => void;
  amount: string;
  setAmount: (v: string) => void;
  issued: string;
  setIssued: (v: string) => void;
  due: string;
  setDue: (v: string) => void;
  notes: string;
  setNotes: (v: string) => void;
}) {
  return (
    <div>
      <Field label="Client Name" required>
        <FocusInput placeholder="e.g. Acme Corporation" value={invoiceClient} onChange={setInvoiceClient} />
      </Field>
      <Field label="Amount" required>
        <FocusInput type="number" placeholder="0.00" value={amount} onChange={setAmount} min="0" />
      </Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <Field label="Issue Date">
          <FocusInput type="date" value={issued} onChange={setIssued} />
        </Field>
        <Field label="Due Date">
          <FocusInput type="date" value={due} onChange={setDue} />
        </Field>
      </div>
      <Field label="Notes">
        <FocusTextarea placeholder="Any additional details about this invoice..." value={notes} onChange={setNotes} />
      </Field>
    </div>
  );
}

// ── Step 2: Project Connection ────────────────────────────────────────────────
type ProjectMode = "existing" | "new" | "skip";

function Step2({
  projectMode,
  setProjectMode,
  existingProjectId,
  setExistingProjectId,
  newProjectName,
  setNewProjectName,
  newProjectClient,
  setNewProjectClient,
  projects,
}: {
  projectMode: ProjectMode;
  setProjectMode: (m: ProjectMode) => void;
  existingProjectId: string;
  setExistingProjectId: (v: string) => void;
  newProjectName: string;
  setNewProjectName: (v: string) => void;
  newProjectClient: string;
  setNewProjectClient: (v: string) => void;
  projects: Project[];
}) {
  const [nameFocused, setNameFocused] = useState(false);
  const [clientFocused, setClientFocused] = useState(false);

  const optionCard = (mode: ProjectMode, title: string, description: string) => {
    const active = projectMode === mode;
    return (
      <div
        onClick={() => setProjectMode(mode)}
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
      <p style={{ fontSize: "13px", color: C.textMuted, marginBottom: "20px", fontFamily: "'Inter', sans-serif" }}>
        Optionally connect this invoice to a project for better tracking.
      </p>

      {optionCard("existing", "Attach to existing project", "Link to a project you've already created")}
      {projectMode === "existing" && (
        <div style={{ marginLeft: "16px", marginBottom: "14px" }}>
          <FocusSelect value={existingProjectId} onChange={setExistingProjectId}>
            <option value="">— Select a project —</option>
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}{p.client ? ` · ${p.client}` : ""}
              </option>
            ))}
          </FocusSelect>
          {projects.length === 0 && (
            <p style={{ fontSize: "12px", color: C.textMuted, marginTop: "6px", fontFamily: "'Inter', sans-serif" }}>
              No projects yet. Create one below or skip.
            </p>
          )}
        </div>
      )}

      {optionCard("new", "Create new project", "Create a project and link this invoice to it")}
      {projectMode === "new" && (
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
          <div style={{ marginBottom: "12px" }}>
            <label style={{ ...labelStyle, fontSize: "12px" }}>Project Name *</label>
            <input
              type="text"
              placeholder="e.g. Website Redesign"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              style={inputStyle(nameFocused)}
            />
          </div>
          <div>
            <label style={{ ...labelStyle, fontSize: "12px" }}>Client</label>
            <input
              type="text"
              placeholder="Client name"
              value={newProjectClient}
              onChange={(e) => setNewProjectClient(e.target.value)}
              onFocus={() => setClientFocused(true)}
              onBlur={() => setClientFocused(false)}
              style={inputStyle(clientFocused)}
            />
          </div>
        </div>
      )}

      {optionCard("skip", "Skip for now", "You can link to a project later")}
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
  invoiceClient,
  amount,
  issued,
  due,
  notes,
  projectMode,
  existingProjectId,
  newProjectName,
  newProjectClient,
  projects,
}: {
  invoiceClient: string;
  amount: string;
  issued: string;
  due: string;
  notes: string;
  projectMode: ProjectMode;
  existingProjectId: string;
  newProjectName: string;
  newProjectClient: string;
  projects: Project[];
}) {
  const linkedProject = projects.find((p) => p.id === existingProjectId);

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
            Invoice Details
          </span>
        </div>
        <div style={{ padding: "0 16px" }}>
          <ReviewRow label="Client" value={invoiceClient} />
          <ReviewRow label="Amount" value={amount ? fmt(parseFloat(amount)) : null} />
          <ReviewRow label="Issue Date" value={issued} />
          <ReviewRow label="Due Date" value={due} />
          {notes && <ReviewRow label="Notes" value={notes} />}
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
            Project Connection
          </span>
        </div>
        <div style={{ padding: "0 16px" }}>
          {projectMode === "skip" && (
            <ReviewRow label="Project" value={<span style={{ color: C.textMuted }}>Not linked</span>} />
          )}
          {projectMode === "existing" && (
            <ReviewRow
              label="Project"
              value={linkedProject ? linkedProject.name : "None selected"}
            />
          )}
          {projectMode === "new" && (
            <>
              <ReviewRow label="New Project" value={newProjectName || "Unnamed"} />
              {newProjectClient && <ReviewRow label="Client" value={newProjectClient} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function CreateInvoiceFlow() {
  const { addInvoice, addProject, linkInvoiceToProject, nextInvoiceNumber, projects } = useApp();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [created, setCreated] = useState(false);
  const [createdNumber, setCreatedNumber] = useState("");

  // Step 1
  const [invoiceClient, setInvoiceClient] = useState("");
  const [amount, setAmount] = useState("");
  const [issued, setIssued] = useState(new Date().toISOString().split("T")[0]);
  const [due, setDue] = useState("");
  const [notes, setNotes] = useState("");

  // Step 2
  const [projectMode, setProjectMode] = useState<ProjectMode>("skip");
  const [existingProjectId, setExistingProjectId] = useState("");
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectClient, setNewProjectClient] = useState("");

  const canNext1 = invoiceClient.trim() && amount.trim();

  const handleCreate = () => {
    let projectId: string | null = null;

    if (projectMode === "existing" && existingProjectId) {
      projectId = existingProjectId;
    } else if (projectMode === "new" && newProjectName.trim()) {
      projectId = Date.now().toString();
      addProject({
        id: projectId,
        name: newProjectName,
        client: newProjectClient || invoiceClient,
        budget: 0,
        deadline: "",
        status: "active",
        tasks: [],
        invoiceIds: [],
        paymentIds: [],
        createdAt: new Date().toISOString(),
      });
    }

    const invoiceId = (Date.now() + 2).toString();
    const invNumber = nextInvoiceNumber();

    addInvoice({
      id: invoiceId,
      invoiceNumber: invNumber,
      client: invoiceClient,
      projectId,
      amount: parseFloat(amount),
      status: "draft",
      due,
      issued,
      paymentId: null,
      notes,
    });

    if (projectId && projectMode === "existing") {
      linkInvoiceToProject(invoiceId, projectId);
    }

    setCreatedNumber(invNumber);
    setCreated(true);
  };

  const resetFlow = () => {
    setStep(1);
    setCreated(false);
    setCreatedNumber("");
    setInvoiceClient("");
    setAmount("");
    setIssued(new Date().toISOString().split("T")[0]);
    setDue("");
    setNotes("");
    setProjectMode("skip");
    setExistingProjectId("");
    setNewProjectName("");
    setNewProjectClient("");
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
            Invoice Created!
          </h2>
          <p style={{ fontSize: "14px", color: C.textMuted, fontFamily: "'Inter', sans-serif", marginBottom: "32px" }}>
            Invoice <strong style={{ color: C.textDark }}>{createdNumber}</strong> has been saved as a draft.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <BtnPrimary onClick={() => navigate("/dashboard/invoices")}>
              View Invoices
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
            Create New Invoice
          </h1>
          <p style={{ fontSize: "14px", color: C.textMuted, fontFamily: "'Inter', sans-serif", margin: 0 }}>
            Bill your clients quickly and accurately
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
            invoiceClient={invoiceClient} setInvoiceClient={setInvoiceClient}
            amount={amount} setAmount={setAmount}
            issued={issued} setIssued={setIssued}
            due={due} setDue={setDue}
            notes={notes} setNotes={setNotes}
          />
        )}
        {step === 2 && (
          <Step2
            projectMode={projectMode} setProjectMode={setProjectMode}
            existingProjectId={existingProjectId} setExistingProjectId={setExistingProjectId}
            newProjectName={newProjectName} setNewProjectName={setNewProjectName}
            newProjectClient={newProjectClient} setNewProjectClient={setNewProjectClient}
            projects={projects}
          />
        )}
        {step === 3 && (
          <Step3
            invoiceClient={invoiceClient} amount={amount}
            issued={issued} due={due} notes={notes}
            projectMode={projectMode}
            existingProjectId={existingProjectId}
            newProjectName={newProjectName} newProjectClient={newProjectClient}
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
                Create Invoice
              </BtnPrimary>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { createContext, useContext, useState, ReactNode } from "react";

export interface UserProfile {
  name: string;
  email: string;
  accountType: string;
  currency: string;
  symbol: string;
}

export interface Task {
  id: string;
  projectId: string | null;
  title: string;
  done: boolean;
  due: string | null;
  notes: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  budget: number;
  deadline: string;
  status: "active" | "at-risk" | "completed";
  tasks: Task[];
  invoiceIds: string[];
  paymentIds: string[];
  createdAt: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  client: string;
  projectId: string | null;
  amount: number;
  status: "draft" | "sent" | "viewed" | "paid" | "overdue";
  due: string;
  issued: string;
  paymentId: string | null;
  notes: string;
}

export interface Payment {
  id: string;
  client: string;
  amount: number;
  invoiceId: string | null;
  projectId: string | null;
  status: "pending" | "completed";
  date: string;
  notes: string;
}

interface AppContextValue {
  user: UserProfile | null;
  setUser: (u: UserProfile) => void;
  projects: Project[];
  invoices: Invoice[];
  payments: Payment[];
  addProject: (p: Project) => void;
  addInvoice: (i: Invoice) => void;
  addPayment: (p: Payment) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  updateInvoice: (id: string, updates: Partial<Invoice>) => void;
  updatePayment: (id: string, updates: Partial<Payment>) => void;
  toggleTask: (projectId: string, taskId: string) => void;
  addTaskToProject: (projectId: string, task: Task) => void;
  linkInvoiceToProject: (invoiceId: string, projectId: string) => void;
  linkPaymentToProject: (paymentId: string, projectId: string) => void;
  linkPaymentToInvoice: (paymentId: string, invoiceId: string) => void;
  nextInvoiceNumber: () => string;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);

  const addProject = (p: Project) => setProjects((prev) => [p, ...prev]);
  const addInvoice = (i: Invoice) => setInvoices((prev) => [i, ...prev]);
  const addPayment = (p: Payment) => setPayments((prev) => [p, ...prev]);

  const updateProject = (id: string, updates: Partial<Project>) =>
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)));

  const updateInvoice = (id: string, updates: Partial<Invoice>) =>
    setInvoices((prev) => prev.map((i) => (i.id === id ? { ...i, ...updates } : i)));

  const updatePayment = (id: string, updates: Partial<Payment>) =>
    setPayments((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)));

  const toggleTask = (projectId: string, taskId: string) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== projectId) return p;
        const tasks = p.tasks.map((t) => (t.id === taskId ? { ...t, done: !t.done } : t));
        const done = tasks.filter((t) => t.done).length;
        const status: Project["status"] =
          done === tasks.length && tasks.length > 0
            ? "completed"
            : p.status === "completed"
            ? "active"
            : p.status;
        return { ...p, tasks, status };
      })
    );
  };

  const addTaskToProject = (projectId: string, task: Task) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, tasks: [...p.tasks, task] } : p))
    );
  };

  const linkInvoiceToProject = (invoiceId: string, projectId: string) => {
  setInvoices((prev) =>
    prev.map((i) => (i.id === invoiceId ? { ...i, projectId } : i))
  );
  setProjects((prev) =>
    prev.map((p) =>
      p.id === projectId
        ? { ...p, invoiceIds: p.invoiceIds.includes(invoiceId) ? p.invoiceIds : [...p.invoiceIds, invoiceId] }
        : p
    )
  );
};

const linkPaymentToProject = (paymentId: string, projectId: string) => {
  setPayments((prev) =>
    prev.map((pm) => (pm.id === paymentId ? { ...pm, projectId } : pm))
  );
  setProjects((prev) =>
    prev.map((p) =>
      p.id === projectId
        ? { ...p, paymentIds: p.paymentIds.includes(paymentId) ? p.paymentIds : [...p.paymentIds, paymentId] }
        : p
    )
  );
};

const linkPaymentToInvoice = (paymentId: string, invoiceId: string) => {
  setPayments((prev) =>
    prev.map((pm) => (pm.id === paymentId ? { ...pm, invoiceId } : pm))
  );
  setInvoices((prev) =>
    prev.map((i) => (i.id === invoiceId ? { ...i, paymentId, status: "paid" } : i))
  );
};

  const nextInvoiceNumber = () => {
    const year = new Date().getFullYear();
    const num = String(invoices.length + 1).padStart(3, "0");
    return `INV-${year}-${num}`;
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        projects,
        invoices,
        payments,
        addProject,
        addInvoice,
        addPayment,
        updateProject,
        updateInvoice,
        updatePayment,
        toggleTask,
        addTaskToProject,
        linkInvoiceToProject,
        linkPaymentToProject,
        linkPaymentToInvoice,
        nextInvoiceNumber,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}

export const fmt = (amount: number, symbol = "₦") =>
  `${symbol}${amount.toLocaleString()}`;

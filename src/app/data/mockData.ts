export type ProjectStatus = "active" | "at-risk" | "completed";
export type InvoiceStatus = "draft" | "sent" | "viewed" | "paid" | "overdue";
export type PaymentStatus = "pending" | "completed";
export type TaskGroup = "today" | "upcoming" | "completed";

export interface Project {
  id: number;
  name: string;
  client: string;
  status: ProjectStatus;
  progress: number;
  tasks: { done: number; total: number };
  deadline: string;
  amount: number;
  invoices: number;
  payments: number;
}

export interface Invoice {
  id: string;
  client: string;
  project: string | null;
  amount: number;
  issued: string;
  due: string;
  status: InvoiceStatus;
}

export interface Payment {
  id: number;
  client: string;
  invoice: string | null;
  project: string | null;
  amount: number;
  date: string;
  status: PaymentStatus;
}

export interface Task {
  id: number;
  projectId: number | null;
  projectName: string | null;
  title: string;
  done: boolean;
  due: string | null;
  notes: string;
  group: TaskGroup;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "E-commerce Redesign",
    client: "Shopify Plus",
    status: "active",
    progress: 65,
    tasks: { done: 13, total: 20 },
    deadline: "2026-07-15",
    amount: 1250000,
    invoices: 2,
    payments: 1,
  },
  {
    id: 2,
    name: "Brand Identity",
    client: "StartupX",
    status: "completed",
    progress: 100,
    tasks: { done: 15, total: 15 },
    deadline: "2026-06-01",
    amount: 850000,
    invoices: 1,
    payments: 1,
  },
  {
    id: 3,
    name: "Mobile App MVP",
    client: "TechFlow",
    status: "at-risk",
    progress: 30,
    tasks: { done: 6, total: 20 },
    deadline: "2026-06-30",
    amount: 2400000,
    invoices: 1,
    payments: 0,
  },
  {
    id: 4,
    name: "Marketing Website",
    client: "GrowthCo",
    status: "active",
    progress: 15,
    tasks: { done: 3, total: 20 },
    deadline: "2026-08-01",
    amount: 600000,
    invoices: 0,
    payments: 0,
  },
  {
    id: 5,
    name: "SEO Audit & Fixes",
    client: "LocalBiz",
    status: "completed",
    progress: 100,
    tasks: { done: 10, total: 10 },
    deadline: "2026-05-15",
    amount: 350000,
    invoices: 1,
    payments: 1,
  },
  {
    id: 6,
    name: "Dashboard UI Kit",
    client: "Internal",
    status: "active",
    progress: 80,
    tasks: { done: 16, total: 20 },
    deadline: "2026-07-30",
    amount: 0,
    invoices: 0,
    payments: 0,
  },
];

export const invoices: Invoice[] = [
  {
    id: "INV-2026-042",
    client: "TechCorp",
    project: "E-commerce Redesign",
    amount: 450000,
    issued: "2026-06-01",
    due: "2026-06-15",
    status: "paid",
  },
  {
    id: "INV-2026-043",
    client: "Acme Inc",
    project: "Mobile App MVP",
    amount: 120000,
    issued: "2026-06-05",
    due: "2026-06-20",
    status: "sent",
  },
  {
    id: "INV-2026-044",
    client: "StartupX",
    project: "Brand Identity",
    amount: 850000,
    issued: "2026-06-08",
    due: "2026-06-25",
    status: "viewed",
  },
  {
    id: "INV-2026-045",
    client: "Global Retail",
    project: "Marketing Website",
    amount: 1200000,
    issued: "2026-05-15",
    due: "2026-05-30",
    status: "overdue",
  },
  {
    id: "INV-2026-046",
    client: "Local Coffee",
    project: null,
    amount: 45000,
    issued: "2026-06-10",
    due: "2026-06-25",
    status: "draft",
  },
  {
    id: "INV-2026-047",
    client: "Design Studio",
    project: "SEO Audit & Fixes",
    amount: 300000,
    issued: "2026-05-20",
    due: "2026-06-05",
    status: "paid",
  },
];

export const payments: Payment[] = [
  {
    id: 1,
    client: "TechCorp",
    invoice: "INV-2026-042",
    project: "E-commerce Redesign",
    amount: 450000,
    date: "2026-06-14",
    status: "completed",
  },
  {
    id: 2,
    client: "Acme Inc",
    invoice: "INV-2026-043",
    project: "Mobile App MVP",
    amount: 120000,
    date: "2026-06-20",
    status: "pending",
  },
  {
    id: 3,
    client: "Design Studio",
    invoice: "INV-2026-047",
    project: "SEO Audit & Fixes",
    amount: 300000,
    date: "2026-06-05",
    status: "completed",
  },
  {
    id: 4,
    client: "LocalBiz",
    invoice: null,
    project: "SEO Audit & Fixes",
    amount: 350000,
    date: "2026-05-15",
    status: "completed",
  },
  {
    id: 5,
    client: "GrowthCo",
    invoice: null,
    project: "Marketing Website",
    amount: 0,
    date: "",
    status: "pending",
  },
];

export const tasks: Task[] = [
  {
    id: 1,
    projectId: 1,
    projectName: "E-commerce Redesign",
    title: "Review homepage wireframes with client",
    done: true,
    due: "2026-06-12",
    notes: "",
    group: "today",
  },
  {
    id: 2,
    projectId: 1,
    projectName: "E-commerce Redesign",
    title: "Send invoice INV-2026-043 to Acme Inc",
    done: true,
    due: "2026-06-12",
    notes: "",
    group: "today",
  },
  {
    id: 3,
    projectId: 3,
    projectName: "Mobile App MVP",
    title: "Update project timeline for TechFlow",
    done: false,
    due: "2026-06-12",
    notes: "",
    group: "today",
  },
  {
    id: 4,
    projectId: 3,
    projectName: "Mobile App MVP",
    title: "Kick off call with TechFlow team",
    done: false,
    due: "2026-06-14",
    notes: "",
    group: "upcoming",
  },
  {
    id: 5,
    projectId: 1,
    projectName: "E-commerce Redesign",
    title: "Submit final design assets to Shopify Plus",
    done: false,
    due: "2026-06-20",
    notes: "",
    group: "upcoming",
  },
  {
    id: 6,
    projectId: 4,
    projectName: "Marketing Website",
    title: "Create content strategy document",
    done: false,
    due: "2026-06-25",
    notes: "",
    group: "upcoming",
  },
  {
    id: 7,
    projectId: 2,
    projectName: "Brand Identity",
    title: "Deliver final brand guidelines PDF",
    done: true,
    due: "2026-06-01",
    notes: "",
    group: "completed",
  },
  {
    id: 8,
    projectId: 5,
    projectName: "SEO Audit & Fixes",
    title: "Submit SEO audit report",
    done: true,
    due: "2026-05-15",
    notes: "",
    group: "completed",
  },
];

export const earningsData = [
  { month: "Jan", earnings: 240000 },
  { month: "Feb", earnings: 185000 },
  { month: "Mar", earnings: 320000 },
  { month: "Apr", earnings: 290000 },
  { month: "May", earnings: 410000 },
  { month: "Jun", earnings: 380000 },
  { month: "Jul", earnings: 520000 },
  { month: "Aug", earnings: 470000 },
  { month: "Sep", earnings: 590000 },
  { month: "Oct", earnings: 540000 },
  { month: "Nov", earnings: 680000 },
  { month: "Dec", earnings: 720000 },
];

export const formatCurrency = (amount: number): string =>
  `₦${amount.toLocaleString()}`;

export const statusColors: Record<InvoiceStatus, { bg: string; text: string; label: string }> = {
  draft: { bg: "bg-slate-100", text: "text-slate-600", label: "Draft" },
  sent: { bg: "bg-blue-50", text: "text-blue-700", label: "Sent" },
  viewed: { bg: "bg-purple-50", text: "text-purple-700", label: "Viewed" },
  paid: { bg: "bg-green-50", text: "text-green-700", label: "Paid" },
  overdue: { bg: "bg-red-50", text: "text-red-700", label: "Overdue" },
};

export const projectStatusColors: Record<ProjectStatus, { bg: string; text: string; label: string }> = {
  active: { bg: "bg-blue-50", text: "text-blue-700", label: "Active" },
  "at-risk": { bg: "bg-red-50", text: "text-red-700", label: "At Risk" },
  completed: { bg: "bg-green-50", text: "text-green-700", label: "Completed" },
};

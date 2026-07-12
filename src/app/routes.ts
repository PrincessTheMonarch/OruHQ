import { createBrowserRouter } from "react-router";
import OruHQLanding from "./components/OruHQLanding";
import OnboardingFlow from "./components/onboarding/OnboardingFlow";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardOverview from "./components/dashboard/DashboardOverview";
import ProjectsPage from "./components/dashboard/ProjectsPage";
import ProjectDetailPage from "./components/dashboard/ProjectDetailPage";
import CreateProjectFlow from "./components/dashboard/CreateProjectFlow";
import TasksPage from "./components/dashboard/TasksPage";
import InvoicesPage from "./components/dashboard/InvoicesPage";
import CreateInvoiceFlow from "./components/dashboard/CreateInvoiceFlow";
import PaymentsPage from "./components/dashboard/PaymentsPage";
import CreatePaymentFlow from "./components/dashboard/CreatePaymentFlow";
import SettingsPage from "./components/dashboard/SettingsPage";
import AuthCallback from "./components/AuthCallback";

export const router = createBrowserRouter([
  { index: true, Component: OruHQLanding },
  { path: "onboarding", Component: OnboardingFlow },
  { path: "auth/callback", Component: AuthCallback },
  {
    path: "dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: DashboardOverview },
      { path: "projects", Component: ProjectsPage },
      { path: "projects/new", Component: CreateProjectFlow },
      { path: "projects/:id", Component: ProjectDetailPage },
      { path: "tasks", Component: TasksPage },
      { path: "invoices", Component: InvoicesPage },
      { path: "invoices/new", Component: CreateInvoiceFlow },
      { path: "payments", Component: PaymentsPage },
      { path: "payments/new", Component: CreatePaymentFlow },
      { path: "settings", Component: SettingsPage },
    ],
  },
]);
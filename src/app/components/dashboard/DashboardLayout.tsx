import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  CreditCard,
  Settings,
  Search,
  Bell,
  ChevronDown,
  LogOut,
  User,
  CheckSquare,
  Menu,
  X,
} from "lucide-react";
import { useApp } from "../../context/AppContext";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/dashboard/projects", label: "Projects", icon: FolderKanban },
  { to: "/dashboard/tasks", label: "Tasks", icon: CheckSquare },
  { to: "/dashboard/invoices", label: "Invoices", icon: FileText },
  { to: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function DashboardLayout() {
  const navigate = useNavigate();
  const { user } = useApp();
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const displayName = user?.name ?? "John Doe";
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleLogout = () => {
    setProfileOpen(false);
    navigate("/");
  };

  const handleNavClick = () => setMobileNavOpen(false);

  return (
    <div className="flex h-screen w-full overflow-hidden" style={{ background: "#fcfcfc" }}>
      {/* Mobile overlay backdrop */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`flex flex-col shrink-0 border-r fixed md:static inset-y-0 left-0 z-50 transition-transform duration-200 ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        style={{ width: 232, background: "#ffffff", borderColor: "#e2e8f0" }}
      >
        {/* Logo */}
        <div
          className="flex items-center justify-between px-5 shrink-0 border-b"
          style={{ height: 60, borderColor: "#e2e8f0" }}
        >
          <span
            className="text-[22px] leading-[1] tracking-[-0.5px]"
            style={{ fontFamily: "'Archivo Black', sans-serif", color: "#8d0000" }}
          >
            OruHQ
          </span>
          {/* Close button — mobile only */}
          <button
            onClick={() => setMobileNavOpen(false)}
            className="md:hidden flex items-center justify-center size-7 rounded-lg hover:bg-slate-50"
          >
            <X className="size-4" style={{ color: "#64748b" }} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-3">
          <div className="flex flex-col gap-0.5">
            {navItems.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition-colors ${
                    isActive
                      ? "bg-[rgba(141,0,0,0.08)] text-[#8d0000]"
                      : "text-[#475569] hover:bg-slate-50 hover:text-[#0f172a]"
                  }`
                }
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className="size-4 shrink-0"
                      style={{ color: isActive ? "#8d0000" : "#94a3b8" }}
                      strokeWidth={1.75}
                    />
                    {label}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* User */}
        <div className="relative border-t px-3 py-3" style={{ borderColor: "#e2e8f0" }}>
          <button
            onClick={() => setProfileOpen((v) => !v)}
            className="flex items-center gap-2.5 w-full px-2 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div
              className="size-7 rounded-full flex items-center justify-center shrink-0 text-[11px]"
              style={{
                background: "rgba(141,0,0,0.15)",
                color: "#8d0000",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
              }}
            >
              {initials}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p
                className="text-[13px] truncate"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#0f172a" }}
              >
                {displayName}
              </p>
              <p
                className="text-[11px] truncate"
                style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}
              >
                {user?.accountType ?? "Freelancer"}
              </p>
            </div>
            <ChevronDown
              className="size-3.5 shrink-0 transition-transform"
              style={{
                color: "#94a3b8",
                transform: profileOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>

          {/* Profile dropdown */}
          {profileOpen && (
            <div
              className="absolute bottom-full left-3 right-3 mb-1 rounded-xl overflow-hidden shadow-lg"
              style={{ border: "1px solid #e2e8f0", background: "white" }}
            >
              <button
                onClick={() => { navigate("/dashboard/settings"); setProfileOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 text-left hover:bg-slate-50 transition-colors"
              >
                <User className="size-4 shrink-0" style={{ color: "#64748b" }} strokeWidth={1.5} />
                <span
                  className="text-[13px]"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#0f172a" }}
                >
                  Profile Settings
                </span>
              </button>
              <div className="h-px mx-2" style={{ background: "#f1f5f9" }} />
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 text-left hover:bg-red-50 transition-colors"
              >
                <LogOut className="size-4 shrink-0" style={{ color: "#8d0000" }} strokeWidth={1.5} />
                <span
                  className="text-[13px]"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#8d0000", fontWeight: 500 }}
                >
                  Logout
                </span>
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main column */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top bar */}
        <header
          className="flex items-center shrink-0 px-4 md:px-6 gap-3 md:gap-4 border-b"
          style={{ height: 60, background: "#ffffff", borderColor: "#e2e8f0" }}
        >
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileNavOpen(true)}
            className="md:hidden flex items-center justify-center size-8 rounded-lg hover:bg-slate-50 border shrink-0"
            style={{ borderColor: "#e2e8f0" }}
            aria-label="Open menu"
          >
            <Menu className="size-4" style={{ color: "#64748b" }} strokeWidth={1.75} />
          </button>

          {/* Search */}
          <div className="relative flex-1 max-w-[400px]">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5"
              style={{ color: "#94a3b8" }}
              strokeWidth={1.75}
            />
            <input
              type="text"
              placeholder="Search projects, invoices, payments…"
              className="w-full pl-8 pr-3 py-2 rounded-lg text-[13px] outline-none border"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#0f172a",
                background: "#f8fafc",
                borderColor: "#e2e8f0",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#8d0000")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#e2e8f0")}
            />
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {/* Notification bell */}
            <button
              className="relative size-8 rounded-lg flex items-center justify-center hover:bg-slate-50 transition-colors border"
              style={{ borderColor: "#e2e8f0" }}
              aria-label="Notifications"
            >
              <Bell className="size-4" style={{ color: "#64748b" }} strokeWidth={1.75} />
            </button>

            {/* Divider */}
            <div className="h-5 w-px hidden sm:block" style={{ background: "#e2e8f0" }} />

            {/* User avatar */}
            <button
              onClick={() => setProfileOpen((v) => !v)}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div
                className="size-7 rounded-full flex items-center justify-center text-[11px]"
                style={{
                  background: "rgba(141,0,0,0.15)",
                  color: "#8d0000",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                }}
              >
                {initials}
              </div>
              <span
                className="text-[13px] hidden sm:block"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#0f172a" }}
              >
                {displayName.split(" ")[0]}
              </span>
              <ChevronDown className="size-3.5" style={{ color: "#94a3b8" }} />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto" style={{ background: "#fcfcfc" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
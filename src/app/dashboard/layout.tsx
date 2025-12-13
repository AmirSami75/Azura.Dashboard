"use client";

import AuthProvider from "@/components/AuthProvider";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { useUIstore } from "@/store/ui-store";
import { ToastContainer } from "react-toastify";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const sidebarCollapsed = useUIstore((state) => state.sidebarCollapsed);
  const setSidebarCollapsed = useUIstore((state) => state.setSidebarCollapsed);
  const toggleSidebar = useUIstore((state) => state.toggleSidebar);

  return (
    <div className="flex min-h-screen">
      {/* برای گرفتن توکن از api  و در دسترس بودن در کل سایت  */}
      <AuthProvider />
      {/* sidebar component */}
      <div className="flex-none">
        <Sidebar
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
          onToggleSidebar={toggleSidebar}
        />
      </div>

      {/* main content */}
      <div className="flex-1 lg:mr-[228px] flex flex-col min-h-screen">
        {/* notification container */}
        <ToastContainer />
        {/* header component */}
        <header className="p-3 shadow bg-card text-card-foreground flex-none">
          <Header
            collapsed={sidebarCollapsed}
            onToggleSidebar={toggleSidebar}
          />
        </header>
        {/* page.tsx component */}
        <main className="m-4 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

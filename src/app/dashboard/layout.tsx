"use client";
import React, { useState } from "react";

import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <div className="flex min-h-screen">
      {/* sidebar component */}
      <div className="flex-none">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* main content */}
      <div className="flex-1 xl:mr-[228px]">
        {/* header component */}
        <header className="p-7 shadow bg-primary-foreground text-primary">
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        </header>
        {/* page.tsx component */}
        <main className="p-4 bg-primary-foreground text-primary m-4 shadow rounded-xl">
          {children}
        </main>
      </div>
    </div>
  );
}

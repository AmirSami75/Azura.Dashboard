"use client";
import React, { useState } from "react";
import Sidebar from "../../../components/dashboard/Sidebar";
import Header from "../../../components/dashboard/Header";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <div className="flex min-h-screen">
      {/* sidebar component */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* main content */}
      <div className="flex-1 xl:mr-[228px]">
        {/* header component */}
        <header className="p-6 shadow bg-white text-black">
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        </header>
        {/* page.tsx component */}
        <main className="p-4 bg-white text-black m-4 shadow rounded-xl">
          {children}
        </main>
      </div>
    </div>
  );
}

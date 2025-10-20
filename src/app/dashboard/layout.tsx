"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const router = useRouter();

  // برای دریافت توکن از کوکی در زمان ورود به صفحه
  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const res = await fetch("/api/auth/get-token", {
  //         method: "GET",
  //         credentials: "include",
  //       });

  //       console.log("get token res in dashboard layout:", res);

  //       const data = await res.json();
  //       const jwtToken = data.token;

  //       if (!jwtToken) {
  //         router.push("/login");
  //       }
  //     } catch (err: any) {
  //       alert(`در داشبورد خطا در بررسی توکن :${err.message}`);
  //     }
  //   };
  //   checkAuth();
  // }, []);

  return (
    <div className="flex min-h-screen">
      {/* sidebar component */}
      <div className="flex-none">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* main content */}
      <div className="flex-1 xl:mr-[228px]">
        {/* header component */}
        <header className="p-7 shadow bg-white text-black">
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

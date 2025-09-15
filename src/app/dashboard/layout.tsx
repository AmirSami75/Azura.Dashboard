export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-80 bg-white text-black p-4  shadow border-l-1 border-gray-200 ">
        {/* sidebar component */}
        sidebar
      </aside>
      {/* main content */}
      <div className="flex-1">
        {/* header component */}
        <header className="p-6 shadow bg-white text-black ">header</header>
        {/* page.tsx component */}
        <main className="p-4 bg-white text-black m-4 shadow rounded-xl">
          {children}
        </main>
      </div>
    </div>
  );
}

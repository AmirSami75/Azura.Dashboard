import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface UIState {
  sidebarCollapsed: boolean;
  theme: Theme;

  // actions
  setSidebarCollapsed: (value: boolean) => void;
  toggleSidebar: () => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useUIstore = create<UIState>()(
  persist(
    (set, get) => ({
      sidebarCollapsed: true,
      theme: "dark",

      setSidebarCollapsed: (value) => set({ sidebarCollapsed: value }),

      toggleSidebar: () => set({ sidebarCollapsed: !get().sidebarCollapsed }),

      setTheme: (theme) => set({ theme }),

      toggleTheme: () =>
        set({ theme: get().theme === "dark" ? "light" : "dark" }),
    }),
    {
      name: "ui-storage",
      partialize: (state) => ({
        theme: state.theme,
        sidebarCollapsed: state.sidebarCollapsed,
      }),
    }
  )
);

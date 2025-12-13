import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";
type Status = "done" | "in progress" | "not Started" | "completed";

interface UIState {
  sidebarCollapsed: boolean;
  theme: Theme;
  status: Status;

  // actions
  setSidebarCollapsed: (value: boolean) => void;
  toggleSidebar: () => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  toggleStatus: () => void;
}

export const useUIstore = create<UIState>()(
  persist(
    (set, get) => ({
      sidebarCollapsed: true,
      theme: "dark",
      status: "not Started",

      setSidebarCollapsed: (value) => set({ sidebarCollapsed: value }),

      toggleSidebar: () => set({ sidebarCollapsed: !get().sidebarCollapsed }),

      setTheme: (theme) => set({ theme }),

      toggleTheme: () =>
        set({ theme: get().theme === "dark" ? "light" : "dark" }),
      toggleStatus: () =>
        set({
          status:
            get().status === "not Started"
              ? "in progress"
              : get().status === "in progress"
              ? "done"
              : "not Started",
        }),
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

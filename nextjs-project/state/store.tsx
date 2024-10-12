import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AppState {
  mode: "light" | "dark" | "system" | undefined;
  setMode: (mode: "light" | "dark" | "system" | undefined) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      mode: undefined,
      setMode: (mode: "light" | "dark" | "system" | undefined) => {
        set({ mode });
      },
    }),
    {
      name: "app-storage",
    },
  ),
);

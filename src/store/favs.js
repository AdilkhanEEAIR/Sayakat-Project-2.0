import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useFavs = create(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) => {
        const ids = new Set(get().ids);
        if (ids.has(id)) ids.delete(id);
        else ids.add(id);
        set({ ids: [...ids] });
      },
      has: (id) => get().ids.includes(id),
    }),
    { name: "sayakat-favs" }
  )
);
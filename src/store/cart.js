import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useCart = create(

  persist(
    (set, get) => ({
      items: [],
      add: (t) => {
        const items = [...get().items];
        const i = items.findIndex((x) => x.id === t.id);
        if (i >= 0) items[i].qty += 1;
        else
          items.push({
            id: t.id,
            title: t.title,
            price: t.price,
            image: t.image,
            qty: 1,
          });
        set({ items });
      },
      remove: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
      dec: (id) =>
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i
          ),
        }),
      inc: (id) =>
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i
          ),
        }),
      clear: () => set({ items: [] }),
      total: () => get().items.reduce((s, i) => s + i.price * i.qty, 0),
    }),
    { name: "sayakat-cart" }
  )
);
import { create } from "zustand";
import { persist } from "zustand/middleware";
const makeToken = () =>
  btoa(`${Math.random().toString(36).slice(2)}:${Date.now()}`);
export const useAuth = create(
  persist(
    (set, get) => ({
      users: [],
      user: null,
      accessToken: null,
      refreshToken: null,
      accessExp: null,
      refreshExp: null,
      register: (name, email, password) => {
        const { users } = get();
        if (users.some((u) => u.email === email))
          throw new Error("User already exists");
        const id = Date.now(),
          now = Date.now();
        set({
          users: [...users, { id, name, email, password }],
          user: { id, name, email },
          accessToken: makeToken(),
          refreshToken: makeToken(),
          accessExp: now + 2 * 60 * 1000,
          refreshExp: now + 7 * 24 * 60 * 60 * 1000,
        });
      },
      login: (email, password) => {
        const u = get().users.find(
          (u) => u.email === email && u.password === password
        );
        if (!u) throw new Error("Invalid credentials");
        const now = Date.now();
        set({
          user: { id: u.id, name: u.name, email: u.email },
          accessToken: makeToken(),
          refreshToken: makeToken(),
          accessExp: now + 2 * 60 * 1000,
          refreshExp: now + 7 * 24 * 60 * 60 * 1000,
        });
      },
      logout: () =>
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          accessExp: null,
          refreshExp: null,
        }),
      ensureAccess: () => {
        const { accessExp, refreshExp, refreshToken } = get();
        const now = Date.now();
        if (accessExp && now < accessExp) return true;
        if (refreshToken && refreshExp && now < refreshExp) {
          set({ accessToken: makeToken(), accessExp: now + 2 * 60 * 1000 });
          return true;
        }
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          accessExp: null,
          refreshExp: null,
        });
        return false;
      },
    }),
    { name: "sayakat-auth" }
  )
);
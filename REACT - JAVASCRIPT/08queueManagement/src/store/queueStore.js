import { create } from "zustand";

export const useStore = create((set) => ({
  queue: JSON.parse(localStorage.getItem("queueData")) || [],

  addQueue: (name, service, status) =>
    set((state) => {
      const newQueue = [
        ...state.queue,
        { id: Date.now(), name, service, status },
      ];
      localStorage.setItem("queueData", JSON.stringify(newQueue));
      return { queue: newQueue };
    }),

  removeQueue: (id) =>
    set((state) => {
      const newQueue = state.queue.filter((item) => item.id !== id);
      localStorage.setItem("queueData", JSON.stringify(newQueue));
      return { queue: newQueue };
    }),
  updateStatus: (id, status) =>
    set((state) => {
      const newQueue = state.queue.map((item) =>
        item.id === id ? { ...item, status } : item
      );
      localStorage.setItem("queueData", JSON.stringify(newQueue));
      return { queue: newQueue };
    }),
}));

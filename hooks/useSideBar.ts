import { create } from 'zustand';

interface UseSidebar {
	isOpen: boolean;
	open: () => void;
	close: () => void;
}

export const useSidebar = create<UseSidebar>((set) => ({
	isOpen: true,
	close: () => set({ isOpen: false }),
	open: () => set({ isOpen: true }),
}));

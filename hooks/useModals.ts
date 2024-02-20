import { create } from 'zustand';

type modalType =
	| 'createBoard'
	| 'editBoard'
	| 'deleteBoard'
	| 'createTask'
	| 'editTask'
	| 'addColumn'
	| 'mobileTab'
	| null;

interface UseModal {
	modalOpen: boolean;
	open: (type: modalType) => void;
	close: () => void;
	type: modalType;
}

export const useModal = create<UseModal>((set) => ({
	modalOpen: false,
	close: () => set({ modalOpen: false, type: null }),
	open: (type: modalType) => set({ modalOpen: true, type: type }),
	type: null,
}));

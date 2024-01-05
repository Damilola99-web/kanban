import { IBoard } from '@/types';
import { create } from 'zustand';
import data from "../data.json"

interface BoardData {
	data: IBoard[];
	currentBoard: string;

	setBoardData: (data: []) => void;
	setCurrentBoard: (id: string) => void;
}

export const useBoardData = create<BoardData>((set) => ({
	currentBoard: data.boards[0].id,
	data : data.boards,
	setBoardData: (data: IBoard[]) => set({ data: data }),
	setCurrentBoard: (id: string) => set({ currentBoard: id }),
}));

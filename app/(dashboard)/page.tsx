'use client';

import { useBoardData } from '@/hooks/useBoardData';
import NewColumn from './components/NewColumn';
import EmptyBoard from './components/EmptyBoard';
import Column from './components/Column';

export default function Home() {
	const { currentBoard, data } = useBoardData();
	const boardData = data.filter((board) => board.id === currentBoard)[0];

	return (
		<div className='  overflow-scroll flex transition-all duration-300 p-8  cursor-move w-auto min-w-full h-full bg-[#f4f7fd]'>
			{boardData?.columns.map((column, i) => (
				<Column
					key={i}
					column={column}
					i={i}
				/>
			))}
			{boardData && <NewColumn />}
			{!boardData && <EmptyBoard />}
		</div>
	);
}

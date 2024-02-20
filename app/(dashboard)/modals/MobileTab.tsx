import DashboardIcon from '@/components/custom/ui/DashboardIcon';
import MoonStar from '@/components/custom/ui/MoonStar';
import { Switch } from '@/components/ui/switch';
import { useBoardData } from '@/hooks/useBoardData';
import { cn } from '@/lib/utils';
import { Sun } from 'lucide-react';
import React from 'react';

export default function MobileTab() {
	const { currentBoard, data: boards, setCurrentBoard } = useBoardData();
	return (
		<div
			onClick={(e) => e.stopPropagation()}
			className= ' text-[#828fa3] text-sm mt-[5rem] flex items-center justify-center flex-col bg-white w-[300px] transition-all duration-200 rounded-lg px-8 py-4 h-min '
		>
			<p className=' mb-4  text-[#828fa3] font-bold text-xs'>
				ALL BOARDS ({boards.length})
			</p>
			<div className='flex flex-col space-y-[6px]'>
				{boards.map((board) => (
					<div
						onClick={() => setCurrentBoard(board.id)}
						className={cn(
							' cursor-pointer hover:bg-[#9b96e9] hover:rounded-r-full hover:text-white align-middle py-2 pl-8 flex items-center font-bold  w-[17.25rem] min-h-[2.8rem] space-x-4 ',
							board.id === currentBoard
								? 'hover:opacity-100 font-bold text-white rounded-r-full bg-[#635fc7]'
								: ''
						)}
						key={board.id}
					>
						<DashboardIcon />
						<p>{board.name}</p>
					</div>
				))}
				<div className=' cursor-pointer py-2 pl-8 flex items-center font-semibold hover:opacity-70  w-[17.25rem] min-h-[2.8rem] space-x-4 text-[#635fc7]'>
					<DashboardIcon />
					<p onClick={() => open('createBoard')}>
						+ Create New Board
					</p>
				</div>
			</div>

			<div className='text-[#828fa3] my-4'>
				<div className=' space-x-4 flex bg-[#f4f7fd] justify-center items-center h-[48px] w-[235px]  rounded-md'>
					<MoonStar />
					<Switch />
					<Sun
						size={21}
						fill='#828fa3'
					/>
				</div>
			</div>
		</div>
	);
}

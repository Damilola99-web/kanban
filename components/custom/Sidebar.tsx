'use client';

import { useSidebar } from '@/hooks/useSideBar';

import { cn } from '@/lib/utils';
import { Sun } from 'lucide-react';
import React from 'react';
import MoonStar from './ui/MoonStar';
import { Switch } from '../ui/switch';
import { useBoardData } from '@/hooks/useBoardData';
import HideSidebar from './ui/HideSidebar';
import DashboardIcon from './ui/DashboardIcon';
import { useModal } from '@/hooks/useModals';

export default function Sidebar() {
	const { currentBoard, data: boards, setCurrentBoard } = useBoardData();
	const { open } = useModal();

	// setCurrentBoard(boards[0]?.id || "")
	// setBoardData(boards)

	const { close } = useSidebar();

	return (
		// remember to add the z index, you removed it while debugging
		<div className=' hidden md:flex w-[300px] fixed flex-col justify-between  text-[#828fa3] h-[calc(100vh-96px)] border-[#e4ebfa]   border-r-[1px] cursor-default overflow-x-hidden pt-6 pb-8 '>
			<div className=' top'>
				<p className=' mb-4 pl-8 text-[#828fa3] font-bold text-sm'>
					ALL BOARDS ({boards.length})
				</p>
				<div className='flex flex-col space-y-[4px]'>
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
			</div>
			<div className='text-[#828fa3]'>
				<div className=' space-x-4 flex bg-[#f4f7fd] justify-center items-center h-[48px] w-[235px] ml-6 rounded-md'>
					<MoonStar />
					<Switch />
					<Sun
						size={21}
						fill='#828fa3'
					/>
				</div>
				<div
					onClick={close}
					className=' cursor-pointer flex space-x-4 my-4 pl-8 hover:opacity-70 items-center'
				>
					<HideSidebar />
					<p className='font-semibold'>Hide Sidebar</p>
				</div>
			</div>
		</div>
	);
}

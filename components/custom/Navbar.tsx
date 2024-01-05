'use client';
import Image from 'next/image';
import Elipsis from './ui/elipsis';
import Logo from '../../public/logo.svg';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useBoardData } from '@/hooks/useBoardData';
import { Button } from '../ui/button';
import { useModal } from '@/hooks/useModals';
import { Plus } from 'lucide-react';
export default function Navbar() {
	const { currentBoard, data } = useBoardData();
	const { open } = useModal();
	const boardData = data.filter((board) => board.id === currentBoard)[0];
	return (
		<div className=' fixed bg-[#ffffff] h-[96px] w-screen flex  '>
			<div className='hidden md:flex  w-[300px] items-center p-8 border-r-[1px] border-b-[1px] border-[##e4ebfa]'>
				<Image
					src={Logo}
					alt='logo'
				/>
			</div>
			<div className='md:w-[calc(100%-300px)] w-full border-b-[1px] border-[##e4ebfa] px-8 flex items-center justify-between'>
				<p className=' hidden md:flex font-bold text-2xl'>
					{boardData?.name || 'No Board Found '}
				</p>
				<div className=' md:hidden flex items-center justify-center space-x-2'>
					<img src="/logo-mobile.svg" alt="logo" className='mr-3' />
				<p className=' font-bold text-xl'>
					{boardData?.name || 'No Board Found '}
					</p>
					
				</div>
				{boardData && (
					<div className='  flex space-x-4 items-center justify-center'>
						<Button
							className=' md:text-base md:px-4 md:py-3 text-2xl px-4 py-1 flex items-center justify-center align-middle'
							onClick={() => open('createTask')}
						>
							<Plus />
							<span className=' hidden md:flex'>
								Add New Task
							</span>
						</Button>
						<Popover>
							<PopoverTrigger className='rounded-md bg-opacity-0 hover:bg-opacity-100 transition-all duration-500 bg-[#e4ebfa] text-[#828fa3] py-2 px-[0.4rem]'>
								<Elipsis />
							</PopoverTrigger>
							<PopoverContent className='space-y-3 flex flex-col w-[200px] absolute right-0 h-[100px]  mt-2 bg-white p-4 rounded-lg border-[#f4f7fd] border-[1px] transition-all duration-500 shadow-md'>
								<p
									onClick={() => open('editBoard')}
									className=' cursor-pointer hover:opacity-70 text-[#828fa3] px-1'
								>
									Edit Board
								</p>
								<p
									onClick={() => open('deleteBoard')}
									className='cursor-pointer text-[#ea5555] hover:opacity-70 px-1'
								>
									Delete Board
								</p>
							</PopoverContent>
						</Popover>
					</div>
				)}
			</div>
		</div>
	);
}

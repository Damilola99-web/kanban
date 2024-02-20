'use client';
import { ReactNode } from 'react';
import Navbar from '../../components/custom/Navbar';
import { useSidebar } from '@/hooks/useSideBar';
import Sidebar from '@/components/custom/Sidebar';
import Eye from '@/components/custom/ui/Eye';
import MainModal from './modals/MainModal';
import { useModal } from '@/hooks/useModals';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	const { isOpen, open } = useSidebar();
	const { modalOpen } = useModal();

	return (
		<div className=' flex flex-col  w-screen h-screen'>
			{modalOpen && <MainModal />}
			<div className=''>
				<Navbar />
			</div>
			<main className='mt-[96px] relative h-full min-h-[calc(100vh-96px)] overflow-y-hidden'>
				{isOpen && <Sidebar />}
				{!isOpen && (
					<div
						onClick={open}
						className=' hidden text-white hover:opacity-70 cursor-pointer z-20 absolute py-6 px-8 left-0 md:flex  bg-[#635fc7] rounded-r-full bottom-8 w-14 h-12  items-center justify-center transition-all duration-300'
					>
						<div>
							<Eye />
						</div>
					</div>
				)}
				<div
					className={
						isOpen
							? 'absolute md:left-[300px] transition-all duration-200 top-0 md:w-[calc(100%-300px)] h-[calc(100vh-96px)]'
							: 'absolute transition-all duration-200 left-0 top-0 w-full h-[calc(100vh-96px)] '
					}
				>
					{children}
				</div>
			</main>
		</div>
	);
};

export default DashboardLayout;

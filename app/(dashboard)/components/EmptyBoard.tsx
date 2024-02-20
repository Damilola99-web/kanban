import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/useModals';

export default function EmptyBoard() {
	const { open } = useModal();
	return (
		<div className=' w-full space-y-5 flex flex-col items-center justify-center p-4'>
			<p className=' text-center font-semibold'>
				Your Kanban is empty. Create a new board to get started
			</p>
			<Button className='hover:text-[#635fc7]' onClick={() => open('createBoard')}>
				+ Create New Board
			</Button>
		</div>
	);
}

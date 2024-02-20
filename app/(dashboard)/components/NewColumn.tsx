import { useModal } from '@/hooks/useModals';

export default function NewColumn() {
	const { open } = useModal();
	return (
		<div className=' flex flex-col h-full min-w-[17.5rem] w-[17.5rem] mr-8'>
			<div className=' flex mb-6 uppercase text-[#828fa3] font-semibold text-sm'>
				&nbsp;
			</div>
			<div
				onClick={() => open('addColumn')}
				className=' hover:text-[#635fc7] text-[#828fa3] background flex font-bold items-center justify-center rounded-[6px] cursor-pointer text-2xl w-full h-full'
			>
				+ New Column
			</div>
		</div>
	);
}

import { IColumn } from '@/types';
import { Task } from './Task';

export default function Column({ column, i }: { column: IColumn; i: number }) {
	const colors = [
		'#49c4e5',
		'#8471f2',
		'#67e2ae',
		'#e5a449',
		'#2a3fdb',
		'#c36e6e',
	];
	return (
		<div
			key={Date.now.toString()}
			className=' flex  flex-col h-full min-w-[17.5rem] w-[17.5rem] mr-8'
		>
			<div className=' flex mb-6 uppercase text-[#828fa3] font-semibold text-sm items-center'>
				<span
					style={{ background: colors[i] }}
					className='flex w-[15px] h-[15px] mr-[12px] rounded-full'
				></span>
				<p>
					{column.name} ({column.tasks.length})
				</p>
			</div>
			{column.tasks.length === 0 && (
				<div className=' w-full h-full outline-dashed outline-2 outline-[#828fa366] rounded-[6px]'></div>
			)}
			{column.tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
				/>
			))}
		</div>
	);
}

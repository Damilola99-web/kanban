import { ITask } from "@/types";


export const Task = ({ task }: { task: ITask }) => {
	const completedSubtasks = task.subtasks.filter((sub) => sub.isCompleted);
	return (
		<div
			draggable
			className='  cursor-grab flex flex-col bg-white min-w-full w-full min-h-[5.5rem] rounded-[8px] px-4 py-6 mb-6 border-[1px] border-[#8686861a] shadow-md'
		>
			<p className=' text-black font-bold text-[0.9375rem] mb-2'>
				{task.title}
			</p>
			<p className=' text-[#828fa3] text-[0.75rem] font-bold'>
				{completedSubtasks.length} out of {task.subtasks.length}
			</p>
		</div>
	);
};

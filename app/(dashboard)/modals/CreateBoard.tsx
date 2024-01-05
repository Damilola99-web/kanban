import { Button } from '@/components/ui/button';
import { useState } from 'react';

type Props = {};

export default function CreateBoard({}: Props) {
	const [columns, setColumns] = useState<string[]>(['']);
	const [name, setName] = useState('');
	const [columnerror, setColumnerror] = useState<number[]>([]);

	const handleSubmit = () => {
		columns.map((column, i) => {
			if (column.length === 0) {
				setColumnerror([...columnerror, i]);
			}
		});
		if (columnerror.length) {
		}
		console.log({columns, name});
	};

	return (
		<div className=' flex flex-col text-black'>
			<p className=' text-lg my-3 font-semibold'>Add New Board</p>
			<p>Name</p>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				className='border-2 my-2 py-2 px-3 rounded-md'
				type='text'
			/>
			<p>columns</p>
			<div className='flex flex-col w-full mb-4'>
				{columns.map((column, i) => (
					<div
						className=' w-full flex space-x-3 items-center'
						key={i}
					>
						<input
							style={
								columnerror.includes(i)
									? { borderColor: 'red' }
									: {}
							}
							className='w-full border-2 my-2 py-2 px-3 rounded-md '
							type='text'
							value={columns[i]}
							onChange={(e) => {
								const newcolumn = columns;
								newcolumn[i] = e.target.value;
								setColumns([...columns]);
							}}
						/>
						{columns.length > 1 && (
							<button
								onClick={() => {
									const newColumns = columns.filter(
										(columnii, ii) => ii !== i
									);
									setColumns(newColumns);
								}}
							>
								<Close />
							</button>
						)}
					</div>
				))}
			</div>
			{columns.length < 6 && (
				<Button
					className=' mb-3'
					onClick={() => setColumns([...columns, ''])}
				>
					+ Add New Column
				</Button>
			)}
			<Button onClick={handleSubmit}>Create New Board</Button>
		</div>
	);
}

const Close = () => (
	<svg
		width='15'
		height='15'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g
			fill='#828FA3'
			
		>
			<path d='m12.728 0 2.122 2.122L2.122 14.85 0 12.728z'></path>
			<path d='M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z'></path>
		</g>
	</svg>
);

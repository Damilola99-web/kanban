export interface IBoard {
	name: string;
	id: string;
	userId: string;
	columns: IColumn[];
	
}

export interface IColumn {
	name: string,
	tasks : ITask[]
}

export interface ITask {
	id : string
	title: string;
	description: string;
	subtasks: ISubTask[];
}

export interface ISubTask {
	id : string
	title: string;
	isCompleted: boolean;
}



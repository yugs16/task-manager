export interface Task {
	id: string;
	status: string;
	title: string;
	descp: string;
	hsitory?: string[];
}

const KEY = 'tasks';

let allTasks: Task[] = JSON.parse(localStorage.getItem(KEY) || '[]');

function init() {
	if (!allTasks.length) {
		console.log('not inside');
		const arr = [
			{
				id: '#123',
				status: 'completed',
				history: ['new', 'completed'],

				title: 'live 1',
				descp: 'live ========== asasd',
				date: new Date().getTime() - 2000,
			},
			{
				id: '#234',
				status: 'completed',
				history: ['new', 'completed'],

				title: 'homeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 1',
				descp: 'dasdsa hoem',
				date: new Date().getTime() - 1000,
			},
			{
				id: '#1233',
				status: 'pending',
				title: 'sasas 123',
				descp: 'sdasads 13',
				history: ['new', 'pending'],
				date: new Date().getTime() - 25000,
			},
		];
		localStorage.setItem(KEY, JSON.stringify([...arr]));
		allTasks = getItems();
	}
}

export function getItems() {
	console.log(allTasks);
	allTasks = JSON.parse(localStorage.getItem(KEY) || '[]');
	return allTasks;
}

export function addItem(data: Omit<Task, 'id' | 'date' | 'status'>) {
	const time = new Date().getTime();
	const payload = {
		...data,
		id: `#${allTasks.length}${time}`,
		date: time,
		status: 'pending',
		history: ['pending'],
	};
	//get
	localStorage.setItem(KEY, JSON.stringify([...allTasks, payload]));
	allTasks = getItems();
	console.log(allTasks);
}

function findAndReplace(array: Task[], key: string, id: string) {
	const index = array.findIndex((obj: Task) => {
		//@ts-ignore
		if (obj[key] === id) {
			console.log('inside find', id);
			return true;
		}
	});
	return index || 0;
}

// Usage

export function updateItem(id: string, status: string) {
	//post

	const index = findAndReplace(allTasks, 'id', id);

	allTasks[index]['status'] = status;
	localStorage.setItem(KEY, JSON.stringify(allTasks));
	console.log('check me=====', allTasks);
	allTasks = getItems();
	return allTasks[index];
}

export function deleteItem(id: string) {
	//post

	const index = findAndReplace(allTasks, 'id', id);

	allTasks.splice(index, 1);
	localStorage.setItem(KEY, JSON.stringify(allTasks));
	console.log('check me=====', allTasks);
	allTasks = getItems();
}

init();

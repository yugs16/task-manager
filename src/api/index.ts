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
		const arr = [
			{
				id: '#123',
				status: 'completed',
				history: ['new', 'completed'],

				title: 'Workout @8 AM',
				descp: 'wake up bro!!',
				date: new Date().getTime() - 2000,
			},
			{
				id: '#234',
				status: 'completed',
				history: ['new', 'completed'],
				title: 'Interview with XYZ',
				descp:
					'Check google calender, you have an interview scheduled with Christeene',
				date: new Date().getTime() - 1000,
			},
			{
				id: '#1233',
				status: 'pending',
				title: 'Learn DeFi',
				descp:
					'Decentralized finance, or DeFi, uses emerging technology to remove third parties and centralized institutions from financial transactions. The components of DeFi are cryptocurrencies, blockchain technology, and software that allow people to transact financially with each other.',
				history: ['new', 'pending'],
				date: new Date().getTime() - 25000,
			},
		];
		localStorage.setItem(KEY, JSON.stringify([...arr]));
		allTasks = getItems();
	}
}

export function getCount() {
	let tasks: Task[] = JSON.parse(localStorage.getItem(KEY) || '[]');
	return {
		all: tasks.length,
		completed: tasks.filter((item) => {
			return item['status' as keyof Task] === 'completed';
		}).length,
		pending: tasks.filter((item) => {
			return item['status' as keyof Task] === 'pending';
		}).length,
	};
}

export function getItems(params?: Record<string, string>) {
	allTasks = JSON.parse(localStorage.getItem(KEY) || '[]');

	if (params) {
		Object.entries(params).forEach(([key, value]) => {
			allTasks = allTasks.filter((item) => {
				return item[key as keyof Task] === value;
			});
		});
	}
	return allTasks;
}

export function addItem(data: Omit<Task, 'id' | 'date' | 'status'>) {
	//get

	const time = new Date().getTime();
	const payload = {
		...data,
		id: `#${allTasks.length}${time}`,
		date: time,
		status: 'pending',
		history: ['pending'],
	};
	localStorage.setItem(KEY, JSON.stringify([...allTasks, payload]));
	allTasks = getItems();
}

function findAndReplace(array: Task[], key: string, id: string) {
	const index = array.findIndex((obj: Task) => {
		if (obj[key as keyof Task] === id) {
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
	allTasks = getItems();
	return allTasks[index];
}

export function deleteItem(id: string) {
	//post

	const index = findAndReplace(allTasks, 'id', id);

	// idellay we spread here
	allTasks.splice(index, 1);
	localStorage.setItem(KEY, JSON.stringify(allTasks));
	allTasks = getItems();
}

init();

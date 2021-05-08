import { v4 as uuidv4 } from 'uuid';

const taskData = Array(
	{
		id: uuidv4(),
		title: 'Task 1 Title',
		description: 'Task 1 Description',
		status: 2,
		type: 0,
		team: '',
		lastUpdatedAt: Date.now(),
		createdAt: Date.now()
	},
	{
		id: uuidv4(),
		title: 'Task 2 Title',
		description: 'Task 2 Description',
		status: 1,
		type: 1,
		team: 'Team 1',
		lastUpdatedAt: Date.now(),
		createdAt: Date.now()
	},
	{
		id: uuidv4(),
		title: 'Task 3 Title',
		description: 'Task 3 Description Task 3 Description Task 3 Description Task 3 Description Task 3 Description',
		status: 0,
		type: 0,
		team: '',
		lastUpdatedAt: Date.now(),
		createdAt: Date.now()
	},
	{
		id: uuidv4(),
		title: 'Task 4 Title',
		description: 'Task 4 Description',
		status: 1,
		type: 1,
		team: 'Team 1',
		lastUpdatedAt: Date.now(),
		createdAt: Date.now()
	},
	{
		id: uuidv4(),
		title: 'Task 5 Title',
		description: 'Task 5 Description',
		status: 2,
		type: 1,
		team: 'Team 2',
		lastUpdatedAt: Date.now(),
		createdAt: Date.now()
	},
	{
		id: uuidv4(),
		title: 'Task 6 Title',
		description: 'Task 6 Description',
		status: 0,
		type: 0,
		team: '',
		lastUpdatedAt: Date.now(),
		createdAt: Date.now()
	},
	{
		id: uuidv4(),
		title: 'Task 7 Title',
		description: 'Task 7 Description',
		status: 1,
		type: 0,
		team: '',
		lastUpdatedAt: Date.now(),
		createdAt: Date.now()
	},
	{
		id: uuidv4(),
		title: 'Task 8 Title',
		description: 'Task 8 Description',
		status: 1,
		type: 1,
		team: 'Team 1',
		lastUpdatedAt: Date.now(),
		createdAt: Date.now()
	},
	{
		id: uuidv4(),
		title: 'Task 9 Title',
		description: 'Task 9 Description',
		status: 1,
		type: 1,
		team: 'Team 1',
		lastUpdatedAt: Date.now(),
		createdAt: Date.now()
	},
	{
		id: uuidv4(),
		title: 'Task 10 Title',
		description: 'Task 10 Description',
		status: 1,
		type: 1,
		team: 'Team 1',
		lastUpdatedAt: Date.now(),
		createdAt: Date.now()
	}
);

export default taskData;

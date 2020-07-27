export const initState = {
  email: '',
  name: '',
  lists: [],
  loading: true,
  display: -1
};

export const listNew = {
  id: `LIST${new Date().toISOString()}`,
  title: '',
  tasks: []
};

export const taskNew = {
  id: `TASK${new Date().toISOString()}`,
  description: '',
  done: false
};
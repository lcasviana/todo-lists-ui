export const initState = {
  authenticated: false,
  email: localStorage.getItem('email') || '',
  password: localStorage.getItem('password') || '',
  name: '',
  lists: [],
  loading: false,
  login: localStorage.getItem('email') && localStorage.getItem('password'),
};

export const listNew = {
  title: '',
  tasks: [],
};

export const taskNew = {
  description: '',
  done: false,
};
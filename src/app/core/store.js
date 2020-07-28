import { createStore } from 'redux';

import { listNew, taskNew, initState } from './states';
import types from './types';

export default createStore((state = initState, action) => {
  switch (action.type) {
    case types.login:
      const email = action.email, password = action.password;
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      return { ...state, email: action.email, password: action.password, name: action.name, authenticated: true };
    case types.logout:
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      return { ...state, email: '', password: '', name: '', lists: [], authenticated: false };

    case types.init:
      return { ...state, ...action.data };
    case types.save:
      return { ...state, ...action.data };

    case types.loaderShow:
      return { ...state, loading: true };
    case types.loaderHide:
      return { ...state, loading: false };

    case types.alertShow:
      return { ...state, alert: { open: true, message: action.alert } };
    case types.alertHide:
      return { ...state, alert: { open: false, message: '' } };

    case types.signIn:
      return { ...state, login: true };
    case types.signUp:
      return { ...state, login: false };
    case types.email:
      return { ...state, email: action.email };
    case types.password:
      return { ...state, password: action.password };
    case types.name:
      return { ...state, name: action.name };

    case types.listDisplay:
      return { ...state, display: action.display };
    case types.listNew:
      return { ...state, lists: [...state.lists, listNew] };
    case types.listDel:
      return { ...state, lists: state.lists.filter((_, li) => li !== action.list) };
    case types.listTitle:
      return { ...state, lists: state.lists.map((list, li) => li === action.list ? { ...list, title: action.title } : list) };

    case types.taskNew:
      return { ...state, lists: state.lists.map((list, li) => li === action.list ? { ...list, tasks: [...list.tasks, taskNew] } : list) };
    case types.taskDel:
      return { ...state, lists: state.lists.map((list, li) => li === action.list ? { ...list, tasks: list.tasks.filter((_, ti) => ti !== action.task) } : list) };
    case types.taskDone:
      return { ...state, lists: state.lists.map((list, li) => li === action.list ? { ...list, tasks: list.tasks.map((task, ti) => ti === action.task ? { ...task, done: action.done } : task) } : list) };
    case types.taskDesc:
      return { ...state, lists: state.lists.map((list, li) => li === action.list ? { ...list, tasks: list.tasks.map((task, ti) => ti === action.task ? { ...task, description: action.description } : task) } : list) };

    default:
      return { ...state };
  }
});
import { createStore } from 'redux';

import { listNew, taskNew, initState } from './states';
import types from './types';

const todo = (state = initState, action) => {
  switch (action.type) {
    case types.init:
      return { ...state, ...action.user, loading: false };
    case types.save:
      return { ...state, ...action.user, loading: false };

    case types.loaderShow:
      return { ...state, loading: true };

    case types.listDisplay:
      return { ...state, display: action.display };
    case types.listNew:
      return { ...state, lists: [...state.lists, listNew] };
    case types.listDel:
      return { ...state, lists: state.lists.filter((_, li) => li !== action.list), display: -1 };
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
};

export default createStore(todo);
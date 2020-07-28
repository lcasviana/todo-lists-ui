import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, List, ListSubheader, TextField } from '@material-ui/core';
import { Add, Delete, Close } from '@material-ui/icons';

import types from '../core/types';
import TodoTask from './task';

export default ({ list, title, tasks }) => {
  const dispatch = useDispatch();

  const listTitle = (title) => {
    dispatch({ type: types.listTitle, list, title });
  };

  const listDel = () => {
    dispatch({ type: types.listDel, list });
    dispatch({ type: types.listDisplay, display: -1 });
  };

  const taskNew = () => {
    dispatch({ type: types.taskNew, list });
  };

  const listDisplay = (display) => {
    dispatch({ type: types.listDisplay, display });
  };

  return (
    <Card className='w-100' style={{ overflowY: 'auto' }}>
      <List style={{ background: '#d2d2d2', padding: 0 }}>
        <ListSubheader className='flex items-center pb2 pt2'>
          <TextField
            style={{ flexGrow: 1, background: '#ffffff', borderRadius: '4px' }}
            onChange={(event) => listTitle(event.target.value)}
            placeholder='Lista...'
            variant='outlined'
            value={title}
          />
          <Button onClick={() => taskNew()}><Add /> Tarefa</Button>
          <Button onClick={() => listDel()}><Delete /> Lista</Button>
          <Button onClick={() => listDisplay(-1)}><Close /> Fechar</Button>
        </ListSubheader>
        {tasks && tasks.map((task, index) =>
          <TodoTask
            key={index}
            list={list}
            task={index}
            done={task.done}
            description={task.description}
          />
        )}
      </List>
    </Card>
  );
};
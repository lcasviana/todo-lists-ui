import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, List, ListSubheader, TextField } from '@material-ui/core';
import { Add, Delete } from '@material-ui/icons';

import types from '../core/types';
import TodoTask from './task';

export default (props) => {
  const { list, title, tasks } = props;
  const dispatch = useDispatch();

  const listTitle = (title) => {
    dispatch({ type: types.listTitle, list, title });
  };

  const listDel = () => {
    dispatch({ type: types.listDel, list });
  };

  const taskNew = () => {
    dispatch({ type: types.taskNew, list });
  };

  return (
    <Card className='w-100'>
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
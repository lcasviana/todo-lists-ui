import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, List, ListSubheader, Divider, ListItem, ListItemText } from '@material-ui/core';

import types from '../core/types';

export default ({ list, title, tasks }) => {
  const dispatch = useDispatch();

  const listDisplay = (display) => {
    dispatch({ type: types.listDisplay, display });
  };

  return (
    <Card onClick={() => listDisplay(list)} style={{ maxWidth: '1200px', margin: '0 auto', cursor: 'pointer' }} className='w-100'>
      <List dense={true} style={{ padding: 0 }}>
        <ListSubheader>
          {!!title ? <span>{title}</span> : <span className='i'>Sem título...</span>}
        </ListSubheader>
        <Divider />
        {tasks.map((task, index) => !!task.description
          ? <ListItem style={{ paddingBottom: 0, paddingTop: 0, textDecoration: task.done ? 'line-through' : 'link' }} key={index}>
            <ListItemText>{task.description}</ListItemText></ListItem>
          : <ListItem style={{ paddingBottom: 0, paddingTop: 0, textDecoration: task.done ? 'line-through' : 'link' }} key={index}>
            <ListItemText className='i'>...</ListItemText></ListItem>)}
      </List>
    </Card>
  );
};
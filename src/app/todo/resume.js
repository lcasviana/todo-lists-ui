import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, List, ListSubheader, Divider, ListItem, ListItemText, Checkbox } from '@material-ui/core';

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
        {tasks.map((task, index) =>
          <>
            <ListItem style={{ paddingBottom: 0, paddingTop: 0, textDecoration: 'link' }} key={index}>
              <ListItemText>
                <Checkbox style={{ padding: '0.25rem' }} checked={task.done} color='default' disabled={true} />
                {task.description}
              </ListItemText>
            </ListItem>
          </>
        )}
      </List>
    </Card>
  );
};
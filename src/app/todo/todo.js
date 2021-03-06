import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, useMediaQuery, useTheme } from '@material-ui/core';

import Nav from '../shared/nav';
import TodoList from './list';
import TodoResume from './resume';
import { getUserData } from '../core/actions';
import types from '../core/types';

export default ({ email, name }) => {
  const dispatch = useDispatch();
  const fullScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

  useEffect(() => {
    getUserData(dispatch, { email });
  }, [dispatch, email]);

  const { display, lists } = useSelector(s => s);

  const listDisplay = (display) => {
    dispatch({ type: types.listDisplay, display });
  };

  return (
    <>
      <Nav email={email} name={name} lists={lists} />
      <div className='pa4' style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {!!lists &&
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gridGap: '1rem', alignItems: 'baseline' }}>
            {lists.map((list, index) => <div key={index}>
              <TodoResume
                key={index}
                list={index}
                title={list.title}
                tasks={list.tasks}
              />
              <Dialog open={index === display} onClose={() => listDisplay(-1)} fullScreen={fullScreen} fullWidth={true} maxWidth={'md'}>
                <TodoList
                  key={index}
                  list={display}
                  title={list.title}
                  tasks={list.tasks}
                />
              </Dialog>
            </div>)}
          </div>
        }
      </div>
    </>
  );
};
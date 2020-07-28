import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Nav from '../shared/nav';
import Loader from '../shared/loader';
import TodoList from './list';
import TodoResume from './resume';
import { getUserData } from '../core/actions';

export default ({ email, name }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUserData(dispatch, { email });
  }, [dispatch, email]);

  const { display, loading, lists } = useSelector(s => s);

  return (
    <>
      <Loader loading={loading} />
      <Nav email={email} name={name} lists={lists} />
      <div className='pa4' style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {lists &&
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gridGap: '1rem', alignItems: 'baseline' }}>
            {lists.map((list, index) =>
              <TodoResume
                key={index}
                list={index}
                title={list.title}
                tasks={list.tasks}
              />
            )}
          </div>
        }
        {display !== -1 && lists && lists
          .filter((_, index) => index === display)
          .map((list, index) =>
            <TodoList
              key={index}
              list={display}
              title={list.title}
              tasks={list.tasks}
            />
          )
        }
      </div>
    </>
  );
};
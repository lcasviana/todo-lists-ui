import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Nav from '../shared/nav';
import Loader from '../shared/loader';
import TodoList from './list';
import TodoResume from './resume';
import types from '../core/types';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://todo-lists-api.herokuapp.com/api/users/${'lcasviana@gmail.com'}`)
      .then(res => dispatch({ type: types.init, user: res.data }))
      .catch(err => console.error(err));
  }, [dispatch]);

  const { display, loading, lists } = useSelector(s => s);

  return (
    <>
      <Loader loading={loading} />
      <Nav />
      <div className='pa4' style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {display === -1 && lists &&
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
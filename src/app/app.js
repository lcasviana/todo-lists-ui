import React from 'react';
import { useSelector } from 'react-redux';

import Login from './shared/login';
import Todo from './todo/todo';

export default () => {
  const { authenticated, email, password, name, login } = useSelector(s => s);

  return (
    <>
      {!authenticated && <Login email={email} password={password} name={name} login={login} />}
      {!!authenticated && <Todo email={email} name={name} />}
    </>
  );
};
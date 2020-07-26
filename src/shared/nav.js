import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { Add, Save, ArrowBack } from '@material-ui/icons';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import axios from 'axios';

import types from '../core/types';

export default () => {
  const { display, lists, name } = useSelector(s => s);
  const dispatch = useDispatch();

  const save = () => {
    dispatch({ type: types.loaderShow });
    axios.patch(`http://localhost:9000/${'lcasviana@gmail.com'}`, { lists })
      .then(res => dispatch({ type: types.save, user: res.data }))
      .catch(err => console.error(err));
  };

  const listDisplay = (display) => {
    dispatch({ type: types.listDisplay, display });
  };

  const listNew = () => {
    dispatch({ type: types.listNew });
  };

  return (
    <AppBar position='static' style={{ background: '#212121' }}>
      <Toolbar style={{ maxWidth: '1200px', margin: '0 auto' }} className='flex items-center w-100'>
        <Typography variant='h6' style={{ flexGrow: 1 }}> Lista de Tarefas </Typography>
        <Typography variant='h6' style={{ flexGrow: 1 }}> {name} </Typography>
        {display === -1 && <Button variant='contained' color='default' onClick={() => listNew()}><Add /> Lista</Button>}
        {display !== -1 && <Button variant='contained' color='default' onClick={() => listDisplay(-1)}><ArrowBack /> Voltar</Button>}
        <Button variant='contained' color='default' onClick={() => save()}><Save /> Salvar</Button>
      </Toolbar>
    </AppBar>
  );
};
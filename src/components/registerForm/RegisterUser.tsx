import React from 'react';
import { TextField, Paper, Grid, Button } from '@mui/material';
import './Register.css';

const RegisterUser = () => {
  return (
    <div className='register-container'>
      <Paper elevation={3} className='register-paper'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id='outlined-basic'
              label='Name'
              variant='outlined'
              className='text-field'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='outlined-basic'
              label='Phone Number'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button variant='contained' color='primary'>
              Register
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default RegisterUser;

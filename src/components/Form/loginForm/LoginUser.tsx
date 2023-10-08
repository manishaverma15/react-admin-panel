import React from 'react';
import { TextField, Paper, Grid, Button, Box } from '@mui/material';
import './Login.css';

const LoginUser = () => {
  return (
    <div className='register-container'>
      <Paper elevation={3} className='register-paper'>
        <div>
          <h4 style={{ textAlign: 'center' }}>To login fill the credentials</h4>
        </div>
        <Grid container spacing={2}>
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
              label='Password'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button variant='contained' color='primary' style={{ textTransform: 'none' }}>
              Login
            </Button>
          </Grid>
          <Grid style={{ textAlign: 'center' }}>
            <Box className='new-account'>
              <h6>Do not have an account? Please Register</h6>
              <Button variant='contained' color='primary'>
                Register
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
export default LoginUser;
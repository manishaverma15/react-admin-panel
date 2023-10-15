import React, { useState } from 'react';
import { TextField, Paper, Grid, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { userLoggedIn } from '../authSlice';

const LoginForm = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;

    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleNavigate = () => {
    navigate('/dashboard');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('form-data', formData);

    dispatch(userLoggedIn({ email: formData.email, password: formData.password }));

    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className='register-container'>
      <Paper elevation={3} className='register-paper'>
        <div>
          <h4 style={{ textAlign: 'center' }}>To login fill the credentials</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name='email'
                id='outlined-basic'
                label='Email'
                variant='outlined'
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='password'
                id='outlined-basic'
                label='Password'
                variant='outlined'
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button variant='contained' color='primary' style={{ textTransform: 'none' }} onClick={handleNavigate}>
                Login
              </Button>
            </Grid>
            <Grid style={{ textAlign: 'center' }}>
              <Box className='new-account'>
                <h6>Do not have an account? Please Register</h6>
                <Link to='/register'>
                  <Button variant='contained' color='primary'>
                    Register
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}
export default LoginForm;
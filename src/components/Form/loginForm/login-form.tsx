import React from 'react';
import { TextField, Paper, Grid, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { userLoggedIn } from '../authSlice';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required').test(
    'is-valid-domain',
    'Invalid email domain',
    function (value) {
      if (value) {
        const validDomains = ['.com', '.org', '.net'];
        const emailDomain = value.split('.').pop();
        return validDomains.includes(`.${emailDomain}`);
      }
      return true;
    }
  ),
  password: yup.string().required('Password is required'),
});


const LoginForm = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    dispatch(userLoggedIn(data));
    reset();
    handleNavigate();
  };

  const handleNavigate = () => {
    navigate('/dashboard');
  };

  return (
    <Box className='main-container'>
      <Box className='login-container'>
        <Paper elevation={3} className='login-subContainer'>
          <Box className='join-us'>
            <h4 className='title'>Sign in</h4>
            <span className='title'>Enter your email and password to login</span>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name='email'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      name='email'
                      id='outlined-basic'
                      label='Email'
                      variant='outlined'
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name='password'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      name='password'
                      id='outlined-basic'
                      label='Password'
                      variant='outlined'
                      fullWidth
                      error={!!errors.password}
                      helperText={errors.password?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button variant='contained'
                  color='primary'
                  style={{ textTransform: 'none' }}
                  type='submit'
                >
                  Login
                </Button>
              </Grid>
              <Grid style={{ textAlign: 'center', margin: 'auto' }}>
                <Box className='new-account'>
                  <h6>Do not have an account?</h6>
                  <Link to='/register'>Register</Link>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Box>
  );
}
export default LoginForm;
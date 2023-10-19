import React, { useState } from 'react';
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
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});


const LoginForm = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

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

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(userLoggedIn({ email: formData.email, password: formData.password }));
    setFormData({
      email: '',
      password: '',
    });

    handleNavigate();
  };

  return (
    <div className='register-container'>
      <Paper elevation={3} className='register-paper'>
        <div>
          <h4 style={{ textAlign: 'center' }}>To login fill the credentials</h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    name='email'
                    id='outlined-basic'
                    label='Email'
                    variant='outlined'
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    name='password'
                    id='outlined-basic'
                    label='Password'
                    variant='outlined'
                    fullWidth
                    value={formData.password}
                    onChange={handleChange}
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
    </div>
  );
}
export default LoginForm;
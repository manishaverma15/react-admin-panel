import React, { useState } from 'react';
import { TextField, Paper, Grid, Button, Box } from '@mui/material';
import './Register.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { User } from '../../../services/auth';
import { userRegistered } from '../authSlice';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useForm, Controller, Form } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must not exceed 20 characters'),
  phoneNumber: yup
    .string()
    .required('Phone Number is required')
    .matches(/^\d+$/, 'Phone Number must contain only numeric characters'),
});


const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [initialValues, setinitialValues] = useState<Omit<User, 'id'>>({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinitialValues({
      ...initialValues,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(userRegistered(initialValues));

    setinitialValues({
      name: '',
      email: '',
      password: '',
      phoneNumber: ''
    })
  };

  return (
    <Box className='register-container'>
      <Paper elevation={3} className='register-paper'>
        <Box>
          <h2 style={{ textAlign: 'center' }}>To register fill the details</h2>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id='outlined-basic'
                    label='Name'
                    name='name'
                    variant='outlined'
                    className='text-field'
                    value={field.value}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id='outlined-basic'
                    label='Email'
                    name='email'
                    variant='outlined'
                    value={field.value}
                    onChange={handleChange}
                    fullWidth
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
                    id='outlined-basic'
                    label='Password'
                    name='password'
                    variant='outlined'
                    value={field.value}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password?.message}
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
                    id='outlined-basic'
                    label='Phone Number'
                    variant='outlined'
                    name='phoneNumber'
                    value={field.value}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button variant='contained' color='primary'
                style={{ textTransform: 'none' }}
                type='submit'
              >
                Register
              </Button>
            </Grid>

            <Grid style={{ textAlign: 'center', margin: 'auto' }}>
              <Box className='already-account'>
                <h6>Already have an account?</h6>
                <Link to='/login'>login</Link>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default RegisterForm;

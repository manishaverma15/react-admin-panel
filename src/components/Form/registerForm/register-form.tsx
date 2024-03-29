import React from 'react';
import { TextField, Paper, Grid, Button, Box } from '@mui/material';
import './Register.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { User } from '../../../services/auth';
import { userRegistered } from '../authSlice';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
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

const inputFields = [
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email' },
  { name: 'password', label: 'Password' },
  { name: 'phoneNumber', label: 'Phone Number' },
];

const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: Omit<User, 'id'>) => {
    dispatch(userRegistered(data));
    reset();
  };

  return (
    <Box className='main-container'>
      <Box className='register-container'>
        <Paper elevation={3} className='register-subContainer'>
          <Box className='join-us'>
            <h4 className='title'>Join us today</h4>
            <span className='title'>Enter your details to register</span>
          </Box>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
              {inputFields.map((field) => (
                  <Grid item xs={12} key={field.name}>
                    <Controller
                      name={field.name as "name" | "email" | "password" | "phoneNumber"}
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          {...field}
                          id='outlined-basic'
                          label={field.name}
                          variant='outlined'
                          className='text-field'
                          fullWidth
                          error={!!errors[field.name]}
                          helperText={errors[field.name]?.message}
                        />
                      )}
                    />
                  </Grid>
                ))}
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
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default RegisterForm;

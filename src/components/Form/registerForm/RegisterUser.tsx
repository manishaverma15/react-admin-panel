import React, { useState } from 'react';
import { TextField, Paper, Grid, Button, Box } from '@mui/material';
import './Register.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { User } from '../../../services/auth';
import { userRegistered } from '../authSlice';
import { v4 as uuidv4 } from 'uuid';


const RegisterUser = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState<User>({
    id: uuidv4(),
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(userRegistered(formData));

    setFormData({
      id: uuidv4(),
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id='outlined-basic'
              label='Name'
              name='name'
              variant='outlined'
              className='text-field'
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='outlined-basic'
              label='Email'
              name='email'
              variant='outlined'
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='outlined-basic'
              label='Password'
              name='password'
              variant='outlined'
              value={formData.password}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='outlined-basic'
              label='Phone Number'
              variant='outlined'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button variant='contained' color='primary'
              style={{ textTransform: 'none' }}
              onClick={handleSubmit}>
              Register
            </Button>
          </Grid>

          <Grid style={{ textAlign: 'center' }}>
            <Box className='already-account'>
              <h6>Already have an account?</h6>
              <Button variant='contained' color='primary'>
                Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default RegisterUser;

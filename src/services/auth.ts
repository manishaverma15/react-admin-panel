import React from 'react';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

const BASE_URL = 'api';

export async function loginUser(credentials: { email: string; password: string }): Promise<User> {
  console.log('creds', credentials)
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Invalid credentials');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}

export async function registerUser(userData: any): Promise<User> {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    console.log('user-data', userData)

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();
    console.log('data', data)
    return data;

  } catch (error) {
    console.error('Error while register user:', error);
    throw error;
  }
}

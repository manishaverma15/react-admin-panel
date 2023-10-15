import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import { User, registerUser as registerUserAPI, loginUser as loginUserAPI } from '../../services/auth';

type State = {
  data: User | null;
  loading: boolean;
  error: any
}

const initialState: State = {
  data: null,
  loading: false,
  error: null,
};

export const userLoggedIn = (credentials: {email: string, password: string} ) => async (dispatch: AppDispatch) => {
  try {
    const user = await loginUserAPI(credentials);
    return user;
  } catch (error) {
    console.log('error',error)
  }
};

export const userRegistered = (user: User) => async (dispatch: AppDispatch) => {
  try {
    const registeredUser = await registerUserAPI(user);
    dispatch(setUser(registeredUser))

  } catch (error: any) {
    console.log(error)
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload
    },
    logout: (state: any) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;

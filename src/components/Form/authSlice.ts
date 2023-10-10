import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import { User, registerUser as registerUserAPI } from '../../services/auth';


type State = {
  data: User[];
  loading: boolean;
  error: any
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

export const userRegistered = (user: any) => async (dispatch: AppDispatch) => {
  try {
    const users = await registerUserAPI(user);
    dispatch(addUser(users))

  } catch (error: any) {
    console.log(error)
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchStart: (state: any) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state: any, action: any) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    fetchError: (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload;
    },
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
    logout: (state: any) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchError, logout, addUser } = authSlice.actions;
export default authSlice.reducer;

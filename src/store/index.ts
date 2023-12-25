import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import authReducer from '../components/Form/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

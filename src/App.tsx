import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import createMockServer from './mock-server';
import RegisterForm from './components/Form/registerForm/register-form';
import LoginForm from './components/Form/loginForm/login-form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DashBoardScreen } from './components/Dashboard/dashBoard';

createMockServer();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/dashboard' element={<DashBoardScreen />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

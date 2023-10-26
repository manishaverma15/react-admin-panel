import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import createMockServer from './mock-server';
import RegisterForm from './components/Form/registerForm/register-form';
import LoginForm from './components/Form/loginForm/login-form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MiniDrawer from './components/CustomDrawer/customDrawer';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

createMockServer();
const theme = createMuiTheme();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/dashboard' element={<MiniDrawer theme={theme}/>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

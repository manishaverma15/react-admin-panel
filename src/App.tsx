import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import createMockServer from './mock-server';
import RegisterUser from './components/Form/registerForm/RegisterUser';
createMockServer();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RegisterUser />
    </Provider>
  );
};

export default App;

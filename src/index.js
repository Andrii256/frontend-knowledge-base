import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import App from './App';
import { store } from './redux';

ReactDOM.render(
  <HashRouter>
    <ReduxProvider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReduxProvider>
  </HashRouter>,
  document.getElementById('root')
);

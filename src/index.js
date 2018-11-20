import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { history } from 'historyInstance';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider } from '@material-ui/core/styles/index';
import configureStore from 'store/configure-store';

import * as serviceWorker from './serviceWorker';
import App from './App';

import theme from 'theme';
import './index.css';

require('dotenv').config();
const { store, persistor } = configureStore();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <App/>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>, document.getElementById('root')
);

serviceWorker.unregister();
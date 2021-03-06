import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store} key="1afsfaf">
      <App key="2" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

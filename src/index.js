import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'assets/styles/index.css';
import reportWebVitals from 'reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';

import store from 'ex-redux';

const history = createBrowserHistory()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router basename="/" history={history}>
      <App history={history} />
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { store } from './features/common/store';
import { Provider } from 'react-redux';
import './index.less';

// <Provider store={store}>
{
  /* </Provider>, */
}
render(<App />, document.getElementById('root'));

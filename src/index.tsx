import './assets/fonts/fonts.scss';


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './core/store';

import GlobalStyles from './styles/global-styles';
import './reboot/bs-reboot.scss';
import App from './components/app/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <App/>
        <GlobalStyles/>
    </Provider>
);

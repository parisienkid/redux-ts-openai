import './assets/fonts/fonts.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
// import { Theme}
import GlobalStyles from './styles/global-styles';
import './reboot/bs-reboot.scss';
import App from './components/app/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    // <ThemeProvider >
      <>
        <App/>
        <GlobalStyles/>
      </>
    // </ThemeProvider>
);

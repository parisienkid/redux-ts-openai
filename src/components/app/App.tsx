import styled from 'styled-components';

import { ThemeProvider } from 'styled-components'
import { baseTheme } from '../../core/theme/theme';
import GlobalStyles from '../../styles/global-styles';

function App() {
  return (
      <ThemeProvider theme={baseTheme}>
        <div className="App">

        </div>
        <GlobalStyles/>
      </ThemeProvider>
  );
}

export default App;

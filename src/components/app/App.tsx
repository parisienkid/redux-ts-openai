import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store';

import { ThemeProvider } from 'styled-components';
import { FC } from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';


const AppWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
`

const App: FC = () => {

    const {theme} = useSelector((state: RootState) => state.theme);

    return (
        <ThemeProvider theme={theme}>
            <AppWrapper>
                <Header/>
                <Footer/>
            </AppWrapper>
        </ThemeProvider>
    );
}

export default App;

import { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global-styles';

import Header from '../header/Header';
import AppRoutes from '../../routes/Routes';
import Footer from '../footer/Footer';

import {BrowserRouter as Router} from "react-router-dom";

const AppWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
`

const App: FC = () => {

    const {theme} = useSelector((state: RootState) => state.theme);

    

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <AppWrapper>
                    <Header/>
                    <AppRoutes/>
                    <Footer/>
                </AppWrapper>
            </Router>
            <GlobalStyles background={theme.colors.bg}/>
        </ThemeProvider>
    );
}

export default App;

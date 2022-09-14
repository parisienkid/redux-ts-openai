import React, { FC, useEffect, Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import styled from 'styled-components';

import { mainTheme } from '../../core/theme/theme';

import Container from '../../components/container/Container';
import MainPageCard from '../../components/main-page-card/MainPageCard';

const dalleImage = require('../../assets/images/outpainting-home-right-optimized.jpeg')
const jellyfishImage = require('../../assets/images/jellyfish-some-overlay-optimized.jpeg')

const MainPageWrapper = styled.div`
    height: calc(100vh - ${({theme}) => theme.sizes.default.header.height}px);
    background-color: rgb( ${({theme}) => theme.colors.header});
    padding-bottom: ${({theme}) => theme.sizes.default.header.height}px;
`

const MainPageContent = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 65fr 35fr;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    @media ${({theme}) => theme.media.extraLarge} {
        grid-template-columns: ${({theme}) => theme.sizes.xl.mainPage.col};
        grid-template-rows: ${({theme}) => theme.sizes.xl.mainPage.row};
    }
    @media ${({theme}) => theme.media.large} {
        grid-template-columns: ${({theme}) => theme.sizes.l.mainPage.col};
        grid-template-rows: ${({theme}) => theme.sizes.l.mainPage.row};
    }
    @media ${({theme}) => theme.media.medium} {
        grid-template-columns: ${({theme}) => theme.sizes.m.mainPage.col};
        grid-template-rows: ${({theme}) => theme.sizes.m.mainPage.row};
        grid-column-gap: 0;
        grid-row-gap: 30px;
    }
    @media ${({theme}) => theme.media.small} {
        grid-template-columns: ${({theme}) => theme.sizes.s.mainPage.col};
        grid-template-rows: ${({theme}) => theme.sizes.s.mainPage.row};
        grid-column-gap: 0;
        grid-row-gap: 30px;
    }
`

const MainPage: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTheme(mainTheme));
    }, []);

    return (
        <MainPageWrapper>
            <Container>
                <MainPageContent>
                    <MainPageCard 
                        img={dalleImage} 
                        date={'AUGUST 31, 2022'} 
                        title={'DALL·E: Introducing Outpainting'}
                        to="/"/>
                    <MainPageCard 
                        img={jellyfishImage}
                        date={'AUGUST 24, 2022'}
                        title={'Our approach to alignment research.'}
                        to="/"/>
                </MainPageContent>
            </Container>
        </MainPageWrapper>
    );
};

export default MainPage;
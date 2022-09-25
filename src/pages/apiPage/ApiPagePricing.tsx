import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { apiTheme } from '../../core/theme/theme';
import styled, { css } from 'styled-components';
import Btn from '../../components/buttons/Btn';


import ApiHeader from './components/ApiHeader';
import Container from '../../components/container/Container';

import { ApiPageWrapper, StyledLink, DocsBtns, BenifitsIcon, Benefits, BenifitsItem, ApiIntro } from './ApiPageMain';



const ModelsWrapper = styled.div`
    padding: 100px 0;
`

const ModelsCards = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 15px;
    @media ${({theme}) => theme.media.extraLarge} {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        grid-row-gap: 15px;
    }
    @media ${({theme}) => theme.media.small} {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto;
        grid-row-gap: 15px;
    }
`

const ModelCard = styled.div`
    padding: 20px;
    background-color: rgba(${({theme}) => theme.colors.constants.silver});
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 215px;
`

const ModelCardTitle = styled.div`
    font-size: 1rem;
`

const ModelCardPrice = styled.div`
    font-size: 1.2rem;
    position: relative;
    &:after {
        display: block;
        content: '/1K tokens';
        font-size: .7rem;
        color: rgba(0,0,0,.7);
        position: absolute;
        right: -75px;
        top: 50%;
        transform: translateY(-50%);
    }
`

const ApiPagePricing = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(changeTheme(apiTheme));
    }, []);

    return (
        <ApiPageWrapper>
            <ApiHeader/>
            <ApiIntro>
                <Container>
                    <h1>Pricing</h1>
                    <h4>Simple and flexible. Only pay for what you use.</h4>
                    <DocsBtns margin="30px auto 0 auto">
                        <Btn to="/" background="0,0,0" color="255,255,255" after="">get started</Btn>
                        <StyledLink nobg to="/" background='inherit' color='0,0,0' after=''>contact sales</StyledLink>
                    </DocsBtns>
                </Container>
            </ApiIntro>
            <ModelsWrapper>
                <Container>
                    <h3>Base models</h3>
                    <ModelsCards>
                        <ModelCard>
                            <ModelCardTitle>Ada</ModelCardTitle>
                            <ModelCardPrice>$0.0004</ModelCardPrice>
                        </ModelCard>
                        <ModelCard>
                            <ModelCardTitle>Ada</ModelCardTitle>
                            <ModelCardPrice>$0.0004</ModelCardPrice>
                        </ModelCard>
                        <ModelCard>
                            <ModelCardTitle>Ada</ModelCardTitle>
                            <ModelCardPrice>$0.0004</ModelCardPrice>
                        </ModelCard>
                        <ModelCard>
                            <ModelCardTitle>Ada</ModelCardTitle>
                            <ModelCardPrice>$0.0004</ModelCardPrice>
                        </ModelCard>
                    </ModelsCards>
                </Container>
            </ModelsWrapper>
            <Container>
                <Benefits>
                    <BenifitsItem>
                        <BenifitsIcon>flag</BenifitsIcon>
                        <h3>Start for free</h3>
                        <p>Our advanced inference infrastructure provides extremely short response times.</p>
                    </BenifitsItem>
                    <BenifitsItem>
                        <BenifitsIcon>barup</BenifitsIcon>
                        <h3>Pay as you go</h3>
                        <p>We can handle high volume requests that scale with your needs.</p>
                    </BenifitsItem>
                    <BenifitsItem>
                        <BenifitsIcon>check</BenifitsIcon>
                        <h3>Choose your model</h3>
                        <p>Easy to use and flexible enough to make machine learning teams more productive.</p>
                    </BenifitsItem>
                </Benefits>
            </Container>
        </ApiPageWrapper>
    );
};

export default ApiPagePricing;
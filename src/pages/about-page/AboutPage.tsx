import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { aboutTheme } from '../../core/theme/theme';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Container from '../../components/container/Container';
import LazyLoad from 'react-lazy-load';

import { InfoBlock, InfoDescr, InfoMain, InfoLinksWrapper } from '../../components/info-block/InfoBlock';
import { MDescr, MTime } from '../research-page/ResearchPage';
import { StyledRouterBtn } from '../../components/buttons/Btns';

// styled components

const AboutPageWrapper = styled.div`
    padding: 70px 0;
    h2 {
        max-width: 780px;
        margin-top: 120px;
    }
    @media ${({theme}) => theme.media.large} {
        padding: 45px 0;
    }
    a {
        margin-left: -16px;
    }
`

const ColoredBacground = styled.div`
    width: 100%;
    padding: 70px 0;
    background-color: rgba(${({theme}) => theme.colors.constants.ivory});
`

const ColoredBgWrapper = styled.div`
    margin: 0 auto;
    padding: 20px 0;
    max-width: 750px;
    a {
        margin-left: -16px;
    }
    h2 {
        margin-bottom: 30px;
    }
`

const MainFigure = styled.figure`
    height: 530px;
    width: 400px;
    margin: 0 auto;
    @media ${({theme}) => theme.media.large} {
        width: 300px;
        height: 400px;
    }
    @media ${({theme}) => theme.media.small} {
        width: 240px;
        height: 320px;
    }
`

const MainImg = styled.img`
    width: 100%;
`

const MainP = styled.p`
    font-size: 1.15rem;
    margin-bottom: 30px;
    max-width: 780px;
    @media ${({theme}) => theme.media.large} {
        font-size: .85rem;
    }
    @media ${({theme}) => theme.media.small} {
        font-size: .75rem;
    }
`

const MainText = styled.div`
    margin-bottom: 70px;
`

const JoinWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px 0 50px 0;
    h2 {
        margin-top: 0;
        margin-bottom: 30px;
    }
    p {
        margin-bottom: 30px;
    }
    @media ${({theme}) => theme.media.medium} {
        flex-direction: column-reverse;
    }
`

const JoinText = styled.div`
    max-width: 700px;
    margin-right: 30px;
    @media ${({theme}) => theme.media.medium} {
        margin-right: 0;
        margin-top: 40px;
    }
`

const JoinImg = styled.img`
    display: block; 
    width: 600px;
    @media ${({theme}) => theme.media.extraLarge} {
        width: 500px;
    }
    @media ${({theme}) => theme.media.large} {
        width: 360px;
    }
    @media ${({theme}) => theme.media.medium} {
        width: 100%;
    }
`

const GreySText = styled.div`
    position: relative;
    color: rgba(0,0,0,.5);
    font-size: .75rem;
    font-family: ${({theme}) => theme.fonts.colfax};
    @media ${({theme}) => theme.media.medium} {
        font-size: .65rem;
    }
`

const GreyLink = styled(Link)`
    display: inline-block;
    position: relative;
    margin-left: 0 !important;
    color: rgba(0,0,0,.5);
    &:after {
        content: '';
        display: block;
        position: absolute;
        height: 1px;
        left: 0;
        bottom: 4px;
        width: 100%;
        background-color: rgba(0,0,0,.4);
    }
    &:hover {
        color: rgba(0,0,0,.35);
        &:after {
            background-color: rgba(0,0,0,.35);
        }
    }
`

//

const AboutPage: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTheme(aboutTheme));
    }, []);

    return (
       <>
            <AboutPageWrapper>
                <Container>
                    <motion.h2
                        initial={{ opacity: .0, x: 10}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: .2,
                            duration: .4,
                            ease: 'easeIn'
                        }}
                    >OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity.</motion.h2>
                </Container>
            </AboutPageWrapper>
            <ColoredBacground>
                <MainFigure>
                    <motion.div
                        initial={{ opacity: .0, scale: .95}}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: .6,
                            duration: .4,
                            ease: 'easeIn'
                        }}
                    >
                        <LazyLoad>
                            <MainImg src='https://cdn.openai.com/research-covers/openai-charter/2x-no-mark.jpg'/>
                        </LazyLoad>
                    </motion.div>
                </MainFigure>
            </ColoredBacground>
            <AboutPageWrapper>
                <Container>
                    <MainText>
                        <MainP>OpenAI’s mission is to ensure that artificial general intelligence (AGI)—by which we mean highly autonomous systems that outperform humans at most economically valuable work—benefits all of humanity.</MainP>
                        <MainP>We will attempt to directly build safe and beneficial AGI, but will also consider our mission fulfilled if our work aids others to achieve this outcome.</MainP>
                        <StyledRouterBtn $nobg color='0,0,0' background='inherit' to='/redux-ts-openai/' after='▻'>Read our Charter</StyledRouterBtn>
                    </MainText>
                    <InfoBlock>
                        <InfoDescr>
                            <h3>Highlights</h3>
                        </InfoDescr>
                        <InfoMain>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr>DALL·E 2</MDescr>
                                <MTime>April 6, 2022 — Research, Multimodal</MTime>
                            </InfoLinksWrapper>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr>OpenAI Codex</MDescr>
                                <MTime>August 10, 2021 — API, Announcements</MTime>
                            </InfoLinksWrapper>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr>Multimodal Neurons in Artificial Neural Networks</MDescr>
                                <MTime>March 4, 2021 — Research, Milestones, Multimodal</MTime>
                            </InfoLinksWrapper>
                            <StyledRouterBtn $nobg color='0,0,0' to="/redux-ts-openai/" after='▻' background=''>VIEW ALL HIGHLIGHTS</StyledRouterBtn>
                        </InfoMain>
                    </InfoBlock>
                    <InfoBlock>
                        <InfoDescr>
                            <h3>Who’s Involved</h3>
                        </InfoDescr>
                        <InfoMain>
                            <p>OpenAI LP is governed by the board of the OpenAI nonprofit, comprised of OpenAI LP employees Greg Brockman (Chairman & President), Ilya Sutskever (Chief Scientist), and Sam Altman (CEO), and non-employees Adam D’Angelo, Reid Hoffman, Will Hurd, Tasha McCauley, Helen Toner, and Shivon Zilis.</p>
                            <p>Our investors include Microsoft, Reid Hoffman’s charitable foundation, and Khosla Ventures.</p>
                            <StyledRouterBtn $nobg color='0,0,0' to="/redux-ts-openai/" after='▻' background=''>VISIT NEWSROOM</StyledRouterBtn>
                        </InfoMain>
                    </InfoBlock>
                </Container>
            </AboutPageWrapper>
            <ColoredBacground>
                <Container>
                    <ColoredBgWrapper>
                        <h2>Our first-of-its-kind API can be applied to any language task, and serves millions of production requests each day.</h2>
                        <StyledRouterBtn $nobg color='0,0,0' to="/redux-ts-openai/" after='▻' background=''>EXPLORE API</StyledRouterBtn>
                    </ColoredBgWrapper>
                </Container>
            </ColoredBacground>
            <AboutPageWrapper>
                <Container>
                    <JoinWrapper>
                        <JoinText>
                            <h2>Join OpenAI</h2>
                            <p>We’re hiring talented people in a variety of roles across research, engineering, operations, people, finance, and policy to join our team in San Francisco.</p>
                            <StyledRouterBtn $nobg color='0,0,0' to="/redux-ts-openai/" after='▻' background=''>VIEW OPEN POSITIONS</StyledRouterBtn>
                        </JoinText>
                        <LazyLoad>
                            <JoinImg src="https://cdn.openai.com/miscellaneous/photos/openai-2018-robotics.jpg"/>
                        </LazyLoad>
                    </JoinWrapper>
                    <GreySText>Read our <GreyLink to='/'>Coordinated Vulnerability Disclosure Policy.</GreyLink></GreySText>
                </Container>
            </AboutPageWrapper>
       </>
    );
};

export default AboutPage;
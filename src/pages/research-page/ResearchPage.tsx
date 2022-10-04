import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { researchTheme } from '../../core/theme/theme';
import styled from 'styled-components';

import Container from '../../components/container/Container';
import { opacity } from '../../styles/animations';
import LazyLoad from 'react-lazy-load';

// const dalleGrad = require('../../assets/images/dalle-gradient.svg');
import multimodalGrad from '../../assets/images/research/multimodal-gradient.svg';
import dalleGrag from '../../assets/images/research/dalle-gradient.svg';
import clipGrad from '../../assets/images/research/clip-gradient.svg';
import imageGrad from '../../assets/images/research/image-gradient.svg';
import jukeboxGrad from '../../assets/images/research/jukebox-gradient.svg';
import solvingGrad from '../../assets/images/research/solving-gradient.svg';
import { InfoBlock, InfoDescr, InfoMain, InfoLinksWrapper } from '../../components/info-block/InfoBlock';
import { StyledRouterBtn } from '../../components/buttons/Btn';


const ResearchPageWrapper = styled.div`
    padding: 70px 0;
    h2 {
        max-width: 700px;
    }
    @media ${({theme}) => theme.media.large} {
        padding: 45px 0;
    }
`

export const MaintTitle = styled.h3`
    margin-top: 120px;
    @media ${({theme}) => theme.media.medium} {
        margin-top: 70px;
    }
`

const MilestonesWrapper = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-column-gap: 30px;
    grid-row-gap: 60px;
    margin-bottom: 80px;
    @media ${({theme}) => theme.media.medium} {
        grid-template-columns: 1fr;
    }
`

const MItem = styled.a`
    display: block;
    width: 100%;
    &:hover {
        opacity: .9;
        h4 {
            color: rgba(0,0,0,.8)
        }
    }
    /* animation: ${opacity} .5s forwards; */
`



const MPicture = styled.figure`
    width: 100%;
    position: relative;
    background-color: rgba(${({theme}) => theme.colors.constants.silver});
    min-height: 480px;
    @media ${({theme}) => theme.media.large} {
        height: 356px;
    }
    @media ${({theme}) => theme.media.medium} {
        height: 500px;
    }
    @media ${({theme}) => theme.media.small} {
        height: 296px;
    }
`

const LazyMilestone = styled(LazyLoad)`
    width: 100%;
    position: relative;
    background-color: rgba(${({theme}) => theme.colors.constants.silver});
    height: 480px;
    @media ${({theme}) => theme.media.large} {
        height: 356px;
    }
    @media ${({theme}) => theme.media.medium} {
        height: 500px;
    }
    @media ${({theme}) => theme.media.small} {
        height: 296px;
    }
`

interface IMBgProps {
    src: string;
}

const MBg = styled.img<IMBgProps>`
    width: 100%;
    object-fit: cover;
    max-height: 480px;
    background-color: rgba(${({theme}) => theme.colors.constants.silver});
`

const MVideo = styled.video`
    max-width: 300px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    box-shadow: 0 0 25px rgb(0 0 0 / 15%);
    background-color: rgba(${({theme}) => theme.colors.constants.silver});
    @media ${({theme}) => theme.media.large} {
        max-width: 65%;
    }
    @media ${({theme}) => theme.media.medium} {
        max-width: 326px;
    }
    @media ${({theme}) => theme.media.small} {
        max-width: 170px;
    }
`

const MImg = styled.img`
    background-color: rgba(${({theme}) => theme.colors.constants.silver});
    max-width: 300px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    box-shadow: 0 0 25px rgb(0 0 0 / 15%);
    @media ${({theme}) => theme.media.large} {
        max-width: 65%;
    }
    @media ${({theme}) => theme.media.medium} {
        max-width: 326px;
    }
    @media ${({theme}) => theme.media.small} {
        max-width: 170px;
    }
`


const MDescr = styled.h4`
    margin-top: 10px;
    font-size: .8rem;
    line-height: 1rem;
    color: rgba(0,0,0);
    font-family: ${({theme}) => theme.fonts.colfax};
`

const MTime = styled.time`
    display: block;
    margin-top: 7px;
    font-size: .8rem;
    line-height: .8rem;
    color: rgba(0,0,0,.5);
    font-family: ${({theme}) => theme.fonts.colfax};
`



const ResearchPage: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTheme(researchTheme));
    }, []);

    return (
        <ResearchPageWrapper>
            <ResearchPageWrapper>
                <Container>
                    <h2>OpenAI conducts fundamental, long-term research toward the creation of safe AGI.</h2>
                    <MaintTitle>Milestones</MaintTitle>
                    <MilestonesWrapper>
                        <MItem>
                            <LazyMilestone>
                                <MPicture>
                                    <MBg src={`${multimodalGrad}`}></MBg>
                                    <MVideo poster="https://cdn.openai.com/research-covers/multimodal-neurons/2x-no-mark-animated-poster.jpg" autoPlay muted loop playsInline>
                                        <source src="https://cdn.openai.com/research-covers/multimodal-neurons/2x-no-mark-animated.mp4"/>
                                    </MVideo>
                                </MPicture>
                            </LazyMilestone>
                            <MDescr>Multimodal Neurons in Artificial Neural Networks</MDescr>
                            <MTime>March 4, 2021</MTime>
                        </MItem>
                        <MItem>
                            <LazyMilestone>
                                <MPicture>
                                    <MBg src={`${dalleGrag}`}></MBg>
                                    <MImg src="https://cdn.openai.com/research-covers/dall-e/2x-no-mark.jpg"/>
                                </MPicture>
                            </LazyMilestone>
                            <MDescr>DALL·E: Creating Images from Text</MDescr>
                            <MTime>January 5, 2021</MTime>
                        </MItem>
                        <MItem>
                            <LazyMilestone>
                                <MPicture>
                                    <MBg src={`${clipGrad}`}></MBg>
                                    <MImg src="https://cdn.openai.com/research-covers/clip/2x-no-mark.jpg"/>
                                </MPicture>
                            </LazyMilestone>
                            <MDescr>CLIP: Connecting Text and Images</MDescr>
                            <MTime>January 5, 2021</MTime>
                        </MItem>
                        <MItem>
                            <LazyMilestone>
                                <MPicture>
                                    <MBg src={`${imageGrad}`}></MBg>
                                    <MVideo poster="https://cdn.openai.com/research-covers/image-gpt/2x-no-mark-animated-poster.jpg" autoPlay muted loop playsInline>
                                        <source src="https://cdn.openai.com/research-covers/image-gpt/2x-no-mark-animated.mp4"/>
                                    </MVideo>
                                </MPicture>
                            </LazyMilestone>
                            <MDescr>Image GPT</MDescr>
                            <MTime>June 17, 2020</MTime>
                        </MItem>
                        <MItem>
                            <LazyMilestone>
                                <MPicture>
                                    <MBg src={`${jukeboxGrad}`}></MBg>
                                    <MImg src="https://cdn.openai.com/research-covers/jukebox/2x-no-mark.jpg"/>
                                </MPicture>
                            </LazyMilestone>
                            <MDescr>Jukebox</MDescr>
                            <MTime>April 30, 2020</MTime>
                        </MItem>
                        <MItem>
                            <LazyMilestone>
                                <MPicture>
                                    <MBg src={`${solvingGrad}`}></MBg>
                                    <MImg src="https://cdn.openai.com/research-covers/solving-rubiks-cube/2x-no-mark.jpg"/>
                                </MPicture>
                            </LazyMilestone>
                            <MDescr>Solving Rubik’s Cube with a Robot Hand</MDescr>
                            <MTime>October 15, 2019</MTime>
                        </MItem>
                    </MilestonesWrapper>
                    <InfoBlock>
                        <InfoDescr>
                            <h3>Blog</h3>
                        </InfoDescr>
                        <InfoMain>
                           <InfoLinksWrapper to='/'>
                                <MDescr >Introducing Whisper</MDescr>
                                <MTime >September 21, 2022 — Research</MTime>
                           </InfoLinksWrapper>
                           <InfoLinksWrapper to='/'>
                                <MDescr >Our approach to alignment research</MDescr>
                                <MTime >August 24, 2022 — Research</MTime>
                           </InfoLinksWrapper>
                           <InfoLinksWrapper to='/'>
                                <MDescr >DALL·E 2 Pre-Training Mitigations</MDescr>
                                <MTime >June 28, 2022 — Research</MTime>
                           </InfoLinksWrapper>
                            <StyledRouterBtn $nobg color='0,0,0' to="" after='▻' background=''>VIEW ALL POSTS</StyledRouterBtn>
                        </InfoMain>
                    </InfoBlock>
                    <InfoBlock>
                        <InfoDescr>
                            <h3>Publications</h3>
                        </InfoDescr>
                        <InfoMain>
                            <InfoLinksWrapper to='/'>
                                <MDescr >Efficient Training of Language Models to Fill in the Middle</MDescr>
                                <MTime >July 28, 2022</MTime>
                           </InfoLinksWrapper>
                           <InfoLinksWrapper to='/'>
                                <MDescr >Hierarchical Text-Conditional Image Generation with CLIP Latents</MDescr>
                                <MTime >April 13, 2022 — Read blog post</MTime>
                           </InfoLinksWrapper>
                           <InfoLinksWrapper to='/'>
                                <MDescr >Formal Mathematics Statement Curriculum Learning</MDescr>
                                <MTime >February 3, 2022 — Read blog post</MTime>
                           </InfoLinksWrapper>
                            <StyledRouterBtn $nobg color='0,0,0' to="" after='▻' background=''>VIEW ALL PUBLICATIONS</StyledRouterBtn>
                        </InfoMain>
                    </InfoBlock>
                </Container>
            </ResearchPageWrapper>
        </ResearchPageWrapper>
    );
};

export default ResearchPage;
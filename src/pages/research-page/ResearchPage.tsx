import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { researchTheme } from '../../core/theme/theme';
import styled from 'styled-components';

import Container from '../../components/container/Container';

// const dalleGrad = require('../../assets/images/dalle-gradient.svg');
import multimodalGrad from '../../assets/images/research/multimodal-gradient.svg';
import dalleGrag from '../../assets/images/research/dalle-gradient.svg';
import clipGrad from '../../assets/images/research/clip-gradient.svg';
import imageGrad from '../../assets/images/research/image-gradient.svg';
import jukeboxGrad from '../../assets/images/research/jukebox-gradient.svg';
import solvingGrad from '../../assets/images/research/solving-gradient.svg';
import { InfoBlock, InfoDescr, InfoMain } from '../../components/info-block/InfoBlock';


const ResearchPageWrapper = styled.div`
    padding-top: 70px;
    h2 {
        max-width: 700px;
    }
    h3 {
        margin-top: 120px;
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
`

const MPicture = styled.figure`
    width: 100%;
    position: relative;
`

interface IMBgProps {
    src: string;
}

const MBg = styled.img<IMBgProps>`
    width: 100%;
    object-fit: cover;
    max-height: 480px;
`

const MVideo = styled.video`
    max-width: 300px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    box-shadow: 0 0 25px rgb(0 0 0 / 15%);
`

const MImg = styled.img`
    max-width: 300px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    box-shadow: 0 0 25px rgb(0 0 0 / 15%);

`


const MDescr = styled.h4`
    margin-top: 10px;
    font-size: .8rem;
    line-height: .8rem;
    color: rgba(0,0,0);
    font-family: ${({theme}) => theme.fonts.colfax};
`

const MTime = styled.time`
    margin-top: 10px;
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
                    <h3>Milestones</h3>
                    <MilestonesWrapper>
                        <MItem>
                            <MPicture>
                                <MBg loading='lazy' src={`${multimodalGrad}`}></MBg>
                                <MVideo poster="https://cdn.openai.com/research-covers/multimodal-neurons/2x-no-mark-animated-poster.jpg" autoPlay muted loop playsInline>
                                    <source src="https://cdn.openai.com/research-covers/multimodal-neurons/2x-no-mark-animated.mp4"/>
                                </MVideo>
                            </MPicture>
                            <MDescr>Multimodal Neurons in Artificial Neural Networks</MDescr>
                            <MTime>March 4, 2021</MTime>
                        </MItem>
                        <MItem>
                            <MPicture>
                                <MBg loading='lazy' src={`${dalleGrag}`}></MBg>
                                <MImg loading='lazy' src="https://cdn.openai.com/research-covers/dall-e/2x-no-mark.jpg"/>
                            </MPicture>
                            <MDescr>DALL·E: Creating Images from Text</MDescr>
                            <MTime>January 5, 2021</MTime>
                        </MItem>
                        <MItem>
                            <MPicture>
                                <MBg loading='lazy' src={`${clipGrad}`}></MBg>
                                <MImg loading='lazy' src="https://cdn.openai.com/research-covers/clip/2x-no-mark.jpg"/>
                            </MPicture>
                            <MDescr>CLIP: Connecting Text and Images</MDescr>
                            <MTime>January 5, 2021</MTime>
                        </MItem>
                        <MItem>
                            <MPicture>
                                <MBg loading='lazy' src={`${imageGrad}`}></MBg>
                                <MVideo poster="https://cdn.openai.com/research-covers/image-gpt/2x-no-mark-animated-poster.jpg" autoPlay muted loop playsInline>
                                    <source src="https://cdn.openai.com/research-covers/image-gpt/2x-no-mark-animated.mp4"/>
                                </MVideo>
                            </MPicture>
                            <MDescr>Image GPT</MDescr>
                            <MTime>June 17, 2020</MTime>
                        </MItem>
                        <MItem>
                            <MPicture>
                                <MBg loading='lazy' src={`${jukeboxGrad}`}></MBg>
                                <MImg loading='lazy' src="https://cdn.openai.com/research-covers/jukebox/2x-no-mark.jpg"/>
                            </MPicture>
                            <MDescr>Jukebox</MDescr>
                            <MTime>April 30, 2020</MTime>
                        </MItem>
                        <MItem>
                            <MPicture>
                                <MBg loading='lazy' src={`${solvingGrad}`}></MBg>
                                <MImg loading='lazy' src="https://cdn.openai.com/research-covers/solving-rubiks-cube/2x-no-mark.jpg"/>
                            </MPicture>
                            <MDescr>Solving Rubik’s Cube with a Robot Hand</MDescr>
                            <MTime>October 15, 2019</MTime>
                        </MItem>
                    </MilestonesWrapper>
                    <InfoBlock>
                        <InfoDescr>
                            <h3>Blog</h3>
                        </InfoDescr>
                        <InfoMain>
                            
                        </InfoMain>
                    </InfoBlock>
                    <InfoBlock>
                        <InfoDescr>
                            <h3>Publications</h3>
                        </InfoDescr>
                        <InfoMain>
                            
                        </InfoMain>
                    </InfoBlock>
                </Container>
            </ResearchPageWrapper>
        </ResearchPageWrapper>
    );
};

export default ResearchPage;
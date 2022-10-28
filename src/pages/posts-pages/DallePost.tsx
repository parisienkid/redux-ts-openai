import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import styled from 'styled-components';
import introImg from '../../assets/images/posts/dalle/blog-cover.jpeg';
import { blogTheme } from '../../core/theme/theme';
import Container from '../../components/container/Container';
import { PostContainer, PostDate, PostTimeToRead, PostP, PostHR, Footnotes } from './styled-components/StyledComponents';
import DefaultSlider from '../../components/slider-default/DefaultSlider';
import { motion } from 'framer-motion';
import Switcher from '../../components/switcher/Switcher';

const PostInfo = styled.div`
    position: absolute;
    top: 200px;
    left: 0;
    @media ${({theme}) => theme.media.extraLarge} {
        left: -20px;
        top: 150px;
    }
    @media ${({theme}) => theme.media.large} {
        left: 0;
        top: 50px;
    }
`

const IntroImage = styled.img`
    width: 100%;
    height: 730px;
    object-fit: cover;
    
`

const IntroImageDescr = styled.div`
    font-family: ${({theme}) => theme.fonts.colfax};
    font-size: 12px;
    color: rgba(0,0,0,.5);
    margin-top: 10px;
    margin-bottom: 80px;
    @media ${({theme}) => theme.media.medium} {
        margin-bottom: 150px;
    }
`

const Subtitle = styled.h5`
    font-family: ${({theme}) => theme.fonts.colfax};
    margin-top: 20px;
    margin-bottom: 70px;
    font-size: 20px;
    font-weight: 400;
    @media ${({theme}) => theme.media.medium} {
        line-height: 25px;
    }
`

const SwitcherLeftContent = styled.img`
    width: 100%;
`

const SwitcherRightContent = styled.video`
    display: block;
    max-width: 1000px;
    margin: 0 auto;
    @media ${({theme}) => theme.media.large} {
        max-width: 600px;
    }
    @media ${({theme}) => theme.media.medium} {
        max-width: 100%;
    }
`



const DallePost: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTheme(blogTheme));
    }, []);


    return (
        <>
            <IntroImage src={introImg}/>
            <Container>
                <PostInfo>
                    <PostDate>August 31, 2022</PostDate>
                    <PostTimeToRead>5 minute read</PostTimeToRead>
                </PostInfo>
                <IntroImageDescr>Original outpainting by Emma Catnip</IntroImageDescr>
                <PostContainer>
                    <h1>DALL·E: Introducing Outpainting</h1>
                    <Subtitle>Extend creativity and tell a bigger story with DALL-E images of any size</Subtitle>
                    <p>Today we’re introducing Outpainting, a new feature which helps users extend their creativity by continuing an image beyond its original borders — adding visual elements in the same style, or taking a story in new directions — simply by using a natural language description.</p>
                </PostContainer>
                <Switcher left='end-result' right='timelapse' leftContent={<SwitcherLeftContent src='https://cdn.openai.com/outpainting/draft-20220826a/girl-with-a-pearl-earring.jpeg'/>} rightContent={<SwitcherRightContent muted autoPlay loop src='https://cdn.openai.com/outpainting/draft-20220829b/girl-with-a-pearl-earring-bts-cropped.mp4'/>}/>
                <PostContainer>
                    <PostP mt='40px' mb='25px'>DALL·E’s Edit feature already enables changes within a generated or uploaded image — a capability known as Inpainting. Now, with Outpainting, users can extend the original image, creating large-scale images in any aspect ratio. Outpainting takes into account the image’s existing visual elements — including shadows, reflections, and textures — to maintain the context of the original image.</PostP>
                    <PostP mb='40px'>More than one million people are using DALL·E, the AI system that generates original images and artwork from a natural language description, as a creative tool today. Artists have already created remarkable images with the new Outpainting feature, and helped us better understand its capabilities in the process.</PostP>
                    <DefaultSlider>
                        <img src="https://cdn.openai.com/outpainting/1.jpg" alt="Outpanting" />
                        <img src="https://cdn.openai.com/outpainting/2.jpg" alt="Outpanting" />
                        <img src="https://cdn.openai.com/outpainting/3.jpg" alt="Outpanting" />
                        <img src="https://cdn.openai.com/outpainting/4.jpg" alt="Outpanting" />
                        <img src="https://cdn.openai.com/outpainting/5.jpg" alt="Outpanting" />
                        <img src="https://cdn.openai.com/outpainting/6.jpg" alt="Outpanting" />
                        <img src="https://cdn.openai.com/outpainting/7.jpg" alt="Outpanting" />
                    </DefaultSlider>
                    <PostP mt='80px' mb='150px'>Outpainting is now available to all DALL·E users on desktop. To discover new realms of creativity, visit labs.openai.com or join the waitlist.</PostP>
                </PostContainer>
                <PostHR/>
                <Footnotes>
                    <p>Authors</p>
                    <a href='#'><span>OpenAI</span></a>
                </Footnotes>
                <PostHR/>
                <Footnotes mb='150px'>
                    <p>Filed Under</p>
                    <a href='#'><span>Announcements</span></a>
                </Footnotes>
            </Container>
        </>
    );
};

export default DallePost;
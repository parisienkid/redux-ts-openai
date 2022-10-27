import { FC, RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { dalleTheme } from '../../core/theme/theme';
import Container from '../../components/container/Container';
import { RouterBtn, DefaultBtn } from '../../components/buttons/Btns';
import Vimeo from '@u-wave/react-vimeo';
import LazyLoad from 'react-lazy-load';

import { motion } from 'framer-motion';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import FirstExample from './components/first-example/FirstExample';
import SecondExample from './components/second-example/SecondExample';
import ThirdExample from './components/third-example/ThirdExample';



// styled components

const IntroWrapper = styled.div`
    padding: 25vh 0 140px 0;
    position: relative;
    margin-top: -${({theme}) => theme.sizes.default.header.height}px;
    @media ${({theme}) => theme.media.extraLarge} {
        margin-top: ${({theme}) => theme.sizes.xl.header.height}px;
    }
    @media ${({theme}) => theme.media.large} {
        margin-top: ${({theme}) => theme.sizes.l.header.height}px;
    }
    @media ${({theme}) => theme.media.medium} {
        margin-top: ${({theme}) => theme.sizes.m.header.height}px;
    }
    @media ${({theme}) => theme.media.small} {
        margin-top: ${({theme}) => theme.sizes.s.header.height}px;
        padding: 15vh 0 100px 0;
    }
    h1 {
        /* font-size: 17.3rem; */
        font-size: 17rem;
        line-height: 17rem;
        text-align: center;
        color: white;
        word-wrap: break-word;
        pointer-events: none;
        text-align: justify;
        white-space: pre;
        @media (max-width: 1520px) {
            font-size: 15rem;
            line-height: 15rem;
        }
        @media (max-width: 1340px) {
            font-size: 13.5rem;
            line-height: 13.5rem;
        }
        @media ${({theme}) => theme.media.extraLarge} {
            font-size: 11rem;
            line-height: 11rem;
        }
        @media ${({theme}) => theme.media.large} {
            font-size: 8.4rem;
            line-height: 8.4rem;
        }
        @media ${({theme}) => theme.media.medium} {
            font-size: 6rem;
            line-height: 6rem;
        }
        @media ${({theme}) => theme.media.small} {
            font-size: 3.5rem;
            line-height: 3.5rem;
        }
    }
    h2 {
        font-size: 2.4rem;
        margin-top: 40px;
        color: white;
        @media ${({theme}) => theme.media.large} {
            font-size: 2rem;
        }
        @media ${({theme}) => theme.media.medium} {
            font-size: 1.6rem;
        }
        @media ${({theme}) => theme.media.small} {
            font-size: 1.1rem;
        }
    }
`

const IntroBtns = styled.div`
    position: absolute;
    right: 0;
    top: 10px;
    z-index: ${({theme}) => theme.order.header};
`

const NavList = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: column;
    margin-top: 80px;
    padding-left: 53px;
`

interface NavLinkProps {
    after: string
    before: string
}

const NavLink = styled.a<NavLinkProps>`
    color: #fff;
    display: block;
    padding: 17px 5px;
    position: relative;
    font-family: ${({theme}) => theme.fonts.colfax};
    font-weight: bold;
    font-size: .85rem;
    line-height: .85rem;
    @media ${({theme}) => theme.media.medium} {
        font-size: .75rem;
        line-height: .75rem;
        padding: 14px 5px;
    }
    @media ${({theme}) => theme.media.small} {
        font-size: .55rem;
        line-height: .55rem;
        padding: 12px 5px;
    }
    &:after {
        content: '${props => props.after}';
        display: block;
        left: -25px;
        position: absolute;
        top: 50%;
        margin-top: -1px;
        transform: translateY(-50%);
        font-family: IconsAI;
        color: #fff;
        font-size: .85rem;
        line-height: .85rem;
    }
    &:before {
        content: '';
        display: block;
        width: 5px;
        background-color: ${props => props.before};
        height: 100%;
        position: absolute;
        left:  -50px;
        top: 0;
    }
    &:hover {
        color: rgba(255,255,255,.6);
        &:after {
            color: rgba(255,255,255,.6);
        }
    }
`

const ImagesWrapper = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    height: calc(100% - 100px);
    width: 100%;
    overflow: hidden;
    @media ${({theme}) => theme.media.extraLarge} {
        padding-top: ${({theme}) => theme.sizes.xl.header.height}px;
    }
    @media ${({theme}) => theme.media.large} {
        padding-top: ${({theme}) => theme.sizes.l.header.height}px;
    }
    @media ${({theme}) => theme.media.medium} {
        padding-top: ${({theme}) => theme.sizes.m.header.height}px;
    }
    @media ${({theme}) => theme.media.small} {
        padding-top: ${({theme}) => theme.sizes.s.header.height}px;
    }
`

interface AnimaImageProps {
    top: string
    left: string
}

const AnimaImage = styled.img<AnimaImageProps>`
    position: absolute;
    max-width: 200px;
    display: block;
    left: ${props => props.left};
    top: ${props => props.top};
    transform: translateY(-50%) translateX(-50%);
    transition: 1s;
    opacity: 0;
    @media ${({theme}) => theme.media.medium} {
        max-width: 130px;
    }
    @media ${({theme}) => theme.media.small} {
        max-width: 110px;
    }
`

const WhiteWrapper = styled.div`
    background-color: #fff;
    padding: 150px 0 0 0;
    h3 {
        max-width: 800px;
    }
`

export const ExampleWrapper = styled.div`
    display: grid;
    grid-template-columns: 40% 40%;
    grid-column-gap: 20%;
    width: 100%;
    margin-top: 80px;
    position: relative;
    margin-bottom: 150px;
    @media ${({theme}) => theme.media.large} {
        grid-column-gap: 10%;
        grid-template-columns: 45% 45%;
    }
    @media ${({theme}) => theme.media.medium} {
        grid-template-columns: 100%;
        grid-row-gap: 30px;
    }
    &:after {
        content: 'right';
        font-family: ${({theme}) => theme.fonts.icons};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 40px;
        @media ${({theme}) => theme.media.medium} {
            display: none;
        }
    }
    .slick-slider {
        max-width: 100%;
        width: 100%;
        /* overflow: hidden; */
        margin-bottom: 30px;
        &.mini {
            margin-top: 40px;
            .slick-slide {
                /* max-width: 120px;
                min-width: 120px; */
                img {
                    padding: 0 5px;
                }
            }

        }
    }
    .slick-list {
        cursor: grab;
    }
`

interface BigMarginH3Props {
    color: string
}

const BigMarginH3 = styled.h3<BigMarginH3Props>`
    margin-top: 150px;
`

export const Tabs = styled.div`
    p {
        margin-top: 30px;
        font-size: 1.45rem;
        color: rgba(0,0,0,.4);
        white-space: pre-wrap;
        span {
            cursor: pointer;
            &.active {
                color: rgba(0,0,0,1)
            }
            &:hover {
                color: rgba(0,0,0,1);
            }
        }
        @media ${({theme}) => theme.media.large} {
            font-size: 1.2rem;
        }
        @media ${({theme}) => theme.media.medium} {
            
        }
        @media ${({theme}) => theme.media.small} {
            font-size: .8rem;
        }
    }
`

export const Descr = styled.div`
    font-family: ${({theme}) => theme.fonts.colfax};
    letter-spacing: 1px;
    font-size: .7rem;
    margin-bottom: 20px;
`

export const Carousel = styled.div`
    width: 100%;
`

export const MainImg = styled.img`
    display: block !important;
`

const ResearchWrapper = styled.div`
    background-color: #111;
    padding: 150px 0;
    h3 {
        color: #fff;
        max-width: 750px;
    }
`

const VimeoWrapper = styled.div`
    margin-top: 100px;
    width: 100%;
    background-size: cover;
    margin-bottom: 150px;
    @media ${({theme}) => theme.media.large} {
       margin-top: 50px;
    }
    iframe {
        width: 100%;
        height: 830px;
        @media ${({theme}) => theme.media.extraLarge} {
            height: 580px;
        }
        @media ${({theme}) => theme.media.large} {
            height: 440px;
        }
        @media ${({theme}) => theme.media.medium} {
            height: 330px;
        }
        @media ${({theme}) => theme.media.small} {
            height: 180px;
        }
    }
    p {
        color: #fff;
    }
`

const FoxesWrapper = styled.div`
    display: grid;
    grid-template-columns: 40fr 40fr 20fr;
    grid-column-gap: 25px;
    margin-top: 100px;    
    margin-bottom: 150px;
    @media ${({theme}) => theme.media.medium} {
        grid-template-columns: 1fr 1fr;
    }
`

const FoxExample = styled.div`
    width: 100%;
    p {
        margin-bottom: 15px;
        color: #fff;
        font-size: 18px;
        line-height: 18px;
    }
    img {
        width: 100%;
    }
`

const FoxDescr = styled.div`
    white-space: pre-wrap;
    color: #fff;
    margin-top: 27px;
    font-family: ${({theme}) => theme.fonts.colfax};
`

const Percents = styled.div`
    display: grid;
    margin-top: 100px;
    grid-template-columns: 200px 200px;
    grid-column-gap: 150px;
    margin-bottom: 100px;
    @media ${({theme}) => theme.media.medium} {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 50px;
    }
    @media ${({theme}) => theme.media.small} {
        grid-template-columns: 1fr;
        grid-row-gap: 30px;
    }
`

const Percent = styled.div`
    font-size: 70px;
    color: #fff;
    line-height: 75px;
`
const PersentDescr = styled.div`
    color: #fff;
    font-family: ${({theme}) => theme.fonts.colfax};
`

const MitigationsWrapper = styled.div`
    display: grid;
    margin-top: 60px;
    grid-column-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 150px;
    @media ${({theme}) => theme.media.medium} {
        grid-template-columns: 1fr;
        grid-row-gap: 50px;
    }
    img {
        width: 100%;
    }
`

const MitigationsTitle = styled.div`
    margin-top: 20px;
    font-weight: bold;
`

const MitigationsDescr = styled.div`
    margin-top: 10px;
`

const Btns = styled.div`
    display: flex;
    margin-bottom: 200px;
    @media ${({theme}) => theme.media.medium} {
        margin-bottom: 100px;
    }
    @media ${({theme}) => theme.media.small} {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 15px;
    }
`

const BottomImages = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    background-color: black;
    padding: 200px 0;
    h3 {
        max-width: 800px;
        color: #fff;
    }
    @media ${({theme}) => theme.media.medium} {
        padding: 120px 0;
    }
    @media ${({theme}) => theme.media.small} {
        padding: 70px 0;
    }
`

const DalleColors = styled.svg`
    margin-top: 50px;
    width: 120px;
    margin-bottom: 100px;
`

const Team = styled.div`
    margin-top: 30px;
    max-width: 900px;
    p {
        color: #fff;
        font-size: .7rem;
        line-height: .95rem;
        margin-top: 7px;
        @media ${({theme}) => theme.media.medium} {
            font-size: .6rem;
            line-height: .85rem;
        }
        @media ${({theme}) => theme.media.small} {
            font-size: .54rem;
            line-height: .81rem;
        }
    }
`

const TeamName = styled.div`
    font-weight: bold;
    font-size: .85rem;
    color: #fff;
    font-family: ${({theme}) => theme.fonts.colfax};
`


//

const DallePage: FC = () => {

    const [images, setImages] = useState<any>([]);

    useEffect(() => {
        // window.scrollTo(0, 0);
        importImages();
        dispatch(changeTheme(dalleTheme));
    }, []);

    useEffect(() => {
        if (images.length > 0) {
            fadeForImages(topImageWrapper);
            fadeForImages(botImageWrapper)
        }
    }, [images]);

    const dispatch = useDispatch();

    const topImageWrapper = useRef<HTMLDivElement>(null);
    const botImageWrapper = useRef<HTMLDivElement>(null);

    const importImages = async () => {
        const rndPosition = (min: number, max: number) => {
            return (Math.random() * (max - min) + min)
        };
        let obj = await import('./AnimaImages');
        let pictures = obj.default.map((image,i) => {
            return(<AnimaImage 
                    key={i} 
                    src={image} 
                    left={`${rndPosition(10, 90)}%`} 
                    top={`${rndPosition(10, 90)}%`}
                    />)
        })
        setImages(pictures);
    };

    const fadeForImages = (wrapper: RefObject<HTMLDivElement>) => {

        const images = wrapper.current!.querySelectorAll('img') as NodeListOf<HTMLElement>;

        const rndImageIndex = () => {
            return +(Math.random() * (50 - 0) + 0).toFixed();
        }

        let firstPrev = 0;
        let secondPrev = 0;
        let thirdPrev = 0;

        const fade = (interval: number, i: number) => {
            setTimeout(() => {
                let animation = setTimeout(function fade() {
                    let index = rndImageIndex();
                    while (index === firstPrev || index === secondPrev || index === thirdPrev) {
                        index = rndImageIndex();
                    }
                    images[index].style.opacity = '1';
                    setTimeout(() => {
                        images[index].style.opacity = '0';
                    }, 3000);
                    animation = setTimeout(fade, 3300);
                    switch (i) {
                        case (1):
                            return firstPrev = index
                        case (2):
                            return secondPrev = index
                        case (3):
                            return thirdPrev = index
                        default: 
                            return new Error('Error in animation')
                    }
                });
            }, interval);
        };

        fade(1500, 1);
        fade(2600, 2); 
        fade(3700, 3); 
    }

    const navListVariants = {
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                delay: 1.4 + i * 0.15,
                duration: .1
            }
        }),
        hidden: { 
            opacity: 0,
            x: 10,
            y: 10,
        }
    }


    return (
        <>
            <Container>
                <IntroBtns>
                    <RouterBtn to='/react-ts-openai/' color="255,255,255" $nobg background='inherit' after="">log in</RouterBtn>
                    <RouterBtn to='/react-ts-openai/' color="0,0,0" $nobg background='255,255,255' after="">sign in</RouterBtn>
                </IntroBtns>
            </Container>
            <IntroWrapper>
                <ImagesWrapper ref={topImageWrapper}>
                    {images}
                </ImagesWrapper>
                <Container>
                    <motion.h1
                        initial={{ opacity: .0, y: 20, scale: .99}}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            delay: .2,
                            duration: .6,
                            ease: 'easeIn'
                        }}
                    >DALL·E  2</motion.h1>
                    <motion.h2
                        initial={{ opacity: .0, y: 20, scale: .99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            delay: .8,
                            duration: .6,
                            ease: 'easeIn'
                        }}
                    >DALL·E 2 is a new AI system that can create realistic images and art from a description in natural language.</motion.h2>
                    <NavList>
                            <motion.li
                                variants={navListVariants}
                                initial='hidden'
                                animate='visible'
                                custom={1}
                            >
                                <NavLink before="#ff6" after='↗'>SIGN UP</NavLink>
                            </motion.li>
                            <motion.li
                                variants={navListVariants}
                                initial='hidden'
                                animate='visible'
                                custom={2}
                            >
                                <NavLink before="#42ffff" after='↓'>EXPLORE</NavLink>
                            </motion.li>
                            <motion.li
                                variants={navListVariants}
                                initial='hidden'
                                animate='visible'
                                custom={3}
                            >
                                <NavLink before="#51da4c" after='▶'>WATCH VIDEO</NavLink>
                            </motion.li>
                            <motion.li
                                variants={navListVariants}
                                initial='hidden'
                                animate='visible'
                                custom={4}
                            >
                                <NavLink before="#ff6e3c" after='📄'>VIEW RESEARCH</NavLink>
                            </motion.li>
                            <motion.li
                                variants={navListVariants}
                                initial='hidden'
                                animate='visible'
                                custom={5}
                            >
                                <NavLink before="#3c46ff" after=''>FOLLOW ON INSTAGRAM</NavLink>
                            </motion.li>
                        </NavList>
                </Container>
            </IntroWrapper>
            <WhiteWrapper>
                <Container>
                    <h3 >DALL·E 2 can create original, realistic images and art from a text description. It can combine concepts, attributes, and styles.</h3>
                    <FirstExample/>
                    <h3>DALL·E 2 can can expand images beyond what’s in the original canvas, creating expansive new compositions.</h3>
                    <BigMarginH3 color='black'>DALL·E 2 can make realistic edits to existing images from a natural language caption. It can add and remove elements while taking shadows, reflections, and textures into account.</BigMarginH3>
                    <SecondExample></SecondExample>
                    <BigMarginH3 color='black'>DALL·E 2 can take an image and create different variations of it inspired by the original.</BigMarginH3>
                    <ThirdExample/>
                </Container>
            </WhiteWrapper>
            <ResearchWrapper>
                <Container>
                    <motion.h3
                        initial={{ opacity: .0, y: 20}}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: .6,
                            ease: 'easeIn'
                        }}
                    >DALL·E 2 has learned the relationship between images and the text used to describe them. It uses a process called “diffusion,” which starts with a pattern of random dots and gradually alters that pattern towards an image when it recognizes specific aspects of that image.</motion.h3>
                    <VimeoWrapper>
                        <Vimeo video={'https://player.vimeo.com/video/692375454'}/>
                        <p>DALL·E 2 Explained 2:47</p>
                    </VimeoWrapper>
                    <h3>In January 2021, OpenAI introduced DALL·E. One year later, our newest system, DALL·E 2, generates more realistic and accurate images with 4x greater resolution.</h3>
                    <FoxesWrapper>
                        <FoxExample>
                            <p>DALL·E 1</p>
                            <LazyLoad>
                                <img src="https://cdn.openai.com/dall-e-2/assets/dall-e-1.jpg" alt="Fox from dalle 1" />
                            </LazyLoad>
                        </FoxExample>
                        <FoxExample>
                            <p>DALL·E 2</p>
                            <LazyLoad>
                                <img src="https://cdn.openai.com/dall-e-2/assets/dall-e-2.jpg" alt="Fox from dalle 2" />
                            </LazyLoad>
                        </FoxExample>
                        <FoxDescr>
                        ”a painting of a fox sitting
                        in a field at sunrise in the
                        style of Claude Monet”</FoxDescr>
                    </FoxesWrapper>
                    <h3>DALL·E 2 is preferred over DALL·E 1 for its caption matching and photorealism when evaluators were asked to compare 1,000 image generations from each model.</h3>
                    <Percents>
                        <div>
                            <Percent>71.7%</Percent>
                            <PersentDescr>preferred forcaption matching</PersentDescr>
                        </div>
                        <div>
                            <Percent>88.8%</Percent>
                            <PersentDescr>preferred for photorealism</PersentDescr>
                        </div>
                    </Percents>
                    <DefaultBtn href='#' background='255,255,255' color='0,0,0' after=''>view research wrapper</DefaultBtn>
                </Container>
            </ResearchWrapper>
            <WhiteWrapper>
                <Container>
                    <h3>DALL·E 2 began as a research project and is now available in beta. Safety mitigations we have developed and continue to improve upon include:</h3>
                    <MitigationsWrapper>
                        <div>
                            <LazyLoad><img src="https://cdn.openai.com/dall-e-2/assets/safety-1.jpg" alt="Mitigation"/></LazyLoad>
                            <MitigationsTitle>Preventing Harmful Generations</MitigationsTitle>
                            <MitigationsDescr>
                                We’ve limited the ability for DALL·E 2 to generate violent, hate, or adult images. By removing the most explicit content from the training data, we minimized DALL·E 2’s exposure to these concepts. We also used advanced techniques to prevent photorealistic generations of real individuals’ faces, including those of public figures.
                            </MitigationsDescr>
                        </div>
                        <div>
                            <LazyLoad><img src="https://cdn.openai.com/dall-e-2/assets/safety-2.jpg" alt="Mitigation"/></LazyLoad>
                            <MitigationsTitle>Curbing Misuse</MitigationsTitle>
                            <MitigationsDescr>
                                Our content policy does not allow users to generate violent, adult, or political content, among other categories. We won’t generate images if our filters identify text prompts and image uploads that may violate our policies. We also have automated and human monitoring systems to guard against misuse.
                            </MitigationsDescr>
                        </div>
                        <div>
                            <LazyLoad><img src="https://cdn.openai.com/dall-e-2/assets/safety-3.jpg" alt="Mitigation"/></LazyLoad>
                            <MitigationsTitle>Phased Deployment Based on Learning</MitigationsTitle>
                            <MitigationsDescr>
                                Learning from real-world use is an important part of developing and deploying AI responsibly. We began by previewing DALL·E 2 to a limited number of trusted users. As we learned more about the technology’s capabilities and limitations, and gained confidence in our safety systems, we slowly added more users and made DALL·E available in beta in July 2022.
                            </MitigationsDescr>
                        </div>
                    </MitigationsWrapper>
                    <Btns>
                        <RouterBtn margin='0 20px 0 0' background='0,0,0' color='255,255,255' to='/' after=''>sign up</RouterBtn>
                        <RouterBtn margin='0 20px 0 0' background='0,0,0,.05' color='0,0,0' to='/' after=''>content policy</RouterBtn>
                        <RouterBtn background='0,0,0,.05' color='0,0,0' to='/' after=''>risks and limitations</RouterBtn>
                    </Btns>
                </Container>
            </WhiteWrapper>
            <BottomImages ref={botImageWrapper}>
                {images}
                <Container>
                    <h3>Our hope is that DALL·E 2 will empower people to express themselves creatively. DALL·E 2 also helps us understand how advanced AI systems see and understand our world, which is critical to our mission of creating AI that benefits humanity.</h3>
                    <DalleColors viewBox="0 0 80 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="m0 0h16v16h-16z" fill="#ff6"></path><path d="m16 0h16v16h-16z" fill="#42ffff"></path><path d="m32 0h16v16h-16z" fill="#51da4c"></path><path d="m48 0h16v16h-16z" fill="#ff6e3c"></path><path d="m64 0h16v16h-16z" fill="#3c46ff"></path>
                    </DalleColors>
                    <Team>
                        <TeamName>Research Advancements</TeamName>
                        <p>Aditya Ramesh, Prafulla Dhariwal, Alex Nichol, Casey Chu, Mark Chen</p>
                    </Team>
                    <Team>
                        <TeamName>Engineering, Design, Product, and Prototyping</TeamName>
                        <p>Jeff Belgum, Dave Cummings, Jonathan Gordon, Chris Hallacy, Shawn Jain, Joanne Jang, Fraser Kelton, Vishal Kuo, Joel Lehman, Rachel Lim, Bianca Martin, Evan Morikawa, Rajeev Nayak, Glenn Powell, Krijn Rijshouwer, David Schnurr, Maddie Simens, Kenneth Stanley, Felipe Such, Chelsea Voss, Justin Jay Wang</p>
                    </Team>
                    <Team>
                        <TeamName>Comms, Policy, Legal, Ops, Safety, and Security</TeamName>
                        <p>Steven Adler, Lama Ahmad, Miles Brundage, Kevin Button, Che Chang, Fotis Chantzis, Derek Chen, Frances Choi, Steve Dowling, Elie Georges, Shino Jomoto, Aris Konstantinidis, Gretchen Krueger, Andrew Mayne, Pamela Mishkin, Bob Rotsted, Natalie Summers, Dave Willner, Hannah Wong</p>
                    </Team>
                    <Team>
                        <TeamName>Acknowledgments</TeamName>
                        <p>Thanks to those who helped with and provided feedback on this release: Sandhini Agarwal, Sam Altman, Chester Cho, Peter Hoeschele, Jacob Jackson, Jong Wook Kim, Matt Knight, Jason Kwon, Anna Makanju, Katie Mayer, Bob McGrew, Luke Miller, Mira Murati, Adam Nace, Hyeonwoo Noh, Cullen O’Keefe, Long Ouyang, Michael Petrov, Henrique Ponde de Oliveira Pinto, Alec Radford, Girish Sastry, Pranav Shyam, Aravind Srinivas, Ilya Sutskever, Preston Tuggle, Arun Vijayvergiya, Peter Welinder</p>
                    </Team>
                </Container>
            </BottomImages>
        </>         
    );
};

export default DallePage;
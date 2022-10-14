import { FC, RefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { dalleTheme } from '../../core/theme/theme';
import Container from '../../components/container/Container';
import { RouterBtn } from '../../components/buttons/Btns';

import { AnimatePresence, motion } from 'framer-motion';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import animaIMG0 from '../../assets/images/dalle/intro-images/0.jpg';
import animaIMG1 from '../../assets/images/dalle/intro-images/1.jpeg';
import animaIMG2 from '../../assets/images/dalle/intro-images/2.jpg';
import animaIMG3 from '../../assets/images/dalle/intro-images/3.jpg';
import animaIMG4 from '../../assets/images/dalle/intro-images/4.jpg';
import animaIMG5 from '../../assets/images/dalle/intro-images/5.jpg';
import animaIMG6 from '../../assets/images/dalle/intro-images/6.jpg';
import animaIMG7 from '../../assets/images/dalle/intro-images/7.jpg';
import animaIMG8 from '../../assets/images/dalle/intro-images/8.jpg';
import animaIMG9 from '../../assets/images/dalle/intro-images/9.jpg';
import animaIMG10 from '../../assets/images/dalle/intro-images/10.jpg';
import animaIMG11 from '../../assets/images/dalle/intro-images/11.jpg';
import animaIMG12 from '../../assets/images/dalle/intro-images/12.jpg';
import animaIMG13 from '../../assets/images/dalle/intro-images/13.jpg';
import animaIMG14 from '../../assets/images/dalle/intro-images/14.jpg';
import animaIMG15 from '../../assets/images/dalle/intro-images/15.jpg';
import animaIMG16 from '../../assets/images/dalle/intro-images/16.jpg';
import animaIMG17 from '../../assets/images/dalle/intro-images/17.jpg';
import animaIMG18 from '../../assets/images/dalle/intro-images/18.jpg';
import animaIMG19 from '../../assets/images/dalle/intro-images/19.jpg';
import animaIMG20 from '../../assets/images/dalle/intro-images/20.jpg';
import animaIMG21 from '../../assets/images/dalle/intro-images/21.jpg';
import animaIMG22 from '../../assets/images/dalle/intro-images/22.jpg';
import animaIMG23 from '../../assets/images/dalle/intro-images/23.jpg';
import animaIMG24 from '../../assets/images/dalle/intro-images/24.jpg';
import animaIMG25 from '../../assets/images/dalle/intro-images/25.jpg';
import animaIMG26 from '../../assets/images/dalle/intro-images/26.jpg';
import animaIMG27 from '../../assets/images/dalle/intro-images/27.jpg';
import animaIMG28 from '../../assets/images/dalle/intro-images/28.jpg';
import animaIMG29 from '../../assets/images/dalle/intro-images/29.jpg';
import animaIMG30 from '../../assets/images/dalle/intro-images/30.jpg';
import animaIMG31 from '../../assets/images/dalle/intro-images/31.jpg';
import animaIMG32 from '../../assets/images/dalle/intro-images/32.jpg';
import animaIMG33 from '../../assets/images/dalle/intro-images/33.jpg';
import animaIMG34 from '../../assets/images/dalle/intro-images/34.jpg';
import animaIMG35 from '../../assets/images/dalle/intro-images/35.jpg';
import animaIMG36 from '../../assets/images/dalle/intro-images/36.jpg';
import animaIMG37 from '../../assets/images/dalle/intro-images/37.jpg';
import animaIMG38 from '../../assets/images/dalle/intro-images/38.jpg';
import animaIMG39 from '../../assets/images/dalle/intro-images/39.jpg';
import animaIMG40 from '../../assets/images/dalle/intro-images/40.jpg';
import animaIMG41 from '../../assets/images/dalle/intro-images/41.jpg';
import animaIMG42 from '../../assets/images/dalle/intro-images/42.jpg';
import animaIMG43 from '../../assets/images/dalle/intro-images/43.jpg';
import animaIMG44 from '../../assets/images/dalle/intro-images/44.jpg';
import animaIMG45 from '../../assets/images/dalle/intro-images/45.jpg';
import animaIMG46 from '../../assets/images/dalle/intro-images/46.jpg';
import animaIMG47 from '../../assets/images/dalle/intro-images/47.jpg';
import animaIMG48 from '../../assets/images/dalle/intro-images/48.jpg';
import animaIMG49 from '../../assets/images/dalle/intro-images/49.jpg';
import animaIMG50 from '../../assets/images/dalle/intro-images/50.jpg';

import FirstExample from './components/first-example/FirstExample';
import SecondExample from './components/second-example/SecondExample';



// styled components

const IntroWrapper = styled.div`
    padding: 25vh 0 140px 0;
    position: relative;
    margin-top: -${({theme}) => theme.sizes.default.header.height}px;
    @media ${({theme}) => theme.media.extraLarge} {
        margin--top: ${({theme}) => theme.sizes.xl.header.height}px;
    }
    @media ${({theme}) => theme.media.large} {
        margin--top: ${({theme}) => theme.sizes.l.header.height}px;
    }
    @media ${({theme}) => theme.media.medium} {
        margin--top: ${({theme}) => theme.sizes.m.header.height}px;
    }
    @media ${({theme}) => theme.media.small} {
        margin--top: ${({theme}) => theme.sizes.s.header.height}px;
    }
    h1 {
        /* font-size: 17.3rem; */
        font-size: 17.3rem;
        line-height: 17.3rem;
        text-align: center;
        color: white;
        word-wrap: break-word;
        pointer-events: none;
        text-align: justify;
        span {
            display: inline-block;
            margin-left: 90px;
        }
    }
    h2 {
        font-size: 2.4rem;
        margin-top: 40px;
        color: white;
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
    li {

    }
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
    overflow-x: hidden;
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
`

const WhiteWrapper = styled.div`
    background-color: #fff;
    padding: 150px 0;
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
    &:after {
        content: 'right';
        font-family: ${({theme}) => theme.fonts.icons};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 40px;
    }
    .slick-slider {
        max-width: 100%;
        width: 100%;
        /* overflow: hidden; */
        margin-bottom: 30px;
        &.mini {
            .slick-slide {
                max-width: 120px;
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
    padding: 0 5px;
`



//

const DallePage: FC = () => {

    useEffect(() => {
        // window.scrollTo(0, 0);
        dispatch(changeTheme(dalleTheme));
        fadeForImages(topImageWrapper);
    }, []);


    const dispatch = useDispatch();

    const topImageWrapper = useRef<HTMLDivElement>(null);
    const botImageWrapper = useRef<HTMLDivElement>(null);


    const fadeForImages = (wrapper: RefObject<HTMLDivElement>) => {
        const images = wrapper.current!.querySelectorAll(AnimaImage) as NodeListOf<HTMLElement>;
        const rndImageIndex = () => {
            return +(Math.random() * (50 - 0) + 0).toFixed();
        }
        setTimeout(() => {
            setInterval(() => {
                const index = rndImageIndex();
                images[index].style.opacity = '1';
                setTimeout(() => {
                    images[index].style.opacity = '0';
                }, 3000);
            }, 1000);
        }, 1500);
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
                    <AnimaImage src={animaIMG0} top="10%" left="10%"></AnimaImage>
                    <AnimaImage src={animaIMG1} top="13%" left="22%"></AnimaImage>
                    <AnimaImage src={animaIMG2} top="17%" left="29%"></AnimaImage>
                    <AnimaImage src={animaIMG3} top="15%" left="37%"></AnimaImage>
                    <AnimaImage src={animaIMG4} top="11%" left="52%"></AnimaImage>
                    <AnimaImage src={animaIMG5} top="13%" left="60%"></AnimaImage>
                    <AnimaImage src={animaIMG6} top="10%" left="69%"></AnimaImage>
                    <AnimaImage src={animaIMG7} top="23%" left="77%"></AnimaImage>
                    <AnimaImage src={animaIMG8} top="20%" left="97%"></AnimaImage>
                    <AnimaImage src={animaIMG9} top="24%" left="8%"></AnimaImage>
                    <AnimaImage src={animaIMG10} top="27%" left="15%"></AnimaImage>
                    <AnimaImage src={animaIMG11} top="29%" left="26%"></AnimaImage>
                    <AnimaImage src={animaIMG12} top="25%" left="37%"></AnimaImage>
                    <AnimaImage src={animaIMG13} top="33%" left="44%"></AnimaImage>
                    <AnimaImage src={animaIMG14} top="25%" left="58%"></AnimaImage>
                    <AnimaImage src={animaIMG15} top="33%" left="66%"></AnimaImage>
                    <AnimaImage src={animaIMG16} top="36%" left="79%"></AnimaImage>
                    <AnimaImage src={animaIMG17} top="33%" left="90%"></AnimaImage>
                    <AnimaImage src={animaIMG18} top="41%" left="6%"></AnimaImage>
                    <AnimaImage src={animaIMG19} top="51%" left="14%"></AnimaImage>
                    <AnimaImage src={animaIMG20} top="53%" left="20%"></AnimaImage>
                    <AnimaImage src={animaIMG21} top="57%" left="27%"></AnimaImage>
                    <AnimaImage src={animaIMG22} top="45%" left="35%"></AnimaImage>
                    <AnimaImage src={animaIMG23} top="52%" left="46%"></AnimaImage>
                    <AnimaImage src={animaIMG24} top="44%" left="55%"></AnimaImage>
                    <AnimaImage src={animaIMG25} top="49%" left="66%"></AnimaImage>
                    <AnimaImage src={animaIMG26} top="60%" left="73%"></AnimaImage>
                    <AnimaImage src={animaIMG27} top="59%" left="84%"></AnimaImage>
                    <AnimaImage src={animaIMG28} top="49%" left="97%"></AnimaImage>
                    <AnimaImage src={animaIMG29} top="61%" left="6%"></AnimaImage>
                    <AnimaImage src={animaIMG30} top="67%" left="14%"></AnimaImage>
                    <AnimaImage src={animaIMG31} top="70%" left="20%"></AnimaImage>
                    <AnimaImage src={animaIMG32} top="57%" left="27%"></AnimaImage>
                    <AnimaImage src={animaIMG33} top="68%" left="35%"></AnimaImage>
                    <AnimaImage src={animaIMG34} top="63%" left="46%"></AnimaImage>
                    <AnimaImage src={animaIMG35} top="66%" left="55%"></AnimaImage>
                    <AnimaImage src={animaIMG36} top="69%" left="66%"></AnimaImage>
                    <AnimaImage src={animaIMG37} top="71%" left="73%"></AnimaImage>
                    <AnimaImage src={animaIMG38} top="58%" left="84%"></AnimaImage>
                    <AnimaImage src={animaIMG39} top="65%" left="97%"></AnimaImage>
                    <AnimaImage src={animaIMG40} top="68%" left="97%"></AnimaImage>
                    <AnimaImage src={animaIMG41} top="86%" left="6%"></AnimaImage>
                    <AnimaImage src={animaIMG42} top="89%" left="14%"></AnimaImage>
                    <AnimaImage src={animaIMG43} top="79%" left="23%"></AnimaImage>
                    <AnimaImage src={animaIMG44} top="88%" left="33%"></AnimaImage>
                    <AnimaImage src={animaIMG45} top="89%" left="45%"></AnimaImage>
                    <AnimaImage src={animaIMG46} top="90%" left="59%"></AnimaImage>
                    <AnimaImage src={animaIMG47} top="79%" left="67%"></AnimaImage>
                    <AnimaImage src={animaIMG48} top="89%" left="75%"></AnimaImage>
                    <AnimaImage src={animaIMG49} top="86%" left="84%"></AnimaImage>
                    <AnimaImage src={animaIMG50} top="78%" left="98%"></AnimaImage>
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
                    >DALL·E <span>2</span></motion.h1>
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
                    <motion.h3
                        initial={{ opacity: .0, y: 20}}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: .2,
                            duration: .6,
                            ease: 'easeIn'
                        }}
                    >DALL·E 2 can create original, realistic images and art from a text description. It can combine concepts, attributes, and styles.</motion.h3>
                    <motion.div
                        initial={{ opacity: .0, y: 20}}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: .2,
                            duration: .6,
                            ease: 'easeIn'
                        }}
                    >
                        <FirstExample/>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: .0, x: 20}}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: .2,
                            duration: .6,
                            ease: 'easeIn'
                        }}
                    >DALL·E 2 can can expand images beyond what’s in the original canvas, creating expansive new compositions.</motion.h3>
                    <motion.div

                        initial={{ opacity: .0, x: 20}}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: .2,
                            duration: .6,
                            ease: 'easeIn'
                        }}
                    >
                        <BigMarginH3 color='black'>DALL·E 2 can make realistic edits to existing images from a natural language caption. It can add and remove elements while taking shadows, reflections, and textures into account.</BigMarginH3>
                    </motion.div>
                    <SecondExample></SecondExample>
                    <motion.div
                        initial={{ opacity: .0, x: 20}}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: .2,
                            duration: .6,
                            ease: 'easeIn'
                        }}
                        >
                        <BigMarginH3 color='black'>DALL·E 2 can take an image and create different variations of it inspired by the original.</BigMarginH3>
                    </motion.div>
                </Container>
            </WhiteWrapper>
        </>         
    );
};

export default DallePage;
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { apiTheme } from '../../core/theme/theme';
import styled, { css, keyframes } from 'styled-components';
import Btn from '../../components/buttons/Btn';

import Container from '../../components/container/Container';
import ApiTabs from './components/ApiTabsHeader';
import ApiTabsContent from './components/ApiTabsContent';
import ApiHeader from './components/ApiHeader';

const copilot = require('../../assets/images/copilot.png');
const keeper = require('../../assets/images/keeper.png');
const viable = require('../../assets/images/viable.png');
const duolingo = require('../../assets/images/duolingo.png');





export const ApiPageWrapper = styled.div`
    h1 {
        margin-top: 100px;
        max-width: 600px;
        margin: 100px auto 0;
        text-align: center;
    }
    h2.center {
        text-align: center;
    }
    h3 {
        max-width: 470px;
    }
    h4 {
        font-family: "ColfaxAI", sans-serif;
        max-width: 600px;
        text-align: center;
        margin: 40px auto 0 auto;
    }
`

export const StyledLink = styled(Btn)`
    &:hover {
        color: rgba(0,0,0, .65) !important;
    }
    &.active {
        opacity: .5;
    }
`

interface IDocsBtns {
    margin: string
}

const DocsBtns = styled.div<IDocsBtns>`
    margin: ${props => props.margin};
    max-width: 300px;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 5px;
`

const CompaniesTitle = styled.div`
    margin-top: 100px;
    text-align: center;
    font-family: "ColfaxAI", sans-serif;
    font-size: 13.5px;
    @media ${({theme}) => theme.media.medium} {
        font-size: 12px;
    }
    display: block;
    padding-bottom: 20px;
    border-bottom: 2px solid  rgba(${({theme}) => theme.colors.constants.silver});
    font-weight: bold;
`

const Companies = styled.ul`
    display: grid;
    max-width: 1000px;
    margin: 0 auto;
    grid-template-columns: 22fr 22fr 22fr 22fr;
    grid-column-gap: 40px;
    padding: 50px 0;
    @media ${({theme}) => theme.media.small} {
        grid-template-columns: 22fr 22fr;
        grid-template-rows: auto auto;
        grid-row-gap: 40px;
    }
`

const Company = styled.svg`
    align-self: center;
    align-content: center;
    justify-self: center;
`

const BuildingWrapper = styled.div`
    padding: 100px 0 120px;
    @media ${({theme}) => theme.media.extraLarge} {
        padding: 100px 0;
    }
`

interface ISilverComponent {
    padding: string;
}

const SilverComponent = styled.div<ISilverComponent>`
    background-color: rgba(${({theme}) => theme.colors.constants.silver});
    padding: ${props => props.padding};
    @media ${({theme}) => theme.media.extraLarge} {
        padding: 80px 0;
    }
`

interface ISilverComponentContent {
    direction: string;
    center?: boolean
}

const SilverComponentContent = styled.div<ISilverComponentContent>`
    display: flex;
    flex-direction: ${props => props.direction};
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    ${props => props.center && css`
        align-items: center;
        h2 {
            text-align: center;
            max-width: 700px;
        }
    `}
    h3 {
        @media ${({theme}) => theme.media.extraLarge} {
            max-width: 400px;
        }
        @media ${({theme}) => theme.media.large} {
            max-width: 100%;

        }
        @media ${({theme}) => theme.media.medium} {
            width: ${({theme}) => theme.sizes.m.container.width}%;
        }
        @media ${({theme}) => theme.media.small} {
            width: ${({theme}) => theme.sizes.s.container.width}%;
        }
    }
    p {
        margin-bottom: 25px;
        font-size: 18px;
        line-height: 24px;
        font-family: "ColfaxAI", sans-serif;
        @media ${({theme}) => theme.media.large} {
            margin-top: 30px;
        }
    }
    @media ${({theme}) => theme.media.large} {
        flex-direction: column;
        
    }
`

const SilverInfo = styled.div`
    max-width: 650px;
    @media ${({theme}) => theme.media.extraLarge} {
        max-width: 450px;
    }
    @media ${({theme}) => theme.media.large} {
        max-width: 100%;
    }
    @media ${({theme}) => theme.media.medium} {

    }
    @media ${({theme}) => theme.media.small} {

    }
`

const GroupBtns = styled.div`
    display: flex;
    width: auto;
`


interface ICodeBlock {
    padding: string
    margin: string
    children: React.ReactElement | React.ReactNode
    width: string
}

export const CodeBlock = styled.code<ICodeBlock>`
    padding: ${props => props.padding};
    background-color: #191927;
    border-radius: 6px;
    display: block;
    margin: ${props => props.margin};
    width: ${props => props.width};
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
    white-space: pre-wrap;
    @media ${({theme}) => theme.media.medium} {
        max-width: 100%;
    }
`

interface ISword {
    color?: string
    red?: boolean
    green?: boolean
    blue?: boolean
}


const typing = keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
`

export const Sword = styled.span<ISword>`
    color: ${props => props.color || "white"};
    font-size: 15px;
    line-height: 20px;
    /* overflow: hidden; */
    /* white-space: pre-wrap; */
    ${props => props.red && css`
        color: #f22c3d;
    `}
    ${props => props.green && css`
        color: #009c72;
    `}
    ${props => props.blue && css`
        color: #3582ca;
    `}
`

interface IString {
    typing?: boolean
    delay?: string
    padding?: string
    ff?: string
    bold?: boolean
    width?: string
    prewrap?: boolean
    color?: string
}

export const String = styled.div<IString>`
    overflow: hidden;
    white-space: nowrap;
    transition: .5s width;
    width: 0;
    font-size: 15px;
    ${props => props.prewrap && css`
        white-space: pre-wrap;
    `}
    ${props => props.ff && css`
        font-family: ${props.ff};
    `}
    ${props => props.typing && css`
        animation: ${typing} .5s  linear forwards;
        width: 0;
    `}
    ${props => props.delay && css`
        animation-delay: ${props.delay};
    `}
    ${props => props.padding && css`
        padding-left: ${props.padding};
    `}
    ${props => props.bold && css`
        font-weight: bold;
    `}
    ${props => props.width && css`
        width: ${props.width};
    `}
    ${props => props.color && css`
        color: ${props.color};
    `}
    line-height: 20px;
`

interface ITabs {
    reverse?: boolean
}

const Tabs = styled.div<ITabs>`
    display: grid;
    grid-template-columns: 65fr 35fr;
    grid-column-gap: 200px;
    grid-template-rows: auto;
    width: 100%;
    margin-top: 150px;
    @media ${({theme}) => theme.media.extraLarge} {
        grid-template-columns: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 50px;
        grid-template-rows: auto auto;
        margin-top: 100px;
    }
    ${props=> props.reverse && css`
        grid-template-columns: 35fr 65fr;
    
    `}
`

const TabsHeadWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    max-width: 100%;
    @media ${({theme}) => theme.media.extraLarge} {
        grid-row-start: 2;
        grid-row-end: 3;
    }
`

const TabsContentWrapper = styled.div`
    @media ${({theme}) => theme.media.extraLarge} {
        grid-row-start: 1;
        grid-row-end: 2;
    }
`

const Benefits = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 40px;
    margin-top: 200px;
    justify-content: space-between;
    h3 {
        position: relative;
        font-size: 27.5px;
        line-height: 27.5px;
        transform: translateY(2px);
        padding-left: 15px;
    }
    p {
        grid-column-start: 1;
        grid-column-end: 3;
        align-items: start;
        justify-self: start;
        align-content: start;
        /* font-size: 20px; */
        font-family: ColfaxAI,Helvetica,sans-serif;
    }
    @media ${({theme}) => theme.media.extraLarge} {
        margin-top: 150px;
    }
    @media ${({theme}) => theme.media.medium} {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        grid-row-gap: 20px;
        margin-top: 100px;
    }
`

const BenifitsItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 100fr;
    grid-template-rows: 1fr 2fr;
    grid-row-gap: 20px;
`

const BenifitsIcon = styled.span`
    font-family: IconsAI;
    display: inline-block;
    font-size: 28px;
    line-height: 28px;
`

//

const OpenaiApps = styled.div`
    padding: 170px 0;
    @media ${({theme}) => theme.media.extraLarge} {
        padding: 100px 0;
    }
`

const OpenaiAppsContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 40px;
    grid-template-rows: auto;
    margin-top: 70px;
    @media ${({theme}) => theme.media.extraLarge} {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        grid-row-gap: 60px;
    }
    @media ${({theme}) => theme.media.small} {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto;
        grid-row-gap: 40px;
    }
`

const OpenaiDescr = styled.div`
    h2 {
        margin-bottom: 30px;
    }
`

const OpenaiAppItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    img {
        display: block;
        max-width: 100%;
        border: 1px solid rgba(0,0,0,.15)
    }
    h3 {
        margin-top: 20px;
    }
    p {
        margin-top: 20px;
        color: rgba(0,0,0,.6)
    }
`



const ApiPage: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTheme(apiTheme));
    }, []);

    return (
        <ApiPageWrapper>
            <ApiHeader/>
            <Container>
                <h1>Build next-gen apps with OpenAI’s powerful models.</h1>
                <h4>OpenAI’s API provides access to GPT-3, which performs a wide variety of natural language tasks, and Codex, which translates natural language to code.</h4>
                <DocsBtns margin="40px auto 0 auto">
                    <Btn to="/" background="0,0,0" color="255,255,255" after="">get started</Btn>
                    <StyledLink nobg to="/" background='inherit' color='0,0,0' after=''>read documentation</StyledLink>
                </DocsBtns>
                <CompaniesTitle>COMPANIES DEVELOPING WITH OPENAI’S API</CompaniesTitle>
                <Companies>
                    <Company width="68" height="28" viewBox="0 0 68 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.144531 0.837158V2.68474H13.2882V0.837158H0.144531ZM15.1504 0.837158V2.68474H33.8808C33.8808 2.68474 31.9676 0.837158 29.4336 0.837158H15.1504ZM37.5551 0.837158V2.68474H48.8867L48.2141 0.837158H37.5551ZM57.0107 0.837158L56.3382 2.68474H67.5669V0.837158H57.0107ZM0.144531 4.43024V6.27782H13.2882V4.43024H0.144531ZM15.1504 4.43297V6.27798H36.0541C36.0541 6.27798 35.8101 4.85589 35.3842 4.43297H15.1504ZM37.5551 4.43297V6.27798H50.129L49.5064 4.43297H37.5551ZM55.6655 4.43297L55.043 6.27798H67.5669V4.43297H55.6655ZM3.92176 8.02332V9.87363H9.61382V8.02332H3.92176ZM18.9276 8.02332V9.87363H24.6199V8.02332H18.9276ZM30.1563 8.02332V9.87363H35.8485C35.8485 9.87363 36.2099 8.89648 36.2099 8.02332H30.1563ZM41.3323 8.02332V9.87363H51.4242L50.7515 8.02332H41.3323ZM54.4258 8.02332L53.7506 9.87363H63.8925V8.02332H54.4258ZM3.92176 11.6193V13.4669H9.61382V11.6193H3.92176ZM18.9276 11.6193V13.4669H33.4666C33.4666 13.4669 34.6829 12.5188 35.0703 11.6193H18.9276ZM41.3323 11.6193V13.4669H47.0244V12.4383L47.3858 13.4669H57.8127L58.2005 12.4383V13.4669H63.8925V11.6193H53.2071L52.6401 13.1841L52.0703 11.6193H41.3323ZM3.92176 15.2124V17.06H9.61382V15.2124H3.92176ZM18.9276 15.2124V17.06H35.0703C34.6829 16.1633 33.4666 15.2124 33.4666 15.2124H18.9276ZM41.3323 15.2124V17.06H47.0244V15.2124H41.3323ZM48.0583 15.2124L48.7468 17.06H56.5649L57.2191 15.2124H48.0583ZM58.2003 15.2124V17.06H63.8925V15.2124H58.2003ZM3.92176 18.8055V20.653H9.61382V18.8055H3.92176ZM18.9276 18.8055V20.653H24.6199V18.8055H18.9276ZM30.1563 18.8055V20.653H36.2098C36.2098 19.781 35.8485 18.8055 35.8485 18.8055H30.1563ZM41.3323 18.8055V20.653H47.0244V18.8055H41.3323ZM49.351 18.8055L50.0182 20.653H55.2594L55.9319 18.8055H49.351ZM58.2003 18.8055V20.653H63.8925V18.8055H58.2003ZM0.247427 22.3985V24.2489H13.3911V22.3985H0.247427ZM15.1504 22.3985V24.2489H35.3842C35.8101 23.8251 36.0541 22.3985 36.0541 22.3985H15.1504ZM37.658 22.3985V24.2489H47.0244V22.3985H37.658ZM50.646 22.3985L51.3317 24.2489H53.9985L54.6421 22.3985H50.646ZM58.2003 22.3985V24.2489H67.6698V22.3985H58.2003ZM0.247427 25.9944V27.8419H13.3911V25.9944H0.247427ZM15.1504 25.9944V27.8394H29.4336C31.9676 27.8394 33.8808 25.9944 33.8808 25.9944H15.1504ZM37.658 25.9944V27.8419H47.0244V25.9944H37.658ZM51.9464 25.9944L52.6058 27.8368L52.7192 27.8394L53.3893 25.9944H51.9464ZM58.2003 25.9944V27.8419H67.6698V25.9944H58.2003Z" fill="#191927"></path></Company>
                    <Company width="73" height="51" viewBox="0 0 73 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M30.1825 6.29056C32.5039 3.89273 35.7358 2.40553 39.3102 2.40553C44.0618 2.40553 48.2072 5.03207 50.4149 8.93124C52.3334 8.08153 54.4569 7.60883 56.6911 7.60883C65.2611 7.60883 72.2089 14.5565 72.2089 23.1263C72.2089 31.6971 65.2611 38.6447 56.6911 38.6447C55.6647 38.6453 54.6407 38.5442 53.6345 38.3428C51.6905 41.7805 47.9858 44.1032 43.7336 44.1032C41.9536 44.1032 40.2699 43.6956 38.7709 42.9708C36.8001 47.5663 32.2086 50.7885 26.8572 50.7885C21.2843 50.7885 16.5349 47.2929 14.7118 42.3904C13.9151 42.5581 13.0897 42.6456 12.2427 42.6456C5.60759 42.6456 0.228516 37.2583 0.228516 30.6116C0.228516 26.1575 2.6453 22.2684 6.23611 20.1877C5.49685 18.5014 5.08564 16.6402 5.08564 14.6835C5.08564 7.03962 11.3455 0.843262 19.0665 0.843262C23.5996 0.843262 27.6283 2.97988 30.1825 6.29056ZM10.6544 26.7451C10.617 26.8419 10.6528 26.8753 10.6743 26.8954C10.6788 26.8996 10.6827 26.9032 10.6851 26.9067C10.7924 26.984 10.9009 27.0441 11.0102 27.1047L11.0103 27.1047C11.0389 27.1206 11.0676 27.1365 11.0963 27.1527C11.8305 27.5389 12.5237 27.6517 13.2486 27.6517C14.7251 27.6517 15.6418 26.8731 15.6418 25.6198V25.5954C15.6418 24.4366 14.6072 24.0158 13.6362 23.7119L13.5101 23.6712L13.5089 23.6708L13.5089 23.6708C12.7773 23.4352 12.1464 23.2319 12.1464 22.7544V22.729C12.1464 22.3204 12.5155 22.0195 13.0877 22.0195C13.7234 22.0195 14.4781 22.2289 14.964 22.4952C14.964 22.4952 15.1066 22.5867 15.1589 22.4495C15.1876 22.3762 15.4337 21.7196 15.4593 21.6485C15.487 21.5712 15.4378 21.5143 15.3876 21.4838C14.8328 21.1493 14.0658 20.9206 13.2723 20.9206L13.1246 20.9216C11.7732 20.9216 10.8299 21.7308 10.8299 22.8905V22.915C10.8299 24.1377 11.8706 24.5342 12.8458 24.8107L13.0026 24.8584L13.0048 24.8591C13.7145 25.0753 14.3254 25.2614 14.3254 25.757V25.7814C14.3254 26.2348 13.9276 26.5722 13.2857 26.5722C13.0365 26.5722 12.2418 26.5671 11.3836 26.0294C11.324 25.9949 11.2787 25.9658 11.2358 25.9382L11.2357 25.9381C11.204 25.9177 11.1735 25.8982 11.1396 25.8779C11.0976 25.8515 10.9919 25.8057 10.9458 25.944L10.6544 26.7451ZM32.27 26.7451C32.2326 26.8419 32.2684 26.8753 32.2899 26.8954C32.2944 26.8996 32.2983 26.9032 32.3007 26.9067C32.4078 26.9839 32.5163 27.044 32.6254 27.1045L32.6255 27.1045C32.6542 27.1204 32.683 27.1364 32.7119 27.1527C33.446 27.5389 34.1393 27.6517 34.8641 27.6517C36.3406 27.6517 37.2574 26.8731 37.2574 25.6198V25.5954C37.2574 24.4366 36.2228 24.0158 35.2517 23.7119L35.1256 23.6712L35.1243 23.6708C34.3927 23.4351 33.7618 23.2319 33.7618 22.7544V22.729C33.7618 22.3204 34.1309 22.0195 34.7031 22.0195C35.3388 22.0195 36.0935 22.2289 36.5796 22.4952C36.5796 22.4952 36.7221 22.5867 36.7743 22.4495C36.803 22.3762 37.0491 21.7196 37.0748 21.6485C37.1025 21.5712 37.0532 21.5143 37.003 21.4838C36.4483 21.1493 35.6813 20.9206 34.8877 20.9206L34.74 20.9216C33.3886 20.9216 32.4453 21.7308 32.4453 22.8905V22.915C32.4453 24.1377 33.486 24.5342 34.4612 24.8107L34.618 24.8584L34.6216 24.8595C35.3307 25.0756 35.9418 25.2618 35.9418 25.757V25.7814C35.9418 26.2348 35.5429 26.5722 34.901 26.5722C34.6519 26.5722 33.8573 26.5671 32.9991 26.0294C32.918 25.9824 32.8628 25.9467 32.8053 25.9096L32.8053 25.9096L32.7561 25.8779C32.7294 25.8606 32.6043 25.8129 32.5612 25.944L32.27 26.7451ZM47.0264 24.2901C47.0264 24.9986 46.8931 25.5566 46.6306 25.951C46.3711 26.3414 45.9785 26.5314 45.431 26.5314C44.8825 26.5314 44.4918 26.3424 44.2364 25.951C43.978 25.5576 43.8469 24.9986 43.8469 24.2901C43.8469 23.5827 43.978 23.0256 44.2364 22.6352C44.4918 22.249 44.8825 22.061 45.431 22.061C45.9785 22.061 46.3712 22.249 46.6317 22.6352C46.8932 23.0255 47.0264 23.5826 47.0264 24.2901ZM48.2589 22.9768C48.1379 22.5712 47.9492 22.2134 47.6981 21.9156C47.4468 21.6168 47.129 21.3769 46.7516 21.202C46.3752 21.0283 45.9303 20.9398 45.431 20.9398C44.9306 20.9398 44.4856 21.0283 44.1093 21.202C43.7319 21.3769 43.4141 21.6168 43.1618 21.9156C42.9117 22.2145 42.723 22.5722 42.601 22.9768C42.481 23.3803 42.4205 23.8214 42.4205 24.2901C42.4205 24.7587 42.481 25.2009 42.601 25.6034C42.723 26.0079 42.9107 26.3658 43.1629 26.6646C43.4141 26.9634 43.733 27.2023 44.1093 27.372C44.4866 27.5418 44.9306 27.6281 45.4311 27.6281C45.9304 27.6281 46.3744 27.5418 46.7516 27.372C47.128 27.2023 47.4468 26.9633 47.6981 26.6646C47.9493 26.3667 48.1379 26.0089 48.259 25.6034C48.38 25.1999 48.4405 24.7577 48.4405 24.2901C48.4405 23.8225 48.3799 23.3803 48.2589 22.9768ZM58.3799 26.3422C58.3389 26.2233 58.223 26.268 58.223 26.268C58.0436 26.3361 57.8528 26.3991 57.6499 26.4306C57.4437 26.4621 57.2171 26.4784 56.9741 26.4784C56.3774 26.4784 55.9037 26.3026 55.5643 25.9549C55.2239 25.6073 55.0331 25.0452 55.0352 24.2849C55.0372 23.5927 55.2053 23.0722 55.5079 22.6758C55.8084 22.2815 56.2657 22.0791 56.8757 22.0791C57.3844 22.0791 57.7719 22.137 58.1779 22.2641C58.1779 22.2641 58.2753 22.3057 58.3214 22.1798C58.3559 22.0846 58.3876 21.9981 58.4185 21.9137L58.419 21.9122L58.4192 21.9118C58.4844 21.7338 58.5461 21.5651 58.6239 21.3442C58.6567 21.2517 58.5768 21.212 58.548 21.2008C58.388 21.1388 58.0107 21.0383 57.7257 20.9955C57.4591 20.9549 57.1474 20.9335 56.8008 20.9335C56.2829 20.9335 55.8215 21.021 55.4268 21.1958C55.0331 21.3696 54.6988 21.6095 54.4343 21.9084C54.1697 22.2073 53.9688 22.565 53.8345 22.9695C53.7012 23.373 53.6335 23.8162 53.6335 24.2849C53.6335 25.2983 53.9093 26.1175 54.4538 26.7173C54.9993 27.3191 55.8186 27.625 56.8871 27.625C57.5187 27.625 58.1667 27.498 58.6322 27.316C58.6322 27.316 58.7214 27.2733 58.6825 27.1707L58.3799 26.3422ZM60.5364 23.6114C60.5948 23.218 60.7045 22.8907 60.8737 22.6356C61.1291 22.2483 61.5187 22.0359 62.0662 22.0359C62.6138 22.0359 62.9758 22.2493 63.2352 22.6356C63.4074 22.8907 63.4823 23.2323 63.5121 23.6114H60.5364ZM64.686 22.7463C64.5815 22.355 64.322 21.9595 64.1518 21.7786C63.8831 21.492 63.6207 21.2918 63.3602 21.1799C63.0198 21.0355 62.6117 20.94 62.1647 20.94C61.6438 20.94 61.1711 21.0265 60.7876 21.2053C60.4031 21.3843 60.0802 21.6283 59.8269 21.9322C59.5735 22.235 59.3829 22.5959 59.2618 23.0055C59.1398 23.4132 59.0783 23.8574 59.0783 24.3259C59.0783 24.8027 59.1419 25.2469 59.268 25.6463C59.3952 26.0489 59.5982 26.4036 59.873 26.6973C60.1467 26.9931 60.4995 27.2249 60.9219 27.3864C61.3413 27.5471 61.851 27.6304 62.4364 27.6293C63.6412 27.6253 64.2759 27.359 64.5374 27.2156C64.5835 27.1903 64.6276 27.1456 64.5722 27.0175L64.2994 26.2601C64.2585 26.1474 64.1426 26.189 64.1426 26.189C64.1165 26.1986 64.0894 26.2089 64.0611 26.2196C63.7656 26.3317 63.3332 26.4958 62.4302 26.494C61.7832 26.493 61.3033 26.3039 61.0028 26.0081C60.6942 25.7052 60.5435 25.2599 60.5168 24.6318L64.689 24.6359C64.689 24.6359 64.7987 24.6339 64.8101 24.5281C64.8102 24.5264 64.8106 24.5237 64.8111 24.52L64.8126 24.5091C64.831 24.3751 64.9357 23.616 64.686 22.7463ZM27.1231 23.6114C27.1826 23.218 27.2913 22.8907 27.4605 22.6356C27.7157 22.2483 28.1054 22.0359 28.6529 22.0359C29.2005 22.0359 29.5625 22.2493 29.8228 22.6356C29.994 22.8907 30.0689 23.2323 30.0987 23.6114H27.1231ZM31.2717 22.7463C31.1671 22.355 30.9088 21.9595 30.7386 21.7786C30.4699 21.492 30.2074 21.2918 29.947 21.1799C29.6065 21.0355 29.1985 20.94 28.7514 20.94C28.2316 20.94 27.7578 21.0265 27.3744 21.2053C26.9899 21.3843 26.6669 21.6283 26.4136 21.9322C26.1604 22.235 25.9696 22.5959 25.8487 23.0055C25.7277 23.4132 25.6651 23.8574 25.6651 24.3259C25.6651 24.8027 25.7287 25.2469 25.8548 25.6463C25.982 26.0489 26.1851 26.4036 26.4598 26.6973C26.7336 26.9931 27.0863 27.2249 27.5087 27.3864C27.9282 27.5471 28.4377 27.6304 29.0232 27.6293C30.228 27.6253 30.8627 27.359 31.1242 27.2156C31.1704 27.1903 31.2144 27.1456 31.1591 27.0175L30.8874 26.2601C30.8453 26.1474 30.7295 26.189 30.7295 26.189C30.7034 26.1986 30.6763 26.2089 30.6479 26.2197L30.6477 26.2197C30.3524 26.3319 29.9206 26.4958 29.0161 26.494C28.3701 26.493 27.8903 26.3039 27.5898 26.0081C27.2811 25.7052 27.1305 25.2599 27.1037 24.6318L31.2759 24.6359C31.2759 24.6359 31.3856 24.6339 31.3969 24.5281C31.397 24.5269 31.3972 24.5251 31.3975 24.5228C31.398 24.5193 31.3986 24.5145 31.3995 24.5084C31.4181 24.3726 31.5219 23.6146 31.2717 22.7463ZM18.105 26.3196C17.9419 26.1904 17.9194 26.1579 17.864 26.0746C17.7819 25.9475 17.7399 25.7666 17.7399 25.5369C17.7399 25.1729 17.8609 24.9117 18.1122 24.7359C18.1091 24.7369 18.4711 24.4259 19.3221 24.437C19.9198 24.4452 20.454 24.5326 20.454 24.5326V26.4131H20.455C20.455 26.4131 19.9249 26.5258 19.3282 26.5614C18.4792 26.6123 18.1019 26.3186 18.105 26.3196ZM19.765 23.4135C19.5958 23.4012 19.3763 23.3941 19.1138 23.3941C18.756 23.3941 18.4105 23.4388 18.0864 23.5252C17.7604 23.6116 17.4672 23.7469 17.2149 23.9257C16.963 24.1039 16.756 24.3373 16.6099 24.6077C16.4623 24.8802 16.3874 25.2014 16.3874 25.5612C16.3874 25.9271 16.451 26.2453 16.5782 26.5056C16.7053 26.7668 16.8889 26.9843 17.1226 27.1521C17.3543 27.3198 17.6404 27.4427 17.9726 27.5169C18.2997 27.5911 18.6709 27.6287 19.0769 27.6287C19.5045 27.6287 19.9311 27.5942 20.3443 27.524C20.7534 27.4548 21.2558 27.3542 21.3952 27.3228C21.493 27.2994 21.5904 27.2747 21.6875 27.2486C21.7911 27.2232 21.7829 27.1133 21.7829 27.1133L21.7808 23.3311C21.7808 22.5016 21.5573 21.8866 21.1174 21.5055C20.6795 21.1253 20.0346 20.9331 19.201 20.9331C18.8882 20.9331 18.3848 20.9759 18.0833 21.0358C18.0833 21.0358 17.1718 21.2107 16.7965 21.5014C16.7965 21.5014 16.7145 21.5523 16.7596 21.6661L17.0549 22.4529C17.0918 22.5545 17.1913 22.52 17.1913 22.52C17.1913 22.52 17.2231 22.5077 17.2601 22.4864C18.063 22.0534 19.078 22.0666 19.078 22.0666C19.5292 22.0666 19.8758 22.156 20.1095 22.3339C20.3371 22.5067 20.453 22.7679 20.453 23.3188V23.4937C20.0941 23.4429 19.765 23.4135 19.765 23.4135ZM53.4156 21.2823C53.4473 21.1888 53.3807 21.144 53.3529 21.1339C53.2823 21.1065 52.9275 21.0323 52.6537 21.015C52.1298 20.9835 51.8386 21.0709 51.5781 21.1868C51.3197 21.3026 51.0326 21.4896 50.8726 21.7021V21.199C50.8726 21.1288 50.8224 21.0729 50.7526 21.0729H49.6832C49.6135 21.0729 49.5633 21.1288 49.5633 21.199V27.3679C49.5633 27.4371 49.6207 27.494 49.6904 27.494H50.7865C50.8201 27.4938 50.8522 27.4804 50.8758 27.4568C50.8995 27.4332 50.9127 27.4012 50.9126 27.3679V24.286C50.9126 23.8723 50.9588 23.4597 51.0511 23.2005C51.1413 22.9442 51.2644 22.739 51.4161 22.5915C51.5689 22.4452 51.7421 22.3425 51.9319 22.2846C52.1256 22.2256 52.3399 22.2063 52.4917 22.2063C52.7101 22.2063 52.95 22.2622 52.95 22.2622C53.0299 22.2713 53.0751 22.2225 53.1017 22.1504C53.1735 21.9613 53.3766 21.3951 53.4156 21.2823ZM42.7144 18.3257C42.8723 18.3552 42.9933 18.3827 43.1266 18.4233C43.1553 18.4344 43.2362 18.4741 43.2034 18.5678L42.8845 19.4359C42.8578 19.5009 42.8394 19.5405 42.703 19.4999C42.6691 19.4896 42.6189 19.4754 42.4897 19.4479C42.3964 19.4286 42.2724 19.4144 42.1473 19.4144C41.9822 19.4144 41.8314 19.4347 41.6992 19.4774C41.57 19.5191 41.4521 19.5913 41.3495 19.6929C41.2459 19.7966 41.1229 19.9481 41.0572 20.1341C40.927 20.5074 40.8638 20.9008 40.8435 21.0271C40.84 21.049 40.8378 21.0628 40.8367 21.0672H42.1707C42.2825 21.0672 42.3174 21.118 42.3071 21.2003L42.1513 22.0603C42.1276 22.1852 42.0118 22.1812 42.0118 22.1812H40.6379L39.6976 27.4536C39.5992 27.9984 39.4751 28.466 39.3306 28.8421C39.1849 29.2232 39.0321 29.5017 38.7891 29.7681C38.5635 30.014 38.3093 30.196 38.0181 30.3007C37.7278 30.4044 37.3771 30.4582 36.9937 30.4582C36.8102 30.4582 36.6144 30.4552 36.3826 30.4013C36.2154 30.3616 36.1242 30.3332 36.0012 30.2905C35.9489 30.2712 35.9079 30.2071 35.9366 30.1249C35.9664 30.0424 36.2124 29.3727 36.2463 29.2842C36.2894 29.1775 36.397 29.2181 36.397 29.2181C36.4719 29.2497 36.5242 29.2709 36.6226 29.2903C36.7221 29.3106 36.8564 29.3269 36.9569 29.3269C37.1384 29.3269 37.3045 29.3046 37.448 29.2568C37.6223 29.1989 37.7229 29.0993 37.8295 28.9651C37.9402 28.8248 38.0294 28.6327 38.1207 28.3765C38.214 28.1164 38.298 27.7738 38.3709 27.357L39.3061 22.1812H38.3842C38.2736 22.1812 38.2376 22.1294 38.2489 22.048L38.4037 21.1871C38.4283 21.063 38.5432 21.0671 38.5432 21.0671H39.4905L39.5418 20.7876C39.6833 19.9571 39.9653 19.3259 40.3807 18.9111C40.7979 18.4944 41.3926 18.283 42.1474 18.283C42.3637 18.283 42.5543 18.2973 42.7144 18.3257ZM24.3681 27.4933C24.4378 27.4933 24.4881 27.4374 24.4881 27.3683V18.5412C24.4881 18.4722 24.4378 18.4162 24.3681 18.4162H23.2617C23.192 18.4162 23.1428 18.4722 23.1428 18.5412V27.3683C23.1428 27.4374 23.192 27.4933 23.2617 27.4933H24.3681Z" fill="#191927"></path></Company>
                    <Company width="63" height="33" viewBox="0 0 63 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M62.1307 10.7101C62.1307 9.97215 61.532 9.39465 60.8038 9.39465C60.0594 9.39465 59.4607 9.98819 59.4607 10.7101V13.4853C59.4607 14.2233 60.0594 14.8168 60.8038 14.8168C61.532 14.8168 62.1307 14.2233 62.1307 13.4853V10.7101ZM54.784 7.05252C54.784 6.33064 54.1853 5.73708 53.4409 5.73708C52.6965 5.73708 52.1139 6.33064 52.1139 7.05252V13.4853C52.1139 14.2233 52.7127 14.8168 53.4409 14.8168C54.2014 14.8168 54.784 14.2233 54.784 13.4853V7.05252ZM47.4211 2.06349C47.4211 1.32556 46.8223 0.748047 46.0941 0.748047C45.3498 0.748047 44.7672 1.3416 44.7672 2.06349V16.1323C44.7672 16.8702 45.3659 17.4637 46.0941 17.4637C46.8385 17.4637 47.4211 16.8702 47.4211 16.1323V2.06349ZM40.0743 7.05252C40.0743 6.33064 39.4756 5.73708 38.7474 5.73708C38.0192 5.73708 37.4205 6.33064 37.4205 7.05252V13.4853C37.4205 14.2233 38.0192 14.8168 38.7474 14.8168C39.4918 14.8168 40.0743 14.2233 40.0743 13.4853V7.05252ZM32.7114 10.7101C32.7114 9.97215 32.1127 9.39465 31.3845 9.39465C30.6401 9.39465 30.0414 9.98819 30.0414 10.7101V13.4853C30.0414 14.2233 30.6401 14.8168 31.3845 14.8168C32.1127 14.8168 32.7114 14.2233 32.7114 13.4853V10.7101ZM25.3647 7.05252C25.3647 6.33064 24.766 5.73708 24.0216 5.73708C23.2772 5.73708 22.6784 6.33064 22.6784 7.05252V13.4853C22.6784 14.2233 23.2772 14.8168 24.0216 14.8168C24.766 14.8168 25.3647 14.2233 25.3647 13.4853V7.05252ZM18.018 2.06349C18.018 1.32556 17.4192 0.748047 16.6748 0.748047C15.9305 0.748047 15.3317 1.3416 15.3317 2.06349V16.1323C15.3317 16.8702 15.9305 17.4637 16.6748 17.4637C17.4192 17.4637 18.018 16.8702 18.018 16.1323V2.06349ZM10.6551 7.05252C10.6551 6.33064 10.0563 5.73708 9.31193 5.73708C8.56755 5.73708 7.96881 6.33064 7.96881 7.05252V13.4853C7.96881 14.2233 8.56755 14.8168 9.31193 14.8168C10.0563 14.8168 10.6551 14.2233 10.6551 13.4853V7.05252ZM3.30832 10.7101C3.30832 9.97215 2.70958 9.39465 1.9652 9.39465C1.22082 9.39465 0.62207 9.98819 0.62207 10.7101V13.4853C0.62207 14.2233 1.22082 14.8168 1.9652 14.8168C2.70958 14.8168 3.30832 14.2233 3.30832 13.4853V10.7101ZM30.9476 22.2282C30.8667 22.2122 29.6368 21.8913 28.3261 21.8913C25.834 21.8913 24.3452 23.2228 24.3452 25.1959C24.3452 26.9445 25.5913 27.8268 27.0962 28.292C27.258 28.3402 27.5008 28.4204 27.6788 28.4685C28.3422 28.677 28.8763 28.9818 28.8763 29.5273C28.8763 30.1208 28.2613 30.5219 26.9182 30.5219C25.7369 30.5219 24.6041 30.185 24.3776 30.1208V32.5592C24.507 32.5913 25.8502 32.8479 27.2904 32.8479C29.3617 32.8479 31.7081 31.9496 31.7081 29.2866C31.7081 28.0033 30.9152 26.8001 29.1675 26.2547L28.4231 26.0141C27.9862 25.8697 27.1933 25.6451 27.1933 25.0034C27.1933 24.4901 27.7759 24.1372 28.8601 24.1372C29.7986 24.1372 30.9314 24.442 30.9638 24.458V22.2282H30.9476ZM53.7322 27.3776C53.7322 28.9177 52.5347 30.1689 50.9488 30.1689C49.3468 30.1689 48.1655 28.9177 48.1655 27.3776C48.1655 25.8376 49.3468 24.5863 50.9488 24.5863C52.5347 24.6024 53.7322 25.8537 53.7322 27.3776ZM50.9488 21.9074C47.6638 21.9074 45.3012 24.3618 45.3012 27.3937C45.3012 30.4256 47.6638 32.88 50.9488 32.88C54.2338 32.88 56.5964 30.4256 56.5964 27.3937C56.5964 24.3618 54.2338 21.9074 50.9488 21.9074ZM14.3122 22.2763C14.0533 22.1961 13.1148 21.8913 11.8525 21.8913C8.56755 21.8913 6.15639 24.2174 6.15639 27.3776C6.15639 30.7946 8.81028 32.864 11.8525 32.864C13.05 32.864 13.9724 32.5752 14.3122 32.479V29.6396C14.199 29.7037 13.3089 30.201 12.0467 30.201C10.2505 30.201 9.08538 28.9498 9.08538 27.3776C9.08538 25.7574 10.299 24.5543 12.0467 24.5543C13.3413 24.5543 14.199 25.0676 14.3122 25.1157V22.2763ZM42.4531 22.2763C42.1942 22.1961 41.2556 21.8913 39.9934 21.8913C36.7084 21.8913 34.2973 24.2174 34.2973 27.3776C34.2973 30.7946 36.9674 32.864 39.9934 32.864C41.1909 32.864 42.1133 32.5752 42.4531 32.479V29.6396C42.3399 29.7037 41.4498 30.201 40.1876 30.201C38.3914 30.201 37.2425 28.9498 37.2425 27.3776C37.2425 25.7574 38.4561 24.5543 40.1876 24.5543C41.4822 24.5543 42.3399 25.0676 42.4531 25.1157V22.2763ZM20.7204 32.6875H18.018V22.0998H20.7204V32.6875Z" fill="#191927"></path></Company>
                    <Company width="56" height="24" viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.33548 0.624512H0.00183105V4.9206H4.33548V0.624512Z" fill="#191927"></path><path d="M4.22734 23.0066V7.53449H0.125V23.0066H4.22734ZM31.494 23.1595V19.3679C30.8925 19.3679 30.3836 19.3373 30.0135 19.2761C29.5816 19.215 29.2578 19.0621 29.0419 18.8481C28.8259 18.634 28.6871 18.3283 28.61 17.9307C28.5483 17.5485 28.5175 17.044 28.5175 16.4325V11.0203H31.494V7.53449H28.5175V1.49549H24.3997V16.463C24.3997 17.732 24.5077 18.8022 24.7236 19.6584C24.9395 20.4992 25.3097 21.1872 25.8186 21.707C26.3275 22.2268 27.0061 22.5938 27.8235 22.8231C28.6563 23.0524 29.705 23.1595 30.9542 23.1595H31.494ZM55.0593 23.0066V0.302979H50.9416V23.0066H55.0593ZM20.4362 9.04806C19.2949 7.82498 17.691 7.21343 15.6553 7.21343C14.6682 7.21343 13.7738 7.41218 12.9564 7.80969C12.1544 8.20719 11.4604 8.75758 10.9206 9.46086L10.6893 9.75134V9.49143V7.53449H6.63322V23.0066H10.7201V14.766V15.3317C10.7201 15.24 10.7201 15.1482 10.7201 15.0565C10.7664 13.6041 11.1211 12.5339 11.7997 11.8459C12.5245 11.112 13.4036 10.7451 14.4061 10.7451C15.5936 10.7451 16.5035 11.112 17.105 11.8153C17.691 12.5186 17.9995 13.5123 17.9995 14.7813V14.8119V22.9913H22.1481V14.2156C22.1635 12.0141 21.5774 10.2712 20.4362 9.04806ZM48.8133 15.24C48.8133 14.1239 48.6128 13.0843 48.2272 12.1058C47.8262 11.1426 47.271 10.2864 46.577 9.55259C45.8676 8.81873 45.0194 8.25306 44.0324 7.84026C43.0453 7.42747 41.9503 7.22872 40.7628 7.22872C39.637 7.22872 38.5728 7.44276 37.5858 7.85555C36.5988 8.28363 35.7351 8.84931 35.0103 9.56788C34.2854 10.2864 33.6994 11.1426 33.283 12.1211C32.8512 13.0995 32.6507 14.1545 32.6507 15.2705C32.6507 16.3866 32.8512 17.4415 33.2521 18.42C33.6531 19.3985 34.2238 20.2546 34.9332 20.9732C35.6426 21.6917 36.5217 22.2727 37.5396 22.6855C38.5574 23.1136 39.6833 23.3276 40.8862 23.3276C44.3716 23.3276 46.5308 21.7529 47.8262 20.2852L44.8652 18.0531C44.2483 18.7869 42.7677 19.7807 40.917 19.7807C39.7604 19.7807 38.8042 19.5208 38.0793 18.9857C37.3545 18.4658 36.861 17.732 36.5988 16.83L36.5525 16.6924H48.8133V15.24ZM36.5834 13.8181C36.5834 12.6868 37.8943 10.7145 40.7166 10.6992C43.5388 10.6992 44.8652 12.6715 44.8652 13.8028L36.5834 13.8181Z" fill="#191927"></path></Company>
                </Companies>
            </Container>
            <SilverComponent padding='100px 0'>
                <Container>
                    <SilverComponentContent direction='row'>
                        <h3>Developers can now customize GPT-3 for their own applications.</h3>
                        <SilverInfo>
                            <p>GPT-3 can now be customized via our API. With a single command, developers can fine-tune powerful AI models tailored to their needs.</p>
                            <DocsBtns margin='40px 0 0 0'>
                                <Btn to="/" background='0,0,0' color='255,255,255' after=''>get started</Btn>
                                <StyledLink nobg to="/" background='inherit' color='0,0,0' after=''>learn more</StyledLink>
                            </DocsBtns>
                        </SilverInfo>
                    </SilverComponentContent>
                </Container>
            </SilverComponent>
            <Container>
               <BuildingWrapper>
                <h2 className='center'>Start building with a simple API call.</h2>
                    <DocsBtns margin="30px auto 0 auto">
                        <Btn to="/" background="0,0,0" color="255,255,255" after="">get started</Btn>
                        <StyledLink nobg to="/" background='inherit' color='0,0,0' after=''>read documentation</StyledLink>
                    </DocsBtns>
                    <CodeBlock width="650px" padding="30px" margin="40px auto 0 auto">
                        <String width='100%'><Sword red>import</Sword><Sword> openai</Sword></String>
                        <br></br>
                        <String width='100%'><Sword >openai.Completion.create(</Sword></String>
                        <String width='100%' padding='18px' ><Sword >  engine=<Sword green>"davinci"</Sword>,</Sword></String>
                        <String width='100%' padding='18px' ><Sword>  prompt=<Sword green>"Make a list of astronomical observatories:"</Sword></Sword></String>
                        <String width='100%'><Sword >)</Sword></String>
                    </CodeBlock>
                    <Tabs>
                        <TabsHeadWrapper>
                            <ApiTabs actionName='gpt' tabs={['Copywriting', 'Summarization', 'Parsing unstructured text', 'Classification', 'Translation']}/>
                            <ApiTabsContent nameOfTab='gpt'/>
                        </TabsHeadWrapper>
                        <TabsContentWrapper>
                            <h2>Perform a wide variety of natural language tasks with GPT-3.</h2>
                            <DocsBtns margin="30px auto 0 0">
                                <Btn to="/" background="0,0,0" color="255,255,255" after="">get started</Btn>
                                <StyledLink nobg to="/" background='inherit' color='0,0,0' after=''>see more examples</StyledLink>
                            </DocsBtns>
                        </TabsContentWrapper>
                    </Tabs>
                    <Tabs reverse>
                        <TabsContentWrapper>
                            <h2>Translate natural language to code with Codex.</h2>
                            <DocsBtns margin="30px auto 0 0">
                                <Btn to="/" background="0,0,0" color="255,255,255" after="">get started</Btn>
                                <StyledLink nobg to="/" background='inherit' color='0,0,0' after=''>see more examples</StyledLink>
                            </DocsBtns>
                        </TabsContentWrapper>
                        <TabsHeadWrapper>
                            <ApiTabs actionName='codex' tabs={['Text to SQL translation', 'Calling an API via natural language', 'Code continuation']}/>
                            <ApiTabsContent nameOfTab='codex'/>
                        </TabsHeadWrapper>
                    </Tabs>
                    <Benefits>
                        <BenifitsItem>
                            <BenifitsIcon>lightning</BenifitsIcon>
                            <h3>Fast</h3>
                            <p>Our advanced inference infrastructure provides extremely short response times.</p>
                        </BenifitsItem>
                        <BenifitsItem>
                            <BenifitsIcon>expand</BenifitsIcon>
                            <h3>Scalable</h3>
                            <p>We can handle high volume requests that scale with your needs.</p>
                        </BenifitsItem>
                        <BenifitsItem>
                            <BenifitsIcon>fork</BenifitsIcon>
                            <h3>Flexible</h3>
                            <p>Easy to use and flexible enough to make machine learning teams more productive.</p>
                        </BenifitsItem>
                    </Benefits>
               </BuildingWrapper>
            </Container>
            <SilverComponent padding='80px 0'>
                <Container>
                    <SilverComponentContent direction='row'>
                        <h3>Like our developers, we strive to ensure machine learning models are used responsibly.</h3>
                        <SilverInfo>
                            <p>We help developers use best practices and provide tools, including:</p>
                            <p>Our API allows us to review applications before they go live, continually improve our safety tools, help developers scale over time, and better understand the effects of our technology.</p>
                            <Btn to="/" background='0,0,0' color='255,255,255' after=''>get started</Btn>
                        </SilverInfo>
                    </SilverComponentContent>
                </Container>
            </SilverComponent>
            <OpenaiApps>
                <Container>
                    <OpenaiDescr>
                        <h2>Built with OpenAI’s API</h2>
                        <p>Our API has been deployed in thousands of applications with tasks ranging from helping people learn new languages to solving complex classification problems.</p>
                    </OpenaiDescr>
                    <OpenaiAppsContent>
                        <OpenaiAppItem>
                                <a href="#"><img src={copilot} alt="" /></a>
                                <h3>GitHub Copilot</h3>
                                <p>AI pair programmer that helps you write code faster with less work. Using Codex, GitHub Copilot applies the context in your editor and synthesizes whole lines and even entire functions of code.</p>
                        </OpenaiAppItem>
                        <OpenaiAppItem>
                                <a href="#"><img src={keeper} alt="" /></a>
                                <h3>Keeper Tax</h3>
                                <p>Helps freelancers automatically find tax-deductible expenses by using GPT-3 to interpret data from their bank statements into usable transaction information.</p>
                        </OpenaiAppItem>
                        <OpenaiAppItem>
                                <a href="#"><img src={viable} alt="" /></a>
                                <h3>Viable</h3>
                                <p>Helps businesses better and more quickly understand what customers are telling them by using language models, including GPT-3, to analyze customer feedback and generate summaries and insights.</p>
                        </OpenaiAppItem>
                        <OpenaiAppItem>
                                <a href="#"><img src={duolingo} alt="" /></a>
                                <h3>Duolingo</h3>
                                <p>Uses GPT-3 to provide French grammar corrections. An internal Duolingo study shows that use of this feature leads to measurably better second language writing skills!</p>
                        </OpenaiAppItem>
                    </OpenaiAppsContent>
                </Container>
            </OpenaiApps>
            <SilverComponent padding='120px 0'>
                <Container>
                    <SilverComponentContent center direction='column'>
                        <h2>Get started with OpenAI’s powerful language and code generation models.</h2>
                        <Btn margin="40px auto 0 auto" to="/" background='0,0,0' color='255,255,255' after=''>get started</Btn>
                    </SilverComponentContent>
                </Container>
            </SilverComponent>
        </ApiPageWrapper>
    );
};

export default ApiPage;
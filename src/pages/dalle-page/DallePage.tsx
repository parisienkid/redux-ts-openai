import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { dalleTheme } from '../../core/theme/theme';
import Container from '../../components/container/Container';
import { RouterBtn } from '../../components/buttons/Btns';

// styled components

const IntroWrapper = styled.div`
    padding: 25vh 0 140px 0;
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

//

const DallePage: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTheme(dalleTheme));
    }, []);

    return (
        <>
            <Container>
                <IntroBtns>
                    <RouterBtn to='/react-ts-openai/' color="255,255,255" $nobg background='inherit' after="">log in</RouterBtn>
                    <RouterBtn to='/react-ts-openai/' color="0,0,0" $nobg background='255,255,255' after="">sign in</RouterBtn>
                </IntroBtns>
            </Container>
            <IntroWrapper>
                <Container>
                    <h1>DALL·E <span>2</span></h1>
                    <h2>DALL·E 2 is a new AI system that can create realistic images and art from a description in natural language.</h2>
                    <NavList>
                        <li>
                            <NavLink before="#ff6" after='↗'>SIGN UP</NavLink>
                        </li>
                        <li>
                            <NavLink before="#42ffff" after='↓'>EXPLORE</NavLink>
                        </li>
                        <li>
                            <NavLink before="#51da4c" after='▶'>WATCH VIDEO</NavLink>
                        </li>
                        <li>
                            <NavLink before="#ff6e3c" after='📄'>VIEW RESEARCH</NavLink>
                        </li>
                        <li>
                            <NavLink before="#3c46ff" after=''>FOLLOW ON INSTAGRAM</NavLink>
                        </li>
                    </NavList>
                </Container>
            </IntroWrapper>
        </>
    );
};

export default DallePage;
import { FC, useRef } from "react"
import styled from "styled-components"
import Container from "../../../components/container/Container"
import {RouterBtn, DefaultBtn, StyledRouterBtn, StyledDefaultBtn} from '../../../components/buttons/Btn';
import ApiPage from "../ApiPageMain"
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';


const Navbar = styled.div`
    height: ${({ theme }) => theme.sizes.default.header.height + 10}px;
    @media ${({theme}) => theme.media.medium} {
        height: ${({ theme }) => theme.sizes.m.header.height + 5}px;
    }
    position: sticky;
    backdrop-filter: blur(1.5rem);
    background-color: rgba(247, 247, 248, .7);
    top: 0;
    z-index: ${({ theme }) => theme.order.header};
`

const NavContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    @media ${({theme}) => theme.media.large} {
        justify-content: flex-start;
    }

`

const NavLinks = styled.div`
    display: flex;
    @media ${({theme}) => theme.media.medium} {
        display: none;
    }
`

const NavLogin = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 185px;
    justify-content: space-between;
`

const NavMobileBurger = styled.button`
    display: none;
    position: absolute;
    top: 50%;
    left: -5px;
    transform: translateY(-50%);
    height: 31px;
    padding: 12px 5px;
    width: 35px;
    background-color: inherit;
    border: none;
    cursor: pointer;
    @media ${({theme}) => theme.media.medium} {
        display: block;
        span {
            height: 2px;
            width: 100%;
            display: block;
            background-color: #000;
            transform-origin: center;
            &:last-child {
                margin-top: 3px;
            }
            transition: .15s;
        }
    }
    &:hover {
        span {
            background-color: #161616;
        }
    }
`

const NavMobileMenu = styled.div`
    display: none;
    flex-direction: column;
    transition: .3s;
    position: sticky;
    top: ${({ theme }) => theme.sizes.default.header.height + 10}px;
    backdrop-filter: blur(1.5rem);
    background-color: rgba(247, 247, 248, .7);
    z-index: ${({ theme }) => theme.order.header};
    @media ${({theme}) => theme.media.medium} {
        top: ${({ theme }) => theme.sizes.m.header.height + 5}px;
    }
    &.active {
        display: flex;
    }
    div {
        display: flex;
        flex-direction: column;
    }
`

const MobileLink = styled(Link)`
    color: #000;
    font-family: ColfaxAI,Helvetica,sans-serif;
    text-transform: uppercase;
    font-size: .7rem;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,.1);
    span {
        font-size: .5rem;
        vertical-align: middle;
        font-weight: bold;
    }
    &.active {
        opacity: .5;
    }
    &:hover {
        opacity: .75;
        color: #000;
        &.active {
            opacity: .5;
        }
    }
    &:last-child {
        border-bottom: none;
    }
`


const ApiHeader: FC = () => {

    const {pathname} = useLocation();

    const navbar = useRef<HTMLDivElement>(null);
    const mobileMenu = useRef<HTMLDivElement>(null);
    const firstSpan = useRef<HTMLElement>(null);
    const secondSpan = useRef<HTMLElement>(null);
    const burger = useRef<HTMLButtonElement>(null);

    const onToggleBurger = (e: React.MouseEvent | React.TouchEvent | React.KeyboardEvent) => {
        if (firstSpan.current && secondSpan.current && burger.current && navbar.current && mobileMenu.current) {
            burger.current.classList.toggle('active');
            navbar.current.classList.toggle('active');
            mobileMenu.current.classList.toggle('active');
            if (burger.current.classList.contains('active')) {
                firstSpan.current.style.marginTop = "2px";
                secondSpan.current.style.marginTop = "-2px";
                setTimeout(() => {
                    if (firstSpan.current && secondSpan.current) {
                        firstSpan.current.style.transform = "rotate(45deg)";
                        secondSpan.current.style.transform = "rotate(-45deg)";
                    }
                }, 150);
            } else {
                firstSpan.current.style.transform = "rotate(0deg)";
                secondSpan.current.style.transform = "rotate(0deg)";
                setTimeout(() => {  
                    if (firstSpan.current && secondSpan.current) {
                        firstSpan.current.style.marginTop = "0px";
                        secondSpan.current.style.marginTop = "4px";
                    }
                }, 150);
            }
        } 

    }

    return (
        <>
            <Navbar ref={navbar}>
                <Container>
                    <NavContent>
                        <NavMobileBurger ref={burger} onClick={onToggleBurger}>
                            <span ref={firstSpan} ></span>
                            <span ref={secondSpan} ></span>
                        </NavMobileBurger>        
                        <NavLinks>
                            <StyledRouterBtn className={`${pathname === "/api" ? "active" : ""}`} to="/api" background='inherit' color='0,0,0' after=''>overview</StyledRouterBtn>
                            <StyledRouterBtn className={`${pathname === "/api/pricing" ? "active" : ""}`} to="/api/pricing" background='inherit' color='0,0,0' after=''>pricing</StyledRouterBtn>
                            <StyledDefaultBtn target="_blank" href="https://beta.openai.com/docs/" background='inherit' color='0,0,0' after='↗'>docs</StyledDefaultBtn>
                            <StyledDefaultBtn target="_blank" href="https://beta.openai.com/examples/" background='inherit' color='0,0,0' after='↗'>examples</StyledDefaultBtn>
                        </NavLinks>
                        <NavLogin>
                            <StyledRouterBtn to="/" background='inherit' color='0,0,0' after=''>log in</StyledRouterBtn>
                            <StyledRouterBtn to="/" background='0,0,0' color='255,255,255' after=''>sign up</StyledRouterBtn>
                        </NavLogin>
                    </NavContent>
                </Container>
            </Navbar>
            <NavMobileMenu ref={mobileMenu}>
                <Container>
                    <MobileLink className={`${pathname === "/api" ? "active" : ""}`} to="/api">overview</MobileLink>
                    <MobileLink className={`${pathname === "/api/pricing" ? "active" : ""}`} to="/api/pricing">pricing</MobileLink>
                    <MobileLink to="https://beta.openai.com/docs/introduction">docs <span>↗</span></MobileLink>
                    <MobileLink to="https://beta.openai.com/docs/introduction">examples <span>↗</span></MobileLink>
                </Container>
            </NavMobileMenu>
        </>
    )
};

export default ApiHeader;
import React, { FC } from 'react';
import styled from 'styled-components';

import Container from '../container/Container';

import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.header`
    height: ${({theme}) => theme.sizes.default.header.height}px;
    background-color: rgb(${({theme}) => theme.colors.header});
`

const NavWrapper = styled.nav`
    display: flex;
    height: 100%;
    align-items: center;
    font-family: "ColfaxAI",sans-serif;
`

const OpenaiIcon = styled.svg`
    height: 22px;
    width: 22px;
`

const IconLink = styled(NavLink)`
    height: 22px;
    width: 22px;
`

const HeaderLinks = styled.div`
    display: flex;
    margin-left: auto;
`

const HeaderLink = styled(NavLink)`
    font-family: "ColfaxAI",sans-serif;
    text-transform: uppercase;
    margin-right: 44px;
    font-weight: bold;
    font-size: 13.5px;
    color: black;
    &:nth-child(4) {
        margin-right: 0;
    }
    &:hover {
        color: black;
        text-decoration: none;
    }
    @media ${({theme}) => theme.media.medium} {
        margin-right: 20px;
        font-size: 12px;
    }
    &.active {
        opacity: .5;
    }
`

const Header: FC = () => {
    return (
        <HeaderWrapper>
            <Container>
                <NavWrapper>
                    <IconLink to='/'>
                        <OpenaiIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 51"><path d="M47.21,20.92a12.65,12.65,0,0,0-1.09-10.38A12.78,12.78,0,0,0,32.36,4.41,12.82,12.82,0,0,0,10.64,9a12.65,12.65,0,0,0-8.45,6.13,12.78,12.78,0,0,0,1.57,15A12.64,12.64,0,0,0,4.84,40.51a12.79,12.79,0,0,0,13.77,6.13,12.65,12.65,0,0,0,9.53,4.25A12.8,12.8,0,0,0,40.34,42a12.66,12.66,0,0,0,8.45-6.13A12.8,12.8,0,0,0,47.21,20.92ZM28.14,47.57a9.46,9.46,0,0,1-6.08-2.2l.3-.17,10.1-5.83a1.68,1.68,0,0,0,.83-1.44V23.69l4.27,2.47a.15.15,0,0,1,.08.11v11.8A9.52,9.52,0,0,1,28.14,47.57ZM7.72,38.85a9.45,9.45,0,0,1-1.13-6.37l.3.18L17,38.49a1.63,1.63,0,0,0,1.65,0L31,31.37V36.3a.17.17,0,0,1-.07.13L20.7,42.33A9.51,9.51,0,0,1,7.72,38.85Zm-2.66-22a9.48,9.48,0,0,1,5-4.17v12a1.62,1.62,0,0,0,.82,1.43L23.17,33.2,18.9,35.67a.16.16,0,0,1-.15,0L8.54,29.78A9.52,9.52,0,0,1,5.06,16.8ZM40.14,25,27.81,17.84l4.26-2.46a.16.16,0,0,1,.15,0l10.21,5.9A9.5,9.5,0,0,1,41,38.41v-12A1.67,1.67,0,0,0,40.14,25Zm4.25-6.39-.3-.18L34,12.55a1.64,1.64,0,0,0-1.66,0L20,19.67V14.74a.14.14,0,0,1,.06-.13L30.27,8.72a9.51,9.51,0,0,1,14.12,9.85ZM17.67,27.35,13.4,24.89a.17.17,0,0,1-.08-.12V13a9.51,9.51,0,0,1,15.59-7.3l-.3.17-10.1,5.83a1.68,1.68,0,0,0-.83,1.44Zm2.32-5,5.5-3.17L31,22.35v6.34l-5.49,3.17L20,28.69Z"></path></OpenaiIcon>
                    </IconLink>
                    <HeaderLinks>
                        <HeaderLink to='/api'>api</HeaderLink>
                        <HeaderLink to='/research'>research</HeaderLink>
                        <HeaderLink to='/blog'>blog</HeaderLink>
                        <HeaderLink to='/about'>about</HeaderLink>
                    </HeaderLinks>
                </NavWrapper>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
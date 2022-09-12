import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../container/container';
// const openAi = require('../../assets/icons/openai.svg');
import openAi from '../../assets/icons/openai.svg';

const HeaderWrapper = styled.header`
    height: ${({theme}) => theme.sizes.default.header.height}px;
`

const NavWrapper = styled.nav`
    display: flex;
    height: 100%;
    align-items: center;
    font-family: "ColfaxAI",sans-serif;
`

const OpenaiIcon = styled.img`
    height: 22px;
    width: 22px;
`

const HeaderLinks = styled.ul`
    list-style: none;
    display: flex;
    margin-left: auto;
`

const HeaderLink = styled.li`
    font-family: "ColfaxAI",sans-serif;
    text-transform: uppercase;
    margin-right: 44px;
    font-weight: bold;
    font-size: 13.5px;
    &:nth-child(4) {
        margin-right: 0;
    }
`

const Header: FC = () => {
    return (
        <HeaderWrapper>
            <Container>
                <NavWrapper>
                    <OpenaiIcon src={openAi}/>
                    <HeaderLinks>
                        <HeaderLink>api</HeaderLink>
                        <HeaderLink>research</HeaderLink>
                        <HeaderLink>blog</HeaderLink>
                        <HeaderLink>about</HeaderLink>
                    </HeaderLinks>
                </NavWrapper>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
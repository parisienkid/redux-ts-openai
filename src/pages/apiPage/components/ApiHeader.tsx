import { FC } from "react"
import styled from "styled-components"
import Container from "../../../components/container/Container"
import { StyledLink } from "../ApiPageMain"
import Btn from "../../../components/buttons/Btn"

import { useLocation } from 'react-router-dom';


const Navbar = styled.div`
    height: ${({ theme }) => theme.sizes.default.header.height + 10}px;
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
`

const NavBurger = styled.div`
    display: none;
`

const NavLinks = styled.div`
    display: flex;
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


const ApiHeader: FC = () => {

    const {pathname} = useLocation();

    return (
        <Navbar>
            <Container>
                <NavContent>
                    <NavBurger></NavBurger>
                    <NavLinks>
                        <StyledLink className={`${pathname === "/api" ? "active" : ""}`} to="/api" background='inherit' color='0,0,0' after=''>overview</StyledLink>
                        <StyledLink className={`${pathname === "/api/pricing" ? "active" : ""}`} to="/api/pricing" background='inherit' color='0,0,0' after=''>pricing</StyledLink>
                        <StyledLink to="/" background='inherit' color='0,0,0' after='↗'>docs</StyledLink>
                        <StyledLink to="/" background='inherit' color='0,0,0' after='↗'>examples</StyledLink>
                    </NavLinks>
                    <NavLogin>
                        <StyledLink to="/" background='inherit' color='0,0,0' after=''>log in</StyledLink>
                        <Btn to="/" background='0,0,0' color='255,255,255' after=''>sign up</Btn>
                    </NavLogin>
                </NavContent>
            </Container>
        </Navbar>
    )
};

export default ApiHeader;
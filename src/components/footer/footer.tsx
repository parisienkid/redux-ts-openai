import { FC } from 'react';
import styled from 'styled-components';

import Container from '../container/Container';

// styled components

const FooterWrapper = styled.footer`
    background-color: rgb(${({theme}) => theme.colors.footer});
    color: rgb(${({theme}) => theme.colors.footerColor});
    padding: 60px 0 35px 0;
    font-family: "ColfaxAI",sans-serif;
    margin-bottom: 0;
`

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const FooterLogo = styled.svg`
    fill: white;
    height: 30px;
    display: block;
    fill: rgb(${({theme}) => theme.colors.footerColor});
    @media ${({theme}) => theme.media.medium} {
       margin: 0 auto;
    }
`

const FooterNav = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    width: 100%;
    @media ${({theme}) => theme.media.medium} {
       display: grid;
       grid-template-columns: 50fr 50fr;
       grid-template-rows: 50fr 50fr;
       grid-column-gap: 10px;
       grid-row-gap: 50px
    }
    @media ${({theme}) => theme.media.small} {
        grid-column-gap: 20px
    }
`

const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media ${({theme}) => theme.media.medium} {
        width: 50%;
        margin: 0 auto;
    }
    @media ${({theme}) => theme.media.small} {
        width: 80%;
    }
`

const FooterLinksTitle = styled.div`
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 18px;
`

const FooterLink = styled.a`
    display: block;
    margin-bottom: 10px;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    line-height: 16px;
    color: rgb(${({theme}) => theme.colors.footerColor});
    &:last-child {
        margin-bottom: 0;
        margin-right: 0;
    }
    &:hover {
        color: #d3d2d2;
        text-decoration: none;
    }
    @media ${({theme}) => theme.media.large} {
        font-size: 14px;
    }
`

const FooterUseful = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media ${({theme}) => theme.media.large} {
        flex-direction: column;
        align-items: center;
    }
    @media ${({theme}) => theme.media.medium} {
       margin-top: 50px;
    }
`

const FooterInfo = styled.div`
    display: flex;
    font-size: 16px;
    @media ${({theme}) => theme.media.large} {
        margin-bottom: 30px;
    }
    @media ${({theme}) => theme.media.small} {
        flex-wrap: wrap;
        width: 80%;
    }
`

const FooterInfoLink = styled(FooterLink)`
    margin-bottom: 0;
    margin-right: 25px;
    &:nth-last-child() {
        margin-right: 0;
    }
    @media ${({theme}) => theme.media.small} {
        margin-bottom: 10px;
    }
`

const FooterIconsLinks = styled.div`
    display: flex;
    margin-left: auto;
    @media ${({theme}) => theme.media.large} {
        margin-right: auto;
    }
    @media ${({theme}) => theme.media.small} {
        display: grid;
        width: 100%;
        grid-template-columns:  1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 30px;
    }
`

const FooterIconLink = styled(FooterLink)`
    margin-right: 35px;
    display: block;
    font-size: 24px;
    font-family: 'IconsAI';
    color: #fff;
    margin-bottom: 0;
    display: block;
    color: rgb(${({theme}) => theme.colors.footerColor});
    &:nth-last-child() {
        margin-right: 0;
    }
    @media ${({theme}) => theme.media.small} {
        margin: 0;
        text-align: center;
    }
`

//

const Footer: FC = () => {
    return (
        <FooterWrapper >
            <Container>
                <FooterContent>
                    <FooterLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 936 232">
                        <path d="M667.21,90.58c-13.76,0-23.58,4.7-28.4,13.6L636.22,109V92.9H613.83v97.86h23.55V132.54c0-13.91,7.56-21.89,20.73-21.89,12.56,0,19.76,7.77,19.76,21.31v58.8h23.56v-63C701.43,104.46,688.64,90.58,667.21,90.58ZM553,90.58c-27.79,0-45,17.34-45,45.25v13.74c0,26.84,17.41,43.51,45.44,43.51,18.75,0,31.89-6.87,40.16-21L579,163.68c-6.11,8.15-15.87,13.2-25.55,13.2-14.19,0-22.66-8.76-22.66-23.44v-3.89h65.73V133.32c0-26-17.07-42.74-43.5-42.74Zm22.09,43.15H530.71v-2.35c0-16.11,7.91-25,22.27-25,13.83,0,22.09,8.76,22.09,23.44ZM935.31,76.79V58.07H853.85V76.79h28.56V172H853.85v18.72h81.46V172H906.74V76.79ZM317.65,55.37c-36.38,0-59,22.67-59,59.18v19.74c0,36.5,22.61,59.18,59,59.18s59-22.68,59-59.18V114.55C376.64,78,354,55.37,317.65,55.37Zm34.66,80.27c0,24.24-12.63,38.14-34.66,38.14S283,159.88,283,135.64V113.19c0-24.24,12.64-38.14,34.66-38.14s34.66,13.9,34.66,38.14Zm98.31-45.06c-12.36,0-23.06,5.12-28.64,13.69l-2.53,3.9V92.9h-22.4V224.43h23.56V176.79l2.52,3.74c5.3,7.86,15.65,12.55,27.69,12.55,20.31,0,40.8-13.27,40.8-42.93V133.51c0-21.37-12.63-42.93-41-42.93ZM468.06,149c0,15.77-9.2,25.57-24,25.57-13.8,0-23.43-10.36-23.43-25.18V134.67c0-15,9.71-25.56,23.63-25.56,14.69,0,23.82,9.79,23.82,25.56ZM766.53,58.08,719,190.76h23.93l9.1-28.44h54.64l.09.28,9,28.16h23.92L792.07,58.07Zm-8.66,85.53,21.44-67.08,21.22,67.08Z"></path><path d="M212.59,95.12a57.27,57.27,0,0,0-4.92-47.05,58,58,0,0,0-62.4-27.79A57.29,57.29,0,0,0,102.06,1,57.94,57.94,0,0,0,46.79,41.14,57.31,57.31,0,0,0,8.5,68.93a58,58,0,0,0,7.13,67.94,57.31,57.31,0,0,0,4.92,47A58,58,0,0,0,83,211.72,57.31,57.31,0,0,0,126.16,231a57.94,57.94,0,0,0,55.27-40.14,57.3,57.3,0,0,0,38.28-27.79A57.92,57.92,0,0,0,212.59,95.12ZM126.16,216a42.93,42.93,0,0,1-27.58-10c.34-.19,1-.52,1.38-.77l45.8-26.44a7.43,7.43,0,0,0,3.76-6.51V107.7l19.35,11.17a.67.67,0,0,1,.38.54v53.45A43.14,43.14,0,0,1,126.16,216ZM33.57,176.46a43,43,0,0,1-5.15-28.88c.34.21.94.57,1.36.81l45.81,26.45a7.44,7.44,0,0,0,7.52,0L139,142.52v22.34a.67.67,0,0,1-.27.6L92.43,192.18a43.14,43.14,0,0,1-58.86-15.77Zm-12-100A42.92,42.92,0,0,1,44,57.56V112a7.45,7.45,0,0,0,3.76,6.51l55.9,32.28L84.24,162a.68.68,0,0,1-.65.06L37.3,135.33A43.13,43.13,0,0,1,21.53,76.46Zm159,37-55.9-32.28L144,70a.69.69,0,0,1,.65-.06l46.29,26.73a43.1,43.1,0,0,1-6.66,77.76V120a7.44,7.44,0,0,0-3.74-6.54Zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67,57.2a7.44,7.44,0,0,0-7.52,0L89.25,89.47V67.14a.73.73,0,0,1,.28-.6l46.29-26.72a43.1,43.1,0,0,1,64,44.65ZM78.7,124.3,59.34,113.13a.73.73,0,0,1-.37-.54V59.14A43.09,43.09,0,0,1,129.64,26c-.34.19-.95.52-1.38.77L82.46,53.21a7.45,7.45,0,0,0-3.76,6.51Zm10.51-22.67,24.9-14.38L139,101.63v28.74L114.1,144.75,89.2,130.37Z"></path>
                    </FooterLogo>
                    <FooterNav>
                        <FooterLinks>
                            <FooterLinksTitle>FEATURED</FooterLinksTitle>
                            <FooterLink href="#">DALL??E 2</FooterLink>
                            <FooterLink href="#">Alignment</FooterLink>
                            <FooterLink href="#">Instruction Following</FooterLink>
                            <FooterLink href="#">Summarizing Books</FooterLink>
                            <FooterLink href="#">OpenAI Codex</FooterLink>
                            <FooterLink href="#">Startup Fund</FooterLink>
                        </FooterLinks>
                        <FooterLinks>
                            <FooterLinksTitle>API</FooterLinksTitle>
                            <FooterLink href="#">Overview</FooterLink>
                            <FooterLink href="#">Pricing</FooterLink>
                            <FooterLink href="#">Examples</FooterLink>
                            <FooterLink href="#">Docs</FooterLink>
                            <FooterLink href="#">Terms & Policies</FooterLink>
                            <FooterLink href="#">Status</FooterLink>
                            <FooterLink href="#">Log in</FooterLink>
                        </FooterLinks>
                        <FooterLinks>
                            <FooterLinksTitle>BLOG</FooterLinksTitle>
                            <FooterLink href="#">Index</FooterLink>
                            <FooterLink href="#">Research</FooterLink>
                            <FooterLink href="#">Announcements</FooterLink>
                            <FooterLink href="#">Events</FooterLink>
                            <FooterLink href="#">Milestones</FooterLink>
                        </FooterLinks>
                        <FooterLinks>
                            <FooterLinksTitle>INFORMATION</FooterLinksTitle>
                            <FooterLink href="#">About Us</FooterLink>
                            <FooterLink href="#">Our Charter</FooterLink>
                            <FooterLink href="#">Our Research</FooterLink>
                            <FooterLink href="#">Publications</FooterLink>
                            <FooterLink href="#">Newsroom</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                        </FooterLinks>
                    </FooterNav>
                    <FooterUseful>
                        <FooterInfo>
                            <FooterInfoLink href="#">OpenAI ?? 2015???2022</FooterInfoLink>
                            <FooterInfoLink href="#">Privacy Policy</FooterInfoLink>
                            <FooterInfoLink href="#">Terms of Use</FooterInfoLink>
                        </FooterInfo>
                        <FooterIconsLinks>
                            <FooterIconLink href="#">twitter</FooterIconLink>
                            <FooterIconLink href="#">youtube</FooterIconLink>
                            <FooterIconLink href="#">github</FooterIconLink>
                            <FooterIconLink href="#">soundcloud</FooterIconLink>
                            <FooterIconLink href="#">linkedin</FooterIconLink>
                            <FooterIconLink href="#">facebook</FooterIconLink>
                        </FooterIconsLinks>
                    </FooterUseful>
                </FooterContent>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;
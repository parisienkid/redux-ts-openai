import styled, { css } from "styled-components";


export const PostP = styled.p<MarginProps>`
    ${props => props.mb && css`
        margin-bottom: ${props.mb};
    `}
    ${props => props.mt && css`
        margin-top: ${props.mt};
    `}
    line-height: 1.4;
    font-family: ${({theme}) => theme.fonts.charter};
    font-size: 20px;
`

export const DefaultIntroBlock = styled.section`
    display: block;
    height: calc(100vh - ${({theme}) => theme.sizes.default.header.height}px);
    /* padding-top: ${({theme}) => theme.sizes.default.header.height}px; */
    padding: calc(${({theme}) => theme.sizes.default.header.height}px * 2) 0;
    display: grid;
    grid-template-columns: 35fr 40fr;
    grid-column-gap: 200px;
    grid-template-rows: 1fr;
    overflow: hidden;
    section {
        position: relative;
    }
    h1 {
        margin-bottom: 30px;
    }
    > div {
        position: relative;
        height: 100%;
        overflow: hidden;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
    @media ${({theme}) => theme.media.extraLarge} {
        height: calc(100vh - ${({theme}) => theme.sizes.xl.header.height}px);
        /* padding-top: ${({theme}) => theme.sizes.xl.header.height}px; */
        padding: calc(${({theme}) => theme.sizes.xl.header.height}px * 2) 0;
    }
    @media ${({theme}) => theme.media.large} {
        height: calc(100vh - ${({theme}) => theme.sizes.l.header.height}px);
        /* padding-top: ${({theme}) => theme.sizes.l.header.height}px; */
        padding: calc(${({theme}) => theme.sizes.l.header.height}px * 2) 0;
    }
    @media ${({theme}) => theme.media.medium} {
        height: calc(100vh - ${({theme}) => theme.sizes.m.header.height}px);
        /* padding-top: ${({theme}) => theme.sizes.m.header.height}px; */
        padding: calc(${({theme}) => theme.sizes.m.header.height}px * 2) 0;
    }
    @media ${({theme}) => theme.media.small} {
        height: calc(100vh - ${({theme}) => theme.sizes.s.header.height}px);
        /* padding-top: ${({theme}) => theme.sizes.s.header.height}px; */
        padding: calc(${({theme}) => theme.sizes.s.header.height}px * 2) 0;
    }
`

export const PostContainer = styled.section`
    margin: 0 auto;
    width: 720px;
    @media ${({theme}) => theme.media.medium} {
        width: 100%;
    }
    > ul {
        padding-left: 0;
    }
`


export const PostDate = styled.time`
    font-family: ${({theme}) => theme.fonts.colfax};
    font-size: 14px;
    color: rgba(0,0,0,.5);
    display: block;
`

export const PostTimeToRead = styled(PostDate)`
    margin-top: 2px;
`

export const PostHR = styled.hr<MarginProps>`
    width: 100%;
    height: .5px;
    border: none;
    background-color: rgba(0,0,0,.2);
    ${props => props.mb && css`
    margin-bottom: ${props.mb};
    `}
    ${props => props.mt && css`
        margin-top: ${props.mt};
    `}
`

interface MarginProps {
    mb?: string
    mt?:string
}

export const Footnotes = styled.div<MarginProps>`
    padding: 15px;
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-column-gap: 150px;
    grid-row-gap: 30px;
    ${props => props.mb && css`
        margin-bottom: ${props.mb};
    `}
    ${props => props.mt && css`
        margin-top: ${props.mt};
    `}
    p {
        font-family: ${({theme}) => theme.fonts.colfax};
        font-size: 14px;
        color: rgba(0,0,0,.5);
    }
    a {
        display: inline;
        font-family: ${({theme}) => theme.fonts.colfax};
        font-size: 14px;
        color: rgba(0,0,0,.5);
        text-decoration: none;
        span {
            position: relative;
            &:after {
                content: '';
                position: absolute;
                display: block;
                height: .5px;
                background-color: rgba(0,0,0, .2);
                width: 100%;
                bottom: -1px;
                left: 0;
            }
        }
        &:hover {
            color: rgba(0,0,0,.5);
            text-decoration: none;
        }
    }
    @media ${({theme}) => theme.media.medium} {
        grid-template-columns: 1fr;
    }
`
import styled, { css } from "styled-components";

interface pProps {
    mb?: string;
    mt?: string;
}

export const PostP = styled.p<pProps>`
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

export const PostContainer = styled.section`
    margin: 0 auto;
    width: 720px;
    @media ${({theme}) => theme.media.medium} {
        width: 100%;
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

export const PostHR = styled.hr`
    width: 100%;
    height: .5px;
    border: none;
    background-color: rgba(0,0,0,.2);
`

interface FootnotesProps {
    mb?: string
    mt?:string
}

export const Footnotes = styled.div<FootnotesProps>`
    padding: 15px;
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-column-gap: 30px;
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
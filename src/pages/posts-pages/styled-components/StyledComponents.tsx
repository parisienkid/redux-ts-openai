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

export const PostContainer = styled.div`
    margin: 0 auto;
    width: 720px;
    p {

    }
`

interface PostInfoProps {
    top: string
    left: string
}

export const PostInfo = styled.div<PostInfoProps>`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
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
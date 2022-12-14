import styled from "styled-components"
import { Link } from "react-router-dom"

// styled components

export const InfoBlock = styled.div`
    border-top: 1px solid rgba(0,0,0,.1);
    padding: 75px 0 100px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    h3 {
        margin-bottom: 30px;
        margin-top: 0;
    }
    p {
        margin-bottom: 30px;
        max-width: 600px;
    }
    a {
        margin-left: -18px;
        @media ${({theme}) => theme.media.medium} {
            margin-left: -16px;
        }
    }
    @media ${({theme}) => theme.media.extraLarge} {
        grid-column-gap: 30px;
    }
    @media ${({theme}) => theme.media.large} {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-row-gap: 50px;
        padding: 70px 0;
    }
    @media ${({theme}) => theme.media.medium} {
        padding: 60px 0;
    }
    @media ${({theme}) => theme.media.medium} {
        padding: 40px 0;
    }
`

export const InfoDescr = styled.div`
    width: 100%;
`

export const InfoMain = styled.div`
    width: 100%;
`


export const InfoLinksWrapper = styled(Link)`
    margin-bottom: 40px;
    display: block;
    margin-left: 0 !important;
`

//
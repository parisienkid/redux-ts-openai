import {FC} from 'react';
import Spinner from '../../components/spinner/Spinner';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    background-color: rgba(${({theme}) => theme.colors.bg});
    position: absolute;
    top: -${({theme}) => theme.sizes.default.header.height}px;
    /* min-height: calc(100vh - ${({theme}) => theme.sizes.default.header.height}px); */
    height: calc(100vh + ${({theme}) => theme.sizes.default.header.height}px);
    width: 100vw;
    left: 0;
    z-index: 700;
    @media ${({theme}) => theme.media.extraLarge} {
        top: -${({theme}) => theme.sizes.xl.header.height}px;
        height: calc(100vh + ${({theme}) => theme.sizes.xl.header.height}px);
    }
    @media ${({theme}) => theme.media.large} {
        top: -${({theme}) => theme.sizes.l.header.height}px;
        height: calc(100vh + ${({theme}) => theme.sizes.l.header.height}px);
    }
    @media ${({theme}) => theme.media.medium} {
        top: -${({theme}) => theme.sizes.m.header.height}px;
        height: calc(100vh + ${({theme}) => theme.sizes.m.header.height}px);
    }
    @media ${({theme}) => theme.media.small} {
        top: -${({theme}) => theme.sizes.s.header.height}px;
        height: calc(100vh + ${({theme}) => theme.sizes.s.header.height}px);
    }
`

const FallbackPage: FC = () => {
    return (
        <Wrapper>
            <Spinner/>
        </Wrapper>
    );
};

export default FallbackPage;
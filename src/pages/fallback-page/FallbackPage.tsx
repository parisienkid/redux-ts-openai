import React, {FC} from 'react';
import Spinner from '../../components/spinner/Spinner';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    background-color: #fff;
    min-height: calc(100vh - ${({theme}) => theme.sizes.default.header.height}px);
    @media ${({theme}) => theme.media.extraLarge} {
        min-height: calc(100% - ${({theme}) => theme.sizes.xl.header});
    }
    @media ${({theme}) => theme.media.large} {
        min-height: calc(100% - ${({theme}) => theme.sizes.l.header});
    }
    @media ${({theme}) => theme.media.medium} {
        min-height: calc(100% - ${({theme}) => theme.sizes.m.header});
    }
    @media ${({theme}) => theme.media.small} {
        min-height: calc(100% - ${({theme}) => theme.sizes.s.header});
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
import React, { FC } from 'react';
import styled from 'styled-components';


const ContainerWrapper = styled.div`
    width: ${({theme}) => theme.sizes.default.container.width}%;
    max-width: 1470px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    @media ${({theme}) => theme.media.extraLarge} {
        width: ${({theme}) => theme.sizes.xl.container.width}%;
    }
    @media ${({theme}) => theme.media.large} {
        width: ${({theme}) => theme.sizes.l.container.width}%;
    }
    @media ${({theme}) => theme.media.medium} {
        width: ${({theme}) => theme.sizes.m.container.width}%;
    }
    @media ${({theme}) => theme.media.small} {
        width: ${({theme}) => theme.sizes.s.container.width}%;
    }
`

interface IContainer {
    children: React.ReactNode
}

const Container: FC<IContainer> = ({children}) => {
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    );
};

export default Container;
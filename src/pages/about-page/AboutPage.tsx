import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { aboutTheme } from '../../core/theme/theme';
import { MaintTitle } from '../research-page/ResearchPage';

import Container from '../../components/container/Container';

const AboutPageWrapper = styled.div`
    padding: 70px 0;
    h2 {
        max-width: 700px;
    }
    @media ${({theme}) => theme.media.large} {
        padding: 45px 0;
    }
`

const ColoredBacground = styled.div`
    width: 100%;
    padding: 50px;
    background-color: rgba(${({theme}) => theme.colors.constants.ivory});
`

const AboutPage: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTheme(aboutTheme));
    }, []);

    return (
       <>
            <AboutPageWrapper>
                <Container>
                    <MaintTitle>OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity.</MaintTitle>
                </Container>
            </AboutPageWrapper>
            <ColoredBacground>

            </ColoredBacground>
       </>
    );
};

export default AboutPage;
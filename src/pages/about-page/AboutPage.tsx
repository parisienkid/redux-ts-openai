import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { aboutTheme } from '../../core/theme/theme';
import styled from 'styled-components';

import Container from '../../components/container/Container';

const AboutPageWrapper = styled.div`

`

const AboutPage: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTheme(aboutTheme));
    }, []);

    return (
        <AboutPageWrapper>
            <Container>

            </Container>
        </AboutPageWrapper>
    );
};

export default AboutPage;
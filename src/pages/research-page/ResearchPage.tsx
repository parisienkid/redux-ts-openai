import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { researchTheme } from '../../core/theme/theme';
import styled from 'styled-components';

import Container from '../../components/container/Container';

const ResearchPageWrapper = styled.div`

`

const ResearchPage: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTheme(researchTheme));
    }, []);

    return (
        <ResearchPageWrapper>
            <Container>

            </Container>
        </ResearchPageWrapper>
    );
};

export default ResearchPage;
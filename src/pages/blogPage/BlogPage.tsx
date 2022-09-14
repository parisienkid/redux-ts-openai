import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { blogTheme } from '../../core/theme/theme';
import styled from 'styled-components';

import Container from '../../components/container/Container';

const BlogPageWrapper = styled.div`

`

const BlogPage: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTheme(blogTheme));
    }, []);

    return (
        <BlogPageWrapper>
            <Container>

            </Container>
        </BlogPageWrapper>
    );
};

export default BlogPage;
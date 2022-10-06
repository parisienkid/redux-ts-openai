import { FC, useEffect, Dispatch } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { errorTheme } from '../../core/theme/theme';
import Container from '../../components/container/Container';
import { RouterBtn } from '../../components/buttons/Btns';

// styled components

const ErrorWrapper = styled.div`
    padding: 40px 0;
    a {
        color: rgba(${({theme}) => theme.colors.footerColor});
        margin-left: -16px;
    }
`

const ErrorTitle = styled.h1`
    font-family: ${({theme}) => theme.fonts.colfax};
    font-weight: bold;
    color: rgba(${({theme}) => theme.colors.footerColor});
`

const ErrorSubtitle = styled.h2`
    font-family: ${({theme}) => theme.fonts.colfax};
    font-weight: 400;
    color: rgba(${({theme}) => theme.colors.footerColor});
    margin-bottom: 20px;
`

//

const Page404: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTheme(errorTheme));
    }, []);

    return (
        <ErrorWrapper>
            <Container>
                <ErrorTitle>Error 404</ErrorTitle>
                <ErrorSubtitle>Page not found</ErrorSubtitle>
                <RouterBtn background='inherit' after='↓' color={''} to="/redux-ts-openai/" $nobg>GO HOME</RouterBtn>
            </Container>
        </ErrorWrapper>
    );
};

export default Page404;
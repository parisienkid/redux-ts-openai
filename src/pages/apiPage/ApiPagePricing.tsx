import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { apiTheme } from '../../core/theme/theme';
import styled, { css } from 'styled-components';
import Btn from '../../components/buttons/Btn';

import { useLocation } from 'react-router-dom';

import ApiHeader from './components/ApiHeader';
import Container from '../../components/container/Container';

import { ApiPageWrapper, StyledLink } from './ApiPageMain';




const ApiPagePricing = () => {

    const dispatch = useDispatch();

    const location = useLocation();
    console.log(location.pathname);

    useEffect(() => {
        dispatch(changeTheme(apiTheme));
    }, []);

    return (
        <ApiPageWrapper>
            <ApiHeader/>
        </ApiPageWrapper>
    );
};

export default ApiPagePricing;
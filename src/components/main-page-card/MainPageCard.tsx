import React, { FC } from 'react';
import Btn from '../buttons/Btn';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

interface ICardWrapper {
    background: string;
}

const CardWrapper = styled.div<ICardWrapper>`
    width: 100%;
    height: 100%;
    background: url(${props => props.background}) no-repeat center top;
    background-position: center top;
    background-size: cover;
    position: relative;
`

const CardShadow = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 80%);
    position: absolute;
    height: 40%;
    width: 100%;
    left: 0;
    bottom: 0;
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;
    padding: 30px 40px;
    max-width: 500px;
    justify-content: flex-end;
    height: 100%;
    padding-bottom: 60px;
    position: relative;
    @media ${({theme}) => theme.media.medium} {
        padding-bottom: 30px;
    }
    @media ${({theme}) => theme.media.small} {
        padding: 0 20px 20px 20px;
    }
`

const CardDate = styled.div`
    font-family: "ColfaxAI",sans-serif;
    font-weight: bold;
    font-size: 13.5px;
    @media ${({theme}) => theme.media.medium} {
        font-size: 12px;
    }
`

const CardTitle = styled(Link)`
    display: block;
    color: #fff;
    font-size: 40px;
    line-height: 44px;
    margin-top: 15px;
    margin-bottom: 30px;
    &:hover {
        color: #fff;
    }
    @media ${({theme}) => theme.media.large} {
        font-size: 35px;
        line-height: 38px;
    }
    @media ${({theme}) => theme.media.small} {
        font-size: 29px;
        line-height: 33px;
        margin-bottom: 15px;
    }
`

interface IMainPage {
    img: string,
    date: string,
    title: string,
    to: string,
}

const MainPageCard: FC<IMainPage> = ({img, date, title, to}) => {
    return (
        <CardWrapper background={img}>
            <CardShadow/>
            <CardContent>
                <CardDate>{date}</CardDate>
                <CardTitle to={to}>{title}</CardTitle>
                <Btn after='▻' background='255, 255, 255' to={to} color='0, 0, 0'>Read now</Btn>
            </CardContent>
        </CardWrapper>
    );
};



export default MainPageCard;
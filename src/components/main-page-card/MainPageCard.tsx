import React, { FC } from 'react';
import Btn from '../btn/Btn';
import styled from 'styled-components';

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
`

const CardDate = styled.div`
    font-family: "ColfaxAI",sans-serif;
    font-weight: bold;
    font-size: 16px;
`

const CardTitle = styled.div`
    font-size: 40px;
    line-height: 44px;
    margin-top: 40px;
    margin-bottom: 40px;
`



interface IMainPage {
    img: string,
    date: string,
    title: string
}

const MainPageCard: FC<IMainPage> = ({img, date, title}) => {
    return (
        <CardWrapper background={img}>
            <CardShadow/>
            <CardContent>
                <CardDate>{date}</CardDate>
                <CardTitle>{title}</CardTitle>
                <Btn background='255, 255, 255' color='0, 0, 0'>Read now</Btn>
            </CardContent>
        </CardWrapper>
    );
};



export default MainPageCard;
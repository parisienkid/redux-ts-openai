import React, { FC } from 'react';
import styled from 'styled-components';

const BtnWrapper = styled.a<IBtn>`
    background: rgb(${props => props.background});
    color: rgb(${props => props.color});
    font-family: "ColfaxAI",sans-serif;
    font-weight: bold;
    padding: 10px 33px 10px 18px;
    border-radius: 3em;
    border: none;
    text-transform: uppercase;
    font-size: 13px;
    line-height: 13px;
    position: relative;
    text-align: center;
    &:after {
        content: '▻';
        font-family: 'IconsAI';
        position: absolute;
        top: 50%;
        right: 14px;
        transform: translateY(calc(-50% - 1px));
        font-size: 15px;
        line-height: 15px;
    }
    &:hover {
        background: rgba(${props => props.background}, 0.90);
        color: rgb(${props => props.color});
        text-decoration: none;
    }
`

interface IBtn {
    background: string;
    color: string;
    children?: React.ReactElement | string
}

const Btn: FC<IBtn> = ({background, color, children}) => {
    return (
        <BtnWrapper href="#" background={background} color={color}>
            {children}
        </BtnWrapper>
    );
};

export default Btn;
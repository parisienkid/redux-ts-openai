import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BtnWrapper = styled(Link)<IBtn>`
    background: rgb(${props => props.background});
    color: rgb(${props => props.color});
    font-family: "ColfaxAI",sans-serif;
    font-weight: bold;
    padding: 10px ${props => props.after !== '' ? '33px' : '18px'} 10px 18px;
    border-radius: 3em;
    border: none;
    text-transform: uppercase;
    font-size: 13.5px;
    line-height: 13px;
    position: relative;
    text-align: center;
    &:after {
        content: '${props => props.after}';
        font-family: 'IconsAI';
        position: absolute;
        top: 50%;
        right: 14px;
        transform: translateY(calc(-50% - 0.5px));
        font-size: 15px;
        line-height: 15px;
        @media ${({theme}) => theme.media.medium} {
            font-size: 12px;
            transform: translateY(calc(-50% - 0.5px));
        }
    }
    &:hover {
        color: rgb(${props => props.color});
        /* background: rgba(${props => props.background}, .9); */
    }
    @media ${({theme}) => theme.media.medium} {
        font-size: 12px;
    }
`

interface IBtn {
    background: string
    color: string
    children?: React.ReactElement | string
    after: string
    to: string
    className?: string
}

const Btn: FC<IBtn> = ({background, color, children, after, to, className}) => {
    return (
        <BtnWrapper className={className} after={after} to={to} background={background} color={color}>
            {children}
        </BtnWrapper>
    );
};

export default Btn;
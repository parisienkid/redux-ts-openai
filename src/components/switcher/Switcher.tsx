import { useState, ReactElement } from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SwitcherWrapper = styled.div`
    display: flex;
    height: 32px;
    width: 300px;
    margin: 40px auto 10px auto;
    background-color: rgba(0,0,0,.05);
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    z-index: 10;
    justify-content: flex-start;
    &[data-ison="true"] {
    justify-content: flex-end;
    }
    cursor: pointer;
`

const SwitchBg = styled.div`
    height: 32px;
    background-color: rgba(0,0,0,.05);
    width: 150px;
    border-radius: 5px;
    z-index: 15;
`

const ContentLeft = styled.div`
    text-align: center;
    width: 50%;
    position: absolute;
    left: 0;
    top:0;
    text-transform: uppercase;
    font-family: ${({theme}) => theme.fonts.colfax};
    font-size: 13px;
    height: 100%;
    font-weight: bold;
    line-height: 32px;
`
const ContentRight = styled.div`
    text-align: center;
    width: 50%;
    position: absolute;
    left: 50%;
    top:0;
    text-transform: uppercase;
    font-size: 13px;
    height: 100%;
    font-weight: bold;
    line-height: 32px;
    font-family: ${({theme}) => theme.fonts.colfax};
`

const SwitchContent = styled.div`
    margin-top: 40px;
    margin-bottom: 60px;
`

interface SwitcherProps {
    left: string,
    right: string,
    leftContent: ReactElement,
    rightContent: ReactElement,
}

const Switcher: FC<SwitcherProps> = ({left,right,leftContent,rightContent}) => {

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
      };

    return (
       <>
            <SwitcherWrapper data-ison={isOn} onClick={toggleSwitch}>
                <motion.div
                    layout
                    transition={spring}
                >
                    <SwitchBg/>
                </motion.div>
                <ContentLeft>{left}</ContentLeft>
                <ContentRight>{right}</ContentRight>    
            </SwitcherWrapper>
            <SwitchContent>
                {!isOn ? leftContent : rightContent}
            </SwitchContent>
       </>
    );
};

export default Switcher;
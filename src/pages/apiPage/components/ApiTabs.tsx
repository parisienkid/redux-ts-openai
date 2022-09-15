import React, { FC } from 'react';
import styled from 'styled-components';

const TabsHeaderWrapper = styled.div`
    padding: 10px 0;
    border-top: 1px solid rgba(0,0,0, .1);
    border-bottom: 1px solid rgba(0,0,0, .1);
    overflow: hidden;
    width: 100%;
`

const TabsHeaderContent = styled.div`
    display: flex;
    transition: .25s transform;
`

const TabsItem = styled.button`
    color: rgba(0,0,0, .5);
    text-transform: uppercase;
    font-family: ColfaxAI,Helvetica,sans-serif;
    font-weight: 400;
    padding: 0 10px;
    font-size: 13.5px;
    white-space: nowrap;
    border: none;
    background-color: inherit;
    &:hover {
        color: rgba(0,0,0, .6);
    }
    &:focus {
        outline: none;
    }
`

interface IApiTabs {
    tabs: string[]
}

const ApiTabs: FC<IApiTabs> = ({tabs}) => {

    let translate: number = 0;

    const translateTabs = (parent: HTMLElement, translate: number) => {
        parent.style.transform = `translateX(-${translate}px)`;
    }

    const onClickTab = (e: React.MouseEvent<HTMLButtonElement>) => {

        const current = e.currentTarget;
        const parent = current.parentElement;
        const offsetLeftsPlusWidth = current.offsetLeft + current.offsetWidth;

        if (parent) {

            const offsetLeft = current.offsetLeft - translate;
            const offsetRight = parent.offsetWidth - offsetLeftsPlusWidth + translate;
            let difference: number = 0;

            if (offsetRight < 50) {
                if (current.getAttribute('data-last-tab')){
                    difference = 0 - offsetRight;
                    translate += difference;
                    translateTabs(parent, translate)
                } else {
                    difference = 50 - offsetRight;
                    translate += difference;
                    translateTabs(parent, translate)
                }
            }
            if (offsetLeft < 50) {
                if (current.getAttribute('data-first-tab')){
                    translate = 0;
                    translateTabs(parent, translate)
                } else {
                    const difference = 50 - offsetLeft;
                    translate -= difference;
                    translateTabs(parent, translate)
                }
            }
        }
    }


    return (
        <TabsHeaderWrapper>
            <TabsHeaderContent>
                {tabs.map((tab, i) => {
                    if (i === 0) {
                        return <TabsItem key={i} data-first-tab onClick={onClickTab} >{tab}</TabsItem>
                    } else if (i === tabs.length - 1) {
                        return <TabsItem key={i} data-last-tab onClick={onClickTab} >{tab}</TabsItem>
                    } else {
                        return <TabsItem key={i} onClick={onClickTab} >{tab}</TabsItem>
                    }
                })}
            </TabsHeaderContent>
        </TabsHeaderWrapper>
    );
};

export default ApiTabs;
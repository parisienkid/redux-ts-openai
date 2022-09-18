import React, { FC } from 'react';
import styled from 'styled-components';
import { changeActiveTabCodex, changeActiveTabGPT } from '../../../core/reducers/apiPageSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../core/store';

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
    position: relative;
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
    &.active {
        color: #000
    }
`

interface IApiTabs {
    tabs: string[],
    actionName: string
}

const ApiTabs: FC<IApiTabs> = ({tabs, actionName}) => {

    const dispatch = useDispatch<AppDispatch>();

    let translate: number = 0;

    const translateTabs = (parent: HTMLElement, translate: number) => {
        parent.style.transform = `translateX(-${translate}px)`;
    }

    const changeActiveTab = (actionname: string, payload: string | null) => {
        switch (actionname) {
            case ('codex'):
                return dispatch(changeActiveTabCodex(payload))
            case ('gpt'):
                return dispatch(changeActiveTabGPT(payload))
            default:
                throw new Error ('Unexpected process state')
        }
    }



    const onClickTab = (e: React.MouseEvent<HTMLButtonElement>) => {

        const current = e.currentTarget;
        const parent = current.parentElement;
        const offsetLeftsPlusWidth = current.offsetLeft + current.offsetWidth;
        
        console.log(parent)
        console.log(current)
        console.log(current.offsetParent)

        if (parent) {

            parent.querySelectorAll(TabsItem).forEach(tab => {
                tab.classList.remove('active');
            });

            current.classList.add('active');

            changeActiveTab(actionName, current.getAttribute('data-tab-id'))


            const offsetLeft = current.offsetLeft - translate;
            const offsetRight = parent.offsetWidth - offsetLeftsPlusWidth + translate;

            console.log(offsetRight + 'right')
            console.log(offsetLeft + 'left')


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
                        return <TabsItem data-tab-id={i+1} className={i === 0 ? 'active' : ''} key={i} data-first-tab onClick={onClickTab} >{tab}</TabsItem>
                    } else if (i === tabs.length - 1) {
                        return <TabsItem data-tab-id={i+1} className={i === 0 ? 'active' : ''} key={i} data-last-tab onClick={onClickTab} >{tab}</TabsItem>
                    } else {
                        return <TabsItem data-tab-id={i+1} className={i === 0 ? 'active' : ''} key={i} onClick={onClickTab} >{tab}</TabsItem>
                    }
                })}
            </TabsHeaderContent>
        </TabsHeaderWrapper>
    );
};

export default ApiTabs;
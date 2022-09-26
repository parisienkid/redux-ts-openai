import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import { changeTheme } from '../../core/reducers/themeSlice';
import { apiTheme } from '../../core/theme/theme';
import styled, { css } from 'styled-components';
import {Btn} from '../../components/buttons/Btn';
import { FetchApiPricing } from '../../core/reducers/apiPageSlice';
import { AppDispatch } from '../../core/store';
import setContent from '../../core/utils/setSomeContent';
import { IPricing } from '../../core/reducers/apiPageSlice';

import ApiHeader from './components/ApiHeader';
import Container from '../../components/container/Container';

import { ApiPageWrapper, StyledLink, DocsBtns, BenefitsIcon, Benefits, BenefitsItem, ApiIntro } from './ApiPageMain';



const ModelsWrapper = styled.div`
    padding: 100px 0 0 0;
    p {
        margin-bottom: 20px;
        max-width: 600px;
        line-height: 1.4;
    }
    a {
        margin-left: -18px;
    }
`

const ModelsCards = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 15px;
    margin-bottom: 50px;
    @media ${({theme}) => theme.media.extraLarge} {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        grid-row-gap: 15px;
    }
    @media ${({theme}) => theme.media.small} {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto;
        grid-row-gap: 15px;
    }
`

const BenefitsPricing = styled(Benefits)`
    margin-top: 100px;
    margin-bottom: 100px;
`



const InfoBlock = styled.div`
    border-top: 1px solid rgba(0,0,0,.1);
    display: flex;
    padding: 75px 0 100px 0;
    h3 {
        margin-bottom: 30px;
    }
    p {
        margin-bottom: 30px;
    }
    a {
        margin-left: -18px;
    }
`

interface IPricingTableProps {
    col?: string
    row?: string
}

const PricingTable = styled.div<IPricingTableProps>`
    width: 100%;
    display: grid;
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(5, 35px);
`

const TableTitle = styled.div`
    font-family: ColfaxAI,Helvetica,sans-serif;
    font-weight: bold;
    font-size: 12px;
    padding: 3px 7px;
`

const TableDescr = styled.div`
    width: 100%;
    margin-right: 200px;
`

interface ICellPricerops {
    silver?: boolean
    bold?: boolean
}

const Cell = styled.div<ICellPricerops>`
    font-family: ColfaxAI,Helvetica,sans-serif;
    padding: 0 7px;
    font-size: 15px;
    line-height: 35px;
    position: relative;
    ${props => props.silver && css`
        background-color: rgb(${({theme}) => theme.colors.constants.silver});
    `}
    ${props => props.bold && css`
        font-weight: bold;
        font-size: 13px;
    `}
`

const CellPrice = styled.span`

`




const ApiPagePricing: FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const {statusData, pricing} = useSelector((state: RootState) => state.api);


    useEffect(() => {
        dispatch(changeTheme(apiTheme));
        dispatch(FetchApiPricing());
    }, []);




    return (
        <ApiPageWrapper>
            <ApiHeader/>
            <ApiIntro>
                <Container>
                    <h1>Pricing</h1>
                    <h4>Simple and flexible. Only pay for what you use.</h4>
                    <DocsBtns margin="30px auto 0 auto">
                        <Btn to="/" background="0,0,0" color="255,255,255" after="">get started</Btn>
                        <StyledLink $nobg to="/" background='inherit' color='0,0,0' after=''>contact sales</StyledLink>
                    </DocsBtns>
                </Container>
            </ApiIntro>
            <ModelsWrapper>
                <Container>
                    <h3>Base models</h3>
                    <ModelsCards>
                        <ModelCard>     
                            {setContent(statusData, <ApiCard data={pricing[0]}/>)}
                        </ModelCard>
                        <ModelCard>
                            {setContent(statusData, <ApiCard data={pricing[1]}/>)}
                        </ModelCard>
                        <ModelCard>
                            {setContent(statusData, <ApiCard data={pricing[2]}/>)}
                        </ModelCard>
                        <ModelCard>
                            {setContent(statusData, <ApiCard data={pricing[3]}/>)}
                        </ModelCard>
                    </ModelsCards>
                    <p>Multiple models, each with different capabilities and price points. <strong>Ada</strong> is the fastest model, while <strong>Davinci</strong> is the most powerful.</p>
                    <p>Prices are per 1,000 tokens. You can think of tokens as pieces of words, where 1,000 tokens is about 750 words. This paragraph is 35 tokens.</p>
                    <Btn background='inherit' after='↓' color="0,0,0,.6" to="#" $nobg>LEARN MORE</Btn>
                </Container>
            </ModelsWrapper>
            <Container>
                <BenefitsPricing>
                    <BenefitsItem>
                        <BenefitsIcon>flag</BenefitsIcon>
                        <h3>Start for free</h3>
                        <p>Our advanced inference infrastructure provides extremely short response times.</p>
                    </BenefitsItem>
                    <BenefitsItem>
                        <BenefitsIcon>barup</BenefitsIcon>
                        <h3>Pay as you go</h3>
                        <p>We can handle high volume requests that scale with your needs.</p>
                    </BenefitsItem>
                    <BenefitsItem>
                        <BenefitsIcon>check</BenefitsIcon>
                        <h3>Choose your model</h3>
                        <p>Easy to use and flexible enough to make machine learning teams more productive.</p>
                    </BenefitsItem>
                </BenefitsPricing>
                <InfoBlock>
                    <TableDescr>
                        <h3>Fine-tuned models</h3>
                        <p>Create your own custom models by fine-tuning our base models with your training data. Once you fine-tune a model, you’ll be billed only for the tokens you use in requests to that model.</p>
                        <Btn background='inherit' after='↓' color="0,0,0,.6" to="#" $nobg>LEARN MORE</Btn>
                    </TableDescr>
                    <PricingTable>
                        <Cell bold>MODEL</Cell>
                        <Cell bold>TRAINING</Cell>
                        <Cell bold>USAGE</Cell>
                        <Cell silver>Ada</Cell>
                        <Cell silver>{setContent(statusData, <CellPrice>${pricing.length > 1 ? pricing[0].price.toFixed(4) : '0'}</CellPrice>)}</Cell>
                        <Cell silver></Cell>
                        <Cell>Babbage</Cell>
                        <Cell>{setContent(statusData, <CellPrice>${pricing.length > 1 ? pricing[1].price.toFixed(4) : '0'}</CellPrice>)}</Cell>
                        <Cell></Cell>
                        <Cell silver>Curie</Cell>
                        <Cell silver>{setContent(statusData, <CellPrice>${pricing.length > 1 ? pricing[2].price.toFixed(4) : '0'}</CellPrice>)}</Cell>
                        <Cell silver></Cell>
                        <Cell>Davinci</Cell>
                        <Cell>{setContent(statusData, <CellPrice>${pricing.length > 1 ? pricing[3].price.toFixed(4) : '0'}</CellPrice>)}</Cell>
                        <Cell></Cell>
                    </PricingTable>
                </InfoBlock>
                <InfoBlock>
                    <TableDescr>
                        <h3>Embedding models</h3>
                        <p>Build advanced search, clustering, topic modeling, and classification functionality with our embeddings offering.</p>
                    </TableDescr>
                    <PricingTable>
                        <Cell bold>MODEL</Cell>
                        <Cell bold>USAGE</Cell>
                        <Cell silver>Ada</Cell>
                        <Cell silver></Cell>
                        <Cell>Babbage</Cell>
                        <Cell></Cell>
                        <Cell silver>Curie</Cell>
                        <Cell silver></Cell>
                        <Cell>Davinci</Cell>
                        <Cell></Cell>
                    </PricingTable>
                </InfoBlock>
                <InfoBlock>
                    <TableDescr>
                        <h3>Usage quotas</h3>
                        <p>Build advanced search, clustering, topic modeling, and classification functionality with our embeddings offering.</p>
                    </TableDescr>
                </InfoBlock>
                
            </Container>
        </ApiPageWrapper>
    );
};



const ModelCard = styled.div`
    padding: 20px;
    background-color: rgba(${({theme}) => theme.colors.constants.silver});
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 215px;
`

const ModelCardTitle = styled.div`
    font-size: 1rem;
    span {
        font-size: .7rem;
        display: inline-block;
        margin-left: 10px;
        color: rgba(0,0,0,.6);
    }
`

const ModelCardPrice = styled.div`
    font-size: 1.2rem;
    position: relative;
    &:after {
        display: block;
        content: '/1K tokens';
        font-size: .7rem;
        color: rgba(0,0,0,.6);
        position: absolute;
        right: -75px;
        top: 50%;
        transform: translateY(-50%);
    }
`

interface IApiCard {
    data: IPricing,
}

const ApiCard: FC<IApiCard> = ({data}) => {
    return (
        <>
            <ModelCardTitle>{data.name}{data.addition !== '' ? (<span>{data.addition}</span>) : ''}</ModelCardTitle>
            <ModelCardPrice>${data.price}</ModelCardPrice>
        </>
    );
};


export default ApiPagePricing;
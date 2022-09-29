import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import { changeTheme } from '../../core/reducers/themeSlice';
import { apiTheme } from '../../core/theme/theme';
import styled, { css } from 'styled-components';
import {RouterBtn, DefaultBtn, StyledRouterBtn, StyledDefaultBtn} from '../../components/buttons/Btn';

import { FetchApiPricing } from '../../core/reducers/apiPageSlice';
import { AppDispatch } from '../../core/store';
import setContent from '../../core/utils/setSomeContent';
import { IPricing } from '../../core/reducers/apiPageSlice';

import ApiHeader from './components/api-header/ApiHeader';
import Container from '../../components/container/Container';

import { ApiPageWrapper, DocsBtns, BenefitsIcon, Benefits, BenefitsItem, ApiIntro, SilverComponent, SilverComponentContent } from './ApiPageMain';



const ModelsWrapper = styled.div`
    padding: 100px 0 0 0;
    p {
        margin-bottom: 20px;
        max-width: 600px;
        line-height: 1.4;
    }
    a {
        margin-left: -18px;
        @media ${({theme}) => theme.media.medium} {
            margin-left: -16px;
        }
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
    @media ${({theme}) => theme.media.large} {
        margin: 60px 0;
    }
    @media ${({theme}) => theme.media.medium} {
        margin: 40px 0;
    }
`



const InfoBlock = styled.div`
    border-top: 1px solid rgba(0,0,0,.1);
    padding: 75px 0 100px 0;
    display: grid;
    grid-template-columns: 4fr 6fr;
    grid-column-gap: 150px;
    h3 {
        margin-bottom: 30px;
    }
    p {
        margin-bottom: 30px;
    }
    a {
        margin-left: -18px;
        @media ${({theme}) => theme.media.medium} {
            margin-left: -16px;
        }
    }
    @media ${({theme}) => theme.media.extraLarge} {
        grid-column-gap: 100px;
    }
    @media ${({theme}) => theme.media.large} {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-row-gap: 50px;
        padding: 70px 0;
    }
    @media ${({theme}) => theme.media.medium} {
        padding: 60px 0;
    }
    @media ${({theme}) => theme.media.medium} {
        padding: 40px 0;
    }
`

const InfoLink = styled.a`
    margin-left: 0 !important;
    color: rgb(0,0,0);
    display: inline-block;
    position: relative; 
    &:hover {
        color: rgba(0,0,0,.6);
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        height: 1px;
        left: 0;
        bottom: 4px;
        width: 100%;
        background-color: rgba(0,0,0,.5);
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
    ${props => props.col && css`
        grid-template-columns: ${props.col};
    `}
    ${props => props.row && css`
        grid-template-rows: ${props.row};
    `}
    @media ${({theme}) => theme.media.small} {
        grid-template-rows: repeat(5, 50px);
    }
`


const InfoDescr = styled.div`
    width: 100%;
`

const InfoMain = styled.div`
    width: 100%;
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
    display: inline-block;
    position: relative;
    &:after {
        display: block;
        content: '/  1K tokens';
        font-size: 12px;
        color: rgba(0,0,0,.6);
        position: absolute;
        right: -65px;
        top: 50%;
        transform: translateY(-50%);
        @media ${({theme}) => theme.media.small} {
            left: 0;
            transform: none;
        }
    }
`

const Questions = styled.div`
    background-color: rgba(${({theme}) => theme.colors.constants.silver});
    padding: 80px 0;
`

const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    h2 {
        width: 100%;
        text-align: left;
    }
    @media ${({theme}) => theme.media.medium} {
        max-width: 90%;
    }
`

const QuestionsTable = styled.div`
    margin: 40px auto 0 auto;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,.1);
`

const Question = styled.div`
    border-top: 1px solid rgba(0,0,0,.1);
    position: relative;
    font-family: ColfaxAI,Helvetica,sans-serif;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    span {
        display: block;
        font-weight: bold;
        display: inline-block;
        font-size: .8rem;
        width: 100%;
        position: relative;
        line-height: 60px;
        cursor: pointer;
        @media ${({theme}) => theme.media.medium} {
            font-size: .7rem;
        }
        @media ${({theme}) => theme.media.small} {
            font-size: .65rem;
        }
    }
`

const QuestionTab = styled.div`
    width: 100%;
    display: none;
    margin-top: 20px;
    p {
        margin-bottom: 30px;
        font-size: .8rem;
        @media ${({theme}) => theme.media.medium} {
            font-size: .7rem;
        }
        @media ${({theme}) => theme.media.small} {
            font-size: .65rem;
        }
    }
    &.active {
        display: block;
    }
`

const QuestionIcon = styled.div`
    font-family: IconsAI;
    position: absolute;
    top: 0;
    right: 0;
    &.active {
        transform: rotate(180deg);
    }
`




const ApiPagePricing: FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const {statusData, pricing} = useSelector((state: RootState) => state.api);


    useEffect(() => {
        dispatch(changeTheme(apiTheme));
        dispatch(FetchApiPricing());
    }, []);
    

    const onQuestionClick = (e: React.MouseEvent<HTMLElement>) => {
        const el = e.target as HTMLSpanElement;
        if (el.getAttribute('data-question') && el) {
            const tab = el.nextElementSibling as HTMLElement;
            const arrow = el.querySelector(QuestionIcon);
            if (tab && arrow) {
                tab.classList.toggle('active');
                arrow.classList.toggle('active');
            }
        }
    }




    return (
        <ApiPageWrapper>
            <ApiHeader/>
            <ApiIntro>
                <Container>
                    <h1>Pricing</h1>
                    <h4>Simple and flexible. Only pay for what you use.</h4>
                    <DocsBtns margin="30px auto 0 auto">
                        <RouterBtn to="/" background="0,0,0" color="255,255,255" after="">get started</RouterBtn>
                        <StyledRouterBtn $nobg to="/" background='inherit' color='0,0,0' after=''>contact sales</StyledRouterBtn>
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
                    <RouterBtn background='inherit' after='↓' color="0,0,0,.6" to="#" $nobg>LEARN MORE</RouterBtn>
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
                <InfoBlock id="training rates">
                    <InfoDescr>
                        <h3>Fine-tuned models</h3>
                        <p>Create your own custom models by <InfoLink href="#">fine-tuning</InfoLink> our base models with your training data. Once you fine-tune a model, you’ll be billed only for the tokens you use in requests to that model.</p>
                        <RouterBtn background='inherit' after='↓' color="0,0,0,.6" to="#" $nobg>LEARN MORE</RouterBtn>
                    </InfoDescr>
                    <InfoMain>
                        <PricingTable>
                            <Cell bold>MODEL</Cell>
                            <Cell bold>TRAINING</Cell>
                            <Cell bold>USAGE</Cell>
                            <Cell silver>Ada</Cell>
                            <Cell silver>{setContent(statusData, <CellPrice>${pricing.length > 1 ? pricing[0].price.toFixed(4) : '0'}</CellPrice>)}</Cell>
                            <Cell silver>{setContent(statusData, <CellPrice>${pricing.length > 1 ? (+pricing[0].price * 4).toFixed(4) : '0'}</CellPrice>)}</Cell>
                            <Cell>Babbage</Cell>
                            <Cell>{setContent(statusData, <CellPrice>${pricing.length > 1 ? pricing[1].price.toFixed(4) : '0'}</CellPrice>)}</Cell>
                            <Cell>{setContent(statusData, <CellPrice>${pricing.length > 1 ? (+pricing[1].price * 4).toFixed(4) : '0'}</CellPrice>)}</Cell>
                            <Cell silver>Curie</Cell>
                            <Cell silver>{setContent(statusData, <CellPrice>${pricing.length > 1 ? pricing[2].price.toFixed(4) : '0'}</CellPrice>)}</Cell>
                            <Cell silver>{setContent(statusData, <CellPrice>${pricing.length > 1 ? (+pricing[2].price * 4).toFixed(4) : '0'}</CellPrice>)}</Cell>
                            <Cell>Davinci</Cell>
                            <Cell>{setContent(statusData, <CellPrice>${pricing.length > 1 ? pricing[3].price.toFixed(4) : '0'}</CellPrice>)}</Cell>
                            <Cell>{setContent(statusData, <CellPrice>${pricing.length > 1 ? (+pricing[3].price * 4).toFixed(4) : '0'}</CellPrice>)}</Cell>
                        </PricingTable>
                    </InfoMain>
                </InfoBlock>
                <InfoBlock>
                    <InfoDescr>
                        <h3>Embedding models</h3>
                        <p>Build advanced search, clustering, topic modeling, and classification functionality with our <InfoLink href="#">embeddings</InfoLink> offering.</p>
                    </InfoDescr>
                    <InfoMain>
                        <PricingTable col="1fr 2fr">
                            <Cell bold>MODEL</Cell>
                            <Cell bold>USAGE</Cell>
                            <Cell silver>Ada</Cell>
                            <Cell silver>{setContent(statusData, <CellPrice>${pricing.length > 1 ? pricing[0].price.toFixed(4) : '0'}</CellPrice>)}</Cell>
                            <Cell>Babbage</Cell>
                            <Cell>{setContent(statusData, <CellPrice>${pricing.length > 1 ? pricing[1].price.toFixed(4) : '0'}</CellPrice>)}</Cell>
                            <Cell silver>Curie</Cell>
                            <Cell silver>{setContent(statusData, <CellPrice>${pricing.length > 1 ? pricing[2].price.toFixed(4) : '0'}</CellPrice>)}</Cell>
                            <Cell>Davinci</Cell>
                            <Cell>{setContent(statusData, <CellPrice>${pricing.length > 1 ? pricing[3].price.toFixed(4) : '0'}</CellPrice>)}</Cell>
                        </PricingTable>
                    </InfoMain>
                </InfoBlock>
                <InfoBlock>
                    <InfoDescr>
                        <h3>Usage quotas</h3>
                    </InfoDescr>
                    <InfoMain>
                        <p>Because this technology is new, we also want to make sure that rollouts are done responsibly. When you sign up, you’ll be granted an initial spend limit, or quota, and we’ll increase that limit over time as you build a track record with your application.</p>
                        <p>If you need more tokens, you can always request a quota increase. When you’re ready to go live, you’ll submit a <InfoLink href="#">Pre-launch Review Request</InfoLink> which will also cover any additional quota increase requests.</p>
                    </InfoMain>
                </InfoBlock>
            </Container>
            <Questions>
                <Container>
                    <QuestionWrapper>
                        <h2>Frequently Asked Questions</h2>
                        <QuestionsTable onClick={onQuestionClick}>
                            <Question >
                                <span data-question>What’s a token?
                                <QuestionIcon>navigatedown</QuestionIcon>
                                </span>
                                <QuestionTab>
                                    <p>You can think of tokens as pieces of words used for natural language processing. For English text, 1 token is approximately 4 characters or 0.75 words. As a point of reference, the collected works of Shakespeare are about 900,000 words or 1.2M tokens.</p>
                                    <p>To learn more about how tokens work and estimate your usage…</p>
                                </QuestionTab>
                            </Question>
                            <Question >
                                <span data-question >Which model should I use?
                                <QuestionIcon>navigatedown</QuestionIcon>
                                </span>
                                <QuestionTab>
                                    <p>While Davinci is generally the most capable model, the other models can perform certain tasks extremely well and, in some cases, significantly faster. They also have cost advantages. For example, Curie can perform many of the same tasks as Davinci, but faster and for 1/10th the cost. We encourage developers to experiment to find the model that’s most efficient for your application. Visit our documentation for a more detailed <InfoLink target="_blank" href="https://beta.openai.com/docs/models"> model comparison</InfoLink>.</p>
                                </QuestionTab>
                            </Question>
                            <Question >
                                <span data-question >How will I know how many tokens I’ve used each month?
                                <QuestionIcon>navigatedown</QuestionIcon>
                                </span>
                                <QuestionTab>
                                    <p>Log in to your account to view your <InfoLink target="_blank" href="https://beta.openai.com/account/usage">usage tracking dashboard</InfoLink>. This page will show you how many tokens you’ve used during the current and past billing cycles.</p>
                                </QuestionTab>
                            </Question>
                            <Question >
                                <span data-question >How can I manage my spending?
                                <QuestionIcon>navigatedown</QuestionIcon>
                                </span>
                                <QuestionTab>
                                    <p>You can configure a usage <strong>hard limit</strong> in your billing settings, after which we’ll stop serving your requests. You may also configure a <strong>soft limit</strong> to receive an email alert once you pass a certain usage threshold.</p>
                                </QuestionTab>
                            </Question>
                            <Question >
                                <span data-question >Does Playground usage count against my quota?
                                <QuestionIcon>navigatedown</QuestionIcon>
                                </span>
                                <QuestionTab>
                                    <p>Yes, we treat Playground usage the same as regular API usage.</p>
                                </QuestionTab>
                            </Question>
                            <Question >
                                <span data-question >How is pricing calculated for Completions?
                                <QuestionIcon>navigatedown</QuestionIcon>
                                </span>
                                <QuestionTab>
                                    <p><InfoLink target="_blank" href="https://beta.openai.com/docs/api-reference/completions">Completions</InfoLink> requests are billed based on the number of tokens sent in your prompt plus the number of tokens in the completion(s) returned by the API.</p>
                                </QuestionTab>
                            </Question>
                            <Question >
                                <span data-question >How is pricing calculated for Fine-tuning?
                                <QuestionIcon>navigatedown</QuestionIcon>
                                </span>
                                <QuestionTab>
                                    <p>There are two components to fine-tuning pricing: training and usage.</p>
                                    <p>When training a fine-tuned model, the total tokens used will be billed according to our <InfoLink href="#training rates">training rates</InfoLink> (50% of our base model rates). Note that the number of training tokens depends on the number of tokens in your training dataset <strong>and</strong> your chosen number of <InfoLink>training epochs</InfoLink>. The default number of epochs is 4.</p>
                                </QuestionTab>
                            </Question>
                            <Question >
                                <span data-question >How is pricing calculated for Classifications?
                                <QuestionIcon>navigatedown</QuestionIcon>
                                </span>
                                <QuestionTab>
                                    <p><InfoLink target="_blank" href="https://beta.openai.com/docs/api-reference/classifications">Classifications</InfoLink> requests are billed based on the number of tokens in the inputs you provide. Internally this endpoint makes calls to the search and completions endpoints, so its costs are a function of the costs of those endpoints.</p>
                                    <p>The actual cost per token is based upon which <InfoLink target="_blank" href="https://beta.openai.com/docs/models/overview">models</InfoLink> you select to perform both the <InfoLink  target="_blank" href="https://beta.openai.com/docs/api-reference/searches">search</InfoLink> and the <InfoLink  target="_blank" href="https://beta.openai.com/docs/api-reference/completions">completion</InfoLink>, which are controlled by the search_model and model parameters respectively.</p>
                                    <p>You may provide a file containing the examples to search over, or you can explicitly specify examples in your request. Providing a file makes search faster and more cost effective when the number of examples you’d like to search over is greater than max_examples. In this scenario, costs are largely based on the number of examples reranked (controlled by max_examples) and the total length of those examples. If you pass examples in your request instead, costs are based on the total length of all those examples.</p>
                                    <p>The length of the query passed into the model as well as the final classification label that is generated will also factor into costs.</p>
                                    <p>You can use the return_prompt debugging flag to understand the length of the final combined prompt that will be sent to the completions endpoint to generate the classification label.</p>
                                </QuestionTab>
                            </Question>
                            <Question >
                                <span data-question >How is pricing calculated for Search?
                                <QuestionIcon>navigatedown</QuestionIcon>
                                </span>
                                <QuestionTab>
                                    <p><InfoLink target="_blank" href="https://beta.openai.com/docs/api-reference/searches">Search</InfoLink> requests are billed based on the total number of tokens in the documents you provide, plus the tokens in the query and the tokens needed to instruct the model on how to perform the operation. The API also uses a reference document to generate a response, adding 1 to the total document count. These tokens are billed at the per-engine rates outlined at the top of this page.</p>
                                    <p>You may provide a file containing the documents to search over, or you can explicitly specify documents in your request. Providing a file makes search faster and more cost effective when the number of documents you’d like to search over is greater than max_rerank. In this scenario, costs are largely based on the number of documents reranked (controlled by max_rerank) and the total length of those documents. If you pass documents in your request instead, costs are based on the total length of all those documents.</p>
                                    <p>Below you’ll find the formula for calculating overall token consumption. The 14 represents the additional tokens the API uses per document to accomplish the Semantic Search task, and the added 1 is a reference document:</p>
                                </QuestionTab>
                            </Question>
                            <Question >
                                <span data-question >How is pricing calculated for Answers?
                                <QuestionIcon>navigatedown</QuestionIcon>
                                </span>
                                <QuestionTab>
                                    <p><InfoLink target="_blank" href="https://beta.openai.com/docs/api-reference/answers">Answers</InfoLink> requests are billed based on the number of tokens in the inputs you provide and the answer that the model generates. Internally, this endpoint makes calls to the Search and <InfoLink target="_blank" href="https://openai.com/api/pricing/#faq-azure-availability">Completions</InfoLink> APIs, so its costs are a function of the costs of those endpoints.</p>
                                    <p>The actual cost per token is based upon which models you select to perform both the search and the completion, which are controlled by the search_model and model parameters respectively.</p>
                                    <p>You may provide a file containing the documents to search over, or you can explicitly specify documents in your request. Providing a file makes search faster and more cost effective when the number of documents you’d like to search over is greater than max_rerank. In this scenario, costs are largely based on the number of documents reranked (controlled by max_rerank) and the total length of those documents. If you pass documents in your request instead, costs are based on the total length of all those documents.</p>
                                </QuestionTab>
                            </Question>
                            <Question >
                                <span data-question >Is there an SLA on the various models?
                                <QuestionIcon>navigatedown</QuestionIcon>
                                </span>
                                <QuestionTab>
                                    <p>We will be publishing an SLA soon. In the meantime you can visit our Status page to monitor service availability and view historical uptime. If your company or application has specific requirements, please contact our sales team.</p>
                                </QuestionTab>
                            </Question>
                            <Question >
                                <span data-question >Is the API available on Microsoft Azure?
                                <QuestionIcon>navigatedown</QuestionIcon>
                                </span>
                                <QuestionTab>
                                    <p>Yes. Azure customers can access the OpenAI API on Azure with the compliance, regional support, and enterprise-grade security that Azure offers. <InfoLink target="_blank" href="https://azure.microsoft.com/en-us/products/cognitive-services/openai-service/#overview">Learn more</InfoLink> or contact <InfoLink href="sales@openai.com">sales@openai.com</InfoLink>.</p>
                                </QuestionTab>
                            </Question>
                        </QuestionsTable>
                    </QuestionWrapper>
                </Container>
            </Questions>
            <SilverComponent inherit padding='120px 0'>
                <Container>
                    <SilverComponentContent center direction='column'>
                        <h2>Get started with OpenAI’s powerful language and code generation models.</h2>
                        <RouterBtn margin="40px auto 0 auto" to="/" background='0,0,0' color='255,255,255' after=''>get started</RouterBtn>
                    </SilverComponentContent>
                </Container>
            </SilverComponent>
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
    @media ${({theme}) => theme.media.small} {
        height: 170px;
    }
`

const ModelCardTitle = styled.div`
    font-size: 1rem;
    span {
        font-size: .7rem;
        display: inline-block;
        margin-left: 10px;
        color: rgba(0,0,0,.6);
        @media ${({theme}) => theme.media.medium} {
            font-size: .5rem;
        }
    }
    @media ${({theme}) => theme.media.small} {
        font-size: .7rem;
    }
`

const ModelCardPrice = styled.div`
    font-size: 1.2rem;
    position: relative;
    font-family: ColfaxAI,Helvetica,sans-serif;
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
    @media ${({theme}) => theme.media.medium} {
        font-size: .8rem;
    }
`

interface IApiCard {
    data: IPricing,
}

const ApiCard: FC<IApiCard> = ({data}) => {
    return (
        <>
            <ModelCardTitle>{data.name}{data.addition !== '' ? (<span>{data.addition}</span>) : ''}</ModelCardTitle>
            <ModelCardPrice>${data.price.toFixed(4)}</ModelCardPrice>
        </>
    );
};


export default ApiPagePricing;
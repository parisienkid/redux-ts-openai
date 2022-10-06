import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import { blogTheme } from '../../core/theme/theme';
import styled from 'styled-components';

import Container from '../../components/container/Container';

import { InfoBlock, InfoDescr, InfoMain, InfoLinksWrapper } from '../../components/info-block/InfoBlock';
import { MDescr, MTime } from '../research-page/ResearchPage';



const BlogPageWrapper = styled.div`
    padding: 50px 0;
    h1 {
    }
`

const BlogDate = styled(MTime)`
    margin-top: 0;
`

const BlogBlock = styled(InfoBlock)`
    &:first-of-type {
        border-top: none;
    }
`

const BlogPage: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTheme(blogTheme));
    }, []);

    return (
        <BlogPageWrapper>
            <Container>
                <h1>Index</h1>
                <BlogBlock>
                    <InfoDescr>
                        <BlogDate>2022</BlogDate>
                    </InfoDescr>
                    <InfoMain>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr>DALL·E Now Available Without Waitlist</MDescr>
                                <MTime>September 28, 2022 — Announcements</MTime>
                            </InfoLinksWrapper>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr>Introducing Whisper</MDescr>
                                <MTime>September 21, 2022 — Research</MTime>
                            </InfoLinksWrapper>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr>DALL·E: Introducing Outpainting</MDescr>
                                <MTime>August 31, 2022 — Announcements</MTime>
                            </InfoLinksWrapper>
                    </InfoMain>
                </BlogBlock>
                <BlogBlock>
                    <InfoDescr>
                        <BlogDate>2022</BlogDate>
                    </InfoDescr>
                    <InfoMain>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr>DALL·E Now Available Without Waitlist</MDescr>
                                <MTime>September 28, 2022 — Announcements</MTime>
                            </InfoLinksWrapper>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr>Introducing Whisper</MDescr>
                                <MTime>September 21, 2022 — Research</MTime>
                            </InfoLinksWrapper>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr>DALL·E: Introducing Outpainting</MDescr>
                                <MTime>August 31, 2022 — Announcements</MTime>
                            </InfoLinksWrapper>
                    </InfoMain>
                </BlogBlock>
                <BlogBlock>
                    <InfoDescr>
                        <BlogDate>2022</BlogDate>
                    </InfoDescr>
                    <InfoMain>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr>DALL·E Now Available Without Waitlist</MDescr>
                                <MTime>September 28, 2022 — Announcements</MTime>
                            </InfoLinksWrapper>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr>Introducing Whisper</MDescr>
                                <MTime>September 21, 2022 — Research</MTime>
                            </InfoLinksWrapper>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr>DALL·E: Introducing Outpainting</MDescr>
                                <MTime>August 31, 2022 — Announcements</MTime>
                            </InfoLinksWrapper>
                    </InfoMain>
                </BlogBlock>
                <BlogBlock>
                    <InfoDescr>
                        <BlogDate>2021</BlogDate>
                    </InfoDescr>
                    <InfoMain>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr></MDescr>
                                <MTime></MTime>
                            </InfoLinksWrapper>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr></MDescr>
                                <MTime></MTime>
                            </InfoLinksWrapper>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr></MDescr>
                                <MTime></MTime>
                            </InfoLinksWrapper>
                    </InfoMain>
                </BlogBlock>
                <BlogBlock>
                    <InfoDescr>
                        <BlogDate>2020</BlogDate>
                    </InfoDescr>
                    <InfoMain>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr></MDescr>
                                <MTime></MTime>
                            </InfoLinksWrapper>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr></MDescr>
                                <MTime></MTime>
                            </InfoLinksWrapper>
                            <InfoLinksWrapper to='/redux-ts-openai/'>
                                <MDescr></MDescr>
                                <MTime></MTime>
                            </InfoLinksWrapper>
                    </InfoMain>
                </BlogBlock>
            </Container>
        </BlogPageWrapper>
    );
};

export default BlogPage;
import { FC, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../core/reducers/themeSlice';
import styled from 'styled-components';
import { useInView } from "framer-motion";

import { blogTheme } from '../../core/theme/theme';
import Container from '../../components/container/Container';
import { PostContainer, PostDate, PostTimeToRead, PostP, PostHR, Footnotes, DefaultIntroBlock, ScrollMenu, ScrollContainer } from './styled-components/StyledComponents';

const PostInfo = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    @media ${({theme}) => theme.media.medium} {
        display: none;
    }
`


const ResearchPost: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTheme(blogTheme));
    }, []);

    const firstInfoBlock = useRef(null),
          secondInfoBlock = useRef(null),
          thirdInfoBlock = useRef(null),
          fourthInfoBlock = useRef(null),
          fifthInfoBlock = useRef(null);
    
    const firstInView = useInView(firstInfoBlock),
          secondInView = useInView(secondInfoBlock),
          thirdInView = useInView(thirdInfoBlock),
          fourthInView = useInView(fourthInfoBlock),
          fifthInView = useInView(fifthInfoBlock);


    return (
        <>
            <Container>
                <DefaultIntroBlock>
                    <div>
                        <h1>Our approach to alignment research</h1>
                        <p>Our approach to aligning AGI is empirical and iterative. We are improving our AI systems’ ability to learn from human feedback and to assist humans at evaluating AI. Our goal is to build a sufficiently aligned AI system that can help us solve all other alignment problems.</p>
                        <PostInfo>
                            <PostDate>August 24, 2022</PostDate>
                            <PostTimeToRead>7 minute read</PostTimeToRead>
                        </PostInfo>
                    </div>
                    <div>
                        <img src="https://openai.com/content/images/size/w1400/2022/08/alignment-blog-header-thin.jpg" alt="Post img" />
                    </div>
                </DefaultIntroBlock>
            </Container>
            <Container>
            <ScrollContainer>
                <ScrollMenu>
                    <ul>
                        Contents
                        <li>
                            <a 
                                style={{
                                    color: firstInView ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,.5)'
                                }}
                                href="#one"
                            >
                                Introduction
                            </a>
                        </li>
                        <li>
                            <a 
                                style={{
                                    color: secondInView ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,.5)'
                                }}
                                href="#two"
                            >
                                Training AI systems using human feedback
                            </a>
                        </li>
                        <li>
                            <a 
                                style={{
                                    color: thirdInView ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,.5)'
                                }}
                                href="#three"
                            >
                                Training models to assist human evaluation
                            </a>
                        </li>
                        <li>
                            <a 
                                style={{
                                    color: fourthInView ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,.5)'
                                }}
                                href="#four"
                            >
                                Training AI systems to do alignment research
                            </a>
                        </li>
                        <li>
                            <a 
                                style={{
                                    color: fifthInView ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,.5)'
                                }}
                                href="#five"
                            >
                                Limitations
                            </a>
                        </li>
                    </ul>
                </ScrollMenu>
            </ScrollContainer>
            <PostContainer>
                    <div ref={firstInfoBlock}>
                        <PostP  id='one' mb='30px'>Our alignment research aims to make artificial general intelligence (AGI) aligned with human values and follow human intent. We take an iterative, empirical approach: by attempting to align highly capable AI systems, we can learn what works and what doesn’t, thus refining our ability to make AI systems safer and more aligned. Using scientific experiments, we study how alignment techniques scale and where they will break.</PostP>
                        <PostP mb='30px'>We tackle alignment problems both in our most capable AI systems as well as alignment problems that we expect to encounter on our path to AGI. Our main goal is to push current alignment ideas as far as possible, and to understand and document precisely how they can succeed or why they will fail. We believe that even without fundamentally new alignment ideas, we can likely build sufficiently aligned AI systems to substantially advance alignment research itself.</PostP>
                        <PostP mb='30px'>Unaligned AGI could pose substantial risks to humanity and solving the AGI alignment problem could be so difficult that it will require all of humanity to work together. Therefore we are committed to openly sharing our alignment research when it’s safe to do so: We want to be transparent about how well our alignment techniques actually work in practice and we want every AGI developer to use the world’s best alignment techniques.</PostP>
                        <PostP mb='30px'>At a high-level, our approach to alignment research focuses on engineering a scalable training signal for very smart AI systems that is aligned with human intent. It has three main pillars:</PostP>
                        <PostP mb='7px'>1. Training AI systems using human feedback</PostP>
                        <PostP mb='7px'>2. Training AI systems to assist human evaluation</PostP>
                        <PostP mb='30px'>3. Training AI systems to do alignment research</PostP>
                        <PostP mb='60px'>Aligning AI systems with human values also poses a range of other significant sociotechnical challenges, such as deciding to whom these systems should be aligned. Solving these problems is important to achieving our mission, but we do not discuss them in this post.</PostP>
                    </div>
                    <PostHR mb='60px'/>
                    <div ref={secondInfoBlock}>
                        <h3  id='two'>Training AI systems using human feedback</h3>
                        <PostP mt='15px' mb='30px'>RL from human feedback is our main technique for aligning our deployed language models today. We train a class of models called InstructGPT derived from pretrained language models such as GPT-3. These models are trained to follow human intent: both explicit intent given by an instruction as well as implicit intent such as truthfulness, fairness, and safety.</PostP>
                        {/* <PostP mb='30px'>Our results show that there is a lot of low-hanging fruit on alignment-focused fine-tuning right now: InstructGPT is preferred by humans over a 100x larger pretrained model, while its fine-tuning costs <2% of GPT-3’s pretraining compute and about 20,000 hours of human feedback. We hope that our work inspires others in the industry to increase their investment in alignment of large language models and that it raises the bar on users’ expectations about the safety of deployed models.</PostP> */}
                        <PostP mb='30px'>Our natural language API is a very useful environment for our alignment research: It provides us with a rich feedback loop about how well our alignment techniques actually work in the real world, grounded in a very diverse set of tasks that our customers are willing to pay money for. On average, our customers already prefer to use InstructGPT over our pretrained models.</PostP>
                        <PostP mb='30px'>Yet today’s versions of InstructGPT are quite far from fully aligned: they sometimes fail to follow simple instructions, aren’t always truthful, don’t reliably refuse harmful tasks, and sometimes give biased or toxic responses. Some customers find InstructGPT’s responses significantly less creative than the pretrained models’, something we hadn’t realized from running InstructGPT on publicly available benchmarks. We are also working on developing a more detailed scientific understanding of RL from human feedback and how to improve the quality of human feedback.</PostP>
                        <PostP mb='60px'>Aligning our API is much easier than aligning AGI since most tasks on our API aren’t very hard for humans to supervise and our deployed language models aren’t smarter than humans. We don’t expect RL from human feedback to be sufficient to align AGI, but it is a core building block for the scalable alignment proposals that we’re most excited about, and so it’s valuable to perfect this methodology.</PostP>
                    </div>
                    <PostHR mb='60px'/>
                    <div ref={thirdInfoBlock}>
                        <h3 id='three'>Training models to assist human evaluation</h3>
                        <PostP mt='15px' mb='30px'>RL from human feedback has a fundamental limitation: it assumes that humans can accurately evaluate the tasks our AI systems are doing. Today humans are pretty good at this, but as models become more capable, they will be able to do tasks that are much harder for humans to evaluate (e.g. finding all the flaws in a large codebase or a scientific paper). Our models might learn to tell our human evaluators what they want to hear instead of telling them the truth. In order to scale alignment, we want to use techniques like recursive reward modeling (RRM), debate, and iterated amplification.</PostP>
                        <PostP mb='30px'>Currently our main direction is based on RRM: we train models that can assist humans at evaluating our models on tasks that are too difficult for humans to evaluate directly. For example:</PostP>
                        <ul>
                            <li>
                                <PostP mb='15px'>We trained a model to summarize books. Evaluating book summaries takes a long time for humans if they are unfamiliar with the book, but our model can assist human evaluation by writing chapter summaries.</PostP>
                            </li>
                            <li>
                                <PostP mb='15px'>We trained a model to assist humans at evaluating the factual accuracy by browsing the web and providing quotes and links. On simple questions, this model’s outputs are already preferred to responses written by humans.</PostP>
                            </li>
                            <li>
                                <PostP mb='15px'>We trained a model to write critical comments on its own outputs: On a query-based summarization task, assistance with critical comments increases the flaws humans find in model outputs by 50% on average. This holds even if we ask humans to write plausible looking but incorrect summaries.</PostP>
                            </li>
                            <li>
                                <PostP mb='30px'>We are creating a set of coding tasks selected to be very difficult to evaluate reliably for unassisted humans. We hope to release this data set soon.</PostP>
                            </li>
                        </ul>
                        <PostP mb='60px'>Our alignment techniques need to work even if our AI systems are proposing very creative solutions (like AlphaGo’s move 37), thus we are especially interested in training models to assist humans to distinguish correct from misleading or deceptive solutions. We believe the best way to learn as much as possible about how to make AI-assisted evaluation work in practice is to build AI assistants.</PostP>
                    </div>
                    <PostHR mb='60px'/>
                    <div ref={fourthInfoBlock}>
                        <h3 id='four'>Training AI systems to do alignment research</h3>
                        <PostP mt='15px' mb='30px'>There is currently no known indefinitely scalable solution to the alignment problem. As AI progress continues, we expect to encounter a number of new alignment problems that we don’t observe yet in current systems. Some of these problems we anticipate now and some of them will be entirely new.</PostP>
                        <PostP mb='30px'>We believe that finding an indefinitely scalable solution is likely very difficult. Instead, we aim for a more pragmatic approach: building and aligning a system that can make faster and better alignment research progress than humans can.</PostP>
                        <PostP mb='30px'>As we make progress on this, our AI systems can take over more and more of our alignment work and ultimately conceive, implement, study, and develop better alignment techniques than we have now. They will work together with humans to ensure that their own successors are more aligned with humans.</PostP>
                        <PostP mb='30px'>We believe that evaluating alignment research is substantially easier than producing it, especially when provided with evaluation assistance. Therefore human researchers will focus more and more of their effort on reviewing alignment research done by AI systems instead of generating this research by themselves. Our goal is to train models to be so aligned that we can off-load almost all of the cognitive labor required for alignment research.</PostP>
                        <PostP mb='30px'>Importantly, we only need “narrower” AI systems that have human-level capabilities in the relevant domains to do as well as humans on alignment research. We expect these AI systems are easier to align than general-purpose systems or systems much smarter than humans.</PostP>
                        <PostP mb='30px'>Language models are particularly well-suited for automating alignment research because they come “preloaded” with a lot of knowledge and information about human values from reading the internet. Out of the box, they aren’t independent agents and thus don’t pursue their own goals in the world. To do alignment research they don’t need unrestricted access to the internet. Yet a lot of alignment research tasks can be phrased as natural language or coding tasks.</PostP>
                        <PostP mb='60px'>Future versions of WebGPT, InstructGPT, and Codex can provide a foundation as alignment research assistants, but they aren’t sufficiently capable yet. While we don’t know when our models will be capable enough to meaningfully contribute to alignment research, we think it’s important to get started ahead of time. Once we train a model that could be useful, we plan to make it accessible to the external alignment research community.</PostP>
                    </div>
                    <PostHR mb='60px'/>
                    <div ref={fifthInfoBlock}>
                        <h3  id='five'>Limitations</h3>
                        <PostP mt='15px' mb='30px'>We’re very excited about this approach towards aligning AGI, but we expect that it needs to be adapted and improved as we learn more about how AI technology develops. Our approach also has a number of important limitations:</PostP>
                        <PostP mb='30px'></PostP>
                        <ul>
                            <li>
                                <PostP mb='15px'>The path laid out here underemphasizes the importance of robustness and interpretability research, two areas OpenAI is currently underinvested in. If this fits your profile, please apply for our research scientist positions!</PostP>
                            </li>
                            <li>
                                <PostP mb='15px'>Using AI assistance for evaluation has the potential to scale up or amplify even subtle inconsistencies, biases, or vulnerabilities present in the AI assistant.</PostP>
                            </li>
                            <li>
                                <PostP mb='15px'>Aligning AGI likely involves solving very different problems than aligning today’s AI systems. We expect the transition to be somewhat continuous, but if there are major discontinuities or paradigm shifts, then most lessons learned from aligning models like InstructGPT might not be directly useful.</PostP>
                            </li>
                            <li>
                                <PostP mb='15px'>The hardest parts of the alignment problem might not be related to engineering a scalable and aligned training signal for our AI systems. Even if this is true, such a training signal will be necessary.</PostP>
                            </li>
                            <li>
                                <PostP mb='30px'>It might not be fundamentally easier to align models that can meaningfully accelerate alignment research than it is to align AGI. In other words, the least capable models that can help with alignment research might already be too dangerous if not properly aligned. If this is true, we won’t get much help from our own systems for solving alignment problems.</PostP>
                            </li>
                        </ul>
                    </div>
                    <PostP mb='100px'><i>We’re looking to hire more talented people for this line of research! If this interests you, we’re hiring Research Engineers and Research Scientists!</i></PostP>
                </PostContainer>
            </Container>
            <Container>
                <PostHR/>
                <Footnotes>
                    <p>Authors</p>
                    <p><span>Jan Leike, John Schulman, Jeffrey Wu</span></p>
                </Footnotes>
                <PostHR/>
                <Footnotes>
                    <p>Acknowledgments</p>
                    <p>For valuable feedback and discussions we’d like to thank William Saunders, Elizabeth Barnes, Richard Ngo, Steven Bills, Ryan Lowe, Steven Adler, Gretchen Krueger, Dan Mossing, Leo Gao, Sam Altman, and Ilya Sutskever</p>
                </Footnotes>
                <PostHR/>
                <Footnotes mb='150px'>
                    <p>Filed Under</p>
                    <a href='#'><span>Research</span></a>
                </Footnotes>
            </Container>
        </>
    );
};

export default ResearchPost;
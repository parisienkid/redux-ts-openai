import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ExampleWrapper, Tabs, Descr, Carousel} from '../../DallePage';
import SliderSyncing from '../../../../components/slider-syncing/SliderSyncing';

import originalPool from '../../../../assets/images/dalle/pool/original.jpg';
import originalGallery from '../../../../assets/images/dalle/gallery/original.jpeg';
import originalRoom from '../../../../assets/images/dalle/room/original.jpeg';

import image1 from '../../../../assets/images/dalle/pool/var1/0.jpg'
import image2 from '../../../../assets/images/dalle/pool/var1/1.jpg';
import image3 from '../../../../assets/images/dalle/pool/var1/1.jpg';
import image4 from '../../../../assets/images/dalle/pool/var1/1.jpg';
import image5 from '../../../../assets/images/dalle/pool/var1/1.jpg';

const OriginalWrapper = styled.div`
    position: relative;
    display: block !important; 
`

const OriginalImage = styled.img`
    width: 100%;
`

interface VariantProps {
    left: string,
    top: string,
}

const Variant = styled.span<VariantProps>`
    display: block;
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: #fff;
    color: #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: ${props => props.top};
    left: ${props => props.left};
    font-family: ${({theme}) => theme.fonts.colfax};
    transform: translateX(-50%) translateY(-50%);
    cursor: pointer;
    &.active {
        background-color: #000;
        color: #fff;
    }
`


const SecondExample: FC = () => {

    const [variant, setVariant] = useState(1);
    const [sliderContent, setSliderContent] = useState([image1,image2,image3,image4,image5])

    useEffect(() => {
        changeSlider();
    }, [variant]);

    const originalMiniContent = [originalPool, originalGallery, originalRoom];

    const changeVariant = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        const target = e.target as HTMLSpanElement;
        const variant = target.getAttribute('data-variant');
        const wrappersOfSpans = document.querySelectorAll(OriginalWrapper) as NodeListOf<HTMLElement>;
        if (target && variant && wrappersOfSpans) {
            setVariant(+variant);
            wrappersOfSpans.forEach(item => {
                item.querySelectorAll('span').forEach(span => {
                    span.classList.remove('active');
                });
            });
            target.classList.add('active')
        }
    }

    const originalContent = [
        <OriginalWrapper onClick={changeVariant} key={1}>
            <OriginalImage src={originalPool}/>
            <Variant className='active' data-variant='1' left='10%' top='85%'>1</Variant>        
            <Variant data-variant='2'left='50%' top='72%'>2</Variant>
            <Variant data-variant='3' left='70%' top='50%'>3</Variant>
        </OriginalWrapper>, 
        <OriginalWrapper onClick={changeVariant} key={2}>
            <OriginalImage src={originalGallery}/>
            <Variant data-variant='4' left='30%' top='43%'>1</Variant>        
            <Variant data-variant='5' left='70%' top='46%'>2</Variant>
            <Variant data-variant='6' left='43%' top='83%'>3</Variant>
        </OriginalWrapper>, 
        <OriginalWrapper onClick={changeVariant} key={3}>
            <OriginalImage src={originalRoom}/>
            <Variant data-variant='7' left='17%' top='60%'>1</Variant>        
            <Variant data-variant='8' left='40%' top='70%'>2</Variant>
        </OriginalWrapper>
    ];

    const changeSlider =  () => {
        switch(variant) {
            case (1): 
                import('./slider/Var1')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case (2):
                import('./slider/Var2')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case (3):
                import('./slider/Var3')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case (4):
                import('./slider/Var4')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case (5):
                import('./slider/Var5')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case (6):
                import('./slider/Var6')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case (7):
                import('./slider/Var7')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case (8):
                import('./slider/Var8')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
        }
    }

    return (
        <ExampleWrapper>
            <Tabs>
                <Descr>ORIGINAL IMAGE</Descr>
                <SliderSyncing content={originalContent} miniContent={originalMiniContent}></SliderSyncing>
            </Tabs>
            <Carousel>
                <Descr>DALL·E 2 EDITS</Descr>
                <SliderSyncing content={sliderContent} miniContent={sliderContent}></SliderSyncing>
            </Carousel>
        </ExampleWrapper>
    );
};

export default SecondExample;
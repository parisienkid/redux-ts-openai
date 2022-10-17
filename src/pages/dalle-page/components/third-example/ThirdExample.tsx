import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ExampleWrapper, Tabs, Descr, Carousel} from '../../DallePage';
import SliderSyncing from '../../../../components/slider-syncing/SliderSyncing';

import girl from '../../../../assets/images/dalle/variations/girl_with_pearl_earring.jpg';
import dalle from '../../../../assets/images/dalle/variations/robo_dalle.jpg';
import alpacas from '../../../../assets/images/dalle/variations/alpacas.jpg';
import seurat from '../../../../assets/images/dalle/variations/seurat.jpg';


import image1 from '../../../../assets/images/dalle/variations/girl/0.jpg';
import image2 from '../../../../assets/images/dalle/variations/girl/1.jpg';
import image3 from '../../../../assets/images/dalle/variations/girl/2.jpg';
import image4 from '../../../../assets/images/dalle/variations/girl/3.jpg';
import image5 from '../../../../assets/images/dalle/variations/girl/4.jpg';


const ThirdExample: FC = () => {

    const [sliderContent, setSliderContent] = useState([image1,image2,image3,image4,image5]);
    const [variant, setVariant] = useState(1);
    const originalContent = [girl, dalle, alpacas, seurat];

    useEffect(() => {
        changeSliderContent();
    }, [variant]);

    const changeVariant = (index: number | string) => {
        setVariant(+index + 1);
    }


    const changeSliderContent  = () => {
        switch(variant) {
            case (1): 
                setSliderContent([image1,image2,image3,image4,image5])
                break
            case (2):
                import('./slider/Robo')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case (3):
                import('./slider/Alpacas')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case (4):
                import('./slider/Reurat')
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
                <SliderSyncing changeVariant={changeVariant} className='original' content={originalContent} miniContent={originalContent}></SliderSyncing>
            </Tabs>
            <Carousel>
                <Descr>DALL·E 2 VARIATIONS</Descr>
                <SliderSyncing content={sliderContent} miniContent={sliderContent}></SliderSyncing>
            </Carousel>
        </ExampleWrapper>
    );
};

export default ThirdExample;
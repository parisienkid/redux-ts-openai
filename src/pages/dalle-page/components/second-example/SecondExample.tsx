import React, { FC, useState, useEffect } from 'react';
import { ExampleWrapper, Tabs, Descr, Carousel} from '../../DallePage';
import SliderSyncing from '../../../../components/slider-syncing/SliderSyncing';

import originalPool from '../../../../assets/images/dalle/pool/original.jpg';
import originalGallery from '../../../../assets/images/dalle/gallery/original.jpeg';
import originalRoom from '../../../../assets/images/dalle/room/original.jpeg';




const SecondExample: FC = () => {

    const [sliderContent, setSliderContent] = useState([]);

    useEffect(() => {

    }, []);

    const originalContent = [originalPool, originalGallery, originalRoom];
    // const originalContent = [originalPool, originalGallery, originalRoom];




    // const changeSlider = async () => {
    //     switch(variation.toString()) {
    //         case ('1,1,1'): 
    //             import('./slider/111')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('1,1,2'):
    //             import('./slider/112')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('1,1,3'):
    //             import('./slider/113')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('1,2,1'):
    //             import('./slider/121')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('1,2,2'):
    //             import('./slider/122')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('1,2,3'):
    //             import('./slider/123')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('1,3,1'):
    //             import('./slider/131')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('1,3,2'):
    //             import('./slider/132')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('1,3,3'):
    //             import('./slider/133')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break 
    //         case ('2,1,1'):
    //             import('./slider/211')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break 
    //         case ('2,1,2'):
    //             import('./slider/212')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break 
    //         case ('2,1,3'):
    //             import('./slider/213')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('2,2,1'):
    //             import('./slider/221')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('2,2,2'):
    //             import('./slider/222')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('2,2,3'):
    //             import('./slider/223')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('2,3,1'):
    //             import('./slider/231')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('2,3,2'):
    //             import('./slider/232')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('2,3,3'):
    //             import('./slider/233')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('3,1,1'):
    //             import('./slider/311')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('3,1,2'):
    //             import('./slider/312')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('3,1,3'):
    //             import('./slider/313')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('3,2,1'):
    //             import('./slider/321')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('3,2,2'):
    //             import('./slider/322')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('3,2,3'):
    //             import('./slider/323')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('3,3,1'):
    //             import('./slider/331')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('3,3,2'):
    //             import('./slider/332')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //         case ('3,3,3'):
    //             import('./slider/333')
    //                 .then(obj => {
    //                     setSliderContent(obj.default);
    //                 })
    //             break
    //     }
    // }



    return (
        <ExampleWrapper>
            <Tabs>
                <Descr>ORIGINAL IMAGE</Descr>
                <SliderSyncing content={originalContent}></SliderSyncing>
                <Descr>SELECT LOCATION TO ADD A CORGI</Descr>
            </Tabs>
            <Carousel>
                <Descr>DALL·E 2 EDITS</Descr>
                <SliderSyncing content={sliderContent}></SliderSyncing>
            </Carousel>
        </ExampleWrapper>
    );
};

export default SecondExample;
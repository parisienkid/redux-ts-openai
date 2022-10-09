import React, { FC, useState, useEffect } from 'react';
import { ExampleWrapper, Tabs, Descr, Carousel} from '../../DallePage';
import SliderSyncing from '../../../../components/slider-syncing/SliderSyncing';



import astro111var1 from '../../../../assets/images/dalle/astronaut/first/1/1.jpg';
import astro111var2 from '../../../../assets/images/dalle/astronaut/first/1/1.jpg';
import astro111var3 from '../../../../assets/images/dalle/astronaut/first/1/2.jpg';
import astro111var4 from '../../../../assets/images/dalle/astronaut/first/1/3.jpg';
import astro111var5 from '../../../../assets/images/dalle/astronaut/first/1/4.jpg';
import astro111var6 from '../../../../assets/images/dalle/astronaut/first/1/5.jpg';
import astro111var7 from '../../../../assets/images/dalle/astronaut/first/1/6.jpg';
import astro111var8 from '../../../../assets/images/dalle/astronaut/first/1/7.jpg';
import astro111var9 from '../../../../assets/images/dalle/astronaut/first/1/8.jpg';
import astro111var10 from '../../../../assets/images/dalle/astronaut/first/1/9.jpg';



const FirstExample: FC = () => {


    const [variation, setVariation]= useState([1,1,1]);
    const [sliderContent, setSliderContent] = useState([astro111var1, astro111var2, astro111var3, astro111var4, astro111var5, astro111var6, astro111var7, astro111var8, astro111var9, astro111var10]);

    useEffect(() => {
        changeSlider();
    }, [variation]);


    const changeSlider = async () => {
        switch(variation.toString()) {
            case ('1,1,1'): 
                import('./slider/111')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('1,1,2'):
                import('./slider/112')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('1,1,3'):
                import('./slider/113')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('1,2,1'):
                import('./slider/121')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('1,2,2'):
                import('./slider/122')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('1,2,3'):
                import('./slider/123')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('1,3,1'):
                import('./slider/131')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('1,3,2'):
                import('./slider/132')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('1,3,3'):
                import('./slider/133')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break 
            case ('2,1,1'):
                import('./slider/211')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break 
            case ('2,1,2'):
                import('./slider/212')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break 
            case ('2,1,3'):
                import('./slider/213')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('2,2,1'):
                import('./slider/221')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('2,2,2'):
                import('./slider/222')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('2,2,3'):
                import('./slider/223')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('2,3,1'):
                import('./slider/231')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('2,3,2'):
                import('./slider/232')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('2,3,3'):
                import('./slider/233')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('3,1,1'):
                import('./slider/311')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('3,1,2'):
                import('./slider/312')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('3,1,3'):
                import('./slider/313')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('3,2,1'):
                import('./slider/321')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('3,2,2'):
                import('./slider/322')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('3,2,3'):
                import('./slider/323')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('3,3,1'):
                import('./slider/331')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('3,3,2'):
                import('./slider/332')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
            case ('3,3,3'):
                import('./slider/333')
                    .then(obj => {
                        setSliderContent(obj.default);
                    })
                break
        }
    }

    const changeVariation = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, indexOfTab: number) => {
        const target = e.target as HTMLSpanElement;
        const attr = target.getAttribute('data-index');
        const parent = target!.parentNode as HTMLElement;
        const parentNextSibling = parent.nextElementSibling as HTMLElement
        if (target && parent.tagName === 'P') {
            const newVariation = [...variation];
            newVariation[indexOfTab] = +attr!;
            if (indexOfTab !== 2) {
                newVariation[indexOfTab + 1] = 1;
                newVariation[2] = 1;
            }
            setVariation(newVariation);
            parent?.querySelectorAll('span').forEach(item => {
                item.classList.remove('active');
            });
            target.classList.add('active');
            if (parentNextSibling) {
                parentNextSibling.querySelectorAll('span').forEach((item,i) => {
                    if (i === 0) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        }
    }

    const renderSecondP = (variation: number[]) => {
        switch(variation[0]) {
            case (1):
                return <p onClick={(e) => changeVariation(e,1)}><span data-index='1' className='active'>riding a horse</span><span data-index='2'>   lounging in a tropical resort in space</span><span data-index='3'>   playing basketball with cats in space</span></p>
            case (2):
                return <p onClick={(e) => changeVariation(e,1)}><span data-index='1' className='active'>mixing sparkling chemicals as mad scientists</span><span data-index='2'>   shopping for groceries</span><span data-index='3'>   working on new AI research</span></p>
            case (3):
                return <p onClick={(e) => changeVariation(e,1)}><span data-index='1' className='active'>that is a portal to another dimensionthats</span><span data-index='2'>   that looks like a monster</span><span data-index='3'>   as a planet in the universe</span></p>
        }
    }

    const renderThirdP = (variation: number[]) => {
        switch(variation[0]) {
            case (1):
                switch(variation[1]) {
                    case (1):
                        return <p onClick={(e) => changeVariation(e,2)} ><span data-index='1' className='active'>in a photorealistic style</span><span data-index='2'>   in the style of Andy Warhol</span><span data-index='3'>   as a pencil drawing</span></p>
                    case (2):
                        return <p onClick={(e) => changeVariation(e,2)} ><span data-index='1' className='active'>in a vaporwave style</span><span data-index='2'>   as pixel art</span><span data-index='3'>   in a photorealistic style</span></p>
                    case (3):
                        return <p onClick={(e) => changeVariation(e,2)} ><span data-index='1' className='active'>as a children's book illustration</span><span data-index='2'>   in a minimalist style</span><span data-index='3'>   in a watercolor style</span></p>                               
                    default:
                        return <p onClick={(e) => changeVariation(e,2)} ><span data-index='1' className='active'>in a photorealistic style</span><span data-index='2'>   in the style of Andy Warhol</span><span data-index='3'>   as a pencil drawing</span></p>
                }
            case (2): 
                switch(variation[1]) {
                    case (1):
                        return <p onClick={(e) => changeVariation(e,2)} ><span data-index='1' className='active'>as a 1990s Saturday morning cartoon</span><span data-index='2'>   as digital art</span><span data-index='3'>   in a steampunk style</span></p>
                    case (2):
                        return <p onClick={(e) => changeVariation(e,2)} ><span data-index='1' className='active'>in the style of ukiyo-e</span><span data-index='2'>   as a one-line drawing</span><span data-index='3'>   in ancient Egypt</span></p>
                    case (3):
                        return <p onClick={(e) => changeVariation(e,2)} ><span data-index='1' className='active'>as kids' crayon art</span><span data-index='2'>   on the moon in the 1980s</span><span data-index='3'>   underwater with 1990s technology</span></p>                               
                    default:
                        return <p onClick={(e) => changeVariation(e,2)} ><span data-index='1' className='active'>as a 1990s Saturday morning cartoon</span><span data-index='2'>   as digital art</span><span data-index='3'>   in a steampunk style</span></p>
                }
            case (3): 
                switch(variation[1]) {
                    case (1):
                        return <p onClick={(e) => changeVariation(e,2)} ><span data-index='1' className='active'>as digital art</span><span data-index='2'>   in the style of Basquiat</span><span data-index='3'>   drawn on a cave wall</span></p>
                    case (2):
                        return <p onClick={(e) => changeVariation(e,2)} ><span data-index='1' className='active'>knitted out of wool</span><span data-index='2'>   spray-painted on a wall</span><span data-index='3'>   made out of plasticine</span></p>
                    case (3):
                        return <p onClick={(e) => changeVariation(e,2)} ><span data-index='1' className='active'>as a 1960s poster</span><span data-index='2'>   as mixed media with needlework</span><span data-index='3'>   as digital art</span></p>                               
                    default: 
                        return <p onClick={(e) => changeVariation(e,2)} ><span data-index='1' className='active'>as digital art</span><span data-index='2'>   in the style of Basquiat</span><span data-index='3'>   drawn on a cave wall</span></p>
                }
        }
    }

    return (
        <ExampleWrapper>
            <Tabs>
                <Descr>TEXT DESCRIPTION</Descr>
                <p onClick={(e) => changeVariation(e,0)}><span data-index='1' className='active'>An astronaut</span><span data-index='2'>   Teddy bears</span><span data-index='3'>   A bowl of soup</span></p>
                {renderSecondP(variation)}
                {renderThirdP(variation)}
            </Tabs>
            <Carousel>
                <Descr>DALL·E 2</Descr>
                <SliderSyncing content={sliderContent}></SliderSyncing>
            </Carousel>
        </ExampleWrapper>
    );
};

export default FirstExample;
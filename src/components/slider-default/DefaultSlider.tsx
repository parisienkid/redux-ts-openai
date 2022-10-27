import { FC, ReactNode } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";

const Arrow = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  fill: rgba(255,255,255,.25);
`

const Prev = styled.button`
  display: block;
  background-color: rgba(0,0,0,.25);
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  z-index: 50;
  border: none;
  &:hover {
    background-color: rgba(0,0,0,.4);
    svg {
      fill: #fff;
    }
  }
  &:focus {
    outline: none;
  }
`

const Next = styled.button`
  display: block;
  background-color: rgba(0,0,0,.25);
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 100%;
  z-index: 50;
  border: none;
  &:hover {
    background-color: rgba(0,0,0,.4);
    svg {
      fill: #fff;
    }
  }
  &:focus {
    outline: none;
  }
  svg {
    transform: scaleX(-1) translateX(50%) translateY(-50%);
  }
`

const Dots = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  list-style: none;
  .slick-active > div > span {
    background-color: #fff;
  }
`

const Dot = styled.div`
  padding: 20px 4px;
  cursor: pointer;
  span {
    display: block; 
    height: 2px;
    width: 44px;
    border-radius: 2px;
    background-color: rgba(255,255,255,.25);
    transition: .15s;
  }
  &:hover {
    span {
      background-color: rgba(255,255,255,.75);
    }
  }
`

interface DefaultSliderProps {
    // images: string[];
    children: ReactNode
}

const DefaultSlider: FC<DefaultSliderProps> = ({children}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: false,
    nextArrow: 
    <Next>
      <Arrow viewBox="0 0 100 100">
        <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path>
      </Arrow>
    </Next>,
    prevArrow: 
    <Prev>
      <Arrow viewBox="0 0 100 100">
        <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path>
      </Arrow>
    </Prev>,
    appendDots: (dots: any) => (
      <Dots>{dots}</Dots>
    ),
    customPaging: (i: number) => (
      <Dot><span></span></Dot>
    )
  };

  return (
    <div>
      <Slider {...settings} infinite={false}>
       {children}
      </Slider>
    </div>
  );
};


export default DefaultSlider
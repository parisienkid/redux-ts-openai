import * as React from 'react';
import styled from 'styled-components';



const Svg = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 30%;
    width: auto;
`

const Spinner: React.FC = () => {
    return(
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(80,50)">
        <g transform="rotate(0)">
        <circle cx="0" cy="0" r="7" fill="#0a0a0a" fillOpacity="1">
        <animateTransform attributeName="transform" type="scale" begin="-1.2072434607645874s" values="1.44 1.44;1 1" keyTimes="0;1" dur="1.408450704225352s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.408450704225352s" repeatCount="indefinite" values="1;0" begin="-1.2072434607645874s"></animate>
        </circle>
        </g>
        </g><g transform="translate(68.704694055762,73.4549444740409)">
        <g transform="rotate(51.42857142857143)">
        <circle cx="0" cy="0" r="7" fill="#0a0a0a" fillOpacity="0.8571428571428571">
        <animateTransform attributeName="transform" type="scale" begin="-1.0060362173038229s" values="1.44 1.44;1 1" keyTimes="0;1" dur="1.408450704225352s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.408450704225352s" repeatCount="indefinite" values="1;0" begin="-1.0060362173038229s"></animate>
        </circle>
        </g>
        </g><g transform="translate(43.32437198131057,79.2478373654547)">
        <g transform="rotate(102.85714285714286)">
        <circle cx="0" cy="0" r="7" fill="#0a0a0a" fillOpacity="0.7142857142857143">
        <animateTransform attributeName="transform" type="scale" begin="-0.8048289738430583s" values="1.44 1.44;1 1" keyTimes="0;1" dur="1.408450704225352s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.408450704225352s" repeatCount="indefinite" values="1;0" begin="-0.8048289738430583s"></animate>
        </circle>
        </g>
        </g><g transform="translate(22.97093396292743,63.01651217352675)">
        <g transform="rotate(154.2857142857143)">
        <circle cx="0" cy="0" r="7" fill="#0a0a0a" fillOpacity="0.5714285714285714">
        <animateTransform attributeName="transform" type="scale" begin="-0.6036217303822937s" values="1.44 1.44;1 1" keyTimes="0;1" dur="1.408450704225352s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.408450704225352s" repeatCount="indefinite" values="1;0" begin="-0.6036217303822937s"></animate>
        </circle>
        </g>
        </g><g transform="translate(22.970933962927425,36.98348782647326)">
        <g transform="rotate(205.71428571428572)">
        <circle cx="0" cy="0" r="7" fill="#0a0a0a" fillOpacity="0.42857142857142855">
        <animateTransform attributeName="transform" type="scale" begin="-0.40241448692152915s" values="1.44 1.44;1 1" keyTimes="0;1" dur="1.408450704225352s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.408450704225352s" repeatCount="indefinite" values="1;0" begin="-0.40241448692152915s"></animate>
        </circle>
        </g>
        </g><g transform="translate(43.32437198131056,20.752162634545293)">
        <g transform="rotate(257.1428571428571)">
        <circle cx="0" cy="0" r="7" fill="#0a0a0a" fillOpacity="0.2857142857142857">
        <animateTransform attributeName="transform" type="scale" begin="-0.20120724346076457s" values="1.44 1.44;1 1" keyTimes="0;1" dur="1.408450704225352s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.408450704225352s" repeatCount="indefinite" values="1;0" begin="-0.20120724346076457s"></animate>
        </circle>
        </g>
        </g><g transform="translate(68.704694055762,26.545055525959103)">
        <g transform="rotate(308.5714285714286)">
        <circle cx="0" cy="0" r="7" fill="#0a0a0a" fillOpacity="0.14285714285714285">
        <animateTransform attributeName="transform" type="scale" begin="0s" values="1.44 1.44;1 1" keyTimes="0;1" dur="1.408450704225352s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.408450704225352s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
        </circle>
        </g>
        </g></Svg>
    )
};

export default Spinner

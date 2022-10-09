import React, { Component } from "react";
import Slider from "react-slick";
import { MainImg } from "../../pages/dalle-page/DallePage";

export default class SliderSyncing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          dots = {true}
        >
        {this.props.content.map((item, i)=> {
          return (
            <MainImg key={i} src={item}></MainImg>
          )
        })}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
        >
        {this.props.content.map((item, i) => {
          return (
            <MainImg key={i} src={item}></MainImg>
          )
        })}
        </Slider>
      </>
    );
  }
}
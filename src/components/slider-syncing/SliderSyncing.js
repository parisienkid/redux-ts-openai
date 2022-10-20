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

  onUpdate(i) {
    if (this.props.changeVariant) {
      this.props.changeVariant(i);
    } 
  }


  renderItems(mode) {
    switch (mode) {
      case 'original': 
        if (typeof this.props.content[0] == "string") { // If props == images
          return (
            this.props.content.map((item, i) => {return <MainImg key={i} src={item}></MainImg>})
          )
        } else {
          return (
            this.props.content.map((item) => {return item}) // If props == components (need to add 'key')
          )
        }
      case 'mini':
        return this.props.miniContent.map((item, i) => {return <MainImg key={i} src={item}></MainImg>}) // For mini-slider
      default:
        this.props.content.map((item, i) => {return <MainImg key={i} src={item}></MainImg>})
    }
  }

  render() {

    const bigSettings = {
      responsive: [
        {
          breakpoint: 540,
          settings: {
            dots: false
          }
        }
      ]
    }

    const miniSettings = {
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    }

    return (
      <>
        <Slider
          {...bigSettings}
          beforeChange={(oldI, newI) => this.onUpdate(newI)}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          dots = {true}
          arrows = {false}
          infinite = {false}
        >
          {this.renderItems('original')}
        </Slider>
        <Slider 
          {...miniSettings}
          className="mini"
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow = {5}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows = {false}
          infinite = {false}
          
        >
          {this.renderItems('mini')}
        </Slider>
      </>
    );
  }
}
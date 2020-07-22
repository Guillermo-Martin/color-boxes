import React, { Component } from 'react';
import './../assets/styles/styles.css';

class Box extends Component {
  // create defaultProps to accept props from ColorBoxes
  static defaultProps = {
    randomColor: "",
  }

  // pass props as state (will create random default box color)
  state = {
    currentColor: this.props.randomColor,
  }

  // generate random color for each individual box
  generateColor = () => {
    // array to hold random numbers for rgb
    let rgbColors = [];

    // create 3 random numbers
    for(let i = 0; i < 3; i++) {
      rgbColors.push(Math.floor((Math.random() * 255) + 1));
    }
  
    // change state to be the random numbers
    this.setState({ currentColor: rgbColors }); 
  }

  render() {
    return(
      <div 
        className="Box"
        style={
          {
            // pass currentCurrent color for backgroundColor
            backgroundColor: `rgb(${this.state.currentColor})`
          }
        }
        onClick={this.generateColor}
      >
      </div>   
    );
  }
}

export default Box;

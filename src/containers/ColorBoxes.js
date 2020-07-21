import React, { Component } from 'react';
import Box from './../components/Box';

class ColorBoxes extends Component {
  // create state to hold numbers for rgb color
  // will eventually hold a random number
  state = {
    backgroundColor: "255, 0, 0"
  }

  generateColor = () => {
    // create random numbers for rgb and pass numbers as props
    let randomNum = Math.floor((Math.random() * 255) + 1);
    alert(randomNum);
  }

  // render multiple boxes
  
  // add onClick listener to generate random numbers
  render() {
    return(
      <div>
        <Box
          onClick={this.generateColor}
          backgroundColor={this.state.backgroundColor}
        />
      </div>
    );
  }
}

export default ColorBoxes;
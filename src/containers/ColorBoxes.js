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
    let randomNum1 = Math.floor((Math.random() * 255) + 1);
    let randomNum2 = Math.floor((Math.random() * 255) + 1);
    let randomNum3 = Math.floor((Math.random() * 255) + 1);

    // create string to hold random numbers
    let rgbColors = randomNum1 + "," + randomNum2 + "," + randomNum3;
    
    // change state to be the random numbers
    this.setState({ backgroundColor: rgbColors}); 
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
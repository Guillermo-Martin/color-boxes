import React, { Component } from 'react';
import Box from './../components/Box';

class ColorBoxes extends Component {
  // create state to hold numbers for rgb color
  // will eventually hold a random number
  state = {
    backgroundColor: "255, 0, 0"
  }

  // render multiple boxes
  // create random numbers for rgb and pass numbers as props
  // add onClick listener to generate random numbers
  render() {
    return(
      <div>
        <Box 
          backgroundColor={this.state.backgroundColor}
        />
      </div>
    );
  }
}

export default ColorBoxes;
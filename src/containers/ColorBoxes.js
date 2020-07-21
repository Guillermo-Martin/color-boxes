import React, { Component } from 'react';
import Box from './../components/Box';

class ColorBoxes extends Component {
  // render multiple boxes
  // create random numbers for rgb and pass numbers as props
  // add onClick listener to generate random numbers
  render() {
    return(
      <div>
        <Box />
      </div>
    );
  }
}

export default ColorBoxes;
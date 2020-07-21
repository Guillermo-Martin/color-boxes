import React, { Component } from 'react';
import Box from './../components/Box';

class ColorBoxes extends Component {
  // create defaultProps (will be the number of boxes to make)
  static defaultProps = {
    numBoxes: 5
  }

  render() {
    
    // create an empty array to hold boxes
    let boxes = [];

    // create n number of boxes (based off defaultProps)
    for(let i = 0; i < `${this.props.numBoxes}`; i++) {
      // create the RGB number
      let RGB = Math.floor((Math.random() * 255) + 1) + "," + Math.floor((Math.random() * 255) + 1) + "," + Math.floor((Math.random() * 255) + 1);
      
      // create a Box component
      boxes.push(<Box randomColor={RGB} />);
      
    }


    return(
      <div>
        {boxes}
      </div>
    );
  }
}

export default ColorBoxes;
import React, { Component } from 'react';
import Box from './../components/Box';

class ColorBoxes extends Component {
  // create defaultProps (will be the number of boxes to make)
  static defaultProps = {
    numBoxes: 5
  }

  // create state to hold numbers for rgb color
  // will eventually hold a random number
  state = {
    backgroundColor: "",
  }

  // for an individual box
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

  
  // add onClick listener to generate random numbers
  render() {
    
    // create an empty array to hold boxes
    let boxes = [];

    // create n number of boxes (based off defaultProps)
    for(let i = 0; i < `${this.props.numBoxes}`; i++) {
      // create the RGB number
      let RGB = Math.floor((Math.random() * 255) + 1) + "," + Math.floor((Math.random() * 255) + 1) + "," + Math.floor((Math.random() * 255) + 1);
      
      // create a Box component
      boxes.push(<Box onClick={this.generateColor} backgroundColor={RGB} />);
    }


    return(
      <div>
        {boxes}
      </div>
    );
  }
}

export default ColorBoxes;
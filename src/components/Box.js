import React, { Component } from 'react';
// import './../assets/styles/styles.css';

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
    // create random numbers for rgb and pass numbers as props
    let randomNum1 = Math.floor((Math.random() * 255) + 1);
    let randomNum2 = Math.floor((Math.random() * 255) + 1);
    let randomNum3 = Math.floor((Math.random() * 255) + 1);

    // create string to hold random numbers
    let rgbColors = randomNum1 + "," + randomNum2 + "," + randomNum3;
    
    // change state to be the random numbers
    this.setState({ currentColor: rgbColors }); 
  }

  render() {
    return(
      <div 
        className="Box" 
        style={
          {
            width: "15rem",
            height: "15rem",
            // pass currentCurrent color for backgroundColor
            backgroundColor: `rgb(${this.state.currentColor})`,
            border: "2px solid black"
          }
        }
        onClick={this.generateColor}
      >
      </div>   
    );
  }
}

export default Box;

import React from 'react';
// import './../assets/styles/styles.css';

function Box(props) {
  // define variable to hold backgroundColor prop
  let color = `rgb(${props.backgroundColor})`;

  return(
    <div 
      className="Box" 
      onClick={props.onClick}
      style={
        {
          width: "15rem",
          height: "15rem",
          // pass color for backgroundColor
          backgroundColor: `${color}`,
          border: "2px solid black"
        }
      }
    >
    </div>
  );
}

export default Box;
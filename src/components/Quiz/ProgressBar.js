import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '30%',
      backgroundColor: "#fff",
      borderRadius: 20,
    }
  
    const fillerStyles = {
      height: 'inherit',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
    );
  };
  
  export default ProgressBar;
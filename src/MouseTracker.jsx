import React, { useEffect, useState } from 'react';
import './App.css';

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x:0, y:0})

  useEffect (()=>{
    const handleMouseMove = (e) => {
      setMousePosition({x: e.clientX, y:e.clientY});
    };
    // window(object) is the view of user and addEventListner 
    // add event to  mousemove and give it to handeMouseMove function
    // which shows the number of x and y value.
    // mousemove is passed through the arguments of handleMouseMove as "e (event)"
    // then setMousePosition updates the current mousePosition to new position.
    window.addEventListener ('mousemove', handleMouseMove);
    console.log("Mouse move listeer added");
    
    
    return () => {
        //cleanup function is removeEventListener
        window.removeEventListener('mousemove', handleMouseMove);
        console.log("Mouse move listeer removed");
    }
    // we need empty [] for preventing unnecessary re-renders.
  }, [])

  return (
      <div>
        <h2>Mouse Position</h2>
        <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
      </div>
      
  )
}

export default MouseTracker;

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
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
    // we need empty [] for preventing unnecessary re-renders.
  }, [])

  return (
      <div>
        <h2>Hello World !</h2>
        <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
      </div>
      
  )
}

export default App

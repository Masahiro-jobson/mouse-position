Make mouse-position app with Reacte + vite.
I made it mainly for understanding how to use useEffect hooks and how it will be rendered deeply.

I set value intial value x and y as '0' (mousePosition state x and y).
And, I made another function which is handleMouseMove to update mousePosition with setMousePosition.
In the handleMouseMove "e" is triggered for running the code, so I add event ('mousemove') 
and attached handleMouseMove funcition for that, and add finally addEventListner to window object.



This code enables user to see the current position of the mouse with x and y value because it updates /br
the mousePosition with useEffect hook effects. /br

![image](https://github.com/user-attachments/assets/4b92e63d-a495-476b-9da0-608a7ac8358c)

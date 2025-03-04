Make mouse-position app with Reacte + vite.
I made it mainly for understanding how to use useEffect hooks and how it will be rendered deeply.</br>
I divided 3 components which are App.jsx, ParentComponent.jsx, and MouseTracker.jsx.

App.jsx is the parent component of ParentComponent.jsx and refers to that component with </ ParentComponent>. </br>

ParentComponent has useState hook (boolean) which has showComponent and setShowCompnent. </br>
toggleComponent function has setShowComponent which changes the previous state to negate itself. </br>
In the return statement, there is button which shows 'Unmount Tracker'(default) or /br 'Mount Tracker' depending on showComponent state (toggleComponent is trigger).
If showComponent is true, MouseTracker is rendered but if not, it's not.
</br>

In MouseTracker, I set value intial value x and y as '0' (mousePosition state x and y).</br>
And, I made another function which is handleMouseMove to update mousePosition with setMousePosition. </br>
In the handleMouseMove "e" is triggered for running the code, so I add event ('mousemove') 
and attached handleMouseMove funcition for that, and add finally addEventListner to window object.</br>
As return function for useEffect, I set cleanup function (removeEventListener) for preventing a waste of performance. </br>
This function will run if showComponent in ParentComponent is false, which means MouseTracker is not rendered (removed).


This code enables user to see the current position of the mouse with x and y value because it updates </br>
the mousePosition with useEffect hook effects. </br>

Default View</br>
<img width="196" alt="image" src="https://github.com/user-attachments/assets/5cbf48b1-30e9-440c-bace-3832a86884ba" /></br>

After Unmount Tracker is clicked</br>
<img width="146" alt="image" src="https://github.com/user-attachments/assets/0bdd231a-c921-4e4d-843a-c175c96b884e" />



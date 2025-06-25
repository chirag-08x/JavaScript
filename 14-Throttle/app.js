// Throttling = limiting the number of times a function can be called over a period of time. It differs from debouncing in that it allows the function to be called at regular intervals, rather than waiting for a pause in activity.

const defaultText = document.querySelector(".default");
const throttleMouseMovement = document.querySelector(".throttle-mouse-movement");
const normalMouseMovement = document.querySelector(".normal-mouse-movement");


// Function to update throttled mouse movement
function updateThrottledMouse(event) {
  const x = event.clientX;
  const y = event.clientY;
  throttleMouseMovement.textContent = `Throttle: (${x}, ${y})`;
}

// Function to update normal mouse movement
function updateNormalMouse(event) {
  const x = event.clientX;
  const y = event.clientY;
  normalMouseMovement.textContent = `Normal: (${x}, ${y})`;
}
 

// Throttle the mouse movement function to limit how often it runs
const throttledMouseMovement = throttle(updateThrottledMouse, 1000);

// Add event listener for mouse movement
document.addEventListener("mousemove", (event) => {
  throttledMouseMovement(event);
  updateNormalMouse(event);
});


// Throttle function to limit the execution of a function
function throttle(mainFunction, delay){
    let timerFlag = false;
    return function(...args){
        if(!timerFlag){
            mainFunction(...args)
            timerFlag = setTimeout(() => {
                timerFlag = false;
            }, delay)
        }
    } 
}
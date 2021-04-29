export default updateLight;

/*
Thinkful - Logic Drills: Traffic light

You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.
*/


function updateLight(current) {
  const green = "green";
  const yellow = "yellow";
  const red = "red";
   if (current === green){return yellow}
   else if (current === yellow){return red}
   else if (current === red){return green}
}

// console.log(updateLight("green"));
// console.log(updateLight("yellow"));
// console.log(updateLight("red"));


// const updateLight = current => ({
//     green: 'yellow',
//     yellow: 'red',
//     red: 'green',
//   })[current]


// function updateLight(current) {
//     const lights = ["green", "yellow", "red"]
    
//     return current ==="red" ? "green" : lights[lights.indexOf(current)+ 1]
    
//   }
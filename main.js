// define an array
let origArray = [2, 3, 4];

// call a function 
function buttonEvent() {
    // by using the onclick property in the button element definition
    let x = origArray.map(calcSquare);
    document.getElementById("output1").value = x[0];
    document.getElementById("output2").value = x[1];
    document.getElementById("output3").value = x[2];
}

// add an addEventListener for the DOMContentLoaded 
document.addEventListener("DOMContentLoaded", function (event) {

    // add an eventlistener function using an anonymous function
    document.getElementById("cube").addEventListener("click", function () {
        let x = origArray.map(calcCube);
        document.getElementById("output1").value = x[0];
        document.getElementById("output2").value = x[1];
        document.getElementById("output3").value = x[2];
    });

    // add an eventlistener function which calls a function by name
    document.getElementById("toTheFourth").addEventListener("click", calcFourth);
});

// calculate the square
// function declaration by using the onclick property
function calcSquare(val) {
    return val * val;
}

// calculate the cube
// declaration of an anonymous function
var calcCube = function (val) {
    return val * val * val;
}

// calculate to the fourth
// Define the named function for the fourth button event listener
function calcFourth() {
  let x = origArray.map(function (val) {
    return val * val * val * val;
  });
  document.getElementById("output1").value = x[0];
  document.getElementById("output2").value = x[1];
  document.getElementById("output3").value = x[2];
}
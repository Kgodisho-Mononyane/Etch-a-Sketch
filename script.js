//DEFAULTS
const DEFAULT_COLOR = '#3882f6';
const DEFAULT_MODE = "color";
const DEFAULT_SIZE = "16"


//SLIDER
const sliderValue = document.querySelector("#slider-value");
const slider = document.querySelector("#myRange");

//BUTTONS
const colorPicker = document.querySelector("#colorPicker");
const colorBtn = document.querySelector("#colorBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const clearBtn = document.querySelector("#clearBtn");

//GRID
const grid = document.querySelector("#grid");

let rows = 16;
let cols = 16;

for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    grid.appendChild(cell)
}

//BUTTON EVENT LISTENERS

colorPicker.addEventListener("click", () => {
    pickColor();
})

colorBtn.addEventListener("click", () => {
    colorFunction();
})

rainbowBtn.addEventListener("click", () => {
    rainbowFunction();
})

eraserBtn.addEventListener("click", () => {
    eraser();
})

clearBtn.addEventListener("click", () => {
    clear();
})

// cell.addEventListener("click", () => {
    
// })

//SLIDER
sliderValue.textContent = `${slider.value} x ${slider.value}`;

//FUNCTIONS

function pickColor() {
    //function that changes the colour that is picked
    console.log("You clicked the color changer")
}

function colorFunction() {
    //function that changes the setting to the colour setting
    console.log("You clicked the color button")
}

function rainbowFunction() {
    // function that changes the setting to the rainbow setting
    console.log("You clicked the rainbow button")
}

function eraser() {
    // function that changes the setting to the eraser setting
    console.log("You clicked the eraser setting")
}

function clear() {
    //function that clears all changes back to the default
    console.log("You clicked the clear button")
}
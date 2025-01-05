//DEFAULTS
const DEFAULT_COLOR = '#3882f6';
const DEFAULT_MODE = "color";
const DEFAULT_SIZE = "16"

//BUTTONS
const colorPicker = document.querySelector("#colorPicker");
const colorBtn = document.querySelector("#colorBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const clearBtn = document.querySelector("#clearBtn");

//SLIDER
const sliderValue = document.querySelector("#slider-value");
const slider = document.querySelector("#myRange");

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
    clearGrid();
})

// cell.addEventListener("click", () => {
    
// })


//FUNCTIONS
function currentColor() {
    //function that establishes the current colour
}

function currentMode() {
    //function that sets the current mode
}

function currentSize() {
    //function that sets the current size
}

function changeSliderValue() {
    // function that changes the value above the slider
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
}

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

function clearGrid() {
    //function that clears all changes back to the default
    grid.innerHTML = ''
    console.log("You clicked the clear button")
}
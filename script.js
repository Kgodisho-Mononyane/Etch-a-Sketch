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
    cell.classList.add("cell");
    grid.appendChild(cell)
}


//BUTTON EVENT LISTENERS
colorPicker.addEventListener("click", () => {
    //add function
})

colorBtn.addEventListener("click", () => {
    //add function
})

rainbowBtn.addEventListener("click", () => {
    //add function
})

eraserBtn.addEventListener("click", () => {
    //add function
})

clearBtn.addEventListener("click", () => {
    //add function
})


//FUNCTIONS
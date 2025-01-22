//VARIABLES


//QUERY SELECTORS
const colorPicker = document.querySelector("#colorPicker");
const sliderValue = document.querySelector("#slider-value");
const slider = document.querySelector("#myRange");

const grid = document.querySelector("#grid");

const colorBtn = document.querySelector("#colorBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const clearBtn = document.querySelector("#clearBtn");


//EVENT LISTENERS
colorPicker.addEventListener("click", () => {
    pickColor();
});

slider.addEventListener("click", () => {
});

colorBtn.addEventListener("click", () => {
    colorFunction();
});

rainbowBtn.addEventListener("click", () => {
    rainbowFunction();
});

eraserBtn.addEventListener("click", () => {
    eraserFunction();
});

clearBtn.addEventListener("click", () => {
    clearFunction();
});

//GRID
let rows = 16;
let cols = 16;

for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.addEventListener("mousedown", () => {
    cell.style.backgroundColor = "red";
        });
    }
    grid.appendChild(cell);



//FUNCTIONS

function currentColor() {
}

function currentMode() {
}

function currentSize() {
}

function pickColor() {
}

function colorFunction() {
}
    
function rainbowFunction() {
}

function eraserFunction() {
}

function clearFunction() {
}

function sliderValue() {
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
}

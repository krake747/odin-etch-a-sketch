// Constant variables
const DEFAULT_SIZE = 16;

// Variables
let currentSize = DEFAULT_SIZE;

// HTML+CSS Selectors
const grid = document.getElementById("grid");
const resetBtn = document.getElementById("reset-btn");
const sizeInput = document.getElementById("size-input");
const sizeValue = document.getElementById("size-value");

// Functions
let setCurrentSize = (newSize) => currentSize = newSize;
let updateSizeValue = (value) => sizeValue.innerHTML = `${value} x ${value}`;

let setupGrid = (value) => {
    let gridArea = value * value;
    grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${value}, 1fr)`;

    for (let i = 0; i < gridArea; i++) {
        const div = document.createElement("div");
        div.classList.add("box");
        grid.appendChild(div);
    };

    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.onmouseover = () => box.style.backgroundColor = "yellow");
};

let updateGrid = (value) => {
    setCurrentSize(value);
    updateSizeValue(value);
    resetGrid();
};
let clearGrid = () => grid.innerHTML = "";
let resetGrid = () => {
    clearGrid();
    setupGrid(currentSize);
};

// Event Functions
resetBtn.onclick = () => resetGrid();
sizeInput.onmousemove = (e) => updateSizeValue(e.target.value);
sizeInput.onchange = (e) => updateGrid(e.target.value);

// Main
window.onload = () => {
    setupGrid(DEFAULT_SIZE);
};




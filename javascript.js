const DEFAULT_SIZE = 16;

const grid = document.querySelector(".grid");
const resetBtn = document.querySelector('#reset');

function setupGrid(size) {
    let gridArea = size * size;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < gridArea; i++) {
        const boxDiv = document.createElement("div");
        boxDiv.classList.add("box");
        grid.appendChild(boxDiv);
    };

    onMouseOverBox();
};

function onMouseOverBox() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover", () =>
        box.style.backgroundColor = "yellow")
    );
};

function resetGrid(size) {
    grid.innerHTML = "";
    setupGrid(size);
};

// Main
window.onload = () => {
    setupGrid(DEFAULT_SIZE);
};

resetBtn.addEventListener("click", () => resetGrid(DEFAULT_SIZE));




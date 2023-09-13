const container = document.getElementById("container");

function createGrid(gridsize) {
    for (let i=0; i<gridsize; i++){
        const row = document.createElement("div");
        row.classList.add("grid-row");
        container.appendChild(row);
     for (let j = 0; j<gridsize; j++){
         const cell = document.createElement("div");
         cell.classList.add("grid-cell");
         row.appendChild(cell);
         // add event listener for mouseover
         cell.addEventListener("mouseover", function() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            const color = `rgb(${r}, ${g}, ${b})`;
            this.style.backgroundColor = color;
         });
    }
 }
}

const userInput = document.getElementById("userInput");

userInput.addEventListener("input", function() {
    const gridSize = parseInt(userInput.value);
    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        // input is not a valid number or higher than 100
        container.innerHTML = ""; // remove existing grid
        return;
    }
    container.innerHTML = ""; // remove existing grid
    createGrid(gridSize); // create new grid with validated size
});

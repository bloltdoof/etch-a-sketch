const reset = document.querySelector('.reset');
const black = document.querySelector('.black');
const rainbow = document.querySelector('.rainbow');
const colorPicker = document.querySelector('.color-picker');
const eraser = document.querySelector('.eraser');
const gridContainer = document.getElementById('grid-container');


// Function to create grid squares by row*column by the size of 10px and append to grid-container.

const createGrid = (row, column) => {
    for (let i = 0; i < row; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('r');
        gridContainer.appendChild(rowDiv);
        for (let j = 0; j < column; j++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('c');
        rowDiv.appendChild(columnDiv);
        }
    }
}

createGrid(16, 16);
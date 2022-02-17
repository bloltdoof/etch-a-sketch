const grid = document.getElementById('grid');

function createGrid(size) {
    let gridSize = size * size;
    for (let i = 0; i < gridSize; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-item');
        grid.appendChild(div);
    }

}

createGrid(32);
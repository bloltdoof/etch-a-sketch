const grid = document.getElementById('grid');

function createGrid(size) {
    let gridSşize = size * size;
    for (let i = 0; i < gridSşize; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-item');
        grid.appendChild(div);
    }

}

createGrid(32);
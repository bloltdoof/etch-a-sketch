const grid = document.getElementById('grid');


const createDivs = (size) => {
    let gridSize = size * size;
    grid.setAttribute('style', `grid-template-columns: repeat(${size}, 2fr); grid-template-rows: repeat(${size}, 2fr);`);
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        grid.appendChild(div);
    }
    // When the mouse is over the div, it changes color to black.
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    }
    );
}

createDivs(16);
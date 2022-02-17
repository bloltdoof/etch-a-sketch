const reset = document.getElementById('reset');
const black = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
const pickColor = document.getElementById('pickColor');
const eraser = document.getElementById('eraser');
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

// When reset button is clicked, the grid is cleared.
reset.addEventListener('click', () => {
    grid.innerHTML = '';
    let newSize = prompt('How many squares per side?');
    createDivs(newSize);
});

eraser.addEventListener('click', () => {
    // When the mouse is over the div, it changes color to white.
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'white';
    }
    );
});

black.addEventListener('click', () => {
    // When the mouse is over the div, it changes color to black.
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    }
    );
});


rainbow.addEventListener('click', () => {
    
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    );
});

pickColor.addEventListener('click', () => {
    let color = prompt('Pick a color');
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = '#' + color;
    }
    );
});



createDivs(32);
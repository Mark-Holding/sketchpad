const gridContainer = document.getElementById('grid-container');
const btn = document.getElementById('btn');



function createGrid(rows, columns) {
    gridContainer.innerHTML = '';

    for (let i = 0; i < rows * columns; i ++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        gridContainer.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
    }
    
 
}

createGrid(16, 16)

btn.addEventListener('click', () => {
    let squareWidth = prompt('Enter grid width');
    if (squareWidth <= 100) {
    gridContainer.style.width = `${squareWidth * 50 + squareWidth * 2}px`;
    createGrid(squareWidth, squareWidth);
        } else {
            alert('Number must be below 100');
        }
    }
);
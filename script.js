const gridContainer = document.getElementById('grid-container');
const btn = document.getElementById('btn');
const chkBx = document.querySelector('#rainbowCheckbox');


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i ++){
        color += letters[Math.floor(Math.random() *16)];
    }
    return color;
}

function createGrid(rows, columns) {
    gridContainer.innerHTML = '';

    for (let i = 0; i < rows * columns; i ++){
        const square = document.createElement('div');

        square.classList.add('grid-square');
        gridContainer.appendChild(square);
        
    
        square.addEventListener('mouseover', () => {
            if(chkBx.checked){
            square.style.backgroundColor = getRandomColor();
            } else {
            square.style.backgroundColor = 'black';
            }
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
const gridContainer = document.getElementById('grid-container');



function createGrid(rows, columns) {
    
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


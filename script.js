function createGrid(rows, columns) {
    const gridContainer = document.getElementById('grid-container');

    for (let i = 0; i < rows * columns; i ++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        gridContainer.appendChild(square);
    }

}

createGrid(16, 16)
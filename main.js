let size = 16;


let container = document.querySelector('.container');
let grid = document.createElement('div');
container.appendChild(grid);
grid.classList.add('grid');
grid.style.display = 'grid';
grid.style.width = '100%';
// grid.textContent = 'asd';
grid.style.border = '1px red solid';

grid.style.justifySelf = 'center';
// grid.style.alignContent = 'center';
// grid.style.alignItems = 'center';
// grid.style.justifyContent = 'center';
// grid.style.justifyItems = 'center';
grid.style.gap = '0px';

grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grid.style.gridTemplateRows= `repeat(${size}, 1fr)`;

let test = 10;
for( let i=0; i<size; i++ )
{
    for(let j=0; j<size; j++)
    {
        let square = document.createElement('div');
        // square.style.gridColumn = `${j} / ${j}+1`;
        // square.style.gridRow = `${i} / ${i}+1`;

        // square.style.gridRowStart = `${i}+1`;
        // square.style.gridRowEnd = `${i}+2`;
        // square.style.gridColumnStart = `${j}+1`;
        // square.style.gridColumnEnd = `${j}+2` ;
            // grid;
        // grid-row-start: 1;
        // grid-row-end: 3;
        // grid-column-start: 1;
        // grid-column-end: 3;
        // square.textContent = ' ';
        // square.textContent = `${i},${j}`;
        square.style.minHeight = '10px';
        square.style.minWidth = '10px';
        // square.style.maxHeight = '10px';
        // square.style.maxWidth = '10px';
        square.style.backgroundColor = 'lightgray';
        square.style.border = '1px green solid';
        // square.style.width = `${test}px`;
        grid.appendChild(square);
    }
}
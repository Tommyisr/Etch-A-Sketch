let size = 16;
let arg = 'black';


let checkbox = document.getElementById("change");
// alert(checkbox.value);
checkbox.onclick = function() {
    if(this.checked != true && checkboxerase.checked == false) arg = 'black';
    else if(this.checked == true && checkboxerase.checked == false )arg = 'color';
}


let checkboxerase = document.getElementById("erase");
checkboxerase.onclick = function() {
    if(this.checked == true) arg = 'white';
    else if(this.checked == false) {
    if (checkbox.checked == true) arg = 'color';
    if (checkbox.checked == false) arg = 'black';
    }
}


let slider = document.getElementById("myRange");
let output = document.querySelector('.out');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    // size = this.value;
    clear();
    buildBoard(this.value);
}




function clear() {
    let cell = document.querySelectorAll('.cell');
    cell.forEach(x => x.remove());
}


function buildBoard(size) {
    let grid = document.querySelector('.grid');
grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grid.style.gridTemplateRows= `repeat(${size}, 1fr)`;
for( let i=0; i<size; i++ )
{
    for(let j=0; j<size; j++)
    {
        let square = document.createElement('div');
            square.classList.add("cell");
            square.addEventListener('mouseover', hoverfunc);
        grid.appendChild(square);

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
        
        // square.style.maxHeight = '10px';
        // square.style.maxWidth = '10px';
        
        // square.style.width = `${test}px`;
    }
}
}

buildBoard(size);

function hoverfunc(e) {
if (arg == 'black') {
    console.log(this.style.backgroundColor.red);
    // this.classList.add("black");
    
    this.style.backgroundColor = 'rgb(155,155,155)';
}
if (arg == 'white') {
    console.log("white");
    this.style.backgroundColor = 'white';

}

if (arg == 'color') {
    // let clr = RandomSource();
    // console.log(clr);
    let red = Math.random()*255;
    let green = Math.random()*255;
    let blue = Math.random()*255;
    console.log(red);

    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    // this.classList.add("color");
}
// console.log("hovhovhov2");

}



// let cell = document.querySelectorAll('.cell');
// cell.forEach(x => x.addEventListener('mouseover', hoverfunc));
// cell.forEach( x => x.style.background = 'red');
const pad = document.querySelector(".sketch-pad");
const pixels = document.querySelector("#pixel-range");
const cell = document.querySelector("#cell");


createGrid()
pixels.addEventListener('drag', e => createGrid());

//Fills grid up with cells
function createGrid() {

    //created appropriate number of rows and columns according to user's input
    pad.style.gridTemplateColumns = `repeat(${pixels.value}, 1fr)`;
    pad.style.gridTemplateRows = `repeat(${pixels.value}, 1fr)`;

    for (let i = 0; i < pixels.valueAsNumber; i++) {
        for (let j = 0; j < pixels.valueAsNumber; j++) {
        //creates div which will later be added to pad as cells
        const div = document.createElement('div');
        //appends div to sketch pad one by one 
        pad.appendChild(div).classList.add("cell");
        }
    }
}

//when hovered over div in pad, it turns black
function changeCellColors() {
    pad.addEventListener('mousemove', e => e.target.style.backgroundColor = 'black');
}

//erases cells in sketch pad
function eraseCellColors() {
    pad.addEventListener('mouseover', e => e.target.style.backgroundColor = 'white');
}


changeCellColors();
const pad = document.querySelector(".sketch-pad");
const pixels = document.querySelector("#pixel-range");
const cell = document.querySelector(".cell");
const blackButton = document.querySelector("#black-button");
const rainbowButton = document.querySelector("#rainbow-button");
const eraserButton = document.querySelector("#eraser-button");
const clearButton = document.querySelector("#clear-button");

//sets default value for grid cell count and enables drawing functionality
createGrid(50);
changeCellColors();

//event listener for cell count range 
pixels.addEventListener('change', function (e) {
    cleanGrid();
    createGrid(e.target.valueAsNumber);
});

//event listener for black button
blackButton.addEventListener('click', changeCellColors);

//event listener for eraser button
eraserButton.addEventListener('click', eraseCellColors);

//event listener for rainbow button


//Removes all divs from grid, which allows cell count variability 
function cleanGrid () {
    while (pad.firstChild) {
        pad.removeChild(pad.firstChild);
    }
}

//Fills grid up with cells
function createGrid(e) {

    //created appropriate number of rows and columns according to user's input
    pad.style.gridTemplateColumns = `repeat(${e}, 1fr)`;
    pad.style.gridTemplateRows = `repeat(${e}, 1fr)`;

    for (let i = 0; i < e; i++) {
        for (let j = 0; j < e; j++) {
        //creates div which will later be added to pad as cells
        const div = document.createElement('div');
        //appends div to sketch pad one by one 
        pad.appendChild(div).classList.add("cell");
        }
    }
}

//when hovered over div in pad, it turns black
function changeCellColors() {
    pad.addEventListener('mouseover', e => e.target.style.backgroundColor = 'black');
}

//erases cells in sketch pad
function eraseCellColors() {
    pad.addEventListener('mouseover', function(e) {
        if (e.target.className === 'cell') {
            e.target.style.backgroundColor = 'white';
        }
    });
}

const pad = document.querySelector(".sketch-pad");
const pixels = document.querySelector("#pixel-range");
const firstDiv = document.querySelector("#first-div");


//Fills grid up with children that form the background of the sketch pad
function createGrid() {
    //Creates spans that will later be used to represent each square in the grid     
    const div = document.createElement('div');
    div.style.backgroundColor = 'white';
    div.style.width = 'auto';

    //populates the grid with the span elements
    for (let i = 0; i < Number(pixels.value); i++) {
        console.log(i);
        firstDiv.parentNode.insertBefore(div, firstDiv.nextSibling);
    }
}

createGrid();
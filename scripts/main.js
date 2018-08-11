

const numOfFirstGrid = 16;
const container = document.querySelector('#container');

function makeGrid(num) {
  
  for(let i = 0; i < num*num; i++) {
    let grid = document.createElement("div");
    grid.classList.add("sqr");
    grid.style.border = "1px solid gray";
    container.appendChild(grid);
  }
  container.style.cssText = ("grid-template-columns: repeat(" + num + ", 1fr); grid-template-rows: repeat(" + num + ", 1fr)");
}

makeGrid(numOfFirstGrid);
coloring();

function askForGrids(){
 while(container.firstChild){
    container.removeChild(container.firstChild);
  }
numOfGrids = Number(prompt("How many squares per side to make the new grid?"));

makeGrid(numOfGrids);
coloring();
}

function coloring() {
  const squares = document.querySelectorAll(".sqr");
  for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener("mouseenter", function(e){
      e.target.style.cssText = "background-color: orange";
    });
  }
}

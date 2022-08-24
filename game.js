// Create dynamic grid 
var container = document.getElementById("gridContainer")
var rows = document.getElementsByClassName("gridRow")

function makeGrid(a) {
    for (i = 0; i < (a * a); i++){
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
    document.documentElement.style.setProperty("--rowNum", a)
    document.documentElement.style.setProperty("--colNum", a)
};
makeGrid(30)

// create grid toggle (min 10, max 50, start 30)
var slider = document.getElementById("selectRange")
var rangeGiven = document.getElementById("range")
var newGrid = 30

function clearGrid(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    };
};

slider.oninput = function() {
    rangeGiven.innerText = `${this.value} x ${this.value}`
    newGrid = this.value
    clearGrid(container);
    makeGrid(newGrid);
    };

// set event listener for click, change background color when mouseover
var grids = document.querySelectorAll(".gridRow")
container.addEventListener("mousedown", colorGrid, true)



function colorGrid(e) {
    if (defaultColor == "none") {
        e.target.style.backgroundColor = "#b96a9a";
    } else if (defaultColor == "selected") {
        e.target.style.backgroundColor = colorPicked; 
    } else if (defaultColor == "random") {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 60%, 70%)`; 
    } else if (defaultColor =="eraser"){
        e.target.style.backgroundColor = "#F5E8F2";
    }
};

// select color button 
var colorInput = document.getElementById("colorPicker")
var colorPicked = ""
var defaultColor = "none"

function newColor(){
    colorPicked = this.value
    defaultColor = "selected" 
}
colorInput.addEventListener("change", newColor)

// rainbow mode button  
function ranHex() {
    defaultColor = "random"
}

var randomColorBTN = document.querySelector(".randomBTN")
randomColorBTN.addEventListener("click", ranHex)

// eraser button 
function erase(){
    defaultColor ="eraser"
}

var eraserBTN = document.querySelector(".eraserBTN")
eraserBTN.addEventListener("click", erase)

// clear board button
function clearBoard () {
  var cleanBoard = document.querySelectorAll(".gridRow")
   for (i=0; i < (newGrid * newGrid); i++) {
     cleanBoard[i].style.backgroundColor = "#F5E8F2";
    };
};

var clearBTN = document.querySelector(".clearBTN")
clearBTN.addEventListener("click", clearBoard)

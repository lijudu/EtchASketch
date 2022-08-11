// create grid toggle (min 10, max 50, start 25)
var slider = document.getElementById("selectRange")
var rangeGiven = document.getElementById("range")
var setGrid = slider.value

slider.oninput = function() {
    rangeGiven.innerText = `${this.value} x ${this.value}`
}



// Create dynamic grid 
const container = document.getElementById("gridContainer")
var rows = document.getElementsByClassName("gridRow")

function makeGrid(a) {
    for (i = 0; i < (a * a); i++){
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
    document.documentElement.style.setProperty("--rowNum", a)
    document.documentElement.style.setProperty("--colNum", a)
};

makeGrid(10)

// select color button 
var colorInput = document.getElementById("colorPicker")
var colorPicked = ""
var defaultColor = "black"

function newColor(){
    colorPicked = this.value
    defaultColor = "selected" 
}
colorInput.addEventListener("change", newColor)

// rainbow mode button (create random 6 digit/letter combo, return as "colorPicked" upon eventlistener click)
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
function clearBoard(){
    grids.forEach(clear);
    function clear(grids){
        grids.style.backgroundColor = "#F5E8F2"
    };
};  
var clearBTN = document.querySelector(".clearBTN")
clearBTN.addEventListener("click", clearBoard)

// set event listener for click, change background color when mouseover
var grids = document.querySelectorAll(".gridRow")
container.addEventListener("click", gridColor)

function gridColor() {
    grids.forEach(clickListen);
    function clickListen(grids) {
        grids.addEventListener("mouseover", colorGrid)
                     };
                };

function colorGrid(e) {
    if (defaultColor == "black") {
        e.target.style.backgroundColor = "#b96a9a";
    } else if (defaultColor == "selected") {
        e.target.style.backgroundColor = colorPicked; 
    } else if (defaultColor == "random") {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 60%, 70%)`; 
    } else if (defaultColor =="eraser"){
        e.target.style.backgroundColor = "#F5E8F2";
    }
};

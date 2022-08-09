// Create dynamic grid 
const container = document.getElementById("gridContainer")
let rows = document.getElementsByClassName("gridRow")

function makeGrid(a) {
    for (i = 0; i < (a * a); i++){
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
    document.documentElement.style.setProperty("--rowNum", a)
    document.documentElement.style.setProperty("--colNum", a)
};

makeGrid(20)

// set event listener for click
// change background color when hovering using changing div background color
var grids = document.querySelectorAll(".gridRow")

container.addEventListener("click", gridColor)

function gridColor() {
    grids.forEach(clickListen);
    function clickListen(grids) {
        grids.addEventListener("mouseover", function(e){
             e.target.style.backgroundColor = "red ";
                     });
                };
            };


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

makeGrid(10)

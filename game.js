const container = document.getElementById("gridContainer")
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function makeRows(a){
    for (i = 0; i < a; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

function makeCells(b){
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < b; j++) {
            let cell = document.createElement("div");
            rows[j].appendChild(cell).className = "cell"
        };
    }; 
};

makeRows(16);
makeCells(16);

// Set up a “hover” effect
// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid
//   You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
// Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. 
// Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.
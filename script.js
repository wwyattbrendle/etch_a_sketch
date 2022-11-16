//link to grid space
const gridSpace = document.getElementById("grid");

//get user input
let userInput = 16;

//initialize arrays
const column = [];
const grid = [[],[]];

//creates initial grid and allows button to remove existing grid by default
createGrid();

//add event listener to button which starts prompt and creates grid
const newSketchButton = document.querySelector("button");
newSketchButton.addEventListener("click", () => {
    for(let i = 0; i < userInput; i++) {
        gridSpace.removeChild(column[i]);
    }
    getUserInput();
    createGrid();
})

//force user input to be a number between 2 and 100, inclusive
function getUserInput() {
    userInput = parseInt(prompt("How wide do you want the new grid to be? Enter a number between 2 and 100 squares: "), 10);
    if (userInput < 2 || userInput > 100) {
        alert("ERROR: Please choose a number between 2 and 100, inclusive");
        getUserInput();
    }
}

//set up nested for-loops to create and append boxes by columns and rows
function createGrid() {
    for (let i = 0; i < userInput; i++) {

        column[i] = document.createElement("div");
        column[i].style.cssText = "display: flex; justify-content: space-between; flex: 1 1 auto;";

        for(let j = 0; j < userInput; j++) {
            grid[[i],[j]] = document.createElement("div");
            grid[[i],[j]].classList = "original";
            grid[[i],[j]].setAttribute("id", (i + " and " + j));
            //add event listener for mouseover
            grid[[i],[j]].addEventListener("mouseover", () => {
                let box = document.getElementById(`${i} and ${j}`);
                box.classList.add("hovered-over");
            },{
                once: true
            });

            column[i].appendChild(grid[[i],[j]]);
        }

        gridSpace.appendChild(column[i]);
    }
}
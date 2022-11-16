//link to grid space
const gridSpace = document.getElementById("grid");

//get user input
let userInput = 16;
function getUserInput() {
    userInput = parseInt(prompt("How wide do you want the new grid to be?: "), 10);
    if (userInput < 2 || userInput > 100) {
        alert("ERROR: Please choose a number between 2 and 100, inclusive");
        getUserInput();
    }
}

//set up nested for-loops to create and append boxes by columns and rows
for (let i = 0; i < userInput; i++) {
    for(let j = 0; j < userInput; j++) {

    }
}
//Keep track of mode that you're on (Easy or Hard)
var numSquares = 6;

//Make the 6 squares a randomized color, starting with empty array
var colors = [];

//Pick a random color from the colors array, starting with empty value
var pickedColor;

//Select the squares
var squares = document.querySelectorAll(".square");

//Manipulates the RGB text in <h1> to a given RGB color
var colorDisplay = document.getElementById("colorDisplay");

//Display correct message on screen
var messageDisplay = document.querySelector("#message");

//Change h1 to match color of correct rgb element
var h1 = document.querySelector("h1");

//Resets button to new game
var resetButton = document.querySelector("#reset");

//Create a set of difficulty buttons (Easy or Hard)
var modeButtons = document.querySelectorAll(".mode");

init();

//Function to run everything when page loads
function init() {
	//mode buttons event listeners
  setUpModeButtons();
  setUpSquares();
  //Reset the screen
	reset();
}

//Function to set up mode buttons
function setUpModeButtons() {
	//loop through the difficulty buttons
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
  		this.classList.add("selected");
    	//You can also write if statement as a ternary operator
    	//this.textContent === "Easy" ? is the if
    	//: means otherwise
    	this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    	//call the reset function
    	reset();
		});
  }
}

function setUpSquares() {
	for(var i = 0; i < squares.length; i++) {
	//add click event listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			console.log(clickedColor, pickedColor);
			if(clickedColor === pickedColor){
				//Display Correct! message and change all
				//squares to match the correct color
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				//Displays "Play Again?" message if you win
				resetButton.textContent = "Play Again?"; 
			} else {//Deletes wrong square picked  
				//(square changes to background color black)
				this.style.backgroundColor = "#232323";
				//Display Try Again! message
				messageDisplay.textContent = "Try Again";
			}	
		});
	}
}

//Function to figure out how many buttons to show
//pick new colors
//pick a new pickedColor
//update page to reflect changes
function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
  //Change "Play Again? message back to "New Colors"
  //after user wins game and resets
  //"this" refers to resetButton 
  resetButton.textContent = "New Colors";
	//After reset, change messageDisplay back to empty
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		//if colors are picked...
		if(colors[i]) {
			//Display all 6 squares
			squares[i].style.display = "block";
			//add initial colors to squares
			squares[i].style.backgroundColor = colors[i];
	  } else { //hides bottom 3 squares
	  	squares[i].style.display = "none";
	  }
	} 
	//change h1 back to blue when game is reset
	h1.style.backgroundColor = "steelblue"; 
}
 
resetButton.addEventListener("click", function(){
	reset();
});

//Gets all squares to match the color of the correct
//square
function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	//Pick a random color 
	//Math.random picks a random number from 0 to 1
	//Math.floor will chop off any remaining decimal
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//Function to create array of random colors
function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

//Function that executes random num generator
function randomColor() {
	//pick a "red" from 0 - 255
	// * 256 because Math.floor rounds
	//down and want 255 to be max number
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
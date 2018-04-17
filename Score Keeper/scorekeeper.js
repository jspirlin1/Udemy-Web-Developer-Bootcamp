var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
			console.log("GAME OVER!");
		}
		p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
			console.log("GAME OVER!");
		}
		p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function(){
	reset();
});

//function to reset the scores back to 0 if user changes
//input value of Playing to: during game
function reset(){
	//changes both p1 and p2 scores back to 0 on JavaScript
	p1Score = 0;
	p2Score = 0;
	//resets both p1 and p2 scores back to 0 on web page
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	//gets rid of green color on winning number class
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	//sets gameOver back to false to play again
	gameOver = false;
}

//Changes the number of the Playing to: to match the input 
//value, using the change event listener
//The keyword (this) refers to numInput 
numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	//Number will change winningScore into a number
	winningScore = Number(this.value);
	reset();
});
// Get age and convet it to a Number (prompt always returns a string)
var age = Number(prompt("How old are you?"));

// If age is less than 18
if(age < 18) {
  alert("Sorry, you aren't old enough to enter the club.");	
}

// If age is greater than and equal to 18 && less than 21
else if(age < 21) {
  alert("You can enter the club, but you can't drink.");
}

// If age is greater than 21
else (
  alert("You can enter and drink.")
)

// Get age and convert it to a Number (prompt always returns a string)
var age = Number(prompt("It's your birthday, how old are you?"));

// If age is a negative number
if(age < 0){
  alert("You can't have a negative age.");	
}

// If age is 21
if(age == 21) {
  alert("Happy 21st birthday!!!");
}

// If age is an odd number
if(age % 2 !== 0){
  alert("Your age is odd.");
}

// If age is an even number
if(age % 2 == 0){
  alert("Your age is an even number.");
}

// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  alert("Your age is a perfect square.");	
}

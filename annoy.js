// VERSION 1 - FIND OUT IF WE'RE THERE YET?
var answer = prompt("Are we there yet?");

while(answer !== "yes" && answer !== "yeah"){
  var answer = prompt("Are we there yet?");	
}

alert("YAY, WE MADE IT!!!");

// VERSION 2 - FIND OUT IF THERE'S A "YES" IN THE STRING?
var answer = prompt("Are we there yet?");

// indexOf("yes") means does "yes" appear in the index of answer?
// -1 means "yes" does not currently exist inside the answer
while(answer.indexOf("yes") === -1){
  var answer = prompt("Are we there yet?");	
}

alert("YAY, WE MADE IT!!!");
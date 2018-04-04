window.setTimeout(function() {
var todos = ["Buy New Turtle"];

//Ask the user for input
var input = prompt("What would you like to do?");

while(input !== "quit"){
  //handle input
  //Check if user's input is in a list
  if(input === "list") {
    console.log(todos);	
  } else if(input === "new") {
    //ask for new todo
    var newTodo = prompt("Enter new todo.");
    //add to todos array
    todos.push(newTodo);	
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP!")//Check if user's input is in a list
}, 500);  
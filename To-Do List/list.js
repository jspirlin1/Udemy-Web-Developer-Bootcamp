window.setTimeout(function() {
var todos = ["Buy New Turtle"];

//Ask the user for input
var input = prompt("What would you like to do?");

while(input !== "quit"){
  //handle input
  //Check if user's input is in a list
  if(input === "list") {
  	listTodos();
  } else if(input === "new") {
    addTodo();	
  } else if (input === "delete"){
  	deleteTodo();
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP!");

function listTodos(){
  console.log("**********");
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);	
  });
  	console.log("**********");	
}

function addTodo(){
  //ask for new todo
  var newTodo = prompt("Enter new todo.");
  //add to todos array
  todos.push(newTodo);
  console.log("Added new todo.");	
}

function deleteTodo(){
  //ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete.");
  //delete that todo
  //splice() - removes a specific number of elements out of an array
  //(index, 1) - means remove 1 element from an array
  todos.splice(index, 1);
  console.log("The todo has been deleted.");	
}
}, 500);  

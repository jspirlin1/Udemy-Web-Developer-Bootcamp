//*****Adding methods to an object*****

//Methods are functions that is a property
//inside of an object
var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["Bob", "Tina"],
	//add is a method inside of object obj
	add: function(x,y){
		return x + y;
	}
}
//console is an object and add is a method
console.log(obj);

console.log(obj.add(10,5));

//Here is another method called speak
function speak() {
	return "WOOF!";
}

console.log(speak());

//*****Namespacing*****

//Namespace collisions are two different methods that
//have the same name but different return value
function speak() {
	return "MEOW!";
}

//To return both values "WOOF" and "MEOW"
//you have to create different variables
//and turn it into a function
var dogSpace = {};

dogSpace.speak = function() {
	return "WOOF!";
}

var catSpace = {};

catSpace.speak = function() {
	return "MEOW!";
}

//Now call "WOOF"
console.log(dogSpace.speak());

//And now "MEOW"
console.log(catSpace.speak());


//*****The Keyword  this*****

//(this) inside of a method can refer to an object
//that the method is defined in 
//It can also refer to many things such as object
//comments

//{} - empty object
var comments = {};

comments.data = ["Good Job!", "Bye", "Lame..."];

console.log(comments);

//To print a function in the global window namespace
//print is not a method because it's located 
//outside of the comments object
//el - element
function print(arr) {
	arr.forEach(function(el) {
		console.log(el);
	});
}

//To print comments.data
print(comments.data);	

//To print from the comments object
//Here, (this) refers to the object comments 
//that has data inside of it
comments.print = function() {
	this.data.forEach(function(el) {
		console.log(el);
	});
}

//Now call comments
console.log(comments);

//Now print it out
comments.print();
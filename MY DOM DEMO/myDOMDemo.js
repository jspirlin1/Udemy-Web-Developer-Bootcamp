//Changing elements using the JavaScript classList property.
//The classList property is one way to manipulate an
//element's style. It is a read-only list that contains the
//classes for a given element. It is not an array.

//*****MANIPULATING AN ELEMENT'S STYLE*****

//SELECTOR
var p = document.querySelector("p");
//var h1 = document.querySelector("h1");

//MANIPULATION
console.log(p);
console.log(p.classList);

//ADD A CLASS TO THE SELECTED ELEMENT
console.log(p.classList.add("big"));
//console.log(h1.classList.add("big"));

//REMOVE A CLASS 
console.log(p.classList.remove("big"));

//TOGGLE A CLASS - sets to true because
//big class was removed. Then, big class
//is created. 
console.log(p.classList.toggle("big"));

//TOGGLE A CLASS - sets to false after
//toggling the big class. Then, big class
//is removed again. 
console.log(p.classList.toggle("big"));

//TOGGLE A CLASS - sets to true again.
console.log(p.classList.toggle("big"));

//*****MANIPULATING TEXT AND CONTENT*****

//textContent - returns a string of all 
//the text contained in a given element

//Select the <p> and <ul> tag:
var tag = document.getElementsByTagName("p")[0];
var ul = document.querySelector("ul");

//Retrieve the textContent:
console.log(tag.textContent); 
console.log(ul.textContent);

//Alter the textContent:
console.log(tag.textContent = "Border Collies are adorable dogs.");
console.log(document.querySelector("h1").textContent = "WELCOME TO THE DOM DEMO!");

//*****innerHTML*****
//innerHTML - Similar to textContent, except it
//returns a string of all the HTML contained in
//a given element
var para = document.getElementsByTagName("p")[1];
console.log(para.innerHTML);

var ul = document.querySelector("ul");
console.log(ul.innerHTML);

//To get all of the innerHTML of the body
console.log(document.body.innerHTML);

//To get all of the text of the body
console.log(document.body.textContent);

//*****MANIPULATING ATTRIBUTES*****

//*****getAttribute and setAttribute*****
//getAttribute() and setAttribute() - Used to
//read and write attributes like src and href
var img1 = document.getElementsByTagName("img")[0];
console.log(img1);

//Gets the Attribute
console.log(img1.getAttribute("src"));

//Sets the Attribute to a new src img
console.log(img1.setAttribute("src", "http://corgimixbreed.com/wp-content/uploads/2017/04/Corgi-Husky-Mix-Puppies.jpg"));

//Changes the link in the <a>
var a = document.querySelector("a");
a.setAttribute("href", "http://www.corgis.com");
console.log(a);

//Changes the <a> content of the href
console.log(a.textContent = "LINK TO CORGIS.COM");
console.log(a);

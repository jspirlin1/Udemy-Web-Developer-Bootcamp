// Adds mouseover Event Listener to the first <li>
// This event will hover over the <li> with the 
// click of a mouse, then changes text to green
// with the .selected class
// var firstLI = document.querySelector("li");

// firstLI.addEventListener("mouseover", function(){
// 	firstLI.classList.add("selected");
// })

//Adds mouseout Event Listener to the first <li>
//This event will reset the element color from 
//green back to black when hover is over

// firstLI.addEventListener("mouseout", function(){
// 	firstLI.classList.remove("selected");
// })

// Adds mouseover Event Listener to all <li>
// This event will hover over the <li> with the 
// click of a mouse, then changes text to green
// with the .selected class
var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("mouseover", function(){
	//The keyword "this" inside an event listener
	//refers to the element it's called upon. In this
	//case, "this" refers to all <li> 
	  this.classList.add("selected");
  });
	//Adds mouseout Event Listener to all <li>
  //This event will reset the element color from 
  //green back to black when hover is over

  lis[i].addEventListener("mouseout", function(){
	  this.classList.remove("selected");
  });
  //Adds click Event Listener to all <li>
  //This event will end the hover effect by adding
  //a line-through through an element,when an <li> 
  //is clicked by the mouse

  lis[i].addEventListener("click", function(){
	  this.classList.toggle("done");
  });
}
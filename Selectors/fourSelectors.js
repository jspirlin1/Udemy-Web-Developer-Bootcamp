//Come up with 4 different ways to select 
//the first <p> tag.

// 1. getElementByID
var p = document.getElementById("first");
console.log(p);

// 2. getElementsByClassName
var p = document.getElementsByClassName("special")[0];
console.log(p);

// 3. getElementsByTagName
var p = document.getElementsByTagName("p")[0];
console.log(p);

// 4. querySelector
var p = document.querySelector("#first");
console.log(p);

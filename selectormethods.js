//*****getElementById*****

//getElementById takes a string argument and 
//returns the one element with a matching ID
var tag = document.getElementById("highlight");

console.log(tag);

console.dir(tag);

//*****getElementsByClassName*****

//getElementsByClassName takes a string argument
//and returns a list of elements that have a
//matching class
var tags = document.getElementsByClassName("bolded");

//tags[] is not an array, only an array like nodeList
console.log(tags[0]);
console.log(tags[1]);

console.log(tags.length);

console.dir(tags[0]);

//*****getElementsByTagName*****

//getElementsByTagName returns a list of all elements
//of a given tag name, like <li>, <h1>, <body>, or <title>
var tagname = document.getElementsByTagName("li");
console.log(tagname[0]);
console.log(tagname[1]);
console.log(tagname[2]);

var tagname = document.getElementsByTagName("h1");
console.log(tagname[0]);
console.log(tagname[1]);

var tagname = document.getElementsByTagName("ul");
console.log(tagname[0]);
console.log(tagname[1]);
console.log(tagname[2]);

var body = document.getElementsByTagName("body")[0];
console.log(body);

var head = document.getElementsByTagName("head")[0];
console.log(head);

var title = document.getElementsByTagName("title")[0];
console.log(title);

//*****querySelector*****

//querySelector returns the (first element) that matches
//a given CSS-style Selector(any selector we would use inside
//a CSS document)

//select by ID
var li = document.querySelector("#highlight");

console.log(li);

//select by Class
var tag = document.querySelector(".bolded");

console.log(tag);

//select by tag
var h1 = document.querySelector("h1");

console.log(h1);

//*****querySelectorAll*****

//querySelectorAll returns a (list of elements) that matches
//a given CSS-style Selector(any selector we would use inside
//a CSS document)

//select by tag
var h1 = document.querySelectorAll("h1");

console.log(h1[0]);
console.log(h1[1]);

var lis = document.querySelectorAll("li");

console.log(lis[0]);
console.log(lis[1]);
console.log(lis[2]);

//select by Class
var bolded = document.querySelectorAll(".bolded");
console.log(bolded[0]);
console.log(bolded[1]);
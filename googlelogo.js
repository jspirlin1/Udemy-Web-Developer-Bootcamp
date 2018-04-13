//Google logo manipulation
//Must open Google page and use the inspect element
//on page to modify it.

var logo = document.querySelector("#hplogo");
console.log(logo);

//Change Google logo to new image logo
logo.setAttribute("srcset", "https://cdn.images.dailystar.co.uk/dynamic/184/photos/334000/620x/Super-Mario-Level-Up-Boardgame-605999.jpg");

//Change style of new logo image
logo.style.width = "300px";
logo.style.height = "100px";
logo.style.border = "2px solid black";

//Gets all Google links
var links = document.getElementsByTagName("a");
console.log(links);

//Get the text of all Google links on page
for(var i = 0; i < links.length; i++) {               	
  console.log(links[i].textContent);  
}      

//Change Background color of Google links
for(var i = 0; i < links.length; i++) { 
  console.log(links[i].style.background = "aqua");                       
}      

//Style all Google links
for(var i = 0; i < links.length; i++) {  
  console.log(links[i].style.border = " 1px dashed purple");  
  console.log(links[i].style.color = "white");              
}

console.log(links);

//Gets all Google links's href
for(var i = 0; i < links.length; i++) { 
  console.log(links[i].getAttribute("href"));                 
}

//Redirects all Google links to Bing.com, when pressed
for(var i = 0; i < links.length; i++) {
  console.log(links[i].setAttribute("href", "http://www.bing.com"));  
}                   

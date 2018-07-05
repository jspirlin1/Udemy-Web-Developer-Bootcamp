// Shorter way

// Check off Specific Todos By Clicking.
//on will add listeners to all ul parent
//when an li is clicked inside a ul
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Click on X to delete Todo only when a span is
//clicked on a ul
$("ul").on("click", "span", function(event) {
	//this refers to the span clicked on
	//.parent() refers to the li
	//fadeOut() fades out the entire li by 500ms
	$(this).parent().fadeOut(500, function(){
		//this refers to the li being faded out
		//remove() removes the entire li
		$(this).remove();
	});
	//stopPropagation() method will stop an
	//event listerner from firing up
	event.stopPropagation();
});

//Adds a listener to text input that executes when 
//enter key is pressed
$("input[type='text']").keypress(function(event){
  if(event.which === 13) {
	//Gets the value of the input (this)
	//grabbing new todo text from input
	var todoText = $(this).val();
	//clear the input - val acts as setter
	$(this).val("");
    //create a new span and li and add to ul	
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");	
  }
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});	
// $("ul").click(function() {
// 	alert("Clicked on ul!");
// });

// $("#container").click(function() {
// 	alert("Clicked on container div!");
// });

// $("body").click(function() {
// 	alert("Clicked on body!");
// });

// Longer way

// // Check off Specific Todos By Clicking
// $("li").click(function() {
// 	//if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)") {
// 		//turn it black
// 		$(this).css({
// 	  	color:"black",
// 	  	textDecoration: "none"
// 		});
// 	}
// 	//else
// 	else {
// 		//turn it gray
// 		//this refers to specific li clicked
// 		$(this).css({
// 	  	color:"gray",
// 		//line-through an li
// 	  	textDecoration: "line-through"
// 		});
// 	}
		
// });

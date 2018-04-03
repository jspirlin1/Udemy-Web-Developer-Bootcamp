// Check if a number is even
function isEven(num) {
  //return true if even	
  if (num % 2 === 0) {
  	return true;
  }
  //return false otherwise
  else
  	return false;
}

// Shorter Way
//function isEven(num) {	
//  return num % 2 === 0;
//}

// A factorial function
// Ex. factorial(4) is 4! =  1 * 2 * 3 * 4
function factorial(num) {
   // define a result variable
   var result = 1;
   // calculate factorial and store value in result
   for(var i = 2; i<= num; i++){
   	 result *= i;
   } 
   // return the result variable
   return result;	
}

// Or factorial(4) is 4! = 4 * 3 * 2 * 1
// function factorial(num) {
//    // return 1 if the number is 0
//    if(num === 0){
//    	 return 1;
//    }
//    // define a result variable
//    var result = num;
//    // calculate factorial and store value in result
//    for(var i = num - 1; i>= 1; i--){
//    	 result *= i;
//    } 
//    // return the result variable
//    return result;	
// }

// replace dashes with underscores
function kebabToSnake(str) {
  // replace '-'s with "_"s
  var newStr = str.replace(/-/g , "_");
  // return str  
  return newStr;
}
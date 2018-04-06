//printReverse() - function that takes an array as an 
//argument and prints out the elements in the array 
//in reverse order
function printReverse(arr) {
  for(var i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
  }
}

printReverse([2,4,6,8]);

//isUniform() - function that takes an array as an 
//argument and returns true if all elements in the
//array are identical
function isUniform(arr) {
  var firstItem = arr[0];
  for(var i = 1; i < arr.length; i++)
  {
  	if(arr[i] !== firstItem) {
  	  return false;	
  	}
  }	
  return true;
}

//sumArray() - function that accepts an array of  
//numbers and and returns the sum of all numbers in 
//the array 
function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element) {
  	total += element; 
  });
  return total;	
}

//max() - function that accepts an array of  
//numbers and and returns the maximum number in 
//the array 
function max(arr) {
  var max = arr[0];
  for(var i = 1; i < arr.length; i++) {
  	if(arr[i] > max){
  	  max = arr[i];	
  	}
  }
  return max;	
}
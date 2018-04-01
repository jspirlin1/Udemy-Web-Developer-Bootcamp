var age = prompt("How old are you?");
//Leap year is every 4 years, so use 365.25 days
//where .25 represents a quarter of a year.
var days = age * 365.25;
alert(age + " years is roughly " + days + " days");
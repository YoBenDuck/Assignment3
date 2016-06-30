// The Rock, Paper, Scissors Game
/*
var result = "";

// prompt user choice

var userChoice = prompt("Do you choose rock, paper or scissors?");

//enter something other than 'rock', 'paper' or 'scissors'

userChoice = userChoice.toLowerCase();

if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {

// pc choice

var pcChoice = Math.random();
console.log(pcChoice);

    if (pcChoice < 0.333) {
        pcChoice = "rock";
    } else if (pcChoice > 0.656) {
        pcChoice = "paper";
    } else {
        pcChoice = "scissors";
    }

alert("Computer: " + pcChoice);

var whatIf = function (value1, value2, choice1, choice2) {
    if (value1 === choice1 && value2 === choice2) {
        return (true);
    } else if (value1 === choice2 && value2 === choice1) {
        return (true);
    }
    return (false);
};

var compare = function (choice1, choice2) {
    if (whatIf("paper", "rock", choice1, choice2)) {
        return ("paper wins");
    } else if (whatIf("paper", "scissors", choice1, choice2)) {
        return ("scissors wins");
    } else if (whatIf("scissors", "rock", choice1, choice2)) {
        return ("rock wins");
    } else {
        return ("it's a tie!");     
    }
}; 

alert(compare(userChoice, pcChoice));
}
else { 
    alert("Enter 'rock', 'paper', or 'scissors' you SCHMUCK! [=");
}
*/

//The Basic Calculator 
/*
var firstNumber = prompt("Enter a number");
var secondNumber = prompt("Enter a second number");
var operator = prompt("Would you like to do: +, -, * or /");
    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
		alert('Invalid entry.');
		}  

var calculate = function(firstNumber, secondNumber, operator) {
	var a = Number(firstNumber);
	var b = Number(secondNumber);
	
    var result;
    
// *** switch (expression) ***  
switch (operator) {
    case "+" :
		result = (a + b);
		break;
    case "-" :
		result = (a - b);
		break;
    case "*" :
		result = (a * b);
		break;
    case "/" :
		result = (a / b);
		break;
		default :
		result = "Invalid. Refresh page to start again";
	}
	alert("The answer is: " + result);
}
calculate(firstNumber, secondNumber, operator);
*/

// Death by JavaScript 

//Part1
/*
function alphabet_order(str) {  
      return str.split('').sort().join('');  
  }  
    console.log(alphabet_order("webmaster"));  
*/

//Part2
/*
var capitalize = function(str) {
	
	str = str.split(' ');	
	
	for (i = 0; i < str.length; i++) {
		str[i] = str[i].split('');
		str[i][0] = str[i][0].toUpperCase();
		str[i] = str[i].join('');
	}
	str = str.join(' ');
	return str;
}
console.log(capitalize('the quick brown fox'));
*/

//Part3
/*
var str = "The quick brown fox";
var matches = str.match(/[aeiou]/gi);
// *** compare statement ***
var count = matches ? matches.length : 0;
    console.log(count + " vowels");
*/

//Part4
/*
function makePasswd() {
  var passwd = '';
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (i = 1; i < 8; i++) {
    var c = Math.floor(Math.random()*chars.length + 1);
    passwd += chars.charAt(c);
  }

  return passwd;

}
console.log(makePasswd());
*/

//Part5
/*
var countryNames = ["Australia", "Germany", "United States of America"];

var lgth = 0;
var longest;

for(var i=0; i < countryNames.length; i++){
    if(countryNames[i].length > lgth){
        var lgth = countryNames[i].length;
        longest = countryNames[i];
    }      
} 
console.log(longest);
*/
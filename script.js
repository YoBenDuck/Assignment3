//COMM644 ASSIGNMENT3 -PART1
//NUMBER1

/*
var movies = ["Batman", "Superman", "Scarface", "Avengers", "ET", "Cars"];
console.log(movies[1]); 
*/

//NUMBER2
/*
var movies = [];
movies[0] = "Batman";
movies[1] = "Scarface";
movies[2] = "Avengers";
movies[3] = "ET";
movies[4] = "Cars";

console.log(movies[0]);
*/

//NUMBER3
/*
var movies = [];
movies[0] = "Batman";
movies[1] = "Scarface";
movies[2] = "Jaws"
movies[3] = "Avengers";
movies[4] = "ET";
movies[5] = "Cars";

console.log(movies.length);
*/

//NUMBER4
/*
var movies = ["Batman", "Scarface", "ET", "Cars", "Jaws"];

var removed = movies.splice(0,1);
console.log(movies);
*/

//NUMBER5
/*
var movies = ["Batman", "Scarface", "ET", "Cars", "Jaws", "Avengers", "Superman"];

for (i = 0; i< movies.length; i++) {
    console.log(movies[i]);
}
*/

//NUMBER6
/*
var movies = ["Batman", "Scarface", "ET", "Cars", "Jaws", "Avengers", "Superman"];

for (var i in movies) {
    console.log(movies[i]);
}
*/

//NUMBER7
/*
var movies = ["Batman", "Scarface", "ET", "Cars", "Jaws", "Avengers", "Superman"];

movies.sort();

for (var i in movies) {
    console.log(movies[i]);
}
*/

//NUMBER8 REFACTORING 

/*
var mostFavMovies = ["Batman", "Scarface", "ET"];
var leastFavMovies = ["Cars", "Jaws", "Avengers"];
console.log("Movies I like:");
console.log(" ");

mostFavMovies.sort();

for (var i in mostFavMovies) {
    console.log(mostFavMovies[i]);
}

console.log(" ");
console.log("Movies I regret:");
console.log(" ");

leastFavMovies.sort();

for (var i in leastFavMovies) {
    console.log(leastFavMovies[i]);
}
*/
        
//NUMBER9 
//concat() method / console.log display the list in reverse sorted order
/*
var mostFavMovies = ["Batman", "Scarface", "ET"];
var leastFavMovies = ["Cars", "Jaws", "Avengers"];
console.log("Movies:");
console.log(" ");

console.log(mostFavMovies.concat(leastFavMovies).reverse());
*/

//NUMBER10
/*
var mostFavMovies = ["Batman", "Scarface", "ET"];
var leastFavMovies = ["Cars", "Jaws", "Avengers"];
console.log("Movies:");
console.log(" ");

var movies = mostFavMovies.concat(leastFavMovies);
console.log(movies[movies.length-1]);
*/

//NUMBER11
/*
var mostFavMovies = ["Batman", "Scarface", "ET"];
var leastFavMovies = ["Cars", "Jaws", "Avengers"];
console.log("Movies:");
console.log(" ");

var movies = mostFavMovies.concat(leastFavMovies);
console.log(movies[0]);
*/

//NUMBER12
/*
var mostFavMovies = ["Batman", "Scarface", "ET"];
var leastFavMovies = ["Cars", "Jaws", "Avengers"];
var likedMovies = ["The Godfather", "Rocky", "Gladiator"];
var j = 0;
console.log("Movies:");
console.log(" ");

var movies = mostFavMovies.concat(leastFavMovies);
//console.log(movies.sort());

//to loop thru every item in our list to compare or test every item to find out which is the least fav

for (var i in movies){
    if (leastFavMovies.indexOf(movies[i]) >= 0) {
        console.log(movies[i] + ' is a least fav at index ' + i);
        movies[i] = likedMovies[j];
        j++;
      }
}
console.log(movies);
*/

//NUMBER13
/*
var employee1 = [];
employee1["EmpId"] = 8374;
employee1["Name"] = "Joe";
employee1["Title"] = "Dr";
employee1["Dept"] = "ER";
employee1["Active"] = true;

var employee2 = [];
employee2["EmpId"] = 5555;
employee2["Name"] = "Deb";
employee2["Title"] = "RN";
employee2["Dept"] = "Xray";
employee2["Active"] = true;

var employees = [];
employees[0] = employee1;
employees[1] = employee2;

console.log(employees[1]["Name"]);
*/

//NUMBER14
/*
var employee1 = [];
employee1["EmpId"] = 8374;
employee1["Name"] = "Joe";
employee1["Title"] = "Dr";
employee1["Dept"] = "ER";
employee1["Active"] = true;

var employee2 = [];
employee2["EmpId"] = 5555;
employee2["Name"] = "Deb";
employee2["Title"] = "RN";
employee2["Dept"] = "Xray";
employee2["Active"] = true;

var employees = [];
employees[0] = employee1;
employees[1] = employee2;


for (var i in employees){
    console.log(employees[i]["Name"]);
}
*/

//NUMBER15
/*
var employee1 = [];
employee1["EmpId"] = 8374;
employee1["Name"] = "Kim";
employee1["Title"] = "Dr";
employee1["Dept"] = "ER";
employee1["Active"] = true;

var employee2 = [];
employee2["EmpId"] = 5555;
employee2["Name"] = "Beth";
employee2["Title"] = "RN";
employee2["Dept"] = "Xray";
employee2["Active"] = true;

var employee3 = [];
employee3["EmpId"] = 2525;
employee3["Name"] = "Ron";
employee3["Title"] = "Tech";
employee3["Dept"] = "Morgue";
employee3["Active"] = false;

var employees = [];
employees[0] = employee1;
employees[1] = employee2;
employees[2] = employee3;


for (var i in employees){
    if (employees[i]["Active"] === true){
        console.log(employees[i]["Name"]);
    }
}
*/

//NUMBER16 name & ranking 
/*
var movies = [];
movies[0] = ["Batman", 1];
movies[1] = ["Scarface", 2];
movies[2] = ["Jaws", 3];
movies[3] = ["ET", 4];
movies[4] = ["Avengers", 5];

for (var i in movies){
    var result = movies[i].filter(function(x){
       return typeof x == "string";
    });
    console.log(result[0]);
}
*/   


// *** PRACTICE WITH FUNCTIONS ***

//NUMBER1
/*
var displayMessage = function(str) {
    console.log(str);
}
displayMessage("Hello World");
*/

//NUMBER2
/*
function calculate(x,y) {
    return x % y;
}
console.log(calculate(9,3));
*/

//NUMBER3
/*
var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];

var showEmployees = function(names) {
    console.log("Employees:");
    console.log(" ");
    for (var i = 0; i < names.length; i++){
        console.log(names[i]);
    }
};
showEmployees(employees);
*/










// function add (a, b){
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd))
//
// var groupA = ["Court", "Bob"];
// var groupB = ["Anna"];
//
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);
var person = ["Ben", 31];
var personTwo = ["Anna", 30];

function greetings (name, age){
  console.log("Hi " + name + ", you are " + age);
}
greetings(...person);
greetings(...personTwo);

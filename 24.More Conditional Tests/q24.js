"use strict";
// String
let fruit = "apple";
console.log(" Tests for equality and inequality with strings");
console.log(fruit === "apple"); //true
console.log(fruit === "mango"); //false
// lowercase
console.log("Tests using the lower case function");
console.log("Apple".toLowerCase() == "apple"); //true
//Numberical tests
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log(5 === 5); //true
console.log(8 !== 8); //false
console.log(10 > 9); //true
console.log(3 < 2); //false
console.log(10 >= 5); //true
console.log(3 <= 2); //false
// operators
console.log("Tests with 'and' and 'or' operators");
console.log(true && false);
console.log(true || false);
// Test whether an item is in a array
console.log("Test whether an item is in a array");
let fruits = ["Apple", "Banana", "Orange"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("Apple")); //true
// Test whether an item is not in a array
console.log("Test whether an item is not in a array");
console.log("Is 'Mango' not in fruits?");
console.log(!fruits.includes("Mango")); //true

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

//Commented out the arrow function practice code

// var numbers = [3, 56, 2, 48, 5];

// ////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// const newNumbersa = numbers.map((x) => x * 2);

// console.log(newNumbers);
// console.log("Arrow 1", newNumbersa);

// //////Filter - Create a new array by keeping the items that return true.
// const newNumbers1 = numbers.filter(function (num) {
//   return num < 10;
// });

// const newNumbers1a = numbers.filter((num) => num < 10);

// console.log(newNumbers1);
// console.log("Arrow 2", newNumbers1a);

// //Reduce - Accumulate a value by doing something to each item in an array.
// var newNumbers2 = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });

// var newNumbers2a = numbers.reduce(
//   (accumulator, currentNumber) => accumulator + currentNumber
// );

// console.log(newNumbers2);
// console.log("Arrow 3", newNumbers2a);

// ////Find - find the first item that matches from an array.
// const newNumber4 = numbers.find(function (num) {
//   return num > 10;
// });

// const newNumber4a = numbers.find((num) => num > 10);

// console.log(newNumber4);
// console.log("Arrow 4", newNumber4a);

// ////FindIndex - find the index of the first item that matches.
// const newNumber5 = numbers.findIndex(function (num) {
//   return num > 10;
// });

// const newNumber5a = numbers.findIndex((num) => num > 10);

// console.log(newNumber5);
// console.log("Arrow 5", newNumber5a);

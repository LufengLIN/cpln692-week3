/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */
//Original code1
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i=0; i<vacationSpots.length; i++){
  console.log(vacationSpots[i])
}
//Rewrite code1
_.each(vacationSpots,(x) => console.log(x));
//vacationSpots.forEach(x => console.log(x));

//Original code2
let array = [1,2,3,4,5,6,7,8,9];
let threemultiple = []
for (let i = 0; i < array.length; i++){
  var value = array[i]
  if (value % 3 === 0){
    threemultiple.push(value);
  }
}
console.log(threemultiple)

//Rewrite code2
let threemultiple2 = []
_.each(array, function(y){
  if(y % 3 === 0){
    threemultiple2.push(y)
  }
})
console.log(threemultiple2)

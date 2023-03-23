/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

EX: 
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == [] */

function invert(array) {
    return array.map((num) => -num); //returns the result of calling the 'map' method on the 'array' parameter. The 'map' method applies a function to each element of an array and returns a new array with the results.
 }
 //The function passed to 'map' is an arrow function that takes one parameter 'num'. For each element of the 'array' parameter, the arrow function multiplies it by -1 to invert its sign. The resulting array contains the negated values of the original array.


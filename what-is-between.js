//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

/*For example:

a = 1
b = 4
--> [1, 2, 3, 4]*/

function between(a, b) { //function named 'between' that takes two parameters, 'a' and 'b'
 let arr = [] //initializes an empty array named 'arr' -- this array will be used to store the numbers between 'a' and 'b'
 for (let i = a; i <= b; i++) { //starts a for loop that initializes a variable 'i' w/ the value of 'a', and iterates as long as 'i' is less than or equal to 'b' - during each iteration, 'i' is incremented by 1
   arr.push(i) //adds the current value of 'i' to the end of the 'arr' array during each iteration of the 'for' loop
 }
  return arr // returns the 'arr' array containing all the numbers between 'a' and 'b'
}

/* the between function takes 2 numbers 'a' and 'b' and creates an array containing all the integers between them (inclusive of both 'a' and 'b')
It does this by initializing an empty array, then using a 'for' loop to iterate through all the integers between 'a' and 'b', and adding each integer to the array. 
Finally, it returns the array containing all the integers between 'a' and 'b'.*/
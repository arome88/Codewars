/*We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives*/

function add(a, b) {
    let result = ""; // start w an empty 'result' string - this line creates an empty string variable called result, which will be used to store the result of adding the two input #s
    let carry = 0; // set the carry to 0 - this line creates a variable called 'carry' and sets its initial value to 0 - 'carry' is used to keep track of any digits that need to be carried over to the next place value when adding
    let i = a.length - 1; // start from the last digit of the first number - this line creates a variable called 'i' and sets its initial value to the index of the last digit in the first input number 'a' - this variable will be used to keep track of which digit is being added in 'a'
    let j = b.length - 1; // start from the last digit of the second number - this line creates a variable called 'j' and sets its initial value to the index of the last digit in the second input number 'b' -- this variable will be used to keep track of which digit is being added in 'b'
    while (i >= 0 || j >= 0 || carry > 0) { // this line creates a while loop that continues as long as there are still digits to add 
      const digitA = i >= 0 ? parseInt(a.charAt(i)) : 0; // this line creates a variable called 'digitA' and sets its initial value to the next digit in the 1st input number 'a' -- if there are no more digits in 'a', 'digitA' is set to 0 -- 'parseInt()' is used to convert the digit from a string to an integer
      const digitB = j >= 0 ? parseInt(b.charAt(j)) : 0; // this line creates a variable called 'digitB' and sets its initial value to the next digit in the 2nd input number 'b'-- if there are no more digits in 'b', 'digitB' is set to 0 -- 'parseInt()' is used to convert the digit from a string to an integer
      const sum = digitA + digitB + carry; // add the digits and the carry from the previous iteration
      result = (sum % 10) + result; //this line takes the digit in the ones place of the sum and adds it to the beginning of the result string -- we add it to the beginning of the string because we are processing the digits from right to left
      carry = Math.floor(sum / 10); // this line calculates the carry for the next iteration - if the sum of the digits is greater than or equal to 10, then the carry is 1, otherwise it is 0 -- we calculate the carry by dividing the sum by 10 and rounding down to the nearest integer
      i--; // decrements the index variable 'i' which keeps track of the current position in the 1st number being added- we need to move to the next digit to continue the addition
      j--; // decrements the index variable 'j' which keeps track of the current position in the 2nd number being added- we need to move to the next digit to continue the addition
    }
    return result; //  returns the final result of the addition as a string
  }
  

  // this function adds 2 numbers together by looping through each digit and carrying over if needed, and returns the sum as a string
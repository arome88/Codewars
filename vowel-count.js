// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) { //a function called 'getCount' which takes one parameter 'str'
    const vowels = ['a', 'e', 'i', 'o', 'u']; //creates a constant array called 'vowels' which contains the vowel characters 
    let count = 0; //declares a variable called 'count' and initializes it to 0 - this variable will be used to keep track of the number of vowels found in the input string
    for (let i = 0; i < str.length; i++) { //starts a 'for' loop that will iterate over each character in the input string 'str' --the loop initializes a variable called 'i' to 0, sets a condition that 'i' must be less than the length of the string, and increments 'i' after each iteration
      if (vowels.includes(str[i])) { // checks if the current character of the input string is included in the 'vowels' array
        count++; // increments the 'count' variable by 1 if the current character is a vowel
      }
    }
    return count; //returns the final value of the 'count' variable, which represents the total number of vowels in the input string
    return 0; //this statement is unreachable since it comes after a return statement. It will never be executed
  }

  //the 'getCount' function takes a string as input and counts the number of vowels (a, e, i, o, u) in the string--then returns the count as output
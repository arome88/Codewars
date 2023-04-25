// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) { //This line defines a function named 'countBits' using a function expression. The function takes a single parameter 'n' which is the number for which we want to count the number of set bits (i.e., bits with value 1)
    const binaryString = n.toString(2); //This line converts the input number 'n' to its binary representation as a string using the 'toString' method with a radix of 2. This means that each digit in the binary string will represent a single bit in the binary representation of the number
    const onesCount = (binaryString.match(/1/g) || []).length; //This line uses a regular expression to count the number of ones (i.e., set bits) in the binary string. The regular expression /1/g matches all occurrences of the digit 1 in the string, and the match method returns an array of all matches. If there are no matches (i.e., no set bits in the binary representation), then the match method will return null, so we use the || [] operator to replace null with an empty array. Finally, we use the length property to get the count of set bits
    return onesCount; //This line returns the count of set bits in the binary representation of the input number.
  };
  console.log(countBits(1234)); // output: 5

  //this function takes an input number, converts it to its binary representation as a string, and counts the number of set bits (i.e., bits with value 1) in the binary string using a regular expression. The function returns the count of set bits as an integer.
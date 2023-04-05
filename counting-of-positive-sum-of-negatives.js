/* Given an array of integers

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
0 is neither positive nor negative

If the input is an empty array or is null, return an empty array

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]*/



function countPositivesSumNegatives(input) {
  if (input == null || input.length === 0) { // This is a check for empty or null input. If the input is empty or null, we simply return an empty array
    return [];
  }
  
  let positives = 0;
  let negatives = 0;
  // /We declare two variables, positives and negatives, and initialize them both to zero

  for (let i = 0; i < input.length; i++) { //We start a loop that iterates over the elements of the input array
    if (input[i] > 0) { //If the current element is positive, we increment the 'positives' variable
      positives++;
    } else if (input[i] < 0) { //If the current element is negative, we add it to the 'negatives' variable
      negatives += input[i]; // Finally, we return an array containing the 'positives' and 'negatives' counts
    }
  }
  
  return [positives, negatives];
}

//this code simply iterates over the input array and counts the number of positive and negative integers, returning an array with those counts as its elements
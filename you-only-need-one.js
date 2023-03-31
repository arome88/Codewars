/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

  Array can contain numbers or strings. X can be either.

  Return true if the array contains the value, false if not.*/

function check(a, x) {
  // Loop over each element in the array
  for (let i = 0; i < a.length; i++) {
    // If the current element is equal to x, return true
    if (a[i] === x) {
      return true;
    }
  }
  // If we haven't found x in the array, return false
  return false;
}

/*this code simply loops over each element in the array and checks whether it's equal to the value 'x'. 
If we find a matching element, we return 'true'. 
If we reach the end of the loop without finding a matching element, we return 'false'.*/
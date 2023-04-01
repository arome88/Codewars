/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples:
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.*/

function makeNegative(num) {
  // Check if the number is already negative - return the number as it is
  if (num < 0) {
    return num;
  } else {
    // If the number is positive or zero, make it negative
    return -num;
  }
}

/* this code simply checks whether the input number is already negative or not. 
If it's not negative, it returns its negation.
If it's already negative, it returns the number as it is.*/
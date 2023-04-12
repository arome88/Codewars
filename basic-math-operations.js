/*Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7*/

function basicOp(operation, value1, value2)
{
  switch(operation) { // check the value of operation
    case '+': // if it is '+'
      return value1 + value2; // add value1 and value2 and return the result
    case '-': // if it is '-'
      return value1 - value2; // subtract value2 from value1 and return the result
    case '*': // if it is '*'
      return value1 * value2; // multiply value1 and value2 and return the result
    case '/': // if it is '/'
      return value1 / value2; // divide value1 by value2 and return the result
    default: // if it is not one of the above operations
      return null; // return null
  }
}

// the 'basicOp' function takes in three arguments 'operation', 'value1', and 'value2' - it uses a switch statement to check the value of 'operation' and returns the result of the appropriate operation on 'value1' and 'value2'
//if operation is not one of the specified operations (+, -, *, /), the function returns null
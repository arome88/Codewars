// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) { // this line checks if "flower1" is an even number AND "flower2" is an odd number.equal to 0 (i.e. if "flower2" is odd)
      return true; // If the condition in the "if" statement is true, the function immediately stops executing and returns the value "true" (meaning the flowers are compatible)
    } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) { //if the condition in the "if" statement is false, this line checks if "flower1" is an odd number AND "flower2" is an even number
      return true; //If the condition in the "else if" statement is true, the function immediately stops executing and returns the value "true" (meaning the flowers are still compatible)
    } else { //If both the "if" and "else if" conditions are false, the function executes the code in the "else" block
      return false; //The "else" block simply stops executing and returns the value "false" (meaning the flowers are not compatible)
    }
  }

/*  the "lovefunc" function takes in two numbers and checks if one is even and the other is odd. 
    If this condition is true, the function immediately stops and returns "true" to indicate that the flowers are compatible. 
    If the condition is false, the function continues to check if one is odd and the other is even. 
    If this second condition is true, the function stops and returns "true" to indicate that the flowers are still compatible. 
    If both conditions are false, the function stops and returns "false" to indicate that the flowers are not compatible. */
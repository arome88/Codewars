// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    const firstLetter = beast.charAt(0); //creates a constant variable 'firstLetter' which is assigned the value of the first character of the 'beast' string. The 'charAt()' method is used to get the character at the specified index of the string.
      const lastLetter = beast.charAt(beast.length - 1); //creates a constant variable 'lastLetter' which is assigned the value of the last character of the 'beast' string. The 'charAt()' method is used to get the character at the specified index of the string. The 'beast.length - 1'  expression returns the index of the last character in the 'beast' string.
      return dish.startsWith(firstLetter) && dish.endsWith(lastLetter); //returns a boolean value 'true' if the 'dish' string starts with the first letter of the 'beast' string (stored in 'firstLetter') and ends with the last letter of the 'beast' string (stored in 'lastLetter'). Otherwise, it returns 'false' The 'startsWith()' and 'endsWith()' methods are used to check if the given string starts or ends with a particular substring.
    }
    
    //this 'feast' function checks if the 'dish' string starts with the first letter and ends with the last letter of the 'beast' string and returns a boolean value accordingly.
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
//The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.


//This is the function declaration, defining a function called 'twiceAsOld' that takes two parameters, 'dadYearsOld' and 'sonYearsOld'
function twiceAsOld(dadYearsOld, sonYearsOld) {

    //This statement calculates the absolute difference between the 'dadYearsOld' and twice the 'sonYearsOld' using the 'Math.abs' function, which returns the absolute value of a number
    //The calculation 2 * 'sonYearsOld' is used because the problem states that the father's age is twice the son's age, and we need to calculate the age difference in terms of the father's age
    const n = Math.abs(dadYearsOld - 2 * sonYearsOld);

    //This statement returns the value of 'n', which is the absolute difference between the 'dadYearsOld' and twice the 'sonYearsOld'
    return n;
  } 
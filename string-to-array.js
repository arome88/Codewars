//Write a function to split a string and convert it into an array of words.

//This is the function declaration, defining a function called 'stringToArray' which takes a single parameter, 'string'
function stringToArray(string){
    return string.split(" ");
    //This statement returns the result of calling the 'split' method on the input 'string', with the space character " " as the delimiter. 
    //The 'split' method takes the input string, splits it into an array of substrings at each occurrence of the delimiter, and returns the resulting array.
  
} //end of funtion block
  

// the 'stringToArray' function takes a single string input and returns an array of words, where each element of the array is a separate word from the original string. 
// this function can be useful when you need to manipulate the words in a string separately
// for example to perform word counting or search for a particular word in the string
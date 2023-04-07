/* Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"*/


String.prototype.toJadenCase = function () {
  var words = this.split(" "); //this line is splitting the original string into an array of individual words by using the 'split' method and the space character as a delimiter. It is storing this array of words in a variable called words.
  for (var i = 0; i < words.length; i++) { //This line is initializing a 'for' loop that will iterate over each element in the 'words' array.
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); //This line is capitalizing the first letter of each word in the words array by using the 'toUpperCase()' method on the first character of each word (obtained with 'charAt(0)'), and then concatenating it with the rest of the word (obtained with 'slice(1)'). It is then storing the capitalized word back into the 'words' array.
  }
  return words.join(" "); //This line is joining the words array back into a single string by using the 'join' method and a space character as the separator, and then returning the resulting string.
};


/* this code takes a given string, splits it into an array of individual words, 
capitalizes the first letter of each word, and then joins the capitalized words back into a single string with spaces in between
The resulting string is the same as the original string, but with each word capitalized as Jaden Smith would write it. */
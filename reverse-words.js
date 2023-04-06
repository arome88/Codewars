//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  // split the string into an array of words
  let wordsArr = str.split(' ');

  // iterate over each word in the array
  let reversedWordsArr = wordsArr.map(function(word) {
    // split the word into an array of characters
    let charsArr = word.split('');

    // reverse the characters in the array
    let reversedCharsArr = charsArr.reverse();

    // join the reversed characters into a string
    let reversedWord = reversedCharsArr.join('');

    return reversedWord;
  });

  // join the array of reversed words into a string, using space as separator
  let reversedString = reversedWordsArr.join(' ');

  return reversedString;
}

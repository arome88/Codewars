function duplicateCount(text){
    // Convert the input string to lowercase to make the comparison case-insensitive
    text = text.toLowerCase();
    
    // Create an object to store the count of each character
    const charCount = {};
    
    // Loop over each character in the input string and increment its count in charCount
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (charCount[char] === undefined) {
        charCount[char] = 1;
      } else {
        charCount[char]++;
      }
    }
    
    // Count the number of characters that occurred more than once
    let count = 0;
    for (const char in charCount) {
      if (charCount[char] > 1) {
        count++;
      }
    }
    
    return count;
  }
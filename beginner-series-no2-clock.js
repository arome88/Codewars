// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
    // Convert hours, minutes, and seconds to milliseconds
    const hoursInMs = h * 60 * 60 * 1000;
    const minutesInMs = m * 60 * 1000;
    const secondsInMs = s * 1000;
    
    // Return the total time in milliseconds
    return hoursInMs + minutesInMs + secondsInMs;
  }

  //this code simply converts the given hours, minutes, and seconds to milliseconds and adds them up to get the total time in milliseconds since midnight
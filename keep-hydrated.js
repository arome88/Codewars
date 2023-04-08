/* Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value. */

function litres(time) {
  return Math.floor(time * 0.5);
}

/* this function takes the time in hours as input and returns the number of litres Nathan will drink, rounded down to the nearest integer. 
It does this by multiplying the time by 0.5 (since Nathan drinks 0.5 litres per hour) and then using the Math.floor() function to round down to the nearest integer. */
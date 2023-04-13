// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! 
//You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
        //This line defines a function named 'zeroFuel' using an arrow function expression
        //the function takes three parameters: 'distanceToPump', 'mpg', and 'fuelLeft' - these parameters represent the distance to the next fuel pump, the miles per gallon of the vehicle, & the amount of fuel left in the vehicle
    
        const distancePossible = mpg * fuelLeft
            //This line declares a constant variable named 'distancePossible' 
            //It calculates the maximum distance that the vehicle can travel with the amount of fuel left, assuming a constant miles-per-gallon rate -- it does this by multiplying the 'mpg' value by the 'fuelLeft' value
    return distancePossible >= distanceToPump
            //This line returns a boolean value indicating whether or not the vehicle can reach the next fuel pump -- it does this by comparing the 'distancePossible' value to the 'd'istanceToPump' value
            //if 'distancePossible' is greater than or equal to 'distanceToPump', then there is enough fuel to reach the next pump, so the function returns true otherwise, there is not enough fuel to reach the next pump, so the function returns false
  };

  //this function takes in 3 parameters representing the vehicle's current fuel state and the distance to the nxt fuel pump, calculates the maximum distance the vehicle can travel with the current fuel, and returns a boolean value indicating whether or not the vehicle can reach the next fuel pump with the current fuel.
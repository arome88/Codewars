/* Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array. */

function minMax(arr){
    var min = arr[0];
    var max = arr[0];
    // These two lines initialize 'min' and 'max' variables with the first element of the array.

        for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
        min = arr[i];
        } else if (arr[i] > max) {
        max = arr[i];
        }
    }   /* for loop that iterates through the elements of the array starting from the second element (i = 1). 
            Inside the loop, it checks if the current element is less than 'min' and if it is, then it updates the value of 'min' with the current element. 
            Similarly, if the current element is greater than 'max', then it updates the value of 'max' with the current element.*/

    return [min, max]; // the function returns an array containing the minimum and maximum values found in the array.
    }


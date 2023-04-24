// Write an algorithm that takes an array and moves all of the zeros to the end, 
//preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


    //The line below is the function signature that defines a new function called 'moveZeros' which takes an array 'arr' as input
    function moveZeros(arr) {

    //The nxt 2 lines create two empty arrays to hold the non-zero elements and the zeros, respectively
    //We will use these arrays to store the elements of 'arr' based on whether they are zero or non-zero
    const nonZeros = [];
    const zeros = [];

    //This is a 'for' loop that iterates over each element of the input array 'arr'
    for (let i = 0; i < arr.length; i++) {

    //Inside the loop, we check whether the current element is zero or non-zero. If it is zero, we append it to the zeros array. Otherwise, we append it to the nonZeros array.
    if (arr[i] === 0) {
    zeros.push(arr[i]);
    } else {
    nonZeros.push(arr[i]);
    }
    }

    //we combine 'nonZeros' and 'zeros' arrays, which effectively moves all the zeros to the end of the array while preserving the order of the other elements. We then return the concatenated array as the output of the function
    return nonZeros.concat(zeros);
    }
    
    console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // Output: [false, 1, 1, 2, 1, 3, "a", 0, 0]
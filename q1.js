/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
    if (isNaN(x) || isNaN(y)) {
        return(-1);
    } else {
        let z = 0;
            z = x;
            x = y;
            y = z;
            return console.log(x, y);
    }
};

// Task 2: Add code here
swap(4, "a");

module.exports = swap;

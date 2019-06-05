/*
    Challenge No. 1

    Write a function that takes a list/array of positive integers and returns 
    True if the list/array contains consecutive numbers, False if it doesn't.
    
    E.g:
    [1, 2, 3, 4] = True
    [2, 3, 5] = False
    [7, 8, 9] = True
    [5, 3, 2, 4] = True
 */
const userInput = process.argv.splice(2).map(e=>Number(e));

const containsConsecutiveNumbers = arr => {
    let tempBool = true;
    // Validation:
    // # Check if provided arg is an array
    if (!Array.isArray(arr) || arr.length === 0) tempBool= false;
    // # Check if all the elements in the array are numbers and positive
    arr.forEach(e => { if (e < 0 || isNaN(e)) tempBool= false; });

    // Sort the array
    arr.sort();
    arr.forEach((e, i) => {
        if ((arr[i + 1] - arr[i]) > 1) {
            tempBool = false;
        } 
    });
    return tempBool;
}
const x = containsConsecutiveNumbers(userInput);
console.log(x);
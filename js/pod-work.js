// Make a function named isPositive(number) that returns true if the provided input is a positive number. False for zero or any other number or data type.

function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isPositive(29));



// Make a function named isOdd(number) that returns true if the number is odd

function isOdd(number) {
    if (number % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isOdd(31));


 // Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.

function invertSign(number) {
    if (number > 0) {
        return -number;
    } else if (number < 0) {
        return Math.abs(number);
    } else {
        return false;
    }
}

console.log(invertSign(-100));

//=====================from Coding JS=====================================//
// Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front.

function frontTimes(str, n){
    return str.substring(0,3).repeat(n);
}

// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

function monkeyTrouble(aSmile, bSmile){
    if (aSmile === bSmile) {
        return true;
    } else {
        return false;
    }
}


// pod individual function work

//function work from -> https://the-winter.github.io/codingjs


//question: Given 2 ints, a and b, return true if one of them is 10 or if their sum is 10.


function makes10(a, b){
    var sum = a + b;
    if(a === 10 || b === 10){
        return true;
    }else if(sum === 10) {
        return true;
    }else{
        return false;
    }
}

console.log(makes10(5, 5));




// question: We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling.
// We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.




function monkeyTrouble(aSmile, bSmile){
    if (aSmile === true && bSmile === true || aSmile === false && bSmile === false){
        return true;
    }else {
        return false;
    }

}


// question: Given an int n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.

function diff21(n){
    if (n === 21){
        return 0;
    }else if (n > 21) {
        return (n - 21) * 2;
    }else {
        return 21 - n;
    }
}




// 52 Functions Practice from Ryan
//https://gist.github.com/ryanorsinger/65f6237ce3e1960d58622fa0f0fdffbb

// question: Write a function named invertSign(number) that returns a negative version of a postive number,
// a positve version of negative, and false for all else.

function invertSign(number) {
    if(number > 0){
        return -Math.abs(number);
    } else if (number < 0){
        return Math.abs(number);
    }else {
        return false;
    }
}

console.log(invertSign(-15));
console.log(invertSign(8));
console.log(invertSign());




// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have.
// Generate a random number between 1 up to and - including the number of sides.

var random = Math.floor(Math.random() * 6) + 1;


function rollDice(sides){
    return random;
}
console.log(rollDice(random));




// should return true if input is a number or numeric string
//should return false if input is a non numeric string

function isNumeric (input){
    if(isNaN(input) === true){
        return false;
    }else{
        return true;
    }
}

console.log(isNumeric("12"));





//Make a function named isEqual(input1, input2)
// that returns if both inputs have the same value.areEqual

//both inputs must be equal in value, but do not have to be equal in type


function isEqual(input1, input2) {
    if(input1 == input2){
        return true;
    } else {
        return false;
    }
}

console.log(isEqual(6, "6"));



//Make a function named isIdentical(input1, input2)
//that returns if both inputs are same value and data type.

//both inputs must be equal in value and type in order to return true

function isIdentical (input1, input2) {
    if (input1 === input2){
        return true;
    }else {
        return false;
    }
}

console.log(isIdentical("apple", "apple"));


//Make a function named not(input) returns the input with a flipped boolean

// return should equal either true or false
// return to be the opposite boolean

function not(input) {
    if (input === true || input === undefined){
        return false;
    }else{
        return true;
    }
}

console.log(not(NaN));


//Make a function named isOdd(number)
// that returns true if the number is odd

//need to return true or false

function isOdd (number) {
    if(number % 2 === 1) {
        return true;
    }else {
        return false;
    }
}

console.log(isOdd(2));

//Make a function named isEven(number)
// that returns true if the number is even or zero

// need to return true or false

function isEven (number){
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven("6"));

//Make a function named isPositive(number)
// that returns true if the provided input is a positive number.
// False for zero or any other number or data type.

// true or false return
// 0, and data types other than numbers = false


function isPositive (number) {

    if(typeof number === "string" || number === 0){
        return false;
    }else if(number > 0){
        return true;
    }
}

console.log(isPositive("12"));
// Task 0 (from last time) - Write a factorial using recursion

function factorial(num){
    if (num < 0){
        console.log(`Error: you can't factorialize numbers like ${num}`);
    }
    else if (num === 0){
        return 1;
    } 
    else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5)); // 120

// Task 1 - Write a script including statements for variable declaration and assignment that will calculate and print the sum of the integers from 1 to 10. Use the while statement to loop through the calculation and increment statements

let i = 1 // iterator
let s = 0 // summer

while (i <= 10){
    s=s+i;
    i++
}


console.log(s); // 55

// Task 2 - Both = 3

// let iter = 3 // iterator
// let summ = 3 // summer

// while (i <= 3){
//     summ /= iter;
//     --iter
// }

// console.log(summ);

// console.log((3 *= 3--));
// console.log(3 /= --3);

// Task 3 - Identify and correct the errors in each of the following segments of code

//// Answer a) - no closing curly brace [plus, personal preference for me is to space out the math operators i.e. '(c <= 5)']

//// Answer b) - should be either one '=' or three '===' there's curly braces missing around both the if and else statements, looked into it, and '.writeIn()' is a very weird choice if you're writing to an HTML doc, as HTML ignores the CR break. And are we assuming the variable 'gender' is being declared somewhere else? Otherwise this whole function's gonna do nothing.

// Task 4 - What is wrong? A lot of things. No variables are declared for either "z" or "sum", so function isn't gonna work. But even worse, even if those vars were declared, there's no iterator for that 'z', so this function will just crash the browser.

// Task 5 - Write a JS statement or set of statements to accomplish each of the following tasks

//// a) Find the sum of the even integers between 2 and 100. Use a for structure. [I'm actually gonna declare count to check my work]

let sum = 0

for (let count = 1; count <= 50; count++) {
    sum=sum+(count*2);
}

console.log(sum); // 2550

//// b) Calculate the value of 4.5 raised to the power of 4. Use the pow method.

console.log(Math.pow(4.5, 4)); // 410.0625 

//// c) Print the integers from 5 to 30 by using a while loop and the counter variable i. Print only five integers per line. 



const countFive = document.getElementById("countFive")

let newP = document.createElement('p')

let int = 5

while (int <= 25){
    if ((int % 5) === 0){
        document.body.innerHTML += `<p>${int}, ${(int + 1)}, ${(int + 2)}, ${(int + 3)}, ${(int + 4)}</p>`
    }  
    int++
}

//// d) repeat exercise (c) but with a for statement

let iterator = 5

for (iterator; iterator <= 25; iterator++) {
    if ((iterator % 5) === 0){
        document.body.innerHTML += `<p>${iterator}, ${(iterator + 1)}, ${(iterator + 2)}, ${(iterator + 3)}, ${(iterator + 4)}</p>`
    } 
}

// Task 6 - Find the error and explain how to correct

//// a) should be curly brace instead of semi colon

//// b) need a break after the first case and the second

//// c) need an escape clause (like n++) after the while, otherwise it'll loop forever

// Task 7 - Write a program in JS which loops the number from 1 till 100
// for all the numbers which are divisible by 3 write FIZZ
// for all the numbers which are divisible by 5 write BUZZ
// for all the numbers which are divisible by 3 and 5 write FIZZBUZZ

let no = 1

while (no <= 100){
    if ((no % 3) === 0){
        document.write(`${no} FIZZ </br>`)}{
    if ((no % 5) === 0)
        document.write(`${no} BUZZ </br>`)}
    if (((no % 5) === 0) && ((no % 3) === 0))
        document.write(`${no} FIZZBUZZ </br>`)
    no++
};

// Task 8 - Given a string of characters as input, write a function that returns it with the characters reversed.

let str = "String Cheese"

const stringArray = str.split("");

const arrayReverse = stringArray.reverse();

const arrayJoin = arrayReverse.join("");

console.log(arrayJoin);

// Task 9 - Research the difference between slice and splice

/* 

SLICE - a COPYING(but only shallow copying) array method that allows you to take a chunk out of an existing array, by specifying a "start" and/or "end" index for the new, derivative array. If you slice something that isn't there, it will return empty (i.e. "") slots


SPLICE - a MUTATING array method that allows you to say "starting at this index, I want to delete this any items, and replace them with these items" - you can also pass through a negative number as "start" to work your way backwards in splicing, deleteCount is optional (it will default to the number of items you specify)


*/
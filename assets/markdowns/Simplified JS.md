July 20, 2023:
Intro to JavaScript (JS)

Console

The console is a panel that dispays important messages, like errors, for developers. Much of the work the computer does with our code is invisible to us by default. If we want to see things appear on our screen, we can print, or log, to our console directly. 

The console keyword refers to an object, a collection of data and actions, that we cna use in our codes. Keywords are words that are built into the Javascript language, so the computer recognizes them and treats them specially. 

One action, or method, that is built into the console object is the .log() method. When we write console.log() what we put inside the parentheses will get printed or logged, to the console.

Comments

Comments can explain what the code is doing, leave instructions for developers using the code or add any other useful annotations. 
There are two types of code comments in JavaScript: 
1. A single line comment will comment out a single line and is denoted with two forward slashes // preceding it.

// Prints 5 to the console
console.log(5);

You can also use a single line comment to comment after a line of code:

console.log(5);  // Prints 5 

2. A multi-line comment will comment out multiple lines and is denoted with /* to begin the comment and */ to end the comment,

/*
This is all commented 
console.log(10);
None of this is going to run!
console.log(99);
*/

You can also use this syntax to comment something out in the middle of a line of code:

console.log(/*IGNORED!*/ 5);  // Still just prints 5 

Data Types
Data Types are the classifications we give to the different kinds of data that we use in programming. In JS, there are 7 fundamental data types:
- Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
- String: Any grouping of  characters on oyur keyboard surrounded by single quotes: '...' or double quotes: "...", though we prefer single quotes.
- Boolean: This data type only has two possible values -- either true or false without quotes. (for example, yes or no questions)
- Null: Represnts the intentional absence of a value, and represented by the keyword null without quotes.
- Undefined: This data type is denoted by the keyword undefined without quotes. It also represents the absence of a value though it has a different use than null. Undefined means that a give value does not exist.
- Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. 
- Object: Collections of related data.

console.log('Location of Codecademy headquarters: 575 Broadway, New York City');
console.log(40);

Our string isn't just a single word; it includes both capital and lowercase letters, spaces, and punctuation. 

Arithmetic Operators
An operator is a character that performs a task in our code. JavaScript has several built-in arithmetic operators, that allow us to perform mathematical calculations on numbers. These include the following operators and their corresponding symbols:

Add: +
Subtract: -
Multiply: *
Divide: /
Remainder: %
The first four work how you might guess:

console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3


July 25, 2023:


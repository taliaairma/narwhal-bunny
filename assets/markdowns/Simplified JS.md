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

String Concatenation

* Operators aren't just for numbers! 
When a + operator is used on two strings,, it appends the right string to the left string: 

console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')
// Prints 'I love to code.'

^ This process of appending one string to another is called concatenation. 

console.log('front ' + 'space'); 
// Prints 'front space'
console.log('back' + ' space'); 
// Prints 'back space'
console.log('no' + 'space'); 
// Prints 'nospace'
console.log('middle' + ' ' + 'space'); 
// Prints 'middle space'

console.log('One' + ', ' + 'two' + ', ' + 'three!'); 
// Prints 'One, two, three!'

Properties 

All data types have access to specific properties that are passed down to each instance. For example, every string instance has a property called length that stores the number of characters in that string. You can retrieve property information by appending the string with a period and the property name: 

console.log('Hello'.length); // Prints 5

The . is another operator! We call it the dot operator. 

Methods 

Methods are actions we can perform. Data types have access to specific methods that allow us to handle instances of that data type. 

Javascript provides a number of string methods.
We call or use, these methods by appending an instance with: 
- a period (the dot operator)
- the name of the method
- opening and closing parentheses

eg, 'example string'.methodName().

console.log('hello'.toUpperCase()); // Prints 'HELLO'

On the first line, the .toUpperCase() method is called on the string instance  'hello'. The result is logged to the console. THis method returns a string in all capital letters: 'HELLO'.

console.log('Hey'.startsWith('H')); // Prints true

On the second line, the .startsWith() method is called on the string instane 'Hey'. This method also accepts the character 'H' as an input, or argument, between the parentheses. Since the string 'Hey' does start with the letter 'H', the method reutrns the boolean true.

Built-in Objects 

There are other objects built into JavaScript. For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.

* The great thing about objects is taht they have methods! 

console.log(Math.random()); // Prints a random number between 0 and 1
In the example above, we called the .random() method by appending the object name with the dot operator, the name of the method, and opening and closing parentheses. This method retuens a random number between 0 (inclusive) and 1 (exclusive).

To generate a random number between 0 and 50, we could multiply this result by 50 like so: 
Math.random() * 50;

Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round down a random number like this: 
Math.floor(Math.random() * 50);

In this case: 
1. Math.random() generates a random number between 0 and 1. 
2. We then multiply that number by 50, so now we have a number between 0 and 50.
3. Then Math.floor() rounds the number down to the nearest whole number. 

* If you wanted to see the number printed to the terminal, you would still need to use a console.log() statement: 
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50

Variables 

A variable is a container for a  value. Variables are like little containers for information that live in a computer's memory. Information stored in variables, such as a username, account number, or even personalized greeting can then be found in memory. 

Variables also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves. 

There are only a few things you can do with variables: 
1. Create a variable with a descriptive name. 
2. Store or update information stored in a variable.
3. Reference or "get" information stored in a variable.

* It is important to distinguish that variables are not values; they contain values and represent them with a names. Observe the diagram with a the colored boxes. Each box represents variables; the values are represented by the content, and the name is represented with the label. 

<img src="https://content.codecademy.com/courses/learn-javascript-variables/variable%20boxes.svg" alt="variables">

Create a Variable: var

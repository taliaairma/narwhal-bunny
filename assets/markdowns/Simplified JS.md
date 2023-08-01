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

var myName = 'Arya';
console.log(myName);
// Output: Arya

1. var, short for variable, is a JavaScript keyword that creates, or declares, a new variable.
2. myName is the variable's name. Capitalizing in this way is a standara convention in JavaScript called camel casing. 
>> In camel casing you group words into one, the first word is lowercase, then every word that follows will have its first letter uppercased (e.g., camelCaseEverything)
3. = is the assignment operator. It assigns the value ('Arya') to the variable (myName).
4. 'Arya' is the value assigned (=) to the variable myName.. You can also say that the myName variable is initialized with a value of 'Arya'.
5. After the variable is declared, the string value 'Arya' is printed to the console by referencing the variable name: console.log(myName).

There are a few general rules for naming variables: 
- Variable names cannot start with numbers. 
- Variable names are case sensitive, so myName and myname would be different variable.
>> It is bad practice to create two variable that have the same name using different cases.
- Variable names cannot be the same as keywords.

Variable: let

The let keyword signals that the variable can be reassigned a different value.

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

Another concept that we should be aware of when using let (and even var) is that we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined: 

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

* In the example above: 
- If we don't assign a value to a variable declared using the let keyword, it automatically has a value of undefinded. 
- We can reassign the value of the variable. 

Variable: const

Just like with var and let you can store any value in a const variable. The way you declare a const variable and assign a value to it follows the same structure as let and var. 

const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

However, a const variable cannot be reassigned becuase it is a constant. If you try to reassign a const variable, you'll get a TypeError.

Constant variables muse be assigned a value when declared. If you try to declare a const variable without a value, you'll get a SyntaxError.

If you're trying to decide between which keyword to use, let or const, think about whether you'll need to reassign the variable later on. If you do need to reassign the variable use let, otherwise, use const.

Mathematical Assignment Operators 

let w = 4;
w = w + 1;
 
console.log(w); // Output: 5

In the example above, we created the variable w with the number 4 assigned to it. The following line, w = w + 1, increases the value of w from 4 to 5.

Another way we could have reassigned w after performing some mathematical operations on it is to use built-in mathematical assignment operators. We could re-write the code above to be: 

let w = 4;
w += 1;
 
console.log(w); // Output: 5

In the second example above, we used the += assignment operator to reassign w. We're performing the mathematical operation of the first operator + using the number to the right, then reassigning w with the computed value. 

We also have access to other mathmatical assignment operators: -=. *=, and /= which work in a similar fashion. 

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
 
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
 
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

The Increment and Decrement Operator

The increment operator (++) and decrement operator (--).

The increment operator will increase the  value of the variable by 1. The decrement operator will decrease the value of the variable by 1. 

let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19

String Concatenation with Variables 

The + operator can be used to combine two string values even if those vales are being stored in variables: 

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

In the example above, we assigned the value 'armadillo' to the myPet variable. On the second line, the + operator is used to combine three strings: 'I own a pet', the value saved to myPet, and '.'. We log the result of this concatenation to the console as: I own a pet armadillo. 

String Interpolation
August 1, 2023

We can insert, or interpolate vairables into strings using template literals. 

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

- a template literal is wrapped by backticks ` (this key is usually located on the top of your keyboard, left of the 1 key
).
- Inside the template literal, you'll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal. 
- When we interpolate `I own a pet ${myPet}.`, the output we print is the string:  'I own a pet armadillo.'

* Using template literal, you can more easily tell what the new string will be. You also don't have to worry about escaping double quotes or single quotes.

typeof Operator

It can be useful to keep track of the data types of the variables in your program. If you need to check the data type of a variable's value, you can use the typeof operator. 

The typeof operator checks the value to its right and returns, or passes back, a string of the data type. 

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

Since the value unknown1 is 'foo', a string, typeof unknow1 will return 'string'.

Conditional Statements

Think of an everyday decision as mundane as falling asleep - if we are tired, we got to bed, otherwise, we wake up and start our day. 

These if-else decisions can be modeled in code by creating conditional statements. A conditional statement checks a specific condition(s) and performs a task based on the condition(s). 

Will be covering: 
- if, else if, and else statements
- comparison operators
- logical operators
- truthy vs falsy values
- ternary operators
- switch statements

<img src='https://content.codecademy.com/courses/learn-javascript-conditionals/control_flow_diagram_v5.svg' alt='conditions'>

If Statements

In programming, we can perform a task based on a condition using an if statement: 

if (true) {
  console.log('This message will print!'); 
}
// Prints: This message will print!

The if statment is composed of:
- The if keyword folloed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces{}.
- Inside the parenteses(), a condition is provided that evaluates to true or false.
- If the condition evaluates to true, the code inside the curly braces {} runs, or executes. 
- If the condition evaluates to false, the block won't execute. 






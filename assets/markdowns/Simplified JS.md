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

If...Else Statements

In many cases, we'll have a code we want to run if our condition evaluates to false. 

If we wanted to add some default behavior to the if statement, we can add an else statement to run a block of code when the codition evaluates to false. 

if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
 
// Prints: But the code in this block will!

An else statement must be paired with an if statement, and together they are referred to as an if...else statement.

- Uses the else keyword following the code block of an if statement. 
- Has a code block that is wrapped by a set of curly braces {}.
- The code inside the else statement code block will execute when the if statement's condition evaluates to  false. 

if...else statements allow us to automate solutions to yes-or-no questions, also known as binary decisions. 

Comparison Operators 

Sometimes we need to use different types of operators to compare values. 

A list of some handy comparison operators and their syntax: 
- less than: <
- great than: >
- less than or equal to: <=
- greater than : >=
- is equal to: ===
- is not equal to : !==

10 < 12 // Evaluates to true

It can be helpful to think of comparison statements as questions. When the answer is "yes", the statement evaluates to true, and when the answer is "no", the statement evaluates to false. The code above would be asking: is 10 less than 12? Yes! So 10 < 12 evaluates to true.

'apples' === 'oranges' // false

We're using the identity operator (===) to check if the string 'apples' is the same as the string 'oranges'. Since the two strings are not the same, the comparison statement evaluates to false. 

All comparison statements evaluate to either true or false and are made up of: 
- Two values that will be compared.
- An operator that separates the values and compares them accordingly (<,>, <=, >=, ===, !==)

Logical Operators

Working with conditionals means that we will be using booleans, true or false values. There are operatoes that work with boolean values known as logical operators. We can use logical operators  to add more sophisticated logic to our conditionals. There are three logical operators: 
- the and operator (&&)
- the or operator (||)
- the not operator, otherwise known as the bang operator (!)

When we use the && operator, we are checking that two things are true: 
if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

When using the && operator, both conditions must evaluate to true for the entire condition to evaluate to true and execute. Otherwise, if either condition is false, the && condition will evaluate to false and the else block will execute. 

If we only care about either condition being true, we can use the || operator: 
if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}

When using the || operator, only one of the conditions must evaluate to true for the overall statement to evaluate to true. If either day === 'Saturday' or day === 'Sunday' evaluates to true the if's condition will evaluate to true and its code block will execute. If the first condition in an || statement evaluates to true, the second condition won't even be checked. Only if day === 'Saturday' evaluates to false will day === 'Sunday' be evaluated. The code in the else statement above will execute only if both comparison evaluate to false. 

The ! not operator reverses, or negates, the value of a boolean:
let excited = true;
console.log(!excited); // Prints false
 
let sleepy = false;
console.log(!sleepy); // Prints true

Essentially, the ! operator will either take a true value and pass back false, or it will take a false value and pass back true. 

Logical operators are often used in conditional Statements to add another layer of logic to our code. 

Truthy and Falsy

Sometimes, you'll want to check if a variable exists and you won't necessarily want it to equal a specific value - you'll only check to see if the variable has been assigned a value. 

let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

The code block in the if statement will run because myVariable has a truthy value; even though the value of myVariable is not explicitly the value true, when used in a boolean or conditional contect, it evaluate to true because it has been assigned a non-falsy value. 

So which values are falsy- or evaluate to false when checked as a condition? The list of falsy values includes: 
- 0
- Empty strings like "" or ''
- null which represent when there is no value at all. 
- undefined which represent when a declared variable lacks a value
- NaN, or Not a Number 

let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}
 
// Prints 'No apples left!'

The condition evaluates to false because the value of the numberOfApples is 0. Since 0 is falsy value, the code block in the else statement will run. 

Truthy and Falsy Assignment

Truthy and falsy evaluations open a world of short-hand possibilities! 

Sometimes, the user does not have an account, making the username variable falsy. The code below checks if username is defined and assigns a default string if it is not: 

let username = '';
let defaultName;
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Prints: Stranger

If you combine your knowledge of logical operators you can use a short-hand for the code above. In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment: 

let username = '';
let defaultName = username || 'Stranger';
 
console.log(defaultName); // Prints: Stranger

Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username if it is truthy, and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to as short-circuit evaluation. 

Ternary Operator

We can use ternary operator to simplify an if...else statement. 

let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

We can use ternary operator to perform the same functionality: 
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

- The condition, isNightTime, is providied before the ?.
- Two expressions follow the ? and are separated by a colon :.
- If the condition evaluates to true, the first expression executes.
- If the condition evaluates to false, the second expression executes. 

Like if...else statements, ternary operators can be used for conditions which evaluate to true or false. 

Else If Statements

The else if statements always comes after the if statement and before the else statement. The else if statement also takes condition. 

let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

The else if statements allow you to have multiple possible outcomes. if/else if/else statements are read from top to bottom , so the first condition that evaluate to true from the top to bottom is the block that gets executed. 

In the example above, since stopLight === 'red' evaluates to false and stopLight === 'yellow' evaluates to true, the code inside the first else if statement is executed. The rest of the conditions are not evaluated. If none of the conditions evaluated to true, then the code in the else statement would have executed. 

The switch keyword 

else if statements are a great tool if we need to check multiple conditions. In programming, we often find ourselves needing to check multiple values an handling each of the differently. 

let groceryItem = 'papaya';
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

We have a series of conditions checking for a value that matches a groceryItem variable. Our code workds fine, but imagine if we needed to check 100 different values! Having to write that many else if statements sounds like a pain! 

A switch statement provides an alternative syntax that is easier to read and write. 

let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 
// Prints 'Papayas are $1.29'

- The switch keyword initiates the statement and is followed by (...), which contains the value that each case will compare. In the example, the value or expression of the switch statement is groceryItem. 

- Inside the block, {...}, there are multiple cases. The case keyword checks if the expressione matches the specified value that comes after it. The values following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that case's console.log() would run. 

- The value of groceryItem is 'papaya', so the third case runs -- Papayas are $1.29 is logged to the console. 

- The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. 
* Without break keywords, the first matching case will run, but so will every subsequent case regardless of wehter or not it matches- including the default. This behaviour is different from if/else conditional statements that execute only one block of code. 

- At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run. 

August 8th, 2023: 

Functions: What are Functions? 

There's sequence of steps to calculate the correct answer: 
1. Measure the width of the rectangle.
2. Measure the height of the rectangle. 
3. Multiply the width and height of the rectangle.

* With practice, you can calculate the area of the rectangle without being instructed with these three steps every time.

We can calculate the area of one rectangle with the following code: 
const width = 10;
const height = 6;
const area =  width * height;
console.log(area);  
<!-- Output: 60 -->

Imagine being asked to calculate the area of three different rectangles: 

// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;
 
// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;
 
// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 =  width3 * height3;

Instead of rewriting the same code, we can group a block of code together and associate it with one task, then we can reuse that block of code together and associate it with one task, then we can reuise that block of code whenever we need to perform the task again. 

A functions is a reusable block of code that groups together a sequence of statements to perform a specific task. 

Function Declarations

One of the ways to create a function is by using a function declaration. 

A function declaration binds a function to a name, or an identifier. 

<img src="https://content.codecademy.com/courses/learn-javascript-functions/Diagram/declaration.svg" alt="function declaration"/>

It consists of: 
- The function keyword.
- THe name of the function, or its identifier, followed by parentheses. 
- A function body, or the block of statements required to perform a specific task, enclosed in the funciton's curly brackets.

* should also be aware of the hoisting feature in Javascript which allows access to function declarations before they're defined. 

hoisting example: 

greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}

Notice, how hositing allowed greetWorld() to be called before the greetWorld() function was defined! Since hoisting isn't considered good practice, we simply want you to be aware of this feature. 

Calling a Function

To call a function in your code, you type the funciton name followed by parentheses. 

This function call executes the function body, or all of the statements between the curly braces in the function declaration. 

1. function sayThanks() {
        console.log('Thank you for your purchase! We appreciate your business.')
}

2. sayThanks();
3. // Thank you for your purchase! We appreciate your business! 

Parameters and Arguments 

Some functions can take inputs an use the inputs to perform a task. When declaring a function, we can specify its parameters. 

Parametes allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called. 

function calculateArea(width,height)  {
    console.log(width * height);
}
<!-- (widht, height) parameters -->
<!-- (width * height) parametes are treated like variables within a function -->

In the example above, calculateArea(), computes the area of a rectangle, based on two inputs, width and height. The parameters are specified between the parenthesis as width and height, and inside the function body, they act just like regular variables. 

Width and height act a placeholders for values that will be multipled together. 

When calling a function that has parameters, we specify the values in the parentheses that follow the function name. THe values that are passed to the function when it is called, arguments. 

Arguments can be passed to the function as values or variables. 

calculateArea(10, 6);
<!-- calculateArea = identifier; (10, 6) = arguments as values -->

* The order in which arguments are passed and assigned follows the order that the parameters are declared. 

The variables rectWidth and rectHeight are initialized with the values for the height and width of a rectangle before being used in the function call. 

By using parameters, calculateArea() can be reused to compute the area of any rectangle! 

Default Parameters

Default parameters allow parameters to have a predetermined value in case there is no argument passed into the functions or if the argument is undefined when called. 

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

- In the example above, we used the = operator to assign the parameter name a default value of 'stranger'. This is useful to have in case we ever want to include a non-personalized default greeting! 
- When the code calls greeting('Nick') the value of the argument is passed in and, 'Nick', will override the default parameter of 'stranger' to log 'Hello, Nick!' to the console. 
- When there isn't an argument passed into greeting(),  the default value of 'stranger' is used, and 'Hello, stranger!' is logged to the console. 

August 10th, 2023: 

Return

When a function is called, the computer will run through the fucntion's code and evaluate the results of calling the function. By default that resulting value is undefined. 

function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined

To pass back information from the function call, we use a return statement. To create a return statement, we  use the return keyword followed by the value that we wish to return. If a value is omitted,a undefined is returned instead. 

When a return statement is used in a function body, the execution of the function is stopped and the code that follows it will not be executed. 

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}

If an argument for width or height is less than 0, then rectangleArea() will return 'You need positive integers to calculate area!'. The second return statment width * height will not run. 

The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use. 

Helper Functions
 
 These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary. 

 if we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions: 

 function multiplyByNineFifths(number) {
    return number * (9/5);
 };

 function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
 };

 getFahrenheit(15);
 <!-- // Returns 59 -->

 In the example above: 

 - getFahrenheit() is called and 15 is passed as an argument. 
 - The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument. 
 - multiplyByNineFifths takes the argument of 15 for the number parameter. 
 - the code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27. 
 - 27 is returned back to the function call in getFahrenheit().
 - getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59. 
 - 59 is returned back to the function call getFahrenheit(15).

Function Expressions

Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expressions is often stored in a variable in order to refer to it. 

Consider the following function expression: 
const calculateArea = function(width, height) {
    const area = width * height;
    return area;
};

To declare a function expression: 
1. Declare a variable to make the variable's name be the name or identifier, of your function. Since the release of ES6, it is common prectice to use const as the keyword to declare the variable. 
2. Assign as that variable's value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then set of curly braces that contain the function body. 

To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses exclosing any arguments being passed into the function. 

variableName(argument1, argument2)

Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined. 

Arrow Functions 

A shorter way to write function by using the special "fat arrow" () => notation. 

Arrow functions remove the need to type our the keyword function every time you need to creat a function. Instead you first include the parameters inside the () and then add an arrow => that  points to the function body surrounded in { }: 

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

* It's important to be familiar with the multiple ways of writing functions becuase you will come across each of these when reading other JavaScript code. 


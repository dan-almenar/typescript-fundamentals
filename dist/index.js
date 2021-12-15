"use strict";
const firstName = 'Dan';
const lastName = 'Almenar';
let age = 42;
let learningTypeScript = true;
let anything = 'dog';
anything = 12;
anything = false;
anything = [1, 2, 3, 3.14159, 'yes', false];
console.log(`${firstName} ${lastName} is ${age} years old\nIs he learning TypeScript? ${learningTypeScript}`);
console.log(`anything: ${anything}`);
let alreadyInside;
let numbersArray = [1, 2, 3, 4, 5];
numbersArray.push(6);
let anyArray = ['yes', 1, 3.14, false, [0, 1, 2]];
console.log('numbersArray:', numbersArray);
console.log('anyArray', anyArray);
let randomTupple = ['hello', 1, true];
console.log('randomTupple:', randomTupple);
randomTupple.push('world');
randomTupple[0] = 'Dan';
console.log('updated randomTupple:', randomTupple);
let tuppleArray = [['hello', 1, true], ['world', 2, false]];
console.log('tuppleArray:', tuppleArray);
let randomUnion = 'hello';
console.log('randomUnion first value:', randomUnion);
randomUnion = 46;
console.log('updated randomUnion:', randomUnion);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Black"] = 1] = "Black";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["White"] = 3] = "White";
    Color[Color["Green"] = 4] = "Green";
})(Color || (Color = {}));
console.log('Color.Red:', Color.Red);
console.log('Color.Black:', Color.Black);
var RandomEnum;
(function (RandomEnum) {
    RandomEnum["randomString"] = "randomString";
    RandomEnum["fullName"] = "Dan Almenar";
    RandomEnum["offspring"] = "Paula y Vicente";
    RandomEnum[RandomEnum["age"] = 42] = "age";
})(RandomEnum || (RandomEnum = {}));
console.log('RandomEnum:', RandomEnum);
const person = {
    firstName: 'Dan',
    lastName: 'Almenar',
    age: 42
};
let firstPoint = 1;
let secondPoint = 'hello';
console.log('Point object examples (number and string):', firstPoint, secondPoint);
const danDeveloper = {
    firstName: 'Dan',
    lastName: 'Almenar',
    age: 42
};
console.log('person:', person);
console.log('danDeveloper  object:', danDeveloper);
let randomVariable = '3.1416';
let piNumber1 = randomVariable;
let piNumber2 = randomVariable;
console.log('piNumber1:', piNumber1);
console.log('piNumber2:', piNumber2);
console.log('types:', typeof (piNumber1), typeof (piNumber2));
function addNumbers(num1, num2) {
    return num1 + num2;
}
function addToString(num1, num2) {
    return `The result is: ${(num1 + num2)}`;
}
function log(message) {
    console.log(message);
}
console.log(addNumbers(4, 3));
console.log(addToString(4, 3));
log("hello world");
const newUser = {
    firstName: 'Dan',
    lastName: 'Almenar',
    age: 42
};
console.log('newUser (PersonInterface) .firstName:', newUser.firstName);
console.log('newUser.hobbies (not declared):', newUser.hobbies);
newUser.lastName = 'Developer';
newUser.hobbies = ['programming', 'playing with his kids'];
const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;

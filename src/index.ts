/*
tsc --init will create the tsconfig.json file, where you can
set the compiler options, such as source and distribution folders
(here src and dist). Remove comments was also set to true, so comments
in the ts file won't be compiled into the js file.

tsc --watch will check for changes in the source files and
recompile them when necessary.
*/

// VARIABLES
const firstName: string = 'Dan'
const lastName: string = 'Almenar'
let age: number = 42
let learningTypeScript: boolean = true

/*
Type 'any' accepts any type and variables set as
any can be reassigned to any type.
*/

let anything: any = 'dog'
anything = 12
anything = false
anything = [1, 2, 3, 3.14159, 'yes', false]

console.log(`${firstName} ${lastName} is ${age} years old\nIs he learning TypeScript? ${learningTypeScript}`)
console.log(`anything: ${anything}`)

/*
Variables can be initialized without any explicit value
*/
let alreadyInside: boolean

/*
On arrays, once the type is set, all its elements must be of the said type.
Use any if the array holds elements of different types.

You may also use TUPPLES to declare an array with elements of different types, by specifying each element's type.
Tupples compile into regular arrays, so you can modify them and even push new elements into a tupple, yet the specified typed elements should be of the specified type.
*/
let numbersArray: number[] = [1, 2, 3, 4, 5]
numbersArray.push(6)

let anyArray: any[] = ['yes', 1, 3.14, false, [0, 1, 2]]

console.log('numbersArray:', numbersArray)
console.log('anyArray', anyArray)

let randomTupple: [string, number, boolean] = ['hello', 1, true]
console.log('randomTupple:', randomTupple)
randomTupple.push('world')
randomTupple[0] = 'Dan' // could only be a string.
console.log('updated randomTupple:', randomTupple)

let tuppleArray: [string, number, boolean][] = [['hello', 1, true], ['world', 2, false]]
console.log('tuppleArray:', tuppleArray)

// UNIONS
/*
Unions allow a variable to hold multiple types.
*/
let randomUnion: string | number = 'hello'
console.log('randomUnion first value:', randomUnion)
randomUnion = 46
console.log('updated randomUnion:', randomUnion)

// ENUMS
/*
Enums allow you to define a set of named constants (thus, cannot be reassigned).
It compiles into a JavaScript object.
*/
enum Color {
    Red,
    Black,
    Blue,
    White,
    Green
}
console.log('Color.Red:', Color.Red) // defaults to 0 (and upwards)
console.log('Color.Black:', Color.Black)

enum RandomEnum {
    randomString = 'randomString',
    fullName = 'Dan Almenar',
    offspring = 'Paula y Vicente',
    age = 42,
}
console.log('RandomEnum:', RandomEnum)

// OBJECTS
/*
Objects can be declared with typed properties or as a type itself
and then created a variable of said type:
*/

// first approach:
const person: {
    firstName: string,
    lastName: string,
    age: number
} = {
    firstName: 'Dan',
    lastName: 'Almenar',
    age: 42
}

// second way:
type Person = {
    firstName: string | number, // properties types accept unions
    lastName: string,
    age: number
}

// The type object accepts unions:
type Point = number | string
let firstPoint: Point = 1
let secondPoint: Point = 'hello'
console.log('Point object examples (number and string):', firstPoint, secondPoint)

const danDeveloper: Person = {
    firstName: 'Dan',
    lastName: 'Almenar',
    age: 42
}

console.log('person:', person)
console.log('danDeveloper  object:', danDeveloper)

// TYPE ASSERTION
/*
Type Assertions are a way to force a variable to be of a certain type
when it has been initialy declared as type any.
It can be done in two ways.
However, the type of the asserted variable will be the same as the
type of the variable being asserted (string => string) at compilation.
*/
let randomVariable: any = '3.1416'
let piNumber1 = <number>randomVariable // type assertion
let piNumber2 = randomVariable as number // type assertion

console.log('piNumber1:', piNumber1)
console.log('piNumber2:', piNumber2)
console.log('types:', typeof(piNumber1), typeof(piNumber2))

// FUNCTIONS
/*
On Functions, you can declare a function with parameters types aswell
as the return type. If left undeclared defaults to type any.
The void type can be use as a result type for functions that
returns nothing.
*/
function addNumbers(num1: number, num2: number): number {
    return num1 + num2
}

function addToString(num1: number, num2: number): string {
    return `The result is: ${(num1 + num2)}`
}

function log(message: string | number): void {
    console.log(message)
}

console.log(addNumbers(4, 3))
console.log(addToString(4, 3))
log("hello world")

// INTERFACES
/*
Interfaces operate as the object type, yet they don't accept
unions.
readonly properties value cannot be changed
optional properties are declared with a ?

Interface can be use to declare functions, classes, and objects.
*/
interface PersonInterface {
    readonly firstName: string | number, // properties types accept unions
    lastName: string,
    age: number
    hobbies?: string[] // optional property
}

// can't do: interface PointInterface = number | string

const newUser: PersonInterface = {
    firstName: 'Dan',
    lastName: 'Almenar',
    age: 42
}
// optional property hobbies was left undeclared so it defaults to undefined

console.log('newUser (PersonInterface) .firstName:', newUser.firstName)
console.log('newUser.hobbies (not declared):', newUser.hobbies)

// properties that are not readonly can be changed:
newUser.lastName = 'Developer'
newUser.hobbies = ['programming', 'playing with his kids']

interface MathFunc {
    (num1: number, num2: number): number
}

const add: MathFunc = (num1: number, num2: number): number => num1 + num2
const substract: MathFunc = (num1: number, num2: number): number => num1 - num2

// any function that accepts and return the same types as the interface
// are part of said interface

// CLASES
/*
Classes are a way to create objects with properties and methods.
Types for properties and constructor should be declared.
- private properties are only accesible through the class itself.
- protected properties cannot be changed after instantiation.
*/
class Student {
    protected firstName: string
    lastName: string
    grades?: number[]

    constructor(firstName: string, lastName: string, grades?: number[]) {
        this.firstName = firstName,
        this.lastName = lastName
        this.grades = grades
    }
    // methods
    average(): string {
        let avg: number = 0
        if(this.grades){
            for (let i = 0; i < this.grades.length; i++){
                avg += this.grades[i]
            }
            return `The grades average for ${this.firstName} is: ${avg / this.grades.length}`
        } else {
            return `${this.firstName} has no grades record yet.`
        }
    }
}

const dan = new Student('Dan', 'Almenar')
console.log('Dan object from class Student:', dan)
dan.grades = [78, 83, 100, 90, 77]
console.log('updated dan with grades:', dan)
console.log(dan.average())

const johnDoe = new Student('John', 'Doe')
console.log(johnDoe.average())

// classes implementing interfaces
interface StudentInterface {
    firstName: string
    lastName: string
    grades?: number[]
    average(): string
}

class StudentWithInterface implements StudentInterface {
    firstName: string
    lastName: string
    grades?: number[]

    constructor(firstName: string, lastName: string, grades?: number[]){
        this.firstName = firstName,
        this.lastName = lastName,
        this.grades = grades ? grades : []
    }

    average(): string {
        return `This is just an example of ${this.firstName}'s average.\nYou may implement a more elaborated logic to this.`
    }
}

const janeDoe = new StudentWithInterface('Jane', 'Doe', [66, 73, 88, 92, 80])
console.log(janeDoe.average())

// extended classes
class ForeignStudent extends Student {
    countryOfOrigin: string

    constructor(firstName: string, lastName: string, countryOfOrigin: string, grades?: number[]){ //optional parameters must be declared after the required ones
        super(firstName, lastName, grades ? grades : []) // ternary operators for optional parameters
        this.countryOfOrigin = countryOfOrigin
    }
}

const nayamoto = new ForeignStudent('Nadira', 'Nayamoto', 'Japan', [90, 100, 100, 100, 100])
console.log(nayamoto.average())


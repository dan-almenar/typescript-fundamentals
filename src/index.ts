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

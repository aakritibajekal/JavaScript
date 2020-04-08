let  testString = 'Hello, World!';

/*
* .toUpperCase() makes things uppercase
*/
console.log(testString.toUpperCase());

/*
*Lower Case .toLowerCase()
*/

console.log( testString.toLowerCase() );

/*
* .includes() lets you check to see the substring inside of a string
*/

console.log( testString.includes(',') ); //True! There is a comma in our string

console.log(testString.includes('dog') ); //Fales! there is no dog!

/*
* .slice(s, e)
*---->s: beginning letter
*---->e: ending letter
*/

console.log(testString.slice( 1, 5) ); // "ello" returned. A slice of Hello, World! from index character 1 to 5.

// .replace( needle, newtext ) replaces parts of your string, with a new substring
// needle: target substring
// newtext: new string, you's like to replace with

console.log(testString.replace('l', 'y') ); //'Heylo', World!Note: only replcaed with the first instance! We need to use the global flag if we want to replace every L or whatever your target is 

console.log(testString.replace( /l/g, 'y') );
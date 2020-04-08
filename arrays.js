const animals = [ 'dog', 'cat', 'lizard', 'bird', 'turtle' ];

// .length is a property of the array objects; JS adds this in for us.
console.log( 'Your array is: ' + animals.length + 'items long.');

// .push() adds a value to the end of an array.
animals.push('tardigrade');

console.log( animals );

console.log( 'Your array is: ' + animals.length + 'items long.'); // to check difference

/*
* .splice(i, n, e) can be used to insert new values in specific indexes.
* --->i: the array index position to insert into.
* ---> n: the number of elements (if any) we'd like to overwrite.
* ---> e: The element we're adding to the array
*/

animals.splice(3, 1, 'hedgehog'); //replace bird with hedgehog
console.log(animals);

animals.splice( 3, 0, 'bird'); //no overwriting
console.log(animals);

animals.splice( 0, 2 );
console.log(animals); //deleting first two elements as there is no new element in the function

animals.splice( 0, 0, 'octopus' ); //Add octopus to the beginning of the array (index 0); no replacements
console.log(animals);

/*
*
*.pop() removes the last element of array
*/

const lastElement = animals.pop();
console.log( 'Last element was: '+lastElement );
console.log( animals );

/*
* Others way to manipulate
*/
console.log( animals[1] ); //Get second animal in array (arrays start at zero!)

animals[1] = 'dolphin'; //Reassign value for second animal in array'
console.log(animals);

/*
* .contact() Combining arrays.
*/

const moreAnimals = [
'wolf',
'deer',
'buffalo',
'caribou'
];
const allAnimals = animals.concat( moreAnimals ); //Combines our original array ("animals") and our new array ("moreAnimals")
console.log(allAnimals);
//alert( 'Hello, World!' ); Shows an alert pop up!

var myVar = 'Hello'; /* If we use VAR to declare a variable it can be used anywhere in the program after it is declared "Global Scope"
* If declared in function this variable will instead be kept in function scope
* In recent years it is considered bad practise unless you absolutely need it.
*/
let myVar2 = 'World';
/*
*If we use LET to declare a variable - It can be used anywhere within the declared Block "{}" only. including functions.
*/
const myVar3 = 'Yay!';
/*
* Like LET but one important difference.
* Can be only used to assign one time.
*/
/*
*Conatenation Operator (+)
* If a string is on either side of a plus ot will concatenate; integers will add up
*/
const concatenatedString = myVar + myVar2;
console.log( concatenatedString ); // console is an object, with a method called "log".

// Thar be dragons.
const additionalOrConcatenation = 30 + 5 + '6' + 7;
console.log(additionalOrConcatenation); // 3567

/*
* Functions
*---> Declared with the function keyword (like PHP)
*---> They can also still accept parameters
*---> A return can be used to pass back value
*/

//function myFunction ( myString, myNum ) {
	//const result = myString + myNum; // Note: result is inside Function scope of myFunction scope of myFunction's Curly Braces {}
	//return result;
//}

const myFunction2 = (myString, myNum ) => {
	const result = myString + myNum;
	return result;
}

//Result is global because out of {}
const result = myFunction2( 'HI!', 56 );
console.log(result);

const myArrowFunc = param => 'ARGUMENT PASSED WAS: ' + param;

/*
*Loops
*/
//Declaration; Condition; Iteration
for ( let i = 0; i<10; i++ ) {
	console.log(i)
}
// Condition
let myCondVar = 5;
while ( myCondVar > -5 ) {
	console.log( myCondVar );
	myCondVar--;
}

//Data Types
'string'; //characters
3; //integer
5.67; //float
//Boolean
true;
false;
//Array
const myArray = ['string', 5, 3.14, true, false, null, undefined ];
console.log( myArray );
//Null
null;
//Undefine
undefined;
//Object (Follows basic JSON formatting, but also allows methods.)
const myObject = {
	property: "value",
	methodName: function () {
		return 'test';
	}
}
//const cannot be modified, but a property in the const can
	myObject.property = 'new value';
	console.log(myObject.property);

/*
*ES6 For ... of loop
*--> ES6 means ECMAScript 2015 edition; a specific specification/version of JavaScript
*Arrow functions, LET, and Const were added in that specification.
*/
	// Assignable placeholder of iterable value (object or array)
	for ( let currVal of myArray ) {
		console.log( currVal )
	}



























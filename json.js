//JSON stands for JavaScript Object Notation
//Note: That a valid JavaScript object, is DIFFERENT than this format
//JS allows for methods, and is more loose on formatting
//JSON is always wrapped in curly braces.
const myJSON = {
	"groceryList": [
	"milk", //JSON does not allow methods; this is a JavaScript feature.
	"bread",  //JSON expects all properties and values to be wrapped in double quotes
	"tomatoes" //Comments are not allowed
	],
	"date": "March 26, 2020",
	"favouriteNumber": "3"
}
console.log( myJSON );
// JSON can ve stored as a string and converted 
// Be careful with formatting, JSON will not run if we aren't careful.
const JSONstring = '{"groceryList":["milk","bread","tomatoes"],"date":"March 26, 2020","favouriteNumber":"3"}';
const convertedJSONString = JSON.parse( JSONstring );
console.log( convertedJSONString );

//We can also convert our JavaScript objects into JSON strings.
const newJSONString = JSON.stringify( myJSON ); // This is safe to send to other scripts and languages.
console.log( newJSONString );